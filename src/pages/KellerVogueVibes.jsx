import UKS_KELLER_VOGUE_VIBES_1920_X_1090_HERO_VOGUEVIBES from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-1920-x-1090-hero-voguevibes.webp';
import UKS_KELLER_VOGUE_VIBES_1326_X_884_AFBEELDING_VOGUE_VIBES from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-1326-x-884-afbeelding-vogue-vibes.webp';
import UKS_KELLER_VOGUE_VIBES_DSC_9671_SOCIAL_MEDIA from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-dsc-9671-social-media.webp';
import UKS_KELLER_VOGUE_VIBES_LAK_LATTE from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-lak-latte.webp';
import UKS_KELLER_VOGUE_VIBES_LAK_BLUSH from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-lak-blush.webp';
import UKS_KELLER_VOGUE_VIBES_BEITS_CC_NATUUR_EIKEN from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-beits-cc-natuur-eiken.webp';
import UKS_KELLER_VOGUE_VIBES_ZEEZOUT from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-zeezout.webp';
import UKS_KELLER_VOGUE_VIBES_2023_SJABLOON_COLLAGE_VOGUE_VIBES from '../assets/uks-keller-vogue-vibes/uks-keller-vogue-vibes-2023-sjabloon-collage-vogue-vibes.webp';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


// Images
const HERO_IMG      = UKS_KELLER_VOGUE_VIBES_1920_X_1090_HERO_VOGUEVIBES
const WIDE1_IMG     = UKS_KELLER_VOGUE_VIBES_1326_X_884_AFBEELDING_VOGUE_VIBES
const SPLIT_IMG     = UKS_KELLER_VOGUE_VIBES_DSC_9671_SOCIAL_MEDIA
const MAT1_IMG      = UKS_KELLER_VOGUE_VIBES_LAK_LATTE
const MAT2_IMG      = UKS_KELLER_VOGUE_VIBES_LAK_BLUSH
const MAT3_IMG      = UKS_KELLER_VOGUE_VIBES_BEITS_CC_NATUUR_EIKEN
const MAT4_IMG      = UKS_KELLER_VOGUE_VIBES_ZEEZOUT
const MOODBOARD_IMG = UKS_KELLER_VOGUE_VIBES_2023_SJABLOON_COLLAGE_VOGUE_VIBES

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose from?',
    a: 'You can choose all colours and decors in melamine. Our lacquer models are available in 2,050 NCS colours.'
  },
  {
    q: 'How do I maintain melamine?',
    a: 'Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  },
  {
    q: 'How do I maintain a lacquered kitchen?',
    a: 'Lacquer is more sensitive than melamine, be careful in order to avoid scratches and dents. Remove stains as quickly as possible. There are substances that can no longer be completely removed when not cleaned immediately. Use a mild household or kitchen cleaner and a soft cloth. After cleaning, always dry the kitchen elements with a soft cloth to prevent water from penetrating the seams which could lead to swelling.'
  }
]

