/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";

const SearchUsers = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search By Name..."
        className="input input-bordered w-full max-w-sm input-sm md:input-md mb-5"
      />
      <span className="absolute top-2 md:top-4 right-2">
        <CiSearch className="text-base font-bold" />
      </span>
    </div>
  );
};

export default SearchUsers;
