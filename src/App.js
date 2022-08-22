import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Nav from "./component/Nav/Nav"
import About from './component/about/About';
import Experience from "./component/Expeirence/Experience"
import Portfolio from "./component/Portfolio/Portfolio"
import Testimoinals from "./component/Testimonials/Testimonials"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Service from './component/Service/Service';



class App extends Component  {
  render(){
    return (
      <>
      <Header />
      <Nav /> 
      <About  />
      <Experience />
      <Service />
      <Contact />
      <Portfolio />
      <Testimoinals />
      <Footer />
      </>
    );
  }
 
}

export default App;
