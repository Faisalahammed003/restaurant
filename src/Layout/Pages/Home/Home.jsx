import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BistroBoss from "./BistroBoos";
import CallUs from "./CallUs";
import Category from "./Category";
import Chef from "./Chef";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      {/*-------------------HOME-SECTION------------------------- */}
      <Banner></Banner>
      <div className="container mx-auto">
        <Category></Category>
      </div>
      <BistroBoss></BistroBoss>
      <div className="container mx-auto">
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <Chef></Chef>
      </div>
      <Featured></Featured>
      <Testimonials></Testimonials>
      {/* -------------------------------------------- */}
    </>
  );
};

export default Home;
