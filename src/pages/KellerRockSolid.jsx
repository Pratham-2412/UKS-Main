import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-rock-solid assets folder
import UKS_ROCK_SOLID_HERO from '../assets/uks-rock-solid/uks-rock-solid-hero.webp';
import UKS_ROCK_SOLID_SPLIT from '../assets/uks-rock-solid/uks-rock-solid-split.webp';
import UKS_ROCK_SOLID_WIDE from '../assets/uks-rock-solid/uks-rock-solid-wide.webp';
import UKS_ROCK_SOLID_VIDEO_LANDSCAPE from '../assets/uks-rock-solid/uks-rock-solid-video-landscape.mp4';
import UKS_ROCK_SOLID_VIDEO_PORTRAIT from '../assets/uks-rock-solid/uks-rock-solid-video-portrait.mp4';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can choose from 2,050 lacquer colours in matt lacquer, satin gloss, high gloss and textured lacquer and nine stain colours. It's also possible to apply any door in melamine."
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerRockSolid() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="krs-page"
    >
      {/* ── HERO ── */}
      <section className="krs-hero">
        <img src={UKS_ROCK_SOLID_HERO} alt="Rock Solid kitchen" className="krs-hero__img" loading="eager" />
        <div className="krs-hero__overlay">
          <div className="krs-container">
            <nav className="krs-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="krs-breadcrumbs__current">Rock Solid</span>
            </nav>
            <p className="krs-hero__subtitle">Stone and steel as a basis</p>
            <h1 className="krs-hero__title">Rock Solid</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="krs-section krs-section--intro">
        <div className="krs-container krs-container--narrow">
          <h2 className="krs-intro__title">Stone and steel as a basis</h2>
          <p className="krs-intro__body">
            Stone & steel form the basis of this hyper-industrial kitchen. The island is completely wrapped in ceramics.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN VIDEO PLAYER ── */}
      <section className="krs-video-section">
        <div className="krs-video-container">
          <video className="krs-video krs-video--landscape" muted autoPlay loop playsInline>
            <source src={UKS_ROCK_SOLID_VIDEO_LANDSCAPE} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="krs-video krs-video--portrait" muted autoPlay loop playsInline>
            <source src={UKS_ROCK_SOLID_VIDEO_PORTRAIT} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right (Slate-brown background `#8b7c7a`) ── */}
      <section className="krs-split">
        <div className="krs-split__panel">
          <div className="krs-split__inner">
            <h2 className="krs-split__title">Black inlay handle for a special touch</h2>
            <p className="krs-split__body">
              The fronts in graphite textured lacquer and the black cassette handles complete the picture.
            </p>
            
            <p className="krs-split__label">In this kitchen:</p>
            <ul className="krs-split__list">
              <li>Sturdy, black inlay handle</li>
              <li>Structured lacquer for a rough, industrial effect</li>
              <li>Island completely wrapped in ceramic</li>
            </ul>
          </div>
        </div>
        <div className="krs-split__photo">
          <img src={UKS_ROCK_SOLID_SPLIT} alt="Graphite textured lacquer cabinets close-up" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="krs-section krs-section--img-wide">
        <div className="krs-container krs-container--wide">
          <figure className="krs-figure">
            <img src={UKS_ROCK_SOLID_WIDE} alt="Rock Solid kitchen layout layout" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="krs-section krs-section--faq">
        <div className="krs-container krs-container--content">
          <h2 className="krs-faq__heading">Why not try this?</h2>
          <p className="krs-faq__intro">
            You can choose from 2,050 lacquer colours in matt lacquer, satin gloss, high gloss and textured lacquer. Does your kitchen need to be able to handle heavy usage? Then choose an (ultra matt) melamine.
          </p>
          <p className="krs-faq__intro krs-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="krs-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="krs-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="krs-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="krs-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="krs-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="krs-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Dark purple-heather/charcoal bg `#625a60`, white text ── */}
      <section className="krs-cta-section">
        <div className="krs-container krs-container--narrow krs-container--centered">
          <h2 className="krs-cta__title">Curious about our programme?</h2>
          <p className="krs-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="krs-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .krs-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #8b7c7a;
          --cta-bg:     #625a60;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .krs-mt { margin-top: 16px; }

        /* ── containers ── */
        .krs-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .krs-container--narrow  { max-width: 780px; }
        .krs-container--content { max-width: 1080px; }
        .krs-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .krs-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .krs-container { padding: 0 20px; }
          .krs-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .krs-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .krs-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .krs-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .krs-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .krs-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .krs-breadcrumbs a:hover { color: #fff; }
        .krs-breadcrumbs__current { color: #fff; font-weight: 700; }

        .krs-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .krs-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .krs-section {
          padding: 80px 0;
        }
        .krs-section.no-pt { padding-top: 0; }
        
        .krs-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .krs-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── video section ── */
        .krs-video-section {
          position: relative; width: 100%; overflow: hidden; background: #000;
        }
        .krs-video-container {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
        }
        .krs-video {
          display: block; width: 100%; height: 100%; object-fit: cover;
        }
        .krs-video--portrait { display: none; }
        @media (max-width: 768px) {
          .krs-video-container { aspect-ratio: 9 / 16; }
          .krs-video--landscape { display: none; }
          .krs-video--portrait { display: block; }
        }

        /* ── split section ── */
        .krs-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .krs-split { grid-template-columns: 42fr 58fr; }
        }
        .krs-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .krs-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .krs-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .krs-split__inner { padding: 72px 72px; } }

        .krs-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .krs-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .krs-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .krs-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .krs-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .krs-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .krs-split__list li + li { margin-top: 6px; }

        .krs-split__photo { overflow: hidden; }
        .krs-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .krs-split__photo { display: flex; align-items: stretch; }
          .krs-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .krs-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .krs-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .krs-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .krs-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .krs-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .krs-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .krs-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .krs-link-faq:hover { color: rgba(0,0,0,0.7); }

        .krs-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .krs-faq__item { border-bottom: 1px solid var(--border-dark); }
        .krs-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .krs-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .krs-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .krs-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .krs-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .krs-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--white);
        }
        .krs-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .krs-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .krs-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .krs-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .krs-hero          { height: 55vh; min-height: 360px; }
          .krs-hero__overlay { padding-bottom: 40px; }
          .krs-section--intro { padding: 52px 0 44px; }
          .krs-section--faq   { padding: 52px 0 52px; }
          .krs-cta-section    { padding: 64px 0 72px; }
          .krs-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
