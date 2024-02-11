import { useEffect, useState } from "react";
import UserCard from "../Components/userCard/UserCard";
import Lottie from "lottie-react";
import userNotFound from "../assets/images/no user found.json";
import UserAddedModal from "../Components/UserAddedModal";
import ScrollTopButton from "../Components/ScrollTopButton";
import SearchUsers from "../Components/SearchUsers";
import SortUser from "../Components/SortUser";

const Users = () => {
  const [topButton, setTopButton] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("Sort by name");

  // scroll top button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //   fetching data here
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data?.users);
        // console.log(data?.users);
        setFilteredUsers(data?.users);
        setIsLoading(false);
      });
  }, []);

  //   Function to handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    filterUsers(e.target.value);
  };
  // Function to filter users based on search input
  const filterUsers = (search) => {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
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
      {/* added modal for add a user */}
      <div>
        <UserAddedModal />
      </div>
      {/* added search and sort */}
      <div className="flex justify-between flex-col md:flex-row">
        <SearchUsers value={search} onChange={handleSearchChange} />
        <SortUser value={sortOption} onChange={handleSortChange} />
      </div>
      {isLoading ? (
        <div className="text-7xl min-h-screen flex items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="flex justify-center items-center">
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
      {topButton && <ScrollTopButton onClick={scrollUp} />}
    </div>
  );
};

export default Users;
