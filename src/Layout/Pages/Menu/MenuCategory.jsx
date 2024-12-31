import { Link } from "react-router-dom";
import MenuCover from "../Share/MenuCover";
import MenuItem from "../Share/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-9">
      {title && <MenuCover img={img} title={title}></MenuCover>}

      <div className="container mx-auto grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline ml-28  hover:bg-black border-0 border-b-4 mt-4 text-black">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
