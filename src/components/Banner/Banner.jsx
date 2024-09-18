import React, { useEffect, useRef } from "react";
import shree from "../../assets/shree.png";
import './Banner.css';
import Typed from "typed.js";

const Banner = () => {

  // Create the ref for the typewriter animation text
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        "Welcome to my portfolio website",
        "a self-taught developer",
        "I build web applications ",
      ],
      typeSpeed: 60,
      backSpeed: 28,
      backDelay: 1000, // Delay before starting the backspacing
      startDelay: 500, // Delay before typing starts
      loop: true,
      showCursor: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="banner-wrapper" id="home">
        <section className="banner-slogan-container">
          <p className="bn-small-text">Hi there,</p>
          <h1>I'm Shreeya, <span ref={elementRef}></span></h1>
          
          <p>
            <i className="fa-solid fa-laptop-code"></i> {"  "}
            Passion for innovation and relentless work ethic turns code into endless possibilities
          </p>
          <div className="banner-buttons-container">
            <button><a href="#contact">Let's talk ✉</a></button>
            <button id="resume-btn"><a href=" https://drive.google.com/drive/folders/1aRhc0CMn-U86CyBVym4vxdheuaGX0iJe?usp=sharing " target="_blank" rel="noopener noreferrer">Resume ↗</a></button>
          </div>
        </section>

        <section className="banner-image-container">
          <div className="banner-sticker">
            <p>Software Developer</p>
            <p>CS/IT</p>
          </div>
          {/* Adjust image size directly in JSX */}
          <img 
            src={shree} 
            alt="hero" 
            style={{ width: '600px', height: 'auto' }} 
          />
          <div className="cover">
            <p>MERN Stack Developer</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
