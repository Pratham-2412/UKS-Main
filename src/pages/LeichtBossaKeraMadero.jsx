import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'edge_processing',
    x: '69.6%',
    y: '65.9%',
    title: 'Edge processing',
    desc: 'For a harmonious, high-quality overall appearance, also when opening the units, both the fronts and the edges themselves are finished with ceramic.',
    img: `${CAISY}/e8083e29-c533-4598-a476-af47e62fd361/04cc59e6-1b78-428e-b983-0d0769467d48/844244886268D05352352544267j20.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'kera',
    x: '53.2%',
    y: '74.8%',
    title: 'KERA',
    desc: 'Front with surrounding edge in the same design. The carrier medium is 16 mm melamine-coated chipboard glued with approx. 3.5 mm thick ceramic. Rear in colour-coordinated coating. Colour: CI 544v nasca',
    img: `${CAISY}/89516895-d3ea-4df8-abc2-cbfb24237a10/e8c08c6a-8bd5-4339-a0f7-ddfbedc9021b/844244886268D07352352544267j20.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'tall_pullout',
    x: '77.1%',
    y: '45.3%',
    title: 'Tall pullout unit',
    desc: 'Practical tall pullout unit in the same design as the drawers and drawer pullouts. All groceries are clearly arranged and immediately to hand. Units available in widths of 30, 40, and 50 cm.',
    img: `${CAISY}/01017265-3565-4869-b018-9e41b8e48817/b0325025-2ece-4773-8b93-b868cf290f11/844244886268D08352352544267j20RENDER.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'waste_disposal',
    x: '42.7%',
    y: '62.5%',
    title: 'Waste disposal system',
    desc: 'We provide waste disposal systems with various compartments for optimum waste separation. To complete the overall look, the waste disposal systems can be colour-coordinated with the carcase. In this case, dark carbon grey.',
    img: `${CAISY}/250cdca7-63e6-4ac3-af1f-05b6d4928d1c/6f88c4ce-c54c-4c38-b4ff-51afd1cc1c3c/844244886268D16352352544267j20RENDER.jpg?width=400`,
    dir: 'left'
  },
  {
    id: 'dark_carcase',
    x: '34.3%',
    y: '70.2%',
    title: 'Dark carcase',
    desc: 'We offer two different carcase colors to perfectly match the interior with the exterior design. The dark carcase in carbongrau adds an extra touch of elegance and enhances the sophisticated kitchen design.',
    img: `${CAISY}/600084c1-766d-4e4c-9aaf-c4b2c9c0fde6/0917bdba-470c-421d-b9b4-69bd0b6df8be/844244886268D14352352544267j20BODENNEU.jpg?width=400`,
    dir: 'right'
  },
  {
    id: 'madero',
    x: '14.5%',
    y: '62.7%',
    title: 'MADERO',
    desc: 'Real wood front in oak with matching graining; vivid grain structures on both sides, including in particular twisted knots, cracks and gnarls. Colour: HI 267v wild oak marsh',
    img: `${CAISY}/c57834d8-d6ba-4077-8b94-58903043c7bb/dbecd91c-4677-4ec5-aeda-811c24c62912/844244886268MO29352352544267j20.jpg?width=400`,
    dir: 'right'
  },
  {
    id: 'storage_centre',
    x: '8.3%',
    y: '46.4%',
    title: 'Storage centre',
    desc: 'This puts an end to unreachable groceries right at the back of a unit: our storage centre is the perfect way to make sure groceries are well organised and quick to hand.',
    img: `${CAISY}/688e68f4-1008-45dc-84a5-e50de47efdf8/675007f2-a7bb-4d0e-b687-04a221b07e83/844244886268D10352352544267j20RENDER.jpg?width=400`,
    dir: 'right'
  },
  {
    id: 'bossa',
    x: '27.2%',
    y: '29.7%',
    title: 'BOSSA',
    desc: 'Real wood front in the veneers oak or walnut. Protruding, linear ridges in a 12.5mm grid give the veneer a delicate, extremely vital, three-dimensional look. Design range: PRIMO. Colour: HI 352v walnut lined',
    img: `${CAISY}/6ef8a6ae-2a31-4bef-967b-6cdce70b3cc1/77f7b719-613a-4bd9-aac1-557049c4dc34/BOSSAdunkel9warm.jpg?width=400`,
    dir: 'right'
  }
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

export default function LeichtBossaKeraMadero() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [activeMaterialTab, setActiveMaterialTab] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const sliderRef = useRef(null)

  const toggleAccordion = (id) => {
    setOpenAccordion(prev => prev === id ? null : id)
  }

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.madero-kcard')
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
      className="madero-page"
    >
      {/* ── 1. HERO with Hotspots ───────────────────────────────── */}
      <section className="madero-hero">
        <div className="madero-hero__aspect">
          <img
            src={`${CAISY}/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg`}
            alt="LEICHT BOSSA KERA MADERO kitchen clone"
            className="madero-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="madero-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="madero-hs__btn" aria-label={spot.title}>
                <span className="madero-hs__ring" />
                <span className="madero-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`madero-hs__tip madero-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="madero-hs__tip-img">
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
      <section className="madero-intro">
        <div className="madero-intro__inner container">
          <div className="madero-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Bossa Kera Madero</span>
            </nav>
            <h4 className="madero-intro__prog">BOSSA-E | BOSSA | KERA-E | MADERO</h4>
            <p className="madero-intro__body">
              The seamless cladding of the handleless kitchen unit with the BOSSA program in walnut creates a continuous design that integrates perfectly into modern living concepts.
            </p>
          </div>
          <div className="madero-intro__imgs">
            <div className="madero-intro__img madero-intro__img--wide">
              <img
                src={`${CAISY}/5dab8caf-8c42-4402-b393-71cf8b7adc97/c524f60b-c766-49d9-b6f4-8ef46328a71c/001Bossa033A3300dpi.jpg?width=800`}
                alt="Bossa Kera Madero wide concept perspective"
              />
            </div>
            <div className="madero-intro__img madero-intro__img--tall">
              <img
                src={`${CAISY}/3f2794d3-af6e-4e3d-95b9-17ec5958b2e0/f294cfe4-a192-45e7-8ec2-49c0b66c6359/844244886268MO21352352544267j20warm.jpg?width=600`}
                alt="Bossa Kera Madero vertical cabinet detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EXCLUSIVE MATERIALS ────────────────────────────── */}
      <section className="madero-split madero-split--img-left">
        <div className="madero-split__text">
          <span className="madero-split__eyebrow">BOSSA-E | BOSSA | KERA-E | MADERO</span>
          <h2 className="madero-split__heading">Exclusive materials for a timeless aesthetic</h2>
          <p className="madero-split__body">
            Thanks to the use of real wood and precise vertical lines, BOSSA blends harmoniously into the spatial concept. The pressed peak-and-valley structure gives the surface a unique depth effect and enhances the natural feel of the wood. The seamless cladding of the handleless kitchen unit with the BOSSA program in walnut creates a high-quality, cohesive design that highlights the natural elegance of a real wood program.
          </p>
          
          <div className="madero-tabs">
            <button
              onClick={() => setActiveMaterialTab(1)}
              className={`madero-tabs__btn ${activeMaterialTab === 1 ? 'madero-tabs__btn--active' : ''}`}
            >
              01
            </button>
            <button
              onClick={() => setActiveMaterialTab(2)}
              className={`madero-tabs__btn ${activeMaterialTab === 2 ? 'madero-tabs__btn--active' : ''}`}
            >
              02
            </button>
            <button
              onClick={() => setActiveMaterialTab(3)}
              className={`madero-tabs__btn ${activeMaterialTab === 3 ? 'madero-tabs__btn--active' : ''}`}
            >
              03
            </button>
          </div>
        </div>
        <div className="madero-split__img">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeMaterialTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={
                activeMaterialTab === 1
                  ? `${CAISY}/1bc38494-fc5f-4772-806e-aded370cca3a/20c79f2d-1d53-43ca-a7ab-9476002a6436/844244886268MO25352352544267j20WARM.jpg?width=900`
                  : activeMaterialTab === 2
                  ? `${CAISY}/3be3812f-d8ce-4119-b3c4-556ebc36fa15/26f9f7ee-1d63-419a-ba57-dbeb017d06ab/844244886268MO28352352544267j20WARM.jpg?width=900`
                  : `${CAISY}/87af24bc-579f-4cdf-bde6-eefc57dd59de/6b807574-aa5d-4eb2-b26d-1cc692583af7/BOSSAdunkel9warm.jpg?width=900`
              }
              alt="Bossa Kera Madero material details close up"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AnimatePresence>
        </div>
      </section>


      {/* ── 5. NORDIC FEELING ─────────────────────────────────── */}
      <section className="madero-split madero-split--img-right">
        <div className="madero-split__text">
          <span className="madero-split__eyebrow">BOSSA | KERA | MADERO</span>
          <h2 className="madero-split__heading">Nordic feeling</h2>
          <p className="madero-split__body">
            Calm, generosity, and vitality – the BOSSA wall cladding sets new standards for kitchens and living spaces. With the natural beauty of real wood veneers in oak or walnut, it gives every room a unique, timeless look. Discover the BOSSA oak program for harmonious and stylish room design.
          </p>
          <Link to="/contact" className="madero-split__discover">Discover</Link>
        </div>
        <div className="madero-split__img">
          <img
            src={`${CAISY}/e236e881-75ed-4372-a2c1-da69c0338792/4f6f1f62-e842-402a-91a2-da1c10283c44/844244886268MO27352352544267j20.jpg?width=900`}
            alt="Bossa Kera Madero Nordic feeling layout style"
          />
        </div>
      </section>

      {/* ── 6. STORAGE CENTRE ─────────────────────────────────── */}
      <section className="madero-split madero-split--img-left">
        <div className="madero-split__text">
          <span className="madero-split__eyebrow">Clever storage solution for maximum visibility</span>
          <h2 className="madero-split__heading">Storage Centre</h2>
          <p className="madero-split__body">
            This puts an end to unreachable groceries right at the back of a unit: our storage centre is the perfect way to make sure groceries are well organised and quick to hand.
          </p>
          <Link to="/contact" className="madero-split__discover">Discover</Link>
        </div>
        <div className="madero-split__img">
          <img
            src={`${CAISY}/f5008aeb-0f00-47a4-9121-d1630756de54/7df2e795-b593-4be6-8a41-6bce223e0646/BOSSAdunkel4Render.jpg?width=900`}
            alt="Bossa Kera Madero storage centre interior details"
          />
        </div>
      </section>

      {/* ── 7. KITCHEN FEATURES (3-Column Layout) ─────────────── */}
      <section className="madero-features">
        <div className="container">
          <div className="madero-features__grid">
            {/* Column 1 */}
            <div className="madero-feature-card">
              <div className="madero-feature-card__img">
                <img
                  src={`${CAISY}/d8405165-d3b3-484c-b203-c9f2419d6056/904ad185-5775-4ffb-832b-e9bb615ddc53/844244886268D08352352544267j20RENDER.jpg?width=600`}
                  alt="Pull-out pantry cabinet"
                />
              </div>
              <div className="madero-feature-card__info">
                <h3>Pull-out pantry cabinet</h3>
                <p>Practical tall pullout unit in the same design as the drawers and drawer pullouts. All groceries are clearly arranged and immediately to hand. Units available in widths of 30, 40, and 50 cm.</p>
                <Link to="/contact" className="madero-feature-card__link">Discover →</Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="madero-feature-card">
              <div className="madero-feature-card__img">
                <img
                  src={`${CAISY}/9d7ff373-1573-4521-abc6-431cf12d2f86/77c26658-1416-45ec-a2e5-cfd21eab80ed/BOSSAdunkel10warm.jpg?width=600`}
                  alt="Fold-away sliding door systems"
                />
              </div>
              <div className="madero-feature-card__info">
                <h3>Fold-away sliding door systems</h3>
                <p>When the unit is opened, the door can be slid in at the side of the carcase. This is both practical and convenient. Devices can be optimally concealed when not in use, creating a simple, straightforward look.</p>
                <Link to="/contact" className="madero-feature-card__link">Discover now →</Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="madero-feature-card">
              <div className="madero-feature-card__img">
                <img
                  src={`${CAISY}/4717bc8d-9dd3-428f-9705-47e6a5c44adc/f6f4cc44-b32f-48e5-b2de-6aea0e43d4de/844244886268D09352352544267j20RENDER.jpg?width=600`}
                  alt="Wall unit with a depth of 60 cm"
                />
              </div>
              <div className="madero-feature-card__info">
                <h3>Wall unit with a depth of 60 cm</h3>
                <p>Wall cabinets can be constructed with the same depth as tall cabinets, providing more storage space and eliminating the need for end panels and additional wall structures. This allows for optimal use of space and creates a harmonious overall look.</p>
                <Link to="/contact" className="madero-feature-card__link">Discover →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TECHNICAL DETAILS ACCORDION PANEL ─────────────── */}
      <section className="madero-faq">
        <div className="container">
          <div className="madero-faq__header">
            <h2 className="madero-faq__heading">Technical details - BOSSA</h2>
            <p className="madero-faq__sub">
              Here you will find all the relevant information about the BOSSA program. All important questions regarding the program are answered here.
            </p>
          </div>
          <div className="madero-faq__list">
            {/* Item 1 */}
            <div className={`madero-acc${openAccordion === 1 ? ' madero-acc--open' : ''}`}>
              <button
                className="madero-acc__trigger"
                onClick={() => toggleAccordion(1)}
                aria-expanded={openAccordion === 1}
              >
                <span className="madero-acc__num">01</span>
                <span className="madero-acc__title">What colors are available for the BOSSA program?</span>
                <span className="madero-acc__icon">{openAccordion === 1 ? '−' : '+'}</span>
              </button>
              <div className="madero-acc__body" style={{ display: openAccordion === 1 ? 'block' : 'none' }}>
                <div className="madero-acc__content">
                  <p>The BOSSA program is available in the elegant wood decors HI 350v alpine oak lined and HI 352v walnut lined, bringing a warm and natural aesthetic to your kitchen.</p>
                  <div className="madero-acc__images">
                    <div className="madero-acc__img-wrapper">
                      <img src={`${CAISY}/e47be7bd-7adf-4228-9265-1d29a44b7b05/3639fb7b-9f3a-4f20-87fd-8c510806d247/350valpineicheliniert1000x100047dpi.jpg?width=600`} alt="HI 350v alpine oak lined swatch" />
                      <span>HI 350v alpine oak lined</span>
                    </div>
                    <div className="madero-acc__img-wrapper">
                      <img src={`${CAISY}/0d54d291-bf0c-4d19-a79f-68a8e6923884/68ee94f0-9194-499d-ad06-4d73133d3e30/352vwalnussliniert1000x100046dpi.jpg?width=600`} alt="HI 352v walnut lined swatch" />
                      <span>HI 352v walnut lined</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className={`madero-acc${openAccordion === 2 ? ' madero-acc--open' : ''}`}>
              <button
                className="madero-acc__trigger"
                onClick={() => toggleAccordion(2)}
                aria-expanded={openAccordion === 2}
              >
                <span className="madero-acc__num">02</span>
                <span className="madero-acc__title">Can I add a handle to the front?</span>
                <span className="madero-acc__icon">{openAccordion === 2 ? '−' : '+'}</span>
              </button>
              <div className="madero-acc__body" style={{ display: openAccordion === 2 ? 'block' : 'none' }}>
                <div className="madero-acc__content">
                  <p>Yes, handles can be added to the front to match the design of other units if desired, or it can be planned as a clean, handleless version for a minimal look.</p>
                  <div className="madero-acc__images">
                    <div className="madero-acc__img-wrapper">
                      <img src={`${CAISY}/0302ca68-ab5d-4f53-ae41-dd9ac5745c79/40d296d6-8c80-4258-9678-7a078743a817/0010201BossaGriff001.jpg?width=600`} alt="BOSSA handle front detail" />
                    </div>
                    <div className="madero-acc__img-wrapper">
                      <img src={`${CAISY}/f6204612-8e95-44fb-be85-a3980f03b3df/0c0b4059-f391-45cc-8b1a-54a7f0be5851/BossaGriffTZmehrwei.png?width=600`} alt="BOSSA handle technical scheme" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className={`madero-acc${openAccordion === 3 ? ' madero-acc--open' : ''}`}>
              <button
                className="madero-acc__trigger"
                onClick={() => toggleAccordion(3)}
                aria-expanded={openAccordion === 3}
              >
                <span className="madero-acc__num">03</span>
                <span className="madero-acc__title">What material is the BOSSA program made of?</span>
                <span className="madero-acc__icon">{openAccordion === 3 ? '−' : '+'}</span>
              </button>
              <div className="madero-acc__body" style={{ display: openAccordion === 3 ? 'block' : 'none' }}>
                <div className="madero-acc__content">
                  <p>BOSSA is based on a massive core with multiple layers of real wood veneer, ensuring a durable and high-quality surface.</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className={`madero-acc${openAccordion === 4 ? ' madero-acc--open' : ''}`}>
              <button
                className="madero-acc__trigger"
                onClick={() => toggleAccordion(4)}
                aria-expanded={openAccordion === 4}
              >
                <span className="madero-acc__num">04</span>
                <span className="madero-acc__title">Is BOSSA also available in a handleless version?</span>
                <span className="madero-acc__icon">{openAccordion === 4 ? '−' : '+'}</span>
              </button>
              <div className="madero-acc__body" style={{ display: openAccordion === 4 ? 'block' : 'none' }}>
                <div className="madero-acc__content">
                  <p>Yes, the BOSSA program is also available in a handleless version, offering a particularly elegant and modern appearance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. DISCOVER KITCHENS — SLIDER ──────────────────────── */}
      <section className="madero-discover">
        <div className="container">
          <div className="madero-discover__header">
            <div>
              <h2 className="madero-discover__heading">Discover Kitchens</h2>
              <p className="madero-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="madero-discover__actions">
              <Link to="/kitchens/leicht" className="madero-discover__all">All Kitchens →</Link>
              <div className="madero-discover__nav">
                <button className="madero-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="madero-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="madero-discover__track" ref={sliderRef}>
            {sliderSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="madero-kcard">
                <div className="madero-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="madero-kcard__info">
                  <h3 className="madero-kcard__title">{slide.title}</h3>
                  <p className="madero-kcard__sub">{slide.sub}</p>
                  <span className="madero-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ───────────────────────────────────────────── */
        .madero-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .madero-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .madero-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .madero-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .madero-hs__btn {
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
        .madero-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .madero-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: madero-hs-pulse 2.2s ease-out infinite;
        }
        @keyframes madero-hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .madero-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .madero-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .madero-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .madero-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .madero-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .madero-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #f0f0f0;
          border: 1px solid var(--border);
        }
        .madero-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .madero-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .madero-hs__tip p {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--charcoal-soft);
          line-height: 1.55;
          margin-bottom: 0;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .madero-intro {
          background: var(--white);
          padding: 80px 0 0;
        }
        .madero-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .madero-intro__text { padding-bottom: 80px; }
        .madero-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .madero-intro__body {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.35;
          color: var(--charcoal);
          font-weight: 400;
        }
        .madero-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .madero-intro__img { overflow: hidden; }
        .madero-intro__img--wide  { aspect-ratio: 7/6; }
        .madero-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .madero-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .madero-intro__img:hover img { transform: scale(1.04); }

        /* ── SPLIT SECTIONS ────────────────── */
        .madero-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .madero-split + .madero-split { border-top: none; }
        .madero-split--img-right .madero-split__text { order: 1; }
        .madero-split--img-right .madero-split__img  { order: 2; }
        .madero-split--img-left .madero-split__text  { order: 2; }
        .madero-split--img-left .madero-split__img   { order: 1; }

        .madero-split__text {
          background: #fcfbfa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px;
        }
        .madero-split__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .madero-split__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .madero-split__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
          margin-bottom: 32px;
        }
        .madero-split__discover {
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
        .madero-split__discover:hover {
          color: #8a6840;
          border-color: #8a6840;
        }
        .madero-split__img {
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .madero-split__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
        }

        /* ── DETAIL TABS ────────────────────────────────── */
        .madero-tabs {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }
        .madero-tabs__btn {
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
        .madero-tabs__btn:hover {
          color: var(--gold);
          border-color: var(--gold-light);
        }
        .madero-tabs__btn--active {
          background: var(--gold);
          color: #fff;
          border-color: var(--gold);
        }

        /* ── KITCHEN FEATURES 3-COLUMN ──────────────────────── */
        .madero-features {
          background: #23201e;
          padding: 100px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .madero-features__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .madero-feature-card {
          display: flex;
          flex-direction: column;
          background: #2a2725;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .madero-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }
        .madero-feature-card__img {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .madero-feature-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .madero-feature-card:hover .madero-feature-card__img img {
          transform: scale(1.04);
        }
        .madero-feature-card__info {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }
        .madero-feature-card__info h3 {
          font-family: var(--font-serif);
          font-size: 22px;
          color: #fff;
          font-weight: 400;
          margin: 0;
        }
        .madero-feature-card__info p {
          font-family: var(--font-sans);
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .madero-feature-card__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          margin-top: auto;
          padding-top: 12px;
          display: inline-block;
        }

        /* ── FAQ ACCORDION ───────────────────────────────────── */
        .madero-faq {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .madero-faq__header { margin-bottom: 64px; max-width: 680px; }
        .madero-faq__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .madero-faq__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--gray-mid);
          line-height: 1.6;
        }
        .madero-faq__list { border-top: 1px solid var(--border); }
        .madero-acc { border-bottom: 1px solid var(--border); }
        .madero-acc__trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .madero-acc__num {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-light);
          min-width: 28px;
        }
        .madero-acc__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          flex: 1;
        }
        .madero-acc__icon {
          font-family: var(--font-sans);
          font-size: 22px;
          color: var(--charcoal);
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .madero-acc__body {
          overflow: hidden;
        }
        .madero-acc__content {
          padding: 0 56px 36px;
        }
        .madero-acc__content p {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: var(--charcoal-soft);
          margin-bottom: 24px;
        }
        .madero-acc__images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 16px;
        }
        .madero-acc__img-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .madero-acc__img-wrapper img {
          width: 100%;
          aspect-ratio: 16/10;
          object-fit: cover;
          border: 1px solid var(--border);
        }
        .madero-acc__img-wrapper span {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--gray-mid);
          font-weight: 500;
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .madero-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .madero-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .madero-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .madero-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .madero-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .madero-discover__all {
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
        .madero-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .madero-discover__nav {
          display: flex;
          gap: 12px;
        }
        .madero-discover__nav-btn {
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
        .madero-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .madero-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .madero-discover__track::-webkit-scrollbar {
          display: none;
        }
        .madero-kcard {
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
        .madero-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .madero-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .madero-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .madero-kcard:hover .madero-kcard__img img {
          transform: scale(1.06);
        }
        .madero-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .madero-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .madero-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .madero-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .madero-kcard:hover .madero-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .madero-hero__aspect { height: 60vh; min-height: 400px; }
          .madero-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .madero-split { grid-template-columns: 1fr; }
          .madero-split__text { padding: 56px 32px; order: 2 !important; }
          .madero-split__img  { order: 1 !important; min-height: 300px; }
          .madero-split__img img { position: static; width: 100%; height: 100%; min-height: 300px; }
          .madero-video-banner { height: 400px; }
          .madero-features__grid { grid-template-columns: 1fr; gap: 32px; }
          .madero-acc__images { grid-template-columns: 1fr; gap: 20px; }
          .madero-discover__heading { font-size: 32px; }
          .madero-discover__track { gap: 20px; }
          .madero-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .madero-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
