import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-majestic-mansion assets folder
import UKS_MAJESTIC_MANSION_HERO from '../assets/uks-majestic-mansion/uks-majestic-mansion-hero.webp';
import UKS_MAJESTIC_MANSION_WIDE_AFBEELDING from '../assets/uks-majestic-mansion/uks-majestic-mansion-wide-afbeelding.webp';
import UKS_MAJESTIC_MANSION_SPLIT_BIJTXT from '../assets/uks-majestic-mansion/uks-majestic-mansion-split-bijtxt.webp';
import UKS_MAJESTIC_MANSION_WIDE_RASTER from '../assets/uks-majestic-mansion/uks-majestic-mansion-wide-raster.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'This is a two-tone kitchen. The dark part is model Lexington, a veneer front. This can be finished in matt, satin, and textured lacquer, with a choice of 2,050 lacquer colours. For a more natural effect, choose one of our nine stain colours. The open units are made of melamine in the colour pecan brown. You can choose any other melamine (uni) colour for this. Do you want more choice? Then choose a lacquered model, which can be supplied in 2,050 matt, textured, satin, and high-gloss lacquer colours.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain glass units?',
    a: 'The glass can be cleaned with mild detergents and normal glass cleaners. Do not use chemicals or strong corrosive agents. Dry with a soft cloth or chamois for a streak-free result.'
  }
]

export default function KellerMajesticMansion() {
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
        <img src={UKS_MAJESTIC_MANSION_HERO} alt="Majestic Mansion kitchen" className="kmm-hero__img" loading="eager" />
        <div className="kmm-hero__overlay">
          <div className="kmm-container">
            <nav className="kmm-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kmm-breadcrumbs__current">Majestic Mansion</span>
            </nav>
            <p className="kmm-hero__subtitle">Timeless elegance</p>
            <h1 className="kmm-hero__title">Majestic Mansion</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kmm-section kmm-section--intro">
        <div className="kmm-container kmm-container--narrow">
          <h2 className="kmm-intro__title">The style of the Dutch masters</h2>
          <p className="kmm-intro__body">
            Realise timeless elegance in your kitchen with the Majestic Mansion.
          </p>
          <p className="kmm-intro__body kmm-mt">
            In this modern-classic kitchen you will recognise the style of the Dutch masters, with the play between
            dark &amp; light and the floral pattern in the wallpaper. The warm, dark veneer with a narrow frame and the
            glass doors in smoked glass create a 'majestic' atmosphere.
          </p>
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size) ── */}
      <section className="kmm-section kmm-section--img-wide no-pt">
        <div className="kmm-container kmm-container--wide">
          <figure className="kmm-figure">
            <img src={UKS_MAJESTIC_MANSION_WIDE_AFBEELDING} alt="Majestic Mansion details view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kmm-split">
        <div className="kmm-split__panel">
          <div className="kmm-split__inner">
            <h2 className="kmm-split__title">For the lover of real classic</h2>
            <p className="kmm-split__body">
              Special elements are the recessed open units in pecan brown. The glass units with smoked glass and LED
              strip lighting provide a chic finishing touch.
            </p>

            <p className="kmm-split__label">In this kitchen:</p>
            <ul className="kmm-split__list">
              <li>Recessed units in trend colour pecan brown</li>
              <li>Tall crittal doors in dark smoked glass</li>
              <li>Narrow framed front in matt black oak stain</li>
            </ul>

            <p className="kmm-split__label">The materials:</p>
            <ul className="kmm-split__list">
              <li>Front Lexington (narrow framed veneer) in matt black oak stain</li>
              <li>Front Elba in pecan brown</li>
              <li>Handle 696 in old copper</li>
              <li>Tall crittal doors in dark smoked glass with LED lighting</li>
            </ul>
          </div>
        </div>
        <div className="kmm-split__photo">
          <img src={UKS_MAJESTIC_MANSION_SPLIT_BIJTXT} alt="Majestic Mansion close-up" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE RASTER IMAGE (Window Size) ── */}
      <section className="kmm-section kmm-section--img-wide">
        <div className="kmm-container kmm-container--wide">
          <figure className="kmm-figure">
            <img src={UKS_MAJESTIC_MANSION_WIDE_RASTER} alt="Majestic Mansion technical grid view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ ── */}
      <section className="kmm-section kmm-section--faq">
        <div className="kmm-container kmm-container--content">
          <h2 className="kmm-faq__heading">Why not try this?</h2>
          <p className="kmm-faq__intro">
            You can also opt for a flat front. Finishing the kitchen in a wood-look melamine ensures a more favourable
            price tag. You can also opt for light smoked glass or glass doors without rods.
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

      {/* ── CTA — Terracotta/Copper bg ── */}
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
          --dark-bg:    #151412;
          --terracotta: #8a574c;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.7);
          --border-muted: rgba(255, 255, 255, 0.15);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--dark-bg);
          color: var(--text-white);
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
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
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
          color: var(--text-white); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kmm-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
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
          display: flex; align-items: center; background: var(--terracotta); color: var(--text-white);
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
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kmm-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .kmm-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.5); margin-top: 4px;
        }
        .kmm-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kmm-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kmm-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
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
          padding: 80px 0 72px; border-top: 1px solid var(--border-muted);
        }
        .kmm-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kmm-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kmm-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kmm-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kmm-faq__list { border-top: 1px solid var(--border-muted); margin-top: 40px; }
        .kmm-faq__item { border-bottom: 1px solid var(--border-muted); }
        .kmm-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kmm-faq__toggle:hover { color: var(--text-muted); }
        .kmm-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kmm-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kmm-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kmm-cta-section {
          background: var(--terracotta); padding: 96px 0 112px; text-align: center;
        }
        .kmm-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--text-white); margin: 0 0 18px; line-height: 1.1;
        }
        .kmm-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kmm-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--terracotta);
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
