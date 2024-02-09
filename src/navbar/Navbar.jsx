import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navList = (
    <>
      <li className="list-none">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold underline" : ""
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
        <div className="lg:flex lg:items-center">
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
            <div className="flex gap-10 flex-col lg:flex-row text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4  lg:items-center">
              {navList}

              <div className="relative mt-4 lg:mt-0 lg:mx-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-4 h-4 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
