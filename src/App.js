import React from 'react';
import './App.css';
import Header from "./Component/head/Header";
import Hero from './Component/Hero/Hero';
import Features from './Component/features/Features';
import Portfolio from './Component/portfolio/Portfolio';
import Resume from './Component/resume/Resume';
const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Features></Features>
    <Portfolio></Portfolio>
    <Resume></Resume>
    </>
  );
};

export default App;