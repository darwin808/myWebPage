import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function svgArrow() {
  return (
    <div>
      <motion.svg
        id="arrow"
        className="pizza-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100">
        <path
          d="M127 74.5H278.5V143H127V219L1.5 120.5L127 1.5V74.5Z"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}

export default svgArrow;
