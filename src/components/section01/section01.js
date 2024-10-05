import React, { useRef, useState } from 'react';

import '../../App.css';
import './section01.css'; // CSS 파일 import

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export const Section01 = () => {
    
        

   // Q&A 데이터 배열
   const qaData = [
    { question: "Q. When was ChatGPT released?", answer: "A. ChatGPT was first released in November 2020. Since then, it has gone through several updates and improvements, with more advanced versions like GPT-4 being developed to enhance its capabilities." },
    { question: "Q. How does ChatGPT work?", answer: "A. ChatGPT is based on a language model trained using vast amounts of text data. It uses machine learning to generate human-like responses by predicting the next word in a sentence. This allows it to answer questions, hold conversations, and assist with various tasks." },
    { question: "Q. What is ChatGPT used for?", answer: "A. ChatGPT is commonly used for customer support, content generation, programming assistance, and as a learning tool. It helps businesses automate tasks and individuals get quick, accurate answers to a wide range of topics." },
    { question: "Q. How does ChatGPT protect privacy?", answer: "A. ChatGPT is designed to prioritize user privacy by not retaining personal conversation data after interactions. While it processes data to generate responses, it doesn’t store any personal information for future use." },
    // 추가 질문과 답변을 여기에 추가할 수 있습니다.
  ];

  // 오른쪽 슬라이드 기능 
  const rightText = [
    {subtext:"#01", maintext:"ChatGPT Release"},
    {subtext:"#02", maintext:"How ChatGPT Works"},
    {subtext:"#03", maintext:"Uses of ChatGPT"},
    {subtext:"#04", maintext:"Privacy and ChatGPT"},

    // 추가 질문을 여기에 추가할 수 있습니다.
  ];


  // 모델명들 
const modleName = [
  { model: "ChatGPT-4" },
  { model: "DALL-E" },
  { model: "Whisper" },
];

    const [isHovered, setIsHovered] = useState(false);
    
    const leftSwiperRef = useRef(null);
    const rightSwiperRef = useRef(null);
  
    return (
      <>
        {/* 전체 */}
        <div className="w-full h-[91.5vh]  px-[2%]">
          {/* 전체 + 패딩값을 줌 flex로 위 아래 나뉠 예정 */}
          <div className="w-full  flex flex-col items-center  md:gap-32 lg:gap-24 xl:gap-20 1500size:gap-8">
            {/* Q&A 공간감 */}
            <div className="w-[70%] z-10">
              {/* 컨탠츠 영역 */}
              <div className="flex mt-[15vh] mb-[10%] relative ">
                {/* 사각형 */}
                <div className="absolute top-[-66px] border-t border-l border-r border-[#10101a] w-[66px] h-[66px] flex items-center justify-center">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.94425 0H3.20557L0 5.5149V16H7.94425V8.2383H4.73868V6.12766L7.94425 0ZM16.7944 6.12766L20 0H15.2613L12.0557 5.5149V16H20V8.2383H16.7944V6.12766Z" fill="#10101A"/>
                    </svg>

                    <div className="absolute top-[-30px] left-[-30px]">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                        </svg>


                    </div>
                    <div className="absolute top-[390px] left-[-30px] scale-y-[-1] fill-black">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                        </svg>


                    </div>
                </div>

                {/* 왼쪽 Q&A  overflow-hidden */}
                <div className="w-[calc(50%+4px)] ">
                    {/* 상단 보더 유지 */}
                    <div className="relative border border-[#10101a] h-[165px]  ">
                        {/* 글귀들 담는 박스 Q&A hero-slider-inner */}
                        <div className="relative h-[330px] overflow-hidden  ">

                            <Swiper
                                direction={'vertical'}
                                autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 재생 설정
                                loop={true} // 반복 재생 설정
                                modules={[Pagination, Autoplay]} // Autoplay
                                className="mySwiper"
                                allowTouchMove={false} // 터치 이동 비활성화
                                style={{ height: '100%' }} // Swiper 높이를 100%로 설정
                            >
                                {/* Q&A 합친 div박스 flex col */}
                                <div className="text-lg">
                                    {qaData.map((qa, index) => (
                                        // hero-slide 들 , 정렬 필
                                        <SwiperSlide key={index}> {/* key 추가 */}
                                        {/* <span className="violetFont mr-[10px]"> Q.</span> */}
                                            <div className="flex flex-col ">
                                                <div className="p-4 flex items-center justify-start text-3xl 1200size:text-5xl h-[165px] "> {/* 보더값 128안에 정렬이쁘게하기 위해 사이즈 맞춤 */}
                                                     {qa.question}
                                                </div>
                                                <div className=" p-4 flex items-center justify-start opacity-50 text-sm 1200size:text-lg "> 
                                                     {qa.answer}
                                                </div>
                                            </div>
                                            {/* <span className="violetFont mr-[10px]"> A.</span> */}
                                        </SwiperSlide>
                                    ))}
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>





                {/* 오른쪽 */}
                <div className="w-[calc(50%+1px)] relative">
                  <div className='w-full h-[56px] border-t border-r border-b border-[#10101a] absolute'></div>
                  <div className='w-[59.82px] h-[56px] border border-[#10101a] absolute right-0'></div>
                  
                  <div className='w-full h-[56px] pl-[5%] lg:pl-[22%] xl:pl-[42%] flex items-center  absolute '>
                    <svg className="w-[12px] rotate-90" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z" fill="#10101A"/>
                    </svg>
                  </div>

                  {/* 상단 슬라이드 영역 */}
                  <Swiper
                    direction={'vertical'}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 재생 설정
                    loop={true} // 반복 재생 설정
                    modules={[Pagination, Autoplay]} // Autoplay
                    className="mySwiper"
                    allowTouchMove={false} // 터치 이동 비활성화
                    style={{ height: '57px' }} // Swiper 높이를 100%로 설정
                  >
                    {rightText.map((item, index) => (
                      <SwiperSlide key={index}>
                        <li className="flex  justify-end">
                          
                          <div className="flex items-center  ">
                            <p className=" pr-4 ">{item.maintext}</p> {/* 메인 텍스트 */}
                            <p className=" p-4 ">{item.subtext}</p> {/* 서브 텍스트 */}
                          </div>
                        </li>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* 하단 모델명 리스트 */}
                  <ul className="text-right mt-4">
                    {modleName.map((item, index) => (
                      <li key={index} className={` flex justify-between border-t border-[#cacac6] pl-[5%] lg:pl-[22%] xl:pl-[42%] `}>
                        <svg className="w-[12px] rotate-90 opacity-50" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z" fill="#10101A"/>
                        </svg>
                        <p className=" p-2 mx-2">{item.model}</p> {/* 모델명 */}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </div>




            {/* 하단 */}
            <div className='w-full flex items-end relative  md:pl-[5%]  z-10 '>
                <div className=' '>
                    <h4 className='text-lg roboFont '>GPT for Everyone</h4>

                    <div className='violetFont relative'>
                    <svg className='absolute md:top-[-35px] lg:top-[-130px] 1500size:top-0 z-10 md:w-[230px] md:h-[150px] lg:w-[300px] lg:h-[350px] 1500size:w-[450px] 1500size:h-[125px]'viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path-anim path-anim-2" d="M157.5 94H402.257C403.053 94 403.816 93.6839 404.379 93.1213L419 78.5" stroke="url(#paint0_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <path className="path-anim path-anim-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H417" stroke="url(#paint1_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <defs>
                        <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                            {/* 기존 색상: #F8CF3E -> 반전 색상: #0713C1 */}
                            <stop stopColor="#0713C1"></stop>
                            {/* 기존 색상: #FC6756 -> 반전 색상: #03989E */}
                            <stop offset="1" stopColor="#03989E"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                            {/* 기존 색상: #724CE8 -> 반전 색상: #8DB317 */}
                            <stop offset="0.236372" stopColor="#8DB317"></stop>
                            {/* 기존 색상: #26F4D0 -> 반전 색상: #D90B2F */}
                            <stop offset="1" stopColor="#D90B2F"></stop>
                        </linearGradient>
                        </defs>
                    </svg>

                    <div className="p-4 md:text-5xl lg:text-6xl 1500size:text-8xl">ChatGPT</div>
                    <div className="p-4 md:text-5xl lg:text-6xl 1500size:text-8xl">AI</div>

                    <svg className='absolute md:top-8 lg:top-12 1500size:top-[110px] md:w-[75px] lg:w-[90px] 1500size:w-[130px]' height="180" viewBox="0 0 115 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path-anim path-anim-left" d="M2 2V68.7574C2 69.553 2.31607 70.3161 2.87868 70.8787L17.1213 85.1213C17.6839 85.6839 18.447 86 19.2426 86H62" stroke="url(#paint0_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <path className="path-anim path-anim-right" d="M62 86H110C111.657 86 113 84.6569 113 83V15.2426C113 14.447 112.684 13.6839 112.121 13.1213L100.5 1.5" stroke="url(#paint1_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <defs>
                        <linearGradient id="paint0_linear_2309_6569" x1="1.5" y1="-1.3292e-06" x2="123" y2="86" gradientUnits="userSpaceOnUse">
                            {/* 기존 색상: #26F4D0 -> 반전 색상: #D90B2F */}
                            <stop stopColor="#D90B2F"></stop>
                            {/* 기존 색상: #F8CF3E -> 반전 색상: #0713C1 */}
                            <stop offset="0.634676" stopColor="#0713C1"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2309_6569" x1="45" y1="81.5" x2="119" y2="24" gradientUnits="userSpaceOnUse">
                            {/* 기존 색상: #F8CF3E -> 반전 색상: #0713C1 */}
                            <stop offset="0.436639" stopColor="#0713C1"></stop>
                            {/* 기존 색상: #FC6756 -> 반전 색상: #03989E */}
                            <stop offset="1" stopColor="#03989E"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
                    </div>
                </div>

                <div className='w-[55%] md:text-sm lg:text-lg 1500size:text-2xl text-right'>
                    <p>Your personal expert in all crypto<br />
                    & blockchain related topics.</p>
                </div>

                <div className='w-[16%] flex justify-end items-center'>
                    {/* 링크 */}
                    <div className='md:text-sm lg:text-lg pr-6'>SCROLL</div>
                    <div
                            className='relative md:top-[-20px] flex items-center justify-center md:w-[30px] w-[76px] md:h-[30px] h-[76px]'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                      <div className="absolute md:bottom-[-10px] bottom-[0px] md:left-[-20px] left-[0px] scale-y-[-1]">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                          </svg>

                      </div>
                      <div className={`relative transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-4' : ''}`}>
                          <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M43.9372 26.8883L34.994 35.7042C32.562 38.2274 31.4404 40.2073 30.8171 42.7396C30.4819 44.1017 29.2774 45.1903 27.7584 45.189C26.0188 45.1876 24.5091 43.8964 24.5076 42.0785C24.5061 40.2606 24.4735 0.0683799 24.4735 0.0683799C24.4734 0.0319435 24.444 0.00238228 24.4078 0.00235337L21.5433 2.32941e-08C21.507 -3.02655e-05 21.4777 0.0294812 21.4777 0.0659162L21.5119 42.0761C21.5149 45.7736 16.0487 46.2055 15.207 42.7102C14.5769 40.0938 13.4277 38.0283 10.7562 35.3439L2.06219 26.8489C2.03671 26.824 1.99621 26.824 1.97078 26.8488L0.0198506 28.7549C-0.00674861 28.7809 -0.006594 28.8239 0.0201806 28.8498L22.9288 51.9816C22.9543 52.0061 22.9945 52.0061 23.0198 51.9816L45.98 28.8895C46.0066 28.8637 46.0067 28.8207 45.9801 28.7947L44.0289 26.8882C44.0033 26.8632 43.9626 26.8633 43.9372 26.8883Z" fill="#10101A"/>
                          </svg>

                      </div>
                      <div className="absolute md:top-[-10px] top-0 md:right-[-10px] right-[0px] rotate-90">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                          </svg>

                      </div>
                    </div>
                </div>
            </div>




            </div>
  
            {/* Vertical lines */}
            <div className="vertical-line vertical-line--left"></div>
            <div className="vertical-line vertical-line--center left-[50%]"></div>
            <div className="vertical-line vertical-line--right"></div>

          </div>
        
      </>
    );
  };


  
  
  
  

export default Section01;


           