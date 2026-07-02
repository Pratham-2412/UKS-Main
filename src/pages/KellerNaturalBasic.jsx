import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-natural-basic assets folder
import UKS_NATURAL_BASIC_HERO from '../assets/uks-natural-basic/uks-natural-basic-hero.webp';
import UKS_NATURAL_BASIC_FULLSCREEN from '../assets/uks-natural-basic/uks-natural-basic-fullscreen.webp';
import UKS_NATURAL_BASIC_SPLIT from '../assets/uks-natural-basic/uks-natural-basic-split.webp';
import UKS_NATURAL_BASIC_WIDE from '../assets/uks-natural-basic/uks-natural-basic-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "This veneer front has a groove in the middle, you can also choose a groove every 20, 15, 10 or 5 cm. Prefer a different colour? You can choose from nine stain colours or 2,050 colours in matt, satin gloss or textured lacquer."
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerNaturalBasic() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knb-page"
    >
      {/* ── HERO ── */}
      <section className="knb-hero">
        <img src={UKS_NATURAL_BASIC_HERO} alt="Natural Basic kitchen" className="knb-hero__img" loading="eager" />
        <div className="knb-hero__overlay">
          <div className="knb-container">
            <nav className="knb-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knb-breadcrumbs__current">Natural Basic</span>
            </nav>
            <p className="knb-hero__subtitle">Scandinavian & sleek</p>
            <h1 className="knb-hero__title">Natural Basic</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="knb-section knb-section--intro">
        <div className="knb-container knb-container--narrow">
          <h2 className="knb-intro__title">Scandinavian & sleek</h2>
          <p className="knb-intro__body">
            This kitchen is characterised by its natural wood and white colour tones. The sleek lines, the light composite worktop and the chairs give it a modern touch.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="knb-fullscreen">
        <img src={UKS_NATURAL_BASIC_FULLSCREEN} alt="Natural Basic kitchen layout view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="knb-split">
        <div className="knb-split__panel">
          <div className="knb-split__inner">
            <h2 className="knb-split__title">Wood and white for a calm interior</h2>
            <p className="knb-split__body">
              The veneer in this kitchen is finished in natural oak stain, which preserves the true colour of the wood.
            </p>
            
            <p className="knb-split__label">In this kitchen :</p>
            <ul className="knb-split__list">
              <li>Wood veneer with groove in the middle</li>
              <li>Finish in natural stain, which reflects the natural appearance of the wood</li>
              <li>A white worktop in composite, which fits the calm appearance perfectly</li>
            </ul>
          </div>
        </div>
        <div className="knb-split__photo">
          <img src={UKS_NATURAL_BASIC_SPLIT} alt="Cascada and Bronx front details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="knb-section knb-section--img-wide">
        <div className="knb-container knb-container--wide">
          <figure className="knb-figure">
            <img src={UKS_NATURAL_BASIC_WIDE} alt="Natural Basic kitchen moodboard" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Taupe bg, white text) ── */}
      <section className="knb-section knb-section--faq">
        <div className="knb-container knb-container--content">
          <h2 className="knb-faq__heading">Why not try this?</h2>
          <p className="knb-faq__intro">
            By choosing a front in melamine and a laminate top instead of composite, the price tag becomes a bit more friendly.
          </p>
          <p className="knb-faq__intro knb-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="knb-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="knb-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knb-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knb-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knb-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knb-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="knb-cta-section">
        <div className="knb-container knb-container--narrow knb-container--centered">
          <h2 className="knb-cta__title">Curious about our programme?</h2>
          <p className="knb-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knb-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .knb-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --faq-bg:     #bbb2a1;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-white: rgba(255, 255, 255, 0.15);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .knb-mt { margin-top: 16px; }

        /* ── containers ── */
        .knb-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .knb-container--narrow  { max-width: 780px; }
        .knb-container--content { max-width: 1080px; }
        .knb-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .knb-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knb-container { padding: 0 20px; }
          .knb-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .knb-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .knb-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .knb-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .knb-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .knb-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .knb-breadcrumbs a:hover { color: #fff; }
        .knb-breadcrumbs__current { color: #fff; font-weight: 700; }

        .knb-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .knb-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .knb-section {
          padding: 80px 0;
        }
        .knb-section.no-pt { padding-top: 0; }
        
        .knb-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .knb-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .knb-fullscreen { background: var(--light-bg); line-height: 0; }
        .knb-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .knb-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .knb-split { grid-template-columns: 42fr 58fr; }
        }
        .knb-split__panel {
          display: flex; align-items: center; background: var(--faq-bg); color: var(--text-white);
        }
        .knb-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knb-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .knb-split__inner { padding: 72px 72px; } }

        .knb-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .knb-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .knb-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .knb-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .knb-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .knb-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .knb-split__list li + li { margin-top: 6px; }

        .knb-split__photo { overflow: hidden; }
        .knb-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .knb-split__photo { display: flex; align-items: stretch; }
          .knb-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .knb-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .knb-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .knb-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .knb-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--text-white);
        }
        .knb-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .knb-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .knb-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .knb-link-faq:hover { color: rgba(255,255,255,0.7); }

        .knb-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .knb-faq__item { border-bottom: 1px solid var(--border-white); }
        .knb-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .knb-faq__toggle:hover { color: var(--text-muted); }
        .knb-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .knb-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .knb-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knb-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .knb-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .knb-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .knb-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .knb-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knb-hero          { height: 55vh; min-height: 360px; }
          .knb-hero__overlay { padding-bottom: 40px; }
          .knb-section--intro { padding: 52px 0 44px; }
          .knb-section--faq   { padding: 52px 0 52px; }
          .knb-cta-section    { padding: 64px 0 72px; }
          .knb-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
