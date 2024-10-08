// src/components/encrypt/Encrypt.js
import React, { useEffect, useRef } from 'react';

const Encrypt = ({ text, className }) => {  // className 추가
  const titleRef = useRef(null);

  const encryptTitle = (element) => {
    const originalText = element.textContent;
    const length = originalText.length;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let index = 0;

    const interval = setInterval(() => {
      if (index >= length) {
        clearInterval(interval);
        element.textContent = originalText; // 암호화 후 원래 텍스트로 복원
      } else {
        const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
        element.textContent = originalText.substring(0, index) + randomChar + originalText.substring(index + 1);
        index++;
      }
    }, 30); // 50ms 간격으로 암호화
  };

  useEffect(() => {
    if (titleRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.textContent} 요소가 화면에 나타났습니다.`);
            encryptTitle(entry.target); // 요소가 화면에 나타났을 때 암호화 적용
            observer.unobserve(entry.target); // 한 번 나타나면 관찰 중지
          }
        });
      });

      observer.observe(titleRef.current); // 타이틀 요소 관찰 시작

      // 컴포넌트 언마운트 시 observer 해제
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <h2 ref={titleRef} className={className}>  {/* className 적용 */}
      {text}
    </h2>
  );
};

export default Encrypt;
