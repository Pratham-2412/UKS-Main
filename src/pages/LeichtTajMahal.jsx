import UKS_LEICHT_TAJ_MAHAL_0680105FOTOPRODUKTIONA042COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680105FotoproduktionA042copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_256 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-256.jpg';
import UKS_LEICHT_TAJ_MAHAL_0890301IDEA003 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0890301Idea003.jpg';
import UKS_LEICHT_TAJ_MAHAL_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_TAJ_MAHAL_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_TAJ_MAHAL_TOPOSCLASSICFS03 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_TAJ_MAHAL_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680102FOTOPRODUKTIONA042COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680102FotoproduktionA042copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_0480101KYOTO012NAH from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0480101Kyoto012nah.jpg';
import UKS_LEICHT_TAJ_MAHAL_684269M01167309J22 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-684269M01167309J22.jpg';
import UKS_LEICHT_TAJ_MAHAL_244753M01350120J20 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-244753M01350120j20.jpg';
import UKS_LEICHT_TAJ_MAHAL_001BOSSA023OHNEFUCHS3840X2160 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-001Bossa023ohnefuchs3840x2160.jpg';
import UKS_LEICHT_TAJ_MAHAL_0470101BAHIA026 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0470101BAHIA026.jpg';
import UKS_LEICHT_TAJ_MAHAL_744293M01352192J22 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-744293M01352192j22.jpg';
import UKS_LEICHT_TAJ_MAHAL_713269M01103316J19 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-713269M01103316j19.jpg';
import UKS_LEICHT_TAJ_MAHAL_219213269M01298025312J18 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-219213269M01298025312j18.jpg';
import UKS_LEICHT_TAJ_MAHAL_753283213M01120335NCSJ22 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-753283213M01120335NCSj22.jpg';
import UKS_LEICHT_TAJ_MAHAL_739719M01134345J18 from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-739719M01134345j18.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680116FOTOPRODUKTIONA002COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680116FotoproduktionA002copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680109FOTOPRODUKTIONA041COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680109FotoproduktionA041copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680110FOTOPRODUKTIONA041COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680110FotoproduktionA041copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680111FOTOPRODUKTIONA002COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680111FotoproduktionA002copy.jpg';
import UKS_LEICHT_TAJ_MAHAL_0680118FOTOPRODUKTIONA044COPY from '../assets/uks-leicht-taj-mahal/uks-leicht-taj-mahal-0680118FotoproduktionA044copy.jpg';
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AdobeStock370402825 from '../assets/AdobeStock370402825.jpg'


const hotspots = [
  {
    id: 'vero',
    x: '7.5%',
    y: '30.2%',
    title: 'VERO glass display cabinets',
    desc: 'Vero glass display cases combine transparency, noble materials, aluminum frames, and lighting into a functional, modern design – perfect for kitchens.',
    img: UKS_LEICHT_TAJ_MAHAL_0680105FOTOPRODUKTIONA042COPY,
    dir: 'right',
  },
  {
    id: 'walnut',
    x: '23.7%',
    y: '49.2%',
    title: 'celano walnut',
    desc: 'A timeless elegance is created by combining a simple and calm décor in naturally reproduced European walnut. With the color 256v celano walnut, we are expanding our color palette in the ORLANDO program with a light color variant.',
    img: UKS_LEICHT_TAJ_MAHAL_256,
    dir: 'right',
  },
]

