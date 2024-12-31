import { Helmet } from "react-helmet-async";
import Cover from "../Share/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../Share/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="our menu"></Cover>
      {/* <MenuCover img={img} title="Desserts"></MenuCover> */}
      {/* MENU COVER */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's offer"
      ></SectionTitle>
      {/*   OFFERED MENU ITEMS */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert MENU ITEMS   */}
      <MenuCategory
        title="dessert"
        img={dessertImg}
        items={dessert}
      ></MenuCategory>

      <MenuCategory title="pizza" img={pizzaImg} items={pizza}></MenuCategory>
      <MenuCategory title="salads" img={saladImg} items={salad}></MenuCategory>
      <MenuCategory title="soups" img={soupImg} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
