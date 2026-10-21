import { PRIORITIES } from "../data";

const FilterBar = ({ query, priority, onQueryChange, onPriorityChange }) => (
  <div className="filter-bar">
    <label htmlFor="search">Tìm kiếm</label>
    <input
      id="search"
      type="text"
      placeholder="Tìm kiếm theo tên công việc"
      value={query}
      onChange={onQueryChange}
    />
    <label htmlFor="filter-priority">Mức ưu tiên</label>
    <select id="filter-priority" value={priority} onChange={onPriorityChange}>
      <option value="Tất cả">Tất cả</option>
      {PRIORITIES.map((p) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>
  </div>
);

export default FilterBar;
