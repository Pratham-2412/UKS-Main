import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-brooklyn-brick assets folder
import UKS_BROOKLYN_BRICK_HERO from '../assets/uks-brooklyn-brick/uks-brooklyn-brick-hero.webp';
import UKS_BROOKLYN_BRICK_SPLIT from '../assets/uks-brooklyn-brick/uks-brooklyn-brick-split.webp';
import UKS_BROOKLYN_BRICK_WIDE from '../assets/uks-brooklyn-brick/uks-brooklyn-brick-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can choose from 2,050 lacquer colours in matt lacquer, satin gloss, high gloss and textured lacquer and nine stain colours. It's also possible to apply any door in melamine."
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerBrooklynBrick() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbb-page"
    >
      {/* ── HERO ── */}
      <section className="kbb-hero">
        <img src={UKS_BROOKLYN_BRICK_HERO} alt="Brooklyn Brick kitchen" className="kbb-hero__img" loading="eager" />
        <div className="kbb-hero__overlay">
          <div className="kbb-container">
            <nav className="kbb-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbb-breadcrumbs__current">Brooklyn Brick</span>
            </nav>
            <p className="kbb-hero__subtitle">Sturdy black and red</p>
            <h1 className="kbb-hero__title">Brooklyn Brick</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kbb-section kbb-section--intro">
        <div className="kbb-container kbb-container--narrow">
          <h2 className="kbb-intro__title">Sturdy black and red</h2>
          <p className="kbb-intro__body">
            With its dark colours, rust-look worktop and brick wall, this kitchen is perfect for an industrial interior.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="kbb-fullscreen">
        <img src={UKS_BROOKLYN_BRICK_HERO} alt="Brooklyn Brick kitchen layout overview" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right (Dark charcoal background `#241f19`) ── */}
      <section className="kbb-split">
        <div className="kbb-split__panel">
          <div className="kbb-split__inner">
            <h2 className="kbb-split__title">Black, bricked & beautiful</h2>
            <p className="kbb-split__body">
              The red retro refrigerator is the eye-catcher in this industrial design.
            </p>
            
            <p className="kbb-split__label">In this kitchen:</p>
            <ul className="kbb-split__list">
              <li>Black structured lacquered kitchen doors</li>
              <li>Rust-look worktop to emphasise the industrial style</li>
              <li>Stainless steel-look plinth</li>
            </ul>
          </div>
        </div>
        <div className="kbb-split__photo">
          <img src={UKS_BROOKLYN_BRICK_SPLIT} alt="Red retro refrigerator and industrial details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kbb-section kbb-section--img-wide">
        <div className="kbb-container kbb-container--wide">
          <figure className="kbb-figure">
            <img src={UKS_BROOKLYN_BRICK_WIDE} alt="Brooklyn Brick kitchen wide layout perspective" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="kbb-section kbb-section--faq">
        <div className="kbb-container kbb-container--content">
          <h2 className="kbb-faq__heading">Why not try this?</h2>
          <p className="kbb-faq__intro">
            You can choose from 2,050 lacquer colours in matt lacquer, satin gloss, high gloss and textured lacquer. Does your kitchen need to be able to handle heavy usage? Then choose an (ultramat) melamine.
          </p>
          <p className="kbb-faq__intro kbb-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kbb-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kbb-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbb-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbb-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbb-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbb-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Sandy-taupe background `#9d938a`, white text ── */}
      <section className="kbb-cta-section">
        <div className="kbb-container kbb-container--narrow kbb-container--centered">
          <h2 className="kbb-cta__title">Curious about our programme?</h2>
          <p className="kbb-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbb-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kbb-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #241f19;
          --cta-bg:     #9d938a;
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
        .kbb-mt { margin-top: 16px; }

        /* ── containers ── */
        .kbb-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kbb-container--narrow  { max-width: 780px; }
        .kbb-container--content { max-width: 1080px; }
        .kbb-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kbb-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kbb-container { padding: 0 20px; }
          .kbb-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kbb-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kbb-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kbb-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kbb-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kbb-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kbb-breadcrumbs a:hover { color: #fff; }
        .kbb-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kbb-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kbb-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kbb-section {
          padding: 80px 0;
        }
        .kbb-section.no-pt { padding-top: 0; }
        
        .kbb-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kbb-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kbb-fullscreen { background: var(--light-bg); line-height: 0; }
        .kbb-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kbb-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kbb-split { grid-template-columns: 42fr 58fr; }
        }
        .kbb-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .kbb-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kbb-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kbb-split__inner { padding: 72px 72px; } }

        .kbb-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kbb-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kbb-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kbb-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kbb-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kbb-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kbb-split__list li + li { margin-top: 6px; }

        .kbb-split__photo { overflow: hidden; }
        .kbb-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kbb-split__photo { display: flex; align-items: stretch; }
          .kbb-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kbb-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kbb-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kbb-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kbb-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .kbb-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kbb-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kbb-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kbb-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kbb-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kbb-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kbb-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kbb-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kbb-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kbb-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kbb-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kbb-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--white);
        }
        .kbb-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .kbb-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kbb-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kbb-cta__btn:hover { background: var(--white); color: var(--charcoal); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbb-hero          { height: 55vh; min-height: 360px; }
          .kbb-hero__overlay { padding-bottom: 40px; }
          .kbb-section--intro { padding: 52px 0 44px; }
          .kbb-section--faq   { padding: 52px 0 52px; }
          .kbb-cta-section    { padding: 64px 0 72px; }
          .kbb-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
