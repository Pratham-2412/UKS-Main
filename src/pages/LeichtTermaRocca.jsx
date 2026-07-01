import UKS_LEICHT_TERMA_ROCCA_FRONTVERLNGERUNG from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-Frontverlngerung.png';
import UKS_LEICHT_TERMA_ROCCA_NATURSTEIN from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-Naturstein.png';
import UKS_LEICHT_TERMA_ROCCA_OPALTEST from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-opaltest.jpg';
import UKS_LEICHT_TERMA_ROCCA_360VMARAVALKASTANIE1120X1600150DPI from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-360vmaravalkastanie1120x1600150dpi.jpg';
import UKS_LEICHT_TERMA_ROCCA_0890301IDEA003 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0890301Idea003.jpg';
import UKS_LEICHT_TERMA_ROCCA_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_TERMA_ROCCA_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_TERMA_ROCCA_TOPOSCLASSICFS03 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_TERMA_ROCCA_TP211126 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-tp211126.jpg';
import UKS_LEICHT_TERMA_ROCCA_0660203WELLENGRIFFFRONT002COPY from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0660203Wellengrifffront002copy.jpg';
import UKS_LEICHT_TERMA_ROCCA_TECHNISCHEZEICHNUNGOBERSCHRANKUNDUNTERSCHRANK from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-TechnischeZeichnungOberschrankundUnterschrank.png';
import UKS_LEICHT_TERMA_ROCCA_TECHNISCHEZEICHNUNGHOCHSCHRANK from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-TechnischeZeichnungHochschrank.png';
import UKS_LEICHT_TERMA_ROCCA_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_TERMA_ROCCA_0690103FOTOPRODUKTIONK7015COPY from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0690103Fotoproduktionk7015copy.jpg';
import UKS_LEICHT_TERMA_ROCCA_ADOBESTOCK514189127 from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-AdobeStock514189127.jpeg';
import UKS_LEICHT_TERMA_ROCCA_0690102FOTOPRODUKTIONK7003COPY from '../assets/uks-leicht-terma-rocca/uks-leicht-terma-rocca-0690102Fotoproduktionk7003copy.jpg';
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'


const hotspots = [
  {
    id: 'overhang',
    x: '33.2%',
    y: '26.02%',
    title: 'Upper Cabinet Overhang',
    desc: 'We offer customized tall cabinet lines that fit specific room heights without the need for a ceiling panel. By making the fronts adjustable in height, we ensure a seamless and high-quality kitchen design.',
    img: UKS_LEICHT_TERMA_ROCCA_FRONTVERLNGERUNG,
    dir: 'bottom',
  },
  {
    id: 'stone',
    x: '24.3%',
    y: '68.03%',
    title: 'Natural Stone Worktop',
    desc: 'Natural stone countertop ROCCA-C GI in the color 690 breccia imperiale – available in thicknesses of 2.6 cm, 4 cm, and 6 cm.',
    img: UKS_LEICHT_TERMA_ROCCA_NATURSTEIN,
    dir: 'top',
  },
  {
    id: 'pearl',
    x: '57.5%',
    y: '41.72%',
    title: 'PEARL Program in Color 071 opal',
    desc: 'The PEARL program by LEICHT is presented in the elegant color 071 opal, providing a soft, matte contrast to the natural wood and stone textures.',
    img: UKS_LEICHT_TERMA_ROCCA_OPALTEST,
    dir: 'bottom',
  },
  {
    id: 'terma',
    x: '35.8%',
    y: '52.89%',
    title: '276 TERMA-Q',
    desc: 'Program 276 TERMA in color 360v maraval kastanie (chestnut) creates an elegant, warm look, paired here with the handle in color 417 steel black.',
    img: UKS_LEICHT_TERMA_ROCCA_360VMARAVALKASTANIE1120X1600150DPI,
    dir: 'right',
  },
]

