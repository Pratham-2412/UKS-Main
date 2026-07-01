import UKS_LEICHT_CURVED_0890301IDEA003 from '../assets/uks-leicht-curved/uks-leicht-curved-0890301Idea003.jpg';
import UKS_LEICHT_CURVED_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht-curved/uks-leicht-curved-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_CURVED_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht-curved/uks-leicht-curved-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_CURVED_TOPOSCLASSICFS03 from '../assets/uks-leicht-curved/uks-leicht-curved-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_CURVED_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht-curved/uks-leicht-curved-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_CURVED_0680102FOTOPRODUKTIONA042COPY from '../assets/uks-leicht-curved/uks-leicht-curved-0680102FotoproduktionA042copy.jpg';
import UKS_LEICHT_CURVED_0480101KYOTO012NAH from '../assets/uks-leicht-curved/uks-leicht-curved-0480101Kyoto012nah.jpg';
import UKS_LEICHT_CURVED_684269M01167309J22 from '../assets/uks-leicht-curved/uks-leicht-curved-684269M01167309J22.jpg';
import UKS_LEICHT_CURVED_244753M01350120J20 from '../assets/uks-leicht-curved/uks-leicht-curved-244753M01350120j20.jpg';
import UKS_LEICHT_CURVED_001BOSSA023OHNEFUCHS3840X2160 from '../assets/uks-leicht-curved/uks-leicht-curved-001Bossa023ohnefuchs3840x2160.jpg';
import UKS_LEICHT_CURVED_0470101BAHIA026 from '../assets/uks-leicht-curved/uks-leicht-curved-0470101BAHIA026.jpg';
import UKS_LEICHT_CURVED_744293M01352192J22 from '../assets/uks-leicht-curved/uks-leicht-curved-744293M01352192j22.jpg';
import UKS_LEICHT_CURVED_713269M01103316J19 from '../assets/uks-leicht-curved/uks-leicht-curved-713269M01103316j19.jpg';
import UKS_LEICHT_CURVED_219213269M01298025312J18 from '../assets/uks-leicht-curved/uks-leicht-curved-219213269M01298025312j18.jpg';
import UKS_LEICHT_CURVED_753283213M01120335NCSJ22 from '../assets/uks-leicht-curved/uks-leicht-curved-753283213M01120335NCSj22.jpg';
import UKS_LEICHT_CURVED_739719M01134345J18 from '../assets/uks-leicht-curved/uks-leicht-curved-739719M01134345j18.jpg';
import UKS_LEICHT_CURVED_TOPOSCLASSICFS01 from '../assets/uks-leicht-curved/uks-leicht-curved-TOPOSCLASSICFS01.jpg';
import UKS_LEICHT_CURVED_0840103RUNDWANGEN001 from '../assets/uks-leicht-curved/uks-leicht-curved-0840103Rundwangen001.jpg';
import UKS_LEICHT_CURVED_VINCEGXRGYTNAK6KSUNSPLASH from '../assets/uks-leicht-curved/uks-leicht-curved-vincegxrGYTnAK6ksunsplash.jpg';
import UKS_LEICHT_CURVED_0840102RUNDWANGEN001 from '../assets/uks-leicht-curved/uks-leicht-curved-0840102Rundwangen001.jpg';
import UKS_LEICHT_CURVED_0840106RUNDWANGEN004 from '../assets/uks-leicht-curved/uks-leicht-curved-0840106Rundwangen004.jpg';
import UKS_LEICHT_CURVED_0840105RUNDWANGEN001 from '../assets/uks-leicht-curved/uks-leicht-curved-0840105Rundwangen001.jpg';
import UKS_LEICHT_CURVED_0840301RUNDWANGENVERTANGLAISCLAIR002 from '../assets/uks-leicht-curved/uks-leicht-curved-0840301Rundwangenvertanglaisclair002.jpg';
import UKS_LEICHT_CURVED_0840602RUNDWANGENBLEU001 from '../assets/uks-leicht-curved/uks-leicht-curved-0840602Rundwangenbleu001.jpg';
import UKS_LEICHT_CURVED_0840601RUNDWANGENLOCREROUGE001 from '../assets/uks-leicht-curved/uks-leicht-curved-0840601Rundwangenlocrerouge001.jpg';
import UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL4 from '../assets/uks-leicht-curved/uks-leicht-curved-RundwangenBildmaterial4.jpg';
import UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL3 from '../assets/uks-leicht-curved/uks-leicht-curved-RundwangenBildmaterial3.jpg';
import UKS_LEICHT_CURVED_BOSSAEBOSSAKERAEMADERO2 from '../assets/uks-leicht-curved/uks-leicht-curved-BOSSAEBOSSAKERAEMADERO2.webp';
import UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL5 from '../assets/uks-leicht-curved/uks-leicht-curved-RundwangenBildmaterial5.jpg';
import UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL6 from '../assets/uks-leicht-curved/uks-leicht-curved-RundwangenBildmaterial6.jpg';
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ─── CDN Base ──────────────────────────────────── */

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: UKS_LEICHT_CURVED_0890301IDEA003,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: UKS_LEICHT_CURVED_0880301FOTOPRODUKTIONRAHMENFRONT032,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: UKS_LEICHT_CURVED_0900305HYGGEHELLCYAN002,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: UKS_LEICHT_CURVED_TOPOSCLASSICFS03,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: UKS_LEICHT_CURVED_0690101FOTOPRODUKTIONK7017OBENHELLER,
    to: '/kitchens/leicht',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: UKS_LEICHT_CURVED_0680102FOTOPRODUKTIONA042COPY,
    to: '/kitchens/leicht',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: UKS_LEICHT_CURVED_0480101KYOTO012NAH,
    to: '/kitchens/leicht',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: UKS_LEICHT_CURVED_684269M01167309J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: UKS_LEICHT_CURVED_244753M01350120J20,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: UKS_LEICHT_CURVED_001BOSSA023OHNEFUCHS3840X2160,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: UKS_LEICHT_CURVED_0470101BAHIA026,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: UKS_LEICHT_CURVED_744293M01352192J22,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: UKS_LEICHT_CURVED_713269M01103316J19,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: UKS_LEICHT_CURVED_219213269M01298025312J18,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: UKS_LEICHT_CURVED_753283213M01120335NCSJ22,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: UKS_LEICHT_CURVED_739719M01134345J18,
    to: '/kitchens/leicht',
  },
]