export default function KellerVogueVibes() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="kvv-page"
    >
      {/* ── HERO ── */}
      <section className="kvv-hero">
        <img src={HERO_IMG} alt="Vogue Vibes kitchen" className="kvv-hero__img" loading="eager" />
        <div className="kvv-hero__overlay">
          <div className="kvv-container">
            <nav className="kvv-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/modern-kitchens">Modern kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="kvv-breadcrumbs__current">Vogue Vibes</span>
            </nav>
            <h1 className="kvv-hero__title">Vogue Vibes</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="kvv-section kvv-section--intro">
        <div className="kvv-container kvv-container--narrow">
          <h2 className="kvv-intro__title">Welcome to Vogue Vibes</h2>
          <p className="kvv-intro__body">
            Welcome to Vogue Vibes, a modern kitchen where elegance and refinement meet. The nude tones provide a modern and soft atmosphere.
          </p>
          <p className="kvv-intro__body u-mt-3">
            The units in lacquer colour latte make a beautiful combination with the handles in bronze. Behind the cooking area we created a space for herbs and accessories in the same material as the worktop, with a back splash in lacquer colour blush.
          </p>
          <p className="kvv-intro__body u-mt-3">
            The lines between the Tip-On drawers in the island create a sleek design. The lowered part of the island provides a special touch, which lends itself for beautiful styling enabling the kitchen to flow seamlessly into the living area.
          </p>
        </div>
      </section>

      {/* ── WIDE LANDSCAPE IMAGE 1 — full bleed ── */}
      <section className="kvv-section kvv-section--img-wide">
        <div className="kvv-container kvv-container--wide">
          <figure className="kvv-figure">
            <img src={WIDE1_IMG} alt="Vogue Vibes view" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── SPLIT: Text panel left + 100vh photo right ── */}
      <section className="kvv-split">
        <div className="kvv-split__panel">
          <div className="kvv-split__inner">
            <h2 className="kvv-split__title">Beautiful nude tones</h2>
            
            <p className="kvv-split__label">In this kitchen:</p>
            <ul className="kvv-split__list">
              <li>Model Crystal, in silk gloss lacquer latte</li>
              <li>Model Crystal, in silk gloss lacquer blush</li>
              <li>Accent front Nottingham, in nature oak stain</li>
              <li>New handle</li>
            </ul>

            <p className="kvv-split__label">Eye-catchers:</p>
            <ul className="kvv-split__list">
              <li>Sleek lines in the island</li>
              <li>Lowered part for seamless transition into living area</li>
              <li>Space for herbs and accessories behind worktop</li>
            </ul>
          </div>
        </div>
        <div className="kvv-split__photo">
          <img src={SPLIT_IMG} alt="Vogue Vibes detailed shots" loading="lazy" />
        </div>
      </section>

      {/* ── MATERIAL GRID SECTION ── */}
      <section className="kvv-section kvv-section--materials">
        <div className="kvv-container">
          <h2 className="kvv-materials__title">The materials</h2>
          <div className="kvv-grid">
            <div className="kvv-grid__item">
              <figure className="kvv-grid__figure">
                <img src={MAT1_IMG} alt="Silk gloss lacquer latte" loading="lazy" />
              </figure>
              <span className="kvv-grid__label">Silk gloss lacquer | latte</span>
            </div>
            <div className="kvv-grid__item">
              <figure className="kvv-grid__figure">
                <img src={MAT2_IMG} alt="Silk gloss lacquer blush" loading="lazy" />
              </figure>
              <span className="kvv-grid__label">Silk gloss lacquer | blush</span>
            </div>
            <div className="kvv-grid__item">
              <figure className="kvv-grid__figure">
                <img src={MAT3_IMG} alt="Veneer nature oak" loading="lazy" />
              </figure>
              <span className="kvv-grid__label">Veneer | stain nature oak</span>
            </div>
            <div className="kvv-grid__item">
              <figure className="kvv-grid__figure">
                <img src={MAT4_IMG} alt="Melamine Sea salt" loading="lazy" />
              </figure>
              <span className="kvv-grid__label">Melamine | Sea salt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIDE MOODBOARD IMAGE — full bleed ── */}
      <section className="kvv-section kvv-section--img-wide">
        <div className="kvv-container kvv-container--wide">
          <figure className="kvv-figure">
            <img src={MOODBOARD_IMG} alt="Vogue Vibes moodboard collage" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* ── WHY NOT TRY THIS ── */}
      <section className="kvv-section kvv-section--try-this">
        <div className="kvv-container kvv-container--narrow">
          <h2 className="kvv-section__title">Why not try this?</h2>
          <p className="kvv-section__body">
            By choosing melamine fronts instead of lacquer and a melamine worktop instead of ceramics, you have the same design for a more favorable price. We have plenty of colours and decors to choose from.
          </p>
          <p className="kvv-section__body u-mt-3">
            The kitchen layouts that you will find on this website and in our kitchen brochure serve as inspiration and can be adapted in terms of layout, model, colour, handle (trim)/handleless and many other options. More information about the possibilities? Visit one of our Keller dealers. They are happy to make a design in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="kvv-section kvv-section--faq">
        <div className="kvv-container kvv-container--content">
          <dl className="kvv-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="kvv-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="kvv-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="kvv-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="kvv-faq__answer">
                    <p>{item.a}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA — soft warm peach bg ── */}
      <section className="kvv-cta-section">
        <div className="kvv-container kvv-container--narrow knn-container--centered">
          <h2 className="kvv-cta__title">Curious about our programme?</h2>
          <p className="kvv-cta__body">Have a look at our materials in real life! Find your Keller dealer.</p>
          <Link to="/contact" className="kvv-cta__btn">Find your dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .kvv-page {
          --white:      #ffffff;
          --peach:      #f3e4d5;
          --peach-dark: #e9c5b5;
          --charcoal:   #1d1d1f;
          --mid:        #424245;
          --border:     #dedede;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }

        .u-mt-3 { margin-top: 12px; }

        /* ── containers ── */
        .kvv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .kvv-container--narrow   { max-width: 780px; }
        .kvv-container--wide     { max-width: 100%; padding: 0; }
        .kvv-container--content  { max-width: 1080px; }
        .knn-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) {
          .kvv-container       { padding: 0 20px; }
        }

        /* ── hero ── */
        .kvv-hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          background: #111;
        }
        .kvv-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.8;
        }
        .kvv-hero__overlay {
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
        .kvv-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 12px; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.55);
          margin-bottom: 16px;
        }
        .kvv-breadcrumbs a {
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: color 0.2s;
        }
        .kvv-breadcrumbs a:hover { color: #f5f5f7; }
        .kvv-breadcrumbs__current { color: rgba(255,255,255,0.9); }
        .kvv-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro ── */
        .kvv-section--intro {
          padding: 72px 0 68px;
        }
        .kvv-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kvv-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split section ── */
        .kvv-split {
          display: grid;
          grid-template-columns: 1fr;
          margin-bottom: 64px;
        }
        @media (min-width: 860px) {
          .kvv-split {
            grid-template-columns: 5fr 7fr;
          }
        }
        .kvv-split__panel {
          background: var(--peach);
          display: flex; align-items: center;
          color: var(--charcoal);
        }
        .kvv-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .kvv-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .kvv-split__inner { padding: 88px 80px; } }

        .kvv-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: var(--charcoal); margin: 0; line-height: 1.2;
        }
        .kvv-split__body {
          font-size: 15px; line-height: 1.75;
          color: var(--mid); margin: 0;
        }
        
        .kvv-split__label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--mid); margin-top: 6px;
        }
        .kvv-split__list {
          margin: 2px 0 0; padding-left: 18px;
          font-size: 15px; line-height: 1.9;
          color: var(--charcoal);
        }
        .kvv-split__list li + li { margin-top: 3px; }

        /* split photo 100vh on widescreen */
        .kvv-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .kvv-split__photo {
            min-height: unset;
            height: 100vh;
          }
        }
        .kvv-split__photo img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ── figures ── */
        .kvv-section--img-wide { padding: 64px 0; }
        .kvv-figure { margin: 0; padding: 0; overflow: hidden; }
        .kvv-figure img { display: block; width: 100%; height: auto; }

        /* ── materials grid ── */
        .kvv-section--materials { padding: 48px 0; }
        .kvv-materials__title {
          font-family: var(--ff-serif);
          font-size: 28px; font-weight: 300;
          margin-bottom: 32px; text-align: center;
        }
        .kvv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (min-width: 768px) {
          .kvv-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
          }
        }
        .kvv-grid__item {
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .kvv-grid__figure {
          margin: 0 0 12px; width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 2px;
        }
        .kvv-grid__figure img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s;
        }
        .kvv-grid__item:hover .kvv-grid__figure img {
          transform: scale(1.05);
        }
        .kvv-grid__label {
          font-size: 13px; color: var(--mid);
        }

        /* ── why not try this ── */
        .kvv-section--try-this { padding: 72px 0 64px; }
        .kvv-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 22px; line-height: 1.15;
        }
        .kvv-section__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── FAQ ── */
        .kvv-section--faq { padding: 0 0 80px; }
        .kvv-faq__list { border-top: 1px solid var(--border); }
        .kvv-faq__item { border-bottom: 1px solid var(--border); }
        .kvv-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: var(--charcoal); text-align: left; transition: color .2s;
        }
        .kvv-faq__toggle:hover { color: var(--peach-dark); }
        .kvv-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: var(--charcoal);
        }
        .kvv-faq__answer { margin: 0; padding: 0 0 24px; font-size: 15px; line-height: 1.8; color: var(--mid); }
        .kvv-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .kvv-cta-section {
          background: var(--peach-dark);
          padding: 96px 0 112px;
        }
        .kvv-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 300; color: var(--charcoal);
          margin: 0 0 18px; line-height: 1.1;
        }
        .kvv-cta__body {
          font-size: 17px; line-height: 1.7; color: var(--mid); margin: 0 0 40px;
        }
        .kvv-cta__btn {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--charcoal); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .kvv-cta__btn:hover { background: var(--white); color: var(--charcoal); transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .kvv-hero          { height: 55vh; min-height: 360px; }
          .kvv-hero__overlay { padding-bottom: 40px; }
          .kvv-intro         { padding: 48px 0 40px; }
          .kvv-section--faq  { padding: 0 0 60px; }
          .kvv-cta-section   { padding: 64px 0 72px; }
          .kvv-split__inner  { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
