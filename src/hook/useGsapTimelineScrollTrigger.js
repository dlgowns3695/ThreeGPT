import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapTimelineScrollTrigger = (
  triggerRef,
  elementsRef,
  animationOptions,
  scrollTriggerOptions
) => {
  useEffect(() => {
    const elements = elementsRef.map((ref) => ref.current);
    if (!triggerRef.current || elements.some((element) => !element)) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        ...scrollTriggerOptions,
      },
    });

    elements.forEach((element, index) => {
      const option = animationOptions[index];
      switch (option.type) {
        case "to":
          timeline.to(element, option.vars, option.position);
          break;
        case "from":
          timeline.from(element, option.vars, option.position);
          break;
        case "fromTo":
          if (option.fromVars) {
            timeline.fromTo(element, option.fromVars, option.vars, option.position);
          }
          break;
      }
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [triggerRef, elementsRef, animationOptions, scrollTriggerOptions]);
};
