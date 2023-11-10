import React from "react";
import person1 from "../../assets/About images/A_person-1.jpg";
import person2 from "../../assets/About images/A_person-2.jpg";
import person3 from "../../assets/About images/A_person-3.jpg";
import person4 from "../../assets/About images/A_person-4.jpg";
import person5 from "../../assets/About images/A_person-5.jpg";
import banner from "../../assets/About images/A_banner.jpg";
const About = () => {
  return (
    <div>
      {/* banner */}
      <div>
        {" "}
        <img className="w-full h-[50vh]" src={banner} alt="" />
      </div>
      {/*------ about us---------  */}
      <div>
        {/* img */}
        <div>
          <img src={person5} alt="" />
        </div>
        {/* text */}
        <div>
          <h5 className="myh2">About</h5>
          <h1>Why Select us for Your vacation</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            culpa deserunt eum ipsum eaque mollitia fuga iusto nesciunt ducimus
            earum nemo reprehenderit hic fugit iste, repellendus atque,
            laudantium omnis itaque? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur ea reiciendis non recusandae officiis
            dicta itaque, voluptatum debitis eveniet tempore.
          </p>
        </div>
      </div>
      {/* travel number */}
      {/* feature */}
      <div>
        <h1>Feature</h1>
        <h2>Why Choose us</h2>
        {/* card */}
      </div>
    </div>
  );
};

export default About;
