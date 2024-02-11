import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Toaster />
    </>
  );
};

export default Root;
