import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ loading, error, buildTag }) => {
  const renderContent = () => {
    if (loading) return <p>Đang tải...</p>;
    if (error) return <p className="error">{error}</p>;
    return <Outlet />;
  };

  return (
    <div className="container">
      <NavBar />
      <main>{renderContent()}</main>
      <footer className="build">{`Build: ${buildTag}`}</footer>
    </div>
  );
};

export default Layout;
