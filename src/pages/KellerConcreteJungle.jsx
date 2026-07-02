import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-concrete-jungle assets folder
import UKS_CONCRETE_JUNGLE_HERO from '../assets/uks-concrete-jungle/uks-concrete-jungle-hero.webp';
import UKS_CONCRETE_JUNGLE_SPLIT from '../assets/uks-concrete-jungle/uks-concrete-jungle-split.webp';
import UKS_CONCRETE_JUNGLE_WIDE from '../assets/uks-concrete-jungle/uks-concrete-jungle-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can choose from various melamines in beautiful wood decors. For the lacqueredparts, you can choose from no fewer than 2,050 colours in matt, satin, textured or high-gloss lacquer."
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

export default function KellerConcreteJungle() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kcj-page"
    >
      {/* ── HERO ── */}
      <section className="kcj-hero">
        <img src={UKS_CONCRETE_JUNGLE_HERO} alt="Concrete Jungle kitchen" className="kcj-hero__img" loading="eager" />
        <div className="kcj-hero__overlay">
          <div className="kcj-container">
            <nav className="kcj-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kcj-breadcrumbs__current">Concrete Jungle</span>
            </nav>
            <p className="kcj-hero__subtitle">Industrial in oak, blue and concrete</p>
            <h1 className="kcj-hero__title">Concrete Jungle</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kcj-section kcj-section--intro">
        <div className="kcj-container kcj-container--narrow">
          <h2 className="kcj-intro__title">Industrial in oak, blue and concrete</h2>
          <p className="kcj-intro__body">
            Enter this industrial loft that uses concrete, wood, fabric and leather as a base. The melamine fronts have an old oak look to give the kitchen warmth. The trend colour Midnight Blue keeps it cool though.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="kcj-fullscreen">
        <img src={UKS_CONCRETE_JUNGLE_HERO} alt="Concrete Jungle kitchen layout perspective" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right (Midnight blue-grey background `#2b3543`) ── */}
      <section className="kcj-split">
        <div className="kcj-split__panel">
          <div className="kcj-split__inner">
            <h2 className="kcj-split__title">Industrial meets natural</h2>
            <p className="kcj-split__body">
              The school board with a handwritten message gives this industrial kitchen its personal touch.
            </p>
            
            <p className="kcj-split__label">In this kitchen:</p>
            <ul className="kcj-split__list">
              <li>The tall units are lacquered in our trend colour Midnight Blue</li>
              <li>The old oak doors are melamine and give the kitchen some warmth</li>
              <li>The concrete look worktop emphasises its industrial character</li>
            </ul>
          </div>
        </div>
        <div className="kcj-split__photo">
          <img src={UKS_CONCRETE_JUNGLE_SPLIT} alt="Old oak panels and concrete worktop" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kcj-section kcj-section--img-wide">
        <div className="kcj-container kcj-container--wide">
          <figure className="kcj-figure">
            <img src={UKS_CONCRETE_JUNGLE_WIDE} alt="Concrete Jungle industrial kitchen setup close-up" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="kcj-section kcj-section--faq">
        <div className="kcj-container kcj-container--content">
          <h2 className="kcj-faq__heading">Why not try this?</h2>
          <p className="kcj-faq__intro">
            You can choose from various other sturdy wood decors. Made of melamine, so strong and easy to maintain! And with the 2,050 NCS lacquer coloirs you can adjust the accent colour to your personal taste.
          </p>
          <p className="kcj-faq__intro kcj-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kcj-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kcj-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kcj-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kcj-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kcj-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kcj-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, charcoal text ── */}
      <section className="kcj-cta-section">
        <div className="kcj-container kcj-container--narrow kcj-container--centered">
          <h2 className="kcj-cta__title">Curious about our programme?</h2>
          <p className="kcj-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kcj-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kcj-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #2b3543;
          --cta-bg:     #ffffff;
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
        .kcj-mt { margin-top: 16px; }

        /* ── containers ── */
        .kcj-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kcj-container--narrow  { max-width: 780px; }
        .kcj-container--content { max-width: 1080px; }
        .kcj-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kcj-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kcj-container { padding: 0 20px; }
          .kcj-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kcj-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kcj-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kcj-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kcj-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kcj-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kcj-breadcrumbs a:hover { color: #fff; }
        .kcj-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kcj-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kcj-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kcj-section {
          padding: 80px 0;
        }
        .kcj-section.no-pt { padding-top: 0; }
        
        .kcj-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kcj-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kcj-fullscreen { background: var(--light-bg); line-height: 0; }
        .kcj-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kcj-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kcj-split { grid-template-columns: 42fr 58fr; }
        }
        .kcj-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .kcj-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kcj-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kcj-split__inner { padding: 72px 72px; } }

        .kcj-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kcj-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kcj-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kcj-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kcj-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kcj-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kcj-split__list li + li { margin-top: 6px; }

        .kcj-split__photo { overflow: hidden; }
        .kcj-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kcj-split__photo { display: flex; align-items: stretch; }
          .kcj-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kcj-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kcj-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kcj-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kcj-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .kcj-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kcj-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kcj-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kcj-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kcj-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kcj-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kcj-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kcj-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kcj-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kcj-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kcj-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kcj-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
          border-top: 1px solid var(--border-dark);
        }
        .kcj-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kcj-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kcj-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kcj-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kcj-hero          { height: 55vh; min-height: 360px; }
          .kcj-hero__overlay { padding-bottom: 40px; }
          .kcj-section--intro { padding: 52px 0 44px; }
          .kcj-section--faq   { padding: 52px 0 52px; }
          .kcj-cta-section    { padding: 64px 0 72px; }
          .kcj-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
