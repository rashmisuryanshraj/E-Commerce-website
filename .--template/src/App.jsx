import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Product from './components/Product';
import Aos from 'aos';
import "aos/dist/aos.css"
import TopProduct from './components/TopProduct';
import Banners from './components/Banners';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
// import Banner from './components/Banner/Banner';

function App() {
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    Aos.refresh();
  },[]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProduct />  
      {/* <Banner /> */}
      <Banners />
      <Subscribe />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App