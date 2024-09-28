import React from 'react';
import '../../App.css';
import './section01.css'; // CSS 파일 import

export const Section01 = () => {
    // Q&A 데이터 배열
    const qaData = [
      { question: "When was ChatGPT released?", answer: "ChatGPT was first released in November 2020." },
    //   { question: "What is blockchain?", answer: "Blockchain is a distributed ledger technology." },
    //   { question: "Next question?", answer: "This is a placeholder for the next question." },
      // 추가 질문과 답변을 여기에 추가할 수 있습니다.
    ];
  
    // 오른쪽 텍스트 배열
    const nextQuestions = [
      "ChatGPT ?",
      "AI",
      "Momey ?",
      // 추가 질문을 여기에 추가할 수 있습니다.
    ];
  
    return (
      <>
        {/* 전체 */}
        <div className="w-full h-[91.5vh]  px-[2%]">
          {/* 전체 + 패딩값을 줌 flex로 위 아래 나뉠 예정 */}
          <div className="w-full  flex flex-col items-center">
            {/* Q&A 공간감 */}
            <div className="w-[70%] z-10">
              {/* 컨탠츠 영역 */}
              <div className="flex mt-[20vh] mb-[10%]">
                {/* 왼쪽 Q&A */}
                <div className="w-[50%]">
                  <div className=" h-[6rem] relative">
                    {/* 사각형 */}
                    <div className="absolute top-[-66px]  border-t border-l border-r border-[#efefe5] w-[66px] h-[66px] flex items-center justify-center">
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
                      <div className="absolute top-[260px] left-[-30px] scale-y-[-1]">
                        <img
                          src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                          alt="leftTop"
                        />
                      </div>
                    </div>
  
                    {/* 글귀들 Q&A */}
                    <div className="flex flex-col  overflow-hidden text-lg  ">
                      {qaData.map((qa, index) => (
                        <div key={index} className="">
                          <div className="p-8 border border-[#efefe5] ">
                            Q. {qa.question}
                          </div>
                          <div className='p-8'>A. {qa.answer}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 오른쪽 질문 카테고리 */}
                <div className="w-[50%]">
                    <div className="flex text-right items-center justify-end border-t border-b border-r border-[#efefe5] mb-4 pl-[42%]">
                        {/* 화살표 */}
                        <img
                        className="w-[12px] rotate-90 " // 왼쪽 여백을 설정하여 화살표를 중앙으로 배치
                        src={`${process.env.PUBLIC_URL}/arrowDown.svg`}
                        alt="arrowDown"
                        />
                        
                        {/* 오른쪽 텍스트 감싸는 div */}
                    
                        <p className=" flex-1 px-2  ">#$$00</p> {/* 오른쪽 텍스트에 왼쪽 패딩 및 보더 추가 */}
                        <p className=" p-4 border-l border-[#efefe5] ">#$$00</p> {/* 오른쪽 텍스트에 왼쪽 패딩 및 보더 추가 */}
                        
                    </div>

                    {nextQuestions.map((nextQuestion, index) => (
                        // pt-2 pr-4 pb-[0.4375rem] pl-[42%]
                        <div key={index} className="text-right flex justify-end border-t border-[#353539] pt-2 pr-4 pb-[0.4375rem] pl-[42%] ">
                            {/* 텍스트 */}
                            <img
                                className="w-[12px] rotate-90"
                                src={`${process.env.PUBLIC_URL}/arrowDown.svg`}
                                alt="arrowDown"
                            />
                            {/* flex-1 */}
                            <p className=' flex-1 '>{nextQuestion}</p>
                        </div>
                    ))}
                </div>


              </div>
            </div>

            {/* 하단 */}
            <div className='w-full flex items-end '>
                <div className=' '>
                    <h4 className='text-lg roboFont'>GPT for Everyone</h4>

                    <div className='violetFont relative'>
                     
                        <svg className=' absolute ' width="450" height="125" viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="path-anim path-anim-2" d="M157.5 94H402.257C403.053 94 403.816 93.6839 404.379 93.1213L419 78.5" stroke="url(#paint0_linear_2309_6568)" stroke-width="2.5" stroke-linecap="round"></path>
                            <path class="path-anim path-anim-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H417" stroke="url(#paint1_linear_2309_6568)" stroke-width="2.5" stroke-linecap="round"></path>
                            <defs>
                            <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F8CF3E"></stop>
                            <stop offset="1" stop-color="#FC6756"></stop>
                            <stop offset="1" stop-color="#FC6756"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                            <stop offset="0.236372" stop-color="#724CE8"></stop>
                            <stop offset="1" stop-color="#26F4D0"></stop>
                            </linearGradient>
                        </defs>
                        </svg>

                        <div className="p-4 text-8xl">ChatGPT</div>
                        <div className="p-4 text-8xl">AI</div>
                        
                        <svg className='absolute top-[110px]' width="130" height="180" viewBox="0 0 115 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="path-anim path-anim-left" d="M2 2V68.7574C2 69.553 2.31607 70.3161 2.87868 70.8787L17.1213 85.1213C17.6839 85.6839 18.447 86 19.2426 86H62" stroke="url(#paint0_linear_2309_6569)" stroke-width="2.5" stroke-linecap="round"></path>
                            <path class="path-anim path-anim-right" d="M62 86H110C111.657 86 113 84.6569 113 83V15.2426C113 14.447 112.684 13.6839 112.121 13.1213L100.5 1.5" stroke="url(#paint1_linear_2309_6569)" stroke-width="2.5" stroke-linecap="round"></path>
                            <defs>
                            <linearGradient id="paint0_linear_2309_6569" x1="1.5" y1="-1.3292e-06" x2="123" y2="86" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#26F4D0"></stop>
                            <stop offset="0.634676" stop-color="#F8CF3E"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_2309_6569" x1="45" y1="81.5" x2="119" y2="24" gradientUnits="userSpaceOnUse">
                            <stop offset="0.436639" stop-color="#F8CF3E"></stop>
                            <stop offset="1" stop-color="#FC6756"></stop>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>


                </div>

                <div className='w-[40%] text-2xl text-right'>
                    <p>Your personal expert in all crypto<br/>
                    & blockchain related topics.</p>
                </div>

                <div className='w-[28%] flex  justify-end items-center'>
                    {/* 링크 */}
                    <div className='pr-6'>SCROLL</div>
                    <div className=' relative flex items-center justify-center w-[76px] h-[76px] '>
                        <div className="absolute bottom-[0px] left-[0px] scale-y-[-1]">
                            <img
                            src={`${process.env.PUBLIC_URL}/leftTop.svg`}
                            alt="leftTop"
                            />
                        </div>
                        <div className="">
                            <img
                            src={`${process.env.PUBLIC_URL}/scollArrow-down.svg`}
                            alt="scollArrow-down"
                            />
                        </div>
                        <div className="absolute  top-0 right-[0px] rotate-90">
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
            <div className="vertical-line vertical-line--center"></div>
            <div className="vertical-line vertical-line--right"></div>
          </div>
        
      </>
    );
  };


  
  
  
  

export default Section01;


           