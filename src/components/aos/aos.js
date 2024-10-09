// src/components/aos/AOSComponent.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aos = ({ children, dataAos }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: true, // 애니메이션이 한 번만 실행
    });
  }, []);

  return (
    <div data-aos={dataAos}>
      {children}
    </div>
  );
};

export default Aos;
