import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import Newsletter from "./pages/Newsletter.jsx"

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}


