import UKS_LEICHT_BAHIA_LEICHTMOOD0054002 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0054002.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0108 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0108.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0177 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0177.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0098 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0098.jpg';
import UKS_LEICHT_BAHIA_DESIGNOHNETITEL from '../assets/uks-leicht-bahia/uks-leicht-bahia-DesignohneTitel.png';
import UKS_LEICHT_BAHIA_LEICHTMOOD0115 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0115.jpg';
import UKS_LEICHT_BAHIA_0470102BAHIA012 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0470102BAHIA012.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0285 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0285.jpg';
import UKS_LEICHT_BAHIA_0470104BAHIA004 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0470104BAHIA004.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0257 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0257.jpg';
import UKS_LEICHT_BAHIA_0470105BAHIA002 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0470105BAHIA002.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0167 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0167.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0241 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0241.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0384 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0384.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0234 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0234.jpg';
import UKS_LEICHT_BAHIA_0890301IDEA003 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0890301Idea003.jpg';
import UKS_LEICHT_BAHIA_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_BAHIA_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_BAHIA_TOPOSCLASSICFS03 from '../assets/uks-leicht-bahia/uks-leicht-bahia-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_BAHIA_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht-bahia/uks-leicht-bahia-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_BAHIA_0680102FOTOPRODUKTIONA042COPY from '../assets/uks-leicht-bahia/uks-leicht-bahia-0680102FotoproduktionA042copy.jpg';
import UKS_LEICHT_BAHIA_0480101KYOTO012NAH from '../assets/uks-leicht-bahia/uks-leicht-bahia-0480101Kyoto012nah.jpg';
import UKS_LEICHT_BAHIA_684269M01167309J22 from '../assets/uks-leicht-bahia/uks-leicht-bahia-684269M01167309J22.jpg';
import UKS_LEICHT_BAHIA_244753M01350120J20 from '../assets/uks-leicht-bahia/uks-leicht-bahia-244753M01350120j20.jpg';
import UKS_LEICHT_BAHIA_001BOSSA023OHNEFUCHS3840X2160 from '../assets/uks-leicht-bahia/uks-leicht-bahia-001Bossa023ohnefuchs3840x2160.jpg';
import UKS_LEICHT_BAHIA_0470101BAHIA026 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0470101BAHIA026.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0260 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0260.jpg';
import UKS_LEICHT_BAHIA_0470107BAHIA005 from '../assets/uks-leicht-bahia/uks-leicht-bahia-0470107BAHIA005.jpg';
import UKS_LEICHT_BAHIA_LEICHTMOOD0136 from '../assets/uks-leicht-bahia/uks-leicht-bahia-LeichtMood0136.jpg';
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'


const hotspots = [
  {
    id: 'tense_structures',
    x: '79.0%',
    y: '67.5%',
    title: 'Tense structures',
    desc: 'The M8 pull-out system emphasizes the elegance of the ribbed structure of the BAHIA front and carries the design principle through to the very core of the furniture.',
    img: UKS_LEICHT_BAHIA_LEICHTMOOD0108,
    dir: 'left'
  },
  {
    id: 'continuous_front',
    x: '13.5%',
    y: '67.2%',
    title: 'Continuous front design',
    desc: 'The dark vertical millings and the vertical joints blend harmoniously, making the individual cabinets appear as a single piece of furniture.',
    img: UKS_LEICHT_BAHIA_LEICHTMOOD0177,
    dir: 'right'
  },
  {
    id: 'striking_front',
    x: '40.6%',
    y: '76.3%',
    title: 'Striking front design',
    desc: 'The contrast of the dark vertical grooves combined with the equally black edge design gives the BAHIA product a confident and timeless appearance.',
    img: UKS_LEICHT_BAHIA_LEICHTMOOD0098,
    dir: 'left'
  },
  {
    id: 'passage_door',
    x: '52.3%',
    y: '52.3%',
    title: 'Passage door',
    desc: 'Passage doors in kitchens create smooth transitions, enhance functionality, and ensure spatial harmony.',
    img: UKS_LEICHT_BAHIA_DESIGNOHNETITEL,
    dir: 'right'
  },
  {
    id: 'rocca_surface',
    x: '27.4%',
    y: '63.3%',
    title: 'ROCCA Surface',
    desc: 'ROCCA, a natural stone program with a subtly elegant effect. The front edges are clad with fine natural stone and beveled along the miter joint from front to edge. A detail that reflects the high quality of the surface.',
    img: UKS_LEICHT_BAHIA_LEICHTMOOD0115,
    dir: 'right'
  }
]

