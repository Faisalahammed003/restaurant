import { Helmet } from "react-helmet-async";
import Cover from "../Share/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import MenuCover from "../Share/MenuCover";
import img from "../../../assets/home/chef-service.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <MenuCover img={img} title="Desserts"></MenuCover>
    </div>
  );
};

export default Menu;
