import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ExperienceSairam from "../experience/experience-comp/ExperiencePage.tsx";
import CategoriesPage from "../categories/CategoriesPage.tsx";
import GiftBoxPage from "../giftbox/giftbox-comp/GiftBoxPage.tsx";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      duration: 2,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      duration: 2,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Crousal = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const componets = [<CategoriesPage />, <GiftBoxPage />, <ExperienceSairam />];

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring" },
            opacity: { duration: 2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {componets[page]}
        </motion.div>
      </AnimatePresence>
      <div
        className=" absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-1/2 bg-white border rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(1)}
      >
        {"‣"}
      </div>
      <div
        className="absolute top-1/2 left-1 transform -translate-y-1/2 -translate-x-1/2 bg-white border rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20"
        onClick={() => paginate(-1)}
      >
        {"<"}
      </div>
    </div>
  );
};

export default Crousal;
