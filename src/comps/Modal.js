import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) setSelectedImage(null);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="modal pic"
        initial={{ scale: 0.3, translateY: '-50%', translateX: '-50%' }}
        animate={{ scale: 1, translateY: '-50%', translateX: '-50%' }}
      />
    </motion.div>
  );
};

export default Modal;
