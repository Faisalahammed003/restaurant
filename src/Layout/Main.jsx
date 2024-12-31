import { Outlet } from "react-router-dom";
import Footer from "./Pages/Share/Footer";
import Nav from "./Pages/Share/Nav";
const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
