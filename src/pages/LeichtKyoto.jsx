import UKS_LEICHT_KYOTO_0480105KYOTO003WANGENREGAL from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480105Kyoto003Wangenregal.png';
import UKS_LEICHT_KYOTO_0480104KYOTO001 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480104Kyoto001.jpg';
import UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA01B from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-KYOTOCLASSICFSSYNTHIA01b.jpg';
import UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA05 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-KYOTOCLASSICFSSYNTHIA05.jpg';
import UKS_LEICHT_KYOTO_0890301IDEA003 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0890301Idea003.jpg';
import UKS_LEICHT_KYOTO_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_KYOTO_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_KYOTO_TOPOSCLASSICFS03 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_KYOTO_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_KYOTO_0680102FOTOPRODUKTIONA042COPY from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0680102FotoproduktionA042copy.jpg';
import UKS_LEICHT_KYOTO_0480101KYOTO012NAH from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480101Kyoto012nah.jpg';
import UKS_LEICHT_KYOTO_684269M01167309J22 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-684269M01167309J22.jpg';
import UKS_LEICHT_KYOTO_244753M01350120J20 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-244753M01350120j20.jpg';
import UKS_LEICHT_KYOTO_001BOSSA023OHNEFUCHS3840X2160 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-001Bossa023ohnefuchs3840x2160.jpg';
import UKS_LEICHT_KYOTO_0470101BAHIA026 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0470101BAHIA026.jpg';
import UKS_LEICHT_KYOTO_744293M01352192J22 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-744293M01352192j22.jpg';
import UKS_LEICHT_KYOTO_713269M01103316J19 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-713269M01103316j19.jpg';
import UKS_LEICHT_KYOTO_219213269M01298025312J18 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-219213269M01298025312j18.jpg';
import UKS_LEICHT_KYOTO_753283213M01120335NCSJ22 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-753283213M01120335NCSj22.jpg';
import UKS_LEICHT_KYOTO_739719M01134345J18 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-739719M01134345j18.jpg';
import UKS_LEICHT_KYOTO_0480105KYOTO003 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480105Kyoto003.jpg';
import UKS_LEICHT_KYOTO_04802112KYOTOMOOD001 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-04802112KyotoMood001.jpg';
import UKS_LEICHT_KYOTO_0480102KYOTO002 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480102Kyoto002.jpg';
import UKS_LEICHT_KYOTO_0480106KYOTO002 from '../assets/uks-leicht-kyoto/uks-leicht-kyoto-0480106Kyoto002.jpg';
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'



const hotspots = [
  {
    id: 'downdraft',
    x: '54.8%',
    y: '35.2%',
    title: 'Downdraft shelves',
    desc: 'The open downdraft shelf in HI 319v alpine oak natural complements the design with warm, homely accents while providing practical storage space.',
    img: UKS_LEICHT_KYOTO_0480105KYOTO003WANGENREGAL,
    dir: 'left',
    to: '/wangen-regalsystem',
  },
  {
    id: 'pullout',
    x: '56.2%',
    y: '58.1%',
    title: 'Pullout system',
    desc: 'L3 is the classic pullout frame, with the pullout mechanism integrated in the sides. As an alternative to an L3 interior frame with glass, an M3 interior frame made of metal can be selected.',
    img: UKS_LEICHT_KYOTO_0480104KYOTO001,
    dir: 'right',
  },
]

