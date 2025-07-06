import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobOpportunities from './components/JobOpportunities';
import Benefits from './components/Benefits';
import ApplicationProcess from './components/ApplicationProcess';
import Testimonials from './components/Testimonials';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <JobOpportunities />
            <Benefits />
            <ApplicationProcess />
            <Testimonials />
            <FloatingCTA />
          </>
        } />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;