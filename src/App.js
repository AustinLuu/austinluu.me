import React, { useEffect } from "react";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import AOS from 'aos';

const App = () =>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;
