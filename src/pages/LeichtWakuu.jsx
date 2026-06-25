import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ─── Data ─────────────────────────────────────────────────────── */

const CAISY = 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb'

const hotspots = [
  {
    id: 'railing',
    x: '52.6%',
    y: '39.6%',
    title: 'Suspended railing',
    desc: 'The suspended light bridge combines design and function: space for kitchen accessories, plants and utensils, glare-free, continuously dimmable lighting from warm to cool white. Surfaces in stainless steel or black ensure harmonious integration into any cooking island.',
    img: `${CAISY}/07608b0c-da65-4208-9efa-9b93cdb7f728/09cee1a8-8784-4517-886b-c59d2b27144f/0880312FotoproduktionRahmenfront031copy.jpeg?width=600`,
    dir: 'bottom',
  },
  {
    id: 'vero',
    x: '68.1%',
    y: '51.5%',
    title: 'Glass display cabinet VERO',
    desc: 'Discover how VERO glass display cabinets make your kitchen planning efficient and flexible.',
    img: `${CAISY}/4dbfa34e-493b-454a-b42c-2090bafef84f/ae5f4b4f-736c-4a9d-9e01-c250f9aa8469/0890305Idea002.jpg?width=600`,
    dir: 'bottom',
  },
  {
    id: 'supporting',
    x: '24.6%',
    y: '70.9%',
    title: 'WAKUU Supporting Program',
    desc: 'Filigree design with a narrow Frame of just 10 mm – interpreted in a modern way in fine wood or high-quality lacquer.',
    img: `${CAISY}/d7b3e5c5-96cc-4343-914b-6cdadc9cd24f/1931fa88-5cf0-4dbb-8c06-16ce40cf67d9/0880304cFotoproduktionRahmenfront030.jpg?width=600`,
    dir: 'top',
  },
  {
    id: 'colours',
    x: '25.3%',
    y: '36.2%',
    title: 'WAKUU-FS: Variety of colours',
    desc: 'The WAKUU-FS lacquer variant offers a wide range of colours: standard LEICHT colours, RAL shades and exclusive Les Couleurs® Le Corbusier® colours open up a wide range of design possibilities, including six RAL shades from our Hygge colour concept for creative design.',
    img: `${CAISY}/a135fec1-ed45-4ad8-aef3-4c1c926a441d/92819c0c-9b07-44f5-9108-e6cbc013121e/0880311FotoproduktionRahmenfront029.jpg?width=600`,
    dir: 'top',
  },
]

const metallicShades = [
  {
    code: 'ME 163',
    name: 'cuprum',
    img: `${CAISY}/b803f275-37ea-4d32-b477-887df359d54a/d1ec0aec-5c0c-4d72-80cd-185a3b592cc1/ME163cuprum.png?width=400`,
  },
  {
    code: 'ME 164',
    name: 'auren',
    img: `${CAISY}/e0dd1e7c-0a5b-4027-a599-2d998f306838/2dc80391-2fd3-4643-b39b-cc599390839b/ME164auren.png?width=400`,
  },
  {
    code: 'ME 165',
    name: 'feron',
    img: `${CAISY}/f341fcb4-3a6b-4714-bc01-6575a9ebacf4/4f6f015f-0aad-4798-912b-3accc8e4c8b6/ME165feron.png?width=400`,
  },
  {
    code: 'ME 166',
    name: 'tanor',
    img: `${CAISY}/b813cd14-7229-4247-a81c-98f4c9dcbc39/171a1dd8-3768-4c12-8825-9d4b1d6ff006/ME166tanor.png?width=400`,
  },
]

