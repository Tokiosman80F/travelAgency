
import { FaHiking, FaUmbrellaBeach } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";
import { FaBowlFood, FaMountainSun, FaSailboat } from "react-icons/fa6";
const CategoryCard = () => {
    const categoryIcon = [
        { icon: <BiSolidCity />, title: "City Tour" },
        { icon: <FaUmbrellaBeach />, title: "Beaches" },
        { icon: <FaSailboat />, title: "Boat Tour" },
        { icon: <FaMountainSun />, title: "Adventure" },
        { icon: <FaBowlFood />, title: "Food" },
        { icon: <FaHiking />, title: "Hiking" },
      ];
    return (
        <div className="mx-auto text-center my-20">
        <h1 className="myh2">Browse By Category</h1>
        <h1 className="myh1">Pick a Tour type</h1>
        <div className="flex justify-evenly item-center ">
          {categoryIcon.map((item, index) => (
            <div key={index} className="  hover:bg-slate-300 transition duration-200 p-5 rounded-xl" >
              <div style={{fontSize:"40px",}} className="bg-blue-500 w-20 h-20 p-5 rounded-full text-yellow-400 ">{item.icon}</div>
              <p className="font-semibold mt-2">{item.title}</p>
              <p>10+ Tours</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default CategoryCard;