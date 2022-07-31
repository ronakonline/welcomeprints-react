import React from "react";
import ContactHeader from ".././Components/common/ContactHeader";
import Header from ".././Components/common/Header";
import Preloader from ".././Components/common/Preloader";
import Banner from ".././Components/home/Banner";
import About from ".././Components/home/About";
import Service from ".././Components/home/Service";
import Info from ".././Components/home/Info";
import Contact from ".././Components/home/Contact";
import Footer from ".././Components/common/Footer";



export default function Home() {
  return (
    <div id="ttm-home" className="ttm-one-page-site">
      <div className="page">
        <Preloader />
        <Header />
        <Banner />
        <div className="site-main">
          <About />
          <Service />
          <Info />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
