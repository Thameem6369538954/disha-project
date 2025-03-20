import React from 'react'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import Aboutus from '../Components/Aboutus'
import Chooseus from "../Components/Chooseus"
import Testimonials from '../Components/Testimonials'
import GetInTouch from '../Components/Getintouch'
import Bennar from '../Components/Bennar'
import Cate from '../Components/Cate'
import MM from "../Images/MM.png"
import bg from "../Images/bg.jpg"



const Home = () => {
  return (
    <div
  className="relative w-full min-h-auto bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="absolute inset-0 bg-black/50 z-0"></div>
  <div className="relative z-10 flex flex-col min-h-screen">
  <div id='home'>
        <Header />
     <Carousel />
     <Aboutus />
     <Bennar />
     <Chooseus />
     <Cate />
     <Testimonials />
     <GetInTouch />
    </div>
  </div>
</div>

    
  )
}

export default Home