import { CarouselData } from "./CarouselData";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rightdouble } from "../../../assets/svgs/Rightdouble.tsx";
import { Leftdouble } from "../../../assets/svgs/Leftdouble.tsx";

function CarouselMap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((currentIndex + 1) % CarouselData.length);
  };

  const prevPage = () => {
    setCurrentIndex(currentIndex ? currentIndex - 1 : CarouselData.length - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="flex md:flex-row justify-center h-screen bg-[url('D:\sairamfoods2\sriramfoods\src\assets\images\bgimg.png')] ">
        <button onClick={prevPage} className="">
          <Leftdouble />
        </button>
        <div className="flex flex-col md:flex-row justify-between items-center w-screen ">
          <div className="flex flex-col gap-4 text-left w-4/6">
            <div className="w-[246px] ">
              <img src={CarouselData[currentIndex].line} />
              <h2 className="w-[246px] flex justify-center text-lg">
                {CarouselData[currentIndex].label}
              </h2>
            </div>
            <h1 className="text-5xl">{CarouselData[currentIndex].title}</h1>
            <button
              type="submit"
              className="border border-slate-900 w-[130px] text-lg rounded-full p-2"
            >
              Shop Now
            </button>
          </div>
          <div className="flex flex-col md:flex md:flex-row items-center justify-center md:h-screen relative w-3/6 ">
            <div className="flex">
              {CarouselData[currentIndex].imgs.map((image, index) => (
                <img
                  key={image.id}
                  src={image.img}
                  className={`w-64 h-auto mb-4 ${
                    index === 0
                      ? "mr-4 md:w-[1056px]"
                      : index === 1
                        ? "mr-4 md:w-[230px]"
                        : "mr-4"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <button onClick={nextPage} className="">
          <Rightdouble />
        </button>
      </div>

      <div className="flex mt-4 justify-center items-center">
        {CarouselData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-slate-900" : "w-2 h-2 bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="relative max-w-screen overflow-hidden  bg-[url('D:\Foodp\foodreact\src\assets\images\bgimg.png')]">
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 "
        >
          Prev
        </button>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 1.5, ease: "easeOut" }}
            key={currentIndex}
            className="flex justify-between items-center h-full w-full overflow-hidden "
          >
            <div className="flex flex-col gap-4 text-left w-3/6 mx-8">
              <div className="w-[246px] ">
                <img src={CarouselData[currentIndex].line} />
                <h2 className="w-[246px] flex justify-center text-lg">
                  {CarouselData[currentIndex].label}
                </h2>
              </div>
              <h1 className="text-5xl">{CarouselData[currentIndex].title}</h1>
              <button
                type="submit"
                className=" w-[130px] text-lg rounded-full p-2"
              >
                Shop Now
              </button>
            </div>
            <div className="flex flex-col justify-center p-0 m-0  h-screen relative w-3/6  overflow-hidden">
              {CarouselData[currentIndex].imgs.map((image, index) => (
                <img
                  key={image.img}
                  src={image.img}
                  className={` h-auto mb-4 absolute  ${
                    index === 0
                      ? "left-1/3 transform -translate-x-1/3 translate-y-1/2 w-[956px] z-10"
                      : index === 1
                        ? "left-1/4 transform -translate-x-1/2 translate-y-1/4 w-2/6"
                        : "w-2/6 left-1/2 transform -translate-x-1/2 translate-y-1/8"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          Next
        </button>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {CarouselData.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselMap;
