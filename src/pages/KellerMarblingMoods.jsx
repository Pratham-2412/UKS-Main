import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-marbling-moods assets folder
import UKS_MARBLING_MOODS_HERO from '../assets/uks-marbling-moods/uks-marbling-moods-hero.webp';
import UKS_MARBLING_MOODS_WIDE_AFBEELDING from '../assets/uks-marbling-moods/uks-marbling-moods-wide-afbeelding.webp';
import UKS_MARBLING_MOODS_SPLIT_BIJTXT from '../assets/uks-marbling-moods/uks-marbling-moods-split-bijtxt.webp';
import UKS_MARBLING_MOODS_WIDE_RASTER from '../assets/uks-marbling-moods/uks-marbling-moods-wide-raster.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'The olive green front is model Crystal in an olive green matt lacquer. You can choose from 2,050 laqcuer colours in matt, satin, textured and high-gloss lacquer. The walnut front is model Watford, in veneer. This front is available in cinnamon ash, warm walnut, grey walnut and havana walnut. The front in ultra matt anthracite is also available in white, snow, mist, loam and carbon.'
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain ultra matt melamine?',
    a: 'Do not allow stains to dry on ultra matt. Remove stains immediately with plenty of water and, if necessary, a mild all-purpose cleaner or green soap dissolved in water. After cleaning, rinse the soap residue with lukewarm water. Be sure to use a clean cloth, as sand or dust can cause scratches. Do not use microfibre cloths or miracle sponges; they may contain small abrasive particles. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerMarblingMoods() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kmm-page"
    >
      {/* ── HERO ── */}
      <section className="kmm-hero">
        <img src={UKS_MARBLING_MOODS_HERO} alt="Marbling Moods kitchen" className="kmm-hero__img" loading="eager" />
        <div className="kmm-hero__overlay">
          <div className="kmm-container">
            <nav className="kmm-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmm-breadcrumbs__current">Marbling Moods</span>
            </nav>
            <p className="kmm-hero__subtitle">Stunning veined white marble</p>
            <h1 className="kmm-hero__title">Marbling Moods</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kmm-section kmm-section--intro">
        <div className="kmm-container kmm-container--narrow">
          <h2 className="kmm-intro__title">With a classy retro touch</h2>
          <p className="kmm-intro__body">
            The materials in this kitchen are reminiscent of styles from the last century. The combination of chic
            walnut, green fronts in matt lacquer and red copper accents give the kitchen a classy retro touch.
          </p>
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size) ── */}
      <section className="kmm-section kmm-section--img-wide no-pt">
        <div className="kmm-container kmm-container--wide">
          <figure className="kmm-figure">
            <img src={UKS_MARBLING_MOODS_WIDE_AFBEELDING} alt="Marbling Moods details view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kmm-split">
        <div className="kmm-split__panel">
          <div className="kmm-split__inner">
            <h2 className="kmm-split__title">Floating cabinets for a special effect</h2>
            <p className="kmm-split__body">
              Eye-catchers are the floating cabinets, the copper handle trims and the island with sink completely made
              of composite.
            </p>

            <p className="kmm-split__label">In this kitchen:</p>
            <ul className="kmm-split__list">
              <li>Floating cabinets</li>
              <li>Red copper handle trims and water tap</li>
              <li>Interior in colour graphite</li>
            </ul>
          </div>
        </div>
        <div className="kmm-split__photo">
          <img src={UKS_MARBLING_MOODS_SPLIT_BIJTXT} alt="Marbling Moods close-up" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE RASTER IMAGE (Window Size) ── */}
      <section className="kmm-section kmm-section--img-wide">
        <div className="kmm-container kmm-container--wide">
          <figure className="kmm-figure">
            <img src={UKS_MARBLING_MOODS_WIDE_RASTER} alt="Marbling Moods elements grid view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ ── */}
      <section className="kmm-section kmm-section--faq">
        <div className="kmm-container kmm-container--content">
          <h2 className="kmm-faq__heading">Why not try this?</h2>
          <p className="kmm-faq__intro">
            Replace the wood veneer front with a melamine door in wood decor. Looks just as real, but costs less.
          </p>
          <p className="kmm-faq__intro kmm-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kmm-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="kmm-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kmm-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kmm-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kmm-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kmm-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Sage/Olive green bg ── */}
      <section className="kmm-cta-section">
        <div className="kmm-container kmm-container--narrow kmm-container--centered">
          <h2 className="kmm-cta__title">Curious about our programme?</h2>
          <p className="kmm-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kmm-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kmm-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --sage-green: #80826c;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kmm-mt { margin-top: 16px; }

        /* ── containers ── */
        .kmm-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kmm-container--narrow  { max-width: 780px; }
        .kmm-container--content { max-width: 1080px; }
        .kmm-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        @media (max-width: 767px) { .kmm-container--wide { padding: 0 20px; } }
        .kmm-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }

        /* ── hero ── */
        .kmm-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kmm-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kmm-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kmm-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kmm-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kmm-breadcrumbs a:hover { color: #fff; }
        .kmm-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kmm-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kmm-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kmm-section {
          padding: 80px 0;
        }
        .kmm-section.no-pt { padding-top: 0; }
        
        .kmm-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kmm-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kmm-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kmm-split { grid-template-columns: 5fr 7fr; }
        }
        .kmm-split__panel {
          display: flex; align-items: center; background: var(--sage-green); color: var(--white);
        }
        .kmm-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kmm-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kmm-split__inner { padding: 88px 80px; } }

        .kmm-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--white); margin: 0; line-height: 1.25;
        }
        .kmm-split__body {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.85); margin: 0;
        }
        .kmm-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kmm-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--white);
        }
        .kmm-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kmm-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--white);
          font-weight: 700;
        }
        .kmm-split__list li + li { margin-top: 6px; }

        .kmm-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kmm-split__photo { min-height: unset; height: 100vh; }
        }
        .kmm-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .kmm-section--img-wide { padding: 40px 0; }
        .kmm-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kmm-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kmm-section--faq {
          padding: 80px 0 72px; border-top: 1px solid var(--border);
        }
        .kmm-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kmm-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .kmm-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kmm-link-faq:hover { color: #888888; }

        .kmm-faq__list { border-top: 1px solid var(--border); margin-top: 40px; }
        .kmm-faq__item { border-bottom: 1px solid var(--border); }
        .kmm-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kmm-faq__toggle:hover { color: var(--mid); }
        .kmm-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kmm-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kmm-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kmm-cta-section {
          background: var(--sage-green); padding: 96px 0 112px; text-align: center;
        }
        .kmm-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .kmm-cta__body {
          font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.85); margin: 0 0 40px;
        }
        .kmm-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--sage-green);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kmm-cta__btn:hover { background: #eee; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kmm-hero          { height: 55vh; min-height: 360px; }
          .kmm-hero__overlay { padding-bottom: 40px; }
          .kmm-section--intro { padding: 52px 0 44px; }
          .kmm-section--faq   { padding: 52px 0 52px; }
          .kmm-cta-section    { padding: 64px 0 72px; }
          .kmm-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
