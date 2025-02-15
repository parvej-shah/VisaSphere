import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user } = useAuth();
  const firstLetter = user?.email.charAt(0).toUpperCase();
  const [theme, setTheme] = useState(true);
  const allNavLink = [
    { to: "/", label: "Home" ,isPrivate:false},
    { to: "/all-visas", label: "All Visas" ,isPrivate:false},
    { to: "/add-visa", label: "Add Visa",isPrivate:true },
    { to: "/my-added-visas", label: "Added Visas",isPrivate:true },
    { to: "/my-applications", label: "Applications",isPrivate:true },
  ];
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
        navigate("/");
      })
      .catch(() => {
        toast.error("SignOut Failed!");
      });
  };
  const handleThemeToggle = () => {
    setTheme(!theme);
    if (theme) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  };
  const isActiveLink =
    "btn bg-transparent  btn-sm shadow-none border-none text-secondary font-bold hover:bg-transparent";
  const isNotActiveLink =
    "btn bg-transparent shadow-none btn-sm border-none text-white font-normal hover:bg-transparent hover:scale-110 transition-all duration-300 hover:text-secondary hover:font-bold";
  return (
    <div className="bg-primary/90 shadow-lg py-2 sticky top-0 z-40 backdrop-blur-sm pr-3">
      <div className="flex container mx-auto items-center justify-between text-white shadow-navbar">
      {/* Navbar Start */}
      <div className="flex justify-center items-center">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden ">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-primary/90 text-textPrimary rounded-box w-40 ml-2 z-10"
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
        <a className="text-2xl font-bold text-white">VisaSphere</a>
      </div>      
      {/* Navbar End */}
      <div className="flex justify-center item-center">
      <div className=" hidden lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1 text-white">
          {allNavLink.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? isActiveLink : isNotActiveLink} ${link.isPrivate && !user?.email && 'hidden'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider divider-horizontal hidden lg:flex"></div>
      <label className="swap mr-1 lg:ml-0 swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleThemeToggle}
            type="checkbox"
            className="theme-controller"
            value="dark"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      <div className="flex items-center justify-center">
        {user?.email ? (
          <div className="flex items-center justify-end gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="avatar btn btn-ghost text-white cursor-pointer"
              >
                <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  {user?.photoURL?<img src={user?.photoURL} alt="User" />:firstLetter}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 space-y-2 p-3 shadow-lg bg-primary text-white rounded-box w-48 z-10"
              >
                <li>{user?.displayName}</li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-secondary text-white btn-sm"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn bg-secondary btn-sm hover:bg-secondary/90 duration-300 transition-transform hover:shadow-xl text-gray-700 border-none"
            >
              Login
            </button>
        )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
