import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import './section02.css'; // CSS 파일 import
import Encrypt from '../encrypt/encrypt'; // 섹션04에서 한 단계 위로 올라가서 encrypt 폴더를 찾음

export const Section02 = () => {

  const slideRef = useRef(null); // 슬라이드 DOM 요소에 대한 ref
  const [slideWidth, setSlideWidth] = useState(0); // 슬라이드 너비 상태
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스

 
  const slidesData = [
    {
      id: 1,
      title: 'Creators',
      number: '01',
      name: 'Sam Altman',
      position: 'The founder of ChatGPT',
      quote: 'ChatGPT simplifies problem-solving, providing instant solutions for startups.',
      imgSrc: `${process.env.PUBLIC_URL}/sam.webp`,
    },
    {
      id: 2,
      title: 'Creators',
      number: '02',
      name: 'Greg Brockman',
      position: 'CTO of OpenAI',
      quote: 'We believe AI can enhance human capabilities and address global challenges.',
      imgSrc: `${process.env.PUBLIC_URL}/greg.webp`,
    },
    {
      id: 3,
      title: 'Researchers',
      number: '03',
      name: 'Ilya Sutskever',
      position: 'Chief Scientist of OpenAI',
      quote: 'Our work in deep learning is transforming how machines understand and generate human language.',
      imgSrc: `${process.env.PUBLIC_URL}/ilya.webp`,
    },
    {
      id: 4,
      title: 'Investors',
      number: '04',
      name: 'Elon Musk',
      position: 'Co-founder of OpenAI',
      quote: 'AI can greatly improve our lives, but we must be cautious about its potential risks.',
      imgSrc: `${process.env.PUBLIC_URL}/elon.webp`,
    },
  ];
  
  const maxIndex = slidesData.length - 1; // 슬라이드 최대 인덱스

  useEffect(() => {
    // 슬라이드 너비를 업데이트
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
      console.log(slideWidth)
    }
    console.log(currentIndex)
    
  }, [currentIndex]); // currentIndex가 변경될 때마다 업데이트

  // 왼쪽 화살표 클릭 핸들러
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 오른쪽 화살표 클릭 핸들러
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      {/* 전체 잡고 상단, 하단 col */}
      <div className="w-full h-[100vh]  flex flex-col justify-between relative overflow-x-clip">
        
        {/* 상단 */}
        <div className="hidden md:flex justify-between w-full  mt-[15vh] md:pl-[8%] 1500size:px-[2%] z-10 ">
          
          {/* 원 두개 */}
          <div className=''>
            <div className="relative ">
              <div className="absolute top-[-20px] left-[5px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.5rem] 1500size:h-[0.5rem] rounded-full bg-[#10101a]"></div>
              <div className="absolute top-[-20px] left-[25px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.5rem] 1500size:h-[0.5rem] rounded-full bg-[#10101a]"></div>

              {/* 텍스트 */}
              <div className=" md:text-3xl lg:text-4xl 1500size:text-5xl md:p-2 1500size:p-4 text-center section2-title-bordered">
                {/* 가상 선택자: before, after */}
                <span className="section2-title-bordered-line-1">
                  <Encrypt className="section2-title-bordered-line-2 mx-2 violetFont " text={'Your ChatGPT'} />
                  {/* <span className="section2-title-bordered-line-2 mx-2 violetFont ">Your ChatGPT</span> */}
                </span>
              </div>

              <div className="md:text-3xl lg:text-4xl 1500size:text-5xl p-4 text-left violetFont">
                {/* 가상 선택자 필요 시 주석 처리 */}
                <Encrypt className="" text={'Open AI'} />
                {/* <span>Open AI</span> */}
              </div>
            </div>
          </div>


          {/* 오른쪽 텍스트 */}
          <div className="flex items-end md:justify-end 1500size:justify-start md:pr-[8%] 1500size:pr-0 py-4 w-[35%] md:sm lg:text-2xl 1500size:text-3xl">
            For individuals,<br /> developers,<br /> and businesses.
          </div>

        </div>

        {/* 하단 (슬라이드 공간) */}
        <div 
          
          style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }} // 슬라이드 너비에 맞춰 이동
          className='mt-[15vh] md:mt-0 transition-transform duration-500 ease-in-out whitespace-nowrap relative overflow-x-visible  h-auto'
        >

          {slidesData.map((slide, index) => (
            <div
             ref={slideRef} // 슬라이드 DOM 요소에 ref 설정,
             // 1:w-[calc(84%-8px)]  w-[calc(18.6%-10px)]  2: w-[calc(84%-7px)] w-[calc(18.6%-9px)] 3:w-[calc(84%-7px)] w-[calc(18.6%-9px)] 4: w-[calc(84%-6px)] w-[calc(18.6%-8px)] 
             key={slide.id}
             className={`w-full md:border-t md:border-r md:border-b border-[#10101a] inline-block z-10 ${index === 0 ? '1500size:w-[calc(84%-8px)]' : index === 1 ? '1500size:w-[calc(84%-5px)]' : index === 2 ? '1500size:w-[calc(84%-6px)]' : '1500size:w-[calc(84%-5.5px)]'}`}
             >
              {/* 선 영역 + 컨텐츠 영역 */}
              <div className='flex flex-col  justify-between min-h-[31rem] md:bg-[#f5f6f0] px-[5%] md:px-0 1500size:pl-[2%] '>
                {/* 상단 */}
                <div className='flex-none md:flex  items-center border-[#cacac6] border-b md:border-none  bg-[#f5f6f0] md:bg-none'>
                  <div className={`flex ${index === 0 ? 'w-[calc(18.6%-10px)]' : index === 1 ? 'w-[calc(18.6%-8px)]' : index === 2 ? 'w-[calc(18.6%-8px)]' : 'w-[calc(18.6%-8px)]'} items-center gap-8 text-sm 1500size:text-lg`}>
                    <div className='hidden md:block'>{slide.title}</div>
                    {/* 숫자 기준 이미지 넣기 */}
                    <div className='relative hidden md:block'>
                      <div>{slide.number}</div>
                      <div className="absolute top-0 left-[-10px]">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                        </svg>
                      </div>
                      <div className="absolute md:top-3 md:left-2 1500size:bottom-0 1500size:right-[-5px] rotate-180 fill-black">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* 창시자, 이름 */}
                  <div className='flex gap-2 md:gap-8 relative  border-t border-[#cacac6] border-r md:border-none'>
                    {/* 이미지 */}
                    <div>
                      <img className=' w-[50px] h-[50px] lg:w-[70px]  lg:h-[70px] 1500size:w-[100px]  1500size:h-[100px]' src={slide.imgSrc} alt={slide.name} />
                    </div>

                    <div className='flex items-center  gap-4 md:gap-8'>
                      <svg className="w-[8px] md:w-[12px] rotate-90" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z" fill="#10101A"/>
                      </svg>

                      <div className='flex flex-col'>
                        <div className='block md:hidden text-[15px]  violetFont'>{slide.name}</div>
                        <div className='block md:hidden  text-sm  uppercase'>{slide.position}</div>
                      </div>

                      <div className='hidden md:block md:text-lg 1500size:text-2xl violetFont'>{slide.name}</div>
                    </div>

                    {/* 하단 화살표 top-[-35px] */}
                    <div className='flex md:hidden  absolute right-2 top-[50%] translate-y-[-50%] gap-2 items-center md:mx-[5%] 1500size:mx-[2%] '>
                        <div
                            onClick={handlePrev}
                            className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
                        >
                            <svg className='w-[30px] h-[25px] rotate-180' width="72" height="66" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.8883 2.06276L35.7042 11.006C38.2274 13.438 40.2073 14.5596 42.7396 15.1829C44.1017 15.5181 45.1903 16.7226 45.189 18.2416C45.1876 19.9812 43.8964 21.4909 42.0785 21.4924C40.2606 21.4939 0.0683799 21.5265 0.0683799 21.5265C0.0319435 21.5266 0.00238228 21.556 0.00235337 21.5922L2.3295e-08 24.4567C-3.02655e-05 24.493 0.0294812 24.5223 0.0659162 24.5223L42.0761 24.4881C45.7736 24.4851 46.2055 29.9513 42.7102 30.793C40.0938 31.4231 38.0283 32.5723 35.3439 35.2438L26.8489 43.9378C26.824 43.9633 26.824 44.0038 26.8488 44.0292L28.7549 45.9802C28.7809 46.0068 28.8239 46.0066 28.8498 45.9798L51.9816 23.0712C52.0061 23.0457 52.0061 23.0055 51.9816 22.9802L28.8895 0.0200173C28.8637 -0.00663545 28.8207 -0.00667916 28.7947 0.0199268L26.8882 1.97114C26.8632 1.9967 26.8633 2.03736 26.8883 2.06276Z" fill="#10101a"/>
                            </svg>
                        </div>

                        <div
                            onClick={handleNext}
                            className={`cursor-pointer ${currentIndex === maxIndex ? 'opacity-50' : 'opacity-100'}`}
                        >
                            <svg className='w-[30px]  h-[25px]' width="72" height="66" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.8883 2.06276L35.7042 11.006C38.2274 13.438 40.2073 14.5596 42.7396 15.1829C44.1017 15.5181 45.1903 16.7226 45.189 18.2416C45.1876 19.9812 43.8964 21.4909 42.0785 21.4924C40.2606 21.4939 0.0683799 21.5265 0.0683799 21.5265C0.0319435 21.5266 0.00238228 21.556 0.00235337 21.5922L2.3295e-08 24.4567C-3.02655e-05 24.493 0.0294812 24.5223 0.0659162 24.5223L42.0761 24.4881C45.7736 24.4851 46.2055 29.9513 42.7102 30.793C40.0938 31.4231 38.0283 32.5723 35.3439 35.2438L26.8489 43.9378C26.824 43.9633 26.824 44.0038 26.8488 44.0292L28.7549 45.9802C28.7809 46.0068 28.8239 46.0066 28.8498 45.9798L51.9816 23.0712C52.0061 23.0457 52.0061 23.0055 51.9816 22.9802L28.8895 0.0200173C28.8637 -0.00663545 28.8207 -0.00667916 28.7947 0.0199268L26.8882 1.97114C26.8632 1.9967 26.8633 2.03736 26.8883 2.06276Z" fill="#10101a"/>
                            </svg>
                        </div>
                    </div>
                  </div>

                  {/* 포지션이름 모바일때는 숨김  */}
                  <div className='hidden md:block ml-[28%] md:text-sm 1500size:text-lg uppercase'>{slide.position}</div>
                </div>

                {/* 내용 */}
                <div className='pt-[100%] md:pt-0 px-[3%] md:px-0 pb-6 md:pb-0 md:w-[30%]  text-2xl md:text-xl lg:text-4xl 1500size:text-5xl violetFont whitespace-normal'>
                  "{slide.quote}"
                </div>

                {/* 하단 선, 텍스트 + 링크 */}
                <div className='flex gap-8 md:mb-8 px-[3%] md:px-0 '>
                  <div className='w-[1px] bg-[#10101a]'></div>
                  <div className='md:text-sm 1500size:text-lg violetFont'>Try for yourself <span>Click Here</span></div>
                </div>
              </div>


            </div>
          ))}



        </div>

          {/* 하단 화살표 top-[-35px] */}
          <div className='hidden md:flex relative  gap-4 items-center md:mx-[5%] 1500size:mx-[2%] '>
              <div
                  onClick={handlePrev}
                  className={`cursor-pointer ${currentIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
              >
                  <svg className='md:w-[55px] md:h-[48px] 1500size:w-[72px] 1500size:h-[66px] rotate-180' width="72" height="66" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.8883 2.06276L35.7042 11.006C38.2274 13.438 40.2073 14.5596 42.7396 15.1829C44.1017 15.5181 45.1903 16.7226 45.189 18.2416C45.1876 19.9812 43.8964 21.4909 42.0785 21.4924C40.2606 21.4939 0.0683799 21.5265 0.0683799 21.5265C0.0319435 21.5266 0.00238228 21.556 0.00235337 21.5922L2.3295e-08 24.4567C-3.02655e-05 24.493 0.0294812 24.5223 0.0659162 24.5223L42.0761 24.4881C45.7736 24.4851 46.2055 29.9513 42.7102 30.793C40.0938 31.4231 38.0283 32.5723 35.3439 35.2438L26.8489 43.9378C26.824 43.9633 26.824 44.0038 26.8488 44.0292L28.7549 45.9802C28.7809 46.0068 28.8239 46.0066 28.8498 45.9798L51.9816 23.0712C52.0061 23.0457 52.0061 23.0055 51.9816 22.9802L28.8895 0.0200173C28.8637 -0.00663545 28.8207 -0.00667916 28.7947 0.0199268L26.8882 1.97114C26.8632 1.9967 26.8633 2.03736 26.8883 2.06276Z" fill="#10101a"/>
                  </svg>
              </div>

              <div
                  onClick={handleNext}
                  className={`cursor-pointer ${currentIndex === maxIndex ? 'opacity-50' : 'opacity-100'}`}
              >
                  <svg className='md:w-[55px] md:h-[48px] 1500size:w-[72px]  1500size:h-[66px]' width="72" height="66" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.8883 2.06276L35.7042 11.006C38.2274 13.438 40.2073 14.5596 42.7396 15.1829C44.1017 15.5181 45.1903 16.7226 45.189 18.2416C45.1876 19.9812 43.8964 21.4909 42.0785 21.4924C40.2606 21.4939 0.0683799 21.5265 0.0683799 21.5265C0.0319435 21.5266 0.00238228 21.556 0.00235337 21.5922L2.3295e-08 24.4567C-3.02655e-05 24.493 0.0294812 24.5223 0.0659162 24.5223L42.0761 24.4881C45.7736 24.4851 46.2055 29.9513 42.7102 30.793C40.0938 31.4231 38.0283 32.5723 35.3439 35.2438L26.8489 43.9378C26.824 43.9633 26.824 44.0038 26.8488 44.0292L28.7549 45.9802C28.7809 46.0068 28.8239 46.0066 28.8498 45.9798L51.9816 23.0712C52.0061 23.0457 52.0061 23.0055 51.9816 22.9802L28.8895 0.0200173C28.8637 -0.00663545 28.8207 -0.00667916 28.7947 0.0199268L26.8882 1.97114C26.8632 1.9967 26.8633 2.03736 26.8883 2.06276Z" fill="#10101a"/>
                  </svg>
              </div>
          </div>


        


      </div>
    </>
  );
};

export default Section02;