import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'pullout_cabinet',
    x: '49.8%',
    y: '45.4%',
    title: 'Pull-out door cabinet',
    desc: 'When the unit is opened, the door can be slid in at the side of the carcase. This is both practical and convenient. Devices can be optimally concealed when not in use, creating a simple, straightforward look.',
    img: `${CAISY}/0b685055-d0ee-4736-89d8-c6f72b3e82a1/b85eed16-0b30-4040-90cb-d657042859f7/244753D03350120j20.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'table_pullout',
    x: '41.6%',
    y: '43.0%',
    title: 'Table pull-out',
    desc: 'Midway unit with pull-out shelf. Interior design in wood, matching the selected front. Units available in greater widths.',
    img: `${CAISY}/d5aa5711-acba-46af-b9f3-d8d583d0bb75/e8467208-0970-4360-8dcc-d29be6fc19e2/244753D06350120j20.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'bossa',
    x: '58.7%',
    y: '47.8%',
    title: 'BOSSA',
    desc: 'Real wood front in the veneers oak or walnut. Protruding, linear ridges in a 12.5mm grid give the veneer a delicate, extremely vital, three-dimensional look. Primo range, alpine oak lined.',
    img: `${CAISY}/68241e6d-e814-44a5-9858-925dcd17eb09/693d0128-7a20-4ec2-a29b-c972ab8812e1/244753MO13350120j20.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'fios',
    x: '27.7%',
    y: '37.5%',
    title: 'FIOS shelving system',
    desc: 'The shelving system with 16 mm metal brackets consists of mounted shelves. In terms of dimensions, the metal brackets are flexible and are available in several colours. The shelves are 16 mm or 28 mm thick and are available in many materials.',
    img: `${CAISY}/edb9f305-dc9f-4f50-a71d-c589bd12f94d/53945bc8-f7f5-4f01-8143-c7ec6fe11f3e/244753D07350120j20.jpg?width=400`,
    dir: 'right',
  },
  {
    id: 'fenix',
    x: '49.6%',
    y: '61.0%',
    title: 'FENIX F 45',
    desc: 'Laminate front made of original FENIX material in ultra-matt; soft-to-the-touch with anti-fingerprint finish. Minor traces of use can be repaired. Contino range, frosty white color.',
    img: `${CAISY}/4ddb836b-fbac-4671-a219-7518880950c4/b1a0bafc-b323-473e-82e4-8673123ca997/244753MO07350120j20.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'miter',
    x: '22.2%',
    y: '61.8%',
    title: 'Vertical miter',
    desc: 'The side panel and drawer fronts feature a beveled edge at a 45-degree angle, allowing the handle profile and side panel to merge seamlessly. This creates the illusion of the side and front blending into a delicate, cohesive unit.',
    img: `${CAISY}/4ddb836b-fbac-4671-a219-7518880950c4/b1a0bafc-b323-473e-82e4-8673123ca997/244753MO07350120j20.jpg?width=400`,
    dir: 'right',
  },
]

const sliderSlides = [
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
    to: '/kitchens/leicht/kyoto',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `${CAISY}/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht/contino-12',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: `${CAISY}/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200`,
    to: '/kitchens/leicht/bossa-fenix-f45-c',
  },
]

export default function LeichtBossaFenixF45C() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [activeSlideAwayTab, setActiveSlideAwayTab] = useState(1)
  const [activePulloutTab, setActivePulloutTab] = useState(1)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.bossafenix-kcard')
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
      className="bossafenix-page"
    >
      {/* ── 1. HERO with Hotspots ───────────────────────────────── */}
      <section className="bossafenix-hero">
        <div className="bossafenix-hero__aspect">
          <img
            src={`${CAISY}/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg`}
            alt="LEICHT BOSSA FENIX F45-C kitchen concept"
            className="bossafenix-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="bossafenix-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="bossafenix-hs__btn" aria-label={spot.title}>
                <span className="bossafenix-hs__ring" />
                <span className="bossafenix-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`bossafenix-hs__tip bossafenix-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="bossafenix-hs__tip-img">
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
      <section className="bossafenix-intro">
        <div className="bossafenix-intro__inner container">
          <div className="bossafenix-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Bossa Fenix F45-C</span>
            </nav>
            <h4 className="bossafenix-intro__prog">BOSSA | FENIX F 45-C</h4>
            <p className="bossafenix-intro__body">
              The BOSSA real wood surface in light oak seamlessly connects the kitchen and living space.
            </p>
          </div>
          <div className="bossafenix-intro__imgs">
            <div className="bossafenix-intro__img bossafenix-intro__img--wide">
              <img
                src={`${CAISY}/3da27bc7-ce72-438d-b65f-dfc298e33fa1/d2f65d33-5a6e-4341-9fa1-8854dfbff883/244753M02350120j201.jpg?width=800`}
                alt="Bossa Fenix F45-C natural wood close-up fronts"
              />
            </div>
            <div className="bossafenix-intro__img bossafenix-intro__img--tall">
              <img
                src={`${CAISY}/55b541a1-1936-4cbe-bb50-a0efc1492393/2338aba1-17fc-4c3b-a47b-95ce422ed0eb/kristapsgrundsteinsIj5sVdycxIYunsplash.jpg?width=600`}
                alt="Minimalist design interior decor details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NATURAL ELEGANCE ─────────────────────── */}
      <section className="bossafenix-split bossafenix-split--img-right">
        <div className="bossafenix-split__text">
          <span className="bossafenix-split__eyebrow">Timeless aesthetic in real wood</span>
          <h2 className="bossafenix-split__heading">BOSSA – Natural elegance for your home</h2>
          <p className="bossafenix-split__body">
            Experience natural wood veneers in oak or walnut designed in a precise 12.5mm protruding linear structure. BOSSA gives vertical surfaces a vital, three-dimensional look that brings warmth, character, and luxury into the modern open-plan home layout.
          </p>
          <Link to="/contact" className="bossafenix-split__discover">Discover</Link>
        </div>
        <div className="bossafenix-split__img">
          <img
            src={`${CAISY}/7838a2ef-731b-4534-a635-435c858243c7/1cb6ad40-9043-4421-8575-7140bd11293d/244753MO13350120j20.jpg?width=900`}
            alt="BOSSA natural elegance real wood wood structure"
          />
        </div>
      </section>

      {/* ── 4. SLIDE-AWAY DOORS INTERACTIVE TABS ────────────────── */}
      <section className="bossafenix-split bossafenix-split--img-left bossafenix-split--dark">
        <div className="bossafenix-split__img">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlideAwayTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={
                activeSlideAwayTab === 1
                  ? `${CAISY}/4e46f9e5-09a1-422d-959e-e07ac09474d0/854b51c2-4fce-4bda-bc91-cad557206a5d/244753D01350120j20.jpg?width=900`
                  : activeSlideAwayTab === 2
                  ? `${CAISY}/4f9ec03f-9e7f-4ffc-b570-a649c081a0fb/cc621573-e237-4fe7-883a-3f5942717bd5/244753D02350120j20.jpg?width=900`
                  : `${CAISY}/8eac3ed0-fe0a-48d7-b3c8-45e1f24f4bd9/abd08273-c29d-4661-91c3-1710125ead36/244753D03350120j20.jpg?width=900`
              }
              alt="Slide-away retractable doors configurations"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
        <div className="bossafenix-split__text">
          <span className="bossafenix-split__eyebrow">Seamless space design with BOSSA</span>
          <h2 className="bossafenix-split__heading">Slide-away door</h2>
          <p className="bossafenix-split__sub">Maximum living space – invisible storage</p>
          
          <div className="bossafenix-vtabs">
            <button
              onClick={() => setActiveSlideAwayTab(1)}
              className={`bossafenix-vtabs__item ${activeSlideAwayTab === 1 ? 'bossafenix-vtabs__item--active' : ''}`}
            >
              <h3>Invisible Storage</h3>
              <p>The cabinets elegantly disappear into the wall design, while the continuous wood paneling extends into the open kitchen.</p>
            </button>
            
            <button
              onClick={() => setActiveSlideAwayTab(2)}
              className={`bossafenix-vtabs__item ${activeSlideAwayTab === 2 ? 'bossafenix-vtabs__item--active' : ''}`}
            >
              <h3>Space-Saving Access</h3>
              <p>Thanks to the retractable door technology, the contents of the cabinet are easily accessible with just one motion, allowing unobstructed space-saving access.</p>
            </button>
            
            <button
              onClick={() => setActiveSlideAwayTab(3)}
              className={`bossafenix-vtabs__item ${activeSlideAwayTab === 3 ? 'bossafenix-vtabs__item--active' : ''}`}
            >
              <h3>Customizable Interior Design</h3>
              <p>The interior of the cabinet can be fully customized, allowing you to organize the storage space according to your personal needs and preferences.</p>
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. CUSTOMIZABLE INSTALLATION OPTIONS ─────────────────────── */}
      <section className="bossafenix-split bossafenix-split--img-right">
        <div className="bossafenix-split__text">
          <span className="bossafenix-split__eyebrow">Flexible and Lockable</span>
          <h2 className="bossafenix-split__heading">Customizable Installation Options</h2>
          <p className="bossafenix-split__body">
            The interior layout of tall cupboards or pantry storage areas can be customized to match dynamic user habits. Integrated drawers, pull-out storage shelves, and sliding units ensure full utility and access. Premium drawer systems and carbon grey elements complement the material quality.
          </p>
          <Link to="/contact" className="bossafenix-split__discover">Discover</Link>
        </div>
        <div className="bossafenix-split__img">
          <img
            src={`${CAISY}/08eec479-daf7-4490-b178-dee6f0732bc0/1e2c1120-1805-44bb-be80-b404d7715017/244753D05350120j20.jpg?width=900`}
            alt="Customizable installation options tall unit details"
          />
        </div>
      </section>

      {/* ── 6. TABULAR PULL-OUT with Switcher ────────────────────── */}
      <section className="bossafenix-split bossafenix-split--img-left">
        <div className="bossafenix-split__img">
          <AnimatePresence mode="wait">
            <motion.img
              key={activePulloutTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={
                activePulloutTab === 1
                  ? `${CAISY}/9bcce172-3f66-4c66-9ec1-f389207e0d48/043b92fb-9fa5-435d-9df2-00c9933b9ae2/244753D04350120j20.jpg?width=900`
                  : `${CAISY}/1bc314d5-18e7-4757-82c2-a106bbbf1fc7/a6d56acb-5dd4-4094-98a8-979ccea3a56b/244753D06350120j20.jpg?width=900`
              }
              alt="Tabular Pull-Out detail configurations"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
        <div className="bossafenix-split__text">
          <span className="bossafenix-split__eyebrow">Practical and Versatile Storage</span>
          <h2 className="bossafenix-split__heading">Tabular Pull-Out</h2>
          <p className="bossafenix-split__body">
            The tabular pull-out provides a flexible solution for tall cabinets and shelving units. It easily extends and locks securely in place. Ideal for dish cabinets with a solid base, this pull-out is factory-installed but can also be customized for onsite assembly, offering maximum flexibility in your kitchen design.
          </p>
          
          <div className="bossafenix-tabs">
            <button
              onClick={() => setActivePulloutTab(1)}
              className={`bossafenix-tabs__btn ${activePulloutTab === 1 ? 'bossafenix-tabs__btn--active' : ''}`}
            >
              01 / Closed Detail
            </button>
            <button
              onClick={() => setActivePulloutTab(2)}
              className={`bossafenix-tabs__btn ${activePulloutTab === 2 ? 'bossafenix-tabs__btn--active' : ''}`}
            >
              02 / Open View
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. DISCOVER KITCHENS — SLIDER ──────────────────────── */}
      <section className="bossafenix-discover">
        <div className="container">
          <div className="bossafenix-discover__header">
            <div>
              <h2 className="bossafenix-discover__heading">Discover Kitchens</h2>
              <p className="bossafenix-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="bossafenix-discover__actions">
              <Link to="/kitchens/leicht" className="bossafenix-discover__all">All Kitchens →</Link>
              <div className="bossafenix-discover__nav">
                <button className="bossafenix-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="bossafenix-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bossafenix-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="bossafenix-kcard">
                <div className="bossafenix-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="bossafenix-kcard__info">
                  <h3 className="bossafenix-kcard__title">{slide.title}</h3>
                  <p className="bossafenix-kcard__sub">{slide.sub}</p>
                  <span className="bossafenix-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ───────────────────────────────────────────── */
        .bossafenix-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .bossafenix-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .bossafenix-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .bossafenix-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .bossafenix-hs__btn {
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
        .bossafenix-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .bossafenix-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: bossafenix-hs-pulse 2.2s ease-out infinite;
        }
        @keyframes bossafenix-hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .bossafenix-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .bossafenix-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .bossafenix-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .bossafenix-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .bossafenix-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .bossafenix-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .bossafenix-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .bossafenix-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .bossafenix-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 0;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .bossafenix-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .bossafenix-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .bossafenix-intro__text { padding-bottom: 80px; }
        .bossafenix-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .bossafenix-intro__body {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.35;
          color: var(--charcoal);
          font-weight: 400;
        }
        .bossafenix-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .bossafenix-intro__img { overflow: hidden; }
        .bossafenix-intro__img--wide  { aspect-ratio: 7/6; }
        .bossafenix-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .bossafenix-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .bossafenix-intro__img:hover img { transform: scale(1.04); }

        /* ── SPLIT SECTIONS ────────────────── */
        .bossafenix-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .bossafenix-split + .bossafenix-split { border-top: none; }
        .bossafenix-split--img-right .bossafenix-split__text { order: 1; }
        .bossafenix-split--img-right .bossafenix-split__img  { order: 2; }
        .bossafenix-split--img-left .bossafenix-split__text  { order: 2; }
        .bossafenix-split--img-left .bossafenix-split__img   { order: 1; }

        .bossafenix-split__text {
          background: #fcfbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px;
        }
        .bossafenix-split--dark .bossafenix-split__text {
          background: #3c3735;
        }
        .bossafenix-split__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .bossafenix-split--dark .bossafenix-split__eyebrow {
          color: #b8966e;
        }
        .bossafenix-split__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .bossafenix-split--dark .bossafenix-split__heading {
          color: #fff;
        }
        .bossafenix-split__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gold);
          margin-bottom: 24px;
          letter-spacing: 0.04em;
        }
        .bossafenix-split--dark .bossafenix-split__sub {
          color: #b8966e;
        }
        .bossafenix-split__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
          margin-bottom: 32px;
        }
        .bossafenix-split--dark .bossafenix-split__body {
          color: rgba(255,255,255,0.85);
        }
        .bossafenix-split__discover {
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
        .bossafenix-split__discover:hover {
          color: #8a6840;
          border-color: #8a6840;
        }
        .bossafenix-split--dark .bossafenix-split__discover {
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }
        .bossafenix-split__img {
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .bossafenix-split__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        /* ── VERTICAL TABS (Retractable Door) ──────────────── */
        .bossafenix-vtabs {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 16px;
        }
        .bossafenix-vtabs__item {
          background: transparent;
          border: none;
          border-left: 2px solid rgba(255,255,255,0.15);
          text-align: left;
          padding: 4px 0 4px 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .bossafenix-vtabs__item h3 {
          font-family: var(--font-serif);
          font-size: 20px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 6px;
          font-weight: 400;
          transition: color 0.3s ease;
        }
        .bossafenix-vtabs__item p {
          font-family: var(--font-sans);
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,0.3);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25,1,0.5,1), color 0.3s ease, margin 0.3s ease;
          margin: 0;
        }
        .bossafenix-vtabs__item--active {
          border-left-color: var(--gold);
        }
        .bossafenix-vtabs__item--active h3 {
          color: #fff;
        }
        .bossafenix-vtabs__item--active p {
          color: rgba(255,255,255,0.8);
          max-height: 100px;
          margin-top: 4px;
        }

        /* ── DETAIL TABS ────────────────────────────────── */
        .bossafenix-tabs {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        .bossafenix-tabs__btn {
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
        .bossafenix-tabs__btn:hover {
          color: var(--gold);
          border-color: var(--gold-light);
        }
        .bossafenix-tabs__btn--active {
          background: var(--gold);
          color: #fff;
          border-color: var(--gold);
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .bossafenix-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .bossafenix-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .bossafenix-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .bossafenix-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .bossafenix-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .bossafenix-discover__all {
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
        .bossafenix-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .bossafenix-discover__nav {
          display: flex;
          gap: 12px;
        }
        .bossafenix-discover__nav-btn {
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
        .bossafenix-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .bossafenix-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .bossafenix-discover__track::-webkit-scrollbar {
          display: none;
        }
        .bossafenix-kcard {
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
        .bossafenix-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .bossafenix-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .bossafenix-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .bossafenix-kcard:hover .bossafenix-kcard__img img {
          transform: scale(1.06);
        }
        .bossafenix-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .bossafenix-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .bossafenix-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .bossafenix-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .bossafenix-kcard:hover .bossafenix-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .bossafenix-hero__aspect { height: 60vh; min-height: 400px; }
          .bossafenix-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .bossafenix-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .bossafenix-split { grid-template-columns: 1fr; }
          .bossafenix-split__text { padding: 56px 32px; order: 2 !important; }
          .bossafenix-split__img  { order: 1 !important; min-height: 300px; }
          .bossafenix-split__img img { position: static; width: 100%; height: 100%; min-height: 300px; }
          .bossafenix-discover__heading { font-size: 32px; }
          .bossafenix-discover__track { gap: 20px; }
          .bossafenix-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .bossafenix-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
