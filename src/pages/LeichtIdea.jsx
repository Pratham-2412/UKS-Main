import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ─── Data ─────────────────────────────────────────────────────── */

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'vero',
    x: '77.3%',
    y: '44.27%',
    title: 'Glass display cabinet VERO',
    desc: 'Discover how VERO glass display cabinets make your kitchen planning efficient and flexible.',
    img: `${CAISY}/4dbfa34e-493b-454a-b42c-2090bafef84f/ae5f4b4f-736c-4a9d-9e01-c250f9aa8469/0890305Idea002.jpg`,
    link: '#',
    linkLabel: 'Discover',
    dir: 'bottom',
  },
  {
    id: 'ovens',
    x: '58.2%',
    y: '53.32%',
    title: 'Gaggenau Ovens',
    desc: 'Discover premium Gaggenau ovens for perfect kitchen planning.',
    img: `${CAISY}/a7580583-814b-411b-b92a-a8981911d1ee/258cebe2-2f74-451a-87a4-b434ab04e30c/0890307Idea002copy.jpeg`,
    link: '#',
    linkLabel: 'Discover Ovens',
    dir: 'bottom',
  },
  {
    id: 'cooking',
    x: '40.6%',
    y: '60.25%',
    title: 'Vario cooking appliances Series 400',
    desc: 'Vario cooking appliances Series 400, create your own individual, uniform work surface from Gaggenau.',
    img: `${CAISY}/bb25104c-32fc-4929-a5fc-58bdfeb36d94/83a97064-c672-4c55-b93f-ca74a834f602/0890303Idea002copy.jpeg`,
    link: '#',
    linkLabel: 'Discover',
    dir: 'top',
  },
  {
    id: 'slideaway',
    x: '87.1%',
    y: '57.85%',
    title: 'Slide-away door cabinet',
    desc: 'Slide-away door cabinets with pull-outs, design your modern, functional kitchen with storage space.',
    img: `${CAISY}/fce67ddc-c6a5-4dc4-9280-e92db62a937f/81229291-b23e-4577-bd55-7d446a5fef87/0890304Idea002.jpg`,
    link: '#',
    linkLabel: 'Discover',
    dir: 'left',
  },
]

const ideaColors = [
  {
    code: 'PM 170',
    name: 'sandy white',
    img: `${CAISY}/e8ee519f-518b-49ee-8bfa-fc0588ee84d0/9f466e12-b7a1-4ea4-8cb5-700460bb1822/IDEAPM170sandweiretuschiert.png`,
  },
  {
    code: 'PM 171',
    name: 'almond grey',
    img: `${CAISY}/0bb41305-d2a1-4516-bbbe-cf178754b436/d497a1eb-72f8-4931-b0fa-3917e872df6a/IDEAmandelgrau.png`,
  },
  {
    code: 'PM 172',
    name: 'sage green',
    img: `${CAISY}/52ad9ff6-b4d1-426b-9fc4-58b284978e15/30332657-0588-46dc-940c-36bc81eeb581/IDEAPM172salbeigrnretuschiert.png`,
  },
  {
    code: 'PM 173',
    name: 'crimson',
    img: `${CAISY}/5f895791-cd39-4077-b8fc-010b230a6a8e/4260fd32-0843-402e-b31d-581c55cadffb/IDEAKarminrotretuschiert.png`,
  },
]

const meturoColors = [
  {
    code: 'VM 075v',
    name: 'satin platinum',
    img: `${CAISY}/a2d73718-67a6-4f5f-9adf-bf343880e838/dcfb9846-b9e5-4981-b6e3-9096eaf7e429/METUROVM075satinplatinretuschiert.png`,
  },
  {
    code: 'VM 076v',
    name: 'satin copper',
    img: `${CAISY}/1761a8e3-f050-437a-a5a9-4e3cd49d7b07/79ecdc5a-a45a-4ef5-8bc0-d99774cf9b98/METUROVM076satinkupferretuschiert.png`,
  },
  {
    code: 'VM 077v',
    name: 'satin graphite',
    img: `${CAISY}/27a89311-fc95-47c9-9af4-87f7b2416687/d1e6947e-ad2c-4240-b2d7-524aca92e917/METUROVM077satingraphitretuschiert.png`,
  },
]

