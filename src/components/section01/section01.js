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
    { question: "When was ChatGPT released?", answer: "ChatGPT was first released in November 2020. Since then, it has gone through several updates and improvements, with more advanced versions like GPT-4 being developed to enhance its capabilities." },
    { question: "How does ChatGPT work?", answer: "ChatGPT is based on a language model trained using vast amounts of text data. It uses machine learning to generate human-like responses by predicting the next word in a sentence. This allows it to answer questions, hold conversations, and assist with various tasks." },
    { question: "What is ChatGPT used for?", answer: "ChatGPT is commonly used for customer support, content generation, programming assistance, and as a learning tool. It helps businesses automate tasks and individuals get quick, accurate answers to a wide range of topics." },
    { question: "How does ChatGPT protect privacy?", answer: "ChatGPT is designed to prioritize user privacy by not retaining personal conversation data after interactions. While it processes data to generate responses, it doesn’t store any personal information for future use." },
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
          <div className="w-full  flex flex-col items-center gap-10">
            {/* Q&A 공간감 */}
            <div className="w-[70%] z-10">
              {/* 컨탠츠 영역 */}
              <div className="flex mt-[20vh] mb-[10%] relative ">
                {/* 사각형 */}
                <div className="absolute top-[-66px] border-t border-l border-r border-[#efefe5] w-[66px] h-[66px] flex items-center justify-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/invertedCommas.svg`}
                        alt="invertedCommas"
                    />
                    <div className="absolute top-[-30px] left-[-30px]">
                        <img
                        src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                        alt="leftTop"
                        />
                    </div>
                    <div className="absolute top-[320px] left-[-30px] scale-y-[-1]">
                        <img
                        src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                        alt="leftTop"
                        />
                    </div>
                </div>

                {/* 왼쪽 Q&A  overflow-hidden */}
                <div className="w-[calc(50%-1px)] ">
                    {/* 상단 보더 유지 */}
                    <div className="relative border border-[#efefe5] h-[128px] ">
                        {/* 글귀들 담는 박스 Q&A hero-slider-inner */}
                        <div className="relative h-[320px]  ">

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
                                            <div className="flex flex-col ">
                                                <div className="p-4 flex items-center justify-start text-5xl h-[128px] "> {/* 보더값 128안에 정렬이쁘게하기 위해 사이즈 맞춤 */}
                                                    <span className="violetFont mr-[10px]"> Q.</span> {qa.question}
                                                </div>
                                                <div className="p-4 flex items-center justify-start opacity-50 "> {/* 왼쪽 정렬 */}
                                                    <span className="violetFont mr-[10px]"> A.</span> {qa.answer}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>





                {/* 오른쪽 */}
                <div className="w-[calc(50%+1px)] relative">
                  <div className='w-full h-[56px] border-t border-r border-b border-[#efefe5] absolute'></div>
                  <div className='w-[59.82px] h-[56px] border border-[#efefe5] absolute right-0'></div>
                  <div className='w-full h-[56px] pl-[42%] flex items-center  absolute '>
                    <img
                    className="w-[12px] rotate-90"
                    src={`${process.env.PUBLIC_URL}/arrowDown.svg`}
                    alt="arrowDown"
                  />

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
                      <li key={index} className={` flex justify-between border-t border-[#353539] pl-[42%] `}>
                        {/* 화살표 */}
                        <img
                          className="w-[12px] rotate-90 opacity-50"
                          src={`${process.env.PUBLIC_URL}/arrowDown.svg`}
                          alt="arrowDown"
                        />
                        <p className=" p-2 mx-2">{item.model}</p> {/* 모델명 */}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </div>




            {/* 하단 */}
            <div className='w-full flex items-end relative z-10 '>
                <div>
                    <h4 className='text-lg roboFont '>GPT for Everyone</h4>

                    <div className='violetFont relative'>
                    <svg className='absolute z-10' width="450" height="125" viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path-anim path-anim-2" d="M157.5 94H402.257C403.053 94 403.816 93.6839 404.379 93.1213L419 78.5" stroke="url(#paint0_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <path className="path-anim path-anim-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H417" stroke="url(#paint1_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <defs>
                        <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F8CF3E"></stop>
                            <stop offset="1" stopColor="#FC6756"></stop>
                            <stop offset="1" stopColor="#FC6756"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                            <stop offset="0.236372" stopColor="#724CE8"></stop>
                            <stop offset="1" stopColor="#26F4D0"></stop>
                        </linearGradient>
                        </defs>
                    </svg>

                    <div className="p-4 text-8xl">ChatGPT</div>
                    <div className="p-4 text-8xl">AI</div>

                    <svg className='absolute top-[110px]' width="130" height="180" viewBox="0 0 115 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path-anim path-anim-left" d="M2 2V68.7574C2 69.553 2.31607 70.3161 2.87868 70.8787L17.1213 85.1213C17.6839 85.6839 18.447 86 19.2426 86H62" stroke="url(#paint0_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <path className="path-anim path-anim-right" d="M62 86H110C111.657 86 113 84.6569 113 83V15.2426C113 14.447 112.684 13.6839 112.121 13.1213L100.5 1.5" stroke="url(#paint1_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                        <defs>
                        <linearGradient id="paint0_linear_2309_6569" x1="1.5" y1="-1.3292e-06" x2="123" y2="86" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#26F4D0"></stop>
                            <stop offset="0.634676" stopColor="#F8CF3E"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_2309_6569" x1="45" y1="81.5" x2="119" y2="24" gradientUnits="userSpaceOnUse">
                            <stop offset="0.436639" stopColor="#F8CF3E"></stop>
                            <stop offset="1" stopColor="#FC6756"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
                    </div>
                </div>

                <div className='w-[50%] text-2xl text-right'>
                    <p>Your personal expert in all crypto<br />
                    & blockchain related topics.</p>
                </div>

                <div className='w-[21%] flex justify-end items-center'>
                    {/* 링크 */}
                    <div className='pr-6'>SCROLL</div>
                    <div
                            className='relative flex items-center justify-center w-[76px] h-[76px]'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                    <div className="absolute bottom-[0px] left-[0px] scale-y-[-1]">
                        <img
                        src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                        alt="leftTop"
                        />
                    </div>
                    <div className={`relative transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-4' : ''}`}>
                        <img
                        src={`${process.env.PUBLIC_URL}/scollArrow-down.svg`}
                        alt="scollArrow-down"
                        />
                    </div>
                    <div className="absolute top-0 right-[0px] rotate-90">
                        <img
                        src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                        alt="leftTop"
                        />
                    </div>
                    </div>
                </div>
            </div>



            </div>
  
            {/* Vertical lines */}
            <div className="vertical-line vertical-line--left"></div>
            <div className="vertical-line vertical-line--center left-[calc(50%-2px)]"></div>
            <div className="vertical-line vertical-line--right"></div>

          </div>
        
      </>
    );
  };


  
  
  
  

export default Section01;


           