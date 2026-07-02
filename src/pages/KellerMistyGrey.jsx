import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-misty-grey assets folder
import UKS_MISTY_GREY_HERO from '../assets/uks-misty-grey/uks-misty-grey-hero.webp';
import UKS_MISTY_GREY_FULLSCREEN from '../assets/uks-misty-grey/uks-misty-grey-fullscreen.webp';
import UKS_MISTY_GREY_SPLIT from '../assets/uks-misty-grey/uks-misty-grey-split.webp';
import UKS_MISTY_GREY_SWATCH1 from '../assets/uks-misty-grey/uks-misty-grey-swatch1.webp';
import UKS_MISTY_GREY_SWATCH2 from '../assets/uks-misty-grey/uks-misty-grey-swatch2.webp';
import UKS_MISTY_GREY_SWATCH3 from '../assets/uks-misty-grey/uks-misty-grey-swatch3.webp';
import UKS_MISTY_GREY_WIDE from '../assets/uks-misty-grey/uks-misty-grey-wide.webp';

const FAQ_DATA = [
  {
    q: 'How do I maintain melamine?',
    a: "Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling."
  },
  {
    q: 'Which handles can I choose from?',
    a: 'At Keller you can choose from a wide range of handles, in different colors and widths. Tip: combine two different widths in your kitchen for a special accent.'
  }
]

