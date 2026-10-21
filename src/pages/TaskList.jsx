import TaskTable from "../components/TaskTable";

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <div>
    <h2>Danh sách công việc</h2>
    <TaskTable tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
  </div>
);

export default TaskList;
