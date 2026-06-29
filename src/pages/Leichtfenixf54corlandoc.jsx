import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

/* ── HOTSPOTS ─────────────────────────────────────────────────── */
const hotspots = [
  {
    id: 'orlando',
    x: '74.6%', y: '44.8%',
    title: 'ORLANDO-C',
    desc: 'Surface in wood or fantasy décor. The surfaces are embossed and have a natural look. The visible veneer is perfectly aligned over the entire height of the furniture. Design range: CONTINO Colour: KI 345v mountain robinia',
    img: `${BASE}/ef87e1e9-dd9a-4a14-99bf-6aac2566f4a6/a70fdea1-7ea5-46b0-afaf-5147f9085f6f/739719D08134345j18.jpg?focal_point=82.47,74.67&width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'fenix_f45',
    x: '46.8%', y: '60.0%',
    title: 'FENIX F 45',
    desc: 'High-quality laminate front made from original FENIX NTM material. The all-round 45° chamfered laminate edge ensures the special look of the front. Design range: CONTINO Colour: VM 134 olive grey',
    img: `${BASE}/24593ef6-1d8c-424c-960a-26d8a8930a82/cf493e57-eed5-4838-961d-b15fe69819f2/739719D20134345j18.jpg?width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'ceramic',
    x: '60.1%', y: '54.6%',
    title: 'Ceramic Worktop',
    desc: 'Ceramic worktop with a material thickness of 12 mm, colour to match the front in olive grey. Hobs can be flush-fitted.',
    img: `${BASE}/29c6cbe3-8167-4968-b9bb-6811a01b4841/61fcee41-babb-4729-921a-09879a7b7bb8/739719D21134345j18.jpg?width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'fios',
    x: '27.0%', y: '45.5%',
    title: 'FIOS shelving system',
    desc: 'The shelving system with 16 mm metal brackets consists of mounted shelves. In terms of dimensions, the metal brackets are flexible and are available in several colours. The shelves are 16 mm or 28 mm thick and are available in many materials.',
    img: `${BASE}/ef87fb4a-8a15-43d5-a5c4-ab1911e8bcbc/a207ee57-d8b2-4f7b-b676-d7cb6ac95d9e/739719D01134345j18.jpg?width=257&height=169`,
    popDir: 'right',
    link: '/contact',
  }
]

/* ── PROPERTIES ARRAY ─────────────────────────────────────────── */
const PROPERTIES = [
  {
    id: 'anti_fingerprint',
    title: 'Anti-fingerprint technology',
    desc: 'Say goodbye to fingerprints. The ultra-matte surface minimizes visible marks.',
    img: `${BASE}/9b076ab3-7cdf-4077-b460-2936e5950374/4775693b-c202-4782-9797-5f005f456c1d/739719D20134345j18.jpg?width=1360&height=575`,
  },
  {
    id: 'self_healing',
    title: 'Self-healing properties',
    desc: 'Microscopic scratches can partially regenerate with heat, keeping the surface looking new longer.',
    img: `${BASE}/b0bc557e-7ee1-417d-9764-1663acc56b66/b5b1dce7-6460-4e0c-aabc-248c000b51ac/739719D21134345j18.jpg?width=1360&height=575`,
  },
  {
    id: 'durability',
    title: 'Extreme durability',
    desc: 'Resistant to scratches, abrasion, heat, and solvents—ideal for everyday use.',
    img: `${BASE}/ef87e1e9-dd9a-4a14-99bf-6aac2566f4a6/a70fdea1-7ea5-46b0-afaf-5147f9085f6f/739719D08134345j18.jpg?focal_point=82.47,74.67&width=1360&height=575`,
  }
]

/* ── SWATCH TABS ──────────────────────────────────────────────── */
const SWATCHES = [
  {
    id: 1,
    thumb: `${BASE}/3972b70d-1261-4c4e-9d9d-a8c86b94562b/9815879a-096a-4809-9b50-5d46ab1bf5ca/739719D08134345j18.jpg?width=120&height=82`,
    large: `${BASE}/3972b70d-1261-4c4e-9d9d-a8c86b94562b/9815879a-096a-4809-9b50-5d46ab1bf5ca/739719D08134345j18.jpg?width=1360&height=575`,
    alt: 'Fenix F54-C – Walnut cabinet front wood texture',
  },
  {
    id: 2,
    thumb: `${BASE}/26e1680c-7102-48a0-b9a6-269c05f1f720/5f534dbf-0cdf-47f1-93dc-1802e556195f/739719D04134345j18.jpg?width=120&height=82`,
    large: `${BASE}/26e1680c-7102-48a0-b9a6-269c05f1f720/5f534dbf-0cdf-47f1-93dc-1802e556195f/739719D04134345j18.jpg?width=1360&height=575`,
    alt: 'Fenix F54-C – Fios black metal framing shelf detail',
  },
  {
    id: 3,
    thumb: `${BASE}/0fb2a365-b67a-4279-88a2-70c1ea6a7c33/656d85d2-06c9-4986-aeab-91bc03abb29d/739719MO12134345j18.jpg?width=120&height=82`,
    large: `${BASE}/0fb2a365-b67a-4279-88a2-70c1ea6a7c33/656d85d2-06c9-4986-aeab-91bc03abb29d/739719MO12134345j18.jpg?width=1360&height=575`,
    alt: 'Fenix F54-C – LED strip illuminated wall shelves',
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
  },
  {
    title: 'FENIX F45-C VALAIS',
    sub: 'Frosty white Nanotech Fenix laminate meets warm alpine wood fronts.',
    img: `${BASE}/88e64946-236c-4d20-82d1-df8743b017ac/43f74d13-707b-471c-bb8a-11b4b3e07cd5/753283213M01120335NCSj22.jpg?width=1200`,
    to: '/kitchens/leicht/fenix-f45-c-valais-classic-fs',
  }
]

export default function LeichtFenixF54COrlandoC() {
  const [activeHot, setActiveHot] = useState(null)
  const [activeSwatch, setActiveSwatch] = useState(1)
  const [activePropTab, setActivePropTab] = useState('durability')
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.f54-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div className="f54-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* ── SECTION 1 : FULLSCREEN HERO WITH HOTSPOTS ─────────── */}
      <section className="f54-hero">
        <div className="f54-hero__wrap">
          <img
            className="f54-hero__img"
            src={`${BASE}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=2499&height=1620`}
            srcSet={`${BASE}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1279 1279w,
              ${BASE}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1919 1919w,
              ${BASE}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=2499 2499w`}
            sizes="100vw"
            alt="FENIX F54-C | ORLANDO-C Kitchen – LEICHT"
            loading="eager"
          />
          <div className="f54-hero__hs-layer">
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="f54-hs"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveHot(spot.id)}
                onMouseLeave={() => setActiveHot(null)}
                onFocus={() => setActiveHot(spot.id)}
                onBlur={() => setActiveHot(null)}
              >
                <button className="f54-hs__btn" aria-label={spot.title} aria-expanded={activeHot === spot.id}>
                  <span className="f54-hs__ring f54-hs__ring--outer" />
                  <span className="f54-hs__ring f54-hs__ring--mid" />
                  <span className="f54-hs__dot" />
                </button>
                <AnimatePresence>
                  {activeHot === spot.id && (
                    <motion.div
                      className={`f54-hs__pop f54-hs__pop--${spot.popDir}`}
                      initial={{ opacity: 0, scale: 0.95, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="f54-hs__pop-img">
                        <img src={spot.img} alt={spot.title} />
                      </div>
                      <h4 className="f54-hs__pop-title">{spot.title}</h4>
                      <p className="f54-hs__pop-desc">{spot.desc}</p>
                      {spot.link && (
                        <Link to={spot.link} className="f54-hs__pop-link">
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
      <section className="f54-intro">
        <div className="f54-intro__inner container">
          <div className="f54-intro__text">
            <nav className="f54-breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span>/</span>
              <span>Fenix f54-c Orlando-C</span>
            </nav>
            <p className="f54-intro__tag">FENIX F 45-C | ORLANDO-C</p>
            <p className="f54-intro__quote">Timeless aesthetics meets innovative technology for maximum functionality and quality.</p>
          </div>
          <div className="f54-intro__imgs">
            <div className="f54-intro__img-wide">
              <img
                src={`${BASE}/e58ad5a0-afac-45e0-8c65-33bcf1ade17a/8477de58-d81f-41e7-bd87-e98de394f752/739719D14134345j18.jpg?width=833&height=714`}
                alt="FENIX F54-C ORLANDO-C – olive grey drawer detail"
                loading="lazy"
              />
            </div>
            <div className="f54-intro__img-tall">
              <img
                src={`${BASE}/a1ba6d37-479e-4ab6-993e-a4d46fd0a92f/a5e849a5-46e1-4d1c-8543-484aae030e9b/739719MO01134345j18.jpg?width=833&height=1054`}
                alt="FENIX F54-C ORLANDO-C – wood grain tall units vertical view"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : Divider card (STATE-OF-THE-ART SURFACE) ── */}
      <section className="f54-divider">
        <div className="f54-divider__bg">
          <img
            src={`${BASE}/9b076ab3-7cdf-4077-b460-2936e5950374/4775693b-c202-4782-9797-5f005f456c1d/739719D20134345j18.jpg?width=1439&height=745`}
            alt="FENIX F54-C ORLANDO-C – modern kitchen layouts view"
            loading="lazy"
            className="f54-divider__wide-img"
          />
        </div>
        <div className="f54-divider__grid">
          <div className="fval-divider__card">
            <span className="f54-divider__card-eyebrow">State-of-the-art Nanotech Surface FENIX F45</span>
            <h2 className="f54-divider__card-heading">Minimalism meets functional elegance</h2>
            <span className="f54-divider__card-sub">Anti-fingerprint, self-healing, durable</span>
            <p className="f54-divider__card-body">The advanced FENIX Nanotech surface combines innovative technology with elegant design. Its deep matte finish absorbs light and offers a luxurious, velvety feel. Designed for the highest demands in modern kitchens, it is durable, easy to maintain, and pleasant to the touch. The balance of aesthetics and functionality makes it the perfect choice for sophisticated kitchen design.</p>
          </div>
          <div className="f54-divider__portrait">
            <img
              src={`${BASE}/b0bc557e-7ee1-417d-9764-1663acc56b66/b5b1dce7-6460-4e0c-aabc-248c000b51ac/739719D21134345j18.jpg?width=833&height=988`}
              alt="FENIX F54-C ORLANDO-C – ceramic countertop close-up"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : PROPERTIES INTERACTIVE TAB SWITCHER ────── */}
      <section className="f54-props-sec">
        <div className="container">
          <div className="f54-props-sec__display">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePropTab}
                src={PROPERTIES.find((p) => p.id === activePropTab)?.img}
                alt={PROPERTIES.find((p) => p.id === activePropTab)?.title}
                className="f54-props-sec__img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className="f54-props-sec__tabs">
            {PROPERTIES.map((prop) => (
              <button
                key={prop.id}
                onClick={() => setActivePropTab(prop.id)}
                className={`f54-prop-tab${activePropTab === prop.id ? ' f54-prop-tab--active' : ''}`}
              >
                <div className="f54-prop-tab__line" />
                <h3 className="f54-prop-tab__title">{prop.title}</h3>
                <p className="f54-prop-tab__desc">{prop.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : MODERN PANEL SHELF (OVERLAY) ──────────── */}
      <section className="f54-overlay-sec">
        <div className="f54-overlay-sec__bg">
          <img
            src={`${BASE}/cbcd200f-ad27-47ac-8b50-27a1fd14de82/2da59a43-d7e6-41ab-81cb-e0c1ce8a9dab/739719D03134345j18.jpg?width=1440`}
            alt="FENIX F54-C – modern shelf paneling detail"
            loading="lazy"
          />
        </div>
        <div className="container f54-overlay-sec__content">
          <div className="f54-overlay-sec__card f54-overlay-sec__card--right">
            <span className="f54-overlay-sec__tag">Timeless elegance meets functional design</span>
            <h2 className="f54-overlay-sec__heading">Modern panel shelf for stylish kitchens</h2>
            <span className="f54-overlay-sec__sub">Open, cozy, and individually customizable</span>
            <p className="f54-overlay-sec__desc">Open and homely with plenty of room for accessories. Shelving is an elementary element of modern kitchen architecture – it is both fashionable and yet timelessly elegant. Shelving makes it possible to plan kitchens as individual, open rooms which are part of the living area, and to make an effective contrast to closed surfaces and areas. As a system, shelving can be planned in size and material to suit personal requirements.</p>
            <Link to="/contact" className="f54-pill-btn">
              <span>Discover</span>
              <span className="f54-pill-btn__circle">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#343e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : SWATCH IMAGE SWITCHER (COLOR HARMONY) ───── */}
      <section className="f54-minimalist">
        <div className="container">
          <div className="f54-minimalist__img-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSwatch}
                src={SWATCHES.find((s) => s.id === activeSwatch)?.large}
                alt={SWATCHES.find((s) => s.id === activeSwatch)?.alt}
                className="f54-minimalist__img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className="f54-minimalist__footer">
            <div className="f54-minimalist__text">
              <h2 className="f54-minimalist__heading">Harmony through colors and materials</h2>
              <p className="f54-minimalist__desc" style={{ marginBottom: '24px' }}>
                A feeling of harmony and vitality is guaranteed when select materials and colours interact, when they complement and showcase one another. Dark, finely structured wood and natural anthracite or grey tones exude not only perfect harmony, but also timeless beauty.
              </p>
              <Link to="/contact" className="f54-discover-btn">
                Discover →
              </Link>
            </div>
            <div className="f54-minimalist__swatches">
              {SWATCHES.map((sw) => (
                <button
                  key={sw.id}
                  onClick={() => setActiveSwatch(sw.id)}
                  className={`f54-swatch${activeSwatch === sw.id ? ' f54-swatch--active' : ''}`}
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
      <section className="f54-discover">
        <div className="container">
          <div className="f54-discover__header">
            <div>
              <h2 className="f54-discover__heading">Discover Kitchens</h2>
              <p className="f54-discover__sub">Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.</p>
            </div>
            <div className="f54-discover__actions">
              <Link to="/kitchens/leicht" className="f54-discover__all">All Kitchens →</Link>
              <div className="f54-discover__nav">
                <button className="f54-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="f54-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="f54-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="f54-kcard">
                <div className="f54-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="f54-kcard__info">
                  <h3 className="f54-kcard__title">{slide.title}</h3>
                  <p className="f54-kcard__sub">{slide.sub}</p>
                  <span className="f54-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ─────────────────────────────────────────── */}
      <style>{`
        .f54-page {
          --cream:    #f3f4f2;
          --cream-dk: #e2e4e0;
          --charcoal: #3a463e;
          --ch-soft:  #4f5c53;
          --gold:     #343e38;
          --gold-dk:  #1f2622;
          --gold-lt:  #8c9a92;
          --border:   #ccd4d0;
          --white:    #ffffff;
          --gray:     #6b7b72;
          --ff-serif: var(--font-serif, 'Georgia', serif);
          --ff-sans:  var(--font-sans, system-ui, sans-serif);
          background: var(--cream);
          color: var(--charcoal);
          overflow-x: hidden;
        }
        .f54-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 767px)  { .f54-page .container { padding: 0 16px; } }
        @media (max-width: 1023px) { .f54-page .container { padding: 0 32px; } }

        /* ── hero ── */
        .f54-hero { position: relative; width: 100%; overflow: hidden; }
        .f54-hero__wrap {
          position: relative; width: 100%;
          aspect-ratio: 3/2; max-height: 100vh; min-height: 56vw;
        }
        @media (min-width: 1200px) {
          .f54-hero__wrap { aspect-ratio: 2048/1239; }
        }
        .f54-hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .f54-hero__hs-layer { position: absolute; inset: 0; width: 100%; height: 100%; }

        /* ── hotspots ── */
        .f54-hs { position: absolute; transform: translate(-50%,-50%); z-index: 20; }
        .f54-hs__btn {
          position: relative; width: 28px; height: 28px;
          border-radius: 50%; background: var(--white);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,.15);
        }
        .f54-hs__dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--charcoal); position: relative; z-index: 2;
        }
        .f54-hs__ring {
          position: absolute; border-radius: 50%;
          left: 50%; top: 50%; transform: translate(-50%,-50%);
        }
        .f54-hs__ring--mid {
          width: 36px; height: 36px; background: rgba(255,255,255,.30);
          animation: f54-pulse-mid 2s ease-in-out infinite;
        }
        .f54-hs__ring--outer {
          width: 44px; height: 44px; border: 1px solid rgba(255,255,255,.15);
          animation: f54-pulse-outer 2s ease-in-out infinite; animation-delay: 0.3s;
        }
        @keyframes f54-pulse-mid   { 0%,100%{opacity:.5;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)} }
        @keyframes f54-pulse-outer { 0%,100%{opacity:.3} 50%{opacity:.6} }

        .f54-hs__pop {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 280px; background: rgba(255,255,255,.93);
          backdrop-filter: blur(8px); border: 1px solid var(--border);
          border-radius: 8px; padding: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
          z-index: 40; pointer-events: none;
        }
        .f54-hs__pop--right { left: 38px; }
        .f54-hs__pop--left  { right: 38px; }
        .f54-hs__pop-img { width:100%; aspect-ratio:257/169; overflow:hidden; border-radius:4px; margin-bottom:10px; }
        .f54-hs__pop-img img { width:100%; height:100%; object-fit:cover; }
        .f54-hs__pop-title { font-family:var(--ff-sans); font-size:15px; font-weight:600; color:var(--charcoal); margin:0 0 6px; }
        .f54-hs__pop-desc  { font-family:var(--ff-sans); font-size:12px; line-height:1.55; color:var(--ch-soft); margin:0 0 8px; }
        .f54-hs__pop-link  { font-family:var(--ff-sans); font-size:11px; font-weight:600; color:var(--gold); text-decoration:none; }

        /* ── intro ── */
        .f54-intro { padding: 80px 0 100px; background: var(--cream); }
        .f54-intro__inner { display: grid; grid-template-columns: 1fr; gap: 40px; }
        @media (min-width: 992px) {
          .f54-intro__inner { grid-template-columns: 1fr 2fr; gap: 60px; align-items: flex-start; }
        }
        .f54-breadcrumb {
          display:flex; flex-wrap:wrap; gap:6px;
          font-family:var(--ff-sans); font-size:12px; color:var(--gray); margin-bottom:28px;
        }
        .f54-breadcrumb a { color:var(--charcoal); text-decoration:none; }
        .f54-breadcrumb a:hover { color:var(--gold); }
        .f54-breadcrumb span { color:var(--gray); }
        .f54-intro__tag {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:.14em; text-transform:uppercase;
          color:rgba(28,34,36,.5); margin-bottom:16px;
        }
        .f54-intro__quote {
          font-family:var(--ff-serif); font-size:36px; line-height:1.25;
          font-weight:300; color:var(--charcoal); margin:0;
        }
        @media (min-width: 1280px) { .f54-intro__quote { font-size:42px; } }
        
        .f54-intro__imgs { display:grid; grid-template-columns:1fr; gap:16px; margin-top:20px; }
        @media (min-width: 768px) { .f54-intro__imgs { grid-template-columns:1fr 1fr; gap:20px; align-items:stretch; } }
        .f54-intro__img-wide,
        .f54-intro__img-tall { border-radius:12px; overflow:hidden; aspect-ratio:3/2; }
        .f54-intro__img-wide img,
        .f54-intro__img-tall img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.5s ease; }
        .f54-intro__img-wide:hover img,
        .f54-intro__img-tall:hover img { transform:scale(1.04); }

        /* ── divider section ── */
        .f54-divider {
          display:flex; flex-direction:column; gap:24px;
          padding:80px 0; background:var(--cream-dk); border-top:1px solid var(--border);
        }
        @media (min-width: 992px) { .f54-divider { gap:48px; } }
        .f54-divider__bg { width:100%; padding:0 16px; }
        @media (min-width: 768px) { .f54-divider__bg { padding:0 32px; } }
        @media (min-width: 992px) { .fval-divider__bg { padding:0 40px; } }
        .f54-divider__wide-img {
          width:100%; border-radius:12px; overflow:hidden;
          display:block; object-fit:cover; aspect-ratio:16/9;
        }
        @media (min-width: 992px) { .f54-divider__wide-img { aspect-ratio: 1439/745; } }
        .f54-divider__grid { display:grid; grid-template-columns:1fr; gap:20px; padding:0 16px; }
        @media (min-width: 768px) { .f54-divider__grid { grid-template-columns:5fr 3fr; gap:24px; padding:0 32px; } }
        @media (min-width: 992px) { .f54-divider__grid { grid-template-columns:7fr 5fr; gap:32px; padding:0 40px; } }
        .fval-divider__card {
          background: var(--charcoal); border-radius:12px; padding:32px 24px;
          color:var(--white); display:flex; flex-direction:column; gap:12px;
        }
        @media (min-width: 992px) { .fval-divider__card { padding:60px; min-height:500px; justify-content:center; } }
        .f54-divider__card-eyebrow {
          font-family:var(--ff-sans); font-size:12px; font-weight:500;
          text-transform:uppercase; letter-spacing:.1em; color:rgba(255,255,255,.5);
        }
        .f54-divider__card-heading {
          font-family:var(--ff-sans); font-size:28px; font-weight:500;
          color:var(--white); margin:0; line-height:1.2;
        }
        @media (min-width: 834px)  { .f54-divider__card-heading { font-size:36px; } }
        @media (min-width: 1440px) { .f54-divider__card-heading { font-size:48px; } }
        .f54-divider__card-sub {
          font-family:var(--ff-sans); font-size:14px; font-weight:600;
          color: var(--white); opacity: 0.85; display:block;
        }
        @media (min-width: 1280px) { .f54-divider__card-sub { font-size:18px; } }
        .f54-divider__card-body {
          font-family:var(--ff-sans); font-size:14px; line-height:1.7;
          color:rgba(255,255,255,.75); margin:8px 0 0;
        }
        @media (min-width: 1280px) { .f54-divider__card-body { font-size:16px; } }
        .f54-divider__portrait { border-radius:12px; overflow:hidden; aspect-ratio:833/1137; }
        @media (min-width: 768px) { .f54-divider__portrait { aspect-ratio:auto; height:100%; } }
        .f54-divider__portrait img { width:100%; height:100%; object-fit:cover; display:block; }

        /* ── discover link buttons ── */
        .f54-discover-btn {
          display: inline-block;
          font-family: var(--ff-sans); font-size: 13px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: var(--charcoal); text-decoration: none;
          border-bottom: 2px solid var(--charcoal);
          padding-bottom: 4px; width: fit-content;
          transition: color 0.25s, border-color 0.25s;
        }
        .f54-discover-btn:hover {
          color: var(--gray);
          border-color: var(--gray);
        }

        /* ── overlay section ── */
        .f54-overlay-sec {
          position: relative; width: 100%; overflow: hidden;
          display: flex; align-items: center; min-height: 580px;
          padding: 40px 0; background: var(--cream);
        }
        @media (min-width: 992px) {
          .f54-overlay-sec { min-height: 720px; padding: 50px 0; }
        }
        .f54-overlay-sec__bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          padding: 0 16px;
        }
        @media (min-width: 768px) { .f54-overlay-sec__bg { padding: 0 32px; } }
        @media (min-width: 992px) { .f54-overlay-sec__bg { padding: 0 40px; } }
        .f54-overlay-sec__bg img {
          width: 100%; height: 100%; object-fit: cover;
          border-radius: 12px; display: block;
        }
        .f54-overlay-sec__content {
          position: relative; z-index: 10;
          display: flex; width: 100%; height: 100%;
        }
        .f54-overlay-sec__card {
          background: rgba(34, 51, 59, 0.45);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px; padding: 40px 32px;
          color: var(--white); width: 100%; max-width: 520px;
          display: flex; flex-direction: column; gap: 14px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.15);
        }
        @media (min-width: 992px) {
          .f54-overlay-sec__card { padding: 56px 48px; }
          .f54-overlay-sec__card--left { margin-right: auto; margin-left: 20px; }
          .f54-overlay-sec__card--right { margin-left: auto; margin-right: 20px; }
        }
        .f54-overlay-sec__tag {
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.7);
        }
        .f54-overlay-sec__heading {
          font-family: var(--ff-sans); font-size: 26px; font-weight: 500;
          line-height: 1.25; margin: 0; color: var(--white);
        }
        @media (min-width: 768px) { .f54-overlay-sec__heading { font-size: 32px; } }
        .f54-overlay-sec__sub {
          font-family: var(--ff-sans); font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.9);
        }
        .f54-overlay-sec__desc {
          font-family: var(--ff-sans); font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,0.85); margin: 0;
        }
        
        /* ── white pill button ── */
        .f54-pill-btn {
          display: inline-flex; align-items: center; gap: 14px;
          background: var(--white); color: var(--charcoal);
          padding: 8px 8px 8px 24px; border-radius: 9999px;
          font-family: var(--ff-sans); font-size: 13px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.08em;
          text-decoration: none; width: fit-content; margin-top: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: background 0.25s, transform 0.25s, color 0.25s;
        }
        .f54-pill-btn:hover {
          background: var(--cream-dk);
          transform: translateY(-2px);
          color: var(--charcoal);
        }
        .f54-pill-btn__circle {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--charcoal); display: flex;
          align-items: center; justify-content: center;
        }

        /* ── interactive properties section ── */
        .f54-props-sec { padding: 80px 0; background: var(--white); border-top: 1px solid var(--border); }
        .f54-props-sec__display {
          width: 100%; border-radius: 12px; overflow: hidden;
          aspect-ratio: 16/9; position: relative; margin-bottom: 40px;
          border: 1px solid var(--border);
        }
        @media (min-width: 768px) { .f54-props-sec__display { aspect-ratio: 762/343; } }
        @media (min-width: 992px) { .f54-props-sec__display { aspect-ratio: 1360/575; } }
        .f54-props-sec__img { width: 100%; height: 100%; object-fit: cover; display: block; position: absolute; inset: 0; }
        .f54-props-sec__tabs {
          display: grid; grid-template-columns: 1fr; gap: 32px;
        }
        @media (min-width: 768px) {
          .f54-props-sec__tabs { grid-template-columns: repeat(3, 1fr); gap: 40px; }
        }
        .f54-prop-tab {
          background: none; border: none; padding: 0; margin: 0;
          text-align: left; cursor: pointer; display: flex; flex-direction: column;
          outline: none; transition: transform 0.25s ease;
        }
        .f54-prop-tab:hover { transform: translateY(-2px); }
        .f54-prop-tab__line {
          height: 3px; width: 100%; background: var(--border);
          margin-bottom: 24px; transition: background-color 0.3s;
        }
        .f54-prop-tab--active .f54-prop-tab__line {
          background: var(--charcoal);
        }
        .f54-prop-tab__title {
          font-family: var(--ff-sans); font-size: 16px; font-weight: 500;
          color: var(--gray); margin: 0 0 10px; transition: color 0.3s, font-weight 0.3s;
        }
        .f54-prop-tab--active .f54-prop-tab__title {
          color: var(--charcoal); font-weight: 600;
        }
        .f54-prop-tab__desc {
          font-family: var(--ff-sans); font-size: 14px; line-height: 1.6;
          color: rgba(58, 70, 62, 0.4); margin: 0; transition: color 0.3s;
        }
        .f54-prop-tab--active .f54-prop-tab__desc {
          color: var(--ch-soft);
        }

        /* ── Swatch switcher / accessory details ── */
        .f54-minimalist { padding:80px 0; background:var(--white); border-top:1px solid var(--border); }
        .f54-minimalist__img-wrap { width:100%; border-radius:12px; overflow:hidden; aspect-ratio:1; position:relative; }
        @media (min-width: 768px) { .f54-minimalist__img-wrap { aspect-ratio:762/343; } }
        @media (min-width: 992px) { .f54-minimalist__img-wrap { aspect-ratio:1360/575; } }
        .f54-minimalist__img { width:100%; height:100%; object-fit:cover; display:block; position:absolute; inset:0; }
        .f54-minimalist__footer { display:flex; flex-direction:column; gap:24px; margin-top:24px; }
        @media (min-width: 992px) { 
          .f54-minimalist__footer { flex-direction:row; align-items:flex-start; justify-content:space-between; gap:48px; } 
        }
        .f54-minimalist__text { flex: 1; }
        .f54-minimalist__heading {
          font-family:var(--ff-serif); font-size:32px; font-weight:400;
          color:var(--charcoal); margin:0 0 12px;
        }
        .f54-minimalist__desc {
          font-family:var(--ff-sans); font-size:15px; line-height:1.75;
          color:var(--ch-soft); margin:0;
        }
        .f54-minimalist__swatches { display:flex; gap:10px; flex-shrink:0; margin-top:12px; }
        @media (min-width: 992px) { .f54-minimalist__swatches { margin-top: 0; } }
        .f54-swatch {
          width:90px; height:60px; border:2px solid transparent; border-radius:4px;
          overflow:hidden; padding:0; cursor:pointer; background:none; outline:none;
          transition:border-color .25s, transform .25s;
        }
        @media (min-width: 834px) { .f54-swatch { width:120px; height:82px; } }
        .f54-swatch:hover { transform:translateY(-2px); border-color:var(--gold-lt); }
        .f54-swatch--active { border-color:var(--gold); }
        .f54-swatch img { width:100%; height:100%; object-fit:cover; display:block; }

        /* ── discover kitchens ── */
        .f54-discover {
          background:var(--cream-dk); padding:100px 0 120px;
          overflow:hidden; border-top:1px solid var(--border);
        }
        .f54-discover__header {
          display:flex; align-items:flex-end; justify-content:space-between;
          gap:32px; margin-bottom:56px; flex-wrap:wrap;
        }
        .f54-discover__heading {
          font-family:var(--ff-serif); font-size:42px; font-weight:400;
          color:var(--charcoal); margin-bottom:12px;
        }
        .f54-discover__sub {
          font-family:var(--ff-sans); font-size:14px; color:var(--gray);
          line-height:1.6; max-width:420px;
        }
        .f54-discover__actions { display:flex; align-items:center; gap:24px; }
        .f54-discover__all {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:0.1em; text-transform:uppercase; color:var(--gold);
          text-decoration:none; white-space:nowrap;
          border:1px solid var(--gold); padding:10px 24px;
          transition:background 0.25s ease, color 0.25s ease;
        }
        .f54-discover__all:hover { background:var(--gold); color:#fff; }
        .f54-discover__nav { display:flex; gap:12px; }
        .f54-discover__nav-btn {
          width:42px; height:42px; border-radius:50%;
          border:1px solid var(--border); background:var(--white);
          color:var(--charcoal); display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .f54-discover__nav-btn:hover { border-color:var(--gold); color:var(--gold); background:var(--cream); }
        .f54-discover__track {
          display:flex; gap:28px; overflow-x:auto; scroll-snap-type:x mandatory;
          -webkit-overflow-scrolling:touch; scrollbar-width:none;
          padding-bottom:24px; margin-bottom:-24px;
        }
        .f54-discover__track::-webkit-scrollbar { display:none; }

        /* ── kitchen cards ── */
        .f54-kcard {
          flex:0 0 calc((100% - 56px) / 3); scroll-snap-align:start;
          display:flex; flex-direction:column;
          background:var(--white); border:1px solid var(--border);
          text-decoration:none; color:inherit; overflow:hidden;
          transition:transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .f54-kcard:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,0.08); border-color:var(--gold-lt); }
        .f54-kcard__img { width:100%; aspect-ratio:4/3; overflow:hidden; background:#ddd; }
        .f54-kcard__img img { width:100%; height:100%; object-fit:cover; transition:transform 0.55s cubic-bezier(0.25,1,0.5,1); }
        .f54-kcard:hover .f54-kcard__img img { transform:scale(1.06); }
        .f54-kcard__info { padding:24px 28px 28px; display:flex; flex-direction:column; gap:8px; flex:1; }
        .f54-kcard__title { font-family:var(--ff-serif); font-size:26px; font-weight:400; color:var(--charcoal); margin:0; }
        .f54-kcard__sub { font-family:var(--ff-sans); font-size:13px; color:var(--gray); line-height:1.55; margin-bottom:8px; }
        .f54-kcard__link {
          font-family:var(--ff-sans); font-size:11px; font-weight:600;
          letter-spacing:0.06em; text-transform:uppercase; color:var(--gold);
          margin-top:auto; transition:color 0.2s ease;
        }
        .f54-kcard:hover .f54-kcard__link { color:var(--gold-dk); }

        /* ── responsive ── */
        @media (max-width: 991px) {
          .f54-kcard { flex:0 0 calc((100% - 28px) / 2); }
          .f54-overlay-sec { min-height: 620px; }
        }
        @media (max-width: 599px) {
          .f54-kcard              { flex:0 0 85%; }
          .f54-discover__heading  { font-size:32px; }
          .f54-intro__quote       { font-size:28px; }
          .f54-divider__card-heading { font-size:24px; }
          .f54-overlay-sec__heading, .f54-minimalist__heading { font-size: 26px; }
        }
      `}</style>
    </motion.div>
  )
}
