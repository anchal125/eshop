import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText,ScrollTrigger);


export const useTextAnimation = (enabled=true,withScroll = false) => {
  useGSAP(() => {
    if(!enabled){
      return
    }
    const elements = gsap.utils.toArray(".animateText");

    elements.forEach((el) => {
      const split = new SplitText(el, { type: "chars" });

      gsap.from(split.chars, {
        y: 100,
        autoAlpha: 0,
        scale: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.04,
        duration: 1,
        scrollTrigger: withScroll? 
        { 
          trigger: el,
          scrub:true,
          start:'top 90%',
          end:'+=450',
        }
        : undefined
      });
    });
  }, { dependencies: [enabled,withScroll] });
};