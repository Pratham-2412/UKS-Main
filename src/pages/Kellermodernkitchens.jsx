import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

const MODERN_MODELS = [
  {
    name: 'Suite Life',
    desc: 'Deep warm oak textures meet dark accents for an inviting, luxurious culinary space.',
    image: `${BASE}/WmADdD35/uploads/media/68f2391d37f1b/suite-life-hero.webp?originalExtension=jpg`
  },
  {
    name: 'Natural Harmony',
    desc: 'Light open wood shelves combined with neutral sand tones create a calming, natural atmosphere.',
    image: `${BASE}/1HfN8X3c/uploads/media/66e01dd6be2d7/natural-harmony-hero.webp?originalExtension=jpg`
  },
  {
    name: 'Perfect Sense',
    desc: 'Matte anti-fingerprint surfaces in warm graphite grey provide perfect haptics and elegance.',
    image: `${BASE}/sax3Iuv0/uploads/media/6308be8ced6cc/1920-x-1090-hero-perfectsense.webp?originalExtension=jpg`
  },
  {
    name: 'Black Marble',
    desc: 'Stunning black marble elements contrasted with dark wood grains for bold architectural statements.',
    image: `${BASE}/m03J7L3K/uploads/media/6308c7e323e6f/1920-x-1090-hero-blackmarble.webp?originalExtension=jpg`
  },
  {
    name: 'City Chic',
    desc: 'Warm walnut caramel veneer matched with smooth cashmere panels for urban sophisticated living.',
    image: `${BASE}/Kc3Tl9w1/uploads/media/67444e89aecc5/1920-x-1090-hero-citychic-walnootkaramel.webp?originalExtension=jpg`
  },
  {
    name: 'Matt Black',
    desc: 'Handle-less matte black doors and ultra-slim worktops offer the ultimate minimalist design.',
    image: `${BASE}/YgLXYn6e/uploads/media/630c8aade7af0/1920-x-1090-hero-mattblack.webp?originalExtension=jpg`
  },
  {
    name: 'Modern Urban',
    desc: 'Compact layouts with smart shelving and functional configurations optimized for city apartments.',
    image: `${BASE}/HUPXKnPl/uploads/media/66e14d8593ac7/modern-urban-1326-x-884-afbeelding.webp?originalExtension=png`
  },
  {
    name: 'Nautical Navy',
    desc: 'Deep marine navy lacquer paired with light quartz countertops for a fresh, classic look.',
    image: `${BASE}/v1qjHSrB/uploads/media/630c8fac00834/1920-x-1090-hero-nauticalnavy.webp?originalExtension=jpg`
  },
  {
    name: 'Northern Nature',
    desc: 'Scandinavian-inspired combination of pale ash veneer and soft matte sage green.',
    image: `${BASE}/O8o6VGMY/uploads/media/63c905d0d2eb9/1920-x-1090-hero-northernnature.webp?originalExtension=jpg`
  },
  {
    name: 'Pure Basic',
    desc: 'Timeless white lacquer and functional, durable laminate surfaces for the family kitchen.',
    image: `${BASE}/vfXdKbzj/uploads/media/630c82c26d026/1920-x-1090-hero-purebasic.webp?originalExtension=jpg`
  },
  {
    name: 'Vogue Vibes',
    desc: 'Brushed metal metallic accents and tinted glass showcase units for a touch of haute couture.',
    image: `${BASE}/Pp1uYGRF/uploads/media/655f44e32b79d/1920-x-1090-hero-voguevibes.webp?originalExtension=jpg`
  }
]

