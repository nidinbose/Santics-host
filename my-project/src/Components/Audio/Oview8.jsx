import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Oview8 = () => {
  return (
    <div className="container mx-auto p-4" 
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white xl:mb-[20vh] xl:mt-[10vh]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Gaming Headfones
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
<Link to={`/viewcase/67591b95cd789d4a9d6a7a9b`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.2 }}
  >

  </motion.div>
</motion.div>
</Link>


<Link to={`/viewcase/675922b5cd789d4a9d6a7acb`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }} 
>
  <img
    src="https://dlcdnwebimgs.asus.com/gain/FF40A9C7-020A-4D51-BCD5-8896980F4EDA/w750/h470"
    alt="Photo 2"
    className="w-full xl:h-full object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.6 }}
  >

  </motion.div>
</motion.div>
</Link>

     
<Link to={`/viewcase/67595d37e07c0a722241fe26`}>
<motion.div
  className="relative overflow-hidden image-container"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ y: -100, opacity: 0 }}  
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }} 
>
  <img
    src="https://storage-asset.msi.com/global/picture/image/feature/multimeda/headset/GH30v2/gh30v2-foldable.jpg"
    alt="Photo 2"
    className="w-full xl:h-[42vh] object-cover"
  />

  <motion.div
    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
    whileHover={{ opacity: 3 }}
    transition={{ duration: 0.3 }}
  >
 
  </motion.div>
</motion.div>
</Link>


       

       
      </div>
    </div>
  );
};

export default Oview8;