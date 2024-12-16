import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user} = useAuth();
  const isloggedIn = false;
  const allNavLink = [
    { to: "/", label: "Home" },
    { to: "/all-visas", label: "All Visas" },
    { to: "/add-visa", label: "Add Visa" },
    { to: "/my-added-visas", label: "My Added Visas" },
    { to: "/my-applications", label: "My Applications" },
  ];
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
        navigate('/');
      })
      .catch(() => {
        toast.error("SignOut Failed!");
      });
  };
  const [theme,setTheme] = useState(true);
  const handleThemeToggle=()=>{
    setTheme(!theme);
    if(theme){
      document.querySelector("html").setAttribute("data-theme", 'dark');
    }
    else{
      document.querySelector("html").setAttribute("data-theme", 'light');
    }
  }
  const isActiveLink =
    "btn bg-transparent border-none text-secondary font-bold hover:bg-transparent";
  const isNotActiveLink =
    "btn bg-transparent border-none text-white font-normal hover:bg-transparent hover:scale-110 transition-all duration-300 hover:text-secondary hover:font-bold";
  return (
    <div className="navbar bg-primary text-white shadow-navbar">
      {/* Navbar Start */}
      <div className="navbar-start ">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden ">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-white text-textPrimary rounded-box w-52"
          >
            {allNavLink.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? isActiveLink : isNotActiveLink
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Logo */}
        <a className="text-2xl font-bold text-white px-4 lg:px-8">
          VisaSphere
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {allNavLink.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? isActiveLink : isNotActiveLink
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end px-4 lg:px-8">
        {user?.email ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="avatar btn btn-ghost text-white cursor-pointer"
              >
                <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src="https://via.placeholder.com/150" alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 space-y-2 p-2 shadow-lg bg-white text-textPrimary rounded-box w-48 z-10"
              >
                <li>
                  <a href="#">Name</a>
                </li>
                <li>
                  <a href="#">Email</a>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-primary text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-2">
            <button
              onClick={() => navigate("/login")}
              className="btn btn-secondary btn-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/registration")}
              className="btn btn-accent btn-sm"
            >
              Register
            </button>
          </div>
        )}
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleThemeToggle}
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
