import React from "react";
import person1 from "../../assets/Home images/person1p.jpg";
import person2 from "../../assets/Home images/person2p.jpg";
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
          <form className="bg-yellow-300 shadow-md p-5 rounded-xl flex items-center justify-center gap-6">
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
              >
                Destination
              </label>
              <input
                className="  border-gray-500 rounded  py-2 px-3   focus:outline-none "
                type="text"
                placeholder=""
              />
            </div>
            {/* 2 */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
              >
               Type 
              </label>
              <input
                className="  border rounded  py-2 px-3   focus:outline-none "
                type="text"
                placeholder=""
              />
            </div>
            {/* 3 */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
              >
                When
              </label>
              <input
                className="  border rounded  py-2 px-3   focus:outline-none "
                type="text"
                placeholder=""
              />
            </div>
            {/* 4 */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
              >
                Guest
              </label>
              <input
                className="  border rounded  py-2 px-3   focus:outline-none "
                type="text"
                placeholder=""
              />
              
            </div>
            <div>
            <input
                className=" bg-white px-4 py-3 rounded-md  cursor-pointer"
                type="submit"
                placeholder=""
              />
            </div>
          </form>
        </div>

    </div>
  );
};

export default Banner;
