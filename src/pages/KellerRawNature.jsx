import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-raw-nature assets folder
import UKS_RAW_NATURE_HERO from '../assets/uks-raw-nature/uks-raw-nature-hero.webp';
import UKS_RAW_NATURE_WIDE1 from '../assets/uks-raw-nature/uks-raw-nature-wide1.webp';
import UKS_RAW_NATURE_SPLIT from '../assets/uks-raw-nature/uks-raw-nature-split.webp';
import UKS_RAW_NATURE_WIDE2 from '../assets/uks-raw-nature/uks-raw-nature-wide2.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'To really give your kitchen a "personal touch", you can choose from 2,050 colors in matt, textured, silk gloss and high gloss lacquer. Our handles are also available in 2,050 colours.'
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

export default function KellerRawNature() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="krn-page"
    >
      {/* ── HERO ── */}
      <section className="krn-hero">
        <img src={UKS_RAW_NATURE_HERO} alt="Raw Nature kitchen" className="krn-hero__img" loading="eager" />
        <div className="krn-hero__overlay">
          <div className="krn-container">
            <nav className="krn-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="krn-breadcrumbs__current">Raw Nature</span>
            </nav>
            <p className="krn-hero__subtitle">Bring the outdoors into your kitchen</p>
            <h1 className="krn-hero__title">Raw Nature</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="krn-section krn-section--intro">
        <div className="krn-container krn-container--narrow">
          <h2 className="krn-intro__title">Bring the outdoors into your kitchen</h2>
          <p className="krn-intro__body">
            With warm wood and a lot of green your kitchen will get an exotic appearance. The tiles above the kitchen
            emphasise this effect. The matt black stove, cooker hood and lamp give the kitchen an industrial twist.
          </p>
        </div>
      </section>

      {/* ── WIDE IMAGE 1 (Window Size - slightly small) ── */}
      <section className="krn-section krn-section--img-wide no-pt">
        <div className="krn-container krn-container--wide">
          <figure className="krn-figure">
            <img src={UKS_RAW_NATURE_WIDE1} alt="Raw Nature kitchen full details" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Photo left + Text panel right (INVERSE) ── */}
      <section className="krn-split">
        <div className="krn-split__photo">
          <img src={UKS_RAW_NATURE_SPLIT} alt="Urban jungle detail" loading="lazy" />
        </div>
        <div className="krn-split__panel">
          <div className="krn-split__inner">
            <h2 className="krn-split__title">Urban jungle vibes</h2>
            <p className="krn-split__body">
              A natural look, create your own urban jungle with this beautiful combination of wood and green.
            </p>
            <p className="krn-split__label">In this kitchen:</p>
            <ul className="krn-split__list">
              <li>Warm faux wood front</li>
              <li>Laminate worktop in stone look</li>
              <li>Lacquered cabinets in olive green textured lacquer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE 2 (Window Size - slightly small) ── */}
      <section className="krn-section krn-section--img-wide">
        <div className="krn-container krn-container--wide">
          <figure className="krn-figure">
            <img src={UKS_RAW_NATURE_WIDE2} alt="Raw Nature moodboard" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Sage green bg) ── */}
      <section className="krn-section krn-section--faq">
        <div className="krn-container krn-container--content">
          <h2 className="krn-faq__heading">Why not try this?</h2>
          <p className="krn-faq__intro">
            Do you prefer natural products? Replace the faux wood grain melamine fronts with actual wood or veneer. And
            is olive green not your favourite colour? Then choose one of the other 1950 lacquer colours that better fits
            your personal taste.
          </p>
          <p className="krn-faq__intro krn-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="krn-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="krn-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="krn-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="krn-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="krn-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="krn-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Black bg, white text ── */}
      <section className="krn-cta-section">
        <div className="krn-container krn-container--narrow krn-container--centered">
          <h2 className="krn-cta__title">Curious about our programme?</h2>
          <p className="krn-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="krn-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .krn-page {
          --black:      #000000;
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --olive-bg:   #5f5637;
          --sage-bg:    #83836b;
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
        .krn-mt { margin-top: 16px; }

        /* ── containers ── */
        .krn-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .krn-container--narrow  { max-width: 780px; }
        .krn-container--content { max-width: 1080px; }
        .krn-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .krn-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .krn-container { padding: 0 20px; }
          .krn-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .krn-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .krn-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .krn-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .krn-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .krn-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .krn-breadcrumbs a:hover { color: #fff; }
        .krn-breadcrumbs__current { color: #fff; font-weight: 700; }

        .krn-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .krn-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .krn-section {
          padding: 80px 0;
        }
        .krn-section.no-pt { padding-top: 0; }
        
        .krn-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .krn-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── split section (inverse: photo left, text right) ── */
        .krn-split {
          display: grid; grid-template-columns: 1fr;
          background: var(--white);
        }
        @media (min-width: 860px) {
          .krn-split { grid-template-columns: 7fr 5fr; }
        }
        .krn-split__panel {
          display: flex; align-items: center; background: var(--olive-bg); color: var(--text-white);
        }
        .krn-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .krn-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .krn-split__inner { padding: 88px 80px; } }

        .krn-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .krn-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .krn-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .krn-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .krn-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .krn-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .krn-split__list li + li { margin-top: 6px; }

        .krn-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .krn-split__photo { min-height: unset; height: 100vh; }
        }
        .krn-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .krn-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .krn-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .krn-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .krn-section--faq {
          padding: 80px 0 72px; background: var(--sage-bg); color: var(--text-white);
        }
        .krn-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .krn-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .krn-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .krn-link-faq:hover { color: rgba(255,255,255,0.7); }

        .krn-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .krn-faq__item { border-bottom: 1px solid var(--border-white); }
        .krn-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .krn-faq__toggle:hover { color: var(--text-muted); }
        .krn-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .krn-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .krn-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .krn-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .krn-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .krn-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .krn-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .krn-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .krn-hero          { height: 55vh; min-height: 360px; }
          .krn-hero__overlay { padding-bottom: 40px; }
          .krn-section--intro { padding: 52px 0 44px; }
          .krn-section--faq   { padding: 52px 0 52px; }
          .krn-cta-section    { padding: 64px 0 72px; }
          .krn-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
