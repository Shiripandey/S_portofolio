import React from "react";
import './Services.css';
import { illusFrontend, illusBackend, illusMobile } from "../../assets";
import { useInView } from "react-intersection-observer";

const Skills = () => {
    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myCardRef, inView: cardVisible } = useInView();

    return (
        <div className="skills-wrapper">
            <header className="title-container" id="skills">
                <h2 
                    ref={myTitleRef} 
                    className={titleVisible ? "component-headings show" : "component-headings"}
                >
                    <span className="heading-highlight">Services</span> I <span className="heading-highlight">provide</span>.
                </h2>
                <div className="underline"></div>
            </header>
            <div ref={myCardRef} className="cards-container">
                <div className={cardVisible ? "Card one show" : "Card one"}>
                    <div className="Card-inner">
                        <div className="skills-images">
                            <img src={illusFrontend} alt="Frontend" />
                        </div>
                        <h3>Frontend</h3>
                        <p>Product landing pages, Single Page Apps</p>
                    </div>
                </div>

                <div className={cardVisible ? "Card two show" : "Card two"}>
                    <div className="Card-inner">
                        <div className="skills-images">
                            <img src={illusBackend} alt="Backend" />
                        </div>
                        <h3>Backend</h3>
                        <p>Business Logic, Databases, APIs</p>
                    </div>
                </div>

                <div className={cardVisible ? "Card three show" : "Card three"}>
                    <div className="Card-inner">
                        <div className="skills-images">
                            <img src={illusMobile} alt="Data Analyst" />
                        </div>
                        <h3>Data Analyst</h3>
                        <p>Data Cleaning, Visual Analytics, Predictive Modeling</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
