import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateCreations = (elements) => {
  gsap.fromTo(
    elements,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2, // each Item with .2s delay
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0], //first element as trigger
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
};
