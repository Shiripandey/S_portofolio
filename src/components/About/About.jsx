import { useInView } from "react-intersection-observer";
import './About.css';
import comp from "../../assets/computer-work.gif";

const About = () => {

    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();

    return (
        <main className="about-wrapper" id="about">
            <div className="about-content">
                <div className="about-image">
                    <img src={comp} alt="Computer Work" />
                </div>
                <div className="about-text">
                    <div className="about-title">
                        <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                            A brief <span className="heading-highlight">info about</span> me.
                        </h2>
                        <div className="underline"></div>
                    </div>
                    <div ref={myDesRef} className={despVisible ? "about-description show" : "about-description"}>
                        <p>Hey! I am Shreeya Pandey, a self-taught Software Developer from India with a passion for the MERN stack, machine learning, and computer programming.</p>
                        <p>I specialize in building and breaking cool applications ✨</p>
                        <p>I am currently exploring and designing innovative solutions in the realm of machine learning and programming.</p>
                        <p>I am open to remote opportunities as a software developer, full-stack developer, or React developer.</p>
                        <p>My hobbies include playing the keyboard and playing badminton.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
