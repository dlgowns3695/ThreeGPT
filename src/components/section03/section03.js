import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import './section03.css'; // CSS 파일 import

export const Section03 = () => {




  return (
    <>
    {/* 기본적인 구조 예상. 최상단 글귀 + 하단 컨텐츠 div
    
        하단: 반복문 돌리고,

        컨텐츠 px-2% border-b  왼쪽공간, 오른쪽 공간 width 지정해서 양쪽 나누고, 민h 값 주기

        
    
    */}
         {/* 전체 컨테이너 안에 상단바에 글귀 하단에 나머지 소개? 라인 */}
        <div className='w-full h-full'>

            {/* 상단 */}
            <div className="bg-red-500 flex justify-between w-full  mt-[20vh] md:pl-[8%] 1500size:px-[2%] z-10">
            
            {/* 원 두개 */}
            <div className=''>
                <div className="relative ">
                <div className="absolute top-[-20px] left-[5px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.5rem] 1500size:h-[0.5rem] rounded-full bg-[#10101a]"></div>
                <div className="absolute top-[-20px] left-[25px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.5rem] 1500size:h-[0.5rem] rounded-full bg-[#10101a]"></div>

                {/* 텍스트 */}
                <h2 className="md:text-3xl lg:text-4xl 1500size:text-5xl md:p-2 1500size:p-4 text-center section-title-bordered">
                    {/* 가상 선택자: before, after */}
                    <span className="section-title-bordered-line-1">
                    <span className="section-title-bordered-line-2 mx-2 violetFont ">Your ChatGPT</span>
                    </span>
                </h2>

                <h2 className="md:text-3xl lg:text-4xl 1500size:text-5xl p-4 text-left violetFont">
                    {/* 가상 선택자 필요 시 주석 처리 */}
                    <span>Open AI</span>
                </h2>
                </div>
            </div>




            </div>

            <div>
                {/* 숫자 기준 이미지 넣기 */}
                <div className='w-[80%] pt-[10%]'>
                    <div>01</div>
                    <div className="absolute top-[-5px] left-[-10px]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                    </svg>
                    </div>
                    <div className="absolute md:top-3 md:left-2 1500size:top-[15px] 1500size:left-[10px] rotate-180 fill-black">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                    </svg>
                    </div>
                </div>
            </div>

        </div>
        

    </>
  );
};

export default Section03;
