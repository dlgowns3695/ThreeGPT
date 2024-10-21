import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger를 사용하는 React 훅
 * @param targetRef 애니메이션을 적용할 요소의 ref
 * @param animationType 애니메이션 타입: 'to', 'from', 또는 'fromTo'
 * @param animationOptions GSAP 애니메이션 옵션
 * @param scrollTriggerOptions ScrollTrigger 옵션
 */
export const useGsapScrollTrigger = (
  targetRef: React.RefObject<HTMLElement>,
  animationType: "to" | "from" | "fromTo",
  animationOptions: gsap.TweenVars | { fromVars: gsap.TweenVars; toVars: gsap.TweenVars },
  scrollTriggerOptions: ScrollTrigger.Vars = {}
) => {
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    let animation: gsap.core.Tween;

    /**
     * ScrollTrigger 설정
     * 기존 옵션에 onUpdate 콜백을 추가합니다.
     */
    const scrollTriggerConfig = {
      ...scrollTriggerOptions,
      onUpdate: (self: ScrollTrigger) => {
        scrollTriggerOptions.onUpdate?.(self);
      },
    };

    /**
     * 애니메이션 타입에 따라 적절한 GSAP 메서드를 사용합니다.
     */
    if (animationType === "to" || animationType === "from") {
      animation = gsap[animationType](element, {
        ...(animationOptions as gsap.TweenVars),
        scrollTrigger: scrollTriggerConfig,
      });
    } else if (animationType === "fromTo") {
      const { fromVars, toVars } = animationOptions as {
        fromVars: gsap.TweenVars;
        toVars: gsap.TweenVars;
      };
      animation = gsap.fromTo(element, fromVars, {
        ...toVars,
        scrollTrigger: scrollTriggerConfig,
      });
    }

    /**
     * 컴포넌트 언마운트 시 정리 함수
     * 애니메이션과 모든 ScrollTrigger 인스턴스를 제거합니다.
     */
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [targetRef, animationOptions, scrollTriggerOptions, animationType]);
};