const swatches = [
  {
    code: 'ORLANDO',
    name: '256v celano walnut (walnut wood decor)',
    img: UKS_LEICHT_TAJ_MAHAL_256,
  },
  {
    code: 'ROCCA',
    name: 'Taj Mahal quartzite (natural stone front)',
    img: UKS_LEICHT_TAJ_MAHAL_0680105FOTOPRODUKTIONA042COPY,
  },
  {
    code: 'ALURO',
    name: 'VERO glass (transparent grey glass in aluminum frame)',
    img: UKS_LEICHT_TAJ_MAHAL_0680105FOTOPRODUKTIONA042COPY,
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: UKS_LEICHT_TAJ_MAHAL_0890301IDEA003,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: UKS_LEICHT_TAJ_MAHAL_0880301FOTOPRODUKTIONRAHMENFRONT032,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: UKS_LEICHT_TAJ_MAHAL_0900305HYGGEHELLCYAN002,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: UKS_LEICHT_TAJ_MAHAL_TOPOSCLASSICFS03,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: UKS_LEICHT_TAJ_MAHAL_0690101FOTOPRODUKTIONK7017OBENHELLER,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: UKS_LEICHT_TAJ_MAHAL_0680102FOTOPRODUKTIONA042COPY,
    to: '/kitchens/leicht/taj-mahal',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: UKS_LEICHT_TAJ_MAHAL_0480101KYOTO012NAH,
    to: '/kitchens/leicht',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: UKS_LEICHT_TAJ_MAHAL_684269M01167309J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: UKS_LEICHT_TAJ_MAHAL_244753M01350120J20,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: UKS_LEICHT_TAJ_MAHAL_001BOSSA023OHNEFUCHS3840X2160,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: UKS_LEICHT_TAJ_MAHAL_0470101BAHIA026,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: UKS_LEICHT_TAJ_MAHAL_744293M01352192J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: UKS_LEICHT_TAJ_MAHAL_713269M01103316J19,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: UKS_LEICHT_TAJ_MAHAL_219213269M01298025312J18,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: UKS_LEICHT_TAJ_MAHAL_753283213M01120335NCSJ22,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: UKS_LEICHT_TAJ_MAHAL_739719M01134345J18,
    to: '/kitchens/leicht',
  },
]

