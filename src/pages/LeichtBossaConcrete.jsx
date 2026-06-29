import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'
const ILLUS_BASE = 'https://assets.caisy.io/assets/75c43b7c-42d5-4e2f-aab1-74e182f03c94'

/* ── HOTSPOTS ── exact positions from live site ─────────────── */
const hotspots = [
  {
    id: 'vero',
    x: '68.8%', y: '41.14%',
    title: 'VERO glass display cabinets',
    desc: 'The VERO illuminated glass cabinets are available in three different frame colours and with a wide range of interior fittings. They are also available as base, top or tall cabinets.',
    img: `${BASE}/1ed2bc6f-d15b-4796-b3d9-e4c401513c57/ac96da81-bbb5-4276-930c-686be19ae3cd/744293D06352192j22.jpg?width=257&height=169`,
    popDir: 'right',
  },
  {
    id: 'bossa_surface',
    x: '32.6%', y: '62.76%',
    title: 'BOSSA surface',
    desc: 'The characteristic BOSSA surface of protruding, linear rods creates a uniform overall appearance with a delicate, three-dimensional effect.',
    img: `${BASE}/e1053de0-ef53-4da8-83f7-62944aed450c/01816336-4337-4de1-a28a-5d828d227444/744293Mo05352192j22.jpg?width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'harmonious',
    x: '52%', y: '56.46%',
    title: 'Harmonious material composition',
    desc: 'While the walnut wood from BOSSA radiates warmth, the natural stone ROCCA in Taj Mahal adds a balancing coolness.',
    img: `${BASE}/6b1c8de4-a52e-448e-9ffb-452db581d939/25c3c39b-ed81-4705-a702-9d279fb69af5/744293Mo04352192j22.jpg?width=257&height=169`,
    popDir: 'right',
  },
  {
    id: 'concrete_surface',
    x: '34.8%', y: '41.89%',
    title: 'Concrete surface',
    desc: 'Special concrete, available in different colours, is applied by hand and gives the surface an authentic concrete look.',
    img: `${BASE}/c96ea508-6049-45c2-b6a0-96bb12ccf095/18a7406b-0d46-44bf-b8cb-9d95cb4ff0bd/744293D01352192j22.jpg?width=257&height=169`,
    popDir: 'left',
  },
  {
    id: 'm8_frame',
    x: '43.5%', y: '62%',
    title: 'M8 interior frame',
    desc: 'The M8 frame, which is only 8 mm thick, is optionally available for internal drawers and internal pull-outs, giving a very minimalist and elegant overall impression.',
    img: `${BASE}/43bcfde3-ad1d-4740-b305-d07b71bf90e8/3fad9af8-128e-4f03-8fd1-ce5a6b96f868/744293Mo07352192j22.jpg?width=257&height=169`,
    popDir: 'right',
  },
]

/* ── MATERIAL SWATCHES – 4 tabs, exact images from live ─────── */
const SWATCHES = [
  {
    id: 1,
    thumb: `${BASE}/caafd35e-08e0-4e9b-a72b-a14671494d27/87f621c9-188b-41d8-a5b7-0e63f35a0e01/744293D03352192j22.jpg?focal_point=48.96,38.61&width=120&height=73`,
    large: `${BASE}/caafd35e-08e0-4e9b-a72b-a14671494d27/87f621c9-188b-41d8-a5b7-0e63f35a0e01/744293D03352192j22.jpg?focal_point=48.96,38.61&width=1440&height=609`,
    alt: 'BOSSA walnut surface',
  },
  {
    id: 2,
    thumb: `${BASE}/77f676b0-ffa3-47bb-abe4-b05531331d0e/98f77b12-fa88-4c3e-a8cb-e5ed4087f6d9/744293Mo07352192j22.jpg?width=120&height=73`,
    large: `${BASE}/77f676b0-ffa3-47bb-abe4-b05531331d0e/98f77b12-fa88-4c3e-a8cb-e5ed4087f6d9/744293Mo07352192j22.jpg?width=1440&height=609`,
    alt: 'Open shelving with walnut',
  },
  {
    id: 3,
    thumb: `${BASE}/fdf3418e-00c3-47ac-9c3c-2d761260c782/4a1f7c93-c84d-4ad1-9c5e-70db971eb2ff/744293Mo08352192j22.jpg?width=120&height=73`,
    large: `${BASE}/fdf3418e-00c3-47ac-9c3c-2d761260c782/4a1f7c93-c84d-4ad1-9c5e-70db971eb2ff/744293Mo08352192j22.jpg?width=1440&height=609`,
    alt: 'Concrete and island combination',
  },
  {
    id: 4,
    thumb: `${BASE}/918c8f41-8a97-4485-a7e4-c1480c5038d3/12b5dcea-726b-4941-afbf-92c97df1ef90/744293Mo09352192j22.jpg?width=120&height=73`,
    large: `${BASE}/918c8f41-8a97-4485-a7e4-c1480c5038d3/12b5dcea-726b-4941-afbf-92c97df1ef90/744293Mo09352192j22.jpg?width=1440&height=609`,
    alt: 'Full room sideboard view',
  },
]

/* ── DISCOVER SLIDER SLIDES ──────────────────────────────────── */
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
  }
]


export default function LeichtBossaConcrete() {
  const [activeHot, setActiveHot] = useState(null)
  const [activeSwatch, setActiveSwatch] = useState(1)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.concrete-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div className="bc-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* ── SECTION 1 : FULLSCREEN HERO ──────────────────────── */}
      <section className="bc-hero">
        <div className="bc-hero__wrap">
          <img
            className="bc-hero__img"
            src={`${BASE}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=2499&height=1666`}
            srcSet={`${BASE}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1279&height=853 1279w,
              ${BASE}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1919&height=1279 1919w,
              ${BASE}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=2499&height=1666 2499w`}
            sizes="100vw"
            alt="BOSSA CONCRETE Kitchen – LEICHT"
            loading="eager"
          />
          {/* hotspot overlay */}
          <div className="bc-hero__hs-layer" style={{ aspectRatio: '9239/6159' }}>
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="bc-hs"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveHot(spot.id)}
                onMouseLeave={() => setActiveHot(null)}
                onFocus={() => setActiveHot(spot.id)}
                onBlur={() => setActiveHot(null)}
              >
                <button className="bc-hs__btn" aria-label={spot.title} aria-expanded={activeHot === spot.id}>
                  <span className="bc-hs__ring bc-hs__ring--outer" />
                  <span className="bc-hs__ring bc-hs__ring--mid" />
                  <span className="bc-hs__dot" />
                </button>
                <AnimatePresence>
                  {activeHot === spot.id && (
                    <motion.div
                      className={`bc-hs__pop bc-hs__pop--${spot.popDir}`}
                      initial={{ opacity: 0, scale: 0.95, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="bc-hs__pop-img">
                        <img src={spot.img} alt={spot.title} />
                      </div>
                      <h4 className="bc-hs__pop-title">{spot.title}</h4>
                      <p className="bc-hs__pop-desc">{spot.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : INTRO + TWO IMAGES ──────────────────── */}
      <section className="bc-intro">
        <div className="bc-intro__inner container">
          <div className="bc-intro__text">
            <nav className="bc-breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span>/</span>
              <span>Bossa Concrete</span>
            </nav>
            <p className="bc-intro__tag">BOSSA | CONCRETE</p>
            <p className="bc-intro__quote">A stylish combination of textured wood and concrete for modern, architectural kitchen spaces.</p>
          </div>
          <div className="bc-intro__imgs">
            {/* Image 1 – kitchen countertop detail */}
            <div className="bc-intro__img-wide">
              <img
                src={`${BASE}/6a38e89c-2284-4f32-b853-f89bef6dac45/39b194f5-ff6a-4c01-b645-6cacd2cf8aea/744293Mo04352192j22.jpg?width=720&height=480`}
                alt="BOSSA CONCRETE kitchen countertop detail"
                loading="lazy"
              />
            </div>
            {/* Image 2 – AdobeStock landscape (original Leicht pairing) */}
            <div className="bc-intro__img-tall">
              <img
                src={`${BASE}/8501a325-ad55-4c1e-a7e8-3fa2ac5793b1/ca8b44ba-33f4-45ff-8b11-d20120038492/AdobeStock514189127.jpeg?width=720&height=480`}
                alt="Architectural landscape"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 : FORM, FUNCTION & LIVING SPACE ────────
           Full-width image + frosted glass card overlay (bottom-left on desktop)
      ── */}
      <section className="bc-form-fn">
        <div className="bc-form-fn__img-wrap">
          <img
            src={`${BASE}/550a20f9-737e-42ca-ab6a-d26b05121420/cb466416-b2d2-42c6-85c3-580543ba8ebf/744293M05352192j22.jpg?width=1439&height=890`}
            srcSet={`${BASE}/550a20f9-737e-42ca-ab6a-d26b05121420/cb466416-b2d2-42c6-85c3-580543ba8ebf/744293M05352192j22.jpg?width=833&height=821 833w,
              ${BASE}/550a20f9-737e-42ca-ab6a-d26b05121420/cb466416-b2d2-42c6-85c3-580543ba8ebf/744293M05352192j22.jpg?width=1279&height=1141 1279w,
              ${BASE}/550a20f9-737e-42ca-ab6a-d26b05121420/cb466416-b2d2-42c6-85c3-580543ba8ebf/744293M05352192j22.jpg?width=1439&height=890 1439w`}
            sizes="100vw"
            alt="Form, Function, and Living Space"
            loading="lazy"
            className="bc-form-fn__img"
          />
        </div>
        {/* frosted glass card */}
        <div className="bc-form-fn__card">
          <h2 className="bc-form-fn__heading">Form, Function, and Living Space</h2>
          <p className="bc-form-fn__body">Hidden architecture, open spaces – Discover the perfect symbiosis of design and function.</p>
        </div>
      </section>

      {/* ── SECTION 4 : THE PERFECT MATERIAL COMBINATION ─────
           Split: LEFT = tall portrait image, RIGHT = heading + paragraph
      ── */}
      <section className="bc-material">
        <div className="bc-material__img">
          <img
            src={`${BASE}/3028e327-c5e0-47d2-9e43-ad25b1f1c8a7/c6e07b41-9add-4a5f-8283-3f411b048dc0/744293D02352192j22.jpg?width=720&height=884`}
            srcSet={`${BASE}/3028e327-c5e0-47d2-9e43-ad25b1f1c8a7/c6e07b41-9add-4a5f-8283-3f411b048dc0/744293D02352192j22.jpg?width=833&height=1217 833w,
              ${BASE}/3028e327-c5e0-47d2-9e43-ad25b1f1c8a7/c6e07b41-9add-4a5f-8283-3f411b048dc0/744293D02352192j22.jpg?width=1279&height=1033 1279w,
              ${BASE}/3028e327-c5e0-47d2-9e43-ad25b1f1c8a7/c6e07b41-9add-4a5f-8283-3f411b048dc0/744293D02352192j22.jpg?width=720&height=884 1919w`}
            sizes="(max-width:991px) 100vw, 50vw"
            alt="The Perfect Material Combination"
            loading="lazy"
          />
        </div>
        <div className="bc-material__text">
          <span className="bc-material__eyebrow">Harmonious Material and Color Composition</span>
          <h2 className="bc-material__heading">The Perfect Material Combination</h2>
          <span className="bc-material__sub">Wood Meets Stone – BOSSA walnut and CONCRETE</span>
          <p className="bc-material__body">The design impresses with the exceptional combination of BOSSA walnut and CONCRETE. The warm charm of walnut wood and the cool elegance of ROCCA taj mahal sanded natural stone create a balanced harmony between a cozy atmosphere and functionality. While the wood radiates warmth and naturalness, CONCRETE adds a modern accent with its rough texture and minimalist, contemporary look. This perfect material combination gives any space depth and character.</p>
        </div>
      </section>

      {/* ── SECTION 5 : HARMONY OF FUNCTION & DESIGN ─────────
           Full-width hero img + side portrait + dark overlay card (left)
      ── */}
      <section className="bc-harmony">
        <div className="bc-harmony__bg">
          <img
            src={`${BASE}/5a19bfe3-6768-48e5-9585-6cfc8400d766/df36aefa-8473-4fb5-9298-40b69807bf7d/744293D05352192j22.jpg?width=1439&height=745`}
            srcSet={`${BASE}/5a19bfe3-6768-48e5-9585-6cfc8400d766/df36aefa-8473-4fb5-9298-40b69807bf7d/744293D05352192j22.jpg?width=833&height=738 833w,
              ${BASE}/5a19bfe3-6768-48e5-9585-6cfc8400d766/df36aefa-8473-4fb5-9298-40b69807bf7d/744293D05352192j22.jpg?width=1279&height=1032 1279w,
              ${BASE}/5a19bfe3-6768-48e5-9585-6cfc8400d766/df36aefa-8473-4fb5-9298-40b69807bf7d/744293D05352192j22.jpg?width=1919&height=876 1919w`}
            sizes="100vw"
            alt="Harmony of Function and Design – wide"
            loading="lazy"
            className="bc-harmony__wide-img"
          />
        </div>
        <div className="bc-harmony__grid">
          {/* text card */}
          <div className="bc-harmony__card">
            <span className="bc-harmony__card-eyebrow">Concrete High Cabinet and pearl Sideboard</span>
            <h2 className="bc-harmony__card-heading">Harmony of Function and Design</h2>
            <span className="bc-harmony__card-sub">Freestanding Wall Elements for Modern Spaces</span>
            <p className="bc-harmony__card-body">The two freestanding wall elements provide structure: On the left, there is a functional high cabinet made of concrete in the brasilia color, which, with its distinctive surface, creates clear lines and structure. On the right side, the matching sideboard in pearl color opal with a worktop in carbon gray completes the harmonious overall look. Together, these two elements not only offer practical storage solutions but also provide a comfortable living atmosphere.</p>
          </div>
          {/* portrait image */}
          <div className="bc-harmony__portrait">
            <img
              src={`${BASE}/3e66b6f4-e1c8-4b2b-9e87-7c54595953b7/76f63ff2-5b08-4f7a-b4a1-618925a6a730/744293M03352192j22.jpg?width=720&height=998`}
              srcSet={`${BASE}/3e66b6f4-e1c8-4b2b-9e87-7c54595953b7/76f63ff2-5b08-4f7a-b4a1-618925a6a730/744293M03352192j22.jpg?width=833&height=1137 833w,
                ${BASE}/3e66b6f4-e1c8-4b2b-9e87-7c54595953b7/76f63ff2-5b08-4f7a-b4a1-618925a6a730/744293M03352192j22.jpg?width=720&height=998 1919w`}
              sizes="(max-width:991px) 100vw, 42vw"
              alt="Bossa Concrete freestanding cabinet"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 6 : MINIMALIST DESIGN WITH CLEAR STRUCTURE ──
           Wide banner image + 4 thumbnail swatches below (the switcher)
      ── */}
      <section className="bc-minimalist">
        <div className="container">
          <div className="bc-minimalist__img-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSwatch}
                src={SWATCHES.find((s) => s.id === activeSwatch)?.large}
                alt={SWATCHES.find((s) => s.id === activeSwatch)?.alt}
                className="bc-minimalist__img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className="bc-minimalist__footer">
            <h2 className="bc-minimalist__heading">Minimalist Design with Clear Structure</h2>
            <div className="bc-minimalist__swatches">
              {SWATCHES.map((sw) => (
                <button
                  key={sw.id}
                  onClick={() => setActiveSwatch(sw.id)}
                  className={`bc-swatch${activeSwatch === sw.id ? ' bc-swatch--active' : ''}`}
                  aria-label={sw.alt}
                >
                  <img src={sw.thumb} alt={sw.alt} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 : DISCOVER KITCHENS ───────────────────── */}
      <section className="concrete-discover">
        <div className="container">
          <div className="concrete-discover__header">
            <div>
              <h2 className="concrete-discover__heading">Discover Kitchens</h2>
              <p className="concrete-discover__sub">Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.</p>
            </div>
            <div className="concrete-discover__actions">
              <Link to="/kitchens/leicht" className="concrete-discover__all">All Kitchens →</Link>
              <div className="concrete-discover__nav">
                <button className="concrete-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="concrete-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="concrete-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="concrete-kcard">
                <div className="concrete-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="concrete-kcard__info">
                  <h3 className="concrete-kcard__title">{slide.title}</h3>
                  <p className="concrete-kcard__sub">{slide.sub}</p>
                  <span className="concrete-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── SCOPED STYLES ────────────────────────────────────── */}
      <style>{`
        /* ── tokens ── */
        .bc-page {
          --cream:     #faf8f5;
          --cream-dk:  #f4f0e6;
          --charcoal:  #1c2224;
          --ch-soft:   #30373a;
          --gold:      #b39b7d;
          --gold-dk:   #8c7355;
          --gold-lt:   #d4c4b0;
          --border:    #e6e2da;
          --white:     #ffffff;
          --gray:      #70777a;
          --ff-serif:  var(--font-serif, 'Georgia', serif);
          --ff-sans:   var(--font-sans, system-ui, sans-serif);
          background: var(--cream);
          color: var(--charcoal);
          overflow-x: hidden;
        }
        .bc-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 767px) { .bc-page .container { padding: 0 16px; } }
        @media (max-width: 1023px) { .bc-page .container { padding: 0 32px; } }

        /* ── hero ── */
        .bc-hero { position: relative; width: 100%; overflow: hidden; }
        .bc-hero__wrap { position: relative; width: 100%; aspect-ratio: 9239/6159; max-height: 100vh; min-height: 56vw; }
        .bc-hero__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .bc-hero__hs-layer {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        /* inner positioning wrapper */
        .bc-hero__hs-layer > .bc-hs:first-child { /* handled by positioning styles */ }

        /* ── hotspots ── */
        .bc-hs { position: absolute; transform: translate(-50%, -50%); z-index: 20; }
        .bc-hs__btn {
          position: relative; width: 28px; height: 28px;
          border-radius: 50%; background: var(--white);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,.15);
        }
        .bc-hs__dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--charcoal); position: relative; z-index: 2;
        }
        .bc-hs__ring {
          position: absolute; border-radius: 50%;
          left: 50%; top: 50%; transform: translate(-50%,-50%);
        }
        .bc-hs__ring--mid {
          width: 36px; height: 36px;
          background: rgba(255,255,255,.30);
          animation: bc-pulse-mid 2s ease-in-out infinite;
        }
        .bc-hs__ring--outer {
          width: 44px; height: 44px;
          border: 1px solid rgba(255,255,255,.15);
          animation: bc-pulse-outer 2s ease-in-out infinite;
          animation-delay: 0.3s;
        }
        @keyframes bc-pulse-mid { 0%,100% { opacity:.5; transform: translate(-50%,-50%) scale(1); } 50% { opacity:1; transform: translate(-50%,-50%) scale(1.1); } }
        @keyframes bc-pulse-outer { 0%,100% { opacity:.3; } 50% { opacity:.6; } }

        .bc-hs__pop {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 280px; background: rgba(255,255,255,.93);
          backdrop-filter: blur(8px); border: 1px solid var(--border);
          border-radius: 8px; padding: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
          z-index: 40; pointer-events: none;
        }
        .bc-hs__pop--right { left: 38px; }
        .bc-hs__pop--left  { right: 38px; }
        .bc-hs__pop-img { width: 100%; aspect-ratio: 257/169; overflow: hidden; border-radius: 4px; margin-bottom: 10px; }
        .bc-hs__pop-img img { width: 100%; height: 100%; object-fit: cover; }
        .bc-hs__pop-title { font-family: var(--ff-serif); font-size: 15px; font-weight: 500; color: var(--charcoal); margin: 0 0 6px; }
        .bc-hs__pop-desc  { font-family: var(--ff-sans); font-size: 12px; line-height: 1.55; color: var(--ch-soft); margin: 0; }

        /* ── intro ── */
        .bc-intro { padding: 80px 0 100px; background: var(--cream); }
        .bc-intro__inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 992px) {
          .bc-intro__inner {
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            align-items: flex-start;
          }
        }
        .bc-breadcrumb {
          display: flex; flex-wrap: wrap; gap: 6px;
          font-family: var(--ff-sans); font-size: 12px; color: var(--gray);
          margin-bottom: 28px;
        }
        .bc-breadcrumb a { color: var(--charcoal); text-decoration: none; }
        .bc-breadcrumb a:hover { color: var(--gold); }
        .bc-breadcrumb span { color: var(--gray); }
        .bc-intro__tag {
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          letter-spacing: .14em; text-transform: uppercase;
          color: rgba(28,34,36,.5); margin-bottom: 16px;
        }
        .bc-intro__quote {
          font-family: var(--ff-serif); font-size: 36px; line-height: 1.25;
          font-weight: 300; color: var(--charcoal); margin: 0;
        }
        @media (min-width: 1280px) { .bc-intro__quote { font-size: 42px; } }
        .bc-intro__imgs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .bc-intro__imgs {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            align-items: stretch;
          }
        }
        /* both images same size */
        .bc-intro__img-wide,
        .bc-intro__img-tall {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3/2;
        }
        .bc-intro__img-wide img,
        .bc-intro__img-tall img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .bc-intro__img-wide:hover img,
        .bc-intro__img-tall:hover img {
          transform: scale(1.04);
        }

        /* ── form function section ── */
        .bc-form-fn { position: relative; overflow: hidden; background: var(--cream-dk); }
        .bc-form-fn__img-wrap { width: 100%; aspect-ratio: 833/821; overflow: hidden; }
        @media (min-width: 992px) { .bc-form-fn__img-wrap { aspect-ratio: 1439/890; } }
        .bc-form-fn__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bc-form-fn__card {
          background: rgba(127,135,150,.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 12px;
          padding: 32px;
          color: var(--white);
          margin: 16px;
        }
        @media (min-width: 992px) {
          .bc-form-fn__card {
            position: absolute;
            bottom: 42px; left: 42px;
            margin: 0;
            width: calc((496/1200) * 100%);
            padding: 40px;
          }
        }
        .bc-form-fn__heading {
          font-family: var(--ff-serif); font-size: 26px; font-weight: 500;
          color: var(--white); margin: 0 0 12px;
          line-height: 1.2;
        }
        @media (min-width: 834px) { .bc-form-fn__heading { font-size: 30px; } }
        .bc-form-fn__body {
          font-family: var(--ff-sans); font-size: 16px; line-height: 1.6;
          color: rgba(255,255,255,.85); margin: 0;
        }
        @media (min-width: 834px) { .bc-form-fn__body { font-size: 18px; } }

        /* ── material combination ── */
        .bc-material {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid var(--border);
          background: var(--white);
        }
        @media (min-width: 992px) {
          .bc-material {
            grid-template-columns: 1fr 1fr;
            min-height: 600px;
          }
        }
        .bc-material__img { overflow: hidden; aspect-ratio: 4/3; }
        @media (min-width: 992px) { .bc-material__img { aspect-ratio: auto; } }
        .bc-material__img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bc-material__text {
          display: flex; flex-direction: column; justify-content: center;
          padding: 40px 16px;
        }
        @media (min-width: 992px) {
          .bc-material__text {
            padding: 80px 10%;
          }
        }
        .bc-material__eyebrow {
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: rgba(28,34,36,.5); margin-bottom: 20px; display: block;
        }
        .bc-material__heading {
          font-family: var(--ff-serif); font-size: 40px; font-weight: 500;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        @media (min-width: 1440px) { .bc-material__heading { font-size: 48px; } }
        .bc-material__sub {
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); display: block; margin-bottom: 12px;
        }
        .bc-material__body {
          font-family: var(--ff-sans); font-size: 14px; line-height: 1.7;
          color: var(--ch-soft); margin: 0;
        }
        @media (min-width: 834px) { .bc-material__body { font-size: 16px; } }

        /* ── harmony of function ── */
        .bc-harmony {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 80px 0;
          background: var(--cream-dk);
          border-top: 1px solid var(--border);
        }
        @media (min-width: 992px) {
          .bc-harmony { gap: 48px; }
        }
        .bc-harmony__bg { width: 100%; padding: 0 16px; }
        @media (min-width: 768px) { .bc-harmony__bg { padding: 0 32px; } }
        @media (min-width: 992px) { .bc-harmony__bg { padding: 0 40px; } }
        .bc-harmony__wide-img {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          display: block;
          object-fit: cover;
          aspect-ratio: 833/738;
        }
        @media (min-width: 768px) { .bc-harmony__wide-img { aspect-ratio: 1279/1032; } }
        @media (min-width: 992px) { .bc-harmony__wide-img { aspect-ratio: 1439/745; } }
        .bc-harmony__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 0 16px;
        }
        @media (min-width: 768px) {
          .bc-harmony__grid {
            grid-template-columns: 5fr 3fr;
            gap: 24px;
            padding: 0 32px;
          }
        }
        @media (min-width: 992px) {
          .bc-harmony__grid {
            grid-template-columns: 7fr 5fr;
            gap: 32px;
            padding: 0 40px;
          }
        }
        .bc-harmony__card {
          background: #6d6865;
          border-radius: 12px;
          padding: 32px 24px;
          color: var(--white);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 992px) {
          .bc-harmony__card {
            padding: 60px;
            min-height: 500px;
            justify-content: center;
          }
        }
        .bc-harmony__card-eyebrow {
          font-family: var(--ff-sans); font-size: 12px; font-weight: 500;
          text-transform: uppercase; letter-spacing: .1em;
          color: rgba(255,255,255,.5);
        }
        .bc-harmony__card-heading {
          font-family: var(--ff-sans); font-size: 28px; font-weight: 500;
          color: var(--white); margin: 0; line-height: 1.2;
        }
        @media (min-width: 834px) { .bc-harmony__card-heading { font-size: 36px; } }
        @media (min-width: 1440px) { .bc-harmony__card-heading { font-size: 48px; } }
        .bc-harmony__card-sub {
          font-family: var(--ff-sans); font-size: 14px; font-weight: 600;
          color: var(--white); display: block;
        }
        @media (min-width: 1280px) { .bc-harmony__card-sub { font-size: 18px; } }
        .bc-harmony__card-body {
          font-family: var(--ff-sans); font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,.8); margin: 8px 0 0;
        }
        @media (min-width: 1280px) { .bc-harmony__card-body { font-size: 16px; } }
        .bc-harmony__portrait {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 833/1137;
        }
        @media (min-width: 768px) {
          .bc-harmony__portrait {
            aspect-ratio: auto;
            height: 100%;
          }
        }
        .bc-harmony__portrait img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── minimalist design ── */
        .bc-minimalist { padding: 80px 0; background: var(--white); border-top: 1px solid var(--border); }
        .bc-minimalist__img-wrap { width: 100%; border-radius: 12px; overflow: hidden; aspect-ratio: 1; position: relative; }
        @media (min-width: 768px) { .bc-minimalist__img-wrap { aspect-ratio: 762/343; } }
        @media (min-width: 992px) { .bc-minimalist__img-wrap { aspect-ratio: 1360/575; } }
        .bc-minimalist__img { width: 100%; height: 100%; object-fit: cover; display: block; position: absolute; inset: 0; }
        .bc-minimalist__footer {
          display: flex; flex-direction: column; gap: 16px;
          margin-top: 24px;
        }
        @media (min-width: 768px) {
          .bc-minimalist__footer { flex-direction: row; align-items: center; justify-content: space-between; gap: 32px; }
        }
        .bc-minimalist__heading {
          font-family: var(--ff-sans); font-size: 18px; font-weight: 600;
          color: var(--charcoal); margin: 0;
        }
        @media (min-width: 834px) { .bc-minimalist__heading { font-size: 22px; } }
        .bc-minimalist__swatches { display: flex; gap: 10px; flex-shrink: 0; }
        .bc-swatch {
          width: 90px; height: 60px;
          border: 2px solid transparent; border-radius: 4px;
          overflow: hidden; padding: 0; cursor: pointer;
          background: none; outline: none;
          transition: border-color .25s, transform .25s;
        }
        @media (min-width: 834px) { .bc-swatch { width: 120px; height: 73px; } }
        .bc-swatch:hover { transform: translateY(-2px); border-color: var(--gold-lt); }
        .bc-swatch--active { border-color: var(--gold); }
        .bc-swatch img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── discover kitchens ── */
        .concrete-discover {
          background: var(--cream-dk);
          padding: 100px 0 120px;
          overflow: hidden;
          border-top: 1px solid var(--border);
        }
        .concrete-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .concrete-discover__heading {
          font-family: var(--ff-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .concrete-discover__sub {
          font-family: var(--ff-sans);
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
          max-width: 420px;
        }
        .concrete-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .concrete-discover__all {
          font-family: var(--ff-sans);
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
        .concrete-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .concrete-discover__nav {
          display: flex;
          gap: 12px;
        }
        .concrete-discover__nav-btn {
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
        .concrete-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream);
        }
        .concrete-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .concrete-discover__track::-webkit-scrollbar {
          display: none;
        }
        .concrete-kcard {
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
        .concrete-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-lt);
        }
        .concrete-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .concrete-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .concrete-kcard:hover .concrete-kcard__img img {
          transform: scale(1.06);
        }
        .concrete-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .concrete-kcard__title {
          font-family: var(--ff-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .concrete-kcard__sub {
          font-family: var(--ff-sans);
          font-size: 13px;
          color: var(--gray);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .concrete-kcard__link {
          font-family: var(--ff-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .concrete-kcard:hover .concrete-kcard__link {
          color: var(--gold-dk);
        }

      `}</style>
    </motion.div>
  )
}
