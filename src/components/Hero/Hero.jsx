import React from 'react'
// import { motion } from 'framer-motion'
import "./Hero.css"
import HeroContent from './HeroContent/HeroContent';
import Backgroundformts from './../background/Backgroundformts';
const Hero = () => {
  return (
    <div className="hero">
      <div
        className="inset-0 z-0"
        style={{ position: "relative", inset: 0, zIndex: 0 }}
      >
        <Backgroundformts />
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero