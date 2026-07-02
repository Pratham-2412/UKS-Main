import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-modern-farmhouse assets folder
import UKS_MODERN_FARMHOUSE_HERO from '../assets/uks-modern-farmhouse/uks-modern-farmhouse-hero.webp';
import UKS_MODERN_FARMHOUSE_SPLIT from '../assets/uks-modern-farmhouse/uks-modern-farmhouse-split.webp';
import UKS_MODERN_FARMHOUSE_WIDE from '../assets/uks-modern-farmhouse/uks-modern-farmhouse-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "Instead of coarse veneer, you can also opt for a finer veneer, such as the Nottingham model. This is also available with a groove. You can also choose from nine stain colors or 2,050 colours in matt, satin-gloss or textured lacquer."
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'What are the characteristics of coarse veneer?',
    a: 'Coarse veneer has a robust appearance, with knots and the flame pattern clearly visible. Knots can fall out, this is part of the character of the material, keep this in mind.'
  }
]

export default function KellerModernFarmhouse() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kmf-page"
    >
      {/* ── HERO ── */}
      <section className="kmf-hero">
        <img src={UKS_MODERN_FARMHOUSE_HERO} alt="Modern Farmhouse kitchen" className="kmf-hero__img" loading="eager" />
        <div className="kmf-hero__overlay">
          <div className="kmf-container">
            <nav className="kmf-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmf-breadcrumbs__current">Modern Farmhouse</span>
            </nav>
            <p className="kmf-hero__subtitle">Weathered materials</p>
            <h1 className="kmf-hero__title">Modern Farmhouse</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kmf-section kmf-section--intro">
        <div className="kmf-container kmg-container--narrow">
          <h2 className="kmf-intro__title">Weathered materials</h2>
          <p className="kmf-intro__body">
            Natural, rustic materials like wood and stone, used in a modern symmetrical design. By using copper and matt black cast iron we added some nostalgia. The kitchen's eye-catchers are the natural stone sink and the custom canopy.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="kmf-fullscreen">
        <img src={UKS_MODERN_FARMHOUSE_HERO} alt="Modern Farmhouse kitchen layout wide view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="kmf-split">
        <div className="kmf-split__panel">
          <div className="kmf-split__inner">
            <h2 className="kmf-split__title">Sturdy veneer</h2>
            <p className="kmf-split__body">
              This veneered model has an extra rough surface and knots.
            </p>
            
            <p className="kmf-split__label">In this kitchen:</p>
            <ul className="kmf-split__list">
              <li>Canopy's housing and supports from same veneer as door.</li>
              <li>Granite worktop.</li>
              <li>Veneered fronts finished with grey stain.</li>
            </ul>
          </div>
        </div>
        <div className="kmf-split__photo">
          <img src={UKS_MODERN_FARMHOUSE_SPLIT} alt="Sturdy veneer drawer details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kmf-section kmf-section--img-wide">
        <div className="kmf-container kmf-container--wide">
          <figure className="kmf-figure">
            <img src={UKS_MODERN_FARMHOUSE_WIDE} alt="Modern Farmhouse layout perspective" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Sand/light grey bg, dark text) ── */}
      <section className="kmf-section kmf-section--faq">
        <div className="kmf-container kmf-container--content">
          <h2 className="kmf-faq__heading">Why not try this?</h2>
          <p className="kmf-faq__intro">
            At Keller Kitchens, you can choose from a wide range of very realistic faux wood synthetics rather than real wood. They are easier to maintain and less prone to damage. The same goes for the worktop.
          </p>
          <p className="kmf-faq__intro kmf-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kmf-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kmf-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kmf-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kmf-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kmf-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kmf-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Darker taupe/grey bg, white text ── */}
      <section className="kmf-cta-section">
        <div className="kmf-container kmf-container--narrow kmf-container--centered">
          <h2 className="kmf-cta__title">Curious about our programme?</h2>
          <p className="kmf-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kmf-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kmf-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --faq-bg:     #e9e6df;
          --khaki-bg:   #999383;
          --cta-bg:     #aea699;
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
        .kmf-mt { margin-top: 16px; }

        /* ── containers ── */
        .kmf-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kmf-container--narrow  { max-width: 780px; }
        .kmf-container--content { max-width: 1080px; }
        .kmf-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kmf-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kmf-container { padding: 0 20px; }
          .kmf-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kmf-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kmf-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kmf-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kmf-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kmf-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kmf-breadcrumbs a:hover { color: #fff; }
        .kmf-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kmf-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kmf-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kmf-section {
          padding: 80px 0;
        }
        .kmf-section.no-pt { padding-top: 0; }
        
        .kmf-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kmf-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kmf-fullscreen { background: var(--light-bg); line-height: 0; }
        .kmf-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kmf-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kmf-split { grid-template-columns: 42fr 58fr; }
        }
        .kmf-split__panel {
          display: flex; align-items: center; background: var(--khaki-bg); color: var(--text-white);
        }
        .kmf-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kmf-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kmf-split__inner { padding: 72px 72px; } }

        .kmf-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kmf-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .kmf-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kmf-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kmf-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kmf-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .kmf-split__list li + li { margin-top: 6px; }

        .kmf-split__photo { overflow: hidden; }
        .kmf-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kmf-split__photo { display: flex; align-items: stretch; }
          .kmf-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kmf-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kmf-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kmf-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kmf-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--charcoal);
        }
        .kmf-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kmf-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kmf-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kmf-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kmf-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kmf-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kmf-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kmf-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kmf-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kmf-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kmf-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kmf-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--white);
        }
        .kmf-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .kmf-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kmf-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kmf-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kmf-hero          { height: 55vh; min-height: 360px; }
          .kmf-hero__overlay { padding-bottom: 40px; }
          .kmf-section--intro { padding: 52px 0 44px; }
          .kmf-section--faq   { padding: 52px 0 52px; }
          .kmf-cta-section    { padding: 64px 0 72px; }
          .kmf-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
