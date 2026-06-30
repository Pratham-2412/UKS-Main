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
import LeichtCurved from './pages/LeichtCurved'
import LeichtTermaRocca from './pages/LeichtTermaRocca'
import LeichtTajMahal from './pages/LeichtTajMahal'
import LeichtKyoto from './pages/LeichtKyoto'
import LeichtContino12 from './pages/LeichtContino12'
import LeichtBossaFenixF45C from './pages/LeichtBossaFenixF45C'
import LeichtBossaKeraMadero from './pages/LeichtBossaKeraMadero'
import LeichtBahia from './pages/LeichtBahia'
import LeichtBossaConcrete from './pages/LeichtBossaConcrete'
import LeichtClassicFsCTopos from './pages/Leichtclassicfsctopos'
import LeichtSteelClassicFsTopos from './pages/Leichtsteelclassicfstopos'
import LeichtFenixF45CValaisClassicFs from './pages/Leichtfenixf45cvalaisclassicfs'
import LeichtFenixF54COrlandoC from './pages/Leichtfenixf54corlandoc'
import KellerModernKitchens from './pages/Kellermodernkitchens'
import KellerBlackMarble from './pages/KellerBlackMarble'
import KellerCityChic from './pages/KellerCityChic'
import KellerMattBlack from './pages/KellerMattBlack'
import KellerModernUrban from './pages/KellerModernUrban'
import KellerNauticalNavy from './pages/KellerNauticalNavy'
import KellerNorthernNature from './pages/KellerNorthernNature'
import KellerPureBasic from './pages/KellerPureBasic'
import KellerVogueVibes from './pages/KellerVogueVibes'
import KellerSuiteLife from './pages/KellerSuiteLife'
import KellerNaturalHarmony from './pages/KellerNaturalHarmony'
import KellerPerfectSense from './pages/KellerPerfectSense'
import KellerClassicKitchens from './pages/KellerClassicKitchens'
import KellerRetroVibes from './pages/KellerRetroVibes'
import KellerNaturalWeave from './pages/KellerNaturalWeave'
import KellerCalmFlow from './pages/KellerCalmFlow'
import KellerTimelessCharm from './pages/KellerTimelessCharm'
import KellerCountryKitchens from './pages/KellerCountryKitchens'
import KellerIndustrialKitchens from './pages/KellerIndustrialKitchens'


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
          <Route path="/kitchens/leicht/curved" element={<LeichtCurved />} />
          <Route path="/kitchens/leicht/terma-rocca" element={<LeichtTermaRocca />} />
          <Route path="/kitchens/leicht/taj-mahal" element={<LeichtTajMahal />} />
          <Route path="/kitchens/leicht/kyoto" element={<LeichtKyoto />} />
          <Route path="/kitchens/leicht/contino-12" element={<LeichtContino12 />} />
          <Route path="/kitchens/leicht/bossa-fenix-f45-c" element={<LeichtBossaFenixF45C />} />
          <Route path="/kitchens/leicht/bossa-kera-madero" element={<LeichtBossaKeraMadero />} />
          <Route path="/kitchens/leicht/bahia" element={<LeichtBahia />} />
          <Route path="/kitchens/leicht/bossa-concrete" element={<LeichtBossaConcrete />} />
          <Route path="/kitchens/leicht/classic-fs-c-topos" element={<LeichtClassicFsCTopos />} />
          <Route path="/kitchens/leicht/steel-classic-fs-topos" element={<LeichtSteelClassicFsTopos />} />
          <Route path="/kitchens/leicht/fenix-f45-c-valais-classic-fs" element={<LeichtFenixF45CValaisClassicFs />} />
          <Route path="/kitchens/leicht/fenix-f54-c-orlando-c" element={<LeichtFenixF54COrlandoC />} />
          <Route path="/kitchens/keller" element={<Keller />} />
          <Route path="/kitchens/keller/modern-kitchens" element={<KellerModernKitchens />} />
          <Route path="/kitchens/keller/classic-kitchens" element={<KellerClassicKitchens />} />
          <Route path="/kitchens/keller/classic-kitchens/retro-vibes" element={<KellerRetroVibes />} />
          <Route path="/kitchens/keller/classic-kitchens/natural-weave" element={<KellerNaturalWeave />} />
          <Route path="/kitchens/keller/classic-kitchens/calm-flow" element={<KellerCalmFlow />} />
          <Route path="/kitchens/keller/classic-kitchens/timeless-charm" element={<KellerTimelessCharm />} />
          <Route path="/kitchens/keller/country-kitchens" element={<KellerCountryKitchens />} />
          <Route path="/kitchens/keller/industrial-kitchens" element={<KellerIndustrialKitchens />} />
          <Route path="/kitchens/keller/modern-kitchens/suite-life" element={<KellerSuiteLife />} />
          <Route path="/kitchens/keller/modern-kitchens/natural-harmony" element={<KellerNaturalHarmony />} />
          <Route path="/kitchens/keller/modern-kitchens/perfect-sense" element={<KellerPerfectSense />} />
          <Route path="/kitchens/keller/modern-kitchens/black-marble" element={<KellerBlackMarble />} />
          <Route path="/kitchens/keller/modern-kitchens/city-chic" element={<KellerCityChic />} />
          <Route path="/kitchens/keller/modern-kitchens/matt-black" element={<KellerMattBlack />} />
          <Route path="/kitchens/keller/modern-kitchens/modern-urban" element={<KellerModernUrban />} />
          <Route path="/kitchens/keller/modern-kitchens/nautical-navy" element={<KellerNauticalNavy />} />
          <Route path="/kitchens/keller/modern-kitchens/northern-nature" element={<KellerNorthernNature />} />
          <Route path="/kitchens/keller/modern-kitchens/pure-basic" element={<KellerPureBasic />} />
          <Route path="/kitchens/keller/modern-kitchens/vogue-vibes" element={<KellerVogueVibes />} />
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
