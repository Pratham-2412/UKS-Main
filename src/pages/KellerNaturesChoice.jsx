import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-natures-choice assets folder
import UKS_NATURES_CHOICE_HERO from '../assets/uks-natures-choice/uks-natures-choice-hero.webp';
import UKS_NATURES_CHOICE_SPLIT from '../assets/uks-natures-choice/uks-natures-choice-split.webp';
import UKS_NATURES_CHOICE_WIDE from '../assets/uks-natures-choice/uks-natures-choice-wide.webp';
import UKS_NATURES_CHOICE_VIDEO_LANDSCAPE from '../assets/uks-natures-choice/uks-natures-choice-video-landscape.mp4';
import UKS_NATURES_CHOICE_VIDEO_PORTRAIT from '../assets/uks-natures-choice/uks-natures-choice-video-portrait.mp4';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "You can choose any desired melamine colour or decor from our range. For a more luxurious variant, choose a lacquer colour and/or a stained veneer."
  },
  {
    q: 'How do I maintain the materials in this kitchen?',
    a: 'These are melamine fronts, so these are easy to maintain and clean. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'What types of lighting can I choose?',
    a: 'Keller offers spotlights, LED strip lighting in glass cabinets & wall shelves, and glass shelf lighting. The spotlights and LED strip lighting in this kitchen can be controlled via an intelligent platform for LED lighting that combines sustainability, design and ease of use.'
  }
]

