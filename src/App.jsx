import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Main Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Service Pages
import PersonalLoan from "./components/Services/PersonalLoan.jsx";
import BusinessLoan from "./components/Services/BusinessLoan.jsx";
import Investment from "./components/Services/Investment.jsx";
import Savings from "./components/Services/Savings.jsx";
import FinancialAdvice from "./components/Services/FinancialAdvice.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f1f2f6]">

        <Header />

        <main className="flex-1 w-full bg-[#f1f2f6]">
          <Routes>

            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services Routes */}
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/financial-advice" element={<FinancialAdvice />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}
