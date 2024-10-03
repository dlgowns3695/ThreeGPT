import React from 'react';
import '../../App.css';
import './section02.css'; // CSS 파일 import

export const Section02 = () => {
  const slidesData = [
    {
      id: 1,
      title: 'Creators',
      number: '01',
      name: 'Sam Altman',
      position: 'The founder of ChatGPT',
      quote: 'ChatGPT eliminates the complexities of problem-solving, delivering instant solutions for startups.',
      imgSrc: `${process.env.PUBLIC_URL}/sam.webp`,
    },
    {
      id: 2,
      title: 'Investors',
      number: '02',
      name: 'Elon Musk',
      position: 'CEO of Tesla and SpaceX',
      quote: 'Artificial intelligence is the future, and ChatGPT is leading the way.',
      imgSrc: `${process.env.PUBLIC_URL}/sam.webp`,
    },
    {
      id: 3,
      title: 'Researchers',
      number: '03',
      name: 'Yoshua Bengio',
      position: 'AI Pioneer',
      quote: 'ChatGPT offers a groundbreaking approach to natural language understanding.',
      imgSrc: `${process.env.PUBLIC_URL}/sam.webp`,
    },
    {
      id: 4,
      title: 'Entrepreneurs',
      number: '04',
      name: 'Sundar Pichai',
      position: 'CEO of Google',
      quote: 'ChatGPT represents the kind of innovation the world needs today.',
      imgSrc: `${process.env.PUBLIC_URL}/sam.webp`,
    },
  ];

  return (

    // 전체
    <div className="w-full h-[100vh] flex flex-col justify-between relative">
      {/* 상단 */}
      <div className="flex justify-between w-full mt-[10vh] px-[2%] z-10">
        <div className="relative">
          <div className="absolute top-[-20px] left-[5px] w-[0.5rem] h-[0.5rem] rounded-full bg-[#10101a]"></div>
          <div className="absolute top-[-20px] left-[25px] w-[0.5rem] h-[0.5rem] rounded-full bg-[#10101a]"></div>

          <h2 className="text-7xl p-4 text-center section-title-bordered">
            <span className="section-title-bordered-line-1">
              <span className="section-title-bordered-line-2 mx-8">Your Gateway</span>
            </span>
          </h2>
          <h2 className="text-7xl p-4 text-left"><span>To Web3 AI</span></h2>
        </div>

        <div className="flex items-end w-[35%] text-3xl">
          For individuals,<br /> developers,<br /> and businesses.
        </div>
      </div>


      {/* 하단 */}
      <div className="w-[calc(84%-8px)] h-full z-10">
        {slidesData.map((slide) => (
          <div key={slide.id} className="flex flex-col gap-8 bg-[#f5f6f0] w-full pl-[2%] border-t border-r border-b border-[#10101a] mb-8">
            <div className='flex items-center '>
              <div className='flex w-[calc(18.6%-9px)] items-center gap-8 text-lg'>
                <div>{slide.title}</div>
                <div className='relative'>
                  <div>{slide.number}</div>
                  <div className="absolute top-[-5px] left-[-10px]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                    </svg>
                  </div>
                  <div className="absolute top-[15px] left-[10px] rotate-180 fill-black">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 15V5.41421C1 5.149 1.10536 4.89464 1.29289 4.70711L4.70711 1.29289C4.89464 1.10536 5.149 1 5.41421 1H15" stroke="#10101A"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='flex gap-8'>
                <div>
                  <img className='w-[100px] h-[100px]' src={slide.imgSrc} alt={slide.name} />
                </div>
                <div className='flex items-center gap-8'>
                  <svg className="w-[12px] rotate-90" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z" fill="#10101A"/>
                  </svg>
                  <div className='text-2xl violetFont'>{slide.name}</div>
                </div>
              </div>

              <div className='ml-[28%] text-lg uppercase'>{slide.position}</div>
            </div>

            <div className='w-[30%] text-5xl violetFont'>
              "{slide.quote}"
            </div>

            <div className='flex gap-8 mb-8'>
              <div className='w-[1px] bg-[#10101a]'></div>
              <div className='text-lg violetFont'>Try for yourself <span>Click Here</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Section02;