export default function KellerMistyGrey() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kmg-page"
    >
      {/* ── HERO ── */}
      <section className="kmg-hero">
        <img src={UKS_MISTY_GREY_HERO} alt="Misty Grey kitchen" className="kmg-hero__img" loading="eager" />
        <div className="kmg-hero__overlay">
          <div className="kmg-container">
            <nav className="kmg-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmg-breadcrumbs__current">Misty Grey</span>
            </nav>
            <p className="kmg-hero__subtitle">Fresh & timeless appearance</p>
            <h1 className="kmg-hero__title">Misty Grey</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kmg-section kmg-section--intro">
        <div className="kmg-container kmg-container--narrow">
          <h2 className="kmg-intro__title">Fresh & timeless appearance</h2>
          <p className="kmg-intro__body">
            In the Misty Grey you will recognize the minimalist beauty of Scandinavian design. For this national setup, we have outlined the frame doors with panels, creating the 'in frame' design. A beautiful, modern version of a country kitchen.
          </p>
          <p className="kmg-intro__body kmg-mt">
            The colour mist is reflected in both the fronts and the top, which provides a fresh and timeless appearance. Furthermore, the greyed wood accents are subtile eye-catchers.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN IMAGE 1 ── */}
      <section className="kmg-fullscreen">
        <img src={UKS_MISTY_GREY_FULLSCREEN} alt="Misty Grey full kitchen view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right ── */}
      <section className="kmg-split">
        <div className="kmg-split__panel">
          <div className="kmg-split__inner">
            <h2 className="kmg-split__title">Country style frame kitchen in mist</h2>
            
            <p className="kmg-split__label">In this kitchen:</p>
            <ul className="kmg-split__list">
              <li>Shaker doors, model Cascada</li>
              <li>Color mist from the Master Collection - available in melamine, silk gloss, structured, matt & high-gloss lacquer</li>
              <li>Accent front model Bronx - greige oak</li>
            </ul>

            <p className="kmg-split__label">Eye-catchers:</p>
            <ul className="kmg-split__list">
              <li>In-frame kitchen design</li>
              <li>Greige accent panel</li>
              <li>Fresh design taken further in white water tap, sink and hood</li>
            </ul>
          </div>
        </div>
        <div className="kmg-split__photo">
          <img src={UKS_MISTY_GREY_SPLIT} alt="Cascada and Bronx front details" loading="lazy" />
        </div>
      </section>

      {/* ── COLOURS & MODELS (SWATCHES) ── */}
      <section className="kmg-section kmg-section--swatches">
        <div className="kmg-container">
          <h2 className="kmg-swatches__title">Colours & models</h2>
          <div className="kmg-swatches__grid">
            
            {/* Swatch 1 */}
            <div className="kmg-swatch-card">
              <div className="kmg-swatch-card__image-wrap">
                <img src={UKS_MISTY_GREY_SWATCH1} alt="Mist swatch" loading="lazy" />
              </div>
              <span className="kmg-swatch-card__label">Melamine & lacquer</span>
            </div>

            {/* Swatch 2 */}
            <div className="kmg-swatch-card">
              <div className="kmg-swatch-card__image-wrap">
                <img src={UKS_MISTY_GREY_SWATCH2} alt="Greige oak swatch" loading="lazy" />
              </div>
              <span className="kmg-swatch-card__label">Melamine | Greige oak</span>
            </div>

            {/* Swatch 3 */}
            <div className="kmg-swatch-card">
              <div className="kmg-swatch-card__image-wrap">
                <img src={UKS_MISTY_GREY_SWATCH3} alt="Handle 750" loading="lazy" />
              </div>
              <span className="kmg-swatch-card__label">Handle 750</span>
            </div>

          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kmg-section kmg-section--img-wide">
        <div className="kmg-container kmg-container--wide">
          <figure className="kmg-figure">
            <img src={UKS_MISTY_GREY_WIDE} alt="Misty Grey kitchen moodboard" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Taupe bg, white text) ── */}
      <section className="kmg-section kmg-section--faq">
        <div className="kmg-container kbc-container--content">
          <h2 className="kmg-faq__heading">Why not try this?</h2>
          <p className="kmg-faq__intro">
            Prefer a more luxurious option, you can choose the Notthingham front in veneer with a lacquered finish.
          </p>
          <p className="kmg-faq__intro kmg-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kmg-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kmg-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kmg-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kmg-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kmg-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kmg-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="kmg-cta-section">
        <div className="kmg-container kmg-container--narrow kmg-container--centered">
          <h2 className="kmg-cta__title">Curious about our programme?</h2>
          <p className="kmg-cta__body">Have a look at our materials in real life, and visit a dealer.</p>
          <Link to="/contact" className="kmg-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kmg-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --faq-bg:     #a79d93;
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
        .kmg-mt { margin-top: 16px; }

        /* ── containers ── */
        .kmg-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kmg-container--narrow  { max-width: 780px; }
        .kmg-container--content { max-width: 1080px; }
        .kmg-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kmg-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kmg-container { padding: 0 20px; }
          .kmg-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kmg-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kmg-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kmg-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kmg-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kmg-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kmg-breadcrumbs a:hover { color: #fff; }
        .kmg-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kmg-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kmg-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kmg-section {
          padding: 80px 0;
        }
        .kmg-section.no-pt { padding-top: 0; }
        
        .kmg-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kmg-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kmg-fullscreen { background: var(--light-bg); line-height: 0; }
        .kmg-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kmg-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kmg-split { grid-template-columns: 42fr 58fr; }
        }
        .kmg-split__panel {
          display: flex; align-items: center; background: var(--faq-bg); color: var(--text-white);
        }
        .kmg-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kmg-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kmg-split__inner { padding: 72px 72px; } }

        .kmg-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kmg-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kmg-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kmg-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kmg-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .kmg-split__list li + li { margin-top: 6px; }

        .kmg-split__photo { overflow: hidden; }
        .kmg-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kmg-split__photo { display: flex; align-items: stretch; }
          .kmg-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── swatches range ── */
        .kmg-section--swatches {
          background: var(--light-bg);
          border-top: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .kmg-swatches__title {
          font-family: var(--ff-serif);
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 300; text-align: center;
          margin: 0 0 48px;
        }
        .kmg-swatches__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
        }
        .kmg-swatch-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .kmg-swatch-card__image-wrap {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          background: #f5f5f7;
          border-radius: 4px;
          margin-bottom: 16px;
        }
        .kmg-swatch-card__image-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.3s ease;
        }
        .kmg-swatch-card:hover .kmg-swatch-card__image-wrap img {
          transform: scale(1.05);
        }
        .kmg-swatch-card__label {
          font-size: 14px;
          font-weight: 600;
          color: var(--charcoal);
        }

        /* ── wide image ── */
        .kmg-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kmg-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kmg-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kmg-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--text-white);
        }
        .kmg-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kmg-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kmg-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kmg-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kmg-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .kmg-faq__item { border-bottom: 1px solid var(--border-white); }
        .kmg-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kmg-faq__toggle:hover { color: var(--text-muted); }
        .kmg-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kmg-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kmg-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kmg-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kmg-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kmg-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kmg-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kmg-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kmg-hero          { height: 55vh; min-height: 360px; }
          .kmg-hero__overlay { padding-bottom: 40px; }
          .kmg-section--intro { padding: 52px 0 44px; }
          .kmg-section--faq   { padding: 52px 0 52px; }
          .kmg-cta-section    { padding: 64px 0 72px; }
          .kmg-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
