import {
  FaAddressBook,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHistory,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import UseAdmin from "../Hooks/UseAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // todo: get isAdmin value  from the database
  const [isAdmin] = UseAdmin();
  return (
    <div className="flex">
      {/* SIDE-BAR */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/UserHome">
                  <FaHome></FaHome>
                  User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Payment">
                  <FaHistory></FaHistory>
                  Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart({cart.length})
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Review">
                  <FaAddressBook></FaAddressBook>
                  Add Review
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Booking">
                  <FaList></FaList>
                  My Booking
                </Link>
              </li>
            </>
          )}
          {/* Shared Nav Link */}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>
              User Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaSearch></FaSearch>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaEnvelope></FaEnvelope>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        {/* DASHBOARD-CONTENT */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
