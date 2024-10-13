const footerSections = [
  {
    title: "Our research",
    links: [
      { text: "Overview", href: "/research/" },
      { text: "Index", href: "/news/research/" },
    ],
  },
  {
    title: "Latest advancements",
    links: [
      { text: "OpenAI o1", href: "/index/learning-to-reason-with-llms/" },
      {
        text: "OpenAI o1-mini",
        href: "/index/openai-o1-mini-advancing-cost-efficient-reasoning/",
      },
      { text: "GPT-4", href: "/index/gpt-4/" },
      {
        text: "GPT-4o mini",
        href: "/index/gpt-4o-mini-advancing-cost-efficient-intelligence/",
      },
    ],
  },
  {
    title: "ChatGPT",
    links: [
      { text: "For Everyone", href: "/chatgpt/overview/" },
      { text: "For Teams", href: "/chatgpt/team/" },
      { text: "For Enterprises", href: "/chatgpt/enterprise/" },
      { text: "ChatGPT login", href: "https://chatgpt.com/", external: true },
      { text: "Download", href: "/chatgpt/download/" },
    ],
  },
  {
    title: "API",
    links: [
      { text: "Platform overview", href: "/api/" },
      { text: "Pricing", href: "/api/pricing/" },
      {
        text: "Documentation",
        href: "https://platform.openai.com/docs/introduction",
        external: true,
      },
      {
        text: "API login",
        href: "https://platform.openai.com/",
        external: true,
      },
    ],
  },
  {
    title: "Explore more",
    links: [
      { text: "OpenAI for business", href: "/business/" },
      { text: "Stories", href: "/news/stories/" },
    ],
  },
  {
    title: "Safety overview",
    links: [{ text: "Safety overview", href: "/safety/" }],
  },
  {
    title: "Company",
    links: [
      { text: "About us", href: "/about/" },
      { text: "News", href: "/news/" },
      { text: "Our Charter", href: "/charter/" },
      { text: "Security", href: "/security-and-privacy/" },
      { text: "Residency", href: "/residency/" },
      { text: "Careers", href: "/careers/" },
    ],
  },
  {
    title: "Terms & policies",
    links: [
      { text: "Terms of use", href: "/policies/terms-of-use/" },
      { text: "Privacy policy", href: "/policies/privacy-policy/" },
      { text: "Brand guidelines", href: "/brand/" },
      { text: "Other policies", href: "/policies/" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        {/* 큰 전체 */}
        <div className="max-w-[68%] mb-[10%] bg-red-500 h-full ">
          {/* 컨텐츠 전체 */}
          <div className="flex gap-16">
            {/* 첫번째 줄 */}
            <div className="flex flex-col gap-16">
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Our research</span>
                <ul className="flex flex-col">
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>Index</a>
                  </li>
                </ul>
              </div>
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Latest advancements</span>
                <ul className="flex flex-col">
                  <li>
                    <a>OpenAI o1</a>
                  </li>
                  <li>
                    <a>OpenAI o1-mini</a>
                  </li>
                  <li>
                    <a>GPT-4</a>
                  </li>
                  <li>
                    <a>GPT-4o mini</a>
                  </li>
                  <li>
                    <a>DALL·E 3</a>
                  </li>
                  <li>
                    <a>Sora</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 두번째 줄 */}
            <div className="flex flex-col gap-16">
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>ChatGPT</span>
                <ul className="flex flex-col">
                  <li>
                    <a>For Everyone</a>
                  </li>
                  <li>
                    <a>For Teams</a>
                  </li>
                  <li>
                    <a>For Enterprises</a>
                  </li>
                  <li>
                    <a>ChatGPT login</a>
                  </li>
                  <li>
                    <a>Download</a>
                  </li>
                </ul>
              </div>
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>API</span>
                <ul className="flex flex-col">
                  <li>
                    <a>Platform overview</a>
                  </li>
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Documentation</a>
                  </li>
                  <li>
                    <a>API login</a>
                  </li>
                </ul>
              </div>
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Explore more</span>
                <ul className="flex flex-col">
                  <li>
                    <a>OpenAI for business</a>
                  </li>
                  <li>
                    <a>Stories </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 세번째 줄 */}
            <div className="flex flex-col gap-16">
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Safety overview</span>
                <ul className="flex flex-col">
                  <li>
                    <a>Safety overview</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 네번째 줄 */}
            <div className="flex flex-col gap-16">
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Company</span>
                <ul className="flex flex-col">
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>Our Charter</a>
                  </li>
                  <li>
                    <a>Security</a>
                  </li>
                  <li>
                    <a>Residency</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 다섯번째 줄 */}
            <div className="flex flex-col gap-16">
              {/* 소 타이틀 */}
              <div className="flex flex-col gap-4">
                <span>Terms & policies</span>
                <ul className="flex flex-col">
                  <li>
                    <a>Terms of use</a>
                  </li>
                  <li>
                    <a>Privacy policy</a>
                  </li>
                  <li>
                    <a>Brand guidelines</a>
                  </li>
                  <li>
                    <a>Other policies</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