const woodColors = [
  { code: '218', name: 'elm natural', img: `${CAISY}/e97ffbeb-e469-4a65-a1f4-8d68e57af090/13c8f3dc-bf94-4e0d-9a4a-62b1a4f17146/218ulmenatur1000x100096dpi.jpg?width=300` },
  { code: '221', name: 'textured oak abruzzo', img: `${CAISY}/1fa4bf12-1962-4a69-8323-730ab7b3cfa2/dcda4507-13f6-4789-856e-44f00617ea10/221struktureicheabruzzen800x80072dpi.jpg?width=300` },
  { code: '222', name: 'textured natural oak', img: `${CAISY}/fca36bff-7b41-4a24-bd74-153ab63aae3f/39152a57-e430-4e72-96c9-d67ae6cf5e90/222struktureichenatur800x80072dpi.jpg?width=300` },
  { code: '309', name: 'bergamo elm', img: `${CAISY}/d668b24d-40f7-4aab-aa42-c6016f919579/825ce0bc-c648-4e61-ab1a-3df15f336e5d/309bergamoulme800x800106dpi.jpg?width=300` },
  { code: '310', name: 'ash madeira', img: `${CAISY}/99d01694-69d6-4880-b94d-93b8bb9b34bf/bd8f00d8-4510-4a12-bc7d-7f3caac44cb3/310eschemadeira800x80072dpi.jpg?width=300` },
  { code: '312', name: 'walnut', img: `${CAISY}/d8e9304f-9305-4fec-8180-8fb866cb4397/a5e4b895-03c1-41b1-96c6-9b53f71f8d28/312hwalnuss1300x1500150dpi.jpg?width=300` },
  { code: '313', name: 'textured oak copper', img: `${CAISY}/b63c81ac-a2ff-448f-b581-49241cc9e931/2c91b508-cfd2-45aa-a601-9b1596bde1b5/313struktureichekupfer800x80072dpi.jpg?width=300` },
  { code: '315', name: 'northern oak', img: `https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/bc88eb7d-a459-4ecd-8df0-efbf005e03e0/1fb0770c-7fcd-455d-99cb-91ebc5acd959/315vnordeiche1150x1600150dpi.jpg?width=300` },
  { code: '316', name: 'textured oak marsh', img: `${CAISY}/db1d17ea-fd71-4658-b348-a33cd1dbb05a/977116b4-f083-49ee-91d5-d940b934ccf5/316hstruktureichemoor800x80072dpi.jpg?width=300` },
  { code: '319', name: 'alpine natural oak', img: `${CAISY}/620d9647-9985-4a26-883e-2ae2e9da619d/4a4e0c8b-b0ab-4271-9bb3-82dfe5816d03/319valpineichenatur1150x1600150dpi.jpg?width=300` },
  { code: '320', name: 'walnut natural', img: `${CAISY}/ed5c3373-07ab-4a65-9e89-d9d5309f5147/1e278287-fc61-4d5b-98e2-a7a030a61ea2/320vwalnussnatur1140x1600150dpi.jpg?width=300` },
]

const accordionItems = [
  {
    id: 'wood-colors',
    num: '01',
    title: 'Color Worlds',
    desc: 'Diversity that inspires – 11 wood colors',
    content: (
      <div className="wakuu-wood-grid">
        {woodColors.map((w) => (
          <div key={w.code} className="wakuu-wood-card">
            <div className="wakuu-wood-img">
              <img src={w.img} alt={w.name} />
            </div>
            <div className="wakuu-wood-info">
              <span className="wakuu-wood-code">{w.code}</span>
              <span className="wakuu-wood-name">{w.name}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'griprail',
    num: '02',
    title: 'WAKUU Form griprail colors',
    desc: 'Handle colours: 416 bronze dark, 417 steel black',
    content: (
      <div className="wakuu-faq-flex">
        <div className="wakuu-faq-text-col">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--charcoal)', marginBottom: '16px' }}>
            Choose from premium anodized surfaces to coordinate with wood fronts:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--gray-mid)' }}>
            <li>416 bronze dark (Anodized dark bronze)</li>
            <li>417 steel black (Anodized deep steel black)</li>
          </ul>
        </div>
        <div className="wakuu-faq-img-col">
          <img
            src={`${CAISY}/67820ded-aae3-4bad-9fe1-a5add8fb08d9/86a29b45-5578-4eff-8ab8-b359e65309c1/MG7582b.png?width=600`}
            alt="Wakuu Form griprail options"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'veneer',
    num: '03',
    title: 'WAKUU special feature',
    desc: 'Continuous veneer structure across cabinet configurations',
    content: (
      <div className="wakuu-faq-flex">
        <div className="wakuu-faq-text-col">
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--charcoal)', marginBottom: '16px' }}>
            Seamless wood matching:
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: 'var(--gray-mid)', lineHeight: '1.6' }}>
            The WAKUU front offers a continuous veneer layout across all cabinetry types. Whether tall unit runs, base drawers, or island paneling, the woodgrain flow is matched horizontally or vertically with extreme precision, creating a unified architectural surface.
          </p>
        </div>
        <div className="wakuu-faq-img-col">
          <img
            src={`${CAISY}/539267da-777b-4f90-b233-f571458eb4ab/e572c75e-4587-4aae-aa2a-58b11fea7eb6/0880304cFotoproduktionRahmenfront030.jpg?focal_point=39.32,60.80&width=600`}
            alt="Continuous veneer grain alignment"
          />
        </div>
      </div>
    ),
  },
]

