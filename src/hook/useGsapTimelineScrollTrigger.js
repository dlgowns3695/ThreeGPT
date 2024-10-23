import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const useGsapTimelineScrollTrigger = (
  // 매개변수로 4가지 받고
  triggerRef,
  elementsRef,
  animationOptions,
  scrollTriggerOptions
) => {
  useEffect(() => {
    // 각 전달된 값들을 출력
    console.log("triggerRef:", triggerRef);
    console.log(
      "elementsRef:",
      elementsRef.map((ref) => ref.current)
    ); // 각 요소의 DOM을 가져와 출력
    console.log("animationOptions:", animationOptions);
    console.log("scrollTriggerOptions:", scrollTriggerOptions);

    // 요소들의 Ref에서 현재 DOM 요소를 가져옴
    const elements = elementsRef.map((ref) => ref.current);
    console.log(elements);

    // triggerRef나 elements 중 하나라도 없으면 애니메이션을 실행하지 않음
    if (!triggerRef.current || elements.some((element) => !element)) return;

    // ScrollTrigger 옵션을 적용한 GSAP 타임라인 생성
    const timeline = gsap.timeline({
      scrollTrigger: {
        markers: true, // 마커 기능 활성화
        trigger: triggerRef.current, // 스크롤 트리거가 작동할 DOM 요소
        ...scrollTriggerOptions, // 사용자로부터 전달받은 추가 옵션 (start, end 등)
      },
    });

    // 각 요소에 대한 애니메이션을 설정
    elements.forEach((element, index) => {
      const option = animationOptions[index];
      switch (option.type) {
        case "to": // 'to' 애니메이션: 특정 상태로 이동
          timeline.to(element, option.vars, option.position);
          break;
        case "from": // 'from' 애니메이션: 특정 상태에서 시작
          timeline.from(element, option.vars, option.position);
          break;
        case "fromTo": // 'fromTo' 애니메이션: 특정 상태에서 다른 상태로 전환
          if (option.fromVars) {
            timeline.fromTo(
              element,
              option.fromVars,
              option.vars,
              option.position
            );
          }
          break;
      }
      // 각 요소에 대한 애니메이션이 설정된 후 로그 출력
      console.log("애니메이션 작동", element); // 어떤 요소에서 애니메이션이 작동하는지 확인할 수 있음
    });

    // 컴포넌트가 언마운트될 때 타임라인 및 ScrollTrigger를 정리
    return () => {
      timeline.kill(); // 타임라인 애니메이션 제거
      ScrollTrigger.getAll().forEach((st) => st.kill()); // 모든 ScrollTrigger 제거
    };
  }, [triggerRef, elementsRef, animationOptions, scrollTriggerOptions]); // 의존성 배열로 전달된 값들이 변경될 때마다 이 훅이 실행됨
};
