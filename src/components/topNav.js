import React, { useState } from 'react';
import '../App.css'; // 상위 폴더로 가서 App.css를 가져옴 / 공통css


export const TopNav = () => {
        // 초기 타이틀 배열 상태 설정
        const [titles, setTitles] = useState(['Home', 'About', 'Services']); // 기본 타이틀
      
        // 상태 관리 함수 (타이틀 추가)
        const addTitle = (newTitle) => {
          if (newTitle) {
            setTitles([...titles, newTitle]); // 새로운 타이틀 추가
          }
        };
      
        return (
          <div className='w-full flex items-center justify-between p-2'>
            {/* 왼쪽 로고 영역 */}
            <div className='flex-shrink-0'>
              <img src='logo.png' alt='Logo' className='h-8 w-8' /> {/* 로고 이미지 */}
            </div>
      
            {/* 가운데 네브바 내용들 */}
            <div className='w-full flex justify-center mx-2'> {/* 양쪽 패딩 2% */}
              <ul className='flex flex-grow justify-around'> {/* 균일하게 공간을 나누도록 설정 */}
                {titles.map((title, index) => (
                  <li key={index} className='text-center flex-1'> {/* flex-1을 사용해 균일하게 배치 */}
                    {title}
                  </li>
                ))}
              </ul>
            </div>
      
            {/* 오른쪽 로고 영역 */}
            <div className='flex-shrink-0'>
              <img src='logo.png' alt='Logo' className='h-8 w-8' /> {/* 로고 이미지 */}
            </div>
          </div>
        );
      };

export default TopNav;
