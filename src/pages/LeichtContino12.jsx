import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'iconic',
    x: '82.9%',
    y: '29.7%',
    title: 'ICONIC shelving system',
    desc: 'The vertical shelf sides of the open shelving system ICONIC stand at a minimum distance of 5 cm from the wall, creating a pleasant spatial effect through indirect LED lighting.',
    img: `${CAISY}/419ecc9d-8617-47ae-b53f-bd84c4bf33fe/7ab1be77-7eae-483d-90b3-5f781694dc1f/684269M05167309J22.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'cube',
    x: '58.9%',
    y: '45.9%',
    title: 'Walk-in cube',
    desc: 'Interior design of LEICHT makes it possible to design spaces with unit elements. Access can be planned either with sliding doors or access doors in the same material.',
    img: `${CAISY}/091b9d40-f748-49ca-bacf-6662dc12f7a8/84be4088-51a0-4514-b491-39e195afc6af/684269M09167309J22.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'fronts',
    x: '65.8%',
    y: '63.7%',
    title: 'Fronts in 12 mm',
    desc: 'CONTINO 12 impresses with its elegance, which is created by the front thickness of 12 mm and the materials aluminium and matt lacquer.',
    img: `${CAISY}/b31f7b68-e24f-40f1-964f-a64e8ea4efb5/5346da90-193a-487f-9b1e-4eceebe52f63/684269Mo01167309J22.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'aluminium',
    x: '34.8%',
    y: '69.4%',
    title: 'Aluminium',
    desc: 'A cool, silvery-green base tone gives this surface a high level of elegance. The colours oxide bronze, oxide titanium and oxide silver with fine brushing are available.',
    img: `${CAISY}/a8baca12-4e91-4eca-9c04-7c69e372b3ee/b6771936-8c90-4bd1-9de7-c845bb39e582/684269D03167309J22.jpg?width=400`,
    dir: 'right',
  },
  {
    id: 'wood_aluminium',
    x: '86.4%',
    y: '60.4%',
    title: 'Wood and aluminium',
    desc: 'The combination of cool, technical and warm materials creates pleasant contrasts and is compelling thanks to its material authenticity.',
    img: `${CAISY}/9d0dd7e0-f007-4e14-afab-705cc87f4acf/99219b24-18d6-4857-a68e-266f8bf650fd/684269D04167309J22.jpg?width=400`,
    dir: 'left',
  },
  {
    id: 'minimalist',
    x: '49.4%',
    y: '63.4%',
    title: 'Minimalist aesthetic',
    desc: 'The reduced material thickness of the front is consistently continued in the pull-out system. The filigree aesthetics of the metal sides, which are only 8 mm thick, are supported by the dark colour of both the pull-out system and the wardrobe.',
    img: `${CAISY}/2bf30d1b-5186-41ce-8e7f-bf8e8fdaf48b/2761222e-bf54-441b-ad52-9ad461b5eafc/684269D02167309J22.jpg?width=400`,
    dir: 'right',
  },
]

const swatches = [
  {
    code: 'CONTINO 12',
    name: '12 mm matte lacquer',
    img: `${CAISY}/c8d9b429-daff-4ab2-8d11-fdd11f027231/ba2f4d0d-04f4-4e62-a3bb-5fb7d6ad0841/684269Mo01167309J22.jpg?width=400`,
  },
  {
    code: 'ALUMINIUM',
    name: 'oxide bronze / titanium / silver',
    img: `${CAISY}/4355aab4-4b86-4f7e-b452-9cdf7ab77ab1/ba562558-ad73-4cf4-988a-3bc42df85580/684269D03167309J22.jpg?width=400`,
  },
  {
    code: 'WOOD & METAL',
    name: 'natural wood combined with aluminum',
    img: `${CAISY}/8f0832ea-59fb-4572-b0a3-c741adf21f5f/ec4013e9-63da-4bc4-af26-0da03a34df57/684269D04167309J22.jpg?width=400`,
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
    to: '/kitchens/leicht/kyoto',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `${CAISY}/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht/contino-12',
  },
]

