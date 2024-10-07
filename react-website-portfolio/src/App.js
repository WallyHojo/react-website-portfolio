import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import ThemeProvider from './Theme';
//import MovingElement from './MovingTheme';

function App() {

  return (
    <>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ThemeProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;