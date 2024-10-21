import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "to" | "from" | "fromTo";

interface AnimationOption {
  type: AnimationType;
  vars: gsap.TweenVars;
  fromVars?: gsap.TweenVars; // Only used when type is 'fromTo'
  position?: number | string | "+=0.25" | ">"; // 타임라인 위치를 더 유연하게 지정
}

export const useGsapTimelineScrollTrigger = (
  triggerRef: React.RefObject<HTMLElement>,
  elementsRef: React.RefObject<HTMLElement>[],
  animationOptions: AnimationOption[],
  scrollTriggerOptions: ScrollTrigger.Vars = {}
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
