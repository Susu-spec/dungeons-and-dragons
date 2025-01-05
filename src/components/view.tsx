import { useState } from "react";
import Eye from "../assets/eye.png";
import { AnimatePresence, motion } from "framer-motion";
import { withClick } from "./with-click";
import { ViewRowProps } from "../types";

export default function ViewRow({ data, CardContent }: ViewRowProps) {
  const [open, setOpen] = useState(false);

  const FlipCard = withClick(CardContent);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full relative">
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        <img src={Eye} alt="View Cards" />
      </button>

      {open && (
        <div
          className="fixed inset-0 w-full h-full bg-opacity-50 z-50"
          onClick={() => {
            setTimeout(() => handleClose());
          }}
        ></div>
      )}
      <AnimatePresence>
        {open && (
          <div className=" w-full h-full mx-auto md:max-h-[20.5rem] md:max-w-[30rem]">
            <motion.div
              className="fixed inset-x-[30%] inset-y-[20%] md:!pt-0 w-full h-full mx-auto md:max-h-[40.5rem] md:max-w-[30rem] z-50"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on card click
            >
              <FlipCard data={data} width="100%" height="100%" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
