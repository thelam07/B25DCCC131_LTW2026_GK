const Home = ({ tasks }) => {
  const total = tasks.length;
  const doneCount = tasks.filter(({ done }) => done).length;
  const remainingHours = tasks.reduce(
    (sum, { done, hours }) => (done ? sum : sum + Number(hours)),
    0
  );

  return (
    <div>
      <h1>Công việc nhóm</h1>
      <p>{`Tổng số công việc: ${total}`}</p>
      <p>{`Số công việc đã xong: ${doneCount}`}</p>
      <p>{`Tổng số giờ còn lại: ${remainingHours}`}</p>
      <p>Chào mừng trưởng nhóm quay lại theo dõi tiến độ công việc!</p>
    </div>
  );
};

export default Home;