export default function LeichtContino12() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [activeTab, setActiveTab] = useState(1)
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.contino12-kcard')
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
      className="contino12-page"
    >
      {/* ── 1. HERO with Hotspots ───────────────────────────────── */}
      <section className="contino12-hero">
        <div className="contino12-hero__aspect">
          <img
            src={`${CAISY}/0d4338b1-a4f3-4030-b20d-2e309d95646e/dc789f8f-4f57-439e-9168-48042dc6b087/684269M01167309J22.jpg`}
            alt="LEICHT CONTINO 12 kitchen concept"
            className="contino12-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="contino12-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="contino12-hs__btn" aria-label={spot.title}>
                <span className="contino12-hs__ring" />
                <span className="contino12-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`contino12-hs__tip contino12-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="contino12-hs__tip-img">
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
      <section className="contino12-intro">
        <div className="contino12-intro__inner container">
          <div className="contino12-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Contino 12</span>
            </nav>
            <h4 className="contino12-intro__prog">CONTINO Ξ 12</h4>
            <p className="contino12-intro__body">
              With only 12 mm material thickness, Contino Ξ 12 combines delicate aesthetics with innovative kitchen architecture.
            </p>
          </div>
          <div className="contino12-intro__imgs">
            <div className="contino12-intro__img contino12-intro__img--wide">
              <img
                src={`${CAISY}/b31f7b68-e24f-40f1-964f-a64e8ea4efb5/5346da90-193a-487f-9b1e-4eceebe52f63/684269Mo01167309J22.jpg?width=800`}
                alt="Contino 12 elegant front details"
              />
            </div>
            <div className="contino12-intro__img contino12-intro__img--tall">
              <img
                src={`${CAISY}/de335292-abe1-4090-b6d1-5e9b35bc3b90/182570af-1780-4ddc-8e98-36d282c6775c/rowanheuvelMCvvhW1OvS0unsplash.jpg?width=600`}
                alt="Contino 12 architectural details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MATERIAL SWATCHES ───────────────────────────────── */}
      <section className="contino12-colors">
        <div className="container">
          <h2 className="contino12-colors__heading">Three premium design materials</h2>
          <p className="contino12-colors__sub">
            The combination of cool, technical and warm materials creates pleasant contrasts and is compelling thanks to its material authenticity.
          </p>
          <div className="contino12-colors__grid">
            {swatches.map((c, i) => (
              <motion.div
                key={c.code}
                className="contino12-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="contino12-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="contino12-swatch__label">
                  <span className="contino12-swatch__code">{c.code}</span>
                  <span className="contino12-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INNOVATIVE KITCHEN DESIGN ─────────────────────── */}
      <section className="contino12-split contino12-split--img-right">
        <div className="contino12-split__text">
          <span className="contino12-split__eyebrow">Space concept and delicate aesthetics united</span>
          <h2 className="contino12-split__heading">Innovative kitchen design with Contino Ξ 12</h2>
          <p className="contino12-split__body">
            In this kitchen design, the understanding of space is completely suspended and put together in a new way: first of all, it concentrates on the ICONIC shelving system as well as on the free-standing room-in-room cube, which, as a walk-in utility room, provides structure. At the same time, the Contino Ξ12 front, with its material thickness of just 12 mm, gives the handle-less kitchen a clean, filigree look. The combination of cool and warm materials creates a pleasant contrast.
          </p>
          <Link to="/contact" className="contino12-split__discover">Discover</Link>
        </div>
        <div className="contino12-split__img">
          <img
            src={`${CAISY}/b0c29880-1b46-4335-8ff3-e2e4cc9be02c/84a90b77-691a-4473-a81a-17638d28ff63/684269M02167309J22.jpg?width=900`}
            alt="Innovative kitchen design layout details"
          />
        </div>
      </section>

      {/* ── 5. DRAWER SYSTEM M8 ────────────────── */}
      <section className="contino12-split contino12-split--img-left contino12-split--dark">
        <div className="contino12-split__img">
          <img
            src={`${CAISY}/ab45d174-4ea7-4bad-b62b-524391382b90/4ee176db-82fb-478e-b77e-2095630333b7/684269Mo02167309J22.jpg?width=900`}
            alt="M8 drawer system carbon grey pull-out detail"
          />
        </div>
        <div className="contino12-split__text">
          <span className="contino12-split__eyebrow">Delicate lines, strong aesthetics</span>
          <h2 className="contino12-split__heading">Drawer system M8 in carbon grey</h2>
          <p className="contino12-split__body">
            When opening the cabinet elements that run continuously around the island block, the new M8 pull-out system and the carcase interior colour carbon grey are found again, which ideally complement the material quality of the aluminium. The reduced material thickness of the front is consistently continued in the pull-out system. The filigree aesthetics of the metal sides, which are only 8 mm thick, are supported by the dark colour of the pull-out system and the cabinet.
          </p>
          <Link to="/contact" className="contino12-split__discover">Discover</Link>
        </div>
      </section>

      {/* ── 6. VIDEO PLACEHOLDER BANNER ───────────────────────── */}
      <section className="contino12-banner">
        <div className="contino12-banner__img-container">
          <img
            src={`${CAISY}/f3395ac5-357f-4ef4-9b1b-c2bcc46ac206/18af1058-d65d-44a9-a9aa-e3c5031ac0f7/684269M04167309J22.jpg?width=1920`}
            alt="Leicht Contino 12 modern kitchen setup"
            className="contino12-banner__img"
          />
          <div className="contino12-banner__overlay">
            <h2 className="contino12-banner__heading">Light and space in perfect harmony</h2>
          </div>
        </div>
      </section>

      {/* ── 7. ICONIC SHELVING SYSTEM with Switcher ────────────────────── */}
      <section className="contino12-split contino12-split--img-right">
        <div className="contino12-split__text">
          <span className="contino12-split__eyebrow">The new Iconic shelving system</span>
          <h2 className="contino12-split__heading">Iconic shelf and 12 mm front</h2>
          <p className="contino12-split__body">
            The vertical shelf sides of the open shelving system ICONIC stand at a minimum distance of 5 cm from the wall. An LED strip light runs along the back of this panel opening, creating a three-dimensional effect through indirect light.
          </p>
          
          <div className="contino12-tabs">
            <button
              onClick={() => setActiveTab(1)}
              className={`contino12-tabs__btn ${activeTab === 1 ? 'contino12-tabs__btn--active' : ''}`}
            >
              01 / Detail
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`contino12-tabs__btn ${activeTab === 2 ? 'contino12-tabs__btn--active' : ''}`}
            >
              02 / View
            </button>
          </div>
        </div>
        
        <div className="contino12-split__img">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={
                activeTab === 1
                  ? `${CAISY}/ca98eac4-6e5c-46d6-b05b-a72047e9803c/a791d5f6-150b-4be0-bc0c-d307d3e0df48/684269M08167309J22.jpg?width=900`
                  : `${CAISY}/9cf6d2d9-1730-40cd-8065-67c4335c3a42/14d39c5c-9d5f-4a1e-ba6f-128715527d9c/684269M09167309J22.jpg?width=900`
              }
              alt="Iconic shelving system details"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* ── 8. WALK-IN CUBE ──────────────────────────────────── */}
      <section className="contino12-split contino12-split--img-left">
        <div className="contino12-split__img">
          <img
            src={`${CAISY}/bb9f3930-1a0e-4b90-ae0f-a1198254e961/011ba290-9a27-4f2e-8917-5bbbd40551c6/684269M11167309J22.jpg?width=900`}
            alt="Walk-in utility cube and pantry integration"
          />
        </div>
        <div className="contino12-split__text">
          <span className="contino12-split__eyebrow">Walk-in Cube</span>
          <h2 className="contino12-split__heading">The practical pantry tall cabinet</h2>
          <p className="contino12-split__body">
            The interior architecture allows for the design of spaces with integrated cabinet elements. Access can be planned with either sliding doors or matching material passage doors.
          </p>
          <Link to="/contact" className="contino12-split__discover">Discover</Link>
        </div>
      </section>

      {/* ── 9. DISCOVER KITCHENS — SLIDER ──────────────────────── */}
      <section className="contino12-discover">
        <div className="container">
          <div className="contino12-discover__header">
            <div>
              <h2 className="contino12-discover__heading">Discover Kitchens</h2>
              <p className="contino12-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="contino12-discover__actions">
              <Link to="/kitchens/leicht" className="contino12-discover__all">All Kitchens →</Link>
              <div className="contino12-discover__nav">
                <button className="contino12-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="contino12-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="contino12-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="contino12-kcard">
                <div className="contino12-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="contino12-kcard__info">
                  <h3 className="contino12-kcard__title">{slide.title}</h3>
                  <p className="contino12-kcard__sub">{slide.sub}</p>
                  <span className="contino12-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ───────────────────────────────────────────── */
        .contino12-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .contino12-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .contino12-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .contino12-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .contino12-hs__btn {
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
        .contino12-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .contino12-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: contino12-hs-pulse 2.2s ease-out infinite;
        }
        @keyframes contino12-hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .contino12-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .contino12-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .contino12-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .contino12-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .contino12-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .contino12-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .contino12-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .contino12-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .contino12-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 0;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .contino12-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .contino12-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .contino12-intro__text { padding-bottom: 80px; }
        .contino12-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .contino12-intro__body {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.35;
          color: var(--charcoal);
          font-weight: 400;
        }
        .contino12-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .contino12-intro__img { overflow: hidden; }
        .contino12-intro__img--wide  { aspect-ratio: 7/6; }
        .contino12-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .contino12-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .contino12-intro__img:hover img { transform: scale(1.04); }

        /* ── COLORS ──────────────────────────────────────────── */
        .contino12-colors {
          background: #fcfbfa;
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .contino12-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          color: var(--charcoal);
          margin-bottom: 12px;
          font-weight: 400;
        }
        .contino12-colors__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--charcoal-soft);
          margin-bottom: 48px;
          max-width: 600px;
          line-height: 1.6;
        }
        .contino12-colors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .contino12-swatch { display: flex; flex-direction: column; gap: 0; }
        .contino12-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .contino12-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .contino12-swatch:hover .contino12-swatch__img img { transform: scale(1.05); }
        .contino12-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .contino12-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .contino12-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── SPLIT SECTIONS ────────────────── */
        .contino12-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .contino12-split + .contino12-split { border-top: none; }
        .contino12-split--img-right .contino12-split__text { order: 1; }
        .contino12-split--img-right .contino12-split__img  { order: 2; }
        .contino12-split--img-left .contino12-split__text  { order: 2; }
        .contino12-split--img-left .contino12-split__img   { order: 1; }

        .contino12-split__text {
          background: #fcfbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px;
        }
        .contino12-split--dark .contino12-split__text {
          background: #3e3a38;
        }
        .contino12-split__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .contino12-split--dark .contino12-split__eyebrow {
          color: #b8966e;
        }
        .contino12-split__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .contino12-split--dark .contino12-split__heading {
          color: #fff;
        }
        .contino12-split__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
          margin-bottom: 32px;
        }
        .contino12-split--dark .contino12-split__body {
          color: rgba(255,255,255,0.85);
        }
        .contino12-split__discover {
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
        .contino12-split__discover:hover {
          color: #8a6840;
          border-color: #8a6840;
        }
        .contino12-split--dark .contino12-split__discover {
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }
        .contino12-split__img {
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .contino12-split__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        /* ── VIDEO PLACEHOLDER BANNER ────────────────────── */
        .contino12-banner {
          width: 100%;
          border-bottom: 1px solid var(--border);
        }
        .contino12-banner__img-container {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 450px;
          overflow: hidden;
        }
        .contino12-banner__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .contino12-banner__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .contino12-banner__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          color: #fff;
          text-align: center;
          max-width: 800px;
          font-weight: 300;
          text-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        /* ── DETAILS TABS ────────────────────────────────── */
        .contino12-tabs {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        .contino12-tabs__btn {
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
        .contino12-tabs__btn:hover {
          color: var(--gold);
          border-color: var(--gold-light);
        }
        .contino12-tabs__btn--active {
          background: var(--gold);
          color: #fff;
          border-color: var(--gold);
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .contino12-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .contino12-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .contino12-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .contino12-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .contino12-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .contino12-discover__all {
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
        .contino12-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .contino12-discover__nav {
          display: flex;
          gap: 12px;
        }
        .contino12-discover__nav-btn {
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
        .contino12-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .contino12-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .contino12-discover__track::-webkit-scrollbar {
          display: none;
        }
        .contino12-kcard {
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
        .contino12-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .contino12-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .contino12-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .contino12-kcard:hover .contino12-kcard__img img {
          transform: scale(1.06);
        }
        .contino12-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .contino12-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .contino12-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .contino12-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .contino12-kcard:hover .contino12-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .contino12-hero__aspect { height: 60vh; min-height: 400px; }
          .contino12-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .contino12-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .contino12-split { grid-template-columns: 1fr; }
          .contino12-split__text { padding: 56px 32px; order: 2 !important; }
          .contino12-split__img  { order: 1 !important; min-height: 300px; }
          .contino12-split__img img { position: static; width: 100%; height: 100%; min-height: 300px; }
          .contino12-discover__heading { font-size: 32px; }
          .contino12-discover__track { gap: 20px; }
          .contino12-kcard { flex: 0 0 calc((100% - 20px) / 2); }
          .contino12-banner__img-container { height: 40vh; min-height: 300px; }
          .contino12-banner__heading { font-size: 28px; }
        }
        @media (max-width: 600px) {
          .contino12-colors__grid { grid-template-columns: 1fr; gap: 16px; }
          .contino12-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