const accordionItems = [
  {
    id: 'programme',
    num: '01',
    title: 'Programme',
    content: (
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--charcoal)' }}>
        IDEA | ORLANDO | ROCCA | CLASSIC-FS
      </p>
    ),
  },
  {
    id: 'colours',
    num: '02',
    title: 'Colours',
    content: (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
          <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden' }}>
            <img
              src={`${CAISY}/7771e802-271b-43cc-954a-0299e9bfd21d/5920d8b3-5805-4122-a4b2-4da4089f1429/171ALMONDGREY.png`}
              alt="171 almond grey"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)' }}>171 almond grey</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
          <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden' }}>
            <img
              src={`${CAISY}/0e7895ba-0eb0-42fb-ac69-08459718c686/1a1ca6b0-f07a-4685-8619-57fe2d6a557a/256CELANOWALNUT.png`}
              alt="256 celano walnut"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)' }}>256 celano walnut</span>
        </div>
      </div>
    ),
  },
  {
    id: 'worktop',
    num: '03',
    title: 'Worktop',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontSize: '14px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)' }}>ROCCA, a natural stone program</p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '180px' }}>
            <div style={{ width: '100%', aspectRatio: '833/539', borderRadius: '4px', overflow: 'hidden' }}>
              <img
                src={`${CAISY}/3adadab6-117f-4035-9129-0b4d27ca0dbe/7246aff9-3beb-4e3d-bddc-bd4312b60a64/684WHITEFANTASYSANDED.png`}
                alt="684 white fantasy sanded"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--gray-mid)', fontFamily: 'var(--font-sans)' }}>684 white fantasy sanded</span>
          </div>
        </div>
      </div>
    ),
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/3afd8ad1-729b-4951-ba32-b216ba6fc45f/72b71e1f-2932-48f8-ae65-0f9c666625f7/0890301Idea003.jpg?width=1200`,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/0d9259d8-749a-42df-b235-3967aa116571/9f03937b-8d76-4c08-80b9-b49775a0a0eb/0880301FotoproduktionRahmenfront032.jpg?width=1200`,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1200`,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/fd359af4-f618-4c04-ac5d-b9ab4f957855/fc20fca3-5dfa-403a-a9fb-0b93b621bae9/TOPOSCLASSICFS03.jpg?width=1200`,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht',
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
  }
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function LeichtIdea() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)
  const sliderRef = useRef(null)

  const toggleAccordion = (id) => setOpenAccordion(prev => prev === id ? null : id)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.idea2-kcard')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 28
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="idea-page"
    >

      {/* ── 1. HERO with aspect-ratio hotspot container ───────────── */}
      <section className="idea-hero2">
        {/* Aspect-ratio wrapper keeps hotspot % coords stable */}
        <div className="idea-hero2__aspect">
          <img
            src={`${CAISY}/ed5099bf-c2cd-4c69-adf8-b660889c596c/cee7b3ea-a826-4503-bc47-6e049a9c882f/0890301Idea003.jpg`}
            alt="LEICHT IDEA kitchen concept"
            className="idea-hero2__img"
          />

          {/* Hotspots positioned by percentage inside aspect-ratio box */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="idea-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="idea-hs__btn" aria-label={spot.title}>
                <span className="idea-hs__ring" />
                <span className="idea-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`idea-hs__tip idea-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="idea-hs__tip-img">
                      <img src={spot.img} alt={spot.title} />
                    </div>
                    <h4>{spot.title}</h4>
                    <p>{spot.desc}</p>
                    <a href={spot.link} className="idea-hs__tip-link">{spot.linkLabel} →</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. INTRO ─────────────────────────────────────────────── */}
      <section className="idea2-intro">
        <div className="idea2-intro__inner container">
          <div className="idea2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Idea</span>
            </nav>
            <h4 className="idea2-intro__prog">IDEA | ORLANDO | ROCCA | CLASSIC-FS</h4>
            <p className="idea2-intro__body">
              IDEA combines the aesthetics of glass with the advantages of a high-quality glass acrylic.
              The matt surface reveals a special depth effect – an interplay of transparency, gloss and opacity.
              With IDEA, the kitchen acquires an elegant calm, enhanced by precise details and clean lines.
            </p>
          </div>
          <div className="idea2-intro__imgs">
            <div className="idea2-intro__img idea2-intro__img--wide">
              <img
                src={`${CAISY}/8c32741b-4136-449b-91e0-d1dbe4887ce6/7b30b63a-6251-47b9-9a4d-c9928866a8cd/0890303Idea002.jpg`}
                alt="IDEA kitchen wide view"
              />
            </div>
            <div className="idea2-intro__img idea2-intro__img--tall">
              <img
                src={`${CAISY}/00f1e2ca-fbdd-4399-b033-a2d5496f6b83/2f707dcd-0b40-4487-b2d6-b6e9baef99f2/image53.png`}
                alt="IDEA detail close-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. IDEA COLORS ───────────────────────────────────────── */}
      <section className="idea2-colors">
        <div className="container">
          <h2 className="idea2-colors__heading">IDEA in four modern colors</h2>
          <div className="idea2-colors__grid">
            {ideaColors.map((c, i) => (
              <motion.div
                key={c.code}
                className="idea2-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="idea2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="idea2-swatch__label">
                  <span className="idea2-swatch__code">PM {c.code.replace('PM ', '')}</span>
                  <span className="idea2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ARCHITECTURE MEETS TRANQUILITY ────────────────────── */}
      <section className="idea2-arch">
        <div className="idea2-arch__left">
          <div className="idea2-arch__left-inner">
            <h2 className="idea2-arch__heading">Architecture Meets Tranquillity</h2>
            <p className="idea2-arch__body">
              Now more than ever, as our homes become true places of retreat, the choice of the right materials
              gains importance. The kitchen is no longer seen merely as a functional space but as an integral
              part of the overall architectural design – a place that radiates permanence and calm.
            </p>
          </div>
        </div>
        <div className="idea2-arch__right">
          <img
            src={`${CAISY}/80aaecda-55fb-44ea-b2f3-ce133a6fa479/854b3012-6da5-47bd-82cb-32003c49b7d7/0890300Idea001.webp`}
            alt="Architecture meets tranquillity"
          />
        </div>
      </section>

      {/* ── 5. MATERIAL THAT INSPIRES (parallax overlay) ─────────── */}
      <section className="idea2-material">
        <div className="idea2-material__bg">
          <img
            src={`${CAISY}/0483b0f5-f16f-421d-a0a8-8ab407afde37/fbfd6985-727c-4aa4-820f-5175d383f5b5/0890302Idea003.jpg`}
            alt="Material background"
          />
        </div>
        <div className="idea2-material__overlay">
          <div className="idea2-material__card idea2-material__card--text">
            <span className="idea2-material__eyebrow">Material that inspires</span>
            <h2 className="idea2-material__title">Elegance in Every Detail</h2>
            <p className="idea2-material__sub">Glass acrylic for timeless kitchens</p>
            <p className="idea2-material__body">
              IDEA is based on a high-quality acrylic glass surface available in four carefully selected solid colours.
              The matte, clear surface resembles glass but offers maximum practicality: it is scratch-resistant,
              impact-proof, and UV-resistant. The interplay of transparency, gloss, and opacity gives every kitchen
              a lively depth, while the colour layer beneath the surface intensifies the hue. This material combines
              elegance, durability, and a distinctive presence—perfect for kitchens that harmoniously blend design
              and functionality.
            </p>
          </div>
          <div className="idea2-material__card idea2-material__card--img">
            <img
              src={`${CAISY}/831612cb-fdbf-41a3-8756-c71d3d7df977/e4573244-b03e-48bc-a345-73c7374018a9/0834606ideaDetail002.jpg`}
              alt="Elegance in every detail"
            />
          </div>
        </div>
      </section>

      {/* ── 6. PRACTICAL AND VERSATILE PULLOUTS ──────────────────── */}
      <section className="idea2-pullouts">
        <div className="idea2-pullouts__img">
          <img
            src={`${CAISY}/2ef79f8b-038d-4155-948e-19da08870ed2/3e316d03-87df-4bc3-b113-bb7c26fda409/0890304Idea002.jpg`}
            alt="Practical and versatile pullouts"
          />
        </div>
        <div className="idea2-pullouts__text">
          <span className="idea2-pullouts__eyebrow">Slide-away door cupboard for maximum storage space</span>
          <h2 className="idea2-pullouts__heading">Practical and versatile pullouts</h2>
          <p className="idea2-pullouts__sub">Perfect solution for modern kitchens</p>
          <p className="idea2-pullouts__body">
            Slide-away door cabinets create valuable storage space in the kitchen and combine functionality with
            homely design. Thanks to the innovative slide-away door technology, the doors disappear into pockets
            at the side and allow free access to the oven, microwave or dishwasher. The interior can be chosen
            in a wide range of surface colours and adapts harmoniously to any kitchen design. For devices with
            high Power, the integrated Safety box ensures maximum safety. A slide-away door cabinet is the ideal
            choice for anyone who wants to plan their kitchen in a space-saving, modern and comfortable way.
          </p>
          <Link to="/contact" className="idea2-pullouts__btn">Discover</Link>
        </div>
      </section>

      {/* ── 7. METURO SPLIT ──────────────────────────────────────── */}
      <section className="idea2-meturo">
        <div className="idea2-meturo__left">
          <div className="idea2-meturo__left-inner">
            <h2 className="idea2-meturo__heading">METURO – Semi-Gloss Acrylic Surfaces</h2>
            <p className="idea2-meturo__body">
              METURO combines minimalist elegance with the highest functionality. The opaque, satin acrylic surface
              is easy to clean, scratch-resistant and anti bacterial. Light is absorbed diffusely, creating a subtle
              depth effect and calm presence. In satin platinum, satin graphite and satin copper, METURO is a perfect
              fit for urban-minimalist kitchens and complements the IDEA collection for flexible, timeless and
              architecturally clean kitchen spaces.
            </p>
          </div>
        </div>
        <div className="idea2-meturo__right">
          <img
            src={`${CAISY}/10166157-9bfa-47da-b884-e5835a29c616/4bcdc79e-050d-420b-9dd9-b73706776d8c/METURO.jpg`}
            alt="METURO Semi-Gloss Acrylic Surfaces"
          />
        </div>
      </section>

      {/* ── 8. METURO COLORS ─────────────────────────────────────── */}
      <section className="idea2-mcolors">
        <div className="container">
          <h2 className="idea2-mcolors__heading">METURO in three modern colours</h2>
          <div className="idea2-mcolors__grid">
            {meturoColors.map((c, i) => (
              <motion.div
                key={c.code}
                className="idea2-swatch idea2-swatch--meturo"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="idea2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="idea2-swatch__label">
                  <span className="idea2-swatch__code">{c.code}</span>
                  <span className="idea2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. ACCORDION FAQ ─────────────────────────────────────── */}
      <section className="idea2-faq">
        <div className="container">
          <div className="idea2-faq__header">
            <h2 className="idea2-faq__heading">What makes the IDEA program special?</h2>
            <p className="idea2-faq__sub">
              Here you will find answers to the most frequently asked questions about our new IDEA program.
            </p>
          </div>
          <div className="idea2-faq__list">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div key={item.id} className={`idea2-acc${isOpen ? ' idea2-acc--open' : ''}`}>
                  <button
                    className="idea2-acc__trigger"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="idea2-acc__num">{item.num}</span>
                    <span className="idea2-acc__title">{item.title}</span>
                    <span className="idea2-acc__icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="idea2-acc__body" aria-hidden={!isOpen} style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="idea2-acc__content">
                      {item.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 10. DISCOVER KITCHENS — SLIDER WITH 3 CARDS PER SCREEN ─ */}
      <section className="idea2-discover">
        <div className="container">
          <div className="idea2-discover__header">
            <div>
              <h2 className="idea2-discover__heading">Discover Kitchens</h2>
              <p className="idea2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="idea2-discover__actions">
              <Link to="/kitchens/leicht" className="idea2-discover__all">All Kitchens →</Link>
              <div className="idea2-discover__nav">
                <button className="idea2-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="idea2-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="idea2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="idea2-kcard">
                <div className="idea2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="idea2-kcard__info">
                  <h3 className="idea2-kcard__title">{slide.title}</h3>
                  <p className="idea2-kcard__sub">{slide.sub}</p>
                  <span className="idea2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO2 ───────────────────────────────────────────── */
        .idea-hero2 {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .idea-hero2__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .idea-hero2__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .idea-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .idea-hs__btn {
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
        .idea-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .idea-hs__ring {
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
        .idea-hs__tip {
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
        .idea-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .idea-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .idea-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .idea-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .idea-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #333;
        }
        .idea-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .idea-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: #fff;
          margin-bottom: 6px;
        }
        .idea-hs__tip p {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .idea-hs__tip-link {
          font-family: var(--font-sans);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-light);
          text-decoration: none;
          font-weight: 600;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .idea2-intro {
          background: #fff;
          padding: 80px 0 0;
        }
        .idea2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .idea2-intro__text { padding-bottom: 80px; }
        .idea2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .idea2-intro__body {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .idea2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .idea2-intro__img { overflow: hidden; }
        .idea2-intro__img--wide  { aspect-ratio: 7/6; }
        .idea2-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .idea2-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .idea2-intro__img:hover img { transform: scale(1.04); }

        /* ── IDEA COLORS ─────────────────────────────────────── */
        .idea2-colors {
          background: var(--cream-light);
          padding: 100px 0;
        }
        .idea2-colors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          color: var(--charcoal);
          margin-bottom: 48px;
          font-weight: 400;
        }
        .idea2-colors__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .idea2-swatch { display: flex; flex-direction: column; gap: 0; }
        .idea2-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #eee;
        }
        .idea2-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .idea2-swatch:hover .idea2-swatch__img img { transform: scale(1.05); }
        .idea2-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .idea2-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .idea2-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── ARCHITECTURE ────────────────────────────────────── */
        .idea2-arch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }
        .idea2-arch__left {
          background-color: #979587d8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .idea2-arch__left-inner { max-width: 440px; }
        .idea2-arch__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: #fff;
          margin-bottom: 32px;
          line-height: 1.15;
        }
        .idea2-arch__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }
        .idea2-arch__right {
          overflow: hidden;
          aspect-ratio: 119 / 169;
          min-height: 100%;
        }
        .idea2-arch__right img { width: 100%; height: 100%; object-fit: cover; }

        /* ── MATERIAL ────────────────────────────────────────── */
        .idea2-material {
          position: relative;
          min-height: 640px;
          overflow: hidden;
        }
        .idea2-material__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .idea2-material__bg img { width: 100%; height: 100%; object-fit: cover; }
        .idea2-material__overlay {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 640px;
          align-items: stretch;
        }
        .idea2-material__card { display: flex; flex-direction: column; justify-content: center; }
        .idea2-material__card--text {
          background: #867a70ee;
          padding: 80px 64px;
        }
        .idea2-material__card--img { overflow: hidden; }
        .idea2-material__card--img img { width: 100%; height: 100%; object-fit: cover; }
        .idea2-material__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 16px;
          display: block;
        }
        .idea2-material__title {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .idea2-material__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin-bottom: 28px;
          letter-spacing: 0.04em;
        }
        .idea2-material__body {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }

        /* ── PULLOUTS ────────────────────────────────────────── */
        .idea2-pullouts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 580px;
          background: var(--cream-light);
        }
        .idea2-pullouts__img { overflow: hidden; }
        .idea2-pullouts__img img { width: 100%; height: 100%; object-fit: cover; }
        .idea2-pullouts__text {
          padding: 80px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        .idea2-pullouts__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .idea2-pullouts__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.15;
        }
        .idea2-pullouts__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-mid);
        }
        .idea2-pullouts__body {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .idea2-pullouts__btn {
          display: inline-block;
          margin-top: 12px;
          padding: 14px 36px;
          border: 1px solid var(--charcoal);
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--charcoal);
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
          align-self: flex-start;
        }
        .idea2-pullouts__btn:hover {
          background: var(--charcoal);
          color: #fff;
        }

        /* ── METURO ──────────────────────────────────────────── */
        .idea2-meturo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }
        .idea2-meturo__left {
          background-color: #796961d8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .idea2-meturo__left-inner { max-width: 440px; }
        .idea2-meturo__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .idea2-meturo__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }
        .idea2-meturo__right { overflow: hidden; }
        .idea2-meturo__right img { width: 100%; height: 100%; object-fit: cover; }

        /* ── METURO COLORS ───────────────────────────────────── */
        .idea2-mcolors {
          background: var(--cream-dark);
          padding: 100px 0;
        }
        .idea2-mcolors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 48px;
        }
        .idea2-mcolors__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .idea2-swatch--meturo .idea2-swatch__img { aspect-ratio: 1 / 1; }

        /* ── FAQ ACCORDION ───────────────────────────────────── */
        .idea2-faq {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .idea2-faq__header { margin-bottom: 64px; max-width: 680px; }
        .idea2-faq__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .idea2-faq__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--gray-mid);
          line-height: 1.6;
        }
        .idea2-faq__list { border-top: 1px solid var(--border); }
        .idea2-acc { border-bottom: 1px solid var(--border); }
        .idea2-acc__trigger {
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
        .idea2-acc__num {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-light);
          min-width: 28px;
        }
        .idea2-acc__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          flex: 1;
        }
        .idea2-acc__icon {
          font-family: var(--font-sans);
          font-size: 22px;
          color: var(--charcoal);
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .idea2-acc--open .idea2-acc__icon { transform: rotate(0deg); }
        .idea2-acc__body {
          overflow: hidden;
        }
        .idea2-acc__content {
          padding: 0 56px 36px;
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .idea2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .idea2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .idea2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .idea2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .idea2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .idea2-discover__all {
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
        .idea2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .idea2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .idea2-discover__nav-btn {
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
        .idea2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .idea2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .idea2-discover__track::-webkit-scrollbar {
          display: none;
        }
        .idea2-kcard {
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
        .idea2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .idea2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .idea2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .idea2-kcard:hover .idea2-kcard__img img {
          transform: scale(1.06);
        }
        .idea2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .idea2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .idea2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .idea2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .idea2-kcard:hover .idea2-kcard__link {
          color: var(--gold-dark);
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .idea2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .idea2-colors__grid { grid-template-columns: repeat(2, 1fr); }
          .idea2-arch { grid-template-columns: 1fr; }
          .idea2-arch__left { padding: 60px 32px; }
          .idea2-arch__right { aspect-ratio: unset; min-height: 400px; }
          .idea2-material__overlay { grid-template-columns: 1fr; }
          .idea2-material__card--text { padding: 60px 32px; }
          .idea2-material__card--img { min-height: 320px; }
          .idea2-pullouts { grid-template-columns: 1fr; }
          .idea2-pullouts__img { min-height: 360px; }
          .idea2-pullouts__text { padding: 60px 32px; }
          .idea2-meturo { grid-template-columns: 1fr; }
          .idea2-meturo__left { padding: 60px 32px; }
          .idea2-meturo__right { min-height: 360px; }
          .idea2-mcolors__grid { grid-template-columns: repeat(2, 1fr); }
          .idea2-faq__heading { font-size: 32px; }
          .idea2-discover__heading { font-size: 32px; }
          .idea2-discover__track { gap: 20px; }
          .idea2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .idea2-colors__grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .idea2-mcolors__grid { grid-template-columns: 1fr; }
          .idea2-acc__title { font-size: 20px; }
          .idea2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
