import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-black-metal assets folder
import UKS_BLACK_METAL_HERO from '../assets/uks-black-metal/uks-black-metal-hero.webp';
import UKS_BLACK_METAL_SPLIT from '../assets/uks-black-metal/uks-black-metal-split.webp';
import UKS_BLACK_METAL_WIDE from '../assets/uks-black-metal/uks-black-metal-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can choose from various beautiful decors in melamine and an extensive collection of handles."
  },
  {
    q: 'How do I maintain welded frames and glass units?',
    a: 'Frames can be cleaned with normal household cleaning products and dried with a soft cloth. The glass can be cleaned with mild detergents and normal glass cleaners. Do not use chemicals or strong corrosive agents. Dry with a soft cloth or chamois for a streak-free result.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerBlackMetal() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbm-page"
    >
      {/* ── HERO ── */}
      <section className="kbm-hero">
        <img src={UKS_BLACK_METAL_HERO} alt="Black Metal kitchen" className="kbm-hero__img" loading="eager" />
        <div className="kbm-hero__overlay">
          <div className="kbm-container">
            <nav className="kbm-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbm-breadcrumbs__current">Black Metal</span>
            </nav>
            <p className="kbm-hero__subtitle">Trendy metal look kitchen</p>
            <h1 className="kbm-hero__title">Black Metal</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kbm-section kbm-section--intro">
        <div className="kbm-container kbm-container--narrow">
          <h2 className="kbm-intro__title">Trendy metal look kitchen</h2>
          <p className="kbm-intro__body">
            It's the latest kitchen trend: an industrial look, dark colours, cool metal and stone. The grey floor and raw concrete-look wall form the perfect basis.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="kbm-fullscreen">
        <img src={UKS_BLACK_METAL_HERO} alt="Black Metal kitchen perspective view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right (Very dark background `#1a1b1e`) ── */}
      <section className="kbm-split">
        <div className="kbm-split__panel">
          <div className="kbm-split__inner">
            <h2 className="kbm-split__title">Black metal, glass and concrete</h2>
            <p className="kbm-split__body">
              A beautiful combination of cool colours and materials.
            </p>
            
            <p className="kbm-split__label">In this kitchen:</p>
            <ul className="kbm-split__list">
              <li>Metal-look doors according to the latest trend</li>
              <li>The welded smart cubes that emphasize the industrial character</li>
              <li>Sturdy, metal handles</li>
            </ul>
          </div>
        </div>
        <div className="kbm-split__photo">
          <img src={UKS_BLACK_METAL_SPLIT} alt="Welded smart cubes and glass shelving" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kbm-section kbm-section--img-wide">
        <div className="kbm-container kbm-container--wide">
          <figure className="kbm-figure">
            <img src={UKS_BLACK_METAL_WIDE} alt="Black Metal kitchen layout close-up" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Cool slate-grey bg `#4a505d`, white text) ── */}
      <section className="kbm-section kbm-section--faq">
        <div className="kbm-container kbm-container--content">
          <h2 className="kbm-faq__heading">Why not try this?</h2>
          <p className="kbm-faq__intro">
            You can choose from various other cool industrial trend decors, such as (light) concrete and brushed steel. Made of melamine, so strong and easy to maintain!
          </p>
          <p className="kbm-faq__intro kbm-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kbm-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kbm-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbm-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbm-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbm-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbm-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Dark graphite/charcoal bg, white text ── */}
      <section className="kbm-cta-section">
        <div className="kbm-container kbm-container--narrow kbm-container--centered">
          <h2 className="kbm-cta__title">Curious about our programme?</h2>
          <p className="kbm-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbm-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kbm-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --intro-bg:   #18191b;
          --frame-bg:   #1a1b1e;
          --faq-bg:     #4a505d;
          --cta-bg:     #18191b;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-white: rgba(255, 255, 255, 0.15);
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kbm-mt { margin-top: 16px; }

        /* ── containers ── */
        .kbm-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kbm-container--narrow  { max-width: 780px; }
        .kbm-container--content { max-width: 1080px; }
        .kbm-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kbm-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kbm-container { padding: 0 20px; }
          .kbm-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kbm-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kbm-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kbm-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kbm-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kbm-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kbm-breadcrumbs a:hover { color: #fff; }
        .kbm-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kbm-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kbm-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kbm-section {
          padding: 80px 0;
        }
        .kbm-section.no-pt { padding-top: 0; }
        
        .kbm-section--intro {
          background: var(--intro-bg);
          color: var(--white);
        }
        .kbm-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--white); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kbm-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kbm-fullscreen { background: var(--light-bg); line-height: 0; }
        .kbm-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kbm-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kbm-split { grid-template-columns: 42fr 58fr; }
        }
        .kbm-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .kbm-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kbm-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kbm-split__inner { padding: 72px 72px; } }

        .kbm-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kbm-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kbm-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kbm-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kbm-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kbm-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kbm-split__list li + li { margin-top: 6px; }

        .kbm-split__photo { overflow: hidden; }
        .kbm-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kbm-split__photo { display: flex; align-items: stretch; }
          .kbm-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kbm-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kbm-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kbm-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kbm-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--text-white);
        }
        .kbm-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kbm-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kbm-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kbm-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kbm-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .kbm-faq__item { border-bottom: 1px solid var(--border-white); }
        .kbm-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kbm-faq__toggle:hover { color: var(--text-muted); }
        .kbm-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kbm-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kbm-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kbm-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--text-white);
        }
        .kbm-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .kbm-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kbm-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kbm-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbm-hero          { height: 55vh; min-height: 360px; }
          .kbm-hero__overlay { padding-bottom: 40px; }
          .kbm-section--intro { padding: 52px 0 44px; }
          .kbm-section--faq   { padding: 52px 0 52px; }
          .kbm-cta-section    { padding: 64px 0 72px; }
          .kbm-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