const galleryImages = [
  UKS_LEICHT_BAHIA_0470102BAHIA012,
  UKS_LEICHT_BAHIA_LEICHTMOOD0285,
  UKS_LEICHT_BAHIA_0470104BAHIA004,
  UKS_LEICHT_BAHIA_LEICHTMOOD0257,
  UKS_LEICHT_BAHIA_0470105BAHIA002,
  UKS_LEICHT_BAHIA_LEICHTMOOD0115,
  UKS_LEICHT_BAHIA_LEICHTMOOD0167,
  UKS_LEICHT_BAHIA_LEICHTMOOD0241,
  UKS_LEICHT_BAHIA_LEICHTMOOD0384,
  UKS_LEICHT_BAHIA_LEICHTMOOD0234
]

const sliderSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: UKS_LEICHT_BAHIA_0890301IDEA003,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: UKS_LEICHT_BAHIA_0880301FOTOPRODUKTIONRAHMENFRONT032,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: UKS_LEICHT_BAHIA_0900305HYGGEHELLCYAN002,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: UKS_LEICHT_BAHIA_TOPOSCLASSICFS03,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: UKS_LEICHT_BAHIA_0690101FOTOPRODUKTIONK7017OBENHELLER,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: UKS_LEICHT_BAHIA_0680102FOTOPRODUKTIONA042COPY,
    to: '/kitchens/leicht/taj-mahal',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: UKS_LEICHT_BAHIA_0480101KYOTO012NAH,
    to: '/kitchens/leicht/kyoto',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: UKS_LEICHT_BAHIA_684269M01167309J22,
    to: '/kitchens/leicht/contino-12',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: UKS_LEICHT_BAHIA_244753M01350120J20,
    to: '/kitchens/leicht/bossa-fenix-f45-c',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: UKS_LEICHT_BAHIA_001BOSSA023OHNEFUCHS3840X2160,
    to: '/kitchens/leicht/bossa-kera-madero',
  }
]

