/* eslint-disable react/prop-types */
const SortUser = ({ value, onChange }) => {
  return (
    <div>
      <select
        className="select select-bordered w-full max-w-sm select-sm md:select-md mb-5"
        value={value}
        onChange={onChange}
      >
        <option>Sort by name</option>
        <option>Sort by email</option>
        <option>Sort by Company name</option>
      </select>
    </div>
  );
};

export default SortUser;
