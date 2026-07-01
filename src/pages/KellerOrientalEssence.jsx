import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-oriental-essence assets folder
import UKS_ORIENTAL_ESSENCE_HERO from '../assets/uks-oriental-essence/uks-oriental-essence-hero.webp';
import UKS_ORIENTAL_ESSENCE_SPLIT1 from '../assets/uks-oriental-essence/uks-oriental-essence-split1.webp';
import UKS_ORIENTAL_ESSENCE_SPLIT2 from '../assets/uks-oriental-essence/uks-oriental-essence-split2.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'You are free to choose any melamines or lacquer colours. This way our dealers can make a kitchen design truly personal.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerOrientalEssence() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="koe-page"
    >
      {/* ── HERO ── */}
      <section className="koe-hero">
        <img src={UKS_ORIENTAL_ESSENCE_HERO} alt="Oriental Essence kitchen" className="koe-hero__img" loading="eager" />
        <div className="koe-hero__overlay">
          <div className="koe-container">
            <nav className="koe-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="koe-breadcrumbs__current">Oriëntal Essence</span>
            </nav>
            <p className="koe-hero__subtitle">Luxury and character</p>
            <h1 className="koe-hero__title">Oriëntal Essence</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="koe-section koe-section--intro">
        <div className="koe-container koe-container--narrow">
          <h2 className="koe-intro__title">The taste of the East</h2>
          <p className="koe-intro__body">
            The hotel chic interior style brings the experience of a luxury hotel into your own home: rich in comfort,
            refined in appearance and composed of high-quality materials and sophisticated forms. As the deeper, fuller
            colours of recent years give way to a calmer, more harmonious palette, space opens up for warm combinations
            such as our decors caramel walnut and sesame. Paired with a subtle marble look or travertine, you create a
            kitchen that radiates tranquillity while making a confident and personal statement.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Text panel left + photo right ── */}
      <section className="koe-split">
        <div className="koe-split__panel">
          <div className="koe-split__inner">
            <h2 className="koe-split__title">The trend: hotel chic</h2>
            <p className="koe-split__body">
              The hotel chic movement brings the elegance and refinement of luxury hotels to your kitchen.
            </p>
            <p className="koe-split__body">
              This style combines high-quality materials, glamorous accents and a sense of exclusivity. If you are
              looking for kitchen inspiration, hotel chic offers a perfect blend of comfort and luxury, making the
              kitchen a space where you feel special every day.
            </p>
          </div>
        </div>
        <div className="koe-split__photo">
          <img src={UKS_ORIENTAL_ESSENCE_SPLIT1} alt="Hotel chic styling detail" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: Photo left + Text panel right (INVERSE) ── */}
      <section className="koe-split koe-split--inverse">
        <div className="koe-split__panel">
          <div className="koe-split__inner">
            <h2 className="koe-split__title">Warm walnut caramel</h2>
            <p className="koe-split__label">In this kitchen:</p>
            <ul className="koe-split__list">
              <li>Semi-built-in units</li>
              <li>Calm, warm wood decors</li>
              <li>Chic greige</li>
            </ul>

            <p className="koe-split__label">The materials:</p>
            <ul className="koe-split__list">
              <li>Melamine front Elba | walnut caramel</li>
              <li>Melamine front Elba | sesame</li>
              <li>Handle trim | sesame</li>
            </ul>
          </div>
        </div>
        <div className="koe-split__photo">
          <img src={UKS_ORIENTAL_ESSENCE_SPLIT2} alt="Warm walnut caramel details" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="koe-section koe-section--img-wide">
        <div className="koe-container koe-container--wide">
          <figure className="koe-figure">
            <img src={UKS_ORIENTAL_ESSENCE_HERO} alt="Oriental Essence full view layout" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Warm Greige bg) ── */}
      <section className="koe-section koe-section--faq">
        <div className="koe-container koe-container--content">
          <h2 className="koe-faq__heading">Why not try this?</h2>
          <p className="koe-faq__intro">
            For a more luxurious version, you can choose a veneer front combined with a lacquered model.
          </p>
          <p className="koe-faq__intro koe-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (frame)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="koe-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="koe-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="koe-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="koe-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="koe-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="koe-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="koe-cta-section">
        <div className="koe-container koe-container--narrow koe-container--centered">
          <h2 className="koe-cta__title">Curious about our programme?</h2>
          <p className="koe-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="koe-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .koe-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --greige-bg:  #cfc4b2;
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
        .koe-mt { margin-top: 16px; }

        /* ── containers ── */
        .koe-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .koe-container--narrow  { max-width: 780px; }
        .koe-container--content { max-width: 1080px; }
        .koe-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .koe-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .koe-container { padding: 0 20px; }
          .koe-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .koe-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .koe-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .koe-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .koe-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .koe-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .koe-breadcrumbs a:hover { color: #fff; }
        .koe-breadcrumbs__current { color: #fff; font-weight: 700; }

        .koe-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .koe-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .koe-section {
          padding: 80px 0;
        }
        .koe-section.no-pt { padding-top: 0; }
        
        .koe-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .koe-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .koe-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .koe-split { grid-template-columns: 5fr 7fr; }
          .koe-split--inverse { grid-template-columns: 7fr 5fr; }
          .koe-split--inverse .koe-split__panel { order: 2; }
          .koe-split--inverse .koe-split__photo { order: 1; }
        }
        .koe-split__panel {
          display: flex; align-items: center; background: var(--greige-bg); color: var(--charcoal);
        }
        .koe-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .koe-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .koe-split__inner { padding: 88px 80px; } }

        .koe-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--charcoal); margin: 0; line-height: 1.25;
        }
        .koe-split__body {
          font-size: 15px; line-height: 1.75; color: var(--mid); margin: 0;
        }
        .koe-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(0,0,0,0.5); margin-top: 4px;
        }
        .koe-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--charcoal);
        }
        .koe-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .koe-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--charcoal);
          font-weight: 700;
        }
        .koe-split__list li + li { margin-top: 6px; }

        .koe-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .koe-split__photo { min-height: unset; height: 100vh; }
        }
        .koe-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .koe-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .koe-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .koe-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .koe-section--faq {
          padding: 80px 0 72px; background: var(--greige-bg); color: var(--charcoal);
        }
        .koe-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .koe-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .koe-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .koe-link-faq:hover { color: #888888; }

        .koe-faq__list { border-top: 1px solid var(--border); margin-top: 40px; }
        .koe-faq__item { border-bottom: 1px solid var(--border); }
        .koe-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .koe-faq__toggle:hover { color: var(--mid); }
        .koe-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .koe-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .koe-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .koe-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--text-dark);
        }
        .koe-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--text-dark); margin: 0 0 18px; line-height: 1.1;
        }
        .koe-cta__body {
          font-size: 17px; line-height: 1.7; color: #555; margin: 0 0 40px;
        }
        .koe-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .koe-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .koe-hero          { height: 55vh; min-height: 360px; }
          .koe-hero__overlay { padding-bottom: 40px; }
          .koe-section--intro { padding: 52px 0 44px; }
          .koe-section--faq   { padding: 52px 0 52px; }
          .koe-cta-section    { padding: 64px 0 72px; }
          .koe-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
