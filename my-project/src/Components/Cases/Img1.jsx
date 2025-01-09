import React from "react";
import { motion } from "framer-motion";
// import './Css/img1.css';
import { Link } from "react-router-dom";

const Img1 = () => {
  return (
    <div className="container mx-auto p-4 h-auto w-auto" 
    style={{ backgroundImage: "url('/images/bgrog.pn')" }}>
         <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh] text-start"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
       <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-clip-text text-transparent text-5xl font-bold font-mono">
  Custom Cases
</h1>
 
      </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <Link to={`/viewcase/66f9921527f4db6d22acc448`}>
      <motion.div
          className="relative overflow-hidden image-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -100, opacity: 0 }}  
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }} 
        >
          <img
            src="https://dlcdnwebimgs.asus.com/gain/274EB226-5FEE-4C12-9F2B-880F83294342/w1000/h732"
            alt="Photo 1"
            className="w-full h-full object-cover"
          />
        </motion.div></Link>
        <Link to={`/viewcase/6753dfc3fbaa1f03cbe2be95`}>
        <motion.div
          className="relative overflow-hidden image-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -100, opacity: 0 }}  
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }} 
        >
          <img
            src="https://images.acer.com/is/image/acer/Orion_5000_AGW_KSP05?$responsive$"
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
        </motion.div></Link>
    <Link to={`/viewcase/67541901bddfa8827c144902`}>
    <motion.div
          className="relative overflow-hidden image-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -100, opacity: 0 }}  
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }} 
        >
          <img
            src="https://asset.msi.com/resize/image/global/product/product_16841411857d793d661a57d312ee8625e9db743934.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
        </motion.div></Link>
      </div>
    </div>
  );
};

export default Img1;
