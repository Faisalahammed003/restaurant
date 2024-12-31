import SectionTitle from "../Share/SectionTitle";
import MenuItem from "../Share/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PapularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn btn-outline hover:bg-black  border-0 border-b-4 mt-4  text-black ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PapularMenu;
