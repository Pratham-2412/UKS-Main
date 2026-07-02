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
import NovamobiliWardrobes from './pages/NovamobiliWardrobes'
import NovamobiliHingedWardrobes from './pages/NovamobiliHingedWardrobes'
import NovamobiliSlidingWardrobes from './pages/NovamobiliSlidingWardrobes'
import NovamobiliFlushWardrobes from './pages/NovamobiliFlushWardrobes'
import NovamobiliAccessoriesWardrobes from './pages/NovamobiliAccessoriesWardrobes'
import NovamobiliWalkInWardrobes from './pages/NovamobiliWalkInWardrobes'
import NovacucinaSistema221 from './pages/NovacucinaSistema221'
import NovacucinaSistema222 from './pages/NovacucinaSistema222'
import NovacucinaSistema223 from './pages/NovacucinaSistema223'
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
import KellerBlissBoutique from './pages/KellerBlissBoutique'
import KellerGlamChic from './pages/KellerGlamChic'
import KellerMajesticMansion from './pages/KellerMajesticMansion'
import KellerMarblingMoods from './pages/KellerMarblingMoods'
import KellerOceanBreeze from './pages/KellerOceanBreeze'
import KellerOrientalEssence from './pages/KellerOrientalEssence'
import KellerRawNature from './pages/KellerRawNature'
import KellerTuscanVilla from './pages/KellerTuscanVilla'
import KellerCountryKitchens from './pages/KellerCountryKitchens'
import KellerCottageLife from './pages/KellerCottageLife'
import KellerSilentRiver from './pages/KellerSilentRiver'
import KellerZenLife from './pages/KellerZenLife'
import KellerBlackCottage from './pages/KellerBlackCottage'
import KellerMistyGrey from './pages/KellerMistyGrey'
import KellerModernFarmhouse from './pages/KellerModernFarmhouse'
import KellerNaturalBasic from './pages/KellerNaturalBasic'
import KellerNewCountry from './pages/KellerNewCountry'
import KellerSmokeyWood from './pages/KellerSmokeyWood'
import KellerBoldElegance from './pages/KellerBoldElegance'
import KellerUrbanNude from './pages/KellerUrbanNude'
import KellerBlackMetal from './pages/KellerBlackMetal'
import KellerBrooklynBrick from './pages/KellerBrooklynBrick'
import KellerConcreteJungle from './pages/KellerConcreteJungle'
import KellerDarkRituals from './pages/KellerDarkRituals'
import KellerNaturesChoice from './pages/KellerNaturesChoice'
import KellerRockSolid from './pages/KellerRockSolid'
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
          <Route path="/kitchens/keller/classic-kitchens/bliss-boutique" element={<KellerBlissBoutique />} />
          <Route path="/kitchens/keller/classic-kitchens/glam-chic" element={<KellerGlamChic />} />
          <Route path="/kitchens/keller/classic-kitchens/majestic-mansion" element={<KellerMajesticMansion />} />
          <Route path="/kitchens/keller/classic-kitchens/marbling-moods" element={<KellerMarblingMoods />} />
          <Route path="/kitchens/keller/classic-kitchens/ocean-breeze" element={<KellerOceanBreeze />} />
          <Route path="/kitchens/keller/classic-kitchens/oriental-essence" element={<KellerOrientalEssence />} />
          <Route path="/kitchens/keller/classic-kitchens/raw-nature" element={<KellerRawNature />} />
          <Route path="/kitchens/keller/classic-kitchens/tuscan-villa" element={<KellerTuscanVilla />} />
          <Route path="/kitchens/keller/country-kitchens" element={<KellerCountryKitchens />} />
          <Route path="/kitchens/keller/country-kitchens/cottage-life" element={<KellerCottageLife />} />
          <Route path="/kitchens/keller/country-kitchens/silent-river" element={<KellerSilentRiver />} />
          <Route path="/kitchens/keller/country-kitchens/zen-life" element={<KellerZenLife />} />
          <Route path="/kitchens/keller/country-kitchens/black-cottage" element={<KellerBlackCottage />} />
          <Route path="/kitchens/keller/country-kitchens/misty-grey" element={<KellerMistyGrey />} />
          <Route path="/kitchens/keller/country-kitchens/modern-farmhouse" element={<KellerModernFarmhouse />} />
          <Route path="/kitchens/keller/country-kitchens/natural-basic" element={<KellerNaturalBasic />} />
          <Route path="/kitchens/keller/country-kitchens/new-country" element={<KellerNewCountry />} />
          <Route path="/kitchens/keller/country-kitchens/smokey-wood" element={<KellerSmokeyWood />} />
          <Route path="/kitchens/keller/industrial-kitchens" element={<KellerIndustrialKitchens />} />
          <Route path="/kitchens/keller/industrial-kitchens/bold-elegance" element={<KellerBoldElegance />} />
          <Route path="/kitchens/keller/industrial-kitchens/urban-nude" element={<KellerUrbanNude />} />
          <Route path="/kitchens/keller/industrial-kitchens/black-metal" element={<KellerBlackMetal />} />
          <Route path="/kitchens/keller/industrial-kitchens/brooklyn-brick" element={<KellerBrooklynBrick />} />
          <Route path="/kitchens/keller/industrial-kitchens/concrete-jungle" element={<KellerConcreteJungle />} />
          <Route path="/kitchens/keller/industrial-kitchens/dark-rituals" element={<KellerDarkRituals />} />
          <Route path="/kitchens/keller/industrial-kitchens/natures-choice" element={<KellerNaturesChoice />} />
          <Route path="/kitchens/keller/industrial-kitchens/rock-solid" element={<KellerRockSolid />} />
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
          <Route path="/kitchens/novacucina/sistema-2-2-1" element={<NovacucinaSistema221 />} />
          <Route path="/kitchens/novacucina/sistema-2-2-2" element={<NovacucinaSistema222 />} />
          <Route path="/kitchens/novacucina/sistema-2-2-3" element={<NovacucinaSistema223 />} />
          <Route path="/bedrooms" element={<Bedrooms />} />
          <Route path="/bedrooms/wardrobes" element={<NovamobiliWardrobes />} />
          <Route path="/bedrooms/wardrobes/hinged-doors" element={<NovamobiliHingedWardrobes />} />
          <Route path="/bedrooms/wardrobes/sliding-doors" element={<NovamobiliSlidingWardrobes />} />
          <Route path="/bedrooms/wardrobes/flush-sliding" element={<NovamobiliFlushWardrobes />} />
          <Route path="/bedrooms/wardrobes/accessories" element={<NovamobiliAccessoriesWardrobes />} />
          <Route path="/bedrooms/wardrobes/walk-in" element={<NovamobiliWalkInWardrobes />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