const swatches = [
  {
    code: '276 TERMA',
    name: '360v maraval kastanie (chestnut wood veneer)',
    img: UKS_LEICHT_TERMA_ROCCA_360VMARAVALKASTANIE1120X1600150DPI,
  },
  {
    code: 'ROCCA-C',
    name: '690 breccia imperiale (natural stone worktop)',
    img: UKS_LEICHT_TERMA_ROCCA_NATURSTEIN,
  },
  {
    code: 'PEARL',
    name: '071 opal (soft matte lacquer surface)',
    img: UKS_LEICHT_TERMA_ROCCA_OPALTEST,
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: UKS_LEICHT_TERMA_ROCCA_0890301IDEA003,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: UKS_LEICHT_TERMA_ROCCA_0880301FOTOPRODUKTIONRAHMENFRONT032,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: UKS_LEICHT_TERMA_ROCCA_0900305HYGGEHELLCYAN002,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: UKS_LEICHT_TERMA_ROCCA_TOPOSCLASSICFS03,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht/terma-rocca',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/e55fa4d1-4a8b-4ed8-a6e3-c28839a9f659/0da1e8dc-ff21-456e-9ece-e11dc03429d6/0480101Kyoto012nah.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/b3e8255a-1826-4b17-a901-2f09698a4c09/4342f9b6-a670-46dc-95ce-dd82d936f12f/0470101BAHIA026.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/77d147d2-6c6a-403d-9978-6d5bbfe8c587/ac6b25b5-a13e-4e92-810a-a4e3c667673f/713269M01103316j19.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/64aa5c14-7364-49ea-92f2-193cd9996d8c/1789ba52-06f9-47c8-b390-f5853de36dea/219213269M01298025312j18.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/0797a2ec-ddba-43fd-925d-d524003c8000/2297febd-3a9c-4c86-b3d8-d339204370f1/753283213M01120335NCSj22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
]

export default function LeichtTermaRocca() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)
  const sliderRef = useRef(null)

  const toggleAccordion = (id) => setOpenAccordion(prev => prev === id ? null : id)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.terma2-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const accordionItems = [
    {
      id: 'colours',
      num: '01',
      title: 'In which colors is the handle available?',
      content: (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '15px', color: 'var(--charcoal-soft)', fontFamily: 'var(--font-sans)', lineHeight: '1.6', marginBottom: '16px', width: '100%' }}>
            The specially integrated Handle concept Q profile is available in two selected premium finishes: 416 bronze dark and 417 steel black.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
            <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src={UKS_LEICHT_TERMA_ROCCA_TP211126}
                alt="416 Bronze Dark / Steel Black"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', textAlign: 'center' }}>Bronze Dark / Steel Black</span>
          </div>
        </div>
      ),
    },
    {
      id: 'programme',
      num: '02',
      title: 'Available programs',
      content: (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <p style={{ fontSize: '15px', color: 'var(--charcoal-soft)', fontFamily: 'var(--font-sans)', lineHeight: '1.6', marginBottom: '16px', width: '100%' }}>
            The Handle concept Q is exclusively available for matte lacquered programs (such as 211 CLASSIC FF-Q) and veneered programs (such as 276 TERMA-Q). This emphasizes the high-end materials and clean integration.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
            <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src={UKS_LEICHT_TERMA_ROCCA_0660203WELLENGRIFFFRONT002COPY}
                alt="Lacquered program front details"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', textAlign: 'center' }}>211 CLASSIC FF-Q</span>
          </div>
        </div>
      ),
    },
    {
      id: 'arrangements',
      num: '03',
      title: 'Which handle arrangements are allowed?',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <p style={{ fontSize: '15px', color: 'var(--charcoal-soft)', fontFamily: 'var(--font-sans)', lineHeight: '1.6' }}>
            The handle arrangement of handle concept Q is possible for base cabinets, tall cabinets, and wall cabinets. This allows complete consistency across the entire kitchen.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
              <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img
                  src={UKS_LEICHT_TERMA_ROCCA_TECHNISCHEZEICHNUNGOBERSCHRANKUNDUNTERSCHRANK}
                  alt="Wall and base cabinet arrangements"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', textAlign: 'center' }}>Wall & Base Cabinets</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
              <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <img
                  src={UKS_LEICHT_TERMA_ROCCA_TECHNISCHEZEICHNUNGHOCHSCHRANK}
                  alt="Tall cabinet arrangements"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)', textAlign: 'center' }}>Tall Cabinets</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="terma-page"
    >
      {/* ── 1. HERO with aspect-ratio hotspot container ───────────── */}
      <section className="terma-hero2">
        <div className="terma-hero2__aspect">
          <img
            src={UKS_LEICHT_TERMA_ROCCA_0690101FOTOPRODUKTIONK7017OBENHELLER}
            alt="LEICHT TERMA ROCCA PEARL kitchen concept"
            className="terma-hero2__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="terma-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="terma-hs__btn" aria-label={spot.title}>
                <span className="terma-hs__ring" />
                <span className="terma-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`terma-hs__tip terma-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="terma-hs__tip-img">
                      <img src={spot.img} alt={spot.title} />
                    </div>
                    <h4>{spot.title}</h4>
                    <p>{spot.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="terma2-intro">
        <div className="terma2-intro__inner container">
          <div className="terma2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Terma Rocca Pearl</span>
            </nav>
            <h4 className="terma2-intro__prog">TERMA | ROCCA | PEARL</h4>
            <p className="terma2-intro__body">
              The Leicht Terma / Rocca / Pearl kitchen design showcases the innovative Handle Concept Q. Seamlessly blending organic forms with premium materials, this concept pairs fine-grained chestnut wood veneers with rich, textured natural stone. Specially developed recess profiles integrate the handle flush with the cabinet door, creating a clean, architectural line that represents the peak of German precision engineering and timeless interior design.
            </p>
          </div>
          <div className="terma2-intro__imgs">
            <div className="terma2-intro__img terma2-intro__img--wide">
              <img
                src={UKS_LEICHT_TERMA_ROCCA_0690103FOTOPRODUKTIONK7015COPY}
                alt="TERMA ROCCA kitchen overview"
              />
            </div>
            <div className="terma2-intro__img terma2-intro__img--tall">
              <img
                src={UKS_LEICHT_TERMA_ROCCA_ADOBESTOCK514189127}
                alt="Terma detail close-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TERMA ROCCA MATERIALS ─────────────────────────────── */}
      <section className="terma2-colors">
        <div className="container">
          <h2 className="terma2-colors__heading">TERMA ROCCA in three premium materials</h2>
          <div className="terma2-colors__grid">
            {swatches.map((c, i) => (
              <motion.div
                key={c.code}
                className="terma2-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="terma2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="terma2-swatch__label">
                  <span className="terma2-swatch__code">{c.code}</span>
                  <span className="terma2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PERFECT FUSION ────────────────────────────────────── */}
      <section className="terma2-arch">
        <div className="terma2-arch__left">
          <div className="terma2-arch__left-inner">
            <h2 className="terma2-arch__heading">Perfect Fusion</h2>
            <p className="terma2-arch__body">
              Our handle concept Q is individually crafted, refined, and completed with precise front mounting. Instead of being mounted as a separate element on the furniture front, the specially developed handle seamlessly integrates into the wavy recess of the door. This thoughtful design accentuates the organic aesthetics of the series, making each piece of furniture a true eye-catcher.
            </p>
          </div>
        </div>
        <div className="terma2-arch__right">
          <img
            src={UKS_LEICHT_TERMA_ROCCA_0690103FOTOPRODUKTIONK7015COPY}
            alt="Perfect Fusion handle concept"
          />
        </div>
      </section>

      {/* ── 5. VERSATILE PLANNING ────────────────────────────────── */}
      <section className="terma2-material">
        <div className="terma2-material__overlay">
          <div className="terma2-material__card terma2-material__card--img">
            <img
              src={UKS_LEICHT_TERMA_ROCCA_0690102FOTOPRODUKTIONK7003COPY}
              alt="Handle concept Q integration"
            />
          </div>
          <div className="terma2-material__card terma2-material__card--text">
            <span className="terma2-material__eyebrow">PLANNING FREEDOM</span>
            <h2 className="terma2-material__title">Versatile planning possibilities</h2>
            <p className="terma2-material__sub">Consistent, stylish solution for the entire kitchen</p>
            <p className="terma2-material__body">
              The handle concept Q is available for the PRIMO and PRIMO P1 design lines and is suitable for base, tall, and wall cabinets. This offers a consistent, stylish solution for the entire kitchen design. The handle can be accessed from both the top and bottom due to its chosen position and is available in two colors: 416 dark bronze and 417 steel black.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. ACCORDION FAQ ─────────────────────────────────────── */}
      <section className="terma2-faq">
        <div className="container">
          <div className="terma2-faq__header">
            <h2 className="terma2-faq__heading">Technical Details - Handle concept Q</h2>
            <p className="terma2-faq__sub">
              Here you will find technical details about our innovative Handle Concept Q.
            </p>
          </div>
          <div className="terma2-faq__list">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div key={item.id} className={`terma2-acc${isOpen ? ' terma2-acc--open' : ''}`}>
                  <button
                    className="terma2-acc__trigger"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="terma2-acc__num">{item.num}</span>
                    <span className="terma2-acc__title">{item.title}</span>
                    <span className="terma2-acc__icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="terma2-acc__body" aria-hidden={!isOpen} style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="terma2-acc__content">
                      {item.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 7. DISCOVER KITCHENS — SLIDER WITH 3 CARDS PER SCREEN ─ */}
      <section className="terma2-discover">
        <div className="container">
          <div className="terma2-discover__header">
            <div>
              <h2 className="terma2-discover__heading">Discover Kitchens</h2>
              <p className="terma2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="terma2-discover__actions">
              <Link to="/kitchens/leicht" className="terma2-discover__all">All Kitchens →</Link>
              <div className="terma2-discover__nav">
                <button className="terma2-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="terma2-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="terma2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="terma2-kcard">
                <div className="terma2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="terma2-kcard__info">
                  <h3 className="terma2-kcard__title">{slide.title}</h3>
                  <p className="terma2-kcard__sub">{slide.sub}</p>
                  <span className="terma2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO2 ───────────────────────────────────────────── */
        .terma-hero2 {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .terma-hero2__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .terma-hero2__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .terma-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .terma-hs__btn {
          width: 34px;
          height: 34px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .terma-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .terma-hs__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.7);
          animation: hs-pulse 2.2s ease-out infinite;
        }
        @keyframes hs-pulse {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .terma-hs__tip {
          position: absolute;
          width: 272px;
          background: rgba(18,18,16,0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
          z-index: 100;
          pointer-events: none;
        }
        .terma-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .terma-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .terma-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .terma-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .terma-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #333;
        }
        .terma-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .terma-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: #fff;
          margin-bottom: 6px;
        }
        .terma-hs__tip p {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          margin-bottom: 10px;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .terma2-intro {
          background: #fff;
          padding: 80px 0 0;
        }
        .terma2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .terma2-intro__text { padding-bottom: 80px; }
        .terma2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .terma2-intro__body {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .terma2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .terma2-intro__img { overflow: hidden; }
        .terma2-intro__img--wide  { aspect-ratio: 7/6; }
        .terma2-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .terma2-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .terma2-intro__img:hover img { transform: scale(1.04); }

        /* ── COLORS ──────────────────────────────────────────── */
        .terma2-colors {
          background: var(--cream-light);
          padding: 100px 0;
        }
        .terma2-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          color: var(--charcoal);
          margin-bottom: 48px;
          font-weight: 400;
        }
        .terma2-colors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .terma2-swatch { display: flex; flex-direction: column; gap: 0; }
        .terma2-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #eee;
        }
        .terma2-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .terma2-swatch:hover .terma2-swatch__img img { transform: scale(1.05); }
        .terma2-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .terma2-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .terma2-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── ARCHITECTURE ────────────────────────────────────── */
        .terma2-arch {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          min-height: 450px;
        }
        .terma2-arch__left {
          background-color: #796e65ee;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .terma2-arch__left-inner { max-width: 440px; }
        .terma2-arch__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 32px;
          line-height: 1.15;
        }
        .terma2-arch__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }
        .terma2-arch__right {
          overflow: hidden;
          aspect-ratio: 119 / 169;
          min-height: 100%;
        }
        .terma2-arch__right img { width: 100%; height: 100%; object-fit: cover; }

        /* ── MATERIAL ────────────────────────────────────────── */
        .terma2-material {
          position: relative;
          min-height: 450px;
          overflow: hidden;
        }
        .terma2-material__overlay {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          min-height: 450px;
          align-items: stretch;
        }
        .terma2-material__card { display: flex; flex-direction: column; justify-content: center; }
        .terma2-material__card--text {
          background: #8b7f74;
          padding: 80px 64px;
        }
        .terma2-material__card--img { overflow: hidden; }
        .terma2-material__card--img img { width: 100%; height: 100%; object-fit: cover; }
        .terma2-material__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 16px;
          display: block;
        }
        .terma2-material__title {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .terma2-material__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin-bottom: 28px;
          letter-spacing: 0.04em;
        }
        .terma2-material__body {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }

        /* ── FAQ ACCORDION ───────────────────────────────────── */
        .terma2-faq {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .terma2-faq__header { margin-bottom: 64px; max-width: 680px; }
        .terma2-faq__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .terma2-faq__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--gray-mid);
          line-height: 1.6;
        }
        .terma2-faq__list { border-top: 1px solid var(--border); }
        .terma2-acc { border-bottom: 1px solid var(--border); }
        .terma2-acc__trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .terma2-acc__num {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-light);
          min-width: 28px;
        }
        .terma2-acc__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          flex: 1;
        }
        .terma2-acc__icon {
          font-family: var(--font-sans);
          font-size: 22px;
          color: var(--charcoal);
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .terma2-acc--open .terma2-acc__icon { transform: rotate(0deg); }
        .terma2-acc__body {
          overflow: hidden;
        }
        .terma2-acc__content {
          padding: 0 56px 36px;
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .terma2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .terma2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .terma2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .terma2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .terma2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .terma2-discover__all {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid var(--gold);
          padding: 10px 24px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .terma2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .terma2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .terma2-discover__nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--white);
          color: var(--charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .terma2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .terma2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .terma2-discover__track::-webkit-scrollbar {
          display: none;
        }
        .terma2-kcard {
          flex: 0 0 calc((100% - 56px) / 3);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .terma2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .terma2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .terma2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .terma2-kcard:hover .terma2-kcard__img img {
          transform: scale(1.06);
        }
        .terma2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .terma2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .terma2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .terma2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .terma2-kcard:hover .terma2-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .terma-hero2__aspect { height: 60vh; min-height: 400px; }
          .terma2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .terma2-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .terma2-arch { grid-template-columns: 1fr; }
          .terma2-arch__left { padding: 60px 32px; }
          .terma2-arch__right { aspect-ratio: unset; min-height: 300px; }
          .terma2-material__overlay { grid-template-columns: 1fr; }
          .terma2-material__card--text { padding: 60px 32px; }
          .terma2-material__card--img { min-height: 260px; }
          .terma2-faq__heading { font-size: 32px; }
          .terma2-discover__heading { font-size: 32px; }
          .terma2-discover__track { gap: 20px; }
          .terma2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .terma2-colors__grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .terma2-acc__title { font-size: 20px; }
          .terma2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
