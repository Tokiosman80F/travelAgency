import { BiDollar } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";
import { SiQuicklook } from "react-icons/si";
import { FaHandsWash } from "react-icons/fa";
import Person1 from "../../assets/AboutImages/A_person-1.jpg";
import Person2 from "../../assets/AboutImages/A_person-2.jpg";
import Person3 from "../../assets/AboutImages/A_person-3.jpg";
import Person4 from "../../assets/AboutImages/A_person-4.jpg";
import Person5 from "../../assets/AboutImages/A_person-5.jpg";
import Banner from "../../assets/AboutImages/A_banner.jpg";

const About = () => {
  const teamMembers = [
    { image: Person1, name: "Antoni Shkraba", role: "CEO" },
    { image: Person2, name: "Antoni Shkraba", role: "CEO" },
    { image: Person3, name: "Antoni Shkraba", role: "CEO" },
    { image: Person4, name: "Antoni Shkraba", role: "CEO" },
  ];
  const featureCard = [
    { icon: <BiDollar></BiDollar>, title: "cheap Rate" },
    { icon: <MdCardTravel></MdCardTravel>, title: "Best travel" },
    { icon: <SiQuicklook></SiQuicklook>, title: "Easy & quick booking" },
    { icon: <FaHandsWash></FaHandsWash>, title: "Hand picked tour" },
  ];
  return (
    <div>
      {/* banner */}
      <div>
        <img className="w-full h-[50vh]" src={Banner} alt="" />
      </div>
      {/*------ about us---------  */}
      <div className="flex justify-end items-center ">
        {/* img */}
        <div className="w-2/3 ">
          <img className="w-1/2  mx-auto" src={Person5} alt="" />
        </div>
        {/* text */}
        <div className="w-1/2 ">
          <h5 className="myh2">About</h5>
          <h1 className="myh1">Why Select us for Your vacation</h1>
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

      {/* feature */}
      <div className="my-20">
        <h1 className="myh2 text-center">Feature</h1>
        <h2 className="myh1 text-center">Why Choose us</h2>
        {/* card */}
        <div className="flex justify-center items-center gap-5 ">
          {featureCard.map((card, index) => (
            <div
              key={index}
              className="border flex flex-col items-center p-5 bg-slate-300"
            >
              <div className="text-3xl ">{card.icon}</div>
              <h5 className="py-5">{card.title}</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque aut ratione labore iusto animi deleniti, repellat
                dolorem hic perspiciatis atque excepturi fuga voluptates
                voluptate quod reprehenderit! Cum exercitationem dolor placeat?
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* team */}
      <div>
        <div className="flex justify-center px-5 items-center">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="mx-auto">
                <img className="w-1/2 h-full " src={member.image} alt="" />
              </div>
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
