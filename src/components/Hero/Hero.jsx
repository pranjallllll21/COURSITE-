import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/window/blue-pattern.png";
const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Complete Tailwind CSS Course",
    description:
      "Tailwind Css | Learn Modern CSS Framework Tailwind CSS using Flexbox, CSS Grid and build responsive modern styling sites",
  },
  {
    id: 2,
    img: Book2,
    title: "Full-Stack Web Development Bootcamp ",
    description:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps.",
  },
  {
    id: 3,
    img: Book3,
    title: "Angular - The Complete Guide (2025 Edition)",
    description:
      "Master Angular and build awesome, reactive web apps with the successor of Angular.js",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("His Life will forever be Changed");
  const [description, setDescription] = React.useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm">
                  by coursite
                </p>
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Register now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center justify-center order-1 sm:order-2 relative">
              <div className="h-[350px] sm:h-[500px] flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="book"
                  className="w-[350px] h-[350px] sm:h-[500px] sm:w-[500px] object-contain"
                />
              </div>

              {/* Thumbnails with Blue Background - slightly upward */}
              <div className="flex flex-row flex-wrap justify-center gap-4 px-4 py-2 rounded-full dark:bg-gray-900 mt-[-30px] shadow-lg z-10">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(item.img);
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="thumbnail"
                    className="w-[80px] h-[80px] object-contain cursor-pointer hover:scale-110 duration-200 rounded-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;