const swatches = [
  {
    code: 'KYOTO',
    name: '319v alpine oak natural',
    img: UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA01B,
  },
  {
    code: 'CLASSIC-FS',
    name: 'sand grey matte lacquer',
    img: UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA05,
  },
  {
    code: 'SYNTHIA',
    name: 'alpine oak natural',
    img: UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA01B,
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: UKS_LEICHT_KYOTO_0890301IDEA003,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: UKS_LEICHT_KYOTO_0880301FOTOPRODUKTIONRAHMENFRONT032,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: UKS_LEICHT_KYOTO_0900305HYGGEHELLCYAN002,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: UKS_LEICHT_KYOTO_TOPOSCLASSICFS03,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: UKS_LEICHT_KYOTO_0690101FOTOPRODUKTIONK7017OBENHELLER,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: UKS_LEICHT_KYOTO_0680102FOTOPRODUKTIONA042COPY,
    to: '/kitchens/leicht/taj-mahal',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: UKS_LEICHT_KYOTO_0480101KYOTO012NAH,
    to: '/kitchens/leicht/kyoto',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: UKS_LEICHT_KYOTO_684269M01167309J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: UKS_LEICHT_KYOTO_244753M01350120J20,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: UKS_LEICHT_KYOTO_001BOSSA023OHNEFUCHS3840X2160,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: UKS_LEICHT_KYOTO_0470101BAHIA026,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: UKS_LEICHT_KYOTO_744293M01352192J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: UKS_LEICHT_KYOTO_713269M01103316J19,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: UKS_LEICHT_KYOTO_219213269M01298025312J18,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: UKS_LEICHT_KYOTO_753283213M01120335NCSJ22,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: UKS_LEICHT_KYOTO_739719M01134345J18,
    to: '/kitchens/leicht',
  },
]

