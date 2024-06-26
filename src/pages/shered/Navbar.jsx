import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from '../../assets/user.png';
import { AuthContext } from "../../authProvider/AuthProvider";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
// console.log(user.photoURL)
  return (
    <div className="navbar my-4 font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Carrer</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Career</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div className="w-10 rounded-full">
         {user && <img
            className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={user.photoURL ? user.photoURL : userImg}
          /> }
        </div>

        {user ? (
          <Link to="/login">
            <a
              onClick={logOutUser}
              className="px-7 py-2 bg-[#403F3F] text-white cursor-pointer"
            >
              Log Out
            </a>
          </Link>
        ) : (
          <Link to="/login">
            <a className="px-7 py-2 bg-[#403F3F] text-white cursor-pointer">
              Login
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
