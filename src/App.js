import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import ThemeProvider from './Theme';
//import MovingElement from './MovingTheme';

function App() {

  return (
    <>
      <HashRouter>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ThemeProvider>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;