import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-cottage-life assets folder
import UKS_COTTAGE_LIFE_HERO from '../assets/uks-cottage-life/uks-cottage-life-hero.webp';
import UKS_COTTAGE_LIFE_SPLIT from '../assets/uks-cottage-life/uks-cottage-life-split.webp';
import UKS_COTTAGE_LIFE_WIDE from '../assets/uks-cottage-life/uks-cottage-life-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "Prefer a different colour for the veneer? You can choose from nine stain colours or 2,050 paint colors in matt, satin gloss or textured lacquer. For the melamine parts you can choose any colour or decor in the programme."
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

export default function KellerCottageLife() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kcl-page"
    >
      {/* ── HERO ── */}
      <section className="kcl-hero">
        <img src={UKS_COTTAGE_LIFE_HERO} alt="Cottage Life kitchen" className="kcl-hero__img" loading="eager" />
        <div className="kcl-hero__overlay">
          <div className="kcl-container">
            <nav className="kcl-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kcl-breadcrumbs__current">Cottage Life</span>
            </nav>
            <p className="kcl-hero__subtitle">Natural materials in country style</p>
            <h1 className="kcl-hero__title">Cottage Life</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kcl-section kcl-section--intro">
        <div className="kcl-container kcl-container--narrow">
          <h2 className="kcl-intro__title">Natural materials in country style</h2>
          <p className="kcl-intro__body">
            Natural materials are trending. This is reflected in the linen-look fronts of the kitchen island and in the
            styling of this kitchen. The worktop and back wall are made of composite.
          </p>
        </div>
      </section>

      {/* ── WIDE IMAGE 1 (Window Size - slightly small) ── */}
      <section className="kcl-section kcl-section--img-wide no-pt">
        <div className="kcl-container kcl-container--wide">
          <figure className="kcl-figure">
            <img src={UKS_COTTAGE_LIFE_HERO} alt="Cottage Life kitchen view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="kcl-split">
        <div className="kcl-split__panel">
          <div className="kcl-split__inner">
            <h2 className="kcl-split__title">Built-in tall units and island with casing panels</h2>
            <p className="kcl-split__body">
              The built-in units are typical for country style kitchens. The casing panels are also applied in the
              composite frame of the kitchen island.
            </p>
            
            <p className="kcl-split__label">In this kitchen:</p>
            <ul className="kcl-split__list">
              <li>Trendy linen-look drawer fronts in island</li>
              <li>Interior in colour 'mist'</li>
              <li>Deepened sink cabinets</li>
            </ul>
          </div>
        </div>
        <div className="kcl-split__photo">
          <img src={UKS_COTTAGE_LIFE_SPLIT} alt="Cottage Life island casing panels" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE 2 (Window Size - slightly small) ── */}
      <section className="kcl-section kcl-section--img-wide">
        <div className="kcl-container kcl-container--wide">
          <figure className="kcl-figure">
            <img src={UKS_COTTAGE_LIFE_WIDE} alt="Cottage Life details collage" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Warm sand/beige-brown bg) ── */}
      <section className="kcl-section kcl-section--faq">
        <div className="kcl-container kcl-container--content">
          <h2 className="kcl-faq__heading">Why not try this?</h2>
          <p className="kcl-faq__intro">
            Instead of the solid wood front, choose a wood look in melamine. Same look, different price tag. Is the
            rustic veneer a bit too coarse for your taste? Then choose a finer veneer or melamine in a wood look.
          </p>
          <p className="kcl-faq__intro kcl-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kcl-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="kcl-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kcl-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kcl-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kcl-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kcl-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="kcl-cta-section">
        <div className="kcl-container kcl-container--narrow kcl-container--centered">
          <h2 className="kcl-cta__title">Curious about our programme?</h2>
          <p className="kcl-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kcl-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kcl-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --casing-bg:  #5e5551;
          --sand-bg:    #cfc4b9;
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
        .kcl-mt { margin-top: 16px; }

        /* ── containers ── */
        .kcl-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kcl-container--narrow  { max-width: 780px; }
        .kcl-container--content { max-width: 1080px; }
        .kcl-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kcl-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kcl-container { padding: 0 20px; }
          .kcl-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kcl-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kcl-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kcl-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kcl-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kcl-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kcl-breadcrumbs a:hover { color: #fff; }
        .kcl-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kcl-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kcl-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kcl-section {
          padding: 80px 0;
        }
        .kcl-section.no-pt { padding-top: 0; }
        
        .kcl-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kcl-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kcl-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kcl-split { grid-template-columns: 5fr 7fr; }
        }
        .kcl-split__panel {
          display: flex; align-items: center; background: var(--casing-bg); color: var(--text-white);
        }
        .kcl-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kcl-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kcl-split__inner { padding: 88px 80px; } }

        .kcl-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kcl-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .kcl-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kcl-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kcl-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kcl-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .kcl-split__list li + li { margin-top: 6px; }

        .kcl-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kcl-split__photo { min-height: unset; height: 100vh; }
        }
        .kcl-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .kcl-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kcl-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kcl-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kcl-section--faq {
          padding: 80px 0 72px; background: var(--sand-bg); color: var(--text-white);
        }
        .kcl-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kcl-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kcl-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kcl-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kcl-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .kcl-faq__item { border-bottom: 1px solid var(--border-white); }
        .kcl-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kcl-faq__toggle:hover { color: var(--text-muted); }
        .kcl-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kcl-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kcl-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kcl-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kcl-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kcl-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kcl-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kcl-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kcl-hero          { height: 55vh; min-height: 360px; }
          .kcl-hero__overlay { padding-bottom: 40px; }
          .kcl-section--intro { padding: 52px 0 44px; }
          .kcl-section--faq   { padding: 52px 0 52px; }
          .kcl-cta-section    { padding: 64px 0 72px; }
          .kcl-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
