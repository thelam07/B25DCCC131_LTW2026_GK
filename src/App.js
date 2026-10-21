const BUILD_TAG = "zr-5093";
/* eslint-disable import/first */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetail from "./pages/TaskDetail";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("gk_tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    axios
      .get("/data/tasks.json", { signal: controller.signal })
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError("Không tải được dữ liệu");
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem("gk_tasks", JSON.stringify(tasks));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, loading]);

  const addTask = (task) => {
    const newId = tasks.reduce((max, { id }) => Math.max(max, id), 0) + 1;
    setTasks([...tasks, { id: newId, ...task, done: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout loading={loading} error={error} buildTag={BUILD_TAG} />}
      >
        <Route index element={<Home tasks={tasks} />} />
        <Route
          path="tasks"
          element={
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
          }
        />
        <Route path="tasks/new" element={<AddTask onAdd={addTask} />} />
        <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;
