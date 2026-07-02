import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-dark-rituals assets folder
import UKS_DARK_RITUALS_HERO from '../assets/uks-dark-rituals/uks-dark-rituals-hero.webp';
import UKS_DARK_RITUALS_SPLIT from '../assets/uks-dark-rituals/uks-dark-rituals-split.webp';
import UKS_DARK_RITUALS_WIDE from '../assets/uks-dark-rituals/uks-dark-rituals-wide.webp';
import UKS_DARK_RITUALS_VIDEO_LANDSCAPE from '../assets/uks-dark-rituals/uks-dark-rituals-video-landscape.mp4';
import UKS_DARK_RITUALS_VIDEO_PORTRAIT from '../assets/uks-dark-rituals/uks-dark-rituals-video-portrait.mp4';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: "The veneer can be finished in nine stain colours or one of the 2,050 lacquer colours. As an accent front you can choose a melamine front from the trend collection."
  },
  {
    q: 'How do I maintain veneer?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth or brush for cleaning. Swipe in the direction of the wood grain to remove dirt particles from the pores. Wipe the cleaned doors immediately afterwards with a soft cloth for a streak-free result and to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerDarkRituals() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kdr-page"
    >
      {/* ── HERO ── */}
      <section className="kdr-hero">
        <img src={UKS_DARK_RITUALS_HERO} alt="Dark Rituals kitchen" className="kdr-hero__img" loading="eager" />
        <div className="kdr-hero__overlay">
          <div className="kdr-container">
            <nav className="kdr-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/industrial-kitchens">Industrial Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kdr-breadcrumbs__current">Dark Rituals</span>
            </nav>
            <p className="kdr-hero__subtitle">Sturdy loft-style kitchen</p>
            <h1 className="kdr-hero__title">Dark Rituals</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kdr-section kdr-section--intro">
        <div className="kdr-container kdr-container--narrow">
          <h2 className="kdr-intro__title">Sturdy loft-style kitchen</h2>
          <p className="kdr-intro__body">
            If you're looking to make a bold statement, Dark Rituals is the perfect choice. It's a style that defies conventions and embraces individuality. With its striking contrasts and captivating aesthetics, your kitchen will become a conversation starter, leaving your guests in awe of its captivating allure.
          </p>
          <p className="kdr-intro__body kdr-mt">
            The robust materials and unconventional textures combine to create an environment that beckons you to explore new flavor and experiment with daring recipes.
          </p>
        </div>
      </section>

      {/* ── FULL SCREEN VIDEO PLAYER ── */}
      <section className="kdr-video-section">
        <div className="kdr-video-container">
          <video className="kdr-video kdr-video--landscape" muted autoPlay loop playsInline>
            <source src={UKS_DARK_RITUALS_VIDEO_LANDSCAPE} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="kdr-video kdr-video--portrait" muted autoPlay loop playsInline>
            <source src={UKS_DARK_RITUALS_VIDEO_PORTRAIT} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + photo right (Sandy/taupe background `#c6bcb3`) ── */}
      <section className="kdr-split">
        <div className="kdr-split__panel">
          <div className="kdr-split__inner">
            <h2 className="kdr-split__title">Sturdy with special accents</h2>
            <p className="kdr-split__body">
              This loft-style kitchen is a real eye-catcher with the high bookcase placed over the island. The worktop covers part of the side of the island. The trendy accent fronts in Stainless Steel and the smart cubes in black complete the sturdy look!.
            </p>
            
            <p className="kdr-split__label">In this kitchen:</p>
            <ul className="kdr-split__list">
              <li>Island with high bookcase and hood-in-hob</li>
              <li>Trendy accent front in Stainless Steel</li>
              <li>Sturdy, metal handles</li>
            </ul>
          </div>
        </div>
        <div className="kdr-split__photo">
          <img src={UKS_DARK_RITUALS_SPLIT} alt="High bookcase island close-up" loading="lazy" />
        </div>
      </section>

      {/* ── WIDE IMAGE (Window Size - slightly small) ── */}
      <section className="kdr-section kdr-section--img-wide">
        <div className="kdr-container kdr-container--wide">
          <figure className="kdr-figure">
            <img src={UKS_DARK_RITUALS_WIDE} alt="Dark Rituals island perspective layout" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (White bg, charcoal text) ── */}
      <section className="kdr-section kdr-section--faq">
        <div className="kdr-container kdr-container--content">
          <h2 className="kdr-faq__heading">Why not try this?</h2>
          <p className="kdr-faq__intro">
            You can choose from nine different stain colours for the veneer. As an accent front you can also choose another cool trend decor such as stainless steel, black metal or (light) concrete.
          </p>
          <p className="kdr-faq__intro kdr-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our <Link to="/contact" className="kdr-link-faq">Keller dealers</Link>. They are happy to make a design in this style that suits your home and budget.
          </p>

          <dl className="kdr-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kdr-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kdr-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kdr-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kdr-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — Sandy/taupe background `#c6bcb3`, white text ── */}
      <section className="kdr-cta-section">
        <div className="kdr-container kdr-container--narrow kdr-container--centered">
          <h2 className="kdr-cta__title">Curious about our programme?</h2>
          <p className="kdr-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kdr-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kdr-page {
          --white:      #ffffff;
          --light-bg:   #ffffff;
          --frame-bg:   #c6bcb3;
          --cta-bg:     #c6bcb3;
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
        .kdr-mt { margin-top: 16px; }

        /* ── containers ── */
        .kdr-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kdr-container--narrow  { max-width: 780px; }
        .kdr-container--content { max-width: 1080px; }
        .kdr-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kdr-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kdr-container { padding: 0 20px; }
          .kdr-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kdr-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kdr-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kdr-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kdr-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kdr-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kdr-breadcrumbs a:hover { color: #fff; }
        .kdr-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kdr-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kdr-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kdr-section {
          padding: 80px 0;
        }
        .kdr-section.no-pt { padding-top: 0; }
        
        .kdr-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kdr-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
          text-align: center;
        }

        /* ── video section ── */
        .kdr-video-section {
          position: relative; width: 100%; overflow: hidden; background: #000;
        }
        .kdr-video-container {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
        }
        .kdr-video {
          display: block; width: 100%; height: 100%; object-fit: cover;
        }
        .kdr-video--portrait { display: none; }
        @media (max-width: 768px) {
          .kdr-video-container { aspect-ratio: 9 / 16; }
          .kdr-video--landscape { display: none; }
          .kdr-video--portrait { display: block; }
        }

        /* ── split section ── */
        .kdr-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kdr-split { grid-template-columns: 42fr 58fr; }
        }
        .kdr-split__panel {
          display: flex; align-items: center; background: var(--frame-bg); color: var(--text-white);
        }
        .kdr-split__inner {
          padding: 48px 40px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kdr-split__inner { padding: 60px 56px; } }
        @media (min-width: 1200px) { .kdr-split__inner { padding: 72px 72px; } }

        .kdr-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: inherit; margin: 0; line-height: 1.25;
        }
        .kdr-split__body {
          font-size: 15px; line-height: 1.75; color: inherit; opacity: 0.85; margin: 0;
        }
        .kdr-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: inherit; opacity: 0.6; margin-top: 4px;
        }
        .kdr-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: inherit;
        }
        .kdr-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kdr-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: inherit;
          font-weight: 700;
        }
        .kdr-split__list li + li { margin-top: 6px; }

        .kdr-split__photo { overflow: hidden; }
        .kdr-split__photo img {
          display: block; width: 100%; height: auto;
          aspect-ratio: 960 / 900;
          object-fit: cover; object-position: center;
        }
        @media (min-width: 860px) {
          .kdr-split__photo { display: flex; align-items: stretch; }
          .kdr-split__photo img { height: 100%; aspect-ratio: auto; }
        }

        /* ── wide image ── */
        .kdr-section--img-wide { padding: 40px 0; background: var(--light-bg); }
        .kdr-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kdr-figure img { display: block; width: 100%; height: auto; }

        /* ── FAQ ── */
        .kdr-section--faq {
          padding: 80px 0 72px; background: var(--light-bg); color: var(--charcoal);
        }
        .kdr-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--charcoal); margin: 0 0 20px; line-height: 1.15;
        }
        .kdr-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--mid-grey); margin: 0;
        }
        .kdr-link-faq { color: var(--charcoal); text-decoration: underline; font-weight: 600; }
        .kdr-link-faq:hover { color: rgba(0,0,0,0.7); }

        .kdr-faq__list { border-top: 1px solid var(--border-dark); margin-top: 40px; }
        .kdr-faq__item { border-bottom: 1px solid var(--border-dark); }
        .kdr-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kdr-faq__toggle:hover { color: rgba(0,0,0,0.6); }
        .kdr-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kdr-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--mid-grey);
        }
        .kdr-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kdr-cta-section {
          background: var(--cta-bg); padding: 96px 0 112px; text-align: center; color: var(--white);
        }
        .kdr-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--white); margin: 0 0 18px; line-height: 1.1;
        }
        .kdr-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--text-muted); margin: 0 0 40px;
        }
        .kdr-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, color .25s, transform .2s;
        }
        .kdr-cta__btn:hover { background: var(--white); color: var(--charcoal); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kdr-hero          { height: 55vh; min-height: 360px; }
          .kdr-hero__overlay { padding-bottom: 40px; }
          .kdr-section--intro { padding: 52px 0 44px; }
          .kdr-section--faq   { padding: 52px 0 52px; }
          .kdr-cta-section    { padding: 64px 0 72px; }
          .kdr-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
