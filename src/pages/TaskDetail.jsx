import { useParams, useNavigate } from "react-router-dom";
import WorkTimer from "../components/WorkTimer";

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  const backButton = <button onClick={() => navigate(-1)}>Quay lại</button>;

  if (!task) {
    return (
      <div>
        <p>Không tìm thấy công việc</p>
        {backButton}
      </div>
    );
  }

  const { title, assignee, priority, hours, done } = task;

  return (
    <div>
      <h2>Chi tiết công việc</h2>
      <p>{`Tên công việc: ${title}`}</p>
      <p>{`Người làm: ${assignee}`}</p>
      <p>{`Mức ưu tiên: ${priority}`}</p>
      <p>{`Số giờ: ${hours}`}</p>
      <p>{`Trạng thái: ${done ? "Đã xong" : "Đang làm"}`}</p>
      <WorkTimer key={id} />
      {backButton}
    </div>
  );
};

export default TaskDetail;
