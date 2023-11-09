import React from 'react';
import { FaCheck } from "react-icons/fa6";
import Person3 from "../../../assets/Home images/person3p.jpg" 
const PlanSection = () => {
    const checkIcon = <FaCheck />;
    const checkList = [
      { icon: checkIcon, title: "Travel Plan" },
      { icon: checkIcon, title: "Cheap Rate" },
      { icon: checkIcon, title: "Hand-picked Tour" },
      { icon: checkIcon, title: "Private Guide" },
    ];
    return (
        <div className="flex justify-end items-center">
        {/* plan list*/}
        <div className="w-1/3">
          <h3 className="myh2">Why Choose Us</h3>
          <h1 className="myh1">Plan ur trip with us </h1>
          <p>
            Holisticly optimize proactive straregic theme area rather than
            effective manufacture product create.
          </p>
          {/* plan */}
          <ul className="grid grid-cols-2">
            {checkList.map((item,index)=><li key={index} className="flex items-center gap-5">{item.icon}{item.title}</li>)}
          </ul>
          {/* btn */}
          <button className="btn btn-outline"> contact us</button>
        </div>
        {/* img */}
        <div  className=" w-1/2  text-center ">
            <img style={{display:"inline-block",height:"500px"}} src={Person3} alt="" />
        </div>
      </div>
    );
};

export default PlanSection;