import { useEffect, useRef } from "react";
import { animateIntroSection } from "../animations/introAnimations";

export default function Intro(){

    const titleRef= useRef(null);
    const paragraphRef= useRef(null);
    const imageRef= useRef(null);

    useEffect(() => {
        animateIntroSection(titleRef.current, paragraphRef.current, imageRef.current)
    },[])

    return(
        <section className="intro-section">
            <div className="intro-img-box" ref={imageRef}>
                <picture>
                    <source media="(min-width: 900px)" src="./images/desktop/image-interactive.jpg"/>
                    <img src="./images/desktop/image-interactive.jpg" alt="Interactive Image" />
                </picture>
            </div>
            <div className="intro-content-box">
                <div>
                    <h2 ref={titleRef}>The leader in interactive vr</h2>
                </div>
                <p className="intro-content" ref={paragraphRef}>
                    Founded in 2011, Loopstudios has been
                    producing world-class virtual reality
                    projects for some of the best companies
                    around the globe. Our award-winning
                    creations have transformed businesses
                    through digital experience that bind to
                    their brand.
                </p>
            </div>
        </section>
    )
}