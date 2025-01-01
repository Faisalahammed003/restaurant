import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Pages/Share/Footer";
import Nav from "./Pages/Share/Nav";
const Main = () => {
  const location = useLocation();
  const NoHF = location.pathname.includes("login");

  return (
    <div>
      {NoHF || <Nav></Nav>}
      <Outlet></Outlet>
      {NoHF || <Footer></Footer>}
    </div>
  );
};

export default Main;
