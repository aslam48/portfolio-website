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



class App extends Component  {
  render(){
    return (
      <>
      <Header />
      <Nav /> 
      <About  />
      <Experience />
      <Portfolio />
      <Testimoinals />
      <Contact />
      <Footer />
      </>
    );
  }
 
}

export default App;
