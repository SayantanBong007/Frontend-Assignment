import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg pb-2 ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-8 w-auto"
                src="/Assets/logo.svg"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <NavLink
                to="/"
                className={`flex items-center ${
                  location.pathname === "/"
                    ? "text-black border-b-2 border-blue-700   "
                    : "text-gray-500  "
                }`}
              >
                <img
                  className="block h-5 w-auto mr-2"
                  src={
                    location.pathname === "/"
                      ? "/Assets/metrics.png"
                      : "/Assets/metrics-gray.png"
                  }
                  alt="Logo"
                />
                <span className="text-lg font-bold">Metrics</span>
              </NavLink>
              <NavLink
                to="/logs"
                className={`ml-10 flex items-center text-xl ${
                  location.pathname === "/logs"
                    ? "text-black border-b-2 border-blue-700  "
                    : "text-gray-500  "
                }`}
              >
                <img
                  className="block h-3 w-auto mr-2 pb-0 mb-0"
                  src={
                    location.pathname === "/logs"
                      ? "/Assets/list-active.png"
                      : "/Assets/list.png"
                  }
                  alt="Logo"
                />
                <span className=" font-bold text-lg ">Logs</span>
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                defaultValue="last-5-minutes"
              >
                <option value="last-5-minutes">Last 5 minutes</option>
                <option value="last-15-minutes">Last 15 minutes</option>
                <option value="last-30-minutes">Last 30 minutes</option>
                <option value="last-1-hour">Last 1 hour</option>
                <option value="last-3-hours">Last 3 hours</option>
                <option value="last-6-hours">Last 6 hours</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
