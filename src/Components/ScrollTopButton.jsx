/* eslint-disable react/prop-types */
import { IoMdArrowDropupCircle } from "react-icons/io";


const ScrollTopButton = ({onClick}) => {
    return (
        <button
          className="fixed bottom-[50px] right-[50px] lg:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-blue-600"
          onClick={onClick}
        >
          <IoMdArrowDropupCircle />
        </button>
    );
};

export default ScrollTopButton;