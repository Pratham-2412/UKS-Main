import HERO_IMG from '../assets/uks-timeless-charm/timeless-charm-1326-x-884-afbeelding.webp';
import SPLIT1_IMG from '../assets/uks-timeless-charm/timeless-charm-944-x-884-afbeelding-bij-tekst.webp';
import SPLIT2_IMG from '../assets/uks-timeless-charm/timeless-charm-944-x-884-afbeelding-bij-tekst2.webp';
import WIDE_IMG from '../assets/uks-timeless-charm/timeless-charm-1326-x-884-afbeelding.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
/* ── Images ────────────────────────────────────────────────── */





const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose for this kitchen?',
    a: 'You are free to choose from all melamine or lacquer colours. This allows our dealers to create a kitchen design that is truly personal.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. Some substances cannot be completely removed if they are not cleaned immediately. Use a mild kitchen or all-purpose cleaner diluted in water and a soft cloth. After cleaning, dry the doors straight away with a soft cloth to prevent water from penetrating the joints, which could cause swelling.'
  }
]

export default function KellerTimelessCharm() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="ktc-page"
    >
      {/* ── HERO ── */}
      <section className="ktc-hero">
        <img src={HERO_IMG} alt="Timeless Charm kitchen" className="ktc-hero__img" loading="eager" />
        <div className="ktc-hero__overlay">
          <div className="ktc-container">
            <nav className="ktc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="ktc-breadcrumbs__current">Timeless Charm</span>
            </nav>
            <p className="ktc-hero__subtitle">Classic &amp; elegant</p>
            <h1 className="ktc-hero__title">Timeless Charm</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="ktc-section ktc-section--intro">
        <div className="ktc-container ktc-container--narrow">
          <h2 className="ktc-intro__title">The shaker door is back!</h2>
          <p className="ktc-intro__body">
            Traditionally used mainly in country style kitchens, now we see frames and profiles increasingly
            returning in classic-modern interiors.
          </p>
          <p className="ktc-intro__body ktc-mt">
            Create an elegant touch, especially when executed in a chic greige shade. This versatile shade provides
            a timeless and serene look, perfect for both modern and classic interiors. As a trend, greige offers a
            neutral base that is easy to combine with other colours and materials. We selected the new Avalon front
            and opted for the colour sea salt, combined with a champagne-coloured handle in two versions.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Trends: textures and lines — text left (light greige) + photo right ── */}
      <section className="ktc-split">
        <div className="ktc-split__panel ktc-split__panel--light">
          <div className="ktc-split__inner">
            <h2 className="ktc-split__title">Trends: textures and lines</h2>
            <p className="ktc-split__body">
              We see many lines, ridges, organic bubbles and structures in interior trends. Everything must be
              tangible and often also tactile. You also look with your hands! The feeling that a certain product
              gives plays a major role in the experience of it.
            </p>
            <p className="ktc-split__body">
              We will see these coarse structures in, among other things, wallpaper and curtain fabrics. But also in
              kitchens, where the vein or texture of the material may be tangible.
            </p>
          </div>
        </div>
        <div className="ktc-split__photo">
          <img src={SPLIT1_IMG} alt="Trends textures and lines detail" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2 INVERSE: Stylish greige — photo left + text right (darker greige) ── */}
      <section className="ktc-split ktc-split--inverse">
        <div className="ktc-split__panel ktc-split__panel--dark">
          <div className="ktc-split__inner">
            <h2 className="ktc-split__title">Stylish greige with new style shaker door</h2>
            <p className="ktc-split__label">In this kitchen:</p>
            <ul className="ktc-split__list">
              <li>New style shaker door</li>
              <li>Handle and knob in champagne</li>
              <li>Rounded worktop on the island</li>
            </ul>
            <p className="ktc-split__label">The materials:</p>
            <ul className="ktc-split__list">
              <li>Front Avalon | sea salt silk gloss lacquer</li>
              <li>Handles | 759 &amp; 762</li>
            </ul>
          </div>
        </div>
        <div className="ktc-split__photo">
          <img src={SPLIT2_IMG} alt="Avalon shaker door detail" loading="lazy" />
        </div>
      </section>

      {/* ── FULL-SCREEN VIEW ── */}
      <section className="ktc-section ktc-section--fullscreen">
        <figure className="ktc-fullscreen">
          <img src={WIDE_IMG} alt="Timeless Charm wide kitchen view" loading="lazy" />
        </figure>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ ── */}
      <section className="ktc-section ktc-section--faq">
        <div className="ktc-container ktc-container--content">
          <h2 className="ktc-faq__heading">Why not try this?</h2>
          <p className="ktc-faq__intro">
            You can save money by choosing melamine instead of lacquer, and a melamine worktop.
          </p>
          <p className="ktc-faq__intro ktc-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="ktc-link">Keller dealers</Link>. They are happy to create a design in
            this style that suits your home and budget.
          </p>

          <dl className="ktc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="ktc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="ktc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="ktc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="ktc-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ktc-cta-section">
        <div className="ktc-container ktc-container--narrow ktc-container--centered">
          <h2 className="ktc-cta__title">Curious about our programme?</h2>
          <p className="ktc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="ktc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .ktc-page {
          --white:      #ffffff;
          --greige-lt:  #d7d3d0;
          --greige-dk:  #beb7b0;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     rgba(0,0,0,0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .ktc-mt { margin-top: 16px; }

        /* ── containers ── */
        .ktc-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .ktc-container--narrow  { max-width: 780px; }
        .ktc-container--content { max-width: 1080px; }
        .ktc-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) { .ktc-container { padding: 0 20px; } }

        /* ── hero ── */
        .ktc-hero {
          position: relative; height: 100vh; overflow: hidden; background: #d7d3d0;
        }
        .ktc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.88;
        }
        .ktc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs on hero */
        .ktc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .ktc-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .ktc-breadcrumbs a:hover { color: #fff; }
        .ktc-breadcrumbs__current { color: #fff; font-weight: 700; }

        .ktc-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .ktc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .ktc-section--intro {
          padding: 80px 0 72px; text-align: center;
        }
        .ktc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
        }
        .ktc-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split sections ── */
        .ktc-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .ktc-split { grid-template-columns: 5fr 7fr; }
          .ktc-split--inverse { grid-template-columns: 7fr 5fr; }
          .ktc-split--inverse .ktc-split__panel { order: 2; }
          .ktc-split--inverse .ktc-split__photo { order: 1; }
        }
        .ktc-split__panel {
          display: flex; align-items: center; color: #fff;
        }
        .ktc-split__panel--light { background: var(--greige-lt); }
        .ktc-split__panel--dark  { background: var(--greige-dk); color: var(--charcoal); }
        .ktc-split__panel--dark .ktc-split__title { color: var(--charcoal); }
        .ktc-split__panel--dark .ktc-split__body { color: var(--mid); }
        .ktc-split__panel--dark .ktc-split__list { color: var(--mid); }
        .ktc-split__panel--dark .ktc-split__label { color: rgba(0,0,0,0.45); }

        .ktc-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .ktc-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .ktc-split__inner { padding: 88px 80px; } }

        .ktc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .ktc-split__body {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.9); margin: 0;
        }
        .ktc-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.55); margin-top: 4px;
        }
        .ktc-split__list {
          margin: 2px 0 0; padding-left: 20px;
          font-size: 15px; line-height: 1.9; color: rgba(255,255,255,0.9);
        }
        .ktc-split__list li + li { margin-top: 4px; }

        .ktc-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .ktc-split__photo { min-height: unset; height: 100vh; }
        }
        .ktc-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── full screen image ── */
        .ktc-section--fullscreen { padding: 0; }
        .ktc-fullscreen { margin: 0; padding: 0; height: 100vh; overflow: hidden; }
        .ktc-fullscreen img { display: block; width: 100%; height: 100%; object-fit: cover; }

        /* ── FAQ ── */
        .ktc-section--faq {
          padding: 80px 0 72px; background: var(--greige-dk); color: #fff;
        }
        .ktc-section--faq .ktc-faq__heading { color: #fff; }
        .ktc-section--faq .ktc-faq__intro { color: rgba(255,255,255,0.9); }
        .ktc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          margin: 0 0 20px; line-height: 1.15;
        }
        .ktc-faq__intro {
          font-size: 17px; line-height: 1.8; margin: 0;
        }
        .ktc-link { color: #fff; text-decoration: underline; font-weight: 600; }
        .ktc-link:hover { color: var(--charcoal); }

        .ktc-faq__list { border-top: 1px solid rgba(255,255,255,0.25); margin-top: 40px; }
        .ktc-faq__item { border-bottom: 1px solid rgba(255,255,255,0.25); }
        .ktc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: #fff; text-align: left; transition: color .2s;
        }
        .ktc-faq__toggle:hover { color: var(--charcoal); }
        .ktc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: #fff;
        }
        .ktc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.9);
        }
        .ktc-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .ktc-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center;
          border-top: 1px solid rgba(0,0,0,0.06);
        }
        .ktc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .ktc-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .ktc-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .ktc-cta__btn:hover { background: #000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .ktc-hero         { height: 55vh; min-height: 360px; }
          .ktc-hero__overlay { padding-bottom: 40px; }
          .ktc-section--intro { padding: 52px 0 44px; }
          .ktc-section--faq   { padding: 52px 0 52px; }
          .ktc-cta-section    { padding: 64px 0 72px; }
          .ktc-split__inner   { padding: 48px 24px; }
          .ktc-fullscreen     { height: 50vh; }
        }
      `}</style>
    </motion.div>
  )
}