export default function LeichtBahia() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [activeLookTab, setActiveLookTab] = useState(1)
  const sliderRef = useRef(null)
  const galleryRef = useRef(null)

  const scrollSlider = (ref, direction, cardSelector) => {
    if (ref.current) {
      const card = ref.current.querySelector(cardSelector)
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 24
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bahia-page"
    >
      {/* ── 1. HERO with Hotspots ───────────────────────────────── */}
      <section className="bahia-hero">
        <div className="bahia-hero__aspect">
          <img
            src={UKS_LEICHT_BAHIA_0470101BAHIA026}
            alt="LEICHT BAHIA award winning kitchen front clone"
            className="bahia-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="bahia-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="bahia-hs__btn" aria-label={spot.title}>
                <span className="bahia-hs__ring" />
                <span className="bahia-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`bahia-hs__tip bahia-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="bahia-hs__tip-img">
                      <img src={spot.img} alt={spot.title} />
                    </div>
                    <h4>{spot.title}</h4>
                    <p>{spot.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="bahia-intro">
        <div className="bahia-intro__inner container">
          <div className="bahia-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Bahia</span>
            </nav>
            <h4 className="bahia-intro__prog">BAHIA</h4>
            <p className="bahia-intro__body">
              BAHIA combines asymmetric cuts and symmetrical structures for a tension-filled surface.
            </p>
          </div>
          <div className="bahia-intro__imgs">
            <div className="bahia-intro__img bahia-intro__img--wide">
              <img
                src={UKS_LEICHT_BAHIA_LEICHTMOOD0177}
                alt="Bahia asymmetric vertical groove structures detail"
              />
            </div>
            <div className="bahia-intro__img bahia-intro__img--tall">
              <img
                src={UKS_LEICHT_BAHIA_LEICHTMOOD0260}
                alt="Minimalist design interior decor details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE NEW LOOK AND FEEL (Split Layout - Image Left) ── */}
      <section className="bahia-split bahia-split--img-left">
        <div className="bahia-split__text">
          <span className="bahia-split__eyebrow">BAHIA</span>
          <h2 className="bahia-split__heading">THE NEW LOOK AND FEEL</h2>
          <p className="bahia-split__body">
            The novelty consists of a veneer front, which achieves a dynamic surface through a vertical groove structure. The design draws on the successful surface program BOSSA but differs in one key design principle: In addition to the contrast between raised surfaces and cutouts, the uniqueness lies in the combination of two apparent opposites: Within a single front, the individual cutouts are positioned asymmetrically to one another, but when several fronts are aligned, a uniform pattern of compartments emerges.
          </p>
          <p className="bahia-split__body">
            The individual cabinets visually merge into a single piece of furniture. This special feature is created by keeping the visible vertical grooves dark and executing them in the width of the classic vertical joint. This makes the grooves appear visually like a joint, or the joint appears like a groove – a perfect camouflage.
          </p>
          
          <div className="bahia-tabs">
            <button
              onClick={() => setActiveLookTab(1)}
              className={`bahia-tabs__btn ${activeLookTab === 1 ? 'bahia-tabs__btn--active' : ''}`}
            >
              01
            </button>
            <button
              onClick={() => setActiveLookTab(2)}
              className={`bahia-tabs__btn ${activeLookTab === 2 ? 'bahia-tabs__btn--active' : ''}`}
            >
              02
            </button>
            <button
              onClick={() => setActiveLookTab(3)}
              className={`bahia-tabs__btn ${activeLookTab === 3 ? 'bahia-tabs__btn--active' : ''}`}
            >
              03
            </button>
          </div>
        </div>
        <div className="bahia-split__img">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeLookTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={
                activeLookTab === 1
                  ? UKS_LEICHT_BAHIA_0470104BAHIA004
                  : activeLookTab === 2
                  ? `https://assets.caisy.io/assets/reupload/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/85a145be-a184-4bcf-9c8c-9ad37dd23d58/LeichtMood0177.jpeg?width=900`
                  : UKS_LEICHT_BAHIA_0470107BAHIA005
              }
              alt="Bahia look and feel real wood vertical milled details"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* ── 4. NATURAL VITALITY PARALLAX BANNER ────────────────── */}
      <section className="bahia-parallax-banner">
        <img
          src={UKS_LEICHT_BAHIA_LEICHTMOOD0054002}
          alt="Bahia Natural Vitality vertical grain structure"
          className="bahia-parallax-banner__img"
        />
        <div className="bahia-parallax-banner__overlay">
          <div className="container">
            <h2 className="bahia-parallax-banner__heading">NATURAL VITALITY</h2>
          </div>
        </div>
      </section>

      {/* ── 5. NATURAL VITALITY SPLIT (Image Right) ──────────────── */}
      <section className="bahia-split bahia-split--img-right">
        <div className="bahia-split__text">
          <span className="bahia-split__eyebrow">BAHIA</span>
          <h2 className="bahia-split__heading">NATURAL VITALITY</h2>
          <p className="bahia-split__body">
            The contrast of the dark vertical grooves combined with the equally black edge details gives the BAHIA product a confident and timeless appearance. BAHIA is an expression of naturalness, vitality, atmosphere, and value. In line with this, the veneer finishes were chosen in dark and impactful surfaces: available options include elm, ash, and walnut.
          </p>
          <Link to="/contact" className="bahia-split__discover">Discover</Link>
        </div>
        <div className="bahia-split__img">
          <img
            src={UKS_LEICHT_BAHIA_LEICHTMOOD0136}
            alt="Bahia natural vitality real wood veneer details"
          />
        </div>
      </section>

      {/* ── 6. PIONEERING INTERIOR DESIGN (Gallery Slider) ───────── */}
      <section className="bahia-gallery-section">
        <div className="container">
          <div className="bahia-gallery__header">
            <div>
              <span className="bahia-gallery__eyebrow">ICONIC-SYSTEM</span>
              <h2 className="bahia-gallery__heading">PIONEERING INTERIOR DESIGN</h2>
              <p className="bahia-gallery__body">
                The open ICONIC shelving system embodies the symbiosis of visionary planning concepts, functionality, and homely aesthetics. This system allows for numerous shelving configurations to create an elegant overall look in open living spaces.
              </p>
            </div>
            <div className="bahia-gallery__nav">
              <button className="bahia-gallery__nav-btn" onClick={() => scrollSlider(galleryRef, 'left', '.bahia-gallery-card')} aria-label="Previous slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="bahia-gallery__nav-btn" onClick={() => scrollSlider(galleryRef, 'right', '.bahia-gallery-card')} aria-label="Next slide">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="bahia-gallery__track" ref={galleryRef}>
            {galleryImages.map((img, i) => (
              <div key={i} className="bahia-gallery-card">
                <img src={img} alt={`Bahia iconic catalog detail render ${i+1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DISCOVER KITCHENS — SLIDER ──────────────────────── */}
      <section className="bahia-discover">
        <div className="container">
          <div className="bahia-discover__header">
            <div>
              <h2 className="bahia-discover__heading">Discover Kitchens</h2>
              <p className="bahia-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="bahia-discover__actions">
              <Link to="/kitchens/leicht" className="bahia-discover__all">All Kitchens →</Link>
              <div className="bahia-discover__nav">
                <button className="bahia-discover__nav-btn" onClick={() => scrollSlider(sliderRef, 'left', '.bahia-kcard')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="bahia-discover__nav-btn" onClick={() => scrollSlider(sliderRef, 'right', '.bahia-kcard')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bahia-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="bahia-kcard">
                <div className="bahia-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="bahia-kcard__info">
                  <h3 className="bahia-kcard__title">{slide.title}</h3>
                  <p className="bahia-kcard__sub">{slide.sub}</p>
                  <span className="bahia-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ───────────────────────────────────────────── */
        .bahia-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .bahia-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .bahia-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .bahia-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .bahia-hs__btn {
          width: 34px;
          height: 34px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bahia-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .bahia-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: bahia-hs-pulse 2.2s ease-out infinite;
        }
        @keyframes bahia-hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .bahia-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .bahia-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .bahia-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .bahia-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .bahia-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .bahia-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .bahia-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .bahia-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .bahia-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 0;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .bahia-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .bahia-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .bahia-intro__text { padding-bottom: 80px; }
        .bahia-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .bahia-intro__body {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.35;
          color: var(--charcoal);
          font-weight: 400;
        }
        .bahia-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .bahia-intro__img { overflow: hidden; }
        .bahia-intro__img--wide  { aspect-ratio: 7/6; }
        .bahia-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .bahia-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .bahia-intro__img:hover img { transform: scale(1.04); }

        /* ── SPLIT SECTIONS ────────────────── */
        .bahia-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .bahia-split + .bahia-split { border-top: none; }
        .bahia-split--img-right .bahia-split__text { order: 1; }
        .bahia-split--img-right .bahia-split__img  { order: 2; }
        .bahia-split--img-left .bahia-split__text  { order: 2; }
        .bahia-split--img-left .bahia-split__img   { order: 1; }

        .bahia-split__text {
          background: #fcfbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px;
        }
        .bahia-split__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .bahia-split__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .bahia-split__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
          margin-bottom: 32px;
        }
        .bahia-split__discover {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          display: inline-block;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 3px;
          transition: color 0.2s ease, border-color 0.2s ease;
          width: fit-content;
        }
        .bahia-split__discover:hover {
          color: #8a6840;
          border-color: #8a6840;
        }
        .bahia-split__img {
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .bahia-split__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        /* ── DETAIL TABS ────────────────────────────────── */
        .bahia-tabs {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        .bahia-tabs__btn {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid var(--border);
          padding: 8px 16px;
          cursor: pointer;
          color: var(--charcoal-soft);
          transition: all 0.25s ease;
        }
        .bahia-tabs__btn:hover {
          color: var(--gold);
          border-color: var(--gold-light);
        }
        .bahia-tabs__btn--active {
          background: var(--gold);
          color: #fff;
          border-color: var(--gold);
        }

        /* ── PARALLAX BANNER ─────────────────────────────────── */
        .bahia-parallax-banner {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          background: #000;
        }
        .bahia-parallax-banner__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.8;
        }
        .bahia-parallax-banner__overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.15);
        }
        .bahia-parallax-banner__heading {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
          color: #fff;
          letter-spacing: 0.05em;
          text-align: center;
          margin: 0;
        }

        /* ── GALLERY SECTION ─────────────────────────────────── */
        .bahia-gallery-section {
          background: var(--white);
          padding: 100px 0;
          border-top: 1px solid var(--border);
          overflow: hidden;
        }
        .bahia-gallery__header {
          display: grid;
          grid-template-columns: 8fr 4fr;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 56px;
        }
        .bahia-gallery__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .bahia-gallery__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 24px;
        }
        .bahia-gallery__body {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: var(--charcoal-soft);
          max-width: 580px;
          margin: 0;
        }
        .bahia-gallery__nav {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        .bahia-gallery__nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .bahia-gallery__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .bahia-gallery__track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 20px;
        }
        .bahia-gallery__track::-webkit-scrollbar {
          display: none;
        }
        .bahia-gallery-card {
          flex: 0 0 calc((100% - 48px) / 3);
          scroll-snap-align: start;
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .bahia-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .bahia-gallery-card:hover img {
          transform: scale(1.04);
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .bahia-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
          border-top: 1px solid var(--border);
        }
        .bahia-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .bahia-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .bahia-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .bahia-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .bahia-discover__all {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid var(--gold);
          padding: 10px 24px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .bahia-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .bahia-discover__nav {
          display: flex;
          gap: 12px;
        }
        .bahia-discover__nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .bahia-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .bahia-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .bahia-discover__track::-webkit-scrollbar {
          display: none;
        }
        .bahia-kcard {
          flex: 0 0 calc((100% - 56px) / 3);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .bahia-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .bahia-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .bahia-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .bahia-kcard:hover .bahia-kcard__img img {
          transform: scale(1.06);
        }
        .bahia-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .bahia-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .bahia-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .bahia-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .bahia-kcard:hover .bahia-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .bahia-hero__aspect { height: 60vh; min-height: 400px; }
          .bahia-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .bahia-split { grid-template-columns: 1fr; }
          .bahia-split__text { padding: 56px 32px; order: 2 !important; }
          .bahia-split__img  { order: 1 !important; min-height: 300px; }
          .bahia-split__img img { position: static; width: 100%; height: 100%; min-height: 300px; }
          .bahia-parallax-banner { height: 350px; }
          .bahia-parallax-banner__heading { font-size: 32px; }
          .bahia-gallery__header { grid-template-columns: 1fr; gap: 20px; }
          .bahia-gallery__nav { justify-content: flex-start; }
          .bahia-gallery-card { flex: 0 0 calc((100% - 24px) / 2); }
          .bahia-discover__heading { font-size: 32px; }
          .bahia-discover__track { gap: 20px; }
          .bahia-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .bahia-gallery-card { flex: 0 0 100%; }
          .bahia-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
