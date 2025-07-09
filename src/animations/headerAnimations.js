import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHeaderTitle = (element) => {

gsap.fromTo(
  element,
  {
    y: 120,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    delay: .3,
    scrollTrigger: {
        trigger: element,
        start: "top 90%",
        
        toggleActions: "play reverse play reverse",
    }
  }
);

};
