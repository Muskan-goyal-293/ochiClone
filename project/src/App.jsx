
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Marque from './Component/marque'
import About from './Component/About'
import Play from './Component/play'
import AllFeature from './Component/AllFeature'
import Ready from './Component/Ready'
import Footer from './Component/Fotter'
import Card from './Component/Card'
import LocomotiveScroll from 'locomotive-scroll';
function  App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div  data-scroll-container className=' h-screen w-full '>
      <Navbar/>
      <Hero/>
      <Marque/>
      <About/>
      <Play/>
      <AllFeature /> 
      <Card/> 
      <Ready/> 
      <Footer/>
       </div>
  )
}

export default  App