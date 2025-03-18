import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.08,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    const refreshScroll = () => {
      scroll.update();
    };

    window.addEventListener('resize', refreshScroll);
    window.addEventListener('load', refreshScroll);

    return () => {
      window.removeEventListener('resize', refreshScroll);
      window.removeEventListener('load', refreshScroll);
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Locomotive Scroll container */}
      <div data-scroll-container className="min-h-screen">
        {/* Home Section */}
        <div data-scroll-section>
          <Home />
        </div>

        {/* Footer Section */}
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
