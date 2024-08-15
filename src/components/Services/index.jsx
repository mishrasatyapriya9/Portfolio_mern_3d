import React,{useEffect,useRef} from 'react'
import { FaPaintBrush } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import "./Services.css"
import {Link } from "react-router-dom";
const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  //Register plugin
    useEffect(() => {
        const el = container.current;
        gsap.fromTo('.service__head', 
          { 
            opacity:0,
          }, 
          {
            opacity:1,
            scrollTrigger: {
                trigger: el,
            }
          })


        gsap.fromTo('.service', 
          { 
            y: -50,
            opacity:0,
          }, 
          {
            y: 0, 
            opacity:1,
            duration: 1, 
            scrollTrigger: {
                trigger: el,
                start:"-100% bottom",
                end:"bottom 20%",
                scrub:true,
            }
          })
    }, [])




  return (
    <section ref={container} id="services">
      <div className="section__wrapper services__container">
        <div className="section__header center">
          <h2 className="primary__title">Services</h2>
          <h3 className="text__muted description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers.
          </h3>
        </div>
        <div className="services__group">
          <article className="service">
            <div className="service__top">
              <div className="icon__container">
                <FaPaintBrush className="icon" />
              </div>
              <h3 className="title">UI/UX Design</h3>
            </div>
            <div className="service__middle">
              <p className="text__muted description">
                Crafting visually stunning and user-friendly interfaces that
                elevate the user experience is my forte. I ensure that every
                design is not only aesthetically pleasing but also intuitive and
                aligned with your brand's vision.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">
                <Link>Read more</Link>
              </button>
            </div>
          </article>

          {/* END UI/UX */}

          <article
            className="service"
            style={{ "--color-primary": "var(--color-success)" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <BsCodeSquare className="icon" />
              </div>
              <h3 className="title">Web Development</h3>
            </div>

            <div className="service__middle">
              <p className="text__muted description">
                Building robust, scalable, and efficient web applications is at
                the core of what I do. I specialize in creating responsive,
                high-performance websites that offer seamless user experiences
                across all devices.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">
                <Link>Read more</Link>
              </button>
            </div>
          </article>

          {/* END WEB DEVELOPMENT */}

          <article
            className="service"
            style={{ "--color-primary": "blueviolet" }}
          >
            <div className="service__top">
              <div className="icon__container">
                <TfiWrite className="icon" />
              </div>
              <h3 className="title">Content Creation</h3>
            </div>

            <div className="service__middle">
              <p className="text__muted description">
                Delivering engaging and impactful content that resonates with
                your audience. I create compelling copy and visual content that
                drives engagement, strengthens your brand, and communicates your
                message effectively.
              </p>
            </div>
            <div className="service__bottom">
              <button className="btn btn__primary">
                <Link>Read more</Link>
              </button>
            </div>
          </article>

          {/* END CONTENT CREATION */}
        </div>
      </div>
    </section>
  );    
}    

export default Services
