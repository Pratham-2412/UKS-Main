import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'tense_structures',
    x: '79.0%',
    y: '67.5%',
    title: 'Tense structures',
    desc: 'The M8 pull-out system emphasizes the elegance of the ribbed structure of the BAHIA front and carries the design principle through to the very core of the furniture.',
    img: `${CAISY}/ad57cb63-4c51-4357-852e-6a337f6c9cce/f11f45e8-547d-47e6-b4ff-bfa552faf003/LeichtMood0108.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'continuous_front',
    x: '13.5%',
    y: '67.2%',
    title: 'Continuous front design',
    desc: 'The dark vertical millings and the vertical joints blend harmoniously, making the individual cabinets appear as a single piece of furniture.',
    img: `${CAISY}/5ce089c3-15c9-40f3-b40e-555de8b7267a/d3d67d4e-99b6-44ea-81e1-2d2b74e0099c/LeichtMood0177.jpg?width=400`,
    dir: 'right'
  },
  {
    id: 'striking_front',
    x: '40.6%',
    y: '76.3%',
    title: 'Striking front design',
    desc: 'The contrast of the dark vertical grooves combined with the equally black edge design gives the BAHIA product a confident and timeless appearance.',
    img: `${CAISY}/083e620e-7595-4ef6-9cff-cd8ebe13ebf8/53270386-37a4-4d80-af93-4b9332641653/LeichtMood0098.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'passage_door',
    x: '52.3%',
    y: '52.3%',
    title: 'Passage door',
    desc: 'Passage doors in kitchens create smooth transitions, enhance functionality, and ensure spatial harmony.',
    img: `${CAISY}/28decbe2-ab2a-42fe-9d9d-6f4af93374cb/a05f9b33-fbd1-4a58-bdd2-60ce78037784/DesignohneTitel.png?width=400`,
    dir: 'right'
  },
  {
    id: 'rocca_surface',
    x: '27.4%',
    y: '63.3%',
    title: 'ROCCA Surface',
    desc: 'ROCCA, a natural stone program with a subtly elegant effect. The front edges are clad with fine natural stone and beveled along the miter joint from front to edge. A detail that reflects the high quality of the surface.',
    img: `${CAISY}/83f00f12-5589-4807-8ac3-0b1fac638c58/a51669ee-8203-4a3f-a9c1-0a247c053c21/LeichtMood0115.jpg?width=400`,
    dir: 'right'
  }
]

const galleryImages = [
  `${CAISY}/119a0185-6ab4-42c1-9678-5419601668f6/d6c5c37c-d1c7-4746-8642-93cbe251f6f1/0470102BAHIA012.jpg?width=900`,
  `${CAISY}/58f7c093-c0aa-4061-8109-aa3bad4e7eb2/fb998515-68de-48d6-b8ec-71f6109102b8/LeichtMood0285.jpg?width=900`,
  `${CAISY}/45acb8d0-b685-43e3-961c-aba6d4954c57/e91bd211-a518-48dd-9f07-215ad361e246/0470104BAHIA004.jpg?width=900`,
  `${CAISY}/6c045fd5-0ea2-4a53-963f-9344c9c93621/5d75e472-3680-4c8a-a6bc-ceb9fd02727b/LeichtMood0257.jpg?width=900`,
  `${CAISY}/a8d6f417-3924-48b5-80cb-bd498e19c5c7/b3a6096f-c2a3-45e8-82ec-383943ea1eb2/0470105BAHIA002.jpg?width=900`,
  `${CAISY}/83f00f12-5589-4807-8ac3-0b1fac638c58/a51669ee-8203-4a3f-a9c1-0a247c053c21/LeichtMood0115.jpg?width=900`,
  `${CAISY}/efa666cd-a5d2-4dd4-b7ec-d7dd48fc07f1/7546b098-5ad8-4d03-a2f9-3ffcedbb7595/LeichtMood0167.jpg?width=900`,
  `${CAISY}/341e952e-33dc-4f6e-a1d5-5ea916c6ee0d/3f60ad8e-3f28-4551-8be1-7045ac681969/LeichtMood0241.jpg?width=900`,
  `${CAISY}/13baa04d-feae-466b-bf53-48457c94e53f/70e291a4-25b4-48e4-8304-4fbaba0c1bad/LeichtMood0384.jpg?width=900`,
  `${CAISY}/8b6be1f1-f6ed-4635-a41a-6448640f576e/ab8cfa70-05e4-4f56-a7e0-094bc6dba1e7/LeichtMood0234.jpg?width=900`
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
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: `${CAISY}/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200`,
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
            src={`${CAISY}/8ac2c52d-b34e-495f-9ad5-f3d2f8826c3c/bc14b4ff-c39e-4831-abd9-86f1ef1b840c/0470101BAHIA026.jpg`}
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
                src={`${CAISY}/1b2108a6-9070-40d7-991b-57079d8ab34c/1715c7db-457c-44ea-9d6b-fb52e9ba3c09/LeichtMood0177.jpg?width=800`}
                alt="Bahia asymmetric vertical groove structures detail"
              />
            </div>
            <div className="bahia-intro__img bahia-intro__img--tall">
              <img
                src={`${CAISY}/4522c174-5b21-4a3f-b00a-906222e5ab72/ec3875fa-8303-4dfa-b931-9eda90efd50c/LeichtMood0260.jpg?width=600`}
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
                  ? `${CAISY}/8851c07f-949c-40f8-9a93-5812bb567ac7/984f7f24-2188-4a67-a7c3-d9359bb68505/0470104BAHIA004.jpg?width=900`
                  : activeLookTab === 2
                  ? `https://assets.caisy.io/assets/reupload/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/85a145be-a184-4bcf-9c8c-9ad37dd23d58/LeichtMood0177.jpeg?width=900`
                  : `${CAISY}/b761cb8d-5d18-4339-98f8-f9ec0b7bca3c/40fc86a4-cc0e-4cd3-8349-272dcd01ee15/0470107BAHIA005.jpg?width=900`
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
          src="https://assets.caisy.io/assets/reupload/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/b925b881-28cb-4f5e-b925-dcfebb903ccb/LeichtMood0054002.jpg"
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
            src={`${CAISY}/dd65a912-4719-4a1b-b461-62b181efb027/9c33115a-2da0-4eb9-87ac-15b760b6b40a/LeichtMood0136.jpg?width=900`}
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
