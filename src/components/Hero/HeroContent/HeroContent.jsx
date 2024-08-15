import "./Hero.css";
import profilepic from "../../../assets/IMG_20240725_173925.png";
import styled from "styled-components";
import { motion } from 'framer-motion';
const HeroContent = () => {
  const ScrollingWrapper = styled.div`
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    width: 100%;
  `;
  const ScrollingText = styled(motion.div)`
    display: inline-block;
    font-size: 8rem; /* Adjust based on your design */
    padding-left: 100%;
    will-change: transform;
  `;
  const textVarients = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5,type:"spring", staggerChildren: 0.1 ,stiffness:30},
    },
  };
  const imageVarients = {
    initial: {
      x: +500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.1 },
    },
  };
  const sliderVarients = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-100%",
      transition: { repeat:Infinity,repeatType:"mirror", duration:15,ease:"linear"},
    },
  };
  return (
    <div
      className="container"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <div
        className="hero main"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <motion.div
          className="wrapper"
          variants={textVarients}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={textVarients} className="textcontainer">
            <motion.h2 variants={textVarients} className="mainname">
              Hii i am <span>Satyapriya ,</span>
            </motion.h2>
            <motion.h1 variants={textVarients} className="name">
              A <span className="fastFlicker">Full stack developer </span> and{" "}
              <span className="flicker">UI Designer </span>
            </motion.h1>
          </motion.div>
          <motion.div variants={textVarients} className="buttons">
            <motion.button variants={textVarients} className="btn1">
              See latest Works
            </motion.button>
            <motion.button variants={textVarients} className="btn2">
              Contact me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="imageContainer"
          variants={imageVarients}
          initial="initial"
          animate="animate"
        >
          <img
            src={profilepic}
            alt=""
            style={{ height: 500, width: 500 }}
            className="heroimage"
          />
        </motion.div>
      </div>
      {/* <div className="textContainersliding">
        <motion.div
          className="slidingtext"
          variants={sliderVarients}
          initial="initial"
          animate="animate"
        >
          <span>UI Designer,Content Creator,Full Stack Developer</span>
        </motion.div>
      </div> */}
      <ScrollingWrapper className="textContainerscroll">
        <ScrollingText
          className="textScrolling"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Full Stack Developer,UI Designer,Content Creator
        </ScrollingText>
      </ScrollingWrapper>
    </div>
  );
};

export default HeroContent;