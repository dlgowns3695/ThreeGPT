import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // 앱의 주 컴포넌트
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// <BrowserRouter>는 최상위 컴포넌트로 위치해야 함
root.render(<App />);

// 성능 측정을 위한 리포트
reportWebVitals();
