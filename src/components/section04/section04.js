import React from 'react';
import '../../App.css';
import './section04.css'; // CSS 파일 import

export const Section04 = () => {

// 왼쪽 타이틀의 배열 - 챗 GPT 버전별 제목과 설명
const leftTexts = [
    {
        title: 'Free Plan', 
        dec: 'Access to basic AI tools and functionalities for individual use. This plan is perfect for those who want to explore AI capabilities without any financial commitment. Users will enjoy a limited number of queries per month, allowing them to test various features and functionalities while engaging with the community for support and insights.'
    },
    {
        title: 'Plus Plan', 
        dec: 'Faster response times, priority access, and enhanced AI tools for personal or small business use. This plan is tailored for users who require a more efficient experience with increased query limits. Gain access to advanced features, receive personalized support, and experience quicker response times, making it ideal for those looking to leverage AI in their daily operations or small business ventures.'
    },
    {
        title: 'Enterprise Plan', 
        dec: 'Full access to premium AI features, dedicated support, and scalability for large businesses. This comprehensive plan is designed for organizations that demand robust AI capabilities. It includes unlimited queries, a dedicated support team to assist with any challenges, and customizable solutions tailored to your business needs. Experience the full power of AI with seamless integration and the ability to scale operations effectively.'
    }
];

// 오른쪽 텍스트 배열 - 각 플랜에 대한 부가 옵션
const rightTexts = [
    {
        plan: 'Free Plan',
        features: [
            'Basic AI Access', 
            'Limited Queries', 
            'Community Support'
        ]
    },
    {
        plan: 'Plus Plan',
        features: [
            'Priority AI Access', 
            'Increased Query Limit', 
            'Faster Response Time', 
            'API & SDK Access'
        ]
    },
    {
        plan: 'Enterprise Plan',
        features: [
            'Full AI Access', 
            'Unlimited Queries', 
            'Dedicated Support', 
            'API & SDK Integration', 
            'Custom Solutions'
        ]
    }
];

  

  return (
    <>
    {/* 전체 */}
      <div className='w-full h-full mt-[20vh] md:pl-[8%] lg:pl-[5%] 1500size:px-[2%] z-10  '>
        {/* 컨텐츠 전체 */}
        {leftTexts.map((plan, index) => (

            <div key={index} className='lg:w-[calc(84%-6px)] mt-[30vh] pb-[20vh] 1500size:w-[85%] flex '>
                {/* 왼 */}
                <div className='w-[calc(59%-1px)]  '>
                    {/* &CGPT */}
                    <div className='flex relative'>

                        <div className="absolute top-[-20px] left-[5px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.45rem] 1500size:h-[0.45rem] rounded-full bg-[#10101a]"></div>
                        <div className="absolute top-[-20px] left-[25px] md:w-[0.3rem] md:h-[0.3rem] lg:w-[0.4rem] lg:h-[0.4rem] 1500size:w-[0.45rem] 1500size:h-[0.45rem] rounded-full bg-[#10101a]"></div>

                        <div className="relative">
                            {/* 왼쪽 타이틀 배열가져오기 */}
                            <h2 className="md:text-3xl lg:text-4xl 1500size:text-6xl violetFont p-8">{plan.title}</h2>
                            
                            <div className="absolute top-0 left-0">
                                <svg className="w-[14.5rem] md:w-[12.7rem] xl:w-[29rem] h-auto" viewBox="0 0 302 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="path-anim path-anim-sm-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H300" stroke="url(#paint0_linear_4345_782)" strokeWidth="2.5" strokeLinecap="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_4345_782" x1="416.5" y1="-9.49999" x2="25.7658" y2="-140.863" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.236372" stopColor="#724CE8"></stop>
                                        <stop offset="1" stopColor="#26F4D0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            
                            <div className="absolute bottom-0 right-0">
                                <svg className="w-[7.3125rem] md:w-[5.3125rem] xl:w-[9.3125rem] h-auto" viewBox="0 0 149 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="path-anim path-anim-sm-2" d="M1.5 17H130.257C131.053 17 131.816 16.6839 132.379 16.1213L147 1.5" stroke="url(#paint0_linear_4345_781)" strokeWidth="2.5" strokeLinecap="round"></path>
                                    <defs>
                                        <linearGradient id="paint0_linear_4345_781" x1="-204.5" y1="24.0001" x2="156.5" y2="-2.00001" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#F8CF3E"></stop>
                                        <stop offset="1" stopColor="#FC6756"></stop>
                                        <stop offset="1" stopColor="#FC6756"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>



                    </div>
                    {/* 왼쪽 배열 내용 */}
                    <div className='w-[50%] min-h-[40%] pt-28'>
                        {plan.dec}
                    </div>
                </div>

                {/* 오 */}
                <div className='w-[41%] h-full text-right'>
                    {/* 오른쪽 타이틀 부분 반복 */}
                    <div className='border-b border-[#10101a] p-6 opacity-60'>
                        {/* 부모쪽에서 반복문 돌리면서 가져온 index삽입 */}
                        {rightTexts[index].plan}
                    </div>
                    {/* 오른쪽 기능 항목 반복 */}
                    {rightTexts[index].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='border-b border-[#10101a] p-1 pr-6'>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

        ))}


      </div>
    </>
  );
};

export default Section04;
