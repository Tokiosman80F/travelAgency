import place1 from "../../../assets/Home images/place_1.jpg";
import place2 from "../../../assets/Home images/place_2.jpg";
import place3 from "../../../assets/Home images/place_3.jpg";
import place4 from "../../../assets/Home images/place_4.jpg";
const TourSlider = () => {
  const tourPlaceDetail =
    [
      {
        name: "Eiffel Tower",
        description:
          "A wrought-iron lattice tower on the Champ de Mars in Paris, France. It is one of the most iconic landmarks in the world.",
        rating: 4.8,
        review: 1200,
        price: "$30.00",
        image: place1,
      },
      {
        name: "Machu Picchu",
        description:
          "An ancient Inca citadel set high in the Andes Mountains in Peru. Known for its breathtaking views and architectural marvels.",
        rating: 4.9,
        review: 1500,
        price: "$40.00",
        image: place2,
      },
      {
        name: "Great Barrier Reef",
        description:
          "The world's largest coral reef system, located in the Coral Sea off the coast of Queensland, Australia. A paradise for divers and nature enthusiasts.",
        rating: 4.7,
        review: 1000,
        price: "$50.00",
        image: place3,
      },
      {
        name: "Serengeti National Park",
        description:
          "A vast wildlife reserve in Tanzania, famous for its annual migration of wildebeest and other animals. An ideal destination for safari enthusiasts.",
        rating: 4.6,
        review: 900,
        price: "$45.00",
        image: place4,
      }
    ];

  return (
    <div className="flex justify-center items-start my-20 gap-6">
      {tourPlaceDetail.map((detail) => (
        <div key={detail.review} className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={detail.image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{detail.name}</h2>
            <p>{detail.description}</p>
            <div className="card-actions">
              <button className="btn  bg-blue-500 ">Price: {detail.price}</button>
              <button className="btn bg-blue-500">Review:  {detail.review}</button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourSlider;
