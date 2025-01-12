import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       console.log("LogOut");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const link = (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/contact">CONTACT US</NavLink>
      <NavLink to="/dashboard">DASHBOARD</NavLink>
      <NavLink to="/menu">OUR MENU</NavLink>
      <NavLink to="/order/salad">ORDER FOOD</NavLink>
      <NavLink to="/secret">SECRET</NavLink>
      <NavLink to="/dashboard">
        <div className="flex relative">
          <FaShoppingCart className="mr-2 size-4   "></FaShoppingCart>
          <div className="badge badge-secondary border-2 border-white bg-red-800 absolute -top-3 -right-5">
            <span>{cart.length}</span>
          </div>
        </div>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
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
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className=" text-xl uppercase">
            BISTRO BOSS
            <br />
            <span className="text-lg"> Restaurant</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-3 px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={logOut} className="">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
