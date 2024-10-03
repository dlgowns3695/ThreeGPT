import React from 'react';
import '../../App.css';
import './section02.css'; // CSS 파일 import

export const Section02 = () => {
  return (
    <>
      {/* 전체 잡고 상단, 하단 col */}
      <div className="w-full h-[100vh]  flex flex-col justify-between relative">
        
        {/* 슬라이드 컨테이너 */}
        <div className="flex justify-between w-full  mt-[10vh]  px-[2%] z-10">
          
          {/* 원 두개 */}
          <div className="relative">
            <div className="absolute top-[-20px] left-[5px] w-[0.5rem] h-[0.5rem] rounded-full bg-[#10101a]"></div>
            <div className="absolute top-[-20px] left-[25px] w-[0.5rem] h-[0.5rem] rounded-full bg-[#10101a]"></div>

            {/* 텍스트 */}
            <h2 className="text-7xl p-4 text-center section-title-bordered">
              {/* 가상 선택자: before, after */}
              <span className="section-title-bordered-line-1">
                <span className="section-title-bordered-line-2 mx-8">Your Gateway</span>
              </span>
            </h2>

            <h2 className="text-7xl p-4 text-left">
              {/* 가상 선택자 필요 시 주석 처리 */}
              <span>To Web3 AI</span>
            </h2>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className="flex items-end w-[35%] text-3xl">
            For individuals,<br /> developers,<br /> and businesses.
          </div>

        </div>

        {/* 하단 (슬라이드 공간) */}
        <div className='w-[calc(84%-8px)] h-full bg-red-500 z-10'>
          {/* 선 영역 + 컨탠츠 영역 */}
          <div className='w-full h-full border-t border-r border-b border-[#10101a]'>
            {/* 상단 */}
            <div className='flex'>

              <div className='flex pl-[2%] w-[20%] items-center gap-8'>
                <div className=''>TSTMNL</div>
                {/* 숫자 기준 이미지 넣기 */}
                <div className='relative'>
                  <div>01</div>
                  <div className="absolute top-[-10px] left-[-10px]">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                          </svg>


                  </div>
                  <div className="absolute top-[10px] left-[10px] rotate-180 fill-black">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                        </svg>


                  </div>
                </div>
              </div>

              <div>
                <div>
                  <img className='w-[100px] h-[100px]' src={`${process.env.PUBLIC_URL}/sam.webp`} alt='sam' />
                </div>
                <div>
                  {/* 화살표 */}
                  <div>Jeff Nowak</div>
                </div>
  
              </div>
              <div>founder of maven capital</div>
            </div>
            {/* 내용 */}
            <div>
            {/* “Smart contract auditing has always been a bottleneck for our startups, ChainGPT solves this problem in seconds. */}
            </div>
          </div>
        </div>

        {/* <div className='horezontal-line absolute top-[35%] '></div> */}

        {/* Vertical lines */}
        <div className="vertical-line vertical-line--left"></div>
        <div className="vertical-line vertical-line--center left-[50%]"></div>
        <div className="vertical-line vertical-line--right"></div>
      </div>
    </>
  );
};

export default Section02;
