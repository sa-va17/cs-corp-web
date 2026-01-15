import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import EligibilityPage from "./pages/Eligibility";
import Governance from "./pages/Governance";
import Team from "./pages/Team";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ipo-process" element={<Process />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/team" element={<Team />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
