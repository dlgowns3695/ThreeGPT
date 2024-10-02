import React from 'react';

import '../../App.css';
import './section02.css'; // CSS 파일 import

export const Section02 = () => {
  // 슬라이드 데이터를 배열로 정의
  const slides = [
    { number: '01', title: 'Code Explainer' },
    { number: '02', title: 'AI Assistant' },
    { number: '03', title: 'Blockchain Expert' },
  ];

  return (
    <>
      {/* 전체 잡고 상단, 하단 col */}
      <div className="w-full h-[100vh] bg-black flex flex-col justify-between relative">
        {/* 상단 보더박스 */}
        <div className='border border-[#efefe5] w-[calc(33.85%-4px)] h-[15%] absolute top-[16vh] left-[16.42%] z-10'></div>

        {/* 슬라이드 컨테이너 */}
        <div className='flex w-full h-[15%] ml-[16.42%] mt-[16vh] text-[#fff]'>
          {/* 슬라이드 배열을 map으로 반복 렌더링 */}
          {slides.map((slide, index) => (
            <div className='flex w-[calc(33.85%-4px)]' key={index}>
              <div className="flex w-full">
                <div className="flex justify-center items-center  w-[8rem] border border-[#10101a] text-sm">
                  {slide.number}
                </div>
                <div className="flex flex-1 justify-center items-center border-t border-r border-b border-[#10101a] uppercase">
                  <div>{slide.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 (추가할 여유 공간) */}
        <div></div>
      </div>
    </>
  );
};

export default Section02;
