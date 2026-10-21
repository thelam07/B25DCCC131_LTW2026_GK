import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIORITIES } from "../data";

const initialForm = { title: "", assignee: "", priority: "Trung bình", hours: "" };

const AddTask = ({ onAdd }) => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { title, assignee, priority, hours } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !assignee.trim() || !String(hours).trim()) {
      setMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    onAdd({ title: title.trim(), assignee: assignee.trim(), priority, hours: Number(hours) });
    navigate("/tasks", { replace: true });
  };

  return (
    <div>
      <h2>Thêm công việc mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">Tên công việc</label>
          <input id="title" name="title" type="text" value={title} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="assignee">Người làm</label>
          <input id="assignee" name="assignee" type="text" value={assignee} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="priority">Mức ưu tiên</label>
          <select id="priority" name="priority" value={priority} onChange={handleChange}>
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="hours">Số giờ ước tính</label>
          <input id="hours" name="hours" type="number" value={hours} onChange={handleChange} />
        </div>
        <button type="submit">Thêm</button>
      </form>
      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default AddTask;
