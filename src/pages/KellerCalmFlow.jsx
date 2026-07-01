import HERO_IMG from '../assets/uks-calm-flow/calm-flow-hero2.webp';
import SPLIT1_IMG from '../assets/uks-calm-flow/calm-flow-944-x-884-afbeelding-bij-tekst.webp';
import SPLIT2_IMG from '../assets/uks-calm-flow/calm-flow-944-x-884-afbeelding-bij-tekst2.webp';
import WIDE_IMG from '../assets/uks-calm-flow/calm-flow-hero.webp';
import STYLE_IMG from '../assets/uks-calm-flow/hoe-maak-ik-deze-stijl4.webp';
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

export default function KellerCalmFlow() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kcf-page"
    >
      {/* ── HERO ── */}
      <section className="kcf-hero">
        <img src={HERO_IMG} alt="Calm Flow kitchen" className="kcf-hero__img" loading="eager" />
        <div className="kcf-hero__overlay">
          <div className="kcf-container">
            <nav className="kcf-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kcf-breadcrumbs__current">Calm Flow</span>
            </nav>
            <p className="kcf-hero__subtitle">Soft &amp; minimal</p>
            <h1 className="kcf-hero__title">Calm Flow</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT — light greige bg, dark text ── */}
      <section className="kcf-section kcf-section--intro">
        <div className="kcf-container kcf-container--narrow">
          <h2 className="kcf-intro__title">A kitchen that breathes calmness</h2>
          <p className="kcf-intro__body">
            In a world full of stimuli, we long for tranquillity – especially in our interiors. Calm Flow has a
            fluid, organic look and invites you to slow down for a moment. This kitchen design connects seamlessly
            with the soft minimalism trend, where simplicity and softness take centre stage. Rounded end panels and
            gentle colours such as sesame, sand and sea salt create a calm, almost dreamlike atmosphere.
          </p>
          <p className="kcf-intro__body kcf-mt">
            This kitchen features the unique 75 cm cabinet programme, resulting in an exceptionally calm and balanced
            layout. By designing all cabinets in the same generous width, the kitchen gains a harmonious and gentle
            appearance that fits perfectly within the principles of soft minimalism.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Trend: rounded shapes — text left (brown frame) + photo right ── */}
      <section className="kcf-split">
        <div className="kcf-split__panel kcf-split__panel--brown">
          <div className="kcf-split__inner">
            <h2 className="kcf-split__title">Trend: rounded shapes</h2>
            <p className="kcf-split__body">
              This kitchen style follows the interior trend in which rounded shapes take centre stage. Soft lines,
              rounded corners and gentle contours create a spacious and calm atmosphere.
            </p>
          </div>
        </div>
        <div className="kcf-split__photo">
          <img src={SPLIT1_IMG} alt="Ithaca model in platinum oak" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2 INVERSE: Stylish sesame — photo left + text right (rose frame) ── */}
      <section className="kcf-split kcf-split--inverse">
        <div className="kcf-split__panel kcf-split__panel--rose">
          <div className="kcf-split__inner">
            <h2 className="kcf-split__title">Stylish sesame with platinum oak</h2>
            <p className="kcf-split__label">In this kitchen:</p>
            <ul className="kcf-split__list">
              <li>Cabinets with rounded corners (casing panels)</li>
              <li>Interior and exterior in the same colour: sesame</li>
              <li>Ithaca wood-look fronts with a tactile wood grain in platinum oak</li>
              <li>Unique 75 cm cabinet programme</li>
            </ul>
          </div>
        </div>
        <div className="kcf-split__photo">
          <img src={SPLIT2_IMG} alt="Calm Flow sesame kitchen" loading="lazy" />
        </div>
      </section>

      {/* ── FULL-SCREEN LANDSCAPE IMAGE ── */}
      <section className="kcf-section kcf-section--fullscreen">
        <figure className="kcf-fullscreen">
          <img src={WIDE_IMG} alt="Calm Flow kitchen wide view" loading="lazy" />
        </figure>
      </section>

      {/* ── SPLIT 3 INVERSE: How to create this style — photo left + text right (brown frame) ── */}
      <section className="kcf-split kcf-split--inverse">
        <div className="kcf-split__panel kcf-split__panel--brown">
          <div className="kcf-split__inner">
            <h2 className="kcf-split__title">How do you create this style with the Keller range?</h2>
            <p className="kcf-split__body">
              You can create the <strong>Soft Minimalism</strong> style with the Keller range by choosing rounded forms
              and flowing transitions in your kitchen design. Combine powdery tones such as Sand, Sesame or Sea Salt in
              tone-on-tone layers for a soft, harmonious look.
            </p>
            <p className="kcf-split__body kcf-mt">
              Opt for matt fronts and calm surfaces that gently reflect daylight. With natural materials and a serene
              layout, a dreamy, composed atmosphere emerges — a kitchen as a place of calm within the home, where you
              can truly unwind.
            </p>
          </div>
        </div>
        <div className="kcf-split__photo">
          <img src={STYLE_IMG} alt="How to create Calm Flow style" loading="lazy" />
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ — greige bg, dark text ── */}
      <section className="kcf-section kcf-section--faq">
        <div className="kcf-container kcf-container--content">
          <h2 className="kcf-faq__heading">Why not try this?</h2>
          <p className="kcf-faq__intro">
            You can reduce costs by choosing melamine instead of lacquer, and a laminate worktop.
          </p>
          <p className="kcf-faq__intro kcf-mt">
            The kitchen designs shown on this website and in our kitchen brochure are intended as inspiration. Each
            kitchen can be adapted to your wishes in terms of layout, model, colour, handle (rail) or handleless
            design, as well as many other options. Would you like to explore the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kcf-link">Keller dealers</Link>. They will be happy to create a design in
            this style that suits your home and budget.
          </p>

          <dl className="kcf-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kcf-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kcf-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kcf-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kcf-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — warm brown bg ── */}
      <section className="kcf-cta-section">
        <div className="kcf-container kcf-container--narrow kcf-container--centered">
          <h2 className="kcf-cta__title">Curious to find out more?</h2>
          <p className="kcf-cta__body">Would you like to see the materials of this kitchen in real life?</p>
          <Link to="/contact" className="kcf-cta__btn">Find a dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kcf-page {
          --white:    #ffffff;
          --greige:   #e7e6e2;
          --brown:    #9e8d7d;
          --rose:     #c1aea8;
          --charcoal: #1d1d1f;
          --mid:      #5a5452;
          --border:   #ccc;
          --ff-serif: var(--font-serif, Georgia, serif);
          --ff-sans:  var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kcf-mt { margin-top: 16px; }

        /* ── containers ── */
        .kcf-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kcf-container--narrow  { max-width: 780px; }
        .kcf-container--content { max-width: 1080px; }
        .kcf-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) { .kcf-container { padding: 0 20px; } }

        /* ── hero ── */
        .kcf-hero {
          position: relative; height: 100vh; overflow: hidden; background: #ccc;
        }
        .kcf-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.88;
        }
        .kcf-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs on hero */
        .kcf-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kcf-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kcf-breadcrumbs a:hover { color: #fff; }
        .kcf-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kcf-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kcf-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro — greige bg, dark text ── */
        .kcf-section--intro {
          padding: 80px 0 72px; text-align: center;
          background: var(--greige);
        }
        .kcf-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
        }
        .kcf-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split sections ── */
        .kcf-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kcf-split { grid-template-columns: 5fr 7fr; }
          .kcf-split--inverse { grid-template-columns: 7fr 5fr; }
          .kcf-split--inverse .kcf-split__panel { order: 2; }
          .kcf-split--inverse .kcf-split__photo { order: 1; }
        }
        .kcf-split__panel {
          display: flex; align-items: center; color: #fff;
        }
        .kcf-split__panel--brown { background: var(--brown); }
        .kcf-split__panel--rose  { background: var(--rose); }

        .kcf-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kcf-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kcf-split__inner { padding: 88px 80px; } }

        .kcf-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .kcf-split__body {
          font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.9); margin: 0;
        }
        .kcf-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.55); margin-top: 4px;
        }
        .kcf-split__list {
          margin: 2px 0 0; padding-left: 20px;
          font-size: 15px; line-height: 1.9; color: rgba(255,255,255,0.9);
        }
        .kcf-split__list li + li { margin-top: 4px; }

        .kcf-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kcf-split__photo { min-height: unset; height: 100vh; }
        }
        .kcf-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── full screen image ── */
        .kcf-section--fullscreen { padding: 0; }
        .kcf-fullscreen { margin: 0; padding: 0; height: 100vh; overflow: hidden; }
        .kcf-fullscreen img { display: block; width: 100%; height: 100%; object-fit: cover; }

        /* ── FAQ section — greige bg, dark text ── */
        .kcf-section--faq {
          padding: 80px 0 72px; background: var(--greige);
        }
        .kcf-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kcf-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }
        .kcf-link { color: var(--brown); text-decoration: underline; }
        .kcf-link:hover { color: var(--charcoal); }

        /* FAQ accordion */
        .kcf-faq__list { border-top: 1px solid var(--border); margin-top: 40px; }
        .kcf-faq__item { border-bottom: 1px solid var(--border); }
        .kcf-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kcf-faq__toggle:hover { color: var(--brown); }
        .kcf-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--brown);
        }
        .kcf-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid);
        }
        .kcf-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kcf-cta-section {
          background: var(--brown); padding: 96px 0 112px;
        }
        .kcf-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: #fff; margin: 0 0 18px; line-height: 1.1;
        }
        .kcf-cta__body {
          font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.85); margin: 0 0 40px;
        }
        .kcf-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kcf-cta__btn:hover { background: #000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kcf-hero         { height: 55vh; min-height: 360px; }
          .kcf-hero__overlay { padding-bottom: 40px; }
          .kcf-section--intro { padding: 52px 0 44px; }
          .kcf-section--faq   { padding: 52px 0 52px; }
          .kcf-cta-section    { padding: 64px 0 72px; }
          .kcf-split__inner   { padding: 48px 24px; }
          .kcf-fullscreen     { height: 50vh; }
        }
      `}</style>
    </motion.div>
  )
}
