import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-bliss-boutique assets folder
import UKS_BLISS_BOUTIQUE_VIDEO_LANDSCAPE from '../assets/uks-bliss-boutique/uks-bliss-boutique-video-landscape.mp4';
import UKS_BLISS_BOUTIQUE_VIDEO_PORTRAIT from '../assets/uks-bliss-boutique/uks-bliss-boutique-video-portrait.mp4';
import UKS_BLISS_BOUTIQUE_HERO_FALLBACK from '../assets/uks-bliss-boutique/uks-bliss-boutique-hero-fallback.webp';
import UKS_BLISS_BOUTIQUE_SPLIT_BIJTXT from '../assets/uks-bliss-boutique/uks-bliss-boutique-split-bijtxt.webp';
import UKS_BLISS_BOUTIQUE_WIDE_RASTER from '../assets/uks-bliss-boutique/uks-bliss-boutique-wide-raster.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'To really give your kitchen a "personal touch", you can choose from 2,050 colors in matt, textured, satin and high-gloss lacquer. Our handles are also available in 2,050 colours, plus five metallic lacquer colours. The island is made of melamine shaker doors, model Cascada. You can choose from various uni colours and (wood) decors.'
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

export default function KellerBlissBoutique() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kbb-page"
    >
      {/* ── HERO ── */}
      <section className="kbb-hero">
        <img src={UKS_BLISS_BOUTIQUE_HERO_FALLBACK} alt="Bliss Boutique kitchen" className="kbb-hero__img" loading="eager" />
        <div className="kbb-hero__overlay">
          <div className="kbb-container">
            <nav className="kbb-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kbb-breadcrumbs__current">Bliss Boutique</span>
            </nav>
            <p className="kbb-hero__subtitle">Glamour &amp; luxury</p>
            <h1 className="kbb-hero__title">Bliss Boutique</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kbb-section kbb-section--intro">
        <div className="kbb-container kbb-container--narrow">
          <h2 className="kbb-intro__title">Step into the boutique hotel trend</h2>
          <p className="kbb-intro__body">
            This design fits the boutique hotel trend perfectly. Classic green, warm wood and cognac tones,
            combined with luxurious marble and golden accents characterise this glamorous style.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN VIDEO ── */}
      <section className="kbb-video-section">
        <div className="kbb-video-wrap">
          <video className="kbb-video kbb-video--landscape" muted autoPlay loop playsInline>
            <source src={UKS_BLISS_BOUTIQUE_VIDEO_LANDSCAPE} type="video/mp4" />
          </video>
          <video className="kbb-video kbb-video--portrait" muted autoPlay loop playsInline>
            <source src={UKS_BLISS_BOUTIQUE_VIDEO_PORTRAIT} type="video/mp4" />
          </video>
          <div className="kbb-video-text-overlay">
            <div className="kbb-container">
              <h2 className="kbb-video-title">Luxurious &amp; decadent</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kbb-split">
        <div className="kbb-split__panel">
          <div className="kbb-split__inner">
            <h2 className="kbb-split__title">The marble bar makes the design complete</h2>
            <p className="kbb-split__body">
              The matching bar with marble surround and the golden water tap and sink complete the whole.
            </p>
            <p className="kbb-split__label">In this kitchen:</p>
            <ul className="kbb-split__list">
              <li>Gold-lacquered handless trims</li>
              <li>Shelf in walnut</li>
              <li>Bar with shaker doors in walnut decor</li>
            </ul>
          </div>
        </div>
        <div className="kbb-split__photo">
          <img src={UKS_BLISS_BOUTIQUE_SPLIT_BIJTXT} alt="Bliss Boutique bar detail" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE — full width ── */}
      <section className="kbb-section kbb-section--img-wide">
        <div className="kbb-container kbb-container--wide">
          <figure className="kbb-figure">
            <img src={UKS_BLISS_BOUTIQUE_WIDE_RASTER} alt="Bliss Boutique layout grid view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ ── */}
      <section className="kbb-section kbb-section--faq">
        <div className="kbb-container kbb-container--content">
          <h2 className="kbb-faq__heading">Why not try this?</h2>
          <p className="kbb-faq__intro">
            Classic dark blue, bordeaux red or black with gold, warm wood and cognac colours. No problem for Keller
            Kitchens, because you can choose from 2,050 lacquer colours.
          </p>
          <p className="kbb-faq__intro kbb-mt">
            Our handles are also available in 2,050 lacquer colors and in five colours in metallic. The bar can also
            be finished in veneer for an even more luxurious look.
          </p>
          <p className="kbb-faq__intro kbb-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kcf-link">Keller dealers</Link>. They are happy to create a design in
            this style that suits your home and budget.
          </p>

          <dl className="kbb-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kbb-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kbb-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kbb-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kbb-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="kbb-cta-section">
        <div className="kbb-container kbb-container--narrow kbb-container--centered">
          <h2 className="kbb-cta__title">Curious about our programme?</h2>
          <p className="kbb-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kbb-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kbb-page {
          --white:      #ffffff;
          --light-bg:   #f5f5f7;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     rgba(0,0,0,0.12);
          --accent:     #d0cdc4;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kbb-mt { margin-top: 16px; }

        /* ── containers ── */
        .kbb-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kbb-container--narrow  { max-width: 780px; }
        .kbb-container--content { max-width: 1080px; }
        .kbb-container--wide    { max-width: 1400px; }
        .kbb-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) { .kbb-container { padding: 0 20px; } }

        /* ── hero ── */
        .kbb-hero {
          position: relative; height: 100vh; overflow: hidden; background: #222;
        }
        .kbb-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.88;
        }
        .kbb-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs on hero */
        .kbb-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kbb-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kbb-breadcrumbs a:hover { color: #fff; }
        .kbb-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kbb-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kbb-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .kbb-section--intro {
          padding: 80px 0 72px; text-align: center;
        }
        .kbb-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
        }
        .kbb-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── full screen video ── */
        .kbb-video-section {
          position: relative; height: 100vh; background: #000; overflow: hidden;
        }
        .kbb-video-wrap {
          position: absolute; inset: 0; width: 100%; height: 100%;
        }
        .kbb-video {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
        }
        .kbb-video--portrait { display: none; }
        @media (max-width: 768px) {
          .kbb-video--landscape { display: none; }
          .kbb-video--portrait { display: block; }
        }
        .kbb-video-text-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.25);
          display: flex; align-items: center; padding-left: 10%;
        }
        .kbb-video-title {
          font-family: var(--ff-serif);
          font-size: clamp(32px, 5vw, 64px); font-weight: 300;
          color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.3); margin: 0;
        }

        /* ── split sections ── */
        .kbb-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kbb-split { grid-template-columns: 5fr 7fr; }
        }
        .kbb-split__panel {
          display: flex;
          align-items: center;
          background: #d0cdc4;
          color: var(--charcoal);
        }
        .kbb-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kbb-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kbb-split__inner { padding: 88px 80px; } }

        .kbb-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--charcoal); margin: 0; line-height: 1.2;
        }
        .kbb-split__body {
          font-size: 15px; line-height: 1.75; color: var(--mid); margin: 0;
        }
        .kbb-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--accent-brown, #888); margin-top: 4px;
        }
        .kbb-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--charcoal);
        }
        .kbb-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kbb-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--charcoal);
          font-weight: 700;
        }
        .kbb-split__list li + li { margin-top: 6px; }

        .kbb-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kbb-split__photo { min-height: unset; height: 100vh; }
        }
        .kbb-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── wide image ── */
        .kbb-section--img-wide { padding: 40px 0; }
        .kbb-figure { margin: 0; overflow: hidden; border-radius: 6px; }
        .kbb-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kbb-section--faq {
          padding: 80px 0 72px; border-top: 1px solid var(--border);
        }
        .kbb-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kbb-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .kcf-link { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kcf-link:hover { color: #888; }

        .kbb-faq__list { border-top: 1px solid var(--border); margin-top: 40px; }
        .kbb-faq__item { border-bottom: 1px solid var(--border); }
        .kbb-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kbb-faq__toggle:hover { color: #888; }
        .kbb-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kbb-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kbb-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kbb-cta-section {
          background: var(--accent); padding: 96px 0 112px; text-align: center;
        }
        .kbb-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kbb-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kbb-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kbb-cta__btn:hover { background: #000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kbb-hero          { height: 55vh; min-height: 360px; }
          .kbb-hero__overlay { padding-bottom: 40px; }
          .kbb-section--intro { padding: 52px 0 44px; }
          .kbb-section--faq   { padding: 52px 0 52px; }
          .kbb-cta-section    { padding: 64px 0 72px; }
          .kbb-split__inner   { padding: 48px 24px; }
          .kbb-video-section  { height: 50vh; }
        }
      `}</style>
    </motion.div>
  )
}
