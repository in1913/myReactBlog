import React from 'react';
import './App.css';
import Header from "./Component/head/Header";
import Hero from './Component/Hero/Hero';
import Features from './Component/features/Features';

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Features></Features>
    </>
  );
};

export default App;