import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BASE = 'https://www.kellerkitchens.com/media/cache/generic/rc'

/* ── Images ─────────────────────────────────────────────────── */
const HERO_IMG  = `${BASE}/kcN9ZSKg/uploads/media/68f1e8cb5c9b4/natural-weave-hero.webp?originalExtension=jpg`
const SPLIT_IMG = `${BASE}/TyIBZI57/uploads/media/68f5d26019bdb/natural-weave-944-x-884-afbeelding-bij-tekst.webp?originalExtension=jpg`
const WIDE_IMG  = `${BASE}/JzFSDGde/uploads/media/68f5d10e5664a/natural-weave-1.webp?originalExtension=jpg`
const STYLE_IMG = `${BASE}/w8YQpK9l/uploads/media/691485cbac764/hoe-maak-ik-deze-stijl3.webp?originalExtension=jpg`

/* ── Ithaca wood swatches carousel ─────────────────────────── */
const SWATCHES = [
  { label: 'Savannah Oak', img: `${BASE}/mOqfIkQs/uploads/media/68f1fae55f1d0/ithaca-savanne-eiken.webp?originalExtension=jpg` },
  { label: 'Copper Oak',   img: `${BASE}/4QuMmfGU/uploads/media/68f1fb3ccec7e/ithaca-koper-eiken.webp?originalExtension=jpg` },
  { label: 'Platinum Oak', img: `${BASE}/yyo9okzV/uploads/media/68f1fb536370f/ithaca-platina-eiken.webp?originalExtension=jpg` },
  { label: 'Natural Oak',  img: `${BASE}/r0gmMjVj/uploads/media/68f1fad201ed5/ithaca-naturel-eiken.webp?originalExtension=jpg` },
  { label: 'Mokka Oak',    img: `${BASE}/nicNQfN7/uploads/media/68f1fc4b20a66/ithaca-mokka-eiken.webp?originalExtension=jpg` },
  { label: 'Moss Oak',     img: `${BASE}/5WLlWAJG/uploads/media/68f1fb6203a73/ithaca-mos-eiken.webp?originalExtension=jpg` },
]

const FAQ_DATA = [
  {
    q: 'Which colours and materials can I choose for this kitchen?',
    a: 'The Ithaca model is available in six colours: Natural Oak, Savannah Oak, Copper Oak, Platinum Oak, Moss Oak and Mocha Oak.'
  }
]

export default function KellerNaturalWeave() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="knw-page"
    >
      {/* ── HERO ── */}
      <section className="knw-hero">
        <img src={HERO_IMG} alt="Natural Weave kitchen" className="knw-hero__img" loading="eager" />
        <div className="knw-hero__overlay">
          <div className="knw-container">
            <nav className="knw-breadcrumbs" aria-label="Breadcrumb">
              <Link to="/kitchens">Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller">Keller</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <Link to="/kitchens/keller/classic-kitchens">Classic Kitchens</Link>
              <span aria-hidden="true">&nbsp;/&nbsp;</span>
              <span className="knw-breadcrumbs__current">Natural Weave</span>
            </nav>
            <p className="knw-hero__subtitle">Tactile &amp; natural</p>
            <h1 className="knw-hero__title">Natural Weave</h1>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="knw-section knw-section--intro">
        <div className="knw-container knw-container--narrow">
          <h2 className="knw-intro__title">Tactile luxury</h2>
          <h3 className="knw-intro__subtitle">Crafted details &amp; handmade accents</h3>
          <p className="knw-intro__body">
            <strong>Tactile Luxury</strong> is a style you do not just see, you feel it. In an interior that invites touch
            and experience, rich textures take centre stage. Think bouclé, linen, velvet, leather and ceramics.
            Tone-on-tone colours in deep, warm shades create a harmonious whole, while the interplay between matt
            and glossy surfaces adds depth and contrast. In combination with our new <em>Ithaca</em> model, we therefore
            chose our melamine trend decor Linen.
          </p>
        </div>
      </section>

      {/* ── SPLIT 1: Mokka oak & linen — text left + photo right ── */}
      <section className="knw-split">
        <div className="knw-split__panel knw-split__panel--taupe">
          <div className="knw-split__inner">
            <h2 className="knw-split__title">Mokka oak &amp; linen</h2>
            <p className="knw-split__body">
              Crafted details and handmade accents add character and individuality. At Keller, we translate this trend
              into kitchens that are more than just living spaces — they add a sensory layer for a richer experience.
            </p>
            <p className="knw-split__label">For this kitchen:</p>
            <ul className="knw-split__list">
              <li>Ithaca mokka oak</li>
              <li>Bronx Linen</li>
            </ul>
          </div>
        </div>
        <div className="knw-split__photo">
          <img src={SPLIT_IMG} alt="Natural Weave kitchen detail" loading="lazy" />
        </div>
      </section>

      {/* ── FULL-WIDTH LANDSCAPE IMAGE ── */}
      <section className="knw-section knw-section--fullscreen">
        <figure className="knw-fullscreen">
          <img src={WIDE_IMG} alt="Natural Weave kitchen wide view" loading="lazy" />
        </figure>
      </section>

      {/* ── MODEL ITHACA CAROUSEL ── */}
      <section className="knw-section knw-section--ithaca">
        <div className="knw-ithaca">
          <div className="knw-ithaca__content">
            <h2 className="knw-ithaca__title">Model Ithaca</h2>
            <p className="knw-ithaca__body">
              As an addition to our range, we introduce the <em>Ithaca</em> model: lifelike matt wood-effect finishes
              that give the feel of real wooden fronts. The material combines the look and feel of natural oak with the
              quality of melamine — more scratch-resistant, colourfast and easy to clean.
            </p>
            <p className="knw-ithaca__body u-mt-3">
              <strong>Ithaca</strong> is a versatile wood structure that adds character and atmosphere to the kitchen
              design. Available in six warm tones, Ithaca works beautifully in both modern and natural kitchen styles.
            </p>
            {/* Swatch nav dots */}
            <div className="knw-ithaca__dots">
              {SWATCHES.map((s, i) => (
                <button
                  key={s.label}
                  className={`knw-ithaca__dot${i === activeIdx ? ' knw-ithaca__dot--active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={s.label}
                />
              ))}
            </div>
            <p className="knw-ithaca__swatch-name">{SWATCHES[activeIdx].label}</p>
          </div>
          <div className="knw-ithaca__slider">
            <div className="knw-ithaca__slides" style={{ transform: `translateX(-${activeIdx * 100}%)` }}>
              {SWATCHES.map((s) => (
                <div key={s.label} className="knw-ithaca__slide">
                  <img src={s.img} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
            <button
              className="knw-ithaca__arrow knw-ithaca__arrow--prev"
              onClick={() => setActiveIdx((p) => (p - 1 + SWATCHES.length) % SWATCHES.length)}
              aria-label="Previous"
            >&#8592;</button>
            <button
              className="knw-ithaca__arrow knw-ithaca__arrow--next"
              onClick={() => setActiveIdx((p) => (p + 1) % SWATCHES.length)}
              aria-label="Next"
            >&#8594;</button>
          </div>
        </div>
      </section>

      {/* ── SPLIT 2 INVERSE: How to create this style — photo left + text right ── */}
      <section className="knw-split knw-split--inverse">
        <div className="knw-split__panel knw-split__panel--taupe">
          <div className="knw-split__inner">
            <h2 className="knw-split__title">How do you create this style with the Keller range?</h2>
            <p className="knw-split__body">
              You can bring the <strong>Tactile Luxury</strong> style to life with the Keller range by choosing deep,
              tone-on-tone colours such as Fossil Grey, Oyster Grey and Cacao. Combine these with rich textures in matt
              or tactile finishes like linen, Coffee Oak or Ribbonwood.
            </p>
            <p className="knw-split__body u-mt-3">
              Handles or handle rails in polished metal add contrast and depth. The result is a kitchen that not only
              looks refined, but also invites you to touch and experience it.
            </p>
          </div>
        </div>
        <div className="knw-split__photo">
          <img src={STYLE_IMG} alt="Style inspiration" loading="lazy" />
        </div>
      </section>

      {/* ── THIS IS ANOTHER WAY TO DO IT ── */}
      <section className="knw-section knw-section--try-this">
        <div className="knw-container knw-container--narrow">
          <h2 className="knw-section__title">This is another way to do it</h2>
          <p className="knw-section__body">
            For a more refined finish, choose a veneer front instead of melamine.
          </p>
          <p className="knw-section__body u-mt-3">
            The kitchen designs shown on this website and in our kitchen brochure are intended as inspiration. Each
            kitchen can be adapted to your wishes in terms of layout, model, colour, handle (rail) or handleless design,
            as well as many other options. Would you like to explore the possibilities? Visit one of our Keller dealers.
            They will be happy to create a design in this style that suits your home and budget.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="knw-section knw-section--faq">
        <div className="knw-container knw-container--content">
          <dl className="knw-faq__list">
            {FAQ_DATA.map((item, i) => (
              <div key={i} className="knw-faq__item">
                <dt>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="knw-faq__toggle"
                  >
                    <span>{item.q}</span>
                    <span className="knw-faq__icon" aria-hidden="true">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                {openFaq === i && (
                  <dd className="knw-faq__answer"><p>{item.a}</p></dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="knw-cta-section">
        <div className="knw-container knw-container--narrow knw-container--centered">
          <h2 className="knw-cta__title">Curious to find out more?</h2>
          <p className="knw-cta__body">Would you like to see the materials of this kitchen in real life?</p>
          <Link to="/contact" className="knw-cta__btn">Find a dealer</Link>
        </div>
      </section>

      {/* ── SCOPED STYLES ── */}
      <style>{`
        /* ── tokens ── */
        .knw-page {
          --white:      #ffffff;
          --taupe:      #b5a296;
          --taupe-lt:   #beada2;
          --espresso:   #3e352f;
          --charcoal:   #1d1d1f;
          --mid:        #5a5452;
          --border:     #dedede;
          --ff-serif:   var(--font-serif, Georgia, serif);
          --ff-sans:    var(--font-sans, system-ui, sans-serif);
          background: var(--white);
          color: var(--charcoal);
          overflow-x: hidden;
          font-family: var(--ff-sans);
        }
        .u-mt-3 { margin-top: 16px; }

        /* ── containers ── */
        .knw-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .knw-container--narrow   { max-width: 780px; }
        .knw-container--content  { max-width: 1080px; }
        .knw-container--centered {
          text-align: center;
          display: flex; flex-direction: column; align-items: center;
        }
        @media (max-width: 768px) { .knw-container { padding: 0 20px; } }

        /* ── hero ── */
        .knw-hero {
          position: relative; height: 100vh;
          overflow: hidden; background: #111;
        }
        .knw-hero__img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          opacity: 0.82;
        }
        .knw-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top,rgba(0,0,0,0.68) 0%,rgba(0,0,0,0.12) 50%,transparent 100%);
          display: flex; align-items: flex-end;
          padding-bottom: 68px;
        }

        /* breadcrumbs on hero */
        .knw-breadcrumbs {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-bottom: 14px;
        }
        .knw-breadcrumbs a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color .2s; }
        .knw-breadcrumbs a:hover { color: #fff; }
        .knw-breadcrumbs__current { color: #fff; font-weight: 700; }

        .knw-hero__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(18px, 2.4vw, 28px); font-weight: 300;
          color: rgba(255,255,255,0.9); margin: 0 0 10px;
        }
        .knw-hero__title {
          font-family: var(--ff-serif);
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 300; line-height: 1.05;
          color: #fff; margin: 0; letter-spacing: -0.02em;
        }

        /* ── intro (white bg) ── */
        .knw-section--intro { padding: 80px 0 72px; text-align: center; }
        .knw-intro__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 3.4vw, 44px);
          font-weight: 300; color: var(--charcoal); margin: 0 0 10px; line-height: 1.2;
        }
        .knw-intro__subtitle {
          font-family: var(--ff-serif); font-style: italic;
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 300; color: var(--taupe); margin: 0 0 24px;
        }
        .knw-intro__body {
          font-size: 17px; line-height: 1.8; color: var(--mid); margin: 0;
        }

        /* ── split sections ── */
        .knw-split {
          display: grid; grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .knw-split { grid-template-columns: 5fr 7fr; }
          .knw-split--inverse { grid-template-columns: 7fr 5fr; }
          .knw-split--inverse .knw-split__panel { order: 2; }
          .knw-split--inverse .knw-split__photo { order: 1; }
        }
        .knw-split__panel {
          display: flex; align-items: center; color: #fff;
        }
        .knw-split__panel--taupe { background: var(--taupe); }
        .knw-split__inner {
          padding: 60px 48px;
          display: flex; flex-direction: column; gap: 16px;
        }
        @media (min-width: 860px)  { .knw-split__inner { padding: 72px 64px; } }
        @media (min-width: 1200px) { .knw-split__inner { padding: 88px 80px; } }

        .knw-split__title {
          font-family: var(--ff-serif);
          font-size: clamp(22px, 2.4vw, 34px);
          font-weight: 300; color: #fff; margin: 0; line-height: 1.2;
        }
        .knw-split__body { font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.88); margin: 0; }
        .knw-split__label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(255,255,255,0.55); margin-top: 4px;
        }
        .knw-split__list {
          margin: 2px 0 0; padding-left: 20px;
          font-size: 15px; line-height: 1.9; color: rgba(255,255,255,0.88);
        }
        .knw-split__list li + li { margin-top: 4px; }

        /* split photo 100vh on desktop */
        .knw-split__photo { overflow: hidden; min-height: 420px; }
        @media (min-width: 860px) {
          .knw-split__photo { min-height: unset; height: 100vh; }
        }
        .knw-split__photo img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;
        }

        /* ── full screen image ── */
        .knw-section--fullscreen { padding: 0; }
        .knw-fullscreen { margin: 0; padding: 0; height: 100vh; overflow: hidden; }
        .knw-fullscreen img { display: block; width: 100%; height: 100%; object-fit: cover; }

        /* ── Ithaca carousel section ── */
        .knw-section--ithaca { padding: 0; }
        .knw-ithaca {
          display: grid; grid-template-columns: 1fr;
          background: var(--espresso);
        }
        @media (min-width: 860px) {
          .knw-ithaca { grid-template-columns: 5fr 7fr; min-height: 100vh; }
        }
        .knw-ithaca__content {
          display: flex; flex-direction: column; justify-content: center;
          padding: 64px 48px; color: #fff;
        }
        @media (min-width: 860px) { .knw-ithaca__content { padding: 80px 64px; } }
        .knw-ithaca__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3vw, 40px); font-weight: 300;
          color: #fff; margin: 0 0 20px; line-height: 1.15;
        }
        .knw-ithaca__body { font-size: 15px; line-height: 1.75; color: rgba(255,255,255,0.85); margin: 0; }
        .knw-ithaca__dots {
          display: flex; gap: 8px; margin-top: 28px; flex-wrap: wrap;
        }
        .knw-ithaca__dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.3); border: none; cursor: pointer;
          transition: background .2s, transform .2s;
          padding: 0;
        }
        .knw-ithaca__dot--active { background: #fff; transform: scale(1.3); }
        .knw-ithaca__swatch-name {
          font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.6); margin-top: 12px; font-weight: 600;
        }

        /* slider */
        .knw-ithaca__slider {
          position: relative; overflow: hidden;
          min-height: 420px;
        }
        @media (min-width: 860px) { .knw-ithaca__slider { min-height: unset; } }
        .knw-ithaca__slides {
          display: flex; height: 100%;
          transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .knw-ithaca__slide {
          flex: 0 0 100%; height: 100%;
        }
        .knw-ithaca__slide img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }
        .knw-ithaca__arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(0,0,0,0.35); color: #fff; border: none;
          width: 44px; height: 44px; border-radius: 50%;
          font-size: 18px; cursor: pointer; transition: background .2s;
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
        }
        .knw-ithaca__arrow:hover { background: rgba(0,0,0,0.6); }
        .knw-ithaca__arrow--prev { left: 16px; }
        .knw-ithaca__arrow--next { right: 16px; }

        /* ── try this ── */
        .knw-section--try-this {
          padding: 80px 0 64px; text-align: center;
          background: var(--taupe-lt);
        }
        .knw-section__title {
          font-family: var(--ff-serif);
          font-size: clamp(26px, 3.2vw, 40px); font-weight: 300;
          color: #fff; margin: 0 0 22px; line-height: 1.15;
        }
        .knw-section__body { font-size: 17px; line-height: 1.8; color: rgba(255,255,255,0.9); margin: 0; }

        /* ── FAQ ── */
        .knw-section--faq {
          padding: 0 0 80px;
          background: var(--taupe-lt);
        }
        .knw-faq__list { border-top: 1px solid rgba(255,255,255,0.3); }
        .knw-faq__item { border-bottom: 1px solid rgba(255,255,255,0.3); }
        .knw-faq__toggle {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; padding: 22px 0;
          font-family: var(--ff-sans); font-size: 16px; font-weight: 600;
          color: #fff; text-align: left; transition: color .2s;
        }
        .knw-faq__toggle:hover { color: rgba(255,255,255,0.75); }
        .knw-faq__icon {
          flex-shrink: 0; width: 28px; text-align: center;
          font-size: 24px; font-weight: 300; color: rgba(255,255,255,0.7);
        }
        .knw-faq__answer {
          margin: 0; padding: 0 0 24px;
          font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.9);
        }
        .knw-faq__answer p { margin: 0; }

        /* ── CTA ── */
        .knw-cta-section {
          background: var(--taupe); padding: 96px 0 112px;
        }
        .knw-cta__title {
          font-family: var(--ff-serif);
          font-size: clamp(28px, 4vw, 48px); font-weight: 300;
          color: #fff; margin: 0 0 18px; line-height: 1.1;
        }
        .knw-cta__body { font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.85); margin: 0 0 40px; }
        .knw-cta__btn {
          display: inline-block; font-size: 12px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.14em;
          background: var(--espresso); color: #fff;
          padding: 16px 42px; border-radius: 3px; text-decoration: none;
          transition: background .25s, transform .2s;
        }
        .knw-cta__btn:hover { background: #1d1d1f; transform: translateY(-2px); }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .knw-hero         { height: 55vh; min-height: 360px; }
          .knw-hero__overlay { padding-bottom: 40px; }
          .knw-section--intro { padding: 52px 0 44px; }
          .knw-section--try-this { padding: 52px 0 44px; }
          .knw-section--faq  { padding: 0 0 60px; }
          .knw-cta-section   { padding: 64px 0 72px; }
          .knw-split__inner  { padding: 48px 24px; }
          .knw-fullscreen    { height: 50vh; }
          .knw-ithaca__content { padding: 48px 24px; }
        }
      `}</style>
    </motion.div>
  )
}
