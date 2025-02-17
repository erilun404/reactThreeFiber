import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import { StartPage } from "./pages/startpage";
import { TestPage } from "./pages/testPage";
import LevaPage from "./pages/LevaPage";
import { Bubbles } from "./pages/Bubbles";
import GamePage from "./pages/GamePage";
import './index.css';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/leva" element={<LevaPage />} />
        <Route path="/bubbles" element={<Bubbles />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
};

export default App;

