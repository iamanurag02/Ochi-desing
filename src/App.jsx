import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Cards from './components/Card'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

 

  const locomotiveScroll = new LocomotiveScroll();

  return (
  <div className='w-full   bg-[#f1f1f1] h-screen text-black'>
     <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
