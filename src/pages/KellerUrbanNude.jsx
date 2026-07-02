import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-urban-nude assets folder
import UKS_URBAN_NUDE_HERO from '../assets/uks-urban-nude/uks-urban-nude-hero.webp';
import UKS_URBAN_NUDE_SPLIT from '../assets/uks-urban-nude/uks-urban-nude-split.webp';
import UKS_URBAN_NUDE_WIDE from '../assets/uks-urban-nude/uks-urban-nude-wide.webp';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "This kitchen consists of a uni color melamine and a wood decor melamine. You can choose any desired melamine colour or decor from our range. For a more luxurious variant, choose a lacquer colour and/or a stained veneer."
  },
  {
    q: 'How do I maintain glass units',
    a: 'The glass can be cleaned with mild detergents and normal glass cleaners. Do not use chemicals or strong corrosive agents. Dry with a soft cloth or chamois for a streak-free result.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerUrbanNude() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kun-page"
    >
      {/* ── HERO ── */}
      <section className="kun-hero">
        <img src={UKS_URBAN_NUDE_HERO} alt="Urban Nude kitchen" className="kun-hero__img" loading="eager" />
        <div className="kun-hero__overlay">
          <div className="kun-container">
            <nav className="kun-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kun-breadcrumbs__current">Urban Nude</span>
            </nav>
            <p className="kun-hero__subtitle">Industrial with nude shades</p>
            <h1 className="kun-hero__title">Urban Nude</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kun-section kun-section--intro">
        <div className="kun-container kun-container--narrow">
          <h2 className="kun-intro__title">According to the latest trends</h2>
          <p className="kun-intro__body">
            Dark tones usually predominate in industrial kitchens, but in the Keller Urban Nude we dare do to it differently.
          </p>
          <p className="kun-intro__body kun-mt">
            We prove that an industrial look can also be created with nude shades. For the Urban Nude we chose the colour sea salt, a shade from the trendy greige palette. The combination with the robust composite and the glass units with fluted glass give the kitchen a sturdy ánd stylish look.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN / WIDE HERO IMAGE ── */}
      <section className="kun-fullscreen">
        <img src={UKS_URBAN_NUDE_HERO} alt="Urban Nude kitchen perspective view" loading="lazy" />
      </section>

      {/* ── SPLIT: Text panel left + photo right (Bronze/brown background `#877561`) ── */}
      <section className="kun-split">
        <div className="kun-split__panel">
          <div className="kun-split__inner">
            <h2 className="kun-split__title">Fluted glass; cool & sturdy</h2>
            <p className="kun-split__body">
              The wine cooler is built into the back wall of composite and is framed by trendy, sturdy glass cabinets made of fluted glass. Led strips have been applied to the inside of the glass units; you can adjust the brightness and colour temperature as you wish.
            </p>
            
            <p className="kun-split__label">In this kitchen:</p>
            <ul className="kun-split__list">
              <li>Nude tone ‘sea salt’</li>
              <li>Tall glass units</li>
              <li>New trend decor coffee oak</li>
            </ul>

            <p className="kun-split__label">The materials:</p>
            <ul className="kun-split__list">
              <li>Melamine front Bronx in coffee oak</li>
              <li>Melamine front Elba in sea salt</li>
              <li>Glass units with matt black alu frame and knob, in fluted glass</li>
            </ul>
          </div>
        </div>
        <div className="kun-split__photo">
          <img src={UKS_URBAN_NUDE_SPLIT} alt="Tall glass units and coffee oak detailing" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kun-section kun-section--img-wide">
        <div className="kun-container kun-container--wide">
          <figure className="kun-figure">
            <img src={UKS_URBAN_NUDE_WIDE} alt="Urban Nude kitchen layout detail" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="kun-section kun-section--faq">
        <div className="kun-container kun-container--content">
          <h2 className="kun-faq__heading">Why not try this?</h2>
          <p className="kun-faq__intro">
            You can choose from various (new) wood decors in ash tones, or a different cool trend decor such as stainless steel, black metal or (light) concrete.
          </p>
          <p className="kun-faq__intro kun-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kun-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kun-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kun-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kun-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kun-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kun-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Sand/greige/taupe bg, dark text ── */}
      <section className="kun-cta-section">
        <div className="kun-container kun-container--narrow kbe-container--centered">
          <h2 className="kun-cta__title">Curious about our programme?</h2>
          <p className="kun-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kun-cta__btn">Find a dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kun-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #877561;
          --cta-bg:     #e3dad5;
          --charcoal:   #1d1d1f;
          --mid-grey:   #424245;
          --text-white: #ffffff;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-dark: rgba(0, 0, 0, 0.12);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--light-bg);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kun-mt { margin-top: 16px; }

        /* ── containers ── */
        .kun-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kun-container--narrow  { max-width: 780px; }
        .kun-container--content { max-width: 1080px; }
        .kun-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kun-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kun-container { padding: 0 20px; }
          .kun-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kun-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kun-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kun-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kun-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kun-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kun-breadcrumbs a:hover { color: #fff; }
        .kun-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kun-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kun-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kun-section {
          padding: 80px 0;
        }
        .kun-section.no-pt { padding-top: 0; }
        
        .kun-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kun-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── full screen image ── */
        .kun-fullscreen { background: var(--light-bg); line-height: 0; }
        .kun-fullscreen img { display: block; width: 100%; height: auto; }

        /* ── split section ── */
        .kun-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kun-split { grid-template-columns: 42fr 58fr; }
        }
        .kun-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .kun-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kun-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kun-split__inner { padding: 72px 72px; } }

        .kun-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kun-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kun-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kun-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kun-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kun-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kun-split__list li + li { margin-top: 6px; }

        .kun-split__photo { overflow: hidden; }
        .kun-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kun-split__photo { display: flex; align-items: stretch; }
          .kun-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kun-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kun-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kun-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kun-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .kun-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kun-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kun-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kun-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kun-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kun-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kun-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kun-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kun-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kun-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kun-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kun-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--charcoal);
        }
        .kun-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 18px; line-height: 1.1;
        }
        .kun-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid-grey); margin: 0 0 40px;
        }
        .kun-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kun-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kun-hero          { height: 55vh; min-height: 360px; }
          .kun-hero__overlay { padding-bottom: 40px; }
          .kun-section--intro { padding: 52px 0 44px; }
          .kun-section--faq   { padding: 52px 0 52px; }
          .kun-cta-section    { padding: 64px 0 72px; }
          .kun-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
