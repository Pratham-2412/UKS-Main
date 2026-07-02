import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-black-cottage assets folder
import UKS_BLACK_COTTAGE_HERO from '../assets/uks-black-cottage/uks-black-cottage-hero.webp';
import UKS_BLACK_COTTAGE_VIDEO_LANDSCAPE from '../assets/uks-black-cottage/uks-black-cottage-video-landscape.mp4';
import UKS_BLACK_COTTAGE_VIDEO_PORTRAIT from '../assets/uks-black-cottage/uks-black-cottage-video-portrait.mp4';
import UKS_BLACK_COTTAGE_SPLIT from '../assets/uks-black-cottage/uks-black-cottage-split.webp';
import UKS_BLACK_COTTAGE_WIDE from '../assets/uks-black-cottage/uks-black-cottage-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "This front has a groove in the middle, you can also choose a groove every 20, 15, 10 or 5 cm. Prefer a different colour? You can choose from nine stain colors or 2,050 paint colors in matt, satin gloss or textured lacquer."
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerBlackCottage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbc-page"
    >
      {/* ── HERO ── */}
      <section className="kbc-hero">
        <img src={UKS_BLACK_COTTAGE_HERO} alt="Black Cottage kitchen" className="kbc-hero__img" loading="eager" />
        <div className="kbc-hero__overlay">
          <div className="kbc-container">
            <nav className="kbc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbc-breadcrumbs__current">Black Cottage</span>
            </nav>
            <p className="kbc-hero__subtitle">Country meets industrial</p>
            <h1 className="kbc-hero__title">Black Cottage</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kbc-section kbc-section--intro">
        <div className="kbc-container kbc-container--narrow">
          <h2 className="kbc-intro__title">Country meets industrial</h2>
          <p className="kbc-intro__body">
            A true country style kitchen, but with an industrial touch. The sturdy lamps over the table and the grey plastered walls, together with a brick floor, form a perfect combination of rustic and industrial country living.
          </p>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="kbc-video-section">
        <div className="kbc-video-container">
          <video
            className="kbc-video kbc-video--landscape"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={UKS_BLACK_COTTAGE_VIDEO_LANDSCAPE} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="kbc-video kbc-video--portrait"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={UKS_BLACK_COTTAGE_VIDEO_PORTRAIT} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="kbc-video-overlay-text">
            <h3 className="kbc-video-text__title">Sturdy & robust</h3>
          </div>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="kbc-split">
        <div className="kbc-split__panel">
          <div className="kbc-split__inner">
            <h2 className="kbc-split__title">Wood veneer with groove in the middle</h2>
            <p className="kbc-split__body">
              The veneer in this kitchen has a groove in the middle and is finished in a sturdy textured lacquer.
            </p>
            
            <p className="kbc-split__label">In this kitchen:</p>
            <ul className="kbc-split__list">
              <li>Grooved fronts in wood veneer</li>
              <li>Composite worktop 80 mm thick</li>
              <li>Luxurious copper water tap with matching accessories</li>
            </ul>
          </div>
        </div>
        <div className="kbc-split__photo">
          <img src={UKS_BLACK_COTTAGE_SPLIT} alt="Wood veneer with groove details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kbc-section kbc-section--img-wide">
        <div className="kbc-container kbc-container--wide">
          <figure className="kbc-figure">
            <img src={UKS_BLACK_COTTAGE_WIDE} alt="Black Cottage kitchen wide view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Charcoal bg, white text) ── */}
      <section className="kbc-section kbc-section--faq">
        <div className="kbc-container kbc-container--content">
          <h2 className="kbc-faq__heading">Why not try this?</h2>
          <p className="kbc-faq__intro">
            Choosing a lacquered MDF door instead of lacquered veneer is more affordable. The same goes for choosing a laminate worktop over a stone one. Is black not really your colour? Then choose one of the other 2,050 NCS lacquer colours.
          </p>
          <p className="kbc-faq__intro kbc-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kbc-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kbc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbc-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Sand bg, dark text ── */}
      <section className="kbc-cta-section">
        <div className="kbc-container kbc-container--narrow kbc-container--centered">
          <h2 className="kbc-cta__title">Curious about our programme?</h2>
          <p className="kbc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kbc-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --faq-bg:     #2c2927;
          --khaki-bg:   #bab19f;
          --cta-bg:     #d0cdc4;
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
        .kbc-mt { margin-top: 16px; }

        /* ── containers ── */
        .kbc-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kbc-container--narrow  { max-width: 780px; }
        .kbc-container--content { max-width: 1080px; }
        .kbc-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kbc-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kbc-container { padding: 0 20px; }
          .kbc-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kbc-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kbc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kbc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kbc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kbc-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kbc-breadcrumbs a:hover { color: #fff; }
        .kbc-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kbc-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kbc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kbc-section {
          padding: 80px 0;
        }
        .kbc-section.no-pt { padding-top: 0; }
        
        .kbc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kbc-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── video section ── */
        .kbc-video-section {
          width: 100%;
          background: #000;
        }
        .kbc-video-container {
          position: relative;
          width: 100%;
          line-height: 0;
        }
        .kbc-video {
          width: 100%;
          height: auto;
          display: block;
        }
        .kbc-video--portrait {
          display: none;
        }
        @media (max-width: 768px) {
          .kbc-video--landscape {
            display: none;
          }
          .kbc-video--portrait {
            display: block;
          }
        }
        .kbc-video-overlay-text {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kbc-video-text__title {
          font-family: var(--ff-serif);
          font-size: clamp(32px, 5vw, 64px);
          color: #ffffff;
          font-weight: 300;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        /* ── split section ── */
        .kbc-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kbc-split { grid-template-columns: 42fr 58fr; }
        }
        .kbc-split__panel {
          display: flex; align-items: center; background: var(--khaki-bg); color: var(--text-white);
        }
        .kbc-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kbc-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kbc-split__inner { padding: 72px 72px; } }

        .kbc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kbc-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .kbc-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kbc-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kbc-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kbc-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .kbc-split__list li + li { margin-top: 6px; }

        .kbc-split__photo { overflow: hidden; }
        .kbc-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kbc-split__photo { display: flex; align-items: stretch; }
          .kbc-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kbc-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kbc-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kbc-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kbc-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--text-white);
        }
        .kbc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kbc-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kbc-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kbc-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kbc-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .kbc-faq__item { border-bottom: 1px solid var(--border-white); }
        .kbc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kbc-faq__toggle:hover { color: var(--text-muted); }
        .kbc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kbc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kbc-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kbc-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kbc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kbc-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kbc-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kbc-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbc-hero          { height: 55vh; min-height: 360px; }
          .kbc-hero__overlay { padding-bottom: 40px; }
          .kbc-section--intro { padding: 52px 0 44px; }
          .kbc-section--faq   { padding: 52px 0 52px; }
          .kbc-cta-section    { padding: 64px 0 72px; }
          .kbc-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
