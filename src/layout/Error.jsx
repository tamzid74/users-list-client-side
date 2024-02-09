import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import error from "../assets/images/404.gif";

const Error = () => {
  return (
    <>
      <div className=" max-w-6xl mx-auto p-5">
        <div className=" w-full h-[80vh] flex justify-center items-center">
          <img className="md:w-1/2" src={error} alt="" />
        </div>
        <div className="flex justify-start mt-10">
          <Link to="/">
            <button className="btn btn-primary btn-sm btn-outline">
              <AiOutlineArrowLeft /> Go Back home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
