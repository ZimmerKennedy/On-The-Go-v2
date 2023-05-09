import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TransitioningBorder = ({ isHovered }) => {
  const borderVariants = {
    initial: { width: "100%" },
    hover: { width: "100%", transition: { duration: 0.3 }, ease: "easeOut" },
    visible: { width: "70%" },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="h-0.5 bg-text-color"
        variants={borderVariants}
        animate={isHovered ? "hover" : "visible"}
        exit={{ width: "100%" }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default TransitioningBorder;