import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AdobeStock370402825 from '../assets/AdobeStock370402825.jpg'

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'vero',
    x: '7.5%',
    y: '30.2%',
    title: 'VERO glass display cabinets',
    desc: 'Vero glass display cases combine transparency, noble materials, aluminum frames, and lighting into a functional, modern design – perfect for kitchens.',
    img: `${CAISY}/36c64c4f-331e-4a88-9884-1a6f9f24538a/96176346-1ac9-4e3f-b7a1-a6afd0838f42/0680105FotoproduktionA042copy.jpg?width=400`,
    dir: 'right',
  },
  {
    id: 'walnut',
    x: '23.7%',
    y: '49.2%',
    title: 'celano walnut',
    desc: 'A timeless elegance is created by combining a simple and calm décor in naturally reproduced European walnut. With the color 256v celano walnut, we are expanding our color palette in the ORLANDO program with a light color variant.',
    img: `${CAISY}/ba113752-12aa-4983-b985-5c90eed77c2d/7804a134-ca5c-4a44-89af-3c4ca6394386/256.jpg?width=400`,
    dir: 'right',
  },
]

const swatches = [
  {
    code: 'ORLANDO',
    name: '256v celano walnut (walnut wood decor)',
    img: `${CAISY}/ba113752-12aa-4983-b985-5c90eed77c2d/7804a134-ca5c-4a44-89af-3c4ca6394386/256.jpg?width=400`,
  },
  {
    code: 'ROCCA',
    name: 'Taj Mahal quartzite (natural stone front)',
    img: `${CAISY}/5c2a6e3d-2574-44d7-965d-2326cc0cd780/2df5b722-5ce0-4644-8e22-e51cee5b5ce3/0680105FotoproduktionA042copy.jpg?width=400`,
  },
  {
    code: 'ALURO',
    name: 'VERO glass (transparent grey glass in aluminum frame)',
    img: `${CAISY}/36c64c4f-331e-4a88-9884-1a6f9f24538a/96176346-1ac9-4e3f-b7a1-a6afd0838f42/0680105FotoproduktionA042copy.jpg?width=400`,
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: `${CAISY}/3afd8ad1-729b-4951-ba32-b216ba6fc45f/72b71e1f-2932-48f8-ae65-0f9c666625f7/0890301Idea003.jpg?width=1200`,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: `${CAISY}/0d9259d8-749a-42df-b235-3967aa116571/9f03937b-8d76-4c08-80b9-b49775a0a0eb/0880301FotoproduktionRahmenfront032.jpg?width=1200`,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: `${CAISY}/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1200`,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: `${CAISY}/fd359af4-f618-4c04-ac5d-b9ab4f957855/fc20fca3-5dfa-403a-a9fb-0b93b621bae9/TOPOSCLASSICFS03.jpg?width=1200`,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `${CAISY}/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: `${CAISY}/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200`,
    to: '/kitchens/leicht/taj-mahal',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: `${CAISY}/e55fa4d1-4a8b-4ed8-a6e3-c28839a9f659/0da1e8dc-ff21-456e-9ece-e11dc03429d6/0480101Kyoto012nah.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `${CAISY}/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: `${CAISY}/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: `${CAISY}/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: `${CAISY}/b3e8255a-1826-4b17-a901-2f09698a4c09/4342f9b6-a670-46dc-95ce-dd82d936f12f/0470101BAHIA026.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: `${CAISY}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: `${CAISY}/77d147d2-6c6a-403d-9978-6d5bbfe8c587/ac6b25b5-a13e-4e92-810a-a4e3c667673f/713269M01103316j19.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: `${CAISY}/64aa5c14-7364-49ea-92f2-193cd9996d8c/1789ba52-06f9-47c8-b390-f5853de36dea/219213269M01298025312j18.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: `${CAISY}/0797a2ec-ddba-43fd-925d-d524003c8000/2297febd-3a9c-4c86-b3d8-d339204370f1/753283213M01120335NCSj22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: `${CAISY}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1200`,
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
            src={`${CAISY}/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg`}
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
                src={`${CAISY}/755e89c3-0cf5-456a-aef1-543a14d6e64e/fe605560-76eb-4322-9958-b7f1fb544bf4/0680116FotoproduktionA002copy.jpg?width=800`}
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
            src={`${CAISY}/2ae5a9df-7f78-426a-be5d-d2d4665ff20a/170444c4-99c5-494c-ab1a-4b58612e53c3/0680109FotoproduktionA041copy.jpg?width=900`}
            alt="Beige Timeless and Modern kitchen detail"
          />
        </div>
      </section>

      {/* ── 5. SPLIT SCREEN: BEIGE THE PERFECT BALANCE ─────────── */}
      <section className="taj2-material">
        <div className="taj2-material__overlay">
          <div className="taj2-material__card taj2-material__card--img">
            <img
              src={`${CAISY}/3f5b2f90-b32b-4211-b023-96ccb96ae1f0/69b6bd38-6ffb-48a7-80cc-30f4ee09b98e/0680110FotoproduktionA041copy.jpg?width=900`}
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
              src={`${CAISY}/b48c314a-0222-49c4-9b54-d6725da03584/a8f62dd8-7322-42a7-979f-4e5e9ad5f458/0680111FotoproduktionA002copy.jpg?width=900`}
              alt="Taj Mahal planning layout detail left"
            />
          </div>
          <div className="taj2-grid-duo__img-wrapper">
            <img
              src={`${CAISY}/d7add8ae-2d2c-4398-96c2-414b8ac825b0/5ed35d16-5419-423a-af16-37c7adb28fc3/0680118FotoproduktionA044copy.jpg?width=900`}
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
