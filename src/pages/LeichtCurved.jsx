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
    to: '/kitchens/leicht/curved',
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
            src={`${CAISY}/c01eb32b-bcd1-4c65-b2f9-4755bbbfd652/a91f578c-eb3a-477a-b7b0-2cbef6fc86e5/TOPOSCLASSICFS01.jpg?width=1920`}
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
                src={`${CAISY}/39cb5b29-395b-49e0-ab3a-fad767db8eb3/626b7d3a-7f46-4ee1-a125-8f1b6980cf16/0840103Rundwangen001.jpg?width=1200`}
                alt="Curved side panels application view"
              />
            </div>
            <div className="curved-intro__img curved-intro__img--tall">
              <img
                src={`${CAISY}/64e57f21-5280-4617-903c-fa223cb01217/762d4bcc-ff3c-42f4-af7e-82f5f996d5ff/vincegxrGYTnAK6ksunsplash.jpg?width=800`}
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
              src={`${CAISY}/d6889859-8e1f-42aa-bce0-dd89f635d648/6d26d518-80df-4bf9-a340-ecb86a9ddc8e/0840102Rundwangen001.jpg?width=1920`}
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
                src={`${CAISY}/2c9619d5-58fb-4ee6-9949-d74833f7ce63/ec2e4acb-2b90-4263-ba50-3148379f0310/0840106Rundwangen004.jpg?width=800`}
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
                src={`${CAISY}/4215f176-6c63-435a-a632-1ed17d023023/9bbd6714-0c25-4bca-a560-6c009669b4eb/0840105Rundwangen001.jpg?width=1200`}
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
                  src={`${CAISY}/5a274e4c-7fd4-4616-ada9-3f889073352e/14d8d91d-db82-4cb1-a02c-948f42ec7c20/0840301Rundwangenvertanglaisclair002.jpg?width=800`}
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
                  src={`${CAISY}/519be19c-7c4d-40a1-b191-4fe68313d29e/992db982-4178-4f30-bd7f-6d553b3bbbc7/0840602Rundwangenbleu001.jpg?width=800`}
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
                  src={`${CAISY}/9b24ec58-0580-49be-ac34-dd87dc06bb71/8b6986b3-b654-424f-a3c0-54cfbdef840d/0840601Rundwangenlocrerouge001.jpg?width=800`}
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
                src={`${CAISY}/64ce64a8-a76b-4b1e-a29f-d148547f0582/0ad3c902-603a-467d-a0e0-d7b66087bedb/RundwangenBildmaterial4.jpg?width=800`}
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
                src={`${CAISY}/c8acddeb-ccce-4f10-a470-cfec21cfd04d/a30c6bc9-d9a2-4631-a50e-d15358ff1aa6/RundwangenBildmaterial3.jpg?width=800`}
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
                src={`${CAISY}/768e8455-eae5-4cd2-81cf-0a420d9797c1/aec21953-b9a8-48c8-8577-b3ce08e15a1f/BOSSAEBOSSAKERAEMADERO2.webp?width=800`}
                alt="BOSSA real wood walnut cladding"
              />
            </div>
            <div className="curved-bossa-item">
              <img
                src={`${CAISY}/b8af51c7-e07f-4792-80e9-94550ebc0991/fa9a1c54-6a4b-475b-b7e2-f170d13099dd/RundwangenBildmaterial5.jpg?width=800`}
                alt="BOSSA curved detail"
              />
            </div>
            <div className="curved-bossa-item">
              <img
                src={`${CAISY}/6245cf88-be0e-4dbe-9e24-cce34e6822dd/e71d880d-34dc-4e48-9caf-9f4b96d22135/RundwangenBildmaterial6.jpg?width=800`}
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