export default function LeichtTajMahal() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.taj2-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="taj-page"
    >
      {/* ── 1. HERO with aspect-ratio hotspot container ───────────── */}
      <section className="taj-hero2">
        <div className="taj-hero2__aspect">
          <img
            src={UKS_LEICHT_TAJ_MAHAL_0680102FOTOPRODUKTIONA042COPY}
            alt="LEICHT TAJ MAHAL kitchen concept"
            className="taj-hero2__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="taj-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="taj-hs__btn" aria-label={spot.title}>
                <span className="taj-hs__ring" />
                <span className="taj-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`taj-hs__tip taj-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="taj-hs__tip-img">
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
      <section className="taj2-intro">
        <div className="taj2-intro__inner container">
          <div className="taj2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Taj Mahal</span>
            </nav>
            <h4 className="taj2-intro__prog">ORLANDO | ROCCA | ALURO</h4>
            <p className="taj2-intro__body">
              Beige tones create timeless elegance and harmonious designs with natural warmth and versatility. This Leicht kitchen concept pairs warm European walnut veneers with the sophisticated cream veining of Taj Mahal quartzite. Together, they establish a calm, inviting architectural balance, perfectly framed by VERO glass cabinets.
            </p>
          </div>
          <div className="taj2-intro__imgs">
            <div className="taj2-intro__img taj2-intro__img--wide">
              <img
                src={UKS_LEICHT_TAJ_MAHAL_0680116FOTOPRODUKTIONA002COPY}
                alt="Taj Mahal kitchen architecture wide"
              />
            </div>
            <div className="taj2-intro__img taj2-intro__img--tall">
              <img
                src={AdobeStock370402825}
                alt="Taj Mahal cabinet detail close-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MATERIAL SWATCHES ───────────────────────────────── */}
      <section className="taj2-colors">
        <div className="container">
          <h2 className="taj2-colors__heading">Three premium design materials</h2>
          <div className="taj2-colors__grid">
            {swatches.map((c, i) => (
              <motion.div
                key={c.code}
                className="taj2-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="taj2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="taj2-swatch__label">
                  <span className="taj2-swatch__code">{c.code}</span>
                  <span className="taj2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SPLIT SCREEN: BEIGE TIMELESS AND MODERN ─────────── */}
      <section className="taj2-arch">
        <div className="taj2-arch__left">
          <div className="taj2-arch__left-inner">
            <span className="taj2-arch__eyebrow">TREND COLOR BEIGE</span>
            <h2 className="taj2-arch__heading">Beige: Timeless and Modern</h2>
            <p className="taj2-arch__body">
              The color beige is making an impressive comeback in modern interior design – especially in kitchen planning. With its natural elegance, versatility, and calm aura, it strongly shapes today’s living atmosphere. Beige kitchens not only exude timeless aesthetics but also create a harmonious environment that invites you to feel at home.
            </p>
          </div>
        </div>
        <div className="taj2-arch__right">
          <img
            src={UKS_LEICHT_TAJ_MAHAL_0680109FOTOPRODUKTIONA041COPY}
            alt="Beige Timeless and Modern kitchen detail"
          />
        </div>
      </section>

      {/* ── 5. SPLIT SCREEN: BEIGE THE PERFECT BALANCE ─────────── */}
      <section className="taj2-material">
        <div className="taj2-material__overlay">
          <div className="taj2-material__card taj2-material__card--img">
            <img
              src={UKS_LEICHT_TAJ_MAHAL_0680110FOTOPRODUKTIONA041COPY}
              alt="Beige The Perfect Balance kitchen detail"
            />
          </div>
          <div className="taj2-material__card taj2-material__card--text">
            <span className="taj2-material__eyebrow">MODERN LIVING</span>
            <h2 className="taj2-material__title">Beige – The Perfect Balance</h2>
            <p className="taj2-material__sub">Timeless Elegance, Natural Harmony</p>
            <p className="taj2-material__body">
              Beige is more than just a color – it’s a style statement. With its versatile shades ranging from cashmere to sand grey, beige creates a calm, inviting atmosphere and adapts flexibly to various design concepts. Whether combined with natural materials like wood and stone or as a subtle contrast to darker accents – beige gives spaces a harmonious balance.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. IMAGE GRID DUO ────────────────────────────────────── */}
      <section className="taj2-grid-duo">
        <div className="container taj2-grid-duo__inner">
          <div className="taj2-grid-duo__img-wrapper">
            <img
              src={UKS_LEICHT_TAJ_MAHAL_0680111FOTOPRODUKTIONA002COPY}
              alt="Taj Mahal planning layout detail left"
            />
          </div>
          <div className="taj2-grid-duo__img-wrapper">
            <img
              src={UKS_LEICHT_TAJ_MAHAL_0680118FOTOPRODUKTIONA044COPY}
              alt="Taj Mahal planning layout detail right"
            />
          </div>
        </div>
      </section>

      {/* ── 7. DISCOVER KITCHENS — SLIDER WITH 3 CARDS PER SCREEN ─ */}
      <section className="taj2-discover">
        <div className="container">
          <div className="taj2-discover__header">
            <div>
              <h2 className="taj2-discover__heading">Discover Kitchens</h2>
              <p className="taj2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="taj2-discover__actions">
              <Link to="/kitchens/leicht" className="taj2-discover__all">All Kitchens →</Link>
              <div className="taj2-discover__nav">
                <button className="taj2-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="taj2-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="taj2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="taj2-kcard">
                <div className="taj2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="taj2-kcard__info">
                  <h3 className="taj2-kcard__title">{slide.title}</h3>
                  <p className="taj2-kcard__sub">{slide.sub}</p>
                  <span className="taj2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO2 ───────────────────────────────────────────── */
        .taj-hero2 {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .taj-hero2__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .taj-hero2__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .taj-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .taj-hs__btn {
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
        .taj-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .taj-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: hs-pulse 2.2s ease-out infinite;
        }
        @keyframes hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .taj-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
          pointer-events: none;
        }
        .taj-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .taj-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .taj-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .taj-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .taj-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .taj-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .taj-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .taj-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 10px;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .taj2-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .taj2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .taj2-intro__text { padding-bottom: 80px; }
        .taj2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .taj2-intro__body {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .taj2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .taj2-intro__img { overflow: hidden; }
        .taj2-intro__img--wide  { aspect-ratio: 7/6; }
        .taj2-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .taj2-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .taj2-intro__img:hover img { transform: scale(1.04); }

        /* ── COLORS ──────────────────────────────────────────── */
        .taj2-colors {
          background: #fcfbfa;
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .taj2-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          color: var(--charcoal);
          margin-bottom: 48px;
          font-weight: 400;
        }
        .taj2-colors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .taj2-swatch { display: flex; flex-direction: column; gap: 0; }
        .taj2-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .taj2-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .taj2-swatch:hover .taj2-swatch__img img { transform: scale(1.05); }
        .taj2-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .taj2-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .taj2-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── ARCHITECTURE ────────────────────────────────────── */
        .taj2-arch {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          min-height: 450px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .taj2-arch__left {
          background-color: #fcfbfa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .taj2-arch__left-inner { max-width: 440px; }
        .taj2-arch__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .taj2-arch__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 32px;
          line-height: 1.15;
        }
        .taj2-arch__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .taj2-arch__right {
          overflow: hidden;
          min-height: 100%;
        }
        .taj2-arch__right img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── MATERIAL ────────────────────────────────────────── */
        .taj2-material {
          position: relative;
          min-height: 450px;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .taj2-material__overlay {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          min-height: 450px;
          align-items: stretch;
        }
        .taj2-material__card { display: flex; flex-direction: column; justify-content: center; }
        .taj2-material__card--text {
          background: #f9f8f6;
          padding: 80px 64px;
        }
        .taj2-material__card--img { overflow: hidden; }
        .taj2-material__card--img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .taj2-material__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 16px;
          display: block;
        }
        .taj2-material__title {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .taj2-material__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gold);
          margin-bottom: 28px;
          letter-spacing: 0.04em;
        }
        .taj2-material__body {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }

        /* ── IMAGE GRID DUO ───────────────────────────────────── */
        .taj2-grid-duo {
          background: #fcfbfa;
          padding: 100px 0;
          border-bottom: 1px solid var(--border);
        }
        .taj2-grid-duo__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .taj2-grid-duo__img-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid var(--border);
        }
        .taj2-grid-duo__img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .taj2-grid-duo__img-wrapper:hover img {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .taj2-grid-duo__inner {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .taj2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .taj2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .taj2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .taj2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .taj2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .taj2-discover__all {
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
        .taj2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .taj2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .taj2-discover__nav-btn {
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
        .taj2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .taj2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .taj2-discover__track::-webkit-scrollbar {
          display: none;
        }
        .taj2-kcard {
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
        .taj2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .taj2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .taj2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .taj2-kcard:hover .taj2-kcard__img img {
          transform: scale(1.06);
        }
        .taj2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .taj2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .taj2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .taj2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .taj2-kcard:hover .taj2-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .taj-hero2__aspect { height: 60vh; min-height: 400px; }
          .taj2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .taj2-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .taj2-arch { grid-template-columns: 1fr; }
          .taj2-arch__left { padding: 60px 32px; }
          .taj2-arch__right { aspect-ratio: unset; min-height: 300px; }
          .taj2-material__overlay { grid-template-columns: 1fr; }
          .taj2-material__card--text { padding: 60px 32px; }
          .taj2-material__card--img { min-height: 260px; }
          .taj2-faq__heading { font-size: 32px; }
          .taj2-discover__heading { font-size: 32px; }
          .taj2-discover__track { gap: 20px; }
          .taj2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .taj2-colors__grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .taj2-acc__title { font-size: 20px; }
          .taj2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
