import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  useEffect(() => {
    const button = document.getElementById("animated-button");
    const flair = document.getElementById("flair");

    if (!button || !flair) return;

    const getXY = (e) => {
      const { left, top } = button.getBoundingClientRect();
      return {
        x: e.clientX - left,
        y: e.clientY - top,
      };
    };

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);
      gsap.set(flair, { left: x, top: y, width: 0, height: 0});
      gsap.to(flair, {
        width: 700,
        height: 700,
        duration: 1.2,
     
        ease: "expo.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(flair, {
        width: 0,
        height: 0,
        duration: 0.9,
   
        ease: "expo.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      id="animated-button"
      className="relative top-[3vw] px-15 py-4 bg-green-800 text-white text-lg font-semibold border-2 rounded-full overflow-hidden group"
    >
      <span
        id="flair"
        className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-white"
        style={{ width: 0, height: 0 }}
      />
      <span className="relative z-10 transition-colors duration-500 ">
      <h1 className="overflow-hidden group-hover:text-zinc-900">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: 0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                Browse  all Categories

              </motion.span>
              </h1>
      </span>
    </button>
  );
};

export default AnimatedButton;


{/* <h1 className="overflow-hidden group-hover:text-zinc-900">
                <motion.span
                initial={{y:"100%"}}
                whileInView={{y:0}}
                transition={{duration:1, ease:"backInOut" , delay: 0.1}}
                viewport={{once:true}}
                className="inline-block"
              >
                Browse  all Categories

              </motion.span>
              </h1> */}

