"use client";
import React from "react";
import Button from "../../components/button";
import Starbg from "@/public/workshop/stars.png";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 1.5, // Slower animation
        ease: [0.4, 0.0, 0.2, 1], // Smooth easeInOut curve
      }}
    >
      <motion.section
        className="h-[80vh] md:h-[90vh] flex flex-col justify-center items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        style={{
          backgroundImage: `url(${Starbg.src})`,
          backgroundPositionY,
        }}
        animate={{
          backgroundPositionX: Starbg.width,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 120,
        }}
      >
        <div>
          <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(150,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
          {/* Start planet */}
          <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
          {/* End planet */}
          {/* Start Ring 1 */}
          <motion.div
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-5 w-5  left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute  left-full  top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <FaGitAlt />
            </div>
            <div className="absolute  left-0 border border-white rounded-full top-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <FaGithub />
            </div>
          </motion.div>
          {/* End Ring 1 */}
          {/* Start Ring 2 */}
          <motion.div
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: "-1turn",
            }}
            transition={{
              repeat: Infinity,
              duration: 70,
              ease: "linear",
            }}
            className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 border-dashed"
          ></motion.div>
          {/* End Ring 2 */}
          {/* Start Ring 3 */}
          <motion.div
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: "1turn",
            }}
            transition={{
              repeat: Infinity,
              duration: 90,
              ease: "linear",
            }}
            className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute h-2 w-2  left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-full border border-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <FaGithub />
            </div>
            <div className="absolute left-0  top-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <FaGitAlt />
            </div>
          </motion.div>
          {/* End Ring 3 */}
          <div className="container relative mt-16 w-[100%]">
            <h1 className="text-4xl md:text-[80px]  md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_140%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
              Master
            </h1>
            <h1 className="text-6xl md:text-[130px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.6))] text-transparent bg-clip-text text-center">
              Git & GitHub
            </h1>
            <p className="text-lg md:text-xl pl-3 pr-3 text-white/70 mt-5 text-center max-w-xl mx-auto">
              Level up your version control and collaboration skills in this
              comprehensive workshop!
            </p>
            <div className="flex justify-center mt-5">
              <Link href={"/webinar/MultiStepForm"}>
                <Button>Register for just ₹199</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
