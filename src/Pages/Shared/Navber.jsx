import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../Hooks/useCarts";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOpation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad"> Order Food</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <FaShoppingCart className="mr-2"></FaShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOpation}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Mango</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOpation}</ul>
        </div>

        <div className="navbar-end gap-5">
  {/* Dashboard Button */}
  {user && (
    <Link to="/dashboard">
      <a className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        {user.displayName.split(" ")[0]}
      </a>
    </Link>
  )}

  {/* Login or Logout Button */}
  {user ? (
    <button
      onClick={handleLogOut}
      className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
      LogOut
    </button>
  ) : (
    <Link
      to="/login"
      className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
      Login
    </Link>
  )}
</div>

      </div>
    </>
  );
};

export default Navber;
