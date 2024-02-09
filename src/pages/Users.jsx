import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserCard from "../Components/userCard/UserCard";
import Lottie from "lottie-react";
import userNotFound from "../assets/images/no user found.json";

const Users = () => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("Sort by name");

  //   fetching data here
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users);
        setFilteredUsers(data.users);
        setIsLoading(false);
      });
  }, []);

  //   Function to handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterUsers(e.target.value);
  };
  // Function to filter users based on search input
  const filterUsers = (searchTerm) => {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Handle sort option
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortUsers(e.target.value);
  };

  // Function to map for sort
  const sortOptionsMap = {
    "Sort by email": (a, b) => a.email.localeCompare(b.email),
    "Sort by Company name": (a, b) =>
      a.company.name.localeCompare(b.company.name),
    "Sort by name": (a, b) => a.firstName.localeCompare(b.firstName),
  };
  //  Function to sort user based on the selected option
  const sortUsers = (sortOption) => {
    let sortedUsers = [...filteredUsers];
    const sortFunction = sortOptionsMap[sortOption];
    if (sortFunction) {
      sortedUsers.sort(sortFunction);
    }
    setFilteredUsers(sortedUsers);
  };

  return (
    <div>
      <h1 className=" text-center font-semibold text-5xl text-primary mb-5">
        All Users
      </h1>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search By Name..."
            className="input input-bordered w-full max-w-sm input-sm md:input-md mb-5"
          />
          <span className="absolute top-2 md:top-4 right-2">
            <CiSearch className="text-base font-bold" />
          </span>
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-sm select-sm md:select-md mb-5"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option>Sort by name</option>
            <option>Sort by email</option>
            <option>Sort by Company name</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="text-7xl min-h-screen flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <div className="lottie w-[500px] ">
            <Lottie animationData={userNotFound} loop={true}></Lottie>
            <h1 className="text-center text-5xl font-bold">User Not Found</h1>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
