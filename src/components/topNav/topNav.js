import React, { useState, useEffect } from 'react';
import '../../App.css';
import './topNav.css'; // CSS 파일 import

export const TopNav = () => {
  // 초기 타이틀 배열 상태 설정
  const [titles, setTitles] = useState(['OUR ECOSYSTEM', 'Home ', 'About GPT', 'Research', 'Products']); // 기본 타이틀

  // 스크램블 함수
  const scrambleText = (text) => {
    // 원래 텍스트의 문자로 chars 설정
    const chars = text.split('');
    let scrambled = '';
    for (let i = 0; i < text.length; i++) {
      scrambled += chars[Math.floor(Math.random() * chars.length)];
    }
    return scrambled;
  };

  // useEffect를 사용하여 scramble 효과를 설정
  useEffect(() => {
    const scrambleTextElements = document.querySelectorAll('.scramble-text');

    scrambleTextElements.forEach((element) => {
      const originalText = element.getAttribute('data-text');

      // 마우스가 요소에 들어갈 때 scramble 효과 적용
      const handleMouseEnter = () => {
        // console.log('호버 신호 발생:', originalText); // 기존 타이틀 출력

        // 스크램블 효과 적용
        let iterations = 0;
        const interval = setInterval(() => {
          if (iterations < 15) { // 5번 반복
            element.textContent = scrambleText(originalText);
            iterations++;
          } else {
            clearInterval(interval);
            element.textContent = originalText; // 원래 텍스트로 복원
          }
        }, 10); // 50ms마다 스크램블
      };

      // 이벤트 리스너 등록
      element.addEventListener('mouseenter', handleMouseEnter);
      
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      };
    });
  }, [titles]); // titles 배열이 변경될 때마다 재실행

  return (
    <div className='w-full h-auto text-lg border-b border-[#353539] relative z-[9999] '>
      <div className='w-full h-full flex items-center px-[2%] bg-[#0a090f]'>
        {/* 왼쪽 로고 영역 */}
        <div className='flex-shrink-0 w-[15%] flex items-center  gap-6'>
          <img className='w-[42px] h-[44px]' src={`${process.env.PUBLIC_URL}/ChatGPTLogo.svg`} alt='ChatGPTLogo' />
          <span className='text-3xl'> ChatGPT</span>
        </div>
        

        {/* 가운데 네브바 내용들 */}
        <div className='w-full'>
          <ul className='flex justify-between'>
            {titles.map((title, index) => (
              <li key={index} className={`relative flex-1 flex justify-center group`}>
                {index === 0 ? (
                  <div className="relative flex items-center justify-start px-12 border-r border-[#353539] box-border">
                  {/* 아이콘 */}
                  <div className="relative w-[1rem] h-[1rem] mr-2 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200">
                    <div className="ourNavIcon top-left"></div>
                    <div className="ourNavIcon top-right"></div>
                    <div className="ourNavIcon bottom-left"></div>
                    <div className="ourNavIcon bottom-right"></div>
                  </div>
                  <span className='text-nowrap mr-2'>{title}</span> {/* 오른쪽에 마진 추가 */}
                  <div className='absolute top-0 left-0 right-0 h-[.125rem] topNav-gradient'></div>
                </div>
                ) : index === titles.length - 1 ? (
                  <span className='py-6 violetFont'>{title}</span>
                ) : (
                  <>
                    <span data-text={title} className='scramble-text py-6 mr-2 violetFont'>{title}</span>
                    
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 맨 오른쪽 */}
        <div className="header-side-part flex-shrink-0 relative flex w-[15%] justify-end">
          <a
            rel="noopener noreferrer"
            href="https://app.chaingpt.org/"
            target="_blank"
            className="btn-primary flex items-center"
          >
            <div className="btn-primary-lines btn-primary-lines-1"></div>
            <div className="btn-primary-lines btn-primary-lines-2"></div>
            <div className="btn-primary-text p-4 ml-4">Three GPT</div>
          </a>
        </div>

        <div className="vertical-line vertical-line--left vertical-line-header"></div>
        <div className="vertical-line vertical-line--right vertical-line-header"></div>
      </div>
    </div>
  );
};

export default TopNav;
