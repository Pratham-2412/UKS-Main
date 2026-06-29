import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

/* ── HOTSPOTS ─────────────────────────────────────────────────── */
const hotspots = [
  {
    id: 'fenix_f45',
    x: '60.9%', y: '61.0%',
    title: 'FENIX F 45',
    desc: 'High-quality laminate front made from original FENIX NTM material. The all-round 45° chamfered laminate edge ensures the special look of the front. Design range: CONTINO Colour: K 120 frosty white',
    img: `${BASE}/b2b6cae6-3752-4031-9383-6ad5e9446cbd/e52fd048-906c-40e7-a2e5-205c65e10769/753283213D06120335NCSj22003.jpg?width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'shelves',
    x: '16.8%', y: '41.5%',
    title: 'Shelves',
    desc: 'Filigree metal shelves, with integrated LED lighting strip for positioning on wall cladding. The shelves are available in several colours. The light can be controlled in terms of intensity and colour temperature.',
    img: `${BASE}/95c7873c-62bd-416c-9c00-b30ee7c8f4d1/5504638a-ef3f-4043-83dc-e2dc656e0b1b/242283213MO08120335NCSj18.jpg?width=257&height=169`,
    popDir: 'right',
  },
  {
    id: 'table',
    x: '28.6%', y: '63.2%',
    title: 'Table solution',
    desc: 'Variable table solution with support brackets made of stainless steel or a lacquered metal version in the desired colour. The metal brackets are manufactured as required and in terms of dimensions can be planned freely.',
    img: `${BASE}/1a20915b-3bd0-425f-bfac-19a7eaef18b9/1fafec3d-7212-43f2-bd5d-74b1a8cd6993/242283213D19120335NCSj18.jpg?focal_point=54.95,94.85&width=257&height=169`,
    popDir: 'right',
  },
  {
    id: 'tall_unit',
    x: '37.1%', y: '39.6%',
    title: 'One-piece tall unit front',
    desc: 'Tall unit element with continuous door which is extended to the floor, thus concealing the plinth in the front – resulting in extra elegance and homeliness.',
    img: `${BASE}/c906e067-71b7-4fb9-acc4-7e12f34fda06/d3eabb14-07df-4f09-aa53-b6a7c4ae9c51/753283213D22120335NCSj22.jpg?width=257&height=169`,
    popDir: 'right',
  },
  {
    id: 'cladding',
    x: '10.4%', y: '55.4%',
    title: 'Wall cladding',
    desc: 'Wall cladding is available in a number of programmes, materials and colours and, in terms of dimensions, can be adapted to suit requirements. Colour: H 335 alpine natural oak',
    img: `${BASE}/0e0b3e00-944b-4646-ba80-0945492003bc/9638d3ac-f1be-43a7-b1dd-a70f9c09bad3/242283213D22120335NCSj18.jpg?width=257&height=169`,
    popDir: 'right',
  }
]

/* ── SWATCH TABS ──────────────────────────────────────────────── */
const SWATCHES = [
  {
    id: 1,
    thumb: `${BASE}/0d9adaa3-c0f9-4cea-abdd-67de956653d2/f77414e7-8ecf-4e8f-82a4-a88a0b826651/242283213D17120335NCSj18.jpg?width=120&height=82`,
    large: `${BASE}/0d9adaa3-c0f9-4cea-abdd-67de956653d2/f77414e7-8ecf-4e8f-82a4-a88a0b826651/242283213D17120335NCSj18.jpg?width=1360&height=575`,
    alt: 'Fenix F45-C – Solid oak cutlery organizer',
  },
  {
    id: 2,
    thumb: `${BASE}/9caf444b-791d-4fb5-b6cb-845971629c28/48e826ea-8fa5-4f08-9551-6e2d54a18674/242283213D16120335NCSj18.jpg?width=120&height=82`,
    large: `${BASE}/9caf444b-791d-4fb5-b6cb-845971629c28/48e826ea-8fa5-4f08-9551-6e2d54a18674/242283213D16120335NCSj18.jpg?width=1360&height=575`,
    alt: 'Fenix F45-C – Drawer with plate dividers',
  },
  {
    id: 3,
    thumb: `${BASE}/3125dc49-bc21-4e1f-9a1b-e33d00604e24/64fb3132-28b5-4c27-a580-8c680478b4e9/242283213D20120335NCSj18.jpg?width=120&height=82`,
    large: `${BASE}/3125dc49-bc21-4e1f-9a1b-e33d00604e24/64fb3132-28b5-4c27-a580-8c680478b4e9/242283213D20120335NCSj18.jpg?width=1360&height=575`,
    alt: 'Fenix F45-C – Drawer with adjustable pegs',
  },
  {
    id: 4,
    thumb: `${BASE}/ae037edc-bab8-4ba1-9b81-aa9dfae9264b/d32ec910-8e3a-4261-97c0-6e657bdb44b8/242283213MO08120335NCSj18.jpg?width=120&height=82`,
    large: `${BASE}/ae037edc-bab8-4ba1-9b81-aa9dfae9264b/d32ec910-8e3a-4261-97c0-6e657bdb44b8/242283213MO08120335NCSj18.jpg?width=1360&height=575`,
    alt: 'Fenix F45-C – Wall shelves with integrated lighting',
  }
]

/* ── DISCOVER SLIDER SLIDES ───────────────────────────────────── */
const sliderSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: `${BASE}/3afd8ad1-729b-4951-ba32-b216ba6fc45f/72b71e1f-2932-48f8-ae65-0f9c666625f7/0890301Idea003.jpg?width=1200`,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: `${BASE}/0d9259d8-749a-42df-b235-3967aa116571/9f03937b-8d76-4c08-80b9-b49775a0a0eb/0880301FotoproduktionRahmenfront032.jpg?width=1200`,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: `${BASE}/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1200`,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: `${BASE}/fd359af4-f618-4c04-ac5d-b9ab4f957855/fc20fca3-5dfa-403a-a9fb-0b93b621bae9/TOPOSCLASSICFS03.jpg?width=1200`,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `${BASE}/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: `${BASE}/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200`,
    to: '/kitchens/leicht/taj-mahal',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: `${BASE}/e55fa4d1-4a8b-4ed8-a6e3-c28839a9f659/0da1e8dc-ff21-456e-9ece-e11dc03429d6/0480101Kyoto012nah.jpg?width=1200`,
    to: '/kitchens/leicht/kyoto',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `${BASE}/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht/contino-12',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: `${BASE}/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200`,
    to: '/kitchens/leicht/bossa-fenix-f45-c',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: `${BASE}/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200`,
    to: '/kitchens/leicht/bossa-kera-madero',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: `${BASE}/b3e8255a-1826-4b17-a901-2f09698a4c09/4342f9b6-a670-46dc-95ce-dd82d936f12f/0470101BAHIA026.jpg?width=1200`,
    to: '/kitchens/leicht/bahia',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Textured wood meets raw concrete for bold architectural kitchens.',
    img: `${BASE}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1200`,
    to: '/kitchens/leicht/bossa-concrete',
  },
  {
    title: 'CLASSIC-FS-C TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: `${BASE}/17222983-1ea7-4667-8e59-2c0ab2f11db4/e94fbfd1-43d2-436d-8720-5c429fd4497d/CLASSICFSCTOPOS2.webp?width=1200`,
    to: '/kitchens/leicht/classic-fs-c-topos',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Pure steel surfaces meet warm wood accents – an elegant kitchen design.',
    img: `${BASE}/64aa5c14-7364-49ea-92f2-193cd9996d8c/1789ba52-06f9-47c8-b390-f5853de36dea/219213269M01298025312j18.jpg?width=1200`,
    to: '/kitchens/leicht/steel-classic-fs-topos',
  }
]

export default function LeichtFenixF45CValaisClassicFs() {
  const [activeHot, setActiveHot] = useState(null)
  const [activeSwatch, setActiveSwatch] = useState(1)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.fval-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div className="fval-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* ── SECTION 1 : FULLSCREEN HERO WITH HOTSPOTS ─────────── */}
      <section className="fval-hero">
        <div className="fval-hero__wrap">
          <img
            className="fval-hero__img"
            src={`${BASE}/88e64946-236c-4d20-82d1-df8743b017ac/43f74d13-707b-471c-bb8a-11b4b3e07cd5/753283213M01120335NCSj22.jpg?width=2499&height=1679`}
            srcSet={`${BASE}/88e64946-236c-4d20-82d1-df8743b017ac/43f74d13-707b-471c-bb8a-11b4b3e07cd5/753283213M01120335NCSj22.jpg?width=1279 1279w,
              ${BASE}/88e64946-236c-4d20-82d1-df8743b017ac/43f74d13-707b-471c-bb8a-11b4b3e07cd5/753283213M01120335NCSj22.jpg?width=1919 1919w,
              ${BASE}/88e64946-236c-4d20-82d1-df8743b017ac/43f74d13-707b-471c-bb8a-11b4b3e07cd5/753283213M01120335NCSj22.jpg?width=2499 2499w`}
            sizes="100vw"
            alt="FENIX F45-C | VALAIS | CLASSIC-FS Kitchen – LEICHT"
            loading="eager"
          />
          <div className="fval-hero__hs-layer">
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="fval-hs"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveHot(spot.id)}
                onMouseLeave={() => setActiveHot(null)}
                onFocus={() => setActiveHot(spot.id)}
                onBlur={() => setActiveHot(null)}
              >
                <button className="fval-hs__btn" aria-label={spot.title} aria-expanded={activeHot === spot.id}>
                  <span className="fval-hs__ring fval-hs__ring--outer" />
                  <span className="fval-hs__ring fval-hs__ring--mid" />
                  <span className="fval-hs__dot" />
                </button>
                <AnimatePresence>
                  {activeHot === spot.id && (
                    <motion.div
                      className={`fval-hs__pop fval-hs__pop--${spot.popDir}`}
                      initial={{ opacity: 0, scale: 0.95, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="fval-hs__pop-img">
                        <img src={spot.img} alt={spot.title} />
                      </div>
                      <h4 className="fval-hs__pop-title">{spot.title}</h4>
                      <p className="fval-hs__pop-desc">{spot.desc}</p>
                      {spot.link && (
                        <Link to={spot.link} className="fval-hs__pop-link">
                          Discover →
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : INTRO + TWO IMAGES ───────────────────── */}
      <section className="fval-intro">
        <div className="fval-intro__inner container">
          <div className="fval-intro__text">
            <nav className="fval-breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span>/</span>
              <span>Fenix f45-c Valais Classic-FS</span>
            </nav>
            <p className="fval-intro__tag">FENIX F 45-C | VALAIS | CLASSIC-FS</p>
            <p className="fval-intro__quote">Timeless elegance and craftsmanship unite in this white kitchen.</p>
          </div>
          <div className="fval-intro__imgs">
            <div className="fval-intro__img-wide">
              <img
                src={`${BASE}/b2b6cae6-3752-4031-9383-6ad5e9446cbd/e52fd048-906c-40e7-a2e5-205c65e10769/753283213D06120335NCSj22003.jpg?width=833&height=714`}
                alt="FENIX F45-C VALAIS – frosty white kitchen island detail"
                loading="lazy"
              />
            </div>
            <div className="fval-intro__img-tall">
              <img
                src={`${BASE}/870bbc05-73c6-4072-a463-6e51248ba5a1/82cf8d2b-80c3-4bf6-801a-fdec0d861a7c/242283213MO13120335NCSj18.jpg?focal_point=46.44,5.18&width=833&height=1054`}
                alt="FENIX F45-C VALAIS – alpine oak cabinet fronts"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : Divider card (MINIMALISM MEETS FUNCTIONAL) ─ */}
      <section className="fval-divider">
        <div className="fval-divider__bg">
          <img
            src={`${BASE}/37a71ba7-a0e2-42ff-b24d-54e8efc20261/803857cb-a7d5-4ca7-b261-bfc4be9ee4c3/753283213D02120335NCSj22.jpg?width=1439&height=745`}
            alt="FENIX F45-C VALAIS – functional open kitchen design"
            loading="lazy"
            className="fval-divider__wide-img"
          />
        </div>
        <div className="fval-divider__grid">
          <div className="fval-divider__card">
            <span className="fval-divider__card-eyebrow">Architectural kitchen design</span>
            <h2 className="fval-divider__card-heading">Minimalism meets functional elegance</h2>
            <span className="fval-divider__card-sub">Cool modernity meets warm wood accents</span>
            <p className="fval-divider__card-body">Reduced kitchen concepts focus on the essentials – clear lines, precise symmetry, and delicate contours. The combination of cool matte lacquer fronts in innovative FENIX and warm wood materials creates a harmonious balance between modern aesthetics and homely warmth.</p>
          </div>
          <div className="fval-divider__portrait">
            <img
              src={`${BASE}/fa606a2c-3957-4732-b48b-745a15007cd5/c8f76761-9c2a-44dd-9b47-e2d792e773a3/753283213D22120335NCSj22.jpg?width=833&height=1137`}
              alt="FENIX F45-C VALAIS – handleless tall cabinets detailed view"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : 45° CHAMFERED FRONT EDGE (OVERLAY) ────── */}
      <section className="fval-overlay-sec">
        <div className="fval-overlay-sec__bg">
          <img
            src={`${BASE}/810cd499-88b6-4ab7-b78c-4af8c2ca7739/74732b11-deb9-4678-8ccc-826e0806946c/753283213D15120335NCSj22.jpg?width=1440`}
            alt="FENIX F45-C – 45 degree chamfered edge drawer profile"
            loading="lazy"
          />
        </div>
        <div className="container fval-overlay-sec__content">
          <div className="fval-overlay-sec__card fval-overlay-sec__card--left">
            <h2 className="fval-overlay-sec__heading">45° Chamfered Edge – Perfect Precision</h2>
            <p className="fval-overlay-sec__desc">The kitchen is a masterpiece: durable, solid, and authentic. Handle-less fronts reveal a high-quality edge that combines craftsmanship and emotion. The timeless matte white fronts harmonize perfectly. The precise craftsmanship of the 45° chamfered edges ensures exact joint alignment and a seamless, elegant look.</p>
            <Link to="/contact" className="fval-pill-btn">
              <span>Discover</span>
              <span className="fval-pill-btn__circle">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#22333b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : WALL CLADDING AS DESIGN ELEMENT (OVERLAY) */}
      <section className="fval-overlay-sec">
        <div className="fval-overlay-sec__bg">
          <img
            src={`${BASE}/9afe5b7d-0e69-4fd4-9ca8-f4d16a3e48e4/38bcf943-67f1-4739-9e0f-526407f765b2/242283213D19120335NCSj18.jpg?focal_point=46.53,55.56&width=1440`}
            alt="FENIX F45-C – alpine oak wall cladding wood texture"
            loading="lazy"
          />
        </div>
        <div className="container fval-overlay-sec__content">
          <div className="fval-overlay-sec__card fval-overlay-sec__card--right">
            <span className="fval-overlay-sec__tag">Natural warmth for the room</span>
            <h2 className="fval-overlay-sec__heading">Wall cladding as a design element</h2>
            <span className="fval-overlay-sec__sub">Experience wood in harmonious tones</span>
            <p className="fval-overlay-sec__desc">The high-quality wall cladding made of finely textured wood flows seamlessly into the living area and sets stylish accents. It brings natural warmth to the room and emphasizes the thoughtful, form-fitting design of the architectural kitchen. The material wood, with its lively grain, durability, and natural appeal, lends the interior a desirable atmosphere. Combined with carefully selected, harmoniously coordinated color shades, the unique character of wood—such as richly textured oak—comes into its own with particular intensity.</p>
            <Link to="/contact" className="fval-pill-btn">
              <span>Discover</span>
              <span className="fval-pill-btn__circle">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#22333b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : SWATCH IMAGE SWITCHER (ACCESSORY DETAILS) ── */}
      <section className="fval-minimalist">
        <div className="container">
          <div className="fval-minimalist__img-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSwatch}
                src={SWATCHES.find((s) => s.id === activeSwatch)?.large}
                alt={SWATCHES.find((s) => s.id === activeSwatch)?.alt}
                className="fval-minimalist__img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className="fval-minimalist__footer">
            <div className="fval-minimalist__text">
              <h2 className="fval-minimalist__heading">Accessory & details</h2>
              <p className="fval-minimalist__desc" style={{ marginBottom: '24px' }}>
                High-quality interior accessories and lighting systems perfectly match the aesthetic of the FENIX laminate fronts. From solid wood cutlery dividers and adjustable drawer organizer systems to filigree metal shelving with integrated LED illumination, every element is designed to provide optimal comfort and elegance.
              </p>
              <Link to="/contact" className="fval-discover-btn">
                Discover →
              </Link>
            </div>
            <div className="fval-minimalist__swatches">
              {SWATCHES.map((sw) => (
                <button
                  key={sw.id}
                  onClick={() => setActiveSwatch(sw.id)}
                  className={`fval-swatch${activeSwatch === sw.id ? ' fval-swatch--active' : ''}`}
                  aria-label={sw.alt}
                >
                  <img src={sw.thumb} alt={sw.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 : DISCOVER KITCHENS ─────────────────────── */}
      <section className="fval-discover">
        <div className="container">
          <div className="fval-discover__header">
            <div>
              <h2 className="fval-discover__heading">Discover Kitchens</h2>
              <p className="fval-discover__sub">Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.</p>
            </div>
            <div className="fval-discover__actions">
              <Link to="/kitchens/leicht" className="fval-discover__all">All Kitchens →</Link>
              <div className="fval-discover__nav">
                <button className="fval-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="fval-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="fval-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="fval-kcard">
                <div className="fval-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="fval-kcard__info">
                  <h3 className="fval-kcard__title">{slide.title}</h3>
                  <p className="fval-kcard__sub">{slide.sub}</p>
                  <span className="fval-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ─────────────────────────────────────────── */}
      <style>{`
        .fval-page {
          --cream:    #f8f9fa;
          --cream-dk: #eef0f2;
          --charcoal: #22333b;
          --ch-soft:  #3a4f59;
          --gold:     #22333b;
          --gold-dk:  #152026;
          --gold-lt:  #b0bec5;
          --border:   #cfd8dc;
          --white:    #ffffff;
          --gray:     #546e7a;
          --ff-serif: var(--font-serif, 'Georgia', serif);
          --ff-sans:  var(--font-sans, system-ui, sans-serif);
          background: var(--cream);
          color: var(--charcoal);
          overflow-x: hidden;
        }
        .fval-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 767px)  { .fval-page .container { padding: 0 16px; } }
        @media (max-width: 1023px) { .fval-page .container { padding: 0 32px; } }

        /* ── hero ── */
        .fval-hero { position: relative; width: 100%; overflow: hidden; }
        .fval-hero__wrap {
          position: relative; width: 100%;
          aspect-ratio: 3/2; max-height: 100vh; min-height: 56vw;
        }
        @media (min-width: 1200px) {
          .fval-hero__wrap { aspect-ratio: 2048/1239; }
        }
        .fval-hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .fval-hero__hs-layer { position: absolute; inset: 0; width: 100%; height: 100%; }

        /* ── hotspots ── */
        .fval-hs { position: absolute; transform: translate(-50%,-50%); z-index: 20; }
        .fval-hs__btn {
          position: relative; width: 28px; height: 28px;
          border-radius: 50%; background: var(--white);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,.15);
        }
        .fval-hs__dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--charcoal); position: relative; z-index: 2;
        }
        .fval-hs__ring {
          position: absolute; border-radius: 50%;
          left: 50%; top: 50%; transform: translate(-50%,-50%);
        }
        .fval-hs__ring--mid {
          width: 36px; height: 36px; background: rgba(255,255,255,.30);
          animation: fval-pulse-mid 2s ease-in-out infinite;
        }
        .fval-hs__ring--outer {
          width: 44px; height: 44px; border: 1px solid rgba(255,255,255,.15);
          animation: fval-pulse-outer 2s ease-in-out infinite; animation-delay: 0.3s;
        }
        @keyframes fval-pulse-mid   { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)} }
        @keyframes fval-pulse-outer { 0%,100%{opacity:.3} 50%{opacity:.6} }

        .fval-hs__pop {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 280px; background: rgba(255,255,255,.93);
          backdrop-filter: blur(8px); border: 1px solid var(--border);
          border-radius: 8px; padding: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
          z-index: 40; pointer-events: none;
        }
        .fval-hs__pop--right { left: 38px; }
        .fval-hs__pop--left  { right: 38px; }
        .fval-hs__pop-img { width:100%; aspect-ratio:257/169; overflow:hidden; border-radius:4px; margin-bottom:10px; }
        .fval-hs__pop-img img { width:100%; height:100%; object-fit:cover; }
        .fval-hs__pop-title { font-family:var(--ff-sans); font-size:15px; font-weight:600; color:var(--charcoal); margin:0 0 6px; }
        .fval-hs__pop-desc  { font-family:var(--ff-sans); font-size:12px; line-height:1.55; color:var(--ch-soft); margin:0 0 8px; }
        .fval-hs__pop-link  { font-family:var(--ff-sans); font-size:11px; font-weight:600; color:var(--gold); text-decoration:none; }

        /* ── intro ── */
        .fval-intro { padding: 80px 0 100px; background: var(--cream); }
        .fval-intro__inner { display: grid; grid-template-columns: 1fr; gap: 40px; }
        @media (min-width: 992px) {
          .fval-intro__inner { grid-template-columns: 1fr 2fr; gap: 60px; align-items: flex-start; }
        }
        .fval-breadcrumb {
          display:flex; flex-wrap:wrap; gap:6px;
          font-family:var(--ff-sans); font-size:12px; color:var(--gray); margin-bottom:28px;
        }
        .fval-breadcrumb a { color:var(--charcoal); text-decoration:none; }
        .fval-breadcrumb a:hover { color:var(--gold); }
        .fval-breadcrumb span { color:var(--gray); }
        .fval-intro__tag {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:.14em; text-transform:uppercase;
          color:rgba(28,34,36,.5); margin-bottom:16px;
        }
        .fval-intro__quote {
          font-family:var(--ff-serif); font-size:36px; line-height:1.25;
          font-weight:300; color:var(--charcoal); margin:0;
        }
        @media (min-width: 1280px) { .fval-intro__quote { font-size:42px; } }
        
        .fval-intro__imgs { display:grid; grid-template-columns:1fr; gap:16px; margin-top:20px; }
        @media (min-width: 768px) { .fval-intro__imgs { grid-template-columns:1fr 1fr; gap:20px; align-items:stretch; } }
        .fval-intro__img-wide,
        .fval-intro__img-tall { border-radius:12px; overflow:hidden; aspect-ratio:3/2; }
        .fval-intro__img-wide img,
        .fval-intro__img-tall img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.5s ease; }
        .fval-intro__img-wide:hover img,
        .fval-intro__img-tall:hover img { transform:scale(1.04); }

        /* ── divider section ── */
        .fval-divider {
          display:flex; flex-direction:column; gap:24px;
          padding:80px 0; background:var(--cream-dk); border-top:1px solid var(--border);
        }
        @media (min-width: 992px) { .fval-divider { gap:48px; } }
        .fval-divider__bg { width:100%; padding:0 16px; }
        @media (min-width: 768px) { .fval-divider__bg { padding:0 32px; } }
        @media (min-width: 992px) { .fval-divider__bg { padding:0 40px; } }
        .fval-divider__wide-img {
          width:100%; border-radius:12px; overflow:hidden;
          display:block; object-fit:cover; aspect-ratio:16/9;
        }
        @media (min-width: 992px) { .fval-divider__wide-img { aspect-ratio: 1439/745; } }
        .fval-divider__grid { display:grid; grid-template-columns:1fr; gap:20px; padding:0 16px; }
        @media (min-width: 768px) { .fval-divider__grid { grid-template-columns:5fr 3fr; gap:24px; padding:0 32px; } }
        @media (min-width: 992px) { .fval-divider__grid { grid-template-columns:7fr 5fr; gap:32px; padding:0 40px; } }
        .fval-divider__card {
          background: var(--charcoal); border-radius:12px; padding:32px 24px;
          color:var(--white); display:flex; flex-direction:column; gap:12px;
        }
        @media (min-width: 992px) { .fval-divider__card { padding:60px; min-height:500px; justify-content:center; } }
        .fval-divider__card-eyebrow {
          font-family:var(--ff-sans); font-size:12px; font-weight:500;
          text-transform:uppercase; letter-spacing:.1em; color:rgba(255,255,255,.5);
        }
        .fval-divider__card-heading {
          font-family:var(--ff-sans); font-size:28px; font-weight:500;
          color:var(--white); margin:0; line-height:1.2;
        }
        @media (min-width: 834px)  { .fval-divider__card-heading { font-size:36px; } }
        @media (min-width: 1440px) { .fval-divider__card-heading { font-size:48px; } }
        .fval-divider__card-sub {
          font-family:var(--ff-sans); font-size:14px; font-weight:600;
          color: var(--white); opacity: 0.85; display:block;
        }
        @media (min-width: 1280px) { .fval-divider__card-sub { font-size:18px; } }
        .fval-divider__card-body {
          font-family:var(--ff-sans); font-size:14px; line-height:1.7;
          color:rgba(255,255,255,.75); margin:8px 0 0;
        }
        @media (min-width: 1280px) { .fval-divider__card-body { font-size:16px; } }
        .fval-divider__portrait { border-radius:12px; overflow:hidden; aspect-ratio:833/1137; }
        @media (min-width: 768px) { .fval-divider__portrait { aspect-ratio:auto; height:100%; } }
        .fval-divider__portrait img { width:100%; height:100%; object-fit:cover; display:block; }

        /* ── discover link buttons ── */
        .fval-discover-btn {
          display: inline-block;
          font-family: var(--ff-sans); font-size: 13px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: var(--charcoal); text-decoration: none;
          border-bottom: 2px solid var(--charcoal);
          padding-bottom: 4px; width: fit-content;
          transition: color 0.25s, border-color 0.25s;
        }
        .fval-discover-btn:hover {
          color: var(--gray);
          border-color: var(--gray);
        }

        /* ── overlay section ── */
        .fval-overlay-sec {
          position: relative; width: 100%; overflow: hidden;
          display: flex; align-items: center; min-height: 580px;
          padding: 40px 0; background: var(--cream);
        }
        @media (min-width: 992px) {
          .fval-overlay-sec { min-height: 720px; padding: 50px 0; }
        }
        .fval-overlay-sec__bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          padding: 0 16px;
        }
        @media (min-width: 768px) { .fval-overlay-sec__bg { padding: 0 32px; } }
        @media (min-width: 992px) { .fval-overlay-sec__bg { padding: 0 40px; } }
        .fval-overlay-sec__bg img {
          width: 100%; height: 100%; object-fit: cover;
          border-radius: 12px; display: block;
        }
        .fval-overlay-sec__content {
          position: relative; z-index: 10;
          display: flex; width: 100%; height: 100%;
        }
        .fval-overlay-sec__card {
          background: rgba(34, 51, 59, 0.45);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px; padding: 40px 32px;
          color: var(--white); width: 100%; max-width: 520px;
          display: flex; flex-direction: column; gap: 14px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.15);
        }
        @media (min-width: 992px) {
          .fval-overlay-sec__card { padding: 56px 48px; }
          .fval-overlay-sec__card--left { margin-right: auto; margin-left: 20px; }
          .fval-overlay-sec__card--right { margin-left: auto; margin-right: 20px; }
        }
        .fval-overlay-sec__tag {
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.7);
        }
        .fval-overlay-sec__heading {
          font-family: var(--ff-sans); font-size: 26px; font-weight: 500;
          line-height: 1.25; margin: 0; color: var(--white);
        }
        @media (min-width: 768px) { .fval-overlay-sec__heading { font-size: 32px; } }
        .fval-overlay-sec__sub {
          font-family: var(--ff-sans); font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.9);
        }
        .fval-overlay-sec__desc {
          font-family: var(--ff-sans); font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        /* ── white pill button ── */
        .fval-pill-btn {
          display: inline-flex; align-items: center; gap: 14px;
          background: var(--white); color: var(--charcoal);
          padding: 8px 8px 8px 24px; border-radius: 9999px;
          font-family: var(--ff-sans); font-size: 13px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.08em;
          text-decoration: none; width: fit-content; margin-top: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: background 0.25s, transform 0.25s, color 0.25s;
        }
        .fval-pill-btn:hover {
          background: var(--cream-dk);
          transform: translateY(-2px);
          color: var(--charcoal);
        }
        .fval-pill-btn__circle {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--charcoal); display: flex;
          align-items: center; justify-content: center;
        }

        /* ── Swatch switcher / accessory details ── */
        .fval-minimalist { padding:80px 0; background:var(--white); border-top:1px solid var(--border); }
        .fval-minimalist__img-wrap { width:100%; border-radius:12px; overflow:hidden; aspect-ratio:1; position:relative; }
        @media (min-width: 768px) { .fval-minimalist__img-wrap { aspect-ratio:762/343; } }
        @media (min-width: 992px) { .fval-minimalist__img-wrap { aspect-ratio:1360/575; } }
        .fval-minimalist__img { width:100%; height:100%; object-fit:cover; display:block; position:absolute; inset:0; }
        .fval-minimalist__footer { display:flex; flex-direction:column; gap:24px; margin-top:24px; }
        @media (min-width: 992px) { 
          .fval-minimalist__footer { flex-direction:row; align-items:flex-start; justify-content:space-between; gap:48px; } 
        }
        .fval-minimalist__text { flex: 1; }
        .fval-minimalist__heading {
          font-family:var(--ff-serif); font-size:32px; font-weight:400;
          color:var(--charcoal); margin:0 0 12px;
        }
        .fval-minimalist__desc {
          font-family:var(--ff-sans); font-size:15px; line-height:1.75;
          color:var(--ch-soft); margin:0;
        }
        .fval-minimalist__swatches { display:flex; gap:10px; flex-shrink:0; margin-top:12px; }
        @media (min-width: 992px) { .fval-minimalist__swatches { margin-top: 0; } }
        .fval-swatch {
          width:90px; height:60px; border:2px solid transparent; border-radius:4px;
          overflow:hidden; padding:0; cursor:pointer; background:none; outline:none;
          transition:border-color .25s, transform .25s;
        }
        @media (min-width: 834px) { .fval-swatch { width:120px; height:82px; } }
        .fval-swatch:hover { transform:translateY(-2px); border-color:var(--gold-lt); }
        .fval-swatch--active { border-color:var(--gold); }
        .fval-swatch img { width:100%; height:100%; object-fit:cover; display:block; }

        /* ── discover kitchens ── */
        .fval-discover {
          background:var(--cream-dk); padding:100px 0 120px;
          overflow:hidden; border-top:1px solid var(--border);
        }
        .fval-discover__header {
          display:flex; align-items:flex-end; justify-content:space-between;
          gap:32px; margin-bottom:56px; flex-wrap:wrap;
        }
        .fval-discover__heading {
          font-family:var(--ff-serif); font-size:42px; font-weight:400;
          color:var(--charcoal); margin-bottom:12px;
        }
        .fval-discover__sub {
          font-family:var(--ff-sans); font-size:14px; color:var(--gray);
          line-height:1.6; max-width:420px;
        }
        .fval-discover__actions { display:flex; align-items:center; gap:24px; }
        .fval-discover__all {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase; color:var(--gold);
          text-decoration:none; white-space:nowrap;
          border:1px solid var(--gold); padding:10px 24px;
          transition:background 0.25s ease, color 0.25s ease;
        }
        .fval-discover__all:hover { background:var(--gold); color:#fff; }
        .fval-discover__nav { display:flex; gap:12px; }
        .fval-discover__nav-btn {
          width:42px; height:42px; border-radius:50%;
          border:1px solid var(--border); background:var(--white);
          color:var(--charcoal); display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .fval-discover__nav-btn:hover { border-color:var(--gold); color:var(--gold); background:var(--cream); }
        .fval-discover__track {
          display:flex; gap:28px; overflow-x:auto; scroll-snap-type:x mandatory;
          -webkit-overflow-scrolling:touch; scrollbar-width:none;
          padding-bottom:24px; margin-bottom:-24px;
        }
        .fval-discover__track::-webkit-scrollbar { display:none; }

        /* ── kitchen cards ── */
        .fval-kcard {
          flex:0 0 calc((100% - 56px) / 3); scroll-snap-align:start;
          display:flex; flex-direction:column;
          background:var(--white); border:1px solid var(--border);
          text-decoration:none; color:inherit; overflow:hidden;
          transition:transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .fval-kcard:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,0.08); border-color:var(--gold-lt); }
        .fval-kcard__img { width:100%; aspect-ratio:4/3; overflow:hidden; background:#ddd; }
        .fval-kcard__img img { width:100%; height:100%; object-fit:cover; transition:transform 0.55s cubic-bezier(0.25,1,0.5,1); }
        .fval-kcard:hover .fval-kcard__img img { transform:scale(1.06); }
        .fval-kcard__info { padding:24px 28px 28px; display:flex; flex-direction:column; gap:8px; flex:1; }
        .fval-kcard__title { font-family:var(--ff-serif); font-size:26px; font-weight:400; color:var(--charcoal); margin:0; }
        .fval-kcard__sub { font-family:var(--ff-sans); font-size:13px; color:var(--gray); line-height:1.55; margin-bottom:8px; }
        .fval-kcard__link {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:0.06em; text-transform:uppercase; color:var(--gold);
          margin-top:auto; transition:color 0.2s ease;
        }
        .fval-kcard:hover .fval-kcard__link { color:var(--gold-dk); }

        /* ── responsive ── */
        @media (max-width: 991px) {
          .fval-kcard { flex:0 0 calc((100% - 28px) / 2); }
          .fval-detail-row__grid { gap: 30px; }
        }
        @media (max-width: 599px) {
          .fval-kcard              { flex:0 0 85%; }
          .fval-discover__heading  { font-size:32px; }
          .fval-intro__quote       { font-size:28px; }
          .fval-divider__card-heading { font-size:24px; }
          .fval-detail-row__heading, .fval-minimalist__heading { font-size: 26px; }
        }
      `}</style>
    </motion.div>
  )
}
