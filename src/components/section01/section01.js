import React from 'react'
import '../../App.css';
import './section01.css'; // CSS 파일 import
// import '../topNav/topNav.css' ; // topNav.css에 line요소 사용하기 위해 가져옴

export const section01 = () => {
  return (
    <>
        {/* 전체 */}
        <div className='w-full h-[91.5vh] bg-green-900 px-[2%] '>
            {/*  전체 + 패딩값을 줌 flex로 위 아래 나뉠 예정 */}
            <div className='w-full bg-blue-600 flex flex-col   items-center'>
                {/* Q&A 공간감 */}
                <div className='w-[70%]'>
                    {/* 컨탠츠 영역 */}
                    <div className='flex bg-red-500 mt-[20vh] mb-[25vh]'>

                        {/* 왼 */}
                        <div className='w-[50%] border border-[#efefe5]  '>



                        <div className='bg-violet-900 h-[6rem]'>
                            {/* 사각형 */}
                            <div className='  absolute  top-[203px] z-10 border border-[#efefe5]  w-[66px] h-[66px] flex items-center justify-center'>
                                <img src={`${process.env.PUBLIC_URL}/invertedCommas.svg`} alt='invertedCommas' />
                                <div className=' absolute top-[-30px] left-[-30px] '>
                                    <img src={`${process.env.PUBLIC_URL}/leftTop.svg`} alt='leftTop' />
                                </div>
                            </div>

                             {/* 글귀들 위에 Q 아래에 A  -> 2개씩 올라가게*/}
                             <div className='bg-green-800 h-[12rem] flex flex-col  items-center border border-[#efefe5] overflow-hidden text-4xl text-center'>
                                <div className='p-4'>
                                    Q. When was ChatGPT released ?
                                </div>
                                <div className='p-4'>
                                    A. ChatGPT was first released in November 2020.
                                </div>


                                <div className='p-4'>
                                    Q. Is there any way to use ChatGPT ??
                                </div>
                                <div className='p-4'>
                                    Q. Is there any way to use ChatGPT ??
                                </div>
                                <div className='p-4'>
                                    Q. Is there any way to use ChatGPT ??
                                </div>
                            
                            </div>
                        </div>

                        </div>

                       

                        {/* 그림자 예정 */}



                        {/* 오른쪽 해당 질문의 카테고리로 채우기 */}
                        <div className='w-[50%]'>
                            <div className='h-[100px] flex pl-8 items-center border border-[#efefe5]'>
                                <div>   
                                    <img className='w-[12px] ' src={`${process.env.PUBLIC_URL}/arrowDown.svg`} alt='arrowDown'/>
                                </div>
                                <div className='flex'>
                                    <p>Q&A</p>
                                    <div>00</div>
                                </div>

                                
                
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full flex justify-between  '>
                <div className='bg-red-500 '>
                    <h4 className='text-4xl roboFont'>GPT for Everyone</h4>

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



            </div>

            </div>



            
            <div className="vertical-line vertical-line--left"></div>
            <div className="vertical-line vertical-line--center"></div>
            <div className="vertical-line vertical-line--right"></div>
        </div>
    </>
    
  )
}
export default section01;



// <div class="container-middle">
//   <div class="hero-info">
//     <div class="hero-info-left">
//       <div class="hero-slider-wrap js-hero-text-slides">
//         <div class="hero-slider-quote">
            
//           <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d37de6ffd28c_ico-quote.svg" 
//                loading="lazy" width="20" height="16" alt="">
           
//           <div class="corner corner--top-left hero-corer">
//             <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" 
//                  loading="lazy" alt="" class="corner-img">
//           </div>
//         </div>
//         <div class="hero-slider-inner">
//           <div class="hero-slide">
//             <p class="paragraph-3">Create a smart contract for a token named CGPT on Ethereum.</p>
//           </div>
//           <div class="hero-slide">
//             <p class="paragraph-3">Provide me with a daily crypto market analysis report.</p>
//           </div>
//           <div class="hero-slide active">
//             <p class="paragraph-3">How to deploy a Smart Contract on the Ethereum blockchain?</p>
//           </div>
//           <div class="hero-slide">
//             <p class="paragraph-3">How do I run a Bitcoin wallet locally?</p>
//           </div>
//           <div class="hero-slide">
//             <p class="paragraph-3">Summarize the latest Crypto-related news.</p>
//           </div>
//           <div class="hero-slide">
//             <p class="paragraph-3">Create a smart contract for a token named CGPT on Ethereum.</p>
//           </div>
//         </div>
//         <div class="hero-slide-fade"></div>
//         <div class="corner corner--bottom-left hero-corner">
//           <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d34b8dffd28d_corner.svg" 
//                loading="lazy" alt="" class="corner-img corner-img--bottom-left">
//         </div>
//       </div>
//     </div>
//     <div class="hero-info-right">
//       <div class="hero-feature-prime">
//         <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/6436bdb39b7ca6101e1a307d_ico-indicator-light.svg" 
//              loading="lazy" alt="" class="hero-feature-ico">
//         <div class="hero-feature-slide-pseudo">
//           <p class="paragraph hero-feature-paragraph">A</p>
//           <div class="hero-feature-score">0</div>
//         </div>
//         <div hero-feature-slide="" class="hero-feature-slide active">
//           <p class="paragraph hero-feature-paragraph">AI TOOLS</p>
//           <div class="hero-feature-score">10</div>
//         </div>
//         <div hero-feature-slide="" class="hero-feature-slide">
//           <p class="paragraph hero-feature-paragraph">MAUs</p>
//           <div class="hero-feature-score">550k</div>
//         </div>
//         <div hero-feature-slide="" class="hero-feature-slide">
//           <p class="paragraph hero-feature-paragraph">TVL</p>
//           <div class="hero-feature-score">$30m+</div>
//         </div>
//       </div>
//       <div class="hero-feature">
//         <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" 
//              loading="lazy" alt="" class="hero-feature-ico">
//         <p class="paragraph hero-feature-paragraph">DEVELOPMENT</p>
//       </div>
//       <div class="hero-feature">
//         <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" 
//              loading="lazy" alt="" class="hero-feature-ico">
//         <p class="paragraph hero-feature-paragraph">MARKET ANALYSIS</p>
//       </div>
//       <div class="hero-feature">
//         <img src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/643550c922d6d3e0dcffd28b_ico-indicator.svg" 
//              loading="lazy" alt="" class="hero-feature-ico">
//         <p class="paragraph hero-feature-paragraph">AI TRADING</p>
//       </div>
//       <div class="hero-feature transparent">
//         <p class="paragraph hero-feature-paragraph">AND MUCH MORE</p>
//       </div>
//     </div>
//   </div>
// </div>
