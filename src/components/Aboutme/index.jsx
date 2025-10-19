import React,{useEffect, useRef} from 'react'
import "./About.css"
import profile2 from '../../assets/PS5_2037.JPG'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";
const About = () => {
  const container = useRef(null);
  //Register plugin
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const el = container.current;
    gsap.fromTo('.about__container',{
      scale:0.7,
    },
    {
      scale:1,
      scrollTrigger:{
        trigger:el,
        scrub:true,
        markers:false,
      }
    }
  )
  },[])
  




  return (
    <section ref={container} id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h4 className="primary__title">About Me</h4>
          <h1 className="title">
            I am <span className="color__primary">Satyapriya Mishra</span>
          </h1>
          <p className="text__muted description">
            Experienced Full Stack Developer with a passion for creating
            dynamic, intuitive, and responsive applications. Proficient in
            multiple programming languages and frameworks, as well as database
            design and management. Strong problem-solving and analytical skills,
            and a track record of delivering high-quality code on time and on
            budget.
          </p>
          <button className="btn btn__primary buttonre" style={{color:"white"}}>
            <Link to="https://drive.google.com/file/d/16oWdCb94qKvMGTpwOxIQFl1GI8bwWuqX/view?usp=sharing">
              See Resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About
