import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

// Images
const HERO_IMG      = `${BASE}/yH3w4sWc/uploads/media/68f2391d37f1b/suite-life-hero.webp?originalExtension=jpg`
const SPLIT1_IMG    = `${BASE}/cCnDgvxl/uploads/media/68f6009e6a17c/suit-life-afbeelding-bij-tekst.webp?originalExtension=jpg`
const SPLIT2_IMG    = `${BASE}/ShkBtQ1o/uploads/media/68f614a359257/suit-life-afbeelding-bij-tekst2.webp?originalExtension=jpg`
const WIDE_BG_IMG   = `${BASE}/yH3w4sWc/uploads/media/68f2391d37f1b/suite-life-hero.webp?originalExtension=jpg`
const SPLIT3_IMG    = `${BASE}/GfJw9DnX/uploads/media/691486115948e/hoe-maak-ik-deze-stijl5.webp?originalExtension=jpg`

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose for this kitchen?',
    a: 'In our programme overview, you will find all available colours, models and finishes.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. Some substances cannot be completely removed if they are not cleaned immediately. Use a mild kitchen or all-purpose cleaner diluted in water and a soft cloth. After cleaning, dry the doors straight away with a soft cloth to prevent water from penetrating the joints, which could cause swelling.'
  }
]

export default function KellerSuiteLife() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="ksl-page"
    >
      {/* ── HERO ── */}
      <section className="ksl-hero">
        <img src={HERO_IMG} alt="Suite Life kitchen" className="ksl-hero__img" loading="eager" />
        <div className="ksl-hero__overlay">
          <div className="ksl-container">
            <nav className="ksl-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="ksl-breadcrumbs__current">Suite Life</span>
            </nav>
            <p className="ksl-hero__subtitle">New hotel chic</p>
            <h1 className="ksl-hero__title">Suite Life</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="ksl-section ksl-section--intro">
        <div className="ksl-container ksl-container--narrow">
          <h2 className="ksl-intro__title">The exclusive atmosphere of a refined hotel suite</h2>
          <p className="ksl-intro__body">
            New Hotel Chic brings the exclusive atmosphere of a luxury hotel into your kitchen. This kitchen style is all about premium materials, clean lines and a refined finish that evokes the feel of a sophisticated suite in a top-tier hotel. With The Suite Life, you choose a design that exudes luxury without being excessive. Think rich tones like oyster grey and deep black, chrome accents, and statement lighting that create a high-end, elegant look.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Text panel left + 100vh photo right (Oyster Grey) ── */}
      <section className="ksl-split">
        <div className="ksl-split__panel ksl-split__panel--taupe">
          <div className="ksl-split__inner">
            <h2 className="ksl-split__title text-white">Oyster grey</h2>
            <p className="ksl-split__body text-white-85">
              Oyster grey (Elba model) is an elegant mid-grey shade with a soft, neutral character. The colour pairs effortlessly with both warm wood tones and cooler materials.
            </p>
            <p className="ksl-split__body text-white-85">
              In this kitchen, it is combined with stainless steel (Bolton model) and deep black oak (Bronx model), and finished with handle 753.
            </p>
          </div>
        </div>
        <div className="ksl-split__photo">
          <img src={SPLIT1_IMG} alt="Oyster grey kitchen detail" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 2: 100vh photo left + Text panel right (New hotel chic) ── */}
      <section className="ksl-split ksl-split--reverse">
        <div className="ksl-split__photo">
          <img src={SPLIT2_IMG} alt="New hotel chic features" loading="lazy" />
        </div>
        <div className="ksl-split__panel ksl-split__panel--white">
          <div className="ksl-split__inner">
            <h2 className="ksl-split__title text-charcoal">New hotel chic</h2>
            <ul className="ksl-split__list text-charcoal">
              <li>Luxurious materials such as velvet, marble and dark wood, creating a rich, refined look</li>
              <li>A colour palette ranging from white and cream to grey and black, with accents in chrome and stainless steel</li>
              <li>Statement lighting: expressive pendant lights or wall fittings that add atmosphere and a sense of grandeur</li>
              <li>Symmetry and clean lines, creating a calm, stylish layout with the character of a high-end hotel interior</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FULL SCREEN BACKGROUND HERO IMAGE SECTION ── */}
      <section className="ksl-bg-section">
        <div className="ksl-bg-wrap">
          <img src={WIDE_BG_IMG} alt="Suite Life space overview" className="ksl-bg-img" loading="lazy" />
        </div>
      </section>

      {/* ── SPLIT 3: Text panel left + 100vh photo right (How to create style) ── */}
      <section className="ksl-split">
        <div className="ksl-split__panel ksl-split__panel--taupe">
          <div className="ksl-split__inner">
            <h2 className="ksl-split__title text-white">How do you create this style with the Keller range?</h2>
            <p className="ksl-split__body text-white-85">
              You can create the New Hotel Chic style with the Keller range by choosing rich colours such as Carbon, Fossil Grey or Oyster Grey, combined with dark wood-effect fronts and accents in chrome or stainless steel.
            </p>
            <p className="ksl-split__body text-white-85">
              Marble-look worktops and handleless fronts contribute to a clean, refined appearance. Statement lighting and symmetrical layouts enhance the sense of hotel allure, while the high-quality finish and attention to detail convey quiet confidence. With Keller, you bring the refinement of a boutique hotel into the kitchen.
            </p>
          </div>
        </div>
        <div className="ksl-split__photo">
          <img src={SPLIT3_IMG} alt="Creating the hotel chic style" loading="lazy" />
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (light sandy grey bg) ── */}
      <section className="ksl-section ksl-section--faq">
        <div className="ksl-container ksl-container--content">
          <h2 className="ksl-faq__heading">Why not try this?</h2>
          <p className="ksl-faq__intro">
            Opting for a handleless design gives your kitchen an even sleeker look. Choose TIP-On push-to-open systems or a handle trim in the colour of your choice.
          </p>
          <p className="ksl-faq__intro u-mt-3">
            The kitchen designs shown on this website and in our kitchen brochure are intended as inspiration and can be adapted in terms of layout, model, colour, handle (rail) or handleless design, along with many other options. Would you like to know more about the possibilities? Visit one of our Keller dealers. They will be happy to create a design in this style that suits your home and budget.
          </p>

          <dl className="ksl-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="ksl-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="ksl-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="ksl-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="ksl-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — dark charcoal/black bg ── */}
      <section className="ksl-cta-section">
        <div className="ksl-container ksl-container--narrow ksl-container--centered">
          <h2 className="ksl-cta__title text-white">Curious to find out more?</h2>
          <p className="ksl-cta__body text-white-85">Would you like to see the materials of this kitchen in real life?</p>
          <Link to="/contact" className="ksl-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .ksl-page {
          --white:      #ffffff;
          --taupe:      #978f93;
          --sand-grey:  #d9d4d0;
          --charcoal:   #1d1d1f;
          --dark-bg:    #2b2b2b;
          --mid:        #424245;
          --border:     rgba(0, 0, 0, 0.15);
          --border-light: rgba(255, 255, 255, 0.25);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        .u-mt-3 { margin-top: 12px; }
        .text-white { color: #fff !important; }
        .text-charcoal { color: var(--charcoal) !important; }
        .text-white-85 { color: rgba(255, 255, 255, 0.85) !important; }

        /* ── containers ── */
        .ksl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .ksl-container--narrow   { max-width: 780px; }
        .ksl-container--content  { max-width: 1080px; }
        .ksl-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .ksl-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .ksl-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .ksl-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .ksl-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.15) 50%,
            transparent 100%
          );
          display: flex; align-items: flex-end;
          padding-bottom: 64px;
        }
        .ksl-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .ksl-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .ksl-breadcrumbs a:hover { color: #f5f5f7; }
        .ksl-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .ksl-hero__subtitle {
          font-family: var(--ff-serif);
          font-size: 18px; font-style: italic;
          color: rgba(255,255,255,0.85); margin: 0 0 8px;
        }
        .ksl-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .ksl-section--intro {
          padding: 72px 0 68px;
        }
        .ksl-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .ksl-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .ksl-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .ksl-split {
            grid-template-columns: 5fr 7fr;
          }
          .ksl-split--reverse {
            grid-template-columns: 7fr 5fr;
          }
        }
        .ksl-split__panel {
          display: flex; align-items: center;
        }
        .ksl-split__panel--taupe { background: var(--taupe); }
        .ksl-split__panel--white { background: var(--white); border: 1px solid var(--border); }
        
        .ksl-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .ksl-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .ksl-split__inner { padding: 88px 80px; } }

        .ksl-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; margin: 0; line-height: 1.2;
        }
        .ksl-split__body {
          font-size: 15px; line-height: 1.75; margin: 0;
        }
        .ksl-split__list {
          margin: 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
        }
        .ksl-split__list li + li { margin-top: 6px; }

        /* split photo 100vh on widescreen */
        .ksl-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .ksl-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .ksl-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── background section ── */
        .ksl-bg-section {
          width: 100%;
          background: #000;
          overflow: hidden;
          margin-bottom: 64px;
        }
        .ksl-bg-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
        }
        .ksl-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── FAQ (sand grey bg) ── */
        .ksl-section--faq {
          background: var(--sand-grey);
          color: var(--charcoal);
          padding: 80px 0 96px;
        }
        .ksl-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300;
          margin: 0 0 24px;
        }
        .ksl-faq__intro {
          font-size: 16px; line-height: 1.8;
          color: var(--mid); margin: 0;
        }
        .ksl-faq__list {
          margin-top: 48px;
          border-top: 1px solid var(--border);
        }
        .ksl-faq__item {
          border-bottom: 1px solid var(--border);
        }
        .ksl-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left;
        }
        .ksl-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .ksl-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8;
          color: var(--mid);
        }
        .ksl-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .ksl-cta-section {
          background: var(--dark-bg);
          padding: 96px 0 112px;
        }
        .ksl-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300;
          margin: 0 0 18px; line-height: 1.1;
        }
        .ksl-cta__body {
          font-size: 17px; line-height: 1.7; margin: 0 0 40px;
        }
        .ksl-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--white); color: var(--charcoal);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .ksl-cta__btn:hover { background: var(--taupe); color: #fff; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .ksl-hero          { height: 55vh; min-height: 360px; }
          .ksl-hero__overlay { padding-bottom: 40px; }
          .ksl-intro         { padding: 48px 0 40px; }
          .ksl-section--faq  { padding: 56px 0 64px; }
          .ksl-cta-section   { padding: 64px 0 72px; }
          .ksl-split__inner  { padding: 48px 24px; }
          .ksl-bg-wrap       { aspect-ratio: 4/3; }
        }
      `}</style>
    </motion.div>
  )
}
