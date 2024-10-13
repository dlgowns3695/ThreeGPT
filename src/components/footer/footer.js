import React, { useState, useRef, useEffect } from "react";
import "../../App.css";

const Footer = () => {
  const footerContent = [
    // 첫번째
    {
      subtitles: [
        {
          title: "Our research",
          content: ["Overview", "Index"],
        },
        {
          title: "Latest advancements",
          content: [
            "OpenAI o1",
            "OpenAI o1-mini",
            "GPT-4",
            "GPT-4o mini",
            "DALL·E 3",
            "Sora",
          ],
        },
      ],
    },
    // 두번째
    {
      subtitles: [
        {
          title: "ChatGPT",
          content: [
            "For Everyone",
            "For Teams",
            "For Enterprises",
            "ChatGPT login",
            "Download",
          ],
        },
        {
          title: "API",
          content: [
            "Platform overview",
            "Pricing",
            "Documentation",
            "API login",
          ],
        },
        {
          title: "Explore more",
          content: ["OpenAI for business", "Stories"],
        },
      ],
    },
    // 세번째
    {
      subtitles: [
        {
          title: "Safety overview",
          content: ["Safety overview"],
        },
      ],
    },
    // 네번째
    {
      subtitles: [
        {
          title: "Company",
          content: [
            "About us",
            "News",
            "Our Charter",
            "Security",
            "Residency",
            "Careers",
          ],
        },
      ],
    },
    // 다섯번째
    {
      subtitles: [
        {
          title: "Terms & policies",
          content: [
            "Terms of use",
            "Privacy policy",
            "Brand guidelines",
            "Other policies",
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex justify-center items-center text-sm relative border-t border-[#cacac6] bg-[#f5f6f0] z-[99]">
      {/* 큰 전체 */}
      <div className="my-[3%] h-full">
        {/* 컨텐츠 전체 */}
        <div className="flex gap-20">
          {footerContent.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-16">
              {section.subtitles.map((subtitle, subtitleIndex) => (
                <div key={subtitleIndex} className="flex flex-col gap-6">
                  <span>{subtitle.title}</span>
                  <ul className="flex flex-col gap-3">
                    {subtitle.content.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[10%]"></div>

        {/* 콘텐츠 하단 */}
        <div className="w-full flex justify-between  items-end">
          {/* 왼쪽 */}
          <div>
            <span class="flex text-sm mr-xs">OpenAI © 2015–2024</span>
          </div>
          <div className="flex gap-8">
            {/* 첫번째 링크*/}
            <div>
              <a
                href="https://x.com/OpenAI"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 두번째 링크*/}
            <div>
              <a
                href="https://www.youtube.com/OpenAI"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M16.79 5.475s-.156-1.067-.637-1.536c-.61-.617-1.29-.62-1.603-.656-2.238-.158-5.597-.158-5.597-.158h-.006s-3.36 0-5.597.158c-.313.036-.994.039-1.603.656-.481.469-.635 1.536-.635 1.536S.95 6.73.95 7.982v1.174c0 1.252.16 2.507.16 2.507s.156 1.067.634 1.536c.61.617 1.41.596 1.765.662 1.282.118 5.441.154 5.441.154s3.363-.006 5.6-.16c.313-.036.994-.04 1.603-.656.481-.469.638-1.536.638-1.536s.159-1.252.159-2.507V7.982c0-1.252-.16-2.507-.16-2.507ZM7.298 10.58V6.228l4.322 2.184-4.322 2.168Z"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 세번째 링크 */}
            <div>
              <a
                href="https://www.linkedin.com/company/openai"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M15.776.83H2.14C1.488.83.96 1.329.96 1.946v13.249c0 .617.528 1.119 1.181 1.119h13.635c.653 0 1.184-.502 1.184-1.116V1.946c0-.617-.531-1.116-1.184-1.116ZM5.706 14.025H3.333V6.633h2.375v7.392ZM4.52 5.626c-.762 0-1.378-.595-1.378-1.33 0-.735.616-1.33 1.378-1.33.76 0 1.375.595 1.375 1.33 0 .732-.615 1.33-1.375 1.33Zm10.075 8.399h-2.371v-3.593c0-.856-.016-1.96-1.235-1.96-1.234 0-1.422.935-1.422 1.9v3.653H7.197V6.633h2.275v1.01h.032c.315-.58 1.09-1.194 2.244-1.194 2.403 0 2.846 1.53 2.846 3.52v4.056Z"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 네번째 링크 */}
            <div>
              <a
                href="https://github.com/openai"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8.977.83C4.549.83.97 4.32.97 8.636c0 3.45 2.293 6.371 5.475 7.405.397.078.543-.168.543-.375 0-.18-.013-.8-.013-1.447-2.227.465-2.691-.93-2.691-.93-.358-.905-.888-1.138-.888-1.138-.73-.478.053-.478.053-.478.808.052 1.233.801 1.233.801.715 1.19 1.869.853 2.333.646.066-.504.278-.853.504-1.046-1.777-.181-3.646-.853-3.646-3.852 0-.853.318-1.55.822-2.093-.08-.194-.358-.995.08-2.068 0 0 .676-.207 2.2.801a7.94 7.94 0 0 1 2.002-.258c.676 0 1.365.09 2.001.258 1.525-1.008 2.2-.801 2.2-.801.438 1.073.16 1.874.08 2.068.517.542.822 1.24.822 2.093 0 2.999-1.869 3.658-3.659 3.852.292.245.544.71.544 1.447 0 1.047-.013 1.887-.013 2.145 0 .207.146.453.543.375 3.182-1.034 5.475-3.955 5.475-7.405C16.983 4.319 13.39.83 8.977.83Z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 다섯번째 링크 */}
            <div>
              <a
                href="https://www.instagram.com/openai/?hl=en"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <g fill="currentColor" clipPath="url(#a)">
                    <path d="M7.99 2.27c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.275.372.143.64.318.918.596.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.231.047-2.137 0-2.39-.01-3.231-.047-.781-.034-1.203-.166-1.485-.275a2.472 2.472 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.144-.372.319-.64.597-.919a2.46 2.46 0 0 1 .918-.596c.282-.11.707-.241 1.485-.275.84-.038 1.094-.047 3.231-.047Zm0-1.44c-2.172 0-2.444.01-3.297.047-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925A3.92 3.92 0 0 0 .41 3.589C.212 4.1.074 4.68.037 5.53c-.038.856-.047 1.128-.047 3.3 0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.444.443.89.718 1.415.921.51.197 1.091.334 1.941.372.853.037 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.038 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922 3.91 3.91 0 0 0 .922-1.415c.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.748 3.748 0 0 0-.916-1.422 3.911 3.911 0 0 0-1.415-.922C12.72 1.055 12.14.918 11.29.88c-.856-.04-1.128-.05-3.3-.05Z"></path>
                    <path d="M7.99 4.72a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.221 4.558a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z"></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 여섯번째 링크 */}
            <div>
              <a
                href="https://www.tiktok.com/@openai?lang=en"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M11.382.83H8.685v10.899c0 1.298-1.037 2.365-2.327 2.365-1.291 0-2.328-1.067-2.328-2.365 0-1.276 1.014-2.32 2.258-2.366V6.627c-2.742.046-4.955 2.296-4.955 5.102 0 2.829 2.259 5.101 5.048 5.101 2.788 0 5.047-2.296 5.047-5.101V6.14A6.244 6.244 0 0 0 15 7.346V4.61c-2.028-.07-3.618-1.74-3.618-3.78Z"
                    ></path>
                  </g>
                </svg>
                <span></span>
              </a>
            </div>
            {/* 일곱번째 링크 */}
            <div>
              <a
                href="https://discord.gg/openai"
                className="transition ease-curve-a duration-250 text-small"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
              >
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                >
                  <path
                    d="M14.9006 4.06779C13.7837 3.56177 12.6046 3.20279 11.3934 3C11.2277 3.2932 11.0777 3.59486 10.9441 3.90372C9.65398 3.71134 8.34198 3.71134 7.05182 3.90372C6.91819 3.59489 6.76822 3.29323 6.60255 3C5.39058 3.2045 4.21068 3.56434 3.09264 4.07044C0.87304 7.32013 0.271342 10.4891 0.572191 13.6131C1.87204 14.5635 3.32695 15.2862 4.87367 15.75C5.22194 15.2865 5.53012 14.7947 5.79494 14.28C5.29196 14.0941 4.8065 13.8647 4.34417 13.5946C4.46585 13.5072 4.58485 13.4173 4.69985 13.3299C6.04511 13.956 7.51339 14.2806 8.99999 14.2806C10.4866 14.2806 11.9549 13.956 13.3001 13.3299C13.4165 13.4239 13.5355 13.5139 13.6558 13.5946C13.1926 13.8652 12.7062 14.0949 12.2024 14.2813C12.4668 14.7958 12.775 15.2871 13.1236 15.75C14.6717 15.2881 16.1277 14.5657 17.4278 13.6144C17.7808 9.99159 16.8247 6.85173 14.9006 4.06779ZM6.17601 11.6919C5.33765 11.6919 4.64502 10.939 4.64502 10.0128C4.64502 9.08655 5.31358 8.32705 6.17334 8.32705C7.0331 8.32705 7.72037 9.08655 7.70567 10.0128C7.69096 10.939 7.03043 11.6919 6.17601 11.6919ZM11.824 11.6919C10.9843 11.6919 10.2943 10.939 10.2943 10.0128C10.2943 9.08655 10.9629 8.32705 11.824 8.32705C12.6851 8.32705 13.367 9.08655 13.3523 10.0128C13.3376 10.939 12.6784 11.6919 11.824 11.6919Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span></span>
                {/* <span className="sr-only">(opens in a new window)</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
