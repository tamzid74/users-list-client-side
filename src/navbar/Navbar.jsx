import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
// all the navMenu Here
  const navList = (
    <>
      <li className="list-none">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
    </>
  );
  return (
    <nav
      className="bg-white shadow dark:bg-gray-800"
      // eslint-disable-next-line react/no-unknown-property
      x-data="{ isOpen: false }"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block lg:items-center lg:justify-between mt-4 lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:justify-around lg:items-center">
            {navList}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
