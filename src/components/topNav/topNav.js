import React, { useState } from 'react';
import '../../App.css'
import './topNav.css'; // CSS 파일 import

export const TopNav = () => {
        // 초기 타이틀 배열 상태 설정
        const [titles, setTitles] = useState(['OUR ECOSYSTEM','Solutions', 'Developers', 'Learn', '$CGPT', 'Community','Contact us']); // 기본 타이틀
      
        // // 상태 관리 함수 (타이틀 추가)
        // const addTitle = (newTitle) => {
        //   if (newTitle) {
        //     setTitles([...titles, newTitle]); // 새로운 타이틀 추가
        //   }
        // };
      
        return (
          // h-[82px]
          <div className='w-full h-auto text-lg border border-[#353539;] relative'>
            <div className='w-full h-full flex items-center px-[2%]  '>

              {/* 왼쪽 로고 영역 */}
              <div className='flex-shrink-0  w-[15%]'>
                <img  src={`${process.env.PUBLIC_URL}/gptLogo.svg`} alt='Logo'/> 
              </div>
        
{/* 가운데 네브바 내용들 */}
<div className='w-full'>
  <ul className='flex justify-between'> {/* 균일하게 공간을 나누고 중앙 정렬 */}
    {titles.map((title, index) => (
      <li 
        key={index} 
        className={`relative flex-1 flex justify-center group`}
      >
        {/* 첫번째 li를 확인하는 조건문 */}
        {index === 0 ? (
          <>
            {/* 아이콘과 OUR ECOSYSTEM 텍스트 */}
            <div className="relative flex items-center justify-start px-12 border-r border-[#353539] box-border">
              {/* 아이콘 */}
              <div className="relative w-[1rem] h-[1rem] mr-2 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200">
                {/* 아이콘 구성 */}
                <div className="ourNavIcon top-left"></div>
                <div className="ourNavIcon top-right"></div>
                <div className="ourNavIcon bottom-left"></div>
                <div className="ourNavIcon bottom-right"></div>
              </div>

              <span className='text-nowrap mr-2'>{title}</span> {/* 오른쪽에 마진 추가 */}
              <div className='absolute top-0 left-0 right-0 h-[.125rem] topNav-gradient'></div> 
            </div>
          </>
        ) : index === titles.length - 1 ? ( // 마지막 li일 경우
          <span className='py-6'>{title}</span> // 화살표 없이 텍스트만
        ) : (
          <>
            <span className='py-6 mr-2'>{title}</span> {/* 일반 아이템의 오른쪽 마진 */}
            <img src={`${process.env.PUBLIC_URL}/arrowDown.svg`} alt='Logo'/> {/* 화살표 */}
          </>
        )}
      </li>
    ))}
  </ul>
</div>


              {/* 맨 오른쪽 */}
              <div className="header-side-part flex-shrink-0  relative flex w-[15%] justify-end ">
                <a 
                  scramble-link="" 
                  rel="noopener noreferrer" 
                  href="https://app.chaingpt.org/" 
                  target="_blank" 
                  className="btn-primary flex items-center "
                >
                  <div className="btn-primary-lines btn-primary-lines-1"></div>
                  <div className="btn-primary-lines btn-primary-lines-2"></div>
                  <div scramble-text="" className="btn-primary-text p-4 ml-4">launch dapp</div> 
                </a>
              </div>

              <div class="vertical-line vertical-line--left vertical-line-header"></div>
              <div class="vertical-line vertical-line--right vertical-line-header"></div>




            </div>
          </div>
        );
      };

export default TopNav;