export default function LeichtKyoto() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.kyoto2-kcard')
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
      className="kyoto2-page"
    >
      {/* ── 1. HERO with Hotspots ───────────────────────────────── */}
      <section className="kyoto2-hero">
        <div className="kyoto2-hero__aspect">
          <img
            src={UKS_LEICHT_KYOTO_0480101KYOTO012NAH}
            alt="LEICHT KYOTO kitchen concept"
            className="kyoto2-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="kyoto2-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="kyoto2-hs__btn" aria-label={spot.title}>
                <span className="kyoto2-hs__ring" />
                <span className="kyoto2-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`kyoto2-hs__tip kyoto2-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="kyoto2-hs__tip-img">
                      <img src={spot.img} alt={spot.title} />
                    </div>
                    <h4>{spot.title}</h4>
                    <p>{spot.desc}</p>
                    {spot.to && (
                      <Link to={spot.to} className="kyoto2-hs__link">
                        Discover →
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="kyoto2-intro">
        <div className="kyoto2-intro__inner container">
          <div className="kyoto2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Kyoto</span>
            </nav>
            <h4 className="kyoto2-intro__prog">KYOTO | CLASSIC-FS | SYNTHIA</h4>
            <p className="kyoto2-intro__body">
              Kyoto Pearl combines Japandi aesthetics and Nordic elegance for a timeless, harmonious kitchen.
            </p>
          </div>
          <div className="kyoto2-intro__imgs">
            <div className="kyoto2-intro__img kyoto2-intro__img--wide">
              <img
                src={UKS_LEICHT_KYOTO_0480105KYOTO003}
                alt="Kyoto kitchen design layout wide"
              />
            </div>
            <div className="kyoto2-intro__img kyoto2-intro__img--tall">
              <img
                src={UKS_LEICHT_KYOTO_04802112KYOTOMOOD001}
                alt="Kyoto kitchen close-up details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MATERIAL SWATCHES ───────────────────────────────── */}
      <section className="kyoto2-colors">
        <div className="container">
          <h2 className="kyoto2-colors__heading">Three premium design materials</h2>
          <div className="kyoto2-colors__grid">
            {swatches.map((c, i) => (
              <motion.div
                key={c.code}
                className="kyoto2-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="kyoto2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="kyoto2-swatch__label">
                  <span className="kyoto2-swatch__code">{c.code}</span>
                  <span className="kyoto2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. JAPANDI DESIGN IN THE KITCHEN ─────────────────────── */}
      <section className="kyoto2-split kyoto2-split--img-right">
        <div className="kyoto2-split__text">
          <span className="kyoto2-split__eyebrow">Strong Character, Harmonious Space Concept</span>
          <h2 className="kyoto2-split__heading">KYOTO – Design in Perfection</h2>
          <p className="kyoto2-split__sub">Aesthetics meet functionality</p>
          <p className="kyoto2-split__body">
            KYOTO combines characteristic frame optics, precise lines, and natural materials into a harmonious grid structure. Minimalist design meets warm wood nuances, creating a balance between elegant restraint and modern comfort – a perfect symbiosis of functionality and sensuality in the living space.
          </p>
        </div>
        <div className="kyoto2-split__img">
          <img
            src={UKS_LEICHT_KYOTO_0480102KYOTO002}
            alt="KYOTO Design in Perfection architectural visual"
          />
        </div>
      </section>

      {/* ── 5. JAPANESE CRAFTSMANSHIP MEETS ELEGANCE ────────────────── */}
      <section className="kyoto2-split kyoto2-split--img-left kyoto2-split--dark">
        <div className="kyoto2-split__img">
          <img
            src={UKS_LEICHT_KYOTO_0480104KYOTO001}
            alt="Japanese Craftsmanship meets elegance details"
          />
        </div>
        <div className="kyoto2-split__text">
          <span className="kyoto2-split__eyebrow">Highest Quality in Every Detail</span>
          <h2 className="kyoto2-split__heading">KYOTO – Japanese Craftsmanship Meets Elegance</h2>
          <p className="kyoto2-split__body">
            KYOTO embodies the aesthetics of Japanese craftsmanship, combining smooth, calming fronts with profile-defining structures. The frame optics create individual furniture that, with its clear forms and simplicity, shapes the environment without being dull. LEICHT uses high-quality materials both inside and outside, creating a consistent, luxurious aesthetic – from kitchen planning to cutlery inserts.
          </p>
        </div>
      </section>

      {/* ── 6. OVERSIZED DOORS ──────────────────────────────────── */}
      <section className="kyoto2-split kyoto2-split--img-right">
        <div className="kyoto2-split__text">
          <span className="kyoto2-split__eyebrow">Flexible door extension for any piece of furniture</span>
          <h2 className="kyoto2-split__heading">Oversized doors for elegant design</h2>
          <p className="kyoto2-split__sub">Customizable to your needs</p>
          <p className="kyoto2-split__body">
            Oversized doors add a unique elegance to furniture, extending to the floor and creating an architectural impact. Our door extension is available for nearly the entire range, offering flexibility to adjust designs to your preferences. The standard gap to the floor is 1.5 cm, remaining consistent regardless of the base height.
          </p>
          <Link to="/contact" className="kyoto2-split__discover">Discover</Link>
        </div>
        <div className="kyoto2-split__img">
          <img
            src={UKS_LEICHT_KYOTO_0480106KYOTO002}
            alt="Oversized doors design extension representation"
          />
        </div>
      </section>

      {/* ── 7. PLANNING PRINCIPLE ───────────────────────────────── */}
      <section className="kyoto2-split kyoto2-split--img-left">
        <div className="kyoto2-split__img">
          <img
            src={UKS_LEICHT_KYOTO_KYOTOCLASSICFSSYNTHIA01B}
            alt="KYOTO Planning Principle layout representation"
          />
        </div>
        <div className="kyoto2-split__text">
          <span className="kyoto2-split__eyebrow">KYOTO PLANNING PRINCIPLE</span>
          <h2 className="kyoto2-split__heading">Experience KYOTO's planning concept</h2>
          <p className="kyoto2-split__body">
            Experience KYOTO's well-thought-out planning concept that purposefully highlights materials and textures. This harmonious blend of design and functionality creates an atmosphere of calm and comfort.
          </p>
          <Link to="/kitchens/leicht/kyoto" className="kyoto2-split__discover">Discover</Link>
        </div>
      </section>

      {/* ── 8. DISCOVER KITCHENS — SLIDER ──────────────────────── */}
      <section className="kyoto2-discover">
        <div className="container">
          <div className="kyoto2-discover__header">
            <div>
              <h2 className="kyoto2-discover__heading">Discover Kitchens</h2>
              <p className="kyoto2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="kyoto2-discover__actions">
              <Link to="/kitchens/leicht" className="kyoto2-discover__all">All Kitchens →</Link>
              <div className="kyoto2-discover__nav">
                <button className="kyoto2-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="kyoto2-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="kyoto2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="kyoto2-kcard">
                <div className="kyoto2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="kyoto2-kcard__info">
                  <h3 className="kyoto2-kcard__title">{slide.title}</h3>
                  <p className="kyoto2-kcard__sub">{slide.sub}</p>
                  <span className="kyoto2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ───────────────────────────────────────────── */
        .kyoto2-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .kyoto2-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .kyoto2-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .kyoto2-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .kyoto2-hs__btn {
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
        .kyoto2-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .kyoto2-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: kyoto-hs-pulse 2.2s ease-out infinite;
        }
        @keyframes kyoto-hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .kyoto2-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .kyoto2-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .kyoto2-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .kyoto2-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .kyoto2-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .kyoto2-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .kyoto2-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .kyoto2-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .kyoto2-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .kyoto2-hs__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: var(--gold);
          text-decoration: none;
          display: inline-block;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .kyoto2-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .kyoto2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .kyoto2-intro__text { padding-bottom: 80px; }
        .kyoto2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .kyoto2-intro__body {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.35;
          color: var(--charcoal);
          font-weight: 400;
        }
        .kyoto2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .kyoto2-intro__img { overflow: hidden; }
        .kyoto2-intro__img--wide  { aspect-ratio: 7/6; }
        .kyoto2-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .kyoto2-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .kyoto2-intro__img:hover img { transform: scale(1.04); }

        /* ── COLORS ──────────────────────────────────────────── */
        .kyoto2-colors {
          background: #fcfbfa;
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .kyoto2-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          color: var(--charcoal);
          margin-bottom: 48px;
          font-weight: 400;
        }
        .kyoto2-colors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .kyoto2-swatch { display: flex; flex-direction: column; gap: 0; }
        .kyoto2-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .kyoto2-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .kyoto2-swatch:hover .kyoto2-swatch__img img { transform: scale(1.05); }
        .kyoto2-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .kyoto2-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .kyoto2-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── UNIFIED SPLIT SECTIONS (Sections 4–7) ────────── */
        .kyoto2-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .kyoto2-split + .kyoto2-split { border-top: none; }
        .kyoto2-split--img-right .kyoto2-split__text { order: 1; }
        .kyoto2-split--img-right .kyoto2-split__img  { order: 2; }
        .kyoto2-split--img-left .kyoto2-split__text  { order: 2; }
        .kyoto2-split--img-left .kyoto2-split__img   { order: 1; }

        .kyoto2-split__text {
          background: #fcfbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px;
        }
        .kyoto2-split--dark .kyoto2-split__text {
          background: #9d948a;
        }
        .kyoto2-split__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .kyoto2-split--dark .kyoto2-split__eyebrow {
          color: rgba(255,255,255,0.65);
        }
        .kyoto2-split__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .kyoto2-split--dark .kyoto2-split__heading {
          color: #fff;
        }
        .kyoto2-split__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gold);
          margin-bottom: 24px;
          letter-spacing: 0.04em;
        }
        .kyoto2-split__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
          margin-bottom: 32px;
        }
        .kyoto2-split--dark .kyoto2-split__body {
          color: rgba(255,255,255,0.82);
        }
        .kyoto2-split__discover {
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
        .kyoto2-split__discover:hover {
          color: #8a6840;
          border-color: #8a6840;
        }
        .kyoto2-split--dark .kyoto2-split__discover {
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.4);
        }
        .kyoto2-split__img {
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .kyoto2-split__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .kyoto2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .kyoto2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .kyoto2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .kyoto2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .kyoto2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .kyoto2-discover__all {
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
        .kyoto2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .kyoto2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .kyoto2-discover__nav-btn {
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
        .kyoto2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .kyoto2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .kyoto2-discover__track::-webkit-scrollbar {
          display: none;
        }
        .kyoto2-kcard {
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
        .kyoto2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .kyoto2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .kyoto2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .kyoto2-kcard:hover .kyoto2-kcard__img img {
          transform: scale(1.06);
        }
        .kyoto2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .kyoto2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .kyoto2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .kyoto2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .kyoto2-kcard:hover .kyoto2-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .kyoto2-hero__aspect { height: 60vh; min-height: 400px; }
          .kyoto2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .kyoto2-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .kyoto2-split { grid-template-columns: 1fr; }
          .kyoto2-split__text { padding: 56px 32px; order: 2 !important; }
          .kyoto2-split__img  { order: 1 !important; min-height: 300px; }
          .kyoto2-split__img img { position: static; width: 100%; height: 100%; min-height: 300px; }
          .kyoto2-discover__heading { font-size: 32px; }
          .kyoto2-discover__track { gap: 20px; }
          .kyoto2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .kyoto2-colors__grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .kyoto2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