export default function KellerModernKitchens() {
  const [activeModel, setActiveModel] = useState(0)
  const trackRef = useRef(null)

  const handleNext = () => {
    setActiveModel((prev) => (prev + 1) % MODERN_MODELS.length)
    scrollActiveIntoView((activeModel + 1) % MODERN_MODELS.length)
  }

  const handlePrev = () => {
    setActiveModel((prev) => (prev - 1 + MODERN_MODELS.length) % MODERN_MODELS.length)
    scrollActiveIntoView((activeModel - 1 + MODERN_MODELS.length) % MODERN_MODELS.length)
  }

  const scrollActiveIntoView = (index) => {
    if (trackRef.current) {
      const items = trackRef.current.querySelectorAll('.km-thumb-card')
      const target = items[index]
      if (target) {
        trackRef.current.scrollTo({
          left: target.offsetLeft - trackRef.current.offsetWidth / 2 + target.offsetWidth / 2,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="km-page"
    >
      {/* ── HERO BANNER ── */}
      <section className="km-hero">
        <img
          src="https://www.kellerkitchens.com/media/cache/generic/rc/DX7fa0IF/uploads/media/690085992d58b/silent-river-5.webp?originalExtension=jpg"
          alt="Keller Modern Kitchens"
          className="km-hero__img"
        />
        <div className="km-hero__overlay">
          <div className="container">
            <nav className="km-breadcrumbs">
              <Link to="/kitchens">Kitchens</Link>
              <span>/</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span>/</span>
              <span className="current">Modern Kitchens</span>
            </nav>
            <h1 className="km-hero__title">Modern Kitchens</h1>
            <p className="km-hero__subtitle">Sleek, timeless design with a graphic interplay of lines.</p>
          </div>
        </div>
      </section>

      {/* ── INTRO DETAILS ── */}
      <section className="km-intro">
        <div className="container">
          <div className="km-intro__grid">
            <div className="km-intro__left">
              <span className="km-label">INTERIOR STYLES</span>
              <h2 className="km-intro__heading">The Personal Kitchen – Modern Style</h2>
            </div>
            <div className="km-intro__right">
              <p className="km-intro__desc">
                The modern interior style incorporates sleek, timeless design palettes. In addition to clean lines or a graphic interplay of lines, we are also seeing more and more round shapes these days. The interior is often minimalistic with lots of natural light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CAROUSEL GRID ── */}
      <section className="km-carousel-sec">
        <div className="container">
          <div className="km-display-card">
            <div className="km-display-card__image-wrap">
              <img
                src={MODERN_MODELS[activeModel].image}
                alt={MODERN_MODELS[activeModel].name}
                className="km-display-card__img"
              />
            </div>
            <div className="km-display-card__content">
              <span className="km-display-card__eyebrow">KELLER MODERN SERIES</span>
              <h3 className="km-display-card__title">{MODERN_MODELS[activeModel].name}</h3>
              <p className="km-display-card__text">{MODERN_MODELS[activeModel].desc}</p>
              <div className="km-display-card__nav">
                <button onClick={handlePrev} className="km-nav-btn" aria-label="Previous kitchen">
                  &#8592;
                </button>
                <span className="km-nav-counter">
                  {String(activeModel + 1).padStart(2, '0')} / {String(MODERN_MODELS.length).padStart(2, '0')}
                </span>
                <button onClick={handleNext} className="km-nav-btn" aria-label="Next kitchen">
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          <div className="km-thumbs-track" ref={trackRef}>
            {MODERN_MODELS.map((model, idx) => (
              <button
                key={model.name}
                onClick={() => {
                  setActiveModel(idx)
                  scrollActiveIntoView(idx)
                }}
                className={`km-thumb-card${activeModel === idx ? ' km-thumb-card--active' : ''}`}
              >
                <div className="km-thumb-card__img-wrap">
                  <img src={model.image} alt={model.name} />
                </div>
                <span className="km-thumb-card__name">{model.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 : CUBISM & DETAILS ── */}
      <section className="km-split-sec">
        <div className="container">
          <div className="km-split-sec__grid">
            <div className="km-split-sec__content">
              <span className="km-label">DESIGN MOVEMENT</span>
              <h2 className="km-split-sec__title">Is modern your style?</h2>
              <p className="km-split-sec__desc">
                This style has various movements, such as Scandinavian, Italian, and of course, Dutch design. In today's modern interior, we recognise the influence of Cubism, with clean lines and geometric surfaces.
              </p>
              <Link to="/contact" className="km-btn-primary">
                Enquire About Modern Kitchens
              </Link>
            </div>
            <div className="km-split-sec__img-wrap">
              <img
                src="https://www.kellerkitchens.com/media/cache/generic/rc/nN4ujE4p/uploads/media/630760f1e967e/960-x-1024-modern.webp?originalExtension=png"
                alt="Is modern your style? Keller kitchens panel"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 : BROCHURE DOWNLOAD ── */}
      <section className="km-brochure-sec">
        <div className="container">
          <div className="km-brochure-sec__box">
            <div className="km-brochure-sec__content">
              <span className="km-label" style={{ color: 'rgba(255,255,255,0.7)' }}>GET INSPIRED</span>
              <h2 className="km-brochure-sec__title">Want more inspiration?</h2>
              <p className="km-brochure-sec__desc">
                Finding inspiration is an important step towards your personal kitchen, and perhaps the most fun! In our brochure we offer you kitchen inspiration in four interior styles, according to the latest trends. For each kitchen you will find the materials and colours used, and we show alternatives for a different taste or price tag.
              </p>
              <Link to="/contact" className="km-btn-secondary">
                Request Our Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .km-page {
          --cream:    #f5f5f7;
          --charcoal: #1d1d1f;
          --ch-soft:  #424245;
          --gold:     #b39b7d;
          --border:   #d2d2d7;
          --white:    #ffffff;
          --gray:     #86868b;
          --ff-serif: var(--font-serif, 'Georgia', serif);
          --ff-sans:  var(--font-sans, system-ui, sans-serif);
          background: var(--cream);
          color: var(--charcoal);
          overflow-x: hidden;
        }
        .km-page .container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
        }
        @media (max-width: 767px)  { .km-page .container { padding: 0 16px; } }
        @media (max-width: 1023px) { .km-page .container { padding: 0 32px; } }

        .km-label {
          display: inline-block;
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px;
        }

        /* ── hero ── */
        .km-hero {
          position: relative; width: 100%; height: 500px; overflow: hidden;
          background: #000;
        }
        @media (min-width: 992px) { .km-hero { height: 600px; } }
        .km-hero__img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          opacity: 0.75;
        }
        .km-hero__overlay {
          position: absolute; inset: 0;
          display: flex; align-items: flex-end;
          padding-bottom: 80px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
        }
        .km-breadcrumbs {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--ff-sans); font-size: 12px; color: rgba(255,255,255,0.6);
          margin-bottom: 16px;
        }
        .km-breadcrumbs a { color: #fff; text-decoration: none; }
        .km-breadcrumbs a:hover { color: var(--gold); }
        .km-breadcrumbs .current { color: var(--gold); }
        .km-hero__title {
          font-family: var(--ff-serif); font-size: 42px; font-weight: 300;
          color: #fff; margin: 0 0 12px;
        }
        @media (min-width: 768px) { .km-hero__title { font-size: 56px; } }
        .km-hero__subtitle {
          font-family: var(--ff-sans); font-size: 16px; color: rgba(255,255,255,0.8);
          margin: 0; max-width: 580px; line-height: 1.5;
        }

        /* ── intro ── */
        .km-intro { padding: 80px 0; background: var(--white); }
        .km-intro__grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 992px) {
          .km-intro__grid { grid-template-columns: 5fr 7fr; gap: 60px; align-items: flex-start; }
        }
        .km-intro__heading {
          font-family: var(--ff-serif); font-size: 32px; font-weight: 300;
          color: var(--charcoal); margin: 0; line-height: 1.25;
        }
        @media (min-width: 768px) { .km-intro__heading { font-size: 40px; } }
        .km-intro__desc {
          font-family: var(--ff-sans); font-size: 16px; line-height: 1.75;
          color: var(--ch-soft); margin: 0;
        }

        /* ── interactive carousel ── */
        .km-carousel-sec { padding: 80px 0 100px; background: var(--cream); }
        .km-display-card {
          display: grid; grid-template-columns: 1fr;
          background: var(--white); border-radius: 16px; overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.06); margin-bottom: 48px;
        }
        @media (min-width: 992px) {
          .km-display-card { grid-template-columns: 7fr 5fr; }
        }
        .km-display-card__image-wrap { width: 100%; aspect-ratio: 16/10; overflow: hidden; }
        @media (min-width: 992px) { .km-display-card__image-wrap { aspect-ratio: auto; height: 100%; } }
        .km-display-card__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .km-display-card__content {
          padding: 40px 32px; display: flex; flex-direction: column; justify-content: center;
        }
        @media (min-width: 992px) { .km-display-card__content { padding: 60px 48px; } }
        .km-display-card__eyebrow {
          font-family: var(--ff-sans); font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold);
          margin-bottom: 12px; display: block;
        }
        .km-display-card__title {
          font-family: var(--ff-serif); font-size: 32px; font-weight: 300;
          color: var(--charcoal); margin: 0 0 16px;
        }
        .km-display-card__text {
          font-family: var(--ff-sans); font-size: 15px; line-height: 1.7;
          color: var(--ch-soft); margin: 0 0 32px;
        }
        
        .km-display-card__nav { display: flex; align-items: center; gap: 24px; }
        .km-nav-btn {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid var(--border); background: var(--white);
          color: var(--charcoal); font-size: 18px; display: flex;
          align-items: center; justify-content: center; cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
        }
        .km-nav-btn:hover { background: var(--cream); border-color: var(--charcoal); }
        .km-nav-counter {
          font-family: var(--ff-sans); font-size: 14px; font-weight: 600;
          color: var(--gray); letter-spacing: 0.05em;
        }

        .km-thumbs-track {
          display: flex; gap: 20px; overflow-x: auto;
          padding-bottom: 16px; scroll-behavior: smooth;
          scrollbar-width: none; -webkit-overflow-scrolling: touch;
        }
        .km-thumbs-track::-webkit-scrollbar { display: none; }
        .km-thumb-card {
          flex: 0 0 140px; border: 2px solid transparent; background: var(--white);
          border-radius: 12px; overflow: hidden; padding: 0; outline: none;
          cursor: pointer; display: flex; flex-direction: column; gap: 8px;
          text-align: left; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        @media (min-width: 768px) { .km-thumb-card { flex: 0 0 180px; } }
        .km-thumb-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
        .km-thumb-card--active { border-color: var(--gold); }
        .km-thumb-card__img-wrap { width: 100%; aspect-ratio: 3/2; overflow: hidden; }
        .km-thumb-card__img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .km-thumb-card__name {
          font-family: var(--ff-sans); font-size: 12px; font-weight: 600;
          color: var(--charcoal); padding: 0 12px 12px; display: block;
        }

        /* ── split details ── */
        .km-split-sec { padding: 100px 0; background: var(--white); border-top: 1px solid var(--border); }
        .km-split-sec__grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 992px) {
          .km-split-sec__grid { grid-template-columns: 5fr 7fr; gap: 80px; }
        }
        .km-split-sec__content { display: flex; flex-direction: column; gap: 16px; }
        .km-split-sec__title {
          font-family: var(--ff-serif); font-size: 32px; font-weight: 300;
          color: var(--charcoal); margin: 0;
        }
        @media (min-width: 768px) { .km-split-sec__title { font-size: 42px; } }
        .km-split-sec__desc {
          font-family: var(--ff-sans); font-size: 15px; line-height: 1.75;
          color: var(--ch-soft); margin: 0 0 16px;
        }
        .km-btn-primary {
          display: inline-block; width: fit-content;
          font-family: var(--ff-sans); font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          background: var(--charcoal); color: var(--white);
          padding: 14px 28px; border-radius: 4px; text-decoration: none;
          transition: background-color 0.25s, transform 0.25s;
        }
        .km-btn-primary:hover { background: var(--gold); transform: translateY(-2px); }
        
        .km-split-sec__img-wrap { border-radius: 16px; overflow: hidden; aspect-ratio: 960/1024; }
        .km-split-sec__img-wrap img { width: 100%; height: 100%; object-fit: cover; }

        /* ── brochure ── */
        .km-brochure-sec { padding: 100px 0 120px; background: var(--cream); border-top: 1px solid var(--border); }
        .km-brochure-sec__box {
          width: 100%; background: var(--charcoal); border-radius: 20px;
          padding: 60px 40px; color: var(--white); text-align: center;
          display: flex; flex-direction: column; align-items: center;
          box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        }
        @media (min-width: 992px) { .km-brochure-sec__box { padding: 80px 100px; } }
        .km-brochure-sec__content { max-width: 720px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .km-brochure-sec__title {
          font-family: var(--ff-serif); font-size: 36px; font-weight: 300;
          color: var(--white); margin: 0;
        }
        @media (min-width: 768px) { .km-brochure-sec__title { font-size: 48px; } }
        .km-brochure-sec__desc {
          font-family: var(--ff-sans); font-size: 15px; line-height: 1.75;
          color: rgba(255,255,255,0.75); margin: 0 0 24px;
        }
        .km-btn-secondary {
          display: inline-block; width: fit-content;
          font-family: var(--ff-sans); font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.1em;
          background: var(--white); color: var(--charcoal);
          padding: 14px 28px; border-radius: 4px; text-decoration: none;
          transition: background-color 0.25s, transform 0.25s;
        }
        .km-btn-secondary:hover { background: var(--gold); color: var(--white); transform: translateY(-2px); }
      `}</style>
    </motion.div>
  )
}
