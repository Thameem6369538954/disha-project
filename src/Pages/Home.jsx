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

const Home = () => {
  return (
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
  )
}

export default Home