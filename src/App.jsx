import React from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path="/" element={<Home />}/>
      <Route exact={true} path="/about" element={<About />}/>
      <Route exact={true} path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