const kitchenSlides = [
  {
    title: 'IDEA',
    sub: 'Acrylic glass elegance in transparent matte and glossy finishes.',
    img: `${CAISY}/3afd8ad1-729b-4951-ba32-b216ba6fc45f/72b71e1f-2932-48f8-ae65-0f9c666625f7/0890301Idea003.jpg?width=1200`,
    to: '/kitchens/leicht/idea',
  },
  {
    title: 'WAKUU',
    sub: 'Filigree framed fronts for modern kitchens.',
    img: `${CAISY}/0d9259d8-749a-42df-b235-3967aa116571/9f03937b-8d76-4c08-80b9-b49775a0a0eb/0880301FotoproduktionRahmenfront032.jpg?width=1200`,
    to: '/kitchens/leicht/wakuu',
  },
  {
    title: 'HYGGE',
    sub: 'Hygge: Experience peace, warmth and naturalness.',
    img: `${CAISY}/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1200`,
    to: '/kitchens/leicht/hygge',
  },
  {
    title: 'CURVED',
    sub: 'Curved side panels for smooth transitions.',
    img: `${CAISY}/fd359af4-f618-4c04-ac5d-b9ab4f957855/fc20fca3-5dfa-403a-a9fb-0b93b621bae9/TOPOSCLASSICFS03.jpg?width=1200`,
    to: '/kitchens/leicht/curved',
  },
  {
    title: 'TERMA ROCCA',
    sub: 'Chestnut veneer meets natural stone.',
    img: `${CAISY}/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'TAJ MAHAL',
    sub: 'Taj Mahal combined with light wood decor.',
    img: `${CAISY}/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'KYOTO',
    sub: 'Kyoto Kitchen: Japandi & Nordic Design combined.',
    img: `${CAISY}/e55fa4d1-4a8b-4ed8-a6e3-c28839a9f659/0da1e8dc-ff21-456e-9ece-e11dc03429d6/0480101Kyoto012nah.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CONTINO Ξ 12',
    sub: 'Matte lacquer combined with elegant aluminum front.',
    img: `${CAISY}/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA FENIX F45-C',
    sub: 'Embossed oak veneer combined with Fenix.',
    img: `${CAISY}/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA KERA MADERO',
    sub: 'Embossed walnut veneer combined with ceramics.',
    img: `${CAISY}/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BAHIA',
    sub: 'Real wood front with asymmetric groove structure.',
    img: `${CAISY}/b3e8255a-1826-4b17-a901-2f09698a4c09/4342f9b6-a670-46dc-95ce-dd82d936f12f/0470101BAHIA026.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'BOSSA CONCRETE',
    sub: 'Warm wood texture meets cool concrete.',
    img: `${CAISY}/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'CLASSIC-FS-C | TOPOS',
    sub: 'Matte lacquer combined with veneer surface.',
    img: `${CAISY}/77d147d2-6c6a-403d-9978-6d5bbfe8c587/ac6b25b5-a13e-4e92-810a-a4e3c667673f/713269M01103316j19.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'STEEL CLASSIC-FS TOPOS',
    sub: 'Dark steel meets dark matte lacquer.',
    img: `${CAISY}/64aa5c14-7364-49ea-92f2-193cd9996d8c/1789ba52-06f9-47c8-b390-f5853de36dea/219213269M01298025312j18.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F45-C',
    sub: 'Fenix in harmony with matte lacquer.',
    img: `${CAISY}/0797a2ec-ddba-43fd-925d-d524003c8000/2297febd-3a9c-4c86-b3d8-d339204370f1/753283213M01120335NCSj22.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
  {
    title: 'FENIX F54-C',
    sub: 'Fenix in contrast to dark wood decor.',
    img: `${CAISY}/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1200`,
    to: '/kitchens/leicht',
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function LeichtWakuu() {
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)
  const sliderRef = useRef(null)

  const toggleAccordion = (id) => setOpenAccordion(prev => prev === id ? null : id)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.wakuu2-kcard')
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
      className="wakuu-page"
    >

      {/* ── 1. HERO with hotspot container ───────────────────────── */}
      <section className="wakuu-hero">
        <div className="wakuu-hero__aspect">
          <img
            src={`${CAISY}/da5b2457-f571-46e7-aa1c-b96adfc34a56/d27b0a72-095c-4d77-93e2-255a4e3a0751/0880301FotoproduktionRahmenfront032.jpg`}
            alt="LEICHT WAKUU kitchen design"
            className="wakuu-hero__img"
          />

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="wakuu-hs"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <button className="wakuu-hs__btn" aria-label={spot.title}>
                <span className="wakuu-hs__ring" />
                <span className="wakuu-hs__dot" />
              </button>

              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    className={`wakuu-hs__tip wakuu-hs__tip--${spot.dir}`}
                    initial={{ opacity: 0, y: spot.dir === 'top' ? 8 : -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="wakuu-hs__tip-img">
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
      <section className="wakuu2-intro">
        <div className="wakuu2-intro__inner container">
          <div className="wakuu2-intro__text">
            <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '28px' }}>
              <Link to="/kitchens">Kitchens</Link>
              <span className="breadcrumbs__separator">/</span>
              <Link to="/kitchens/leicht">Leicht</Link>
              <span className="breadcrumbs__separator">/</span>
              <span className="breadcrumbs__current">Wakuu</span>
            </nav>
            <h4 className="wakuu2-intro__prog">WAKUU | WAKUU-FS</h4>
            <p className="wakuu2-intro__body">
              WAKUU combines delicate frame design with fine materials – for modern kitchens full of character.
              Slim 10 mm frame fronts bring lightness and a modern, distinctive character to any space.
              Whether in fine wood or high-quality lacquer, WAKUU offers diverse options for individual planning.
            </p>
          </div>
          <div className="wakuu2-intro__imgs">
            <div className="wakuu2-intro__img wakuu2-intro__img--wide">
              <img
                src={`${CAISY}/7e8e2a30-f86d-417a-9a71-ab0f33b221c7/6a51f9f0-1806-44bc-88f7-7c4f524195a6/0880310bFotoproduktionRahmenfront031.jpg?width=1200`}
                alt="Wakuu kitchen wide show view"
              />
            </div>
            <div className="wakuu2-intro__img wakuu2-intro__img--tall">
              <img
                src={`${CAISY}/0727ef07-9d0c-44b6-99d6-071acb47c616/46cb6564-b770-4396-bccb-b173457c3b57/AdobeStock514189127.jpeg?width=800`}
                alt="Wakuu detail frame front"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RETHINKING BLOCKS ─────────────────────────────────── */}
      <section className="wakuu2-rethinking">
        <div className="container">
          <div className="wakuu2-rethinking__block">
            <div className="wakuu2-rethinking__img">
              <img
                src={`${CAISY}/b2a24f78-be8f-478d-a065-699868b03849/c0da05d7-c7e5-46a4-827e-1e38b24ada18/0880303FotoproduktionRahmenfront031.jpg?width=800`}
                alt="Rethinking delicate fronts cabinet view"
              />
            </div>
            <div className="wakuu2-rethinking__text">
              <span className="wakuu2-rethinking__eyebrow">Noble wood and premium lacquer</span>
              <h2 className="wakuu2-rethinking__heading">Rethinking delicate frame fronts</h2>
              <p className="wakuu2-rethinking__body">
                With WAKUU, delicate elegance enters the kitchen. The slim 10 mm frame fronts bring lightness and a modern, distinctive character to any space. Whether in fine wood or high-quality lacquer, WAKUU offers diverse options for individual planning. A wide color palette – from warm woods and LEICHT standard colors to Les Couleurs® Le Corbusier® – opens up creative possibilities. The specially developed Design Handle 590 completes the harmonious overall picture.
              </p>
            </div>
          </div>

          <div className="wakuu2-rethinking__block wakuu2-rethinking__block--reverse">
            <div className="wakuu2-rethinking__img">
              <img
                src={`${CAISY}/38afcbaa-cc9f-4c96-bc64-cb7c4eb39ef9/63441344-aa74-4744-b26a-809950c7e4ba/0880304cFotoproduktionRahmenfront030.jpg?width=800`}
                alt="Wakuu kitchen planning versatility"
              />
            </div>
            <div className="wakuu2-rethinking__text">
              <span className="wakuu2-rethinking__eyebrow">Freedom for individual kitchen solutions</span>
              <h2 className="wakuu2-rethinking__heading">Made to fit your personal space</h2>
              <p className="wakuu2-rethinking__body">
                With WAKUU, kitchens can be perfectly adapted to your needs. Whether minimalist, cozy, or striking, the delicate frame fronts provide the foundation for unique solutions. Thanks to flexible width and height adjustments, nearly any room layout can be realized. The wide range of grid sizes offers further options for precise planning and comfortable use. In combination with other kitchen programs, harmonious overall concepts are created, ideally combining design, functionality, and individuality.
              </p>
            </div>
          </div>

          {/* Symmetrical Double Detail Grid */}
          <div className="wakuu2-rethinking__detail-grid">
            <div className="wakuu2-rethinking__detail-img">
              <img
                src={`${CAISY}/f60a4c43-4859-4533-a2c7-5cdebd4ea3dd/b51728ee-b84a-41f0-b382-d7f0d91a7127/0880311FotoproduktionRahmenfront029.jpg?width=800`}
                alt="Wakuu drawer profile detail"
              />
            </div>
            <div className="wakuu2-rethinking__detail-img">
              <img
                src={`${CAISY}/141b65fb-b60d-4959-81ff-84800e650d03/8459e3dd-e498-49c1-90da-1df22f3e5939/0880309FotoproduktionRahmenfront030.jpg?width=800`}
                alt="Wakuu continuous woodgrain detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. AMETIS SPLIT SECTION ─────────────────────────────── */}
      <section className="wakuu2-ametis">
        <div className="wakuu2-ametis__left">
          <div className="wakuu2-ametis__left-inner">
            <h2 className="wakuu2-ametis__heading">AMETIS metallic lacquer programme</h2>
            <p className="wakuu2-ametis__body">
              The AMETIS metallic lacquer programme sets a new accent in the development of high-quality lacquered surfaces. The specially designed lacquer combines state-of-the-art workmanship with a clearly defined design standard. AMETIS is expanding its range with four metallic colours, which are characterised by an evenly matt surface with a fine proportion of gloss – without any visible texture direction. The satin matt effect in combination with metallic depth gives the front a calm, finely balanced appearance. The special feel looks high-quality and at the same time restrained and is ideal for modern, architecturally influenced kitchen planning. The four shades – auren, feron, tanor and cuprum – move within a warm-toned, metallic shimmering spectrum. From light champagne nuances to rich bronze tones, they enable versatile combinations in both neutral and colourful designs.
            </p>
          </div>
        </div>
        <div className="wakuu2-ametis__right">
          <img
            src={`${CAISY}/f70e1b1c-8f73-45bc-b8bc-ebfb1fbb856a/10058d08-e19e-43a8-bc77-4524a6dadf92/0834901Ametis002.jpg?width=1000`}
            alt="AMETIS metallic lacquer showcase view"
          />
        </div>
      </section>

      {/* ── 5. AVAILABLE METALLIC SHADES swatches ───────────────── */}
      <section className="wakuu2-mcolors">
        <div className="container">
          <h2 className="wakuu2-mcolors__heading">Available metallic shades</h2>
          <div className="wakuu2-mcolors__grid">
            {metallicShades.map((c, i) => (
              <motion.div
                key={c.code}
                className="wakuu2-swatch"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="wakuu2-swatch__img">
                  <img src={c.img} alt={`${c.code} ${c.name}`} />
                </div>
                <div className="wakuu2-swatch__label">
                  <span className="wakuu2-swatch__code">{c.code}</span>
                  <span className="wakuu2-swatch__name">{c.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ACCORDION ─────────────────────────────────────── */}
      <section className="wakuu2-faq">
        <div className="container">
          <div className="wakuu2-faq__header">
            <h2 className="wakuu2-faq__heading">What makes the WAKUU program special?</h2>
            <p className="wakuu2-faq__sub">
              Here you will find answers to the most frequently asked questions about our new WAKUU kitchen program.
            </p>
          </div>
          <div className="wakuu2-faq__list">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              return (
                <div key={item.id} className={`wakuu2-acc${isOpen ? ' wakuu2-acc--open' : ''}`}>
                  <button
                    className="wakuu2-acc__trigger"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="wakuu2-acc__num">{item.num}</span>
                    <div className="wakuu2-acc__titles">
                      <span className="wakuu2-acc__title">{item.title}</span>
                      <span className="wakuu2-acc__desc">{item.desc}</span>
                    </div>
                    <span className="wakuu2-acc__icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="wakuu2-acc__body" aria-hidden={!isOpen} style={{ display: isOpen ? 'block' : 'none' }}>
                    <div className="wakuu2-acc__content">
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
      <section className="wakuu2-discover">
        <div className="container">
          <div className="wakuu2-discover__header">
            <div>
              <h2 className="wakuu2-discover__heading">Discover Kitchens</h2>
              <p className="wakuu2-discover__sub">
                Whether modern elegance, timeless classic, or innovative functionality – here you will find the perfect kitchen.
              </p>
            </div>
            <div className="wakuu2-discover__actions">
              <Link to="/kitchens/leicht" className="wakuu2-discover__all">All Kitchens →</Link>
              <div className="wakuu2-discover__nav">
                <button className="wakuu2-discover__nav-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button className="wakuu2-discover__nav-btn" onClick={() => scroll('right')} aria-label="Next slide">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="wakuu2-discover__track" ref={sliderRef}>
            {kitchenSlides.map((slide, i) => (
              <Link to={slide.to} key={i} className="wakuu2-kcard">
                <div className="wakuu2-kcard__img">
                  <img src={slide.img} alt={slide.title} />
                </div>
                <div className="wakuu2-kcard__info">
                  <h3 className="wakuu2-kcard__title">{slide.title}</h3>
                  <p className="wakuu2-kcard__sub">{slide.sub}</p>
                  <span className="wakuu2-kcard__link">Discover {slide.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style>{`
        /* ── HERO ────────────────────────────────────────────── */
        .wakuu-hero {
          width: 100%;
          background: #000;
          overflow: hidden;
          display: block;
        }
        .wakuu-hero__aspect {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .wakuu-hero__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── HOTSPOT ─────────────────────────────────────────── */
        .wakuu-hs {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 20;
        }
        .wakuu-hs__btn {
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
        .wakuu-hs__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.3);
        }
        .wakuu-hs__ring {
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
        .wakuu-hs__tip {
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
        .wakuu-hs__tip--bottom { top: 44px; left: 50%; transform: translateX(-50%); }
        .wakuu-hs__tip--top    { bottom: 44px; left: 50%; transform: translateX(-50%); }
        .wakuu-hs__tip--left   { right: 44px; top: 50%; transform: translateY(-50%); }
        .wakuu-hs__tip--right  { left: 44px;  top: 50%; transform: translateY(-50%); }
        .wakuu-hs__tip-img {
          width: 100%;
          height: 130px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
          background: #333;
        }
        .wakuu-hs__tip-img img { width: 100%; height: 100%; object-fit: cover; }
        .wakuu-hs__tip h4 {
          font-family: var(--font-serif);
          font-size: 17px;
          color: #fff;
          margin-bottom: 6px;
        }
        .wakuu-hs__tip p {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          margin: 0;
        }

        /* ── INTRO ───────────────────────────────────────────── */
        .wakuu2-intro {
          background: #fff;
          padding: 80px 0 0;
        }
        .wakuu2-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .wakuu2-intro__text { padding-bottom: 80px; }
        .wakuu2-intro__prog {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mid);
          margin-bottom: 24px;
        }
        .wakuu2-intro__body {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .wakuu2-intro__imgs {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 16px;
          align-items: flex-start;
        }
        .wakuu2-intro__img { overflow: hidden; }
        .wakuu2-intro__img--wide  { aspect-ratio: 7/6; }
        .wakuu2-intro__img--tall  { aspect-ratio: 49/62; align-self: flex-end; }
        .wakuu2-intro__img img    { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .wakuu2-intro__img:hover img { transform: scale(1.04); }

        /* ── RETHINKING BLOCKS ───────────────────────────────── */
        .wakuu2-rethinking {
          background: var(--cream-light);
          padding: 100px 0;
        }
        .wakuu2-rethinking__block {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 100px;
        }
        .wakuu2-rethinking__block--reverse {
          grid-template-columns: 0.9fr 1.1fr;
        }
        .wakuu2-rethinking__block--reverse .wakuu2-rethinking__img {
          order: 2;
        }
        .wakuu2-rethinking__block--reverse .wakuu2-rethinking__text {
          order: 1;
        }
        .wakuu2-rethinking__img {
          overflow: hidden;
          border-radius: 6px;
        }
        .wakuu2-rethinking__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .wakuu2-rethinking__block:hover .wakuu2-rethinking__img img {
          transform: scale(1.03);
        }
        .wakuu2-rethinking__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .wakuu2-rethinking__eyebrow {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .wakuu2-rethinking__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: var(--charcoal);
          line-height: 1.2;
        }
        .wakuu2-rethinking__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: var(--charcoal-soft);
        }
        .wakuu2-rethinking__detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 60px;
        }
        .wakuu2-rethinking__detail-img {
          overflow: hidden;
          border-radius: 6px;
          aspect-ratio: 16/11;
        }
        .wakuu2-rethinking__detail-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .wakuu2-rethinking__detail-img:hover img {
          transform: scale(1.03);
        }

        /* ── AMETIS SECTION ──────────────────────────────────── */
        .wakuu2-ametis {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }
        .wakuu2-ametis__left {
          background-color: #8c7f75d8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 64px;
        }
        .wakuu2-ametis__left-inner { max-width: 440px; }
        .wakuu2-ametis__heading {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .wakuu2-ametis__body {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
        }
        .wakuu2-ametis__right { overflow: hidden; }
        .wakuu2-ametis__right img { width: 100%; height: 100%; object-fit: cover; }

        /* ── METALLIC SWATCHES ───────────────────────────────── */
        .wakuu2-mcolors {
          background: var(--cream-dark);
          padding: 100px 0;
        }
        .wakuu2-mcolors__heading {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 48px;
        }
        .wakuu2-mcolors__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .wakuu2-swatch { display: flex; flex-direction: column; gap: 0; }
        .wakuu2-swatch__img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #eee;
        }
        .wakuu2-swatch__img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .wakuu2-swatch:hover .wakuu2-swatch__img img { transform: scale(1.05); }
        .wakuu2-swatch__label {
          padding: 16px 0 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wakuu2-swatch__code {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--gold);
          text-transform: uppercase;
        }
        .wakuu2-swatch__name {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--charcoal-soft);
        }

        /* ── FAQ ACCORDION ───────────────────────────────────── */
        .wakuu2-faq {
          background: var(--cream-light);
          padding: 100px 0;
          border-top: 1px solid var(--border);
        }
        .wakuu2-faq__header { margin-bottom: 64px; max-width: 680px; }
        .wakuu2-faq__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 16px;
        }
        .wakuu2-faq__sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--gray-mid);
          line-height: 1.6;
        }
        .wakuu2-faq__list { border-top: 1px solid var(--border); }
        .wakuu2-acc { border-bottom: 1px solid var(--border); }
        .wakuu2-acc__trigger {
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
        .wakuu2-acc__num {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-light);
          min-width: 28px;
        }
        .wakuu2-acc__titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .wakuu2-acc__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
        }
        .wakuu2-acc__desc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
        }
        .wakuu2-acc__icon {
          font-family: var(--font-sans);
          font-size: 22px;
          color: var(--charcoal);
          line-height: 1;
          transition: transform 0.25s ease;
        }
        .wakuu2-acc__body { overflow: hidden; }
        .wakuu2-acc__content { padding: 0 56px 36px; }

        /* Color Worlds wood grid */
        .wakuu-wood-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 16px;
        }
        .wakuu-wood-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--border);
          background: var(--white);
          overflow: hidden;
          border-radius: 4px;
        }
        .wakuu-wood-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #eee;
        }
        .wakuu-wood-img img { width: 100%; height: 100%; object-fit: cover; }
        .wakuu-wood-info {
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wakuu-wood-code {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          color: var(--gold);
        }
        .wakuu-wood-name {
          font-family: var(--font-sans);
          font-size: 12.5px;
          color: var(--charcoal-soft);
        }

        /* General flex accordion content */
        .wakuu-faq-flex {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }
        .wakuu-faq-img-col {
          border-radius: 6px;
          overflow: hidden;
          aspect-ratio: 16/11;
        }
        .wakuu-faq-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── DISCOVER KITCHENS ───────────────────────────────── */
        .wakuu2-discover {
          background: var(--cream-dark);
          padding: 100px 0 120px;
          overflow: hidden;
        }
        .wakuu2-discover__header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .wakuu2-discover__heading {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--charcoal);
          margin-bottom: 12px;
        }
        .wakuu2-discover__sub {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--gray-mid);
          line-height: 1.6;
          max-width: 420px;
        }
        .wakuu2-discover__actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .wakuu2-discover__all {
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
        .wakuu2-discover__all:hover {
          background: var(--gold);
          color: #fff;
        }
        .wakuu2-discover__nav {
          display: flex;
          gap: 12px;
        }
        .wakuu2-discover__nav-btn {
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
        .wakuu2-discover__nav-btn:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--cream-light);
        }
        .wakuu2-discover__track {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 24px;
          margin-bottom: -24px;
        }
        .wakuu2-discover__track::-webkit-scrollbar { display: none; }

        /* ── KCARD ───────────────────────────────────────────── */
        .wakuu2-kcard {
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
        .wakuu2-kcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          border-color: var(--gold-light);
        }
        .wakuu2-kcard__img {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ddd;
        }
        .wakuu2-kcard__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25,1,0.5,1);
        }
        .wakuu2-kcard:hover .wakuu2-kcard__img img { transform: scale(1.06); }
        .wakuu2-kcard__info {
          padding: 24px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .wakuu2-kcard__title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 400;
          color: var(--charcoal);
          margin: 0;
        }
        .wakuu2-kcard__sub {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray-mid);
          line-height: 1.55;
          margin-bottom: 8px;
        }
        .wakuu2-kcard__link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: auto;
          transition: color 0.2s ease;
        }
        .wakuu2-kcard:hover .wakuu2-kcard__link { color: var(--gold-dark); }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 991px) {
          .wakuu2-intro__inner { grid-template-columns: 1fr; gap: 32px; }
          .wakuu2-rethinking__block { grid-template-columns: 1fr; gap: 32px; }
          .wakuu2-rethinking__block--reverse .wakuu2-rethinking__img { order: 1; }
          .wakuu2-rethinking__block--reverse .wakuu2-rethinking__text { order: 2; }
          .wakuu2-rethinking__detail-grid { grid-template-columns: 1fr; gap: 16px; }
          .wakuu2-ametis { grid-template-columns: 1fr; }
          .wakuu2-ametis__left { padding: 60px 32px; }
          .wakuu2-ametis__right { min-height: 360px; }
          .wakuu2-mcolors__grid { grid-template-columns: repeat(2, 1fr); }
          .wakuu2-faq__heading { font-size: 32px; }
          .wakuu-wood-grid { grid-template-columns: repeat(2, 1fr); }
          .wakuu-faq-flex { grid-template-columns: 1fr; gap: 24px; }
          .wakuu2-discover__heading { font-size: 32px; }
          .wakuu2-discover__track { gap: 20px; }
          .wakuu2-kcard { flex: 0 0 calc((100% - 20px) / 2); }
        }
        @media (max-width: 600px) {
          .wakuu2-mcolors__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .wakuu2-acc__title { font-size: 20px; }
          .wakuu-wood-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .wakuu2-kcard { flex: 0 0 100%; }
        }
      `}</style>
    </motion.div>
  )
}
