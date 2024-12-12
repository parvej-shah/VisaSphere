import { NavLink } from "react-router-dom";

const Navbar = () => {
    const isloggedIn = true;
    const allNavLink = [
        { to: '/', label: 'Home' },
        { to: '/all-visas', label: 'All Visas' },
        { to: '/add-visa', label: 'Add Visa' },
        { to: '/my-added-visas', label: 'My Added Visas' },
        { to: '/my-applications', label: 'My Applications' },
      ];
    const isActiveLink = 'btn bg-transparent border-none text-secondary font-bold hover:bg-transparent';
    const isNotActiveLink = 'btn bg-transparent border-none text-neutral font-normal hover:bg-transparent hover:scale-110 transition-all duration-300 hover:text-secondary hover:font-bold'
  return (
    <div className="navbar bg-primary text-neutral shadow-navbar">
      {/* Navbar Start */}
      <div className="navbar-start ">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden ">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-neutral text-primary rounded-box w-52"
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
        <a className="text-2xl font-bold text-neutral px-4 lg:px-8">
          VisaSphere
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-neutral">
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
        {isloggedIn ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="avatar btn btn-ghost text-neutral cursor-pointer"
              >
                <div className="w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                  <img src="https://via.placeholder.com/150" alt="User" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 space-y-2 p-2 shadow-lg bg-neutral text-primary rounded-box w-48"
              >
                <li>
                  <a href="#">Name</a>
                </li>
                <li>
                  <a href="#" className="btn bg-secondary text-neutral">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-2">
            <a href="#" className="btn btn-secondary btn-sm">
              Login
            </a>
            <a href="#" className="btn btn-accent btn-sm">
              Register
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
