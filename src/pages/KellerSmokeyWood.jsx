import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-smokey-wood assets folder
import UKS_SMOKEY_WOOD_HERO from '../assets/uks-smokey-wood/uks-smokey-wood-hero.webp';
import UKS_SMOKEY_WOOD_SPLIT from '../assets/uks-smokey-wood/uks-smokey-wood-split.webp';
import UKS_SMOKEY_WOOD_WIDE from '../assets/uks-smokey-wood/uks-smokey-wood-wide.webp';

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

export default function KellerSmokeyWood() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="ksw-page"
    >
      {/* ── HERO ── */}
      <section className="ksw-hero">
        <img src={UKS_SMOKEY_WOOD_HERO} alt="Smokey Wood kitchen" className="ksw-hero__img" loading="eager" />
        <div className="ksw-hero__overlay">
          <div className="ksw-container">
            <nav className="ksw-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="ksw-breadcrumbs__current">Smokey Wood</span>
            </nav>
            <p className="ksw-hero__subtitle">Coarse veneer with smoked oak finish</p>
            <h1 className="ksw-hero__title">Smokey Wood</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="ksw-section ksw-section--intro">
        <div className="ksw-container ksw-container--narrow">
          <h2 className="ksw-intro__title">Coarse veneer with smoked oak finish</h2>
          <p className="ksw-intro__body">
            The coarse veneer with smoked oak stain give this kitchen a rustic yet luxurious appearance. The handle trims in gun metal give it a modern finishing touch!
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="ksw-fullscreen">
        <img src={UKS_SMOKEY_WOOD_HERO} alt="Smokey Wood kitchen layout view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="ksw-split">
        <div className="ksw-split__panel">
          <div className="ksw-split__inner">
            <h2 className="ksw-split__title">Custom made dresser and seating area with pan drawer units</h2>
            <p className="ksw-split__body">
              Lot's of tailor made items in this kitchen, such as the dresser and seating area.
            </p>
            
            <p className="ksw-split__label">In this kitchen:</p>
            <ul className="ksw-split__list">
              <li>Extra rough veneer with knots.</li>
              <li>Smoked oak stain finish.</li>
              <li>Drawer and pan drawer lighting.</li>
            </ul>
          </div>
        </div>
        <div className="ksw-split__photo">
          <img src={UKS_SMOKEY_WOOD_SPLIT} alt="Dresser and pan drawer detail view" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="ksw-section ksw-section--img-wide">
        <div className="ksw-container ksw-container--wide">
          <figure className="ksw-figure">
            <img src={UKS_SMOKEY_WOOD_WIDE} alt="Smokey Wood kitchen perspective" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="ksw-section ksw-section--faq">
        <div className="ksw-container ksw-container--content">
          <h2 className="ksw-faq__heading">Why not try this?</h2>
          <p className="ksw-faq__intro">
            Instead of the solid wood front, choose a wood look in melamine. Same look, different price tag. Is the rustic veneer a bit too coarse for your taste? Then choose a finer veneer or melamine in a wood look.
          </p>
          <p className="ksw-faq__intro ksw-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="ksw-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="ksw-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="ksw-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="ksw-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="ksw-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="ksw-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Dark charcoal/brown bg, white text ── */}
      <section className="ksw-cta-section">
        <div className="ksw-container ksw-container--narrow ksw-container--centered">
          <h2 className="ksw-cta__title">Curious about our programme?</h2>
          <p className="ksw-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="ksw-cta__btn">Find a dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .ksw-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #d1c7bd;
          --cta-bg:     #554d4a;
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
        .ksw-mt { margin-top: 16px; }

        /* ── containers ── */
        .ksw-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .ksw-container--narrow  { max-width: 780px; }
        .ksw-container--content { max-width: 1080px; }
        .ksw-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .ksw-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .ksw-container { padding: 0 20px; }
          .ksw-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .ksw-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .ksw-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .ksw-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .ksw-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .ksw-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .ksw-breadcrumbs a:hover { color: #fff; }
        .ksw-breadcrumbs__current { color: #fff; font-weight: 700; }

        .ksw-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .ksw-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .ksw-section {
          padding: 80px 0;
        }
        .ksw-section.no-pt { padding-top: 0; }
        
        .ksw-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .ksw-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .ksw-fullscreen { background: var(--light-bg); line-height: 0; }
        .ksw-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .ksw-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .ksw-split { grid-template-columns: 42fr 58fr; }
        }
        .ksw-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--charcoal);
        }
        .ksw-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .ksw-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .ksw-split__inner { padding: 72px 72px; } }

        .ksw-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--charcoal); margin: 0; line-height: 1.25;
        }
        .ksw-split__body {
          font-size: 15px; line-height: 1.75; color: var(--mid-grey); margin: 0;
        }
        .ksw-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(0,0,0,0.45); margin-top: 4px;
        }
        .ksw-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--charcoal);
        }
        .ksw-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .ksw-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--charcoal);
          font-weight: 700;
        }
        .ksw-split__list li + li { margin-top: 6px; }

        .ksw-split__photo { overflow: hidden; }
        .ksw-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .ksw-split__photo { display: flex; align-items: stretch; }
          .ksw-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .ksw-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .ksw-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .ksw-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .ksw-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .ksw-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .ksw-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .ksw-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .ksw-link-faq:hover { color: rgba(0,0,0,0.7); }

        .ksw-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .ksw-faq__item { border-bottom: 1px solid var(--border-dark); }
        .ksw-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .ksw-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .ksw-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .ksw-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .ksw-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .ksw-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--white);
        }
        .ksw-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .ksw-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .ksw-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .ksw-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .ksw-hero          { height: 55vh; min-height: 360px; }
          .ksw-hero__overlay { padding-bottom: 40px; }
          .ksw-section--intro { padding: 52px 0 44px; }
          .ksw-section--faq   { padding: 52px 0 52px; }
          .ksw-cta-section    { padding: 64px 0 72px; }
          .ksw-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
