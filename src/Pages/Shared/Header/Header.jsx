
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className={` hover:text-red-400 ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          `}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={` hover:text-red-400 ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
        `}
        >
          Destination
        </Link>
      </li>
      <li>
        <Link
          to=""
          className={` hover:text-red-400 ${({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          `}
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Trevlson</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline">login/Signup</button>
    
        </div>
      </div>
    </div>
  );
};

export default Header;
