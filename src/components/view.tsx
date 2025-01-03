import { useState } from "react"
import Eye from "../assets/eye.png" 
import { AnimatePresence, motion } from "framer-motion";

interface ViewRowProps {
    data: any;
    children: React.ReactNode;
}
export default function ViewRow({ data, children }: ViewRowProps) {
    const [ open, setOpen ] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // New state for managing animation

        const handleClose = () => {
            if (!isAnimating) {
            setOpen(false); // Only allow closing if not in the middle of an animation
            }
        };

    return (
        <div >
            <button className="cursor-pointer" onClick={() => setOpen(true)}>
                <img src={Eye} alt="View Cards"/>
            </button>
            <div>
                {open && <div className="fixed inset-0 w-full h-full bg-opacity-50 z-60" onClick={() => {
              // Trigger the close animation on backdrop click
              setIsAnimating(true); // Mark as animating
              setTimeout(() => handleClose(), 300); // Delay the closing state change
            }}></div>}
                {open && 
                <AnimatePresence>
                    <motion.div
                    className="fixed inset-x-[30%] inset-y-auto rounded-3xl md:!pt-0 w-full h-full mx-auto md:max-h-[20.5rem] md:max-w-[30rem] bg-white shadow-md z-50"
                    initial={{ y: "100%", opacity: 0, rotate: 90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{
                        y: "100%",
                        opacity: 0,
                        rotate: -90,
                      }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                        duration: 1,
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onAnimationStart={() => setIsAnimating(true)} // Start animating when the exit animation starts
                    onAnimationComplete={() => setIsAnimating(false)} // Mark as not animating when exit is complete
                    >
                    {/* <motion.div
                        className="w-72 bg-white shadow-lg p-6 rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p>look</p>
                    </motion.div> */}
                       <p>lookback</p>
                    </motion.div>
                </AnimatePresence>
                  }
            </div>
        </div>
        
    )
}
