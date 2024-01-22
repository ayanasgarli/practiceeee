import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const UserRoot = () => {
  return (
    <>
    <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default UserRoot;