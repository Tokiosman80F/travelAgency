
import person1 from "../../../assets/Home images/person1p.jpg";
import person2 from "../../../assets/Home images/person2p.jpg";
import SearchForm from "./SearchForm";
const Banner = () => {
  return (
    <div className="w-full h-[90vh] bg-blue-600 px-5 rounded-3xl relative">
      {/* text */}
      <div className="flex">
        <div className="w-2/3  flex flex-col justify-center gap-5">
          <h3 className="text-3xl font-semibold text-yellow-400">
            Explore the
          </h3>
          <h1 className="text-5xl text-white font-bold">Travel & Adventure</h1>
          <p className="text-white ">Find awesome hotel,tour & car</p>
        </div>
        {/* image */}
        <div className="flex gap-5 justify-center items-center">
          <div className="w-1/2 h-1/2">
            <img src={person2} alt="" />
          </div>
          <div className="w-1/2">
            <img src={person1} alt="" />
          </div>
        </div>
      </div>

        {/* search box */}
        <div className="w-auto absolute top-3/4 left-[15%] ">
          <SearchForm></SearchForm>
        </div>

    </div>
  );
};

export default Banner;
