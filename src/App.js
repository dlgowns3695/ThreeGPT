import React, { useEffect, useRef } from "react";

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
  const sectionRefs = [
    useRef(null), // Section01
    useRef(null), // Section02
    useRef(null), // Section03
  ];

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

  const scrollToSection = (index) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

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
