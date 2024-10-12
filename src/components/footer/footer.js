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
    <div className="flex flex-col gap-m w-full">
      {footerSections.map((section, index) => (
        <div
          key={index}
          className="first:mt-0 mt-m m:mt-0 flex flex-col gap-m w-full"
        >
          <div className="gap-3xs flex flex-col">
            <span
              className="text-footer-label text-small"
              role="heading"
              aria-level="2"
            >
              {section.title}
            </span>
            <ul className="gap-3xs flex flex-col" role="list">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 p-0.5 -m-0.5 text-small text-footer-link"
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.text}
                    {link.external && (
                      <svg
                        width="0.5625rem"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    )}
                    {link.external && (
                      <span className="sr-only">(opens in a new window)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
