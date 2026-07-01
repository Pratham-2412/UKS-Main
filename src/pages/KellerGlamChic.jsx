import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-glam-chic assets folder
import UKS_GLAM_CHIC_HERO from '../assets/uks-glam-chic/uks-glam-chic-hero.webp';
import UKS_GLAM_CHIC_WIDE_AFBEELDING from '../assets/uks-glam-chic/uks-glam-chic-wide-afbeelding.webp';
import UKS_GLAM_CHIC_SPLIT_PROGRAMMA from '../assets/uks-glam-chic/uks-glam-chic-split-programma.webp';
import UKS_GLAM_CHIC_WIDE_RASTER from '../assets/uks-glam-chic/uks-glam-chic-wide-raster.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'This kitchen is executed in model Nottingham, a veneer front. This can be finished in matt, satin and textured lacquer, with a choice of 2,050 lacquer colours. For a more natural effect, choose one of our nine stain colours.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerGlamChic() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kgc-page"
    >
      {/* ── HERO ── */}
      <section className="kgc-hero">
        <img src={UKS_GLAM_CHIC_HERO} alt="Glam Chic kitchen layout" className="kgc-hero__img" loading="eager" />
        <div className="kgc-hero__overlay">
          <div className="kgc-container">
            <nav className="kgc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kgc-breadcrumbs__current">Glam Chic</span>
            </nav>
            <p className="kgc-hero__subtitle">Touch of glamour</p>
            <h1 className="kgc-hero__title">Glam Chic</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kgc-section kgc-section--intro">
        <div className="kgc-container kgc-container--narrow">
          <h2 className="kgc-intro__title">Perfect for lovers of classic kitchen design</h2>
          <p className="kgc-intro__body">
            The Glam Chic is perfect for lovers of classic kitchen design with a touch of glamour. With high-quality
            materials and refined details, we create an ambiance of luxury and grandeur in your kitchen. Think of the
            veneer front combined with units in smoked glass, the worktop in marble look and the handle strips in gun
            metal that give the room the exclusive look.
          </p>
        </div>
      </section>

      {/* ── WIDE AFBEELDING ── */}
      <section className="kgc-section kgc-section--img-wide no-pt">
        <div className="kgc-container kgc-container--wide">
          <figure className="kgc-figure">
            <img src={UKS_GLAM_CHIC_WIDE_AFBEELDING} alt="Glam Chic layout overview" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kgc-split">
        <div className="kgc-split__panel">
          <div className="kgc-split__inner">
            <h2 className="kgc-split__title">Glass units with smoked glass &amp; LED lighting</h2>
            <p className="kgc-split__body">
              Special details are the glass units with smoked glass and LED lighting, the spacious kitchen island and the
              niche in composite.
            </p>
            <p className="kgc-split__label">In this kitchen:</p>
            <ul className="kgc-split__list">
              <li>Brown oak stain on wood veneer</li>
              <li>Bespoke cabinet with smoke mirrors and LED lighting</li>
              <li>Gun metal metallic handle trims in the kitchen island</li>
            </ul>
          </div>
        </div>
        <div className="kgc-split__photo">
          <img src={UKS_GLAM_CHIC_SPLIT_PROGRAMMA} alt="Glam Chic smoked glass cabinet details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE RASTER IMAGE ── */}
      <section className="kgc-section kgc-section--img-wide">
        <div className="kgc-container kgc-container--wide">
          <figure className="kgc-figure">
            <img src={UKS_GLAM_CHIC_WIDE_RASTER} alt="Glam Chic kitchen elements grid view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ ── */}
      <section className="kgc-section kgc-section--faq">
        <div className="kgc-container kgc-container--content">
          <h2 className="kgc-faq__heading">Why not try this?</h2>
          <p className="kgc-faq__intro">
            Replace the wooden doors with faux wood ones and you’ll get a different price tag. The same happens when you
            replace the worktop with a synthetic one, which come in several thicknesses.
          </p>
          <p className="kgc-faq__intro kgc-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and
            can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More
            information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kgc-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="kgc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kgc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kgc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kgc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kgc-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="kgc-cta-section">
        <div className="kgc-container kgc-container--narrow kgc-container--centered">
          <h2 className="kgc-cta__title">Curious about our programme?</h2>
          <p className="kgc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kgc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kgc-page {
          --white:      #ffffff;
          --dark-bg:    #ffffff;
          --faq-bg:     #f5f5f7;
          --split-bg:   #543739;
          --text-white: #1d1d1f;
          --text-muted: #424245;
          --border-muted: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--dark-bg);
          color: var(--text-white);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kgc-mt { margin-top: 16px; }

        /* ── containers ── */
        .kgc-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kgc-container--narrow  { max-width: 780px; }
        .kgc-container--content { max-width: 1080px; }
        .kgc-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 767px) { .kgc-container--wide { padding: 0 20px; } }
        .kgc-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }

        /* ── hero ── */
        .kgc-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kgc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kgc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kgc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kgc-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kgc-breadcrumbs a:hover { color: #fff; }
        .kgc-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kgc-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kgc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kgc-section {
          padding: 80px 0;
        }
        .kgc-section.no-pt { padding-top: 0; }
        
        .kgc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kgc-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kgc-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kgc-split { grid-template-columns: 5fr 7fr; }
        }
        .kgc-split__panel {
          display: flex;
          align-items: center;
          background: var(--split-bg);
          color: #ffffff;
        }
        .kgc-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kgc-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kgc-split__inner { padding: 88px 80px; } }

        .kgc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
        }
        .kgc-split__body {
          font-size: 15px; line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }
        .kgc-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255, 255, 255, 0.6); margin-top: 4px;
        }
        .kgc-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: #ffffff;
        }
        .kgc-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kgc-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #ffffff;
          font-weight: 700;
        }
        .kgc-split__list li + li { margin-top: 6px; }

        .kgc-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kgc-split__photo { min-height: unset; height: 100vh; }
        }
        .kgc-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .kgc-section--img-wide { padding: 40px 0; }
        .kgc-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kgc-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kgc-section--faq {
          background: var(--faq-bg); padding: 80px 0 72px;
        }
        .kgc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kgc-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kgc-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kgc-link-faq:hover { color: #888888; }

        .kgc-faq__list { border-top: 1px solid var(--border-muted); margin-top: 40px; }
        .kgc-faq__item { border-bottom: 1px solid var(--border-muted); }
        .kgc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kgc-faq__toggle:hover { color: var(--text-muted); }
        .kgc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kgc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kgc-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kgc-cta-section {
          background: var(--dark-bg); padding: 96px 0 112px; text-align: center;
          border-top: 1px solid var(--border-muted);
        }
        .kgc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--text-white); margin: 0 0 18px; line-height: 1.1;
        }
        .kgc-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kgc-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: #1d1d1f; color: #ffffff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kgc-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kgc-hero          { height: 55vh; min-height: 360px; }
          .kgc-hero__overlay { padding-bottom: 40px; }
          .kgc-section--intro { padding: 52px 0 44px; }
          .kgc-section--faq   { padding: 52px 0 52px; }
          .kgc-cta-section    { padding: 64px 0 72px; }
          .kgc-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
