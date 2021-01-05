import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SvgContainer = (props) => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      scale: 4,
    },
    visible: {
      scale: 4,
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
    exit: {
      scale: [4, 3.8, 3.5, 3.2, 3, 2.8, 2.5, 2.3, 2, 1.8, 1.5, 1.3, 1.2, 1, 0],
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <header>
      <AnimatePresence>
        {props.showSvg && (
          <motion.svg
            id="pizzacenter"
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100">
            <motion.path
              d="M37 0.766012L50.54 16.481L50.6306 16.5863L50.7626 16.6297L71.3728 23.4059L59.1203 39.8263L59.0272 39.951L59.0214 40.1065L58.2719 59.9614L37.126 54.4561L37 54.4233L36.874 54.4561L15.7281 59.9614L14.9786 40.1065L14.9728 39.951L14.8797 39.8263L2.62723 23.4059L23.2374 16.6297L23.3694 16.5863L23.46 16.481L37 0.766012Z"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <motion.path
              d="M45.7012 33.0869C45.7012 36.6807 44.7588 39.4004 42.874 41.2461C40.9893 43.082 38.2207 44 34.5684 44H29.4414V22.584H35.2275C38.6455 22.584 41.2432 23.4775 43.0205 25.2646C44.8076 27.0518 45.7012 29.6592 45.7012 33.0869ZM44.0752 33.1455C44.0752 30.0791 43.2939 27.7744 41.7314 26.2314C40.1787 24.6787 37.8936 23.9023 34.876 23.9023H30.9355V42.6816H34.4805C40.877 42.6816 44.0752 39.5029 44.0752 33.1455Z"
              fill="none"
              //   variants={pathVariants}
              initial={{
                opacity: 0,
                // pathLength: 0,
                scale: 4,
              }}
              animate={{
                scale: 4,
                opacity: 1,
                // pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" },
              }}
              exit={{
                scale: [
                  4,
                  3.8,
                  3.5,
                  3.2,
                  3,
                  2.8,
                  2.5,
                  2.3,
                  2,
                  1.8,
                  1.5,
                  1.3,
                  1.2,
                  1,
                  0,
                ],
                transition: { ease: "easeInOut" },
              }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SvgContainer;
