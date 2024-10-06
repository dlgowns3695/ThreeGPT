import React from 'react';
import '../../App.css';
import './section03.css'; // CSS 파일 import



export const Section03 = () => {
// 왼쪽 텍스트 배열
const leftTexts = [
    {
      title: 'GPT-4',
      description: 'GPT-4 is OpenAI’s most advanced system, producing safer and more useful responses. It is designed for a wide range of tasks, from natural language understanding to generation.',
    },
    {
      title: 'GPT-4 Turbo',
      description: 'A faster and more cost-efficient version of GPT-4, offering similar capabilities with reduced latency and improved performance for real-time applications.',
    },
    {
      title: 'GPT-4 Mini',
      description: 'A lightweight version of GPT-4, designed for smaller tasks and environments where resource efficiency is crucial.',
    },
    {
      title: 'DALL·E',
      description: 'DALL·E is an AI system capable of generating images from text prompts, offering creative and artistic possibilities through natural language input.',
    },
    {
      title: 'Whisper',
      description: 'Whisper is OpenAI’s speech recognition system, offering accurate transcription and translation from various languages.',
    }
  ];
  
  // 오른쪽 텍스트 배열, 각 모델에 맞는 키워드들 (갯수는 유지하고 내용만 변경)
  const rightTexts = [
    {
      top: ["NLP", "Text Generation"],
      bottom: ["Contextual Understanding", "Creative Writing"]
    },
    {
      top: ["High Speed", "Cost-Effective", "Real-Time"],
      bottom: ["Low Latency", "Efficiency"]
    },
    {
      top: ["Lightweight Model", "Mobile-Friendly", "Optimized Performance", "Scalable"],
      bottom: ["Low Resource Usage", "High Availability"]
    },
    {
      top: ["Generative AI", "Creative Art"],
      bottom: ["Text-to-Image", "Design Support", "Innovative Creation"]
    },
    {
      top: ["Speech Recognition", "Multilingual Support"],
      bottom: ["Accurate Transcription", "Real-Time Translation", "Cross-Language"]
    }
  ];
  

  return (
    <>
      <div className='w-full h-full flex flex-col'>
        {/* 상단 */}
        <div className=" flex justify-between w-full h-full mt-[20vh] md:pl-[8%] lg:pl-[5%] 1500size:px-[2%] z-10">
          {/* 원 두개 */}
          <div className=''>
            <div className="relative  ">
              <div className="absolute top-[-20px] left-[5px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.45rem] 1500size:h-[0.45rem] rounded-full bg-[#10101a]"></div>
              <div className="absolute top-[-20px] left-[25px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.45rem] 1500size:h-[0.45rem] rounded-full bg-[#10101a]"></div>

              {/* 텍스트 */}
              <h2 className="md:text-3xl lg:text-4xl 1500size:text-5xl md:p-2 1500size:p-4 text-center section-title-bordered">
                <span className="section-title-bordered-line-1">
                  <span className="section-title-bordered-line-2 mx-2 violetFont ">Your ChatGPT</span>
                </span>
              </h2>

              <h2 className="md:text-3xl lg:text-4xl 1500size:text-5xl p-4 text-left violetFont">
                <span>Open AI</span>
              </h2>
            </div>
          </div>
        </div>

        {/* 하단 반복문   */}
        <div className='flex flex-col gap-10 md:w-full  lg:w-[calc(84%-6px)] 1500size:w-[calc(84%-8px)] mt-24 md:px-[5%] lg:pr-0 h-auto  1500size:pl-[2%]'>
          {leftTexts.map((leftText, index) => (
            <div key={index} className=' border-b border-[#10101a]  '>
              {/* 숫자 */}
              <div className='p-4 relative md:text-sm md:mx-[3%] lg:mx-0 mb-6 violetFont'>0{index + 1}
                <div className="absolute top-2 left-1">
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H18" stroke="url(#paint0_linear_2363_1481)"/>
                    <defs>
                      <linearGradient id="paint0_linear_2363_1481" x1="16.5" y1="-1.5" x2="-2.10532" y2="2.32399" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#724CE8"/>
                        <stop offset="0.958258" stopColor="#26F4D0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute top-8 left-6 fill-black">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2.97237e-06L17 8.58579C17 8.85101 16.8946 9.10536 16.7071 9.2929L13.2929 12.7071C13.1054 12.8946 12.851 13 12.5858 13L0 13" stroke="url(#paint0_linear_2363_1482)"/>
                    <defs>
                      <linearGradient id="paint0_linear_2363_1482" x1="-2.38" y1="21.9853" x2="19.38" y2="-5.54411" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0232378" stopColor="#F8CF3E"/>
                        <stop offset="1" stopColor="#FC6756"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* 하단 컨텐츠 왼/ 오른쪽 */}
              <div className='flex'>
                {/* 왼쪽 */}
                <div className='md:w-[50%] lg:w-[calc(57%+5px)] 1500size:w-[62%] flex flex-col justify-between violetFont md:px-[3%]   lg:px-0'>
                  <div className='flex flex-col justify-between min-h-[38vh]'>
                    <div className='md:text-3xl 1500size:text-5xl'>
                      {leftText.title}
                    </div>
                    <div className='md:text-sm 1500size:text-xl w-[50%] pb-8 '>
                      <p>{leftText.description}</p>
                    </div>
                  </div>
                </div>
                {/* 오른쪽 */}
                <div className='md:w-[50%] lg:w-[calc(43%-1px)] 1500size:w-[calc(43%+4px)] roboMonoFont flex flex-col justify-between text-right md:text-sm 1500size:text-lg'>
                    {/* 위쪽 영역 */}
                    <div className='border-t border-[#10101a]'>
                        {rightTexts[index].top.map((rightText, idx) => (
                        <div key={idx} className='border-b border-[#10101a]'>
                            {rightText}
                        </div>
                        ))}
                    </div>
                    
                    {/* 아래쪽 영역 */}
                    <div className='border-t border-[#10101a]'>
                        {rightTexts[index].bottom.map((rightText, idx) => (
                        <div key={idx} className={`border-${idx === rightTexts[index].bottom.length - 1 ? 'none' : 'b'} border-[#10101a]`}>
                            {rightText}
                        </div>
                        ))}
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
};

export default Section03;
