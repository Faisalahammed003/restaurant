import React from "react";
import SectionTitle from "../Share/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-blend-overlay bg-[#15151598] text-white  pt-8 bg-fixed my-20">
      <div className="">
        <SectionTitle
          subHeading="check is out"
          heading="Featured Item"
        ></SectionTitle>
        <div className="md:flex justify-center items-center   pb-20 mt-12 px-36">
          <div>
            <img src={FeaturedImg} alt="" />
          </div>
          <div className="md:ml-10 ">
            <p>Aug 20 ,2029 </p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis id sapiente neque laudantium dolorem voluptate
              voluptas provident enim ea unde quo blanditiis eos aperiam, ipsum
              consequatur magni illo molestias quas accusamus? Voluptatem modi
              quod cupiditate assumenda fugit eius veniam incidunt laborum.
              Architecto nostrum repudiandae officiis vero quasi a labore!
            </p>
            <button className="btn btn-outline hover:bg-black border-0 border-b-4 mt-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
