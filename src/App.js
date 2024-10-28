import React, { useState, useEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import "./App.css";
import TopNav from "./components/topNav/topNav";
import Section01 from "./components/section01/section01";
import Section02 from "./components/section02/section02";
import Section03 from "./components/section03/section03";
import HorizontalScroll from "./components/horizontalScroll/horizontalScroll";
import Robot from "./components/robot/robot";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Loading from "./components/loading/loading";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const sectionRefs = [
    useRef(null), // Section01
    useRef(null), // Section02
    useRef(null), // horizontalScroll
    useRef(null), // Section03
  ];

  const scrollToSection = (index) => {
    // HorizontalScroll 섹션인지 확인
    const targetElement = sectionRefs[index]?.current;

    if (index === 2 && targetElement) {
      // horizontalScroll 섹션은 top 15% 위치로 스크롤
      const topPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight * 0.15;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    } else {
      // 다른 섹션은 기본 스크롤
      targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;

      // 모바일 상태에서 데스크탑 상태로 변경되거나 그 반대의 경우에 새로고침
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Loading />
        <TopNav scrollToSection={scrollToSection} />
        <div className="relative">
          <Robot />
          <div className="mt-[-100vh]">
            <div ref={sectionRefs[0]} id="section01">
              <Section01 />
            </div>
            <div ref={sectionRefs[1]} id="section02">
              <Section02 />
            </div>
            <div ref={sectionRefs[2]} id="horizontalScroll">
              <HorizontalScroll />
            </div>
            <div ref={sectionRefs[3]} id="section03">
              <Section03 />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
