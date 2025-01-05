import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

export function withClick(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateXaxis, setRotateXaxis] = useState(0);
    const [rotateYaxis, setRotateYaxis] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
      setIsFlipped((prev) => !prev);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = event.clientX - rect.x - centerX;
      const mouseY = event.clientY - rect.y - centerY;
      setRotateXaxis((mouseY / rect.height) * 20);
      setRotateYaxis((mouseX / rect.width) * 20);
    };

    const handleMouseLeave = () => {
      setRotateXaxis(0);
      setRotateYaxis(0);
    };

    const dx = useSpring(0, spring);
    const dy = useSpring(0, spring);

    useEffect(() => {
      dx.set(-rotateXaxis);
      dy.set(rotateYaxis);
    }, [rotateXaxis, rotateYaxis]);

    return (
      <AnimatePresence>
        <motion.div
          onClick={handleClick}
          transition={spring}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: `${props.width}`,
            height: `${props.height}`,
          }}
        >
          <motion.div
            ref={ref}
            whileHover={{ scale: 1.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              rotateX: dx,
              rotateY: dy,
            }}
          >
            <div
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
                width: "100%",
                height: "100%",
              }}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                transition={spring}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: isFlipped ? 0 : 1,
                  backfaceVisibility: "hidden",
                  position: "absolute",
                }}
              >
                <Component
                  {...props}
                  variant="Front"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ rotateY: 180 }}
                animate={{ rotateY: isFlipped ? 0 : 180 }}
                transition={spring}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: isFlipped ? 1 : 0,
                  backfaceVisibility: "hidden",
                  position: "absolute",
                }}
              >
                <Component
                  {...props}
                  variant="Back"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };
}