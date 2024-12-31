const MenuCover = ({ img, title }) => {
  return (
    <div className=" mb-24 relative">
      <img className="h-32 md:h-80 lg:h-96 w-full" src={img} alt="" />
      <div className="text-center mx-auto px-2 py-4 md:px-10 md:py-20 text-white bg-[#1111116e] max-w-[763px] absolute -top-1 lg:top-24 lg:right-64 md:top-10 md:right-20 right-17">
        <h3 className="text-xl md:text-2xl uppercase">{title}</h3>
        <p className="text-sm">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default MenuCover;
