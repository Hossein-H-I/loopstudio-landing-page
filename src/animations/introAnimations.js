import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateIntroSection = (titleEl, paragraphEl, imageEl) => {
  gsap.fromTo(
    titleEl,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleEl,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      markers: true,
    }
  );

  gsap.fromTo(
    paragraphEl,
    { x: -80, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paragraphEl,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      markers: true,
    }
  );

  gsap.fromTo(
    imageEl,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageEl,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
};
