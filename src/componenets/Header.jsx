import { useEffect, useRef } from "react";
import { animateHeaderTitle } from "../animations/headerAnimations";
import Nav from "./Nav";

export default function Header(){

    const titleRef = useRef(null);
    
    useEffect(() => {
    animateHeaderTitle(titleRef.current);
  }, []);



    return(
        <header>
            <Nav/>
            <div className="header-container">
                <div className="header-content-box">
                    <h1 ref={titleRef}>Immersive experiences that deliver</h1>
                </div>
            </div>
        </header>
    )
}