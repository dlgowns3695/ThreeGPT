import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "to" | "from" | "fromTo";

interface AnimationOption {
  type: AnimationType;
  ref: React.RefObject<HTMLElement>;
  vars: gsap.TweenVars;
  fromVars?: gsap.TweenVars; // Only used when type is 'fromTo'
  position?: number | string | "+=0.25" | ">"; // 타임라인 위치를 더 유연하게 지정
}

/**
 * GSAP ScrollTrigger를 사용하는 React 훅
 *
 * @param triggerRef ScrollTrigger의 트리거 요소에 대한 ref
 * @param animationOptions 애니메이션 옵션 배열
 * @param scrollTriggerOptions ScrollTrigger 옵션
 *
 * @example
 * useGsapTimelineScrollTrigger(
 *   triggerRef,
 *   [
 *     {
 *       type: "fromTo",
 *       ref: elementRef,
 *       fromVars: { x: "-100%" },
 *       vars: { x: "0%", ease: "power2.out", duration: 2.5 },
 *     },
 *     {
 *       type: "to",
 *       ref: anotherElementRef,
 *       vars: { x: "100%", ease: "power2.out", duration: 2.5 },
 *     },
 *   ],
 *   {
 *     start: "top top",
 *     end: "bottom bottom",
 *     scrub: 1,
 *   }
 * );
 */
export const useGsapTimelineScrollTrigger = (
  triggerRef: React.RefObject<HTMLElement>,
  animationOptions: AnimationOption[],
  scrollTriggerOptions: ScrollTrigger.Vars = {}
) => {
  useEffect(() => {
    if (
      !triggerRef.current ||
      animationOptions.some((option) => !option.ref.current)
    )
      return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        ...scrollTriggerOptions,
      },
    });

    animationOptions.forEach((option) => {
      switch (option.type) {
        case "to":
          timeline.to(option.ref.current, option.vars, option.position);
          break;
        case "from":
          timeline.from(option.ref.current, option.vars, option.position);
          break;
        case "fromTo":
          if (option.fromVars) {
            timeline.fromTo(
              option.ref.current,
              option.fromVars,
              option.vars,
              option.position
            );
          }
          break;
      }
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [triggerRef, animationOptions, scrollTriggerOptions]);
};