export default function KellerNaturesChoice() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knc-page"
    >
      {/* ── HERO ── */}
      <section className="knc-hero">
        <img src={UKS_NATURES_CHOICE_HERO} alt="Nature's Choice kitchen" className="knc-hero__img" loading="eager" />
        <div className="knc-hero__overlay">
          <div className="knc-container">
            <nav className="knc-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knc-breadcrumbs__current">Nature's Choice</span>
            </nav>
            <p className="knc-hero__subtitle">A kitchen full of character</p>
            <h1 className="knc-hero__title">Nature's Choice</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="knc-section knc-section--intro">
        <div className="knc-container knc-container--narrow">
          <h2 className="knc-intro__title">A kitchen full of character</h2>
          <p className="knc-intro__body">
            Enter this elegant industrial kitchen where various elements from nature can be found. The special interplay of lines of the okapi wood decor is combined with the colour cactus and ceramic in vibrant green. Note the special design of the back wall and the LED lighting that accentuates this particularly beautifully.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN VIDEO PLAYER ── */}
      <section className="knc-video-section">
        <div className="knc-video-container">
          <video className="knc-video knc-video--landscape" muted autoPlay loop playsInline>
            <source src={UKS_NATURES_CHOICE_VIDEO_LANDSCAPE} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="knc-video knc-video--portrait" muted autoPlay loop playsInline>
            <source src={UKS_NATURES_CHOICE_VIDEO_PORTRAIT} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right (Dark charcoal background `#18191b`) ── */}
      <section className="knc-split">
        <div className="knc-split__panel">
          <div className="knc-split__inner">
            <h2 className="knc-split__title">A mix of natural tones</h2>
            
            <p className="knc-split__label">In this kitchen:</p>
            <ul className="knc-split__list">
              <li>The new green: cactus - melamine front Bolton</li>
              <li>Special wood decor okapi - melamine front Bronx</li>
              <li>LED lighting, can be controlled via all large lighting and home automation apps</li>
            </ul>

            <p className="knc-split__label knc-mt">Eye catchers:</p>
            <ul className="knc-split__list">
              <li>Glass shelves combined with lighting behind the pillars</li>
              <li>Special lines in the island</li>
              <li>Tip-On cupboard on the end of the island</li>
              <li>LED strip lighting behind the pillars and up & down lights on the glass shelves</li>
            </ul>
          </div>
        </div>
        <div className="knc-split__photo">
          <img src={UKS_NATURES_CHOICE_SPLIT} alt="Okapi wood decor island side cabinets" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="knc-section knc-section--img-wide">
        <div className="knc-container knc-container--wide">
          <figure className="knc-figure">
            <img src={UKS_NATURES_CHOICE_WIDE} alt="Nature's Choice layout moodboard" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Sage-green background `#8ca198`, white text) ── */}
      <section className="knc-section knc-section--faq">
        <div className="knc-container knc-container--content">
          <h2 className="knc-faq__heading">Why not try this?</h2>
          <p className="knc-faq__intro">
            This kitchen is made of melamine. Would you like a more luxurious variant? Then choose veneer in lacquer or stain, and a lacquered front for the uni color. At Keller you can choose from 2,050 NCS lacquer colours.
          </p>
          <p className="knc-faq__intro knc-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="knc-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="knc-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knc-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knc-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knc-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knc-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White background, charcoal text ── */}
      <section className="knc-cta-section">
        <div className="knc-container knc-container--narrow knc-container--centered">
          <h2 className="knc-cta__title">Curious about our programme?</h2>
          <p className="knc-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="knc-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .knc-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #18191b;
          --faq-bg:     #8ca198;
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
        .knc-mt { margin-top: 16px; }

        /* ── containers ── */
        .knc-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .knc-container--narrow  { max-width: 780px; }
        .knc-container--content { max-width: 1080px; }
        .knc-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .knc-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .knc-container { padding: 0 20px; }
          .knc-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .knc-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .knc-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .knc-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .knc-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .knc-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .knc-breadcrumbs a:hover { color: #fff; }
        .knc-breadcrumbs__current { color: #fff; font-weight: 700; }

        .knc-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .knc-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .knc-section {
          padding: 80px 0;
        }
        .knc-section.no-pt { padding-top: 0; }
        
        .knc-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .knc-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── video section ── */
        .knc-video-section {
          position: relative; width: 100%; overflow: hidden; background: #000;
        }
        .knc-video-container {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
        }
        .knc-video {
          display: block; width: 100%; height: 100%; object-fit: cover;
        }
        .knc-video--portrait { display: none; }
        @media (max-width: 768px) {
          .knc-video-container { aspect-ratio: 9 / 16; }
          .knc-video--landscape { display: none; }
          .knc-video--portrait { display: block; }
        }

        /* ── split section ── */
        .knc-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .knc-split { grid-template-columns: 42fr 58fr; }
        }
        .knc-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .knc-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knc-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .knc-split__inner { padding: 72px 72px; } }

        .knc-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .knc-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .knc-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .knc-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .knc-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .knc-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .knc-split__list li + li { margin-top: 6px; }

        .knc-split__photo { overflow: hidden; }
        .knc-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .knc-split__photo { display: flex; align-items: stretch; }
          .knc-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .knc-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .knc-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .knc-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .knc-section--faq {
          padding: 80px 0 72px; background: var(--faq-bg); color: var(--text-white);
        }
        .knc-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .knc-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .knc-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .knc-link-faq:hover { color: rgba(255,255,255,0.7); }

        .knc-faq__list { border-top: 1px solid var(--border-white); margin-top: 40px; }
        .knc-faq__item { border-bottom: 1px solid var(--border-white); }
        .knc-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .knc-faq__toggle:hover { color: var(--text-muted); }
        .knc-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .knc-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .knc-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knc-cta-section {
          background: var(--light-bg); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
          border-top: 1px solid var(--border-dark);
        }
        .knc-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .knc-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .knc-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .knc-cta__btn:hover { background: #000000; color: var(--white); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knc-hero          { height: 55vh; min-height: 360px; }
          .knc-hero__overlay { padding-bottom: 40px; }
          .knc-section--intro { padding: 52px 0 44px; }
          .knc-section--faq   { padding: 52px 0 52px; }
          .knc-cta-section    { padding: 64px 0 72px; }
          .knc-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
