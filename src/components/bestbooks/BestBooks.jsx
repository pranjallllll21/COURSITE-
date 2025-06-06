import React from "react";
import Img1 from "../../assets/books/book2.jpg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
   {
      id: 1,
      img: Img1,
      title: "Complete Tailwind CSS Course",
      description:
        "Tailwind Css | Learn Modern CSS Framework Tailwind CSS using Flexbox, CSS Grid and build responsive modern styling sites",
    },
    {
      id: 2,
      img: Img2,
      title: "Full-Stack Web Development Bootcamp ",
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
    },
    {
      id: 3,
      img: Img3,
      title: "Angular - The Complete Guide (2025 Edition)",
      description:
        "Master Angular and build awesome, reactive web apps with the successor of Angular.js",
    },
];

const BestBooks = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Cources
            </p>
            <h1 className="text-3xl font-bold">Best Seller</h1>
            <p className="text-xs text-gray-400">
              The cources which are trending in this world,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ServicesData.map((service) => (
                <div
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                >
                  {/* Image section - now fully inside card */}
                  <div className="pt-6 flex justify-center">
                    <img
                      src={service.img}
                      alt=""
                      className="w-[150px] h-[150px] object-contain group-hover:scale-105 duration-300 shadow-md"
                    />
                  </div>

                  {/* Text & Button section */}
                  <div className="p-4 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">{service.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <button
                      className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                      onClick={handleOrderPopup}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;