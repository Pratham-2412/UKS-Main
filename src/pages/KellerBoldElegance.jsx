import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-bold-elegance assets folder
import UKS_BOLD_ELEGANCE_HERO from '../assets/uks-bold-elegance/uks-bold-elegance-hero.webp';
import UKS_BOLD_ELEGANCE_SPLIT1 from '../assets/uks-bold-elegance/uks-bold-elegance-split1.webp';
import UKS_BOLD_ELEGANCE_SPLIT2 from '../assets/uks-bold-elegance/uks-bold-elegance-split2.webp';
import UKS_BOLD_ELEGANCE_WIDE from '../assets/uks-bold-elegance/uks-bold-elegance-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You have a free choice from all our melamines and lacquer colours."
  },
  {
    q: 'How do I maintain the materials in this kitchen?',
    a: 'These are melamine fronts, and are therefore easy to maintain. This does not require any special treatment.'
  },
  {
    q: 'What types of lighting can I choose?',
    a: 'Keller offers spotlights, LED strip lighting in glass cabinets & wall shelves, and glass shelf lighting. The spotlights and LED strip lighting in this kitchen can be controlled via an intelligent LED lighting platform that combines sustainability, design and ease of use.'
  }
]

export default function KellerBoldElegance() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbe-page"
    >
      {/* ── HERO ── */}
      <section className="kbe-hero">
        <img src={UKS_BOLD_ELEGANCE_HERO} alt="Bold Elegance kitchen" className="kbe-hero__img" loading="eager" />
        <div className="kbe-hero__overlay">
          <div className="kbe-container">
            <nav className="kbe-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbe-breadcrumbs__current">Bold Elegance</span>
            </nav>
            <p className="kbe-hero__subtitle">Elegant industrial</p>
            <h1 className="kbe-hero__title">Bold Elegance</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kbe-section kbe-section--intro">
        <div className="kbe-container kbe-container--narrow">
          <h2 className="kbe-intro__title">The industrial interior style is becoming more and more elegant</h2>
          <p className="kbe-intro__body">
            This kitchen brings a fusion of classic elegance and bold accents. The bronze fronts and glass doors exude refinement, while the striking Calacatta Black worktop is a powerful eye-catcher.
          </p>
          <p className="kbe-intro__body kbe-mt">
            In addition, we have applied the new colour fossil grey – a versatile and contemporary shade that fits perfectly in modern interiors. Thanks to its timeless appearance, fossil grey has now also been added to our MASTER Collection.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Text panel left + photo right (Chocolate background `#583e2f`) ── */}
      <section className="kbe-split">
        <div className="kbe-split__panel kbe-split__panel--brown">
          <div className="kbe-split__inner">
            <h2 className="kbe-split__title">The trends: Neo Deco</h2>
            <p className="kbe-split__body">
              The revival of ‘Neo Deco’ is a modern take on ‘Art Deco’ with bold geometric patterns, luxurious materials and opulent details. Think gold and copper finishes, velvet, curves and arches.
            </p>
          </div>
        </div>
        <div className="kbe-split__photo">
          <img src={UKS_BOLD_ELEGANCE_SPLIT1} alt="Neo Deco kitchen design elements" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: Photo left + Text panel right (Taupe background `#af9d93`) ── */}
      <section className="kbe-split kbe-split--reversed">
        <div className="kbe-split__photo">
          <img src={UKS_BOLD_ELEGANCE_SPLIT2} alt="Colours and materials details" loading="lazy" />
        </div>
        <div className="kbe-split__panel kbe-split__panel--taupe">
          <div className="kbe-split__inner">
            <h2 className="kbe-split__title">Colours and materials</h2>
            
            <p className="kbe-split__label">In this kitchen:</p>
            <ul className="kbe-split__list">
              <li>Glass doors with bronze frame</li>
              <li>Matching handle trim in bronze</li>
              <li>Twisted worktop on the cooking island</li>
            </ul>

            <p className="kbe-split__label">The materials:</p>
            <ul className="kbe-split__list">
              <li>Elba melamine front in fossil grey</li>
              <li>Handle strip in bronze</li>
              <li>Bolton melamine front in bronzite</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kbe-section kbe-section--img-wide">
        <div className="kbe-container kbe-container--wide">
          <figure className="kbe-figure">
            <img src={UKS_BOLD_ELEGANCE_WIDE} alt="Bold Elegance kitchen wide setup" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Taupe bg, white text) ── */}
      <section className="kbe-section kbe-section--faq">
        <div className="kbe-container kbe-container--content">
          <h2 className="kbe-faq__heading">Why not try this?</h2>
          <p className="kbe-faq__intro">
            This kitchen is finished in melamine. Would you like a more luxurious version? Then choose veneer in lacquer or stain. At Keller you can choose from 2,050 NCS lacquer colours. Ask your dealer for advice.
          </p>
          <p className="kbe-faq__intro kbe-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kbe-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kbe-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbe-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbe-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbe-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbe-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="kbe-cta-section">
        <div className="kbe-container kbe-container--narrow kbe-container--centered">
          <h2 className="kbe-cta__title">Curious about our programme?</h2>
          <p className="kbe-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbe-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kbe-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --brown-bg:   #583e2f;
          --taupe-bg:   #af9d93;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-white: rgba(255, 255, 255, 0.15);
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kbe-mt { margin-top: 16px; }

        /* ── containers ── */
        .kbe-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kbe-container--narrow  { max-width: 780px; }
        .kbe-container--content { max-width: 1080px; }
        .kbe-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kbe-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kbe-container { padding: 0 20px; }
          .kbe-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kbe-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kbe-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kbe-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kbe-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kbe-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kbe-breadcrumbs a:hover { color: #fff; }
        .kbe-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kbe-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kbe-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kbe-section {
          padding: 80px 0;
        }
        .kbe-section.no-pt { padding-top: 0; }
        
        .kbe-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kbe-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kbe-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kbe-split { grid-template-columns: 42fr 58fr; }
          .kbe-split--reversed { grid-template-columns: 58fr 42fr; }
        }
        .kbe-split__panel {
          display: flex; align-items: center; color: var(--text-white);
        }
        .kbe-split__panel--brown { background: var(--brown-bg); }
        .kbe-split__panel--taupe { background: var(--taupe-bg); color: var(--charcoal); }

        .kbe-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kbe-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kbe-split__inner { padding: 72px 72px; } }

        .kbe-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kbe-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kbe-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kbe-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kbe-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kbe-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kbe-split__list li + li { margin-top: 6px; }

        .kbe-split__photo { overflow: hidden; }
        .kbe-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kbe-split__photo { display: flex; align-items: stretch; }
          .kbe-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kbe-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kbe-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kbe-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kbe-section--faq {
          padding: 80px 0 72px; background: var(--taupe-bg); color: var(--text-white);
        }
        .kbe-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kbe-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kbe-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kbe-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kbe-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .kbe-faq__item { border-bottom: 1px solid var(--border-white); }
        .kbe-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kbe-faq__toggle:hover { color: var(--text-muted); }
        .kbe-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kbe-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kbe-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kbe-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kbe-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kbe-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kbe-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kbe-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbe-hero          { height: 55vh; min-height: 360px; }
          .kbe-hero__overlay { padding-bottom: 40px; }
          .kbe-section--intro { padding: 52px 0 44px; }
          .kbe-section--faq   { padding: 52px 0 52px; }
          .kbe-cta-section    { padding: 64px 0 72px; }
          .kbe-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
