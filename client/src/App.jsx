import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/layout/Navbar";
import "./App.css";

import Home from "@/pages/home/Home";
import Industries from "@/pages/industries/Industries";
import Services from "@/pages/services/Services";
import ContactServices from "@/pages/contact/ContactService";
import Contact from "@/pages/contact/Contact";
import ReachUs from "@/pages/contact/ReachUs";
import Gmap from "@/pages/contact/Gmap";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Contact />
            </>
          }
        />
        <Route
          path="/industries"
          element={
            <>
              <Industries />
              <Contact />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Services />
              <ContactServices title="Get Ticket"/>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactServices title="CONTACT US"/>
              <ReachUs />
              <Gmap />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
