import React from "react";
import { motion } from "framer-motion";
import "./preload.scss";
import Logo from "./logoani";

const Preloadpage: React.FC = () => {
  const isMobile = window.innerWidth <= 768; // Assuming mobile width is less than or equal to 768px

  return (
    <>
      {!isMobile && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 4, duration: 0.3 }}
          className="logo1"
        >
          <Logo />
        </motion.div>
      )}
      <motion.div
        className="blackscreen1"
        initial={{ y: "0%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 4.3 }}
      />
      <motion.div
        className="blackscreen1"
        initial={{ y: "0%", height: "100%", width: "20%" }}
        animate={{ y: "0%", height: "0%", width: "20%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 4.3 }}
      />
      <motion.div
        className="blackscreen1"
        initial={{ y: "0%", height: "100%", width: "40%" }}
        animate={{ y: "0%", height: "0%", width: "40%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 4.3 }}
      />
      <motion.div
        className="blackscreen1"
        initial={{ y: "0%", height: "100%", width: "60%" }}
        animate={{ y: "0%", height: "0%", width: "60%" }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 4.3 }}
      />
      <motion.div
        className="blackscreen1"
        initial={{ y: "0%", height: "100%", width: "80%" }}
        animate={{ y: "0%", height: "0%", width: "80%" }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 4.3 }}
      />
    </>
  );
};

export default Preloadpage;
