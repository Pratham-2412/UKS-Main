import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-zen-life assets folder
import UKS_ZEN_LIFE_HERO from '../assets/uks-zen-life/uks-zen-life-hero.webp';
import UKS_ZEN_LIFE_SPLIT1 from '../assets/uks-zen-life/uks-zen-life-split1.webp';
import UKS_ZEN_LIFE_SPLIT2 from '../assets/uks-zen-life/uks-zen-life-split2.webp';
import UKS_ZEN_LIFE_WIDE from '../assets/uks-zen-life/uks-zen-life-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "Our veneer models are available in various stain colours."
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'What should I take into account with veneer?',
    a: 'The solid and veneer parts come from a selected, rough wood batch with knots, flaming wood structures and colour differences. Because it is a natural product, there is no influence on the colour and structure of the wood, making each kitchen unique.'
  }
]

export default function KellerZenLife() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kzl-page"
    >
      {/* ── HERO ── */}
      <section className="kzl-hero">
        <img src={UKS_ZEN_LIFE_HERO} alt="Zen Life kitchen" className="kzl-hero__img" loading="eager" />
        <div className="kzl-hero__overlay">
          <div className="kzl-container">
            <nav className="kzl-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kzl-breadcrumbs__current">Zen Life</span>
            </nav>
            <p className="kzl-hero__subtitle">A touch of Ibiza in your kitchen</p>
            <h1 className="kzl-hero__title">Zen Life</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kzl-section kzl-section--intro">
        <div className="kzl-container kzl-container--narrow">
          <h2 className="kzl-intro__title">Bring the warm charm of Ibiza into your home</h2>
          <p className="kzl-intro__body">
            The traditional rural house of Ibiza is called Ibizan finca. Inspired by this architectural style, we designed this kitchen, where rustic craftsmanship, natural materials and a warm atmosphere come together.
          </p>
          <p className="kzl-intro__body kzl-mt">
            We expanded the kitchen with a wall unit, so that the cooking and living areas flow seamlessly into each other.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Text panel left + photo right ── */}
      <section className="kzl-split">
        <div className="kzl-split__panel">
          <div className="kzl-split__inner">
            <h2 className="kzl-split__title">Kitchen in Finca-style</h2>
            <p className="kzl-split__body">
              Bring the relaxed atmosphere of Ibiza to your kitchen! A Finca kitchen combines the charm of the Ibizan countryside with modern convenience.
            </p>
            <p className="kzl-split__body">
              The Keller dealer designs this kitchen exactly the way you want it. From a classic cooking island with travertine worktop to a custom-made cabinet wall.
            </p>
          </div>
        </div>
        <div className="kzl-split__photo">
          <img src={UKS_ZEN_LIFE_SPLIT1} alt="Zen Life kitchen in Finca-style" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: photo left + Text panel right (reversed) ── */}
      <section className="kzl-split kzl-split--reverse">
        <div className="kzl-split__photo">
          <img src={UKS_ZEN_LIFE_SPLIT2} alt="Warm wood with stylish beige details" loading="lazy" />
        </div>
        <div className="kzl-split__panel">
          <div className="kzl-split__inner">
            <h2 className="kzl-split__title">Warm wood with stylish beige</h2>
            
            <p className="kzl-split__label">In this kitchen:</p>
            <ul className="kzl-split__list">
              <li>Two-layer worktop on island</li>
              <li>Warm wood and greige</li>
              <li>Wall unit with LED strip lighting</li>
            </ul>

            <p className="kzl-split__label">The materials:</p>
            <ul className="kzl-split__list">
              <li>Veneer model Maine in smoked oak stain</li>
              <li>Handle 741</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE 3 (Window Size - slightly small) ── */}
      <section className="kzl-section kzl-section--img-wide">
        <div className="kzl-container kzl-container--wide">
          <figure className="kzl-figure">
            <img src={UKS_ZEN_LIFE_WIDE} alt="Zen Life kitchen layout view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Greige/sand bg) ── */}
      <section className="kzl-section kzl-section--faq">
        <div className="kzl-container kzl-container--content">
          <h2 className="kzl-faq__heading">Why not try this?</h2>
          <p className="kzl-faq__intro">
            You can save on the price by choosing melamine instead of veneer, and a melamine worktop.
          </p>
          <p className="kzl-faq__intro kzl-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kzl-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kzl-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kzl-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kzl-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kzl-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kzl-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="kzl-cta-section">
        <div className="kzl-container kzl-container--narrow kzl-container--centered">
          <h2 className="kzl-cta__title">Curious about our programme?</h2>
          <p className="kzl-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kzl-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kzl-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --sand-bg:    #cfc4b2;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-dark:  #1d1d1f;
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kzl-mt { margin-top: 16px; }

        /* ── containers ── */
        .kzl-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kzl-container--narrow  { max-width: 780px; }
        .kzl-container--content { max-width: 1080px; }
        .kzl-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kzl-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kzl-container { padding: 0 20px; }
          .kzl-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kzl-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kzl-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kzl-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kzl-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kzl-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kzl-breadcrumbs a:hover { color: #fff; }
        .kzl-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kzl-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kzl-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kzl-section {
          padding: 80px 0;
        }
        .kzl-section.no-pt { padding-top: 0; }
        
        .kzl-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kzl-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kzl-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kzl-split { grid-template-columns: 42fr 58fr; }
          .kzl-split--reverse { grid-template-columns: 58fr 42fr; }
        }
        .kzl-split__panel {
          display: flex; align-items: center; background: var(--sand-bg); color: var(--text-dark);
        }
        .kzl-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kzl-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kzl-split__inner { padding: 72px 72px; } }

        .kzl-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-dark); margin: 0; line-height: 1.25;
        }
        .kzl-split__body {
          font-size: 15px; line-height: 1.75; color: var(--mid-grey); margin: 0;
        }
        .kzl-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(0,0,0,0.5); margin-top: 4px;
        }
        .kzl-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-dark);
        }
        .kzl-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kzl-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-dark);
          font-weight: 700;
        }
        .kzl-split__list li + li { margin-top: 6px; }

        .kzl-split__photo { overflow: hidden; }
        .kzl-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 2048 / 1920;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kzl-split__photo { display: flex; align-items: stretch; }
          .kzl-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kzl-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kzl-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kzl-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kzl-section--faq {
          padding: 80px 0 72px; background: var(--sand-bg); color: var(--text-dark);
        }
        .kzl-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-dark); margin: 0 0 20px; line-height: 1.15;
        }
        .kzl-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kzl-link-faq { color: var(--text-dark); text-decoration: underline; font-weight: 600; }
        .kzl-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kzl-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kzl-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kzl-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-dark); text-align: left; transition: color .2s;
        }
        .kzl-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kzl-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-dark);
        }
        .kzl-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kzl-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kzl-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kzl-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kzl-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kzl-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kzl-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kzl-hero          { height: 55vh; min-height: 360px; }
          .kzl-hero__overlay { padding-bottom: 40px; }
          .kzl-section--intro { padding: 52px 0 44px; }
          .kzl-section--faq   { padding: 52px 0 52px; }
          .kzl-cta-section    { padding: 64px 0 72px; }
          .kzl-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
