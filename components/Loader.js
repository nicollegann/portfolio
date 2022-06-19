import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// adapted from https://egghead.io/blog/how-to-animate-elements-when-in-view-on-scroll-with-framer-motion

export default function Loader({children}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: 15 },}}
    >
        {children}
    </motion.div>
  );
}
