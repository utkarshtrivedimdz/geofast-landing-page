import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { About } from "./components/About";
//import { Cta } from "./components/Cta";
//import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
//import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
//import { Services } from "./components/Services";
//import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import PrivacyPolicy from "./components/PrivacyPolicy";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Team />
      <Newsletter />
      <ScrollToTop />
      {/**
      <Sponsors /> 
      <HowItWorks />
      <Services />
      <Cta />
      <FAQ />
      **/}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
