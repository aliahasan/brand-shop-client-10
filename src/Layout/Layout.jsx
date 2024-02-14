import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const Layout = () => {
  return (
    <div className="min-h-[100vh]">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="sticky top-[100%]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
