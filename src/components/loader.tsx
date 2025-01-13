import { motion } from "framer-motion";

export default function Loader() {
  const swordVariants = {
    animate: {
      scale: [1, 1.2, 1],
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const shadowVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/30 backdrop-blur-[6px] z-50">
      <div className=" h-full relative flex items-center justify-center">
        <motion.div
          className="sword-shadow"
          variants={shadowVariants}
          animate="animate"
        />
        <motion.div
          className="sword"
          variants={swordVariants}
          animate="animate"
        />
      </div>
    </div>
  );
}
