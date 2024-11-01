import React, { useState } from "react";
import "../../App.css";
import "./topNav.css"; // CSS 파일 import

const TopNav = ({ scrollToSection }) => {
  const titles = ["GPT LEEHAEJUN", "Home", "About GPT", "Products", "Research"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-auto text-lg border-b border-[#cacac6] fixed z-[9999] bg-[#fff]">
      <div className="w-full h-full flex items-center justify-between py-[2%] md:py-0 px-[5%] md:px-[2%] relative bg-[#fff] z-[9999]">
        {/* 왼쪽 로고 영역 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // 클릭 시 상단 스크롤
          className="md:flex-shrink-0 w-[15%] flex items-center gap-2 lg:gap-4"
        >
          <img
            className="w-[35px] h-[35px] 1200size:w-[32px] 1200size:h-[34px] 1400size:w-[42px] 1400size:h-[44px]"
            src={`${process.env.PUBLIC_URL}/ChatGPTLogo.svg`}
            alt="ChatGPTLogo"
          />
          <span className="hidden md:block text-lg 1200size:text-2xl 1400size:text-3xl violetFont">
            ChatGPT
          </span>
        </button>

        {/* 햄버거 바 */}
        <div className="block md:hidden w-[50%]" onClick={toggleMenu}>
          {isOpen ? (
            // X 아이콘 (메뉴가 열려있을 때)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`size-8 hamburger-icon ${
                isOpen ? "hamburger-icon-active" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // 햄버거 아이콘 (메뉴가 닫혀있을 때)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`size-8 hamburger-icon ${
                isOpen ? "hamburger-icon-active" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </div>

        {/* 가운데 네비게이션 (PC) */}
        <div className="w-full hidden md:block">
          <ul className="flex justify-between">
            {titles.map((title, index) => (
              <li
                key={index}
                className={`text-sm 1200size:text-lg relative flex-1 flex justify-center group`}
              >
                {index === 0 ? (
                  <div className="relative flex items-center justify-center w-full md:px-4 px-6 border-l border-r border-[#cacac6] box-border">
                    {/* 아이콘 */}
                    <div className="relative w-[1rem] h-[1rem] mr-2 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200">
                      <div className="ourNavIcon top-left"></div>
                      <div className="ourNavIcon top-right"></div>
                      <div className="ourNavIcon bottom-left"></div>
                      <div className="ourNavIcon bottom-right"></div>
                    </div>
                    <span className="text-nowrap mr-2">{title}</span>
                    <div className="absolute top-0 left-0 right-0 h-[.125rem] topNav-gradient"></div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(index - 1)} // index에 따른 섹션 이동
                    className="scramble-text py-6 mr-2 violetFont"
                  >
                    {title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 모바일 네비게이션 */}
        <div
          className={`bg-[#fff] mt-[10%] w-full absolute top-0 left-0 px-[5%] block md:hidden transition-all duration-500 ${
            isOpen ? "h-[100vh]" : "h-0"
          }  overflow-clip`} // overflow hidden
        >
          <ul className="flex flex-col text-[12px]">
            {titles.map((title, index) => (
              <li
                key={index}
                className={`relative flex items-center py-2 ${
                  index === 0 ? "" : "justify-between border-b border-[#cacac6]"
                }`}
              >
                {index === 0 ? (
                  <>
                    <div className="relative w-[1rem] h-[1rem] mr-2 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200">
                      <div className="ourNavIcon top-left"></div>
                      <div className="ourNavIcon top-right"></div>
                      <div className="ourNavIcon bottom-left"></div>
                      <div className="ourNavIcon bottom-right"></div>
                    </div>
                    <span>{title}</span>
                    <div className="absolute bottom-0 left-0 right-0 h-[.125rem] topNav-gradient"></div>
                    <div className="flex items-center absolute right-0">
                      <svg
                        className="w-[10px]"
                        viewBox="0 0 6 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z"
                          fill="#10101A"
                        />
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <span>{title}</span>
                    <div className="flex items-center absolute right-0">
                      <svg
                        className="w-[10px]"
                        viewBox="0 0 6 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.1982 3.90328C3.09659 4.03224 2.90341 4.03224 2.8018 3.90328L0.0565376 0.419105C-0.0920827 0.230483 0.0735936 -0.0434377 0.306501 0.00582836L2.94823 0.564624C2.98238 0.571847 3.01762 0.571847 3.05177 0.564624L5.6935 0.00582791C5.92641 -0.0434382 6.09208 0.230482 5.94346 0.419105L3.1982 3.90328Z"
                          fill="#10101A"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 맨 오른쪽 버튼 */}
        <div className="flex-shrink-0 relative flex w-auto md:w-[15%] justify-end h-full">
          <a
            
            href="#"
            
            className="btn-primary flex items-center"
            onClick={(e) => e.preventDefault()} // 클릭 시 기본 동작 방지
          >
            <div className="btn-primary-lines btn-primary-lines-1"></div>
            <div className="btn-primary-lines btn-primary-lines-2"></div>
            <div className="btn-primary-text p-2 ml-2 1200size:p-4 1200size:ml-4 violetFont text-sm md:text-lg">
              Three GPT
            </div>
          </a>
        </div>

        {/* 수직선 */}
        <div className=" vertical-line vertical-line--left vertical-line-header hidden lg:block"></div>
        <div className=" vertical-line vertical-line--right vertical-line-header hidden lg:block"></div>
      </div>
    </div>
  );
};

export default TopNav;
