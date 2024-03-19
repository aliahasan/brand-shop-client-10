import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../images/logo.jpg";

// functional activities starts from here

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const { signOutError, setSignOutError } = useState(null);

  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
          to={`/`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
          to={`/addproduct`}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
          to={`/mycart`}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        Swal.fire({
          icon: "success",
          text: `logout successful`,
        });
      })
      .catch((error) => {
        setSignOutError(error.message);
        Swal.fire({
          title: "opps....",
          text: signOutError,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="navbar bg-violet-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden p-0  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 px-4 font-bold md:text-sm lg:text-white text-black"
            >
              {links}
            </ul>
          </div>
          <div className="pl-2 lg:pl-0 flex items-center gap-x-1">
            <div>
              <img
                className="w-10 h-10 hidden md:block rounded-full"
                src={logo}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl text-black md:text-3xl italic font-bold whitespace-nowrap tracking-wide cursor-pointer">
                Fashion Shop
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4 font-bold md:text-sm lg:text-white text-black">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2 lg:mr-3">
            {user ? (
              <div>
                <span className="mr-2 text-black">{user.email}</span>
                <Link>
                  <button
                    onClick={handleLogout}
                    className="text-black rounded font-semibold bg-red-300 py-2 px-4 hover:bg-red-500 duration-300"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to={`/login`}>
                  <button className="text-black rounded font-semibold bg-white py-2 px-4 hover:bg-green-500 duration-300">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
