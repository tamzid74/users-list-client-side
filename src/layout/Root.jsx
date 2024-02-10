import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  );
};

export default Root;
