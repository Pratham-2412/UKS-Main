import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Kitchens from './pages/Kitchens'
import Bedrooms from './pages/Bedrooms'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Leicht from './pages/Leicht'
import Keller from './pages/Keller'
import Novacucina from './pages/Novacucina'
import LeichtIdea from './pages/LeichtIdea'
import LeichtWakuu from './pages/LeichtWakuu'
import LeichtHygge from './pages/LeichtHygge'


function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/kitchens/leicht" element={<Leicht />} />
          <Route path="/kitchens/leicht/idea" element={<LeichtIdea />} />
          <Route path="/kitchens/leicht/wakuu" element={<LeichtWakuu />} />
          <Route path="/kitchens/leicht/hygge" element={<LeichtHygge />} />
          <Route path="/kitchens/keller" element={<Keller />} />
          <Route path="/kitchens/novacucina" element={<Novacucina />} />
          <Route path="/bedrooms" element={<Bedrooms />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