export default function LeichtCurved() {
  const sliderRef = useRef(null)

  // Scroll handler for reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.curved-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('curved-reveal--visible')
        }
      })
    }, { threshold: 0.15 })

    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.curved-kcard')
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
      className="curved-page"
    >
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="curved-hero">
        <div className="curved-hero__aspect">
          <img
            src={UKS_LEICHT_CURVED_TOPOSCLASSICFS01}
            alt="LEICHT CURVED Kitchen Design Concept"
            className="curved-hero__img"
          />

          <div className="curved-hero__overlay">
            <div className="curved-hero__card">
              <h2 className="curved-hero__card-tagline">CURVED SIDE PANELS</h2>
              <h3 className="curved-hero__card-title">
                Curved side panels for furniture fronts create elegant transitions and emphasize the flowing room design.
              </h3>
            </div>

            <button onClick={scrollDown} className="curved-hero__scroll-btn" aria-label="Scroll down">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="37" viewBox="0 0 8 37" fill="none">
                <path d="M3.64645 36.3536C3.84171 36.5488 4.15829 36.5488 4.35355 36.3536L7.53553 33.1716C7.7308 32.9763 7.7308 32.6597 7.53553 32.4645C7.34027 32.2692 7.02369 32.2692 6.82843 32.4645L4 35.2929L1.17157 32.4645C0.976311 32.2692 0.659728 32.2692 0.464466 32.4645C0.269204 32.6597 0.269204 32.9763 0.464466 33.1716L3.64645 36.3536ZM3.5 0V36H4.5V0H3.5Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO SECTION ────────────────────────────────────────── */}
      <section className="curved-intro curved-reveal">
        <div className="curved-intro__inner container">
          <div className="curved-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Curved</span>
            </nav>
            <h4 className="curved-intro__prog">ORGANIC CURVES</h4>
            <p className="curved-intro__body">
              Harmonious blend of Form and Material. Perfection in every detail. Rounded accents with stylish impact.
            </p>
          </div>
          <div className="curved-intro__imgs">
            <div className="curved-intro__img curved-intro__img--wide">
              <img
                src={UKS_LEICHT_CURVED_0840103RUNDWANGEN001}
                alt="Curved side panels application view"
              />
            </div>
            <div className="curved-intro__img curved-intro__img--tall">
              <img
                src={UKS_LEICHT_CURVED_VINCEGXRGYTNAK6KSUNSPLASH}
                alt="Close-up of premium kitchen detail"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 3. DETAILED SPLIT DESCRIPTION ───────────────────────────── */}
      <section className="curved-split-desc curved-reveal">
        <div className="container">
          <div className="curved-split-desc__banner">
            <img
              src={UKS_LEICHT_CURVED_0840102RUNDWANGEN001}
              alt="CLASSIC-FS in matte lacquer tone mohair"
            />
          </div>
          <div className="curved-split-desc__grid">
            <div style={{ backgroundColor: '#beaa96' }} className="curved-split-desc__card">
              <span className="curved-split-desc__card-label">CLASSIC-FS MOHAIR</span>
              <div className="curved-split-desc__card-bottom">
                <h2 className="curved-split-desc__card-title">Perfection in every detail</h2>
                <p className="curved-split-desc__card-desc">
                  CLASSIC-FS in the matte lacquer tone mohair impresses with calm elegance and premium craftsmanship. Curved side panels blend seamlessly into the overall design – their inner sides precisely aligned with the visible fronts. A compact material worktop with natural inclusions and a lively texture emphasizes the sophisticated look. Generous corner radii transition smoothly into the curved silhouette. Softly rounded cover panels and tabletops complete the sculptural character, giving kitchens and living spaces a stylish, homely atmosphere.
                </p>
              </div>
            </div>
            <div className="curved-split-desc__image">
              <img
                src={UKS_LEICHT_CURVED_0840106RUNDWANGEN004}
                alt="Details of curved side panels mohair"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 4. CURVES WITH SYSTEM AND STYLE ─────────────────────────── */}
      <section className="curved-system-style curved-reveal">
        <div className="container">
          <div className="curved-system-style__grid">
            <div className="curved-system-style__image-left">
              <img
                src={UKS_LEICHT_CURVED_0840105RUNDWANGEN001}
                alt="Curved system design layout"
              />
            </div>
            <div className="curved-system-style__card-right">
              <h4 className="curved-system-style__label">TAILORED DESIGN</h4>
              <h2 className="curved-system-style__title">Curves with System and Style</h2>
              <p className="curved-system-style__desc">
                Whether floor-to-ceiling, floating, or stacked – rounded furniture can be planned to match any personal style and room layout. The curved side panels are either seamlessly connected to the cabinet body or flush-mounted, blending naturally into the overall design. Even the back sides impress with a fully closed surface visually aligned with the fronts. The result: furniture with clean lines and cohesive design – flexible, stylish, and homely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 5. COLORFUL ELEGANCE (Le Corbusier) ──────────────────────── */}
      <section className="curved-colors curved-reveal">
        <div className="container">
          <div className="curved-colors__intro">
            <h2 className="curved-colors__heading">Colorful Elegance</h2>
            <p className="curved-colors__sub">
              TOPOS and CLASSIC-FS in exclusive Les Couleurs® Le Corbusier® shades.
            </p>
          </div>
          <div className="curved-colors__grid">
            <div className="curved-color-item">
              <div className="curved-color-item__img">
                <img
                  src={UKS_LEICHT_CURVED_0840301RUNDWANGENVERTANGLAISCLAIR002}
                  alt="vert anglais clair"
                />
              </div>
              <div className="curved-color-item__info">
                <span className="curved-color-item__title">vert anglais clair</span>
                <span className="curved-color-item__code">Le Corbusier Green</span>
              </div>
            </div>

            <div className="curved-color-item">
              <div className="curved-color-item__img">
                <img
                  src={UKS_LEICHT_CURVED_0840602RUNDWANGENBLEU001}
                  alt="bleu céruléen 31"
                />
              </div>
              <div className="curved-color-item__info">
                <span className="curved-color-item__title">bleu céruléen 31</span>
                <span className="curved-color-item__code">Le Corbusier Blue</span>
              </div>
            </div>

            <div className="curved-color-item">
              <div className="curved-color-item__img">
                <img
                  src={UKS_LEICHT_CURVED_0840601RUNDWANGENLOCREROUGE001}
                  alt="l’ocre rouge"
                />
              </div>
              <div className="curved-color-item__info">
                <span className="curved-color-item__title">l’ocre rouge</span>
                <span className="curved-color-item__code">Le Corbusier Red Ochre</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 6. RADII COMPARISON (15 CM vs 5 CM) ────────────────────── */}
      <section className="curved-radii curved-reveal">
        <div className="container">
          <div className="curved-radii__block">
            <div className="curved-radii__image">
              <img
                src={UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL4}
                alt="15 cm curved side panels"
              />
            </div>
            <div className="curved-radii__text">
              <h2 className="curved-radii__title">15 cm – curved side panels</h2>
              <p className="curved-radii__desc">
                The generous 15 cm version with double curvature creates smooth transitions and a harmonious, symmetrical flow. Ideal for design concepts where form and aesthetics are in focus. The double-rounded panels lend furniture a particularly soft and inviting look – perfect for open-plan living and kitchen spaces. Available in both single and double curved 15 cm variants.
              </p>
            </div>
          </div>

          <div className="curved-radii__block curved-radii__block--reverse">
            <div className="curved-radii__image">
              <img
                src={UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL3}
                alt="5 cm curved side panels"
              />
            </div>
            <div className="curved-radii__text">
              <h2 className="curved-radii__title">5 cm – curved side panels</h2>
              <p className="curved-radii__desc">
                The compact 5 cm version features a curved side panel at the front only, while the back remains deliberately angular. This solution is ideal for minimalist designs or space-saving layouts. Thoughtful radius planning on countertops, top panels, and tabletops ensures a cohesive overall look. Depending on preference, various materials such as glass, laminate, 1.2 cm thick porcelain ceramic, or solid wood can be used.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 7. BOSSA CURVED PANEL PROGRAM ──────────────────────────── */}
      <section className="curved-bossa curved-reveal">
        <div className="container">
          <div className="curved-bossa__header">
            <h4 className="curved-bossa__eyebrow">PURE ELEGANCE</h4>
            <h2 className="curved-bossa__heading">Distinctive BOSSA Curved Side Panels</h2>
            <p className="curved-bossa__intro-text">
              Vertically textured BOSSA real wood meets soft curves – two new corner radii bring timeless elegance and homely warmth to modern kitchen and living furniture design. The seamless cladding of the handleless kitchen units with the BOSSA program in walnut gives your kitchen a modern and elegant appearance.
            </p>
          </div>
          <div className="curved-bossa__grid">
            <div className="curved-bossa-item">
              <img
                src={UKS_LEICHT_CURVED_BOSSAEBOSSAKERAEMADERO2}
                alt="BOSSA real wood walnut cladding"
              />
            </div>
            <div className="curved-bossa-item">
              <img
                src={UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL5}
                alt="BOSSA curved detail"
              />
            </div>
            <div className="curved-bossa-item">
              <img
                src={UKS_LEICHT_CURVED_RUNDWANGENBILDMATERIAL6}
                alt="BOSSA layout visual"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="curved-spacer"></div>

      {/* ── 8. DISCOVER KITCHENS SLIDER ────────────────────────────── */}
      <section className="curved-discover">
        <div className="container">
          <div className="curved-discover__header">
            <div>
              <h2 className="curved-discover__heading">Discover Kitchens</h2>
              <p className="curved-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="curved-discover__actions">
              <Link to="/kitchens/leicht" className="curved-discover__all">All Kitchens →</Link>
              <div className="curved-discover__nav">
                <button className="curved-discover__nav-btn" onClick={() => scrollSlider('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="curved-discover__nav-btn" onClick={() => scrollSlider('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="curved-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="curved-kcard">
                <div className="curved-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="curved-kcard__info">
                  <h3 className="curved-kcard__title">{slide.title}</h3>
                  <p className="curved-kcard__sub">{slide.sub}</p>
                  <span className="curved-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ────────────────────────────────────────────── */
        .curved-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .curved-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .curved-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .curved-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 40px;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%);
        }
        .curved-hero__card {
          background-color: rgba(34, 51, 59, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 32px;
          border-radius: 8px;
          max-width: 580px;
          color: #fff;
        }
        .curved-hero__card-tagline {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 12px;
        }
        .curved-hero__card-title {
          font-family: var(--font-serif);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.35;
          margin: 0;
        }
        .curved-hero__scroll-btn {
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
        .curved-hero__scroll-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(4px);
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .curved-intro {
          background: #fff;
          padding: 80px 0 0;
        }
        .curved-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .curved-intro__text {
          padding-bottom: 80px;
        }
        .curved-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .curved-intro__body {
          font-family: var(--font-sans);
          font-size: 24px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--charcoal);
        }
        .curved-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 24px;
          align-items: flex-end;
        }
        .curved-intro__img {
          overflow: hidden;
          border-radius: 12px;
        }
        .curved-intro__img--wide {
          aspect-ratio: 7 / 6;
        }
        .curved-intro__img--tall {
          aspect-ratio: 49 / 62;
        }
        .curved-intro__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-intro__img:hover img {
          transform: scale(1.04);
        }

        /* ── SPLIT DESC (MOHAIR) ─────────────────────────────── */
        .curved-split-desc {
          background: #fff;
        }
        .curved-split-desc__banner {
          width: 100%;
          aspect-ratio: 1919 / 876;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .curved-split-desc__banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-split-desc__banner:hover img {
          transform: scale(1.02);
        }
        .curved-split-desc__grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 24px;
        }
        .curved-split-desc__card {
          border-radius: 12px;
          padding: 60px 48px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 600px;
        }
        .curved-split-desc__card-label {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          opacity: 0.6;
        }
        .curved-split-desc__card-bottom {
          margin-top: auto;
        }
        .curved-split-desc__card-title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 16px;
        }
        .curved-split-desc__card-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.85;
          max-width: 480px;
        }
        .curved-split-desc__image {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 833 / 1137;
        }
        .curved-split-desc__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-split-desc__image:hover img {
          transform: scale(1.03);
        }

        /* ── SYSTEM & STYLE (SPLIT ROW) ──────────────────────── */
        .curved-system-style {
          background: #fff;
        }
        .curved-system-style__grid {
          display: grid;
          grid-template-columns: 8fr 4fr;
          gap: 24px;
          align-items: stretch;
        }
        .curved-system-style__image-left {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1151 / 1128;
        }
        .curved-system-style__image-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-system-style__image-left:hover img {
          transform: scale(1.03);
        }
        .curved-system-style__card-right {
          background-color: var(--cream-dark);
          border-radius: 12px;
          padding: 48px;
          color: var(--charcoal);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 480px;
        }
        .curved-system-style__label {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 16px;
        }
        .curved-system-style__title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .curved-system-style__desc {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.7;
          color: var(--charcoal-soft);
        }

        /* ── COLOR SWATCHES (LE CORBUSIER) ───────────────────── */
        .curved-colors {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .curved-colors__intro {
          margin-bottom: 56px;
          max-width: 600px;
        }
        .curved-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .curved-colors__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--gray-mid);
        }
        .curved-colors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .curved-color-item {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .curved-color-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
        }
        .curved-color-item__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .curved-color-item__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .curved-color-item:hover .curved-color-item__img img {
          transform: scale(1.04);
        }
        .curved-color-item__info {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .curved-color-item__title {
          font-family: var(--font-serif);
          font-size: 20px;
          color: var(--charcoal);
        }
        .curved-color-item__code {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--gold);
          font-weight: 500;
        }

        /* ── RADII COMPARISON (15cm / 5cm Blocks) ─────────────── */
        .curved-radii {
          background: #fff;
          padding: 80px 0;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .curved-radii__block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .curved-radii__block--reverse .curved-radii__image {
          order: 2;
        }
        .curved-radii__block--reverse .curved-radii__text {
          order: 1;
        }
        .curved-radii__image {
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }
        .curved-radii__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-radii__image:hover img {
          transform: scale(1.04);
        }
        .curved-radii__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .curved-radii__title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--charcoal);
        }
        .curved-radii__desc {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: var(--gray-mid);
        }

        /* ── BOSSA PROGRAM ───────────────────────────────────── */
        .curved-bossa {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .curved-bossa__header {
          margin-bottom: 56px;
          max-width: 760px;
        }
        .curved-bossa__eyebrow {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--gold);
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .curved-bossa__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 24px;
        }
        .curved-bossa__intro-text {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: var(--gray-mid);
        }
        .curved-bossa__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .curved-bossa-item {
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
        }
        .curved-bossa-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .curved-bossa-item:hover img {
          transform: scale(1.04);
        }

        /* Spacers & Reveal Animations */
        .curved-spacer {
          height: 120px;
          width: 100%;
        }
        .curved-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .curved-reveal--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .curved-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .curved-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .curved-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .curved-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .curved-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .curved-discover__all {
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
        .curved-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .curved-discover__nav {
          display: flex;
          gap: 12px;
        }
        .curved-discover__nav-btn {
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
        .curved-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .curved-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .curved-discover__track::-webkit-scrollbar { display: none; }

        .curved-kcard {
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
        .curved-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .curved-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .curved-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .curved-kcard:hover .curved-kcard__img img {
          transform: scale(1.06);
        }
        .curved-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .curved-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .curved-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .curved-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .curved-kcard:hover .curved-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 1199px) {
          .curved-split-desc__card { min-height: 480px; padding: 40px; }
          .curved-system-style__card-right { min-height: 380px; padding: 32px; }
        }
        @media (max-width: 991px) {
          .curved-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .curved-intro__text { padding-bottom: 20px; }
          .curved-intro__body { font-size: 20px; }
          .curved-split-desc__grid { grid-template-columns: 1fr; gap: 24px; }
          .curved-split-desc__card { min-height: auto; aspect-ratio: 16/10; }
          .curved-system-style__grid { grid-template-columns: 1fr; gap: 24px; }
          .curved-system-style__card-right { min-height: auto; aspect-ratio: 16/7; }
          .curved-colors__grid { grid-template-columns: 1fr; gap: 24px; }
          .curved-radii__block { grid-template-columns: 1fr; gap: 32px; }
          .curved-radii__block--reverse .curved-radii__image { order: 1; }
          .curved-radii__block--reverse .curved-radii__text { order: 2; }
          .curved-bossa__grid { grid-template-columns: 1fr; gap: 24px; }
          .curved-discover__heading { font-size: 32px; }
          .curved-discover__track { gap: 20px; }
          .curved-kcard { flex: 0 0 calc((100% - 20px) / 2); }
          .curved-spacer { height: 80px; }
        }
        @media (max-width: 767px) {
          .curved-hero__overlay { padding: 20px; flex-direction: column; align-items: flex-start; justify-content: flex-end; gap: 20px; }
          .curved-hero__card { max-width: 100%; padding: 20px; }
          .curved-hero__card-title { font-size: 24px; }
          .curved-intro__imgs { grid-template-columns: 1fr; gap: 16px; }
          .curved-intro__img { aspect-ratio: 16 / 10; }
          .curved-split-desc__card { aspect-ratio: auto; min-height: 324px; }
          .curved-system-style__card-right { aspect-ratio: auto; min-height: 240px; }
          .curved-discover__track { margin-bottom: -16px; }
          .curved-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
