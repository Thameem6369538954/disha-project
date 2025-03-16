import React from 'react'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import Aboutus from '../Components/Aboutus'
import Chooseus from "../Components/Chooseus"
import Testimonials from '../Components/Testimonials'
import GetInTouch from '../Components/Getintouch'

const Home = () => {
  return (
    <div id='home'>
        <Header />
     <Carousel />
     <Aboutus />
     <Chooseus />
     <Testimonials />
     <GetInTouch />
    </div>
  )
}

export default Home