import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import './App.css';
 import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';



function App() {
  return (
    <Router classname="router">
      <Navbar />
      <HeroSection />
      <FilterSection />
      {/* <ItemCard />  */}
      <Shop />
    </Router>
  );
}

export default App;
