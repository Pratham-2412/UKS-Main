import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Local imports from uks-ocean-breeze assets folder
import UKS_OCEAN_BREEZE_HERO from '../assets/uks-ocean-breeze/uks-ocean-breeze-hero.webp';
import UKS_OCEAN_BREEZE_SPLIT from '../assets/uks-ocean-breeze/uks-ocean-breeze-split.webp';
import UKS_OCEAN_BREEZE_SWATCH_OCEAN from '../assets/uks-ocean-breeze/uks-ocean-breeze-swatch-ocean.webp';
import UKS_OCEAN_BREEZE_SWATCH_DEEP_BLACK from '../assets/uks-ocean-breeze/uks-ocean-breeze-swatch-deep-black-oak.webp';
import UKS_OCEAN_BREEZE_SWATCH_CARBON from '../assets/uks-ocean-breeze/uks-ocean-breeze-swatch-carbon.webp';
import UKS_OCEAN_BREEZE_SWATCH_SMOKED_GLASS from '../assets/uks-ocean-breeze/uks-ocean-breeze-swatch-smoked-glass.webp';
import UKS_OCEAN_BREEZE_COLLAGE from '../assets/uks-ocean-breeze/uks-ocean-breeze-collage.webp';
import UKS_OCEAN_BREEZE_VIDEO_LANDSCAPE from '../assets/uks-ocean-breeze/uks-ocean-breeze-video-landscape.mp4';
import UKS_OCEAN_BREEZE_VIDEO_PORTRAIT from '../assets/uks-ocean-breeze/uks-ocean-breeze-video-portrait.mp4';

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'You are free to choose any melamine or lacquer color. This way our dealers can make a kitchen design truly personal.'
  },
  {
    q: 'How do I maintain glass units?',
    a: 'The glass can be cleaned with mild detergents and normal glass cleaners. Do not use chemicals or strong corrosive agents. Dry with a soft cloth or chamois for a streak-free result.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerOceanBreeze() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kob-page"
    >
      {/* ── HERO ── */}
      <section className="kob-hero">
        <img src={UKS_OCEAN_BREEZE_HERO} alt="Ocean Breeze kitchen" className="kob-hero__img" loading="eager" />
        <div className="kob-hero__overlay">
          <div className="kob-container">
            <nav className="kob-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kob-breadcrumbs__current">Ocean Breeze</span>
            </nav>
            <p className="kob-hero__subtitle">Soft pastel teal tones</p>
            <h1 className="kob-hero__title">Ocean Breeze</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kob-section kob-section--intro">
        <div className="kob-container kob-container--narrow">
          <h2 className="kob-intro__title">The kitchen with a wow effect</h2>
          <p className="kob-intro__body">
            Immerse yourself in the ambiance of Ocean Breeze, where classic and modern design merge. The contrast
            between the deep black oak (melamine) and ocean (silk gloss lacquer) - together with the glass cabinets and
            the beautiful worktop - in ceramic - provide a real 'wow' effect in this kitchen.
          </p>
          <p className="kob-intro__body kob-mt">
            The spotlights and LED strip lighting in this kitchen can be controlled via an intelligent platform for LED
            lighting that combines sustainability, design and ease of use.
          </p>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kob-split">
        <div className="kob-split__panel">
          <div className="kob-split__inner">
            <h2 className="kob-split__title">New colours and stylish lighting</h2>
            <p className="kob-split__label">In this kitchen:</p>
            <ul className="kob-split__list">
              <li>New melamine deep black oak - model Bronx</li>
              <li>New paint color ocean - in new HQ paint, model Crystal</li>
              <li>New platform for LED lighting.</li>
            </ul>

            <p className="kob-split__label">New platform for lighting:</p>
            <p className="kob-split__body">
              The module can be connected to various home automation systems for controlling lighting, sound and
              automation. Think of well-known platforms such as Apple HomeKit, Amazon Alexa, Google Home and Philips
              Hue.
            </p>
          </div>
        </div>
        <div className="kob-split__photo">
          <img src={UKS_OCEAN_BREEZE_SPLIT} alt="Ocean Breeze detail" loading="lazy" />
        </div>
      </section>

      {/* ── SWATCHES SECTION ── */}
      <section className="kob-section kob-section--swatches">
        <div className="kob-container kob-container--content">
          <h2 className="kob-swatches__title">Colours and materials</h2>
          <div className="kob-swatches__grid">
            <div className="kob-swatch">
              <div className="kob-swatch__img-wrap">
                <img src={UKS_OCEAN_BREEZE_SWATCH_OCEAN} alt="silk gloss lacquer ocean" loading="lazy" />
              </div>
              <p className="kob-swatch__label">silk gloss lacquer | ocean</p>
            </div>
            <div className="kob-swatch">
              <div className="kob-swatch__img-wrap">
                <img src={UKS_OCEAN_BREEZE_SWATCH_DEEP_BLACK} alt="melamine deep black oak" loading="lazy" />
              </div>
              <p className="kob-swatch__label">model Bronx | melamine | deep black oak</p>
            </div>
            <div className="kob-swatch">
              <div className="kob-swatch__img-wrap">
                <img src={UKS_OCEAN_BREEZE_SWATCH_CARBON} alt="handle trim carbon" loading="lazy" />
              </div>
              <p className="kob-swatch__label">handle trim | carbon</p>
            </div>
            <div className="kob-swatch">
              <div className="kob-swatch__img-wrap">
                <img src={UKS_OCEAN_BREEZE_SWATCH_SMOKED_GLASS} alt="glass units smoked glass" loading="lazy" />
              </div>
              <p className="kob-swatch__label">glass units | smoked glass</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLAGE IMAGE (Window Size - slightly small) ── */}
      <section className="kob-section kob-section--img-wide no-pt">
        <div className="kob-container kob-container--wide">
          <figure className="kob-figure">
            <img src={UKS_OCEAN_BREEZE_COLLAGE} alt="Ocean Breeze collage detail" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── RESPONSIVE DUAL-VIDEO HERO BLOCK ── */}
      <section className="kob-video-section">
        <div className="kob-video-wrapper">
          <video
            className="kob-video kob-video--landscape"
            autoPlay
            loop
            muted
            playsInline
            src={UKS_OCEAN_BREEZE_VIDEO_LANDSCAPE}
          />
          <video
            className="kob-video kob-video--portrait"
            autoPlay
            loop
            muted
            playsInline
            src={UKS_OCEAN_BREEZE_VIDEO_PORTRAIT}
          />
        </div>
      </section>

      {/* ── WHY NOT TRY THIS + FAQ (Deep ocean teal/slate bg) ── */}
      <section className="kob-section kob-section--faq">
        <div className="kob-container kob-container--content">
          <h2 className="kob-faq__heading">Why not try this?</h2>
          <p className="kob-faq__intro">
            You can save by choosing melamine instead of lacquer and a melamine worktop.
          </p>
          <p className="kob-faq__intro kob-mt">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration
            and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options.
            More information about the possibilities? Visit one of our{' '}
            <Link to="/contact" className="kob-link-faq">Keller dealers</Link>. They are happy to make a design in this
            style that suits your home and budget.
          </p>

          <dl className="kob-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kob-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kob-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kob-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kob-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — White bg, dark text ── */}
      <section className="kob-cta-section">
        <div className="kob-container kob-container--narrow kob-container--centered">
          <h2 className="kob-cta__title">Curious about our programme?</h2>
          <p className="kob-cta__body">Have a look at our materials in real life!</p>
          <Link to="/contact" className="kob-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        .kob-page {
          --white:      #ffffff;
          --dark-bg:    #18191b;
          --teal-bg:    #405257;
          --text-white: #ffffff;
          --text-dark:  #1d1d1f;
          --text-muted: rgba(255, 255, 255, 0.75);
          --border-muted: rgba(255, 255, 255, 0.15);
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--dark-bg);
          color: var(--text-white);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .kob-mt { margin-top: 16px; }

        /* ── containers ── */
        .kob-container {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
        }
        .kob-container--narrow  { max-width: 780px; }
        .kob-container--content { max-width: 1080px; }
        .kob-container--wide    { max-width: 1326px; margin: 0 auto; padding: 0 40px; }
        .kob-container--centered {
          text-align: center; display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kob-container { padding: 0 20px; }
          .kob-container--wide { padding: 0 20px; }
        }

        /* ── hero ── */
        .kob-hero {
          position: relative; height: 100vh; overflow: hidden; background: #111;
        }
        .kob-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; opacity: 0.85;
        }
        .kob-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
          display: flex; align-items: flex-end; padding-bottom: 68px;
        }

        /* breadcrumbs */
        .kob-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .kob-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .kob-breadcrumbs a:hover { color: #fff; }
        .kob-breadcrumbs__current { color: #fff; font-weight: 700; }

        .kob-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .kob-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── general sections ── */
        .kob-section {
          padding: 80px 0;
        }
        .kob-section.no-pt { padding-top: 0; }
        
        .kob-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 24px; line-height: 1.2;
          text-align: center;
        }
        .kob-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
          text-align: center;
        }

        /* ── split section ── */
        .kob-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .kob-split { grid-template-columns: 5fr 7fr; }
        }
        .kob-split__panel {
          display: flex; align-items: center; background: var(--teal-bg); color: var(--text-white);
        }
        .kob-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kob-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kob-split__inner { padding: 88px 80px; } }

        .kob-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--text-white); margin: 0; line-height: 1.25;
        }
        .kob-split__body {
          font-size: 15px; line-height: 1.75; color: var(--text-muted); margin: 0;
        }
        .kob-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.6); margin-top: 4px;
        }
        .kob-split__list {
          list-style: none;
          padding-left: 0;
          margin: 8px 0 0;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-white);
        }
        .kob-split__list li {
          position: relative;
          padding-left: 22px;
        }
        .kob-split__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--text-white);
          font-weight: 700;
        }
        .kob-split__list li + li { margin-top: 6px; }

        .kob-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kob-split__photo { min-height: unset; height: 100vh; }
        }
        .kob-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── swatches section (white bg) ── */
        .kob-section--swatches {
          background: var(--white); color: var(--text-dark); padding: 88px 0;
        }
        .kob-swatches__title {
          font-family: var(--ff-serif); font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          text-align: center; margin: 0 0 48px; color: var(--text-dark);
        }
        .kob-swatches__grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
        }
        @media (min-width: 768px) {
          .kob-swatches__grid { grid-template-columns: repeat(4, 1fr); gap: 40px; }
        }
        .kob-swatch {
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .kob-swatch__img-wrap {
          width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 4px; background: #eee;
          margin-bottom: 14px;
        }
        .kob-swatch__img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform .3s;
        }
        .kob-swatch:hover img { transform: scale(1.05); }
        .kob-swatch__label {
          font-size: 13px; line-height: 1.4; color: #555; margin: 0;
        }

        /* ── wide image ── */
        .kob-section--img-wide { padding: 40px 0; background: var(--dark-bg); }
        .kob-figure { margin: 0; overflow: hidden; border-radius: 0; }
        .kob-figure img { display: block; width: 100%; height: auto; }

        /* ── video section ── */
        .kob-video-section {
          position: relative; width: 100%; overflow: hidden; background: #000;
        }
        .kob-video-wrapper {
          position: relative; width: 100%; height: 0; padding-bottom: 56.25%; /* 16:9 aspect ratio */
        }
        @media (max-width: 767px) {
          .kob-video-wrapper { padding-bottom: 125%; /* 4:5 aspect ratio for portrait */ }
        }
        .kob-video {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
        }
        .kob-video--landscape { display: block; }
        .kob-video--portrait  { display: none; }
        @media (max-width: 767px) {
          .kob-video--landscape { display: none; }
          .kob-video--portrait  { display: block; }
        }

        /* ── FAQ ── */
        .kob-section--faq {
          padding: 80px 0 72px; background: var(--teal-bg); color: var(--text-white);
        }
        .kob-faq__heading {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: var(--text-white); margin: 0 0 20px; line-height: 1.15;
        }
        .kob-faq__intro {
          font-size: 17px; line-height: 1.8; color: var(--text-muted); margin: 0;
        }
        .kob-link-faq { color: var(--text-white); text-decoration: underline; font-weight: 600; }
        .kob-link-faq:hover { color: rgba(255,255,255,0.7); }

        .kob-faq__list { border-top: 1px solid var(--border-muted); margin-top: 40px; }
        .kob-faq__item { border-bottom: 1px solid var(--border-muted); }
        .kob-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--text-white); text-align: left; transition: color .2s;
        }
        .kob-faq__toggle:hover { color: var(--text-muted); }
        .kob-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--text-white);
        }
        .kob-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: var(--text-muted);
        }
        .kob-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kob-cta-section {
          background: var(--white); padding: 96px 0 112px; text-align: center; color: var(--text-dark);
        }
        .kob-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: var(--text-dark); margin: 0 0 18px; line-height: 1.1;
        }
        .kob-cta__body {
          font-size: 17px; line-height: 1.7; color: #555; margin: 0 0 40px;
        }
        .kob-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--dark-bg); color: var(--white);
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kob-cta__btn:hover { background: #000000; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kob-hero          { height: 55vh; min-height: 360px; }
          .kob-hero__overlay { padding-bottom: 40px; }
          .kob-section--intro { padding: 52px 0 44px; }
          .kob-section--faq   { padding: 52px 0 52px; }
          .kob-cta-section    { padding: 64px 0 72px; }
          .kob-split__inner   { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
