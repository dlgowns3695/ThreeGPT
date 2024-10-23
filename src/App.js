import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import TopNav from "./components/topNav/topNav"; // topNav.js 불러오기
import Section01 from "./components/section01/section01";
import Section02 from "./components/section02/section02";
import Section03 from "./components/section03/section03";
import HorizontalScroll from "./components/horizontalScroll/horizontalScroll";
import Section00New from "./components/model/model1";
import { Model } from "./components/robot/robotmodel";
import Robot from "./components/robot/robot";
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";

function App() {
  // 각 섹션에 대한 useRef 설정
  const sectionRefs = [
    useRef(null), // Section01
    useRef(null), // Section02
    useRef(null), // Section03
    useRef(null), // Section04
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 스크롤 지속시간
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 이징 함수
      smooth: true, // 부드러운 스크롤 활성화
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // 컴포넌트 언마운트 시 Lenis 인스턴스 제거
    };
  }, []);

  // 스크롤 이동 함수
  const scrollToSection = (index) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* TopNav에 scrollToSection 함수를 전달 */}
      {/* <Loading></Loading> */}
      <TopNav scrollToSection={scrollToSection} />

      <Robot />
      {/* 각 섹션을 useRef로 연결 */}
      {/* <Section00New /> */}
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

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
