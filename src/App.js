
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './App.css';
import TopNav from './components/topNav/topNav'; // topNav.js 불러오기 
import Section01 from './components/section01/section01';
import Section02 from './components/section02/section02';
import Section03 from './components/section03/section03';
import Section04 from './components/section04/section04';


function App() {
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
  return (
    <>
      <TopNav></TopNav>
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
      <Section04></Section04>

    </>
  );
}

export default App;
