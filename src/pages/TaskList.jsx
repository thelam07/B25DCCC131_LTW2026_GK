import { useState } from "react";
import FilterBar from "../components/FilterBar";
import TaskTable from "../components/TaskTable";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("Tất cả");

  const handleQueryShift = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handlePriorityChange = (e) => {
    const { value } = e.target;
    setPriority(value);
  };

  const keyword = query.trim().toLowerCase();
  const filteredTasks = tasks.filter(
    ({ title, priority: taskPriority }) =>
      title.toLowerCase().includes(keyword) &&
      (priority === "Tất cả" || taskPriority === priority)
  );

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <FilterBar
        query={query}
        priority={priority}
        onQueryChange={handleQueryShift}
        onPriorityChange={handlePriorityChange}
      />
      <p>{`Tìm thấy ${filteredTasks.length} công việc`}</p>
      <TaskTable tasks={filteredTasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default TaskList;
