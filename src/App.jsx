import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingSocial from "./components/FloatingSocial";
import ScrollToTop from "./pages/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      <FloatingSocial />
    </>
  );
}
