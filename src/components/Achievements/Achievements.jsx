import React from "react";
import { useInView } from "react-intersection-observer";
import './Achievements.css';
import tropy from '../../assets/tropy.gif'; // Adjust the path as needed

const Achievements = () => {
    const { ref: myTitleRef, inView: titleVisible } = useInView();
    const { ref: myDesRef, inView: despVisible } = useInView();
    
    return (
        <section className="achievements-wrapper" id="achievements">
            <div className="trophy-container">
                <img src={tropy} alt="Trophy" className="trophy-image" />
            </div>
            <h2 ref={myTitleRef} className={titleVisible ? "component-headings show" : "component-headings"}>
                My <span className="heading-highlight">achievements </span>so far.
            </h2>
            <div className="underline"></div>
            <div className="achievements-content">
                <div ref={myDesRef} className={despVisible ? "list-wrapper show" : "list-wrapper"}>
                    <ul>
                        <li><p>Among the top-performing all-female teams at Woodpecker's Hackathon; developed a disaster prediction algorithm and website.</p></li>
                        <li><p>Achieved fifth position in the intra-college SIH Hackathon (2022).</p></li>
                        <li><p>Secretary of the National Service Scheme (NSS) Club; organized and managed events such as blood donation drives and volunteering in Paralympic events.</p></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
