import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-48 bg-gray-800 text-white min-h-screen p-4 flex flex-col justify-between flex-shrink-0">
      <div>
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://via.placeholder.com/100x100?text=Logo"
            alt="Logo"
            className="w-24 h-16 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/college-management"
              className={({ isActive }) =>
                `block p-2 rounded transition ${
                  isActive ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`
              }
            >
              College Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/questions-data"
              className={({ isActive }) =>
                `block p-2 rounded transition ${
                  isActive ? 'bg-gray-600' : 'hover:bg-gray-600'
                }`
              }
            >
              Questions Data
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Profile Link */}
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center space-x-3 p-2 rounded transition ${
              isActive ? 'bg-gray-600' : 'hover:bg-gray-600'
            }`
          }
        >
          <img
            src="https://via.placeholder.com/32x32?text=P"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
