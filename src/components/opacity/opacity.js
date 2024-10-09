import React, { useEffect, useRef } from 'react';

// Opacity 컴포넌트: 화면에 보이는 요소의 투명도를 조절하는 기능을 제공
const Opacity = ({ className, children, index }) => {
  const divRefs = useRef([]); // div 요소를 위한 refs 배열 생성

  useEffect(() => {
    // Intersection Observer 생성: 요소가 뷰포트에 들어오거나 나가는 것을 감지
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // 요소가 화면에 들어오면 투명도 1
          } else {
            entry.target.style.opacity = '0.5'; // 그 외에는 투명도 0.5
          }
        });
      },
      {
        threshold: 1, // 요소가 100% 화면에 들어왔을 때 트리거
      }
    );

    // 각 divRef 요소에 대해 observer 연결
    divRefs.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    // 컴포넌트 언마운트 시 observer 해제
    return () => {
      divRefs.current.forEach((div) => {
        if (div) {
          observer.unobserve(div);
        }
      });
    };
  }, []); // 빈 의존성 배열로 인해 최초 마운트 시에만 실행

  return (
    <div
      ref={(el) => (divRefs.current[index] = el)} // 각 div에 ref를 할당
      style={{ opacity: 0.5, transition: 'opacity 0.5s ease' }} // 초기 투명도 0.5 설정 및 애니메이션 효과
      className={className} // 전달된 className 적용
    >
      {children} 
    </div>
  );
};

export default Opacity;
