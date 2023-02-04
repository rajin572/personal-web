import React from 'react';
import { Link } from 'react-router-dom';

const LimitedNav = () => {
    const menuItems = (
        <React.Fragment>
          <li>
            <Link to="/home" className="mx-2 rounded-lg">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="mx-2 rounded -lg">Blog</Link>
          </li>
        </React.Fragment>
      );
    return (
        <div>
        <div className="navbar bg-white flex justify-between px-5 md:px-10 lg:px-20 border-b-2  border-[#006eff]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a href="#home" className=" font-bold normal-case text-3xl text-[#006eff]">
              Rajin
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    );
};

export default LimitedNav;