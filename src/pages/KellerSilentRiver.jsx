import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import HERO   from '../assets/uks-silent-river/uks-silent-river-hero.webp'
import SPLIT1 from '../assets/uks-silent-river/uks-silent-river-split1.webp'
import SPLIT2 from '../assets/uks-silent-river/uks-silent-river-split2.webp'
import WIDE   from '../assets/uks-silent-river/uks-silent-river-wide.webp'
import SPLIT3 from '../assets/uks-silent-river/uks-silent-river-split3.webp'

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose for this kitchen?',
    a: 'Prefer a different colour? You can choose from nine stain colours or 2,050 lacquer colours in matt, silk gloss or textured finishes.'
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. Some substances cannot no longer be fully removed if they are not cleaned immediately. For cleaning, use a mild kitchen or all-purpose cleaner diluted in water and a soft, lint-free cloth or a soft brush. Wipe in the direction of the wood grain to remove dirt from the pores. After cleaning, dry the doors straight away with a soft cloth to prevent water from penetrating the joints, which could cause swelling.'
  }
]

export default function KellerSilentRiver() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="ksr-page"
    >
      {/* ── HERO ── full-screen warm taupe bg */}
      <section className="ksr-hero">
        <img src={HERO} alt="Silent River kitchen" className="ksr-hero__img" loading="eager" />
        <div className="ksr-hero__overlay">
          <div className="ksr-container">
            <nav className="ksr-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/country-kitchens">Country Style Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="ksr-breadcrumbs__current">Silent River</span>
            </nav>
            <p className="ksr-hero__subtitle">Organische sereniteit</p>
            <h1 className="ksr-hero__title">Silent River</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT – taupe bg ── */}
      <section className="ksr-section ksr-section--taupe">
        <div className="ksr-container ksr-container--narrow">
          <h2 className="ksr-title">The evolution of Japandi</h2>
          <p className="ksr-body">
            In a time when calm and balance are becoming ever more important, this trend brings a sense of ease into the home.
          </p>
          <p className="ksr-body ksr-mt">
            Soft, rounded forms and natural lines give furniture and layouts a flowing quality, as if everything naturally falls into place. The colours are drawn directly from nature: clay, sea salt, sesame, sand and riverstone create an earthy foundation.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1 – inverse: text left (darker frame #797365), photo right – taupe outer bg ── */}
      <section className="ksr-split ksr-split--taupe">
        <div className="ksr-split__panel ksr-split__panel--dark">
          <div className="ksr-split__inner">
            <h2 className="ksr-split__title">Trend colour: Riverstone</h2>
            <p className="ksr-split__body">
              Riverstone is a refined, calm melamine with a beige stone look. It pairs beautifully with earthy colours such as clay, sea salt, sesame and sand.
            </p>
          </div>
        </div>
        <div className="ksr-split__photo">
          <img src={SPLIT1} alt="Riverstone trend colour" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2 – photo LEFT, text right ── */}
      <section className="ksr-split ksr-split--dark ksr-split--reverse">
        <div className="ksr-split__photo">
          <img src={SPLIT2} alt="Silent River kitchen innovations" loading="lazy" />
        </div>
        <div className="ksr-split__panel ksr-split__panel--light">
          <div className="ksr-split__inner">
            <h2 className="ksr-split__title">Kitchen innovations</h2>
            <ul className="ksr-list">
              <li><em>Bronx</em> in Riverstone</li>
              <li>Cabinets stacked to a height of 2470 mm</li>
              <li>Cabinet interiors in Sesame</li>
              <li>New veneer (Natural Oak stain)</li>
              <li>Handle 771</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FULL-SCREEN WIDE IMAGE ── */}
      <section className="ksr-fullscreen">
        <img src={WIDE} alt="Silent River full kitchen view" loading="lazy" />
      </section>

      {/* ── SPLIT 3 – inverse: text left (darker frame #797365), photo right – taupe outer bg ── */}
      <section className="ksr-split ksr-split--taupe">
        <div className="ksr-split__panel ksr-split__panel--dark">
          <div className="ksr-split__inner">
            <h2 className="ksr-split__title">How do you create this style with the Keller range?</h2>
            <p className="ksr-split__body">
              You can create the <strong>Organic Serenity</strong> style by choosing soft, natural shades from the Keller colour programme, such as Clay, Sea Salt, Sesame, Sand and Riverstone. Combine these with wood-effect fronts like Natural Oak or Silver Oak for a warm, calm look. Opt for matt finishes, natural stone–look worktops and subtle rounded forms in the styling. Add lighting and open shelving to let the space breathe. This way, you bring a sense of calm, balance and connection with nature into the kitchen.
            </p>
          </div>
        </div>
        <div className="ksr-split__photo">
          <img src={SPLIT3} alt="Creating Organic Serenity style" loading="lazy" />
        </div>
      </section>

      {/* ── FAQ – darker taupe #797365 bg ── */}
      <section className="ksr-section ksr-section--dark">
        <div className="ksr-container ksr-container--content">
          <h2 className="ksr-title">This is another way to do it</h2>
          <p className="ksr-body">
            By choosing a melamine front and a laminate worktop instead of composite, the overall price becomes more approachable.
          </p>
          <p className="ksr-body ksr-mt">
            The kitchen designs shown on this website and in our kitchen brochure are intended as inspiration. Each kitchen can be adapted to your wishes in terms of layout, model, colour, handle (rail) or handleless design, along with many other options. Would you like to know more about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="ksr-link">Keller dealers</Link>. They will be happy to create a design in this style that suits your home and budget.
          </p>

          <dl className="ksr-faq">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="ksr-faq__item">
                <dt>
                  <button
                    className="ksr-faq__toggle"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.q}</span>
                    <span className="ksr-faq__icon">{openFaq === i ? '−' : '+'}</span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="ksr-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ksr-cta">
        <div className="ksr-container ksr-container--narrow ksr-container--centered">
          <h2 className="ksr-cta__title">Curious about our programme?</h2>
          <p className="ksr-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="ksr-cta__btn">Find your dealer</Link>
        </div>
      </section>

      <style>{`
        /* ── Variables ── */
        .ksr-page {
          --taupe:      #aaa28f;
          --dark-taupe: #797365;
          --white:      #ffffff;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --tw:         rgba(255,255,255,0.88);  /* text-white */
          --tm:         rgba(255,255,255,0.70);  /* text-muted */
          --border:     rgba(255,255,255,0.18);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--taupe);
          color: var(--white);
          font-family: var(--ff-sans);
          overflow-x: hidden;
        }
        .ksr-mt { margin-top: 16px; }

        /* ── Containers ── */
        .ksr-container          { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .ksr-container--narrow  { max-width: 800px; }
        .ksr-container--content { max-width: 1080px; }
        .ksr-container--centered { display: flex; flex-direction: column; align-items: center; text-align: center; }
        @media (max-width: 768px) { .ksr-container { padding: 0 20px; } }

        /* ── Hero ── */
        .ksr-hero { position: relative; height: 100vh; overflow: hidden; }
        .ksr-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; object-position: center;
        }
        .ksr-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 55%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 72px;
        }
        .ksr-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.2vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.85); margin: 0 0 10px;
        }
        .ksr-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(44px, 6.5vw, 88px); font-weight: 300;
          line-height: 1.02; color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── Breadcrumb bar ── */
        .ksr-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 6px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 14px;
        }
        .ksr-breadcrumbs a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color .2s; }
        .ksr-breadcrumbs a:hover { color: #fff; }
        .ksr-breadcrumbs span { color: rgba(255,255,255,0.4); }
        .ksr-breadcrumbs__current { color: #fff; font-weight: 700; }

        /* ── Generic sections ── */
        .ksr-section         { padding: 72px 0; }
        .ksr-section--taupe  { background: var(--taupe); }
        .ksr-section--dark   { background: var(--dark-taupe); }

        .ksr-title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3vw, 42px); font-weight: 300;
          line-height: 1.15; margin: 0 0 24px; color: var(--white);
        }
        .ksr-body {
          font-size: 17px; line-height: 1.8; color: var(--tm); margin: 0;
        }
        .ksr-link { color: #fff; text-decoration: underline; font-weight: 600; }
        .ksr-link:hover { color: var(--tm); }

        /* ── Split sections ── */
        .ksr-split         { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 860px) {
          /* live site: text ~42%, photo ~58% — matching the c-pagepart__container layout */
          .ksr-split { grid-template-columns: 42fr 58fr; }
          /* Reversed: photo left 58%, text right 42% */
          .ksr-split--reverse { grid-template-columns: 58fr 42fr; }
        }
        .ksr-split--taupe  { background: var(--taupe); }
        .ksr-split--dark   { background: var(--dark-taupe); }

        .ksr-split__panel {
          display: flex; align-items: center;
        }
        /* The panel background is the opposite of the outer section – matching the "frame" */
        .ksr-split__panel--dark  { background: var(--dark-taupe); }
        .ksr-split__panel--light { background: var(--taupe); }

        .ksr-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 20px;
        }
        @media (min-width: 860px)  { .ksr-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .ksr-split__inner { padding: 72px 72px; } }

        .ksr-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px); font-weight: 300;
          color: var(--white); margin: 0; line-height: 1.25;
        }
        .ksr-split__body {
          font-size: 15px; line-height: 1.8; color: var(--tm); margin: 0;
        }
        .ksr-split__body strong { color: var(--white); }

        .ksr-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
          font-size: 15px; line-height: 1.7; color: var(--tw);
        }
        .ksr-list li { padding-left: 20px; position: relative; }
        .ksr-list li::before { content: '—'; position: absolute; left: 0; color: var(--tm); }
        .ksr-list em { font-style: italic; font-weight: 600; color: var(--white); }

        /* Photo panel: size driven by the image's natural aspect ratio (960×900 ≈ square) */
        .ksr-split__photo { overflow: hidden; }
        /* On mobile show the image at natural size */
        .ksr-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        /* On desktop, stretch photo to fill the full panel height */
        @media (min-width: 860px) {
          .ksr-split__photo { display: flex; align-items: stretch; }
          .ksr-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── Full-screen image (1920×1090) — show at natural width, no height cap ── */
        .ksr-fullscreen { background: var(--taupe); line-height: 0; }
        .ksr-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .ksr-faq { border-top: 1px solid var(--border); margin-top: 48px; }
        .ksr-faq__item { border-bottom: 1px solid var(--border); }
        .ksr-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          padding: 22px 0; text-align: left;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--white); transition: color .2s;
        }
        .ksr-faq__toggle:hover { color: var(--tm); }
        .ksr-faq__icon { flex-shrink: 0; font-size: 22px; font-weight: 300; }
        .ksr-faq__answer { margin: 0; padding: 0 0 22px; font-size: 15px; line-height: 1.8; color: var(--tm); }
        .ksr-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .ksr-cta { background: var(--white); padding: 96px 0 112px; color: var(--charcoal); }
        .ksr-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 50px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .ksr-cta__body { font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px; }
        .ksr-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .ksr-cta__btn:hover { background: #000; transform: translateY(-2px); }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .ksr-hero { height: 60vh; min-height: 380px; }
          .ksr-hero__overlay { padding-bottom: 40px; }
          .ksr-section { padding: 52px 0; }
          .ksr-split__inner { padding: 48px 24px; }
          .ksr-cta { padding: 64px 0 72px; }
        }
      `}</style>
    </motion.div>
  )
}
