import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ─── CDN Base ──────────────────────────────────── */
const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

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
    to: '/kitchens/leicht',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `${CAISY}/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: `${CAISY}/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200`,
    to: '/kitchens/leicht',
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

export default function LeichtHygge() {
  const sliderRef = useRef(null)

  // Scroll handler for reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.hygge2-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hygge2-reveal--visible')
        }
      })
    }, { threshold: 0.15 })

    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.hygge2-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="hygge-page"
    >
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="hygge2-hero">
        <div className="hygge2-hero__aspect">
          <img
            src={`${CAISY}/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1920`}
            alt="LEICHT HYGGE Kitchen Design Concept"
            className="hygge2-hero__img"
          />

          <div className="hygge2-hero__overlay">
            <div className="hygge2-hero__card">
              <h2 className="hygge2-hero__card-tagline">HYGGE in the kitchen</h2>
              <h3 className="hygge2-hero__card-title">
                Experience Scandinavian calm in the kitchen consciously and spatially
              </h3>
            </div>

            <button onClick={scrollDown} className="hygge2-hero__scroll-btn" aria-label="Scroll down">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="37" viewBox="0 0 8 37" fill="none">
                <path d="M3.64645 36.3536C3.84171 36.5488 4.15829 36.5488 4.35355 36.3536L7.53553 33.1716C7.7308 32.9763 7.7308 32.6597 7.53553 32.4645C7.34027 32.2692 7.02369 32.2692 6.82843 32.4645L4 35.2929L1.17157 32.4645C0.976311 32.2692 0.659728 32.2692 0.464466 32.4645C0.269204 32.6597 0.269204 32.9763 0.464466 33.1716L3.64645 36.3536ZM3.5 0V36H4.5V0H3.5Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO SECTION ────────────────────────────────────────── */}
      <section className="hygge2-intro hygge2-reveal">
        <div className="hygge2-intro__inner container">
          <div className="hygge2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Hygge</span>
            </nav>
            <h4 className="hygge2-intro__prog">LIVING WITH FEELING</h4>
            <p className="hygge2-intro__body">
              Dive into the Scandinavian world full of atmosphere, warm colors, natural materials, and clear forms.
            </p>
          </div>
          <div className="hygge2-intro__imgs">
            <div className="hygge2-intro__img hygge2-intro__img--wide">
              <img
                src={`${CAISY}/0a493c36-aa6d-40ca-88aa-841fd759023b/4730b9cc-5e56-4d48-af32-e27b9a73249c/0900306Hyggehellcyan002.jpg?width=1000`}
                alt="Hygge light cyan kitchen concept"
              />
            </div>
            <div className="hygge2-intro__img hygge2-intro__img--tall">
              <img
                src={`${CAISY}/87313d7c-5668-4cf4-89c9-c87bcd50e442/4fe53770-e104-423c-b21f-c64af64cedb8/0902004HyggeLebensmittel001.jpg?width=600`}
                alt="Nordic natural food ingredients close-up"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 3. NORDIC TRANQUILITY TEXT BLOCK ────────────────────────── */}
      <section className="hygge2-text-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-text-block__grid">
            <div className="hygge2-text-block__label">
              NORDIC TRANQUILITY
            </div>
            <div className="hygge2-text-block__body">
              Soft light, natural materials and soft colours characterise the atmosphere of Scandinavian-inspired living environments. Reduction and clarity determine the design and make rooms appear open, harmonious and inviting. With HYGGE, LEICHT brings this feeling into the kitchen and combines aesthetic restraint with architectural depth. Six finely nuanced shades – from soft beige to taupe and moss green to Skagerrak blue, rosé apricot and cream white – open up a wide range of planning possibilities. Whether smooth textured lacquer fronts, satin matt surfaces, framed fronts or embossed veneer: the result is a kitchen that radiates calm, conveys a sense of security and looks natural.
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 4. COLOR 1 - ROSÉ TINTED (RAL 010 80 10) ────────────────── */}
      <section className="hygge2-color-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-color-block__banner">
            <img
              src={`${CAISY}/3d55c5ef-b249-4f31-a8c2-66c78da7df53/f2d33383-f270-4cf7-af72-d01b01a036aa/0902001HyggeLebensmittel001.jpg?width=1400`}
              alt="Rosé tinted ingredients banner"
            />
          </div>
          <div className="hygge2-color-block__grid">
            <div style={{ backgroundColor: '#d3b8bb' }} className="hygge2-color-card">
              <span className="hygge2-color-card__label">MUD PINK</span>
              <div className="hygge2-color-card__bottom">
                <h2 className="hygge2-color-card__ral">RAL 010 80 10</h2>
                <p className="hygge2-color-card__desc">
                  Rosé tinted – an earthy pink shade with a muted nuance that gives the interior a feeling of well-being and freshness.
                </p>
              </div>
            </div>
            <div className="hygge2-color-image">
              <img
                src={`${CAISY}/f370afed-0f4f-4c4e-8ac6-419e9aee96dd/662e75c0-2542-4a27-a72b-3664a69e7b39/0900502Hyggeschlammpink005.jpg?width=800`}
                alt="Rosé tinted kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 5. COLOR 2 - WAX YELLOW (RAL 090 90 30) ─────────────────── */}
      <section className="hygge2-split-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-split-block__grid">
            <div style={{ backgroundColor: '#f8e1a8' }} className="hygge2-split-card">
              <div className="hygge2-split-card__inner">
                <h2 className="hygge2-split-card__ral">RAL 090 90 30</h2>
                <p className="hygge2-split-card__desc">wax yellow</p>
              </div>
            </div>
            <div className="hygge2-split-image">
              <img
                src={`${CAISY}/c1a24326-c681-466f-9615-04c856c93d2c/7d3a6b1a-8871-419b-bbad-d3865067deda/0901103Hyggewachsgelb003.jpg?width=1200`}
                alt="Wax yellow kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 6. HYGGE ATMOSPHERE TEXT BLOCK ──────────────────────────── */}
      <section className="hygge2-text-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-text-block__grid">
            <div className="hygge2-text-block__label">
              HYGGE ATMOSPHERE
            </div>
            <div className="hygge2-text-block__body">
              Soft colours, matt surfaces and natural materials create kitchens that radiate peace and security. Inspired by the Scandinavian attitude to life, the hygge concept becomes an attitude: clear shapes, restrained colours and a design that leaves room to breathe. Light tones such as beige, apricot or cream white, combined with subtle blue, moss green or taupe, bring lightness and depth at the same time. Implemented in textured lacquer, satin finish, framed fronts or veneers, the result is a kitchen that has a harmonious effect, atmospherically decelerates and naturally integrates into the living space.
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 7. COLOR 3 - FOREST TRANQUILITY (RAL 120 70 10) ─────────── */}
      <section className="hygge2-color-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-color-block__banner">
            <img
              src={`${CAISY}/732e269f-dbb0-4153-868c-4d3c25561ecf/c10dee7e-d1fb-4a31-b917-274258a7fb46/0902002HyggeLebensmittel001.jpg?width=1400`}
              alt="Forest tranquility ingredients banner"
            />
          </div>
          <div className="hygge2-color-block__grid">
            <div style={{ backgroundColor: '#a9ad99' }} className="hygge2-color-card">
              <span className="hygge2-color-card__label">NIL GREEN</span>
              <div className="hygge2-color-card__bottom">
                <h2 className="hygge2-color-card__ral">RAL 120 70 10</h2>
                <p className="hygge2-color-card__desc">
                  Forest tranquility – a soft, warm green that brings the naturalness of deep forests into the home and creates a feeling of comfort.
                </p>
              </div>
            </div>
            <div className="hygge2-color-image">
              <img
                src={`${CAISY}/7ec488d2-fe32-4049-92b2-a3e3a44b45e1/1b9cc9e9-76d7-440f-b138-f18fe163befe/0900402Hyggenilgruen006.jpg?width=800`}
                alt="Forest green kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 8. COLOR 4 - FLAX BEIGE (RAL 070 80 10) ─────────────────── */}
      <section className="hygge2-split-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-split-block__grid">
            <div style={{ backgroundColor: '#d4c3b3' }} className="hygge2-split-card">
              <div className="hygge2-split-card__inner">
                <h2 className="hygge2-split-card__ral">RAL 070 80 10</h2>
                <p className="hygge2-split-card__desc">flax beige</p>
              </div>
            </div>
            <div className="hygge2-split-image">
              <img
                src={`${CAISY}/c824eae0-8ab0-486d-b688-5091a4f361c2/21c9bcbd-3135-40e9-8ca3-e92f359de039/0900401Hyggeflachsbeige005.jpg?width=1200`}
                alt="Flax beige kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 9. LIVING WITH HYGGE TEXT BLOCK ─────────────────────────── */}
      <section className="hygge2-text-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-text-block__grid">
            <div className="hygge2-text-block__label">
              LIVING WITH HYGGE
            </div>
            <div className="hygge2-text-block__body">
              Hygge is more than a colour concept – it's a feeling. The kitchen becomes a place where warmth, peace and naturalness can be felt. Soft nuances, flowing transitions and soft surfaces lend the room a special lightness. Here, design takes a back seat and makes room for atmosphere, serenity and security. Whether cooking together, talking or in a quiet moment: hygge brings Nordic calm to everyday life and gives the kitchen a new emotional depth.
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 10. COLOR 5 - DEEP BROWN (RAL 060 60 10) ────────────────── */}
      <section className="hygge2-color-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-color-block__banner">
            <img
              src={`${CAISY}/e0dc72ad-ed5c-4b90-adee-aaadab4625c0/5830bffa-177b-46ac-baf8-f558a8f61390/0902003HyggeLebensmittel001.jpg?width=1400`}
              alt="Deep brown ingredients banner"
            />
          </div>
          <div className="hygge2-color-block__grid">
            <div style={{ backgroundColor: '#a18d80' }} className="hygge2-color-card">
              <span className="hygge2-color-card__label">OAK BROWN</span>
              <div className="hygge2-color-card__bottom">
                <h2 className="hygge2-color-card__ral">RAL 060 60 10</h2>
                <p className="hygge2-color-card__desc">
                  Deep brown – reminiscent of warm oak. A colour that reflects permanence and exudes harmony.
                </p>
              </div>
            </div>
            <div className="hygge2-color-image">
              <img
                src={`${CAISY}/4972a1d6-8d46-46bc-83d8-a2caf5ad01fd/81a4a910-43ad-4146-ac9e-80826f007064/0901004Hyggeeichenbraun0021.jpg?width=800`}
                alt="Deep brown oak kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 11. COLOR 6 - LIGHT CYAN (RAL 250 80 10) ────────────────── */}
      <section className="hygge2-split-block hygge2-reveal">
        <div className="container">
          <div className="hygge2-split-block__grid">
            <div style={{ backgroundColor: '#b6cad7' }} className="hygge2-split-card">
              <div className="hygge2-split-card__inner">
                <h2 className="hygge2-split-card__ral">RAL 250 80 10</h2>
                <p className="hygge2-split-card__desc">light cyan</p>
              </div>
            </div>
            <div className="hygge2-split-image">
              <img
                src={`${CAISY}/65cbce6f-138e-4923-b9c1-a0c7433d3bb0/14c7060a-97e1-45f7-8b84-a606a2330530/0900306Hyggehellcyan002.jpg?width=1200`}
                alt="Light cyan kitchen application"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="hygge2-spacer"></div>

      {/* ── 12. DISCOVER KITCHENS SLIDER ────────────────────────────── */}
      <section className="hygge2-discover">
        <div className="container">
          <div className="hygge2-discover__header">
            <div>
              <h2 className="hygge2-discover__heading">Discover Kitchens</h2>
              <p className="hygge2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="hygge2-discover__actions">
              <Link to="/kitchens/leicht" className="hygge2-discover__all">All Kitchens →</Link>
              <div className="hygge2-discover__nav">
                <button className="hygge2-discover__nav-btn" onClick={() => scrollSlider('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="hygge2-discover__nav-btn" onClick={() => scrollSlider('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hygge2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="hygge2-kcard">
                <div className="hygge2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="hygge2-kcard__info">
                  <h3 className="hygge2-kcard__title">{slide.title}</h3>
                  <p className="hygge2-kcard__sub">{slide.sub}</p>
                  <span className="hygge2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ────────────────────────────────────────────── */
        .hygge2-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .hygge2-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .hygge2-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hygge2-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 40px;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%);
        }
        .hygge2-hero__card {
          background-color: rgba(34, 51, 59, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 32px;
          border-radius: 8px;
          max-width: 552px;
          color: #fff;
        }
        .hygge2-hero__card-tagline {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 12px;
        }
        .hygge2-hero__card-title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          line-height: 1.35;
          margin: 0;
        }
        .hygge2-hero__scroll-btn {
          width: 48px;
          height: 60px;
          border-radius: 24px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          margin-bottom: 8px;
        }
        .hygge2-hero__scroll-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(4px);
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .hygge2-intro {
          background: #fff;
          padding: 80px 0 0;
        }
        .hygge2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .hygge2-intro__text {
          padding-bottom: 80px;
        }
        .hygge2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .hygge2-intro__body {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--charcoal);
        }
        .hygge2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 24px;
          align-items: flex-end;
        }
        .hygge2-intro__img {
          overflow: hidden;
          border-radius: 12px;
        }
        .hygge2-intro__img--wide {
          aspect-ratio: 7 / 6;
        }
        .hygge2-intro__img--tall {
          aspect-ratio: 49 / 62;
        }
        .hygge2-intro__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hygge2-intro__img:hover img {
          transform: scale(1.04);
        }

        /* ── TEXT BLOCK ──────────────────────────────────────── */
        .hygge2-text-block {
          background: #fff;
        }
        .hygge2-text-block__grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 40px;
          align-items: flex-start;
        }
        .hygge2-text-block__label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--charcoal);
          opacity: 0.85;
          text-transform: uppercase;
        }
        .hygge2-text-block__body {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.8;
          color: var(--charcoal-soft);
        }

        /* ── ODD COLOR BLOCK (ROSÉ, GREEN, BROWN) ────────────── */
        .hygge2-color-block {
          background: #fff;
        }
        .hygge2-color-block__banner {
          width: 100%;
          aspect-ratio: 1919 / 876;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .hygge2-color-block__banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hygge2-color-block__banner:hover img {
          transform: scale(1.02);
        }
        .hygge2-color-block__grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 24px;
        }
        .hygge2-color-card {
          border-radius: 12px;
          padding: 60px 48px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 600px;
        }
        .hygge2-color-card__label {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          opacity: 0.6;
        }
        .hygge2-color-card__bottom {
          margin-top: auto;
        }
        .hygge2-color-card__ral {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 16px;
        }
        .hygge2-color-card__desc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 460px;
        }
        .hygge2-color-image {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 833 / 1137;
        }
        .hygge2-color-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hygge2-color-image:hover img {
          transform: scale(1.03);
        }

        /* ── EVEN SPLIT ROW (YELLOW, BEIGE, CYAN) ──────────────── */
        .hygge2-split-block {
          background: #fff;
        }
        .hygge2-split-block__grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 24px;
          align-items: stretch;
        }
        .hygge2-split-card {
          border-radius: 12px;
          padding: 48px;
          color: #fff;
          display: flex;
          align-items: flex-end;
          min-height: 480px;
        }
        .hygge2-split-card__inner {
          width: 100%;
        }
        .hygge2-split-card__ral {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .hygge2-split-card__desc {
          font-family: var(--font-sans);
          font-size: 15px;
          opacity: 0.9;
        }
        .hygge2-split-image {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1151 / 1128;
        }
        .hygge2-split-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hygge2-split-image:hover img {
          transform: scale(1.03);
        }

        /* Spacers & Reveal Animations */
        .hygge2-spacer {
          height: 120px;
          width: 100%;
        }
        .hygge2-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .hygge2-reveal--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .hygge2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .hygge2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .hygge2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .hygge2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .hygge2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .hygge2-discover__all {
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
        .hygge2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .hygge2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .hygge2-discover__nav-btn {
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
        .hygge2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .hygge2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .hygge2-discover__track::-webkit-scrollbar { display: none; }

        .hygge2-kcard {
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
        .hygge2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .hygge2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .hygge2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .hygge2-kcard:hover .hygge2-kcard__img img {
          transform: scale(1.06);
        }
        .hygge2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .hygge2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .hygge2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .hygge2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .hygge2-kcard:hover .hygge2-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 1199px) {
          .hygge2-color-card { min-height: 480px; padding: 40px; }
          .hygge2-split-card { min-height: 380px; padding: 32px; }
        }
        @media (max-width: 991px) {
          .hygge2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .hygge2-intro__text { padding-bottom: 20px; }
          .hygge2-intro__body { font-size: 20px; }
          .hygge2-text-block__grid { grid-template-columns: 1fr; gap: 16px; }
          .hygge2-color-block__grid { grid-template-columns: 1fr; gap: 24px; }
          .hygge2-color-card { min-height: auto; aspect-ratio: 16/10; }
          .hygge2-split-block__grid { grid-template-columns: 1fr; gap: 24px; }
          .hygge2-split-card { min-height: auto; aspect-ratio: 16/7; }
          .hygge2-discover__heading { font-size: 32px; }
          .hygge2-discover__track { gap: 20px; }
          .hygge2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
          .hygge2-spacer { height: 80px; }
        }
        @media (max-width: 767px) {
          .hygge2-hero__overlay { padding: 20px; flex-direction: column; align-items: flex-start; justify-content: flex-end; gap: 20px; }
          .hygge2-hero__card { max-width: 100%; padding: 20px; }
          .hygge2-hero__card-title { font-size: 24px; }
          .hygge2-intro__imgs { grid-template-columns: 1fr; gap: 16px; }
          .hygge2-intro__img { aspect-ratio: 16 / 10; }
          .hygge2-color-card { aspect-ratio: auto; min-height: 324px; }
          .hygge2-split-card { aspect-ratio: auto; min-height: 240px; }
          .hygge2-discover__track { margin-bottom: -16px; }
          .hygge2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
