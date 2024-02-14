import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
const Navbar = () => {
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
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "underline" : isPending ? "pending" : ""
          }
          to={`/login`}
        >
          Login
        </NavLink>
      </li>
    </>
  );

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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 px-4 font-bold md:text-lg"
            >
              {links}
            </ul>
          </div>
          <div className="pl-2 lg:pl-0 flex items-center gap-x-1">
            <div>
              <img className="w-10 h-10 hidden md:block rounded-full" src={logo} alt="" />
            </div>
            <div >
              <h1 className="text-xl text-black md:text-3xl italic font-bold whitespace-nowrap  cursor-pointer">
                Fashion Shop
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4 font-bold md:text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
