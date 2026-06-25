import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import leichtHero from '../assets/leicht.webp'

const concepts = [
  {
    id: 1,
    tag: 'IDEA',
    title: 'IDEA elegance in transparent matte and glossy finishes',
    desc: 'Acrylic glass combines elegance, durability and suitability for everyday use. Scratch-resistant, shock-proof, and UV-resistant – the perfect surface for timeless kitchens.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/3afd8ad1-729b-4951-ba32-b216ba6fc45f/72b71e1f-2932-48f8-ae65-0f9c666625f7/0890301Idea003.jpg?width=1200',
  },
  {
    id: 2,
    tag: 'WAKUU',
    title: 'Filigree framed fronts for modern kitchens',
    desc: 'WAKUU combines lightness and elegance: narrow framed fronts, a wide range of premium wood & lacquer finishes, and custom architectural planning.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/0d9259d8-749a-42df-b235-3967aa116571/9f03937b-8d76-4c08-80b9-b49775a0a0eb/0880301FotoproduktionRahmenfront032.jpg?width=1200',
  },
  {
    id: 3,
    tag: 'HYGGE',
    title: 'Hygge: Experience peace, warmth and naturalness',
    desc: 'Soft Scandinavian colors, natural materials, and clear minimalist shapes transform the kitchen space into a place of sanctuary and security.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/e88b06c5-32b0-4f5b-ab84-df566437929b/7c3aaad9-f85c-4a6d-b3c8-14252b108a03/0900305Hyggehellcyan002.jpg?width=1200',
  },
  {
    id: 4,
    tag: 'CURVED',
    title: 'Curved side panels for smooth transitions',
    desc: 'Curved side panels bring smooth, stylish transitions to modern kitchen designs, breaking up sharp corners and creating a fluid architectural flow.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/fd359af4-f618-4c04-ac5d-b9ab4f957855/fc20fca3-5dfa-403a-a9fb-0b93b621bae9/TOPOSCLASSICFS03.jpg?width=1200',
  },
  {
    id: 5,
    tag: 'TERMA ROCCA',
    title: 'Chestnut veneer meets natural stone',
    desc: 'The Handle concept Q seamlessly combines design and aesthetics, emphasizing organic forms, premium chestnut wood, and rich textured stone.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/33c60548-f4e7-479c-9b64-e91d08e0d8a1/98bc9789-1572-4034-ac30-3073b69409cc/0690101Fotoproduktionk7017obenheller.jpg?width=1200',
  },
  {
    id: 6,
    tag: 'TAJ MAHAL',
    title: 'Taj Mahal combined with light wood decor',
    desc: 'Discover stylish, minimalist kitchens that combine warm beige tones, natural Taj Mahal quartzite stone, and light European wood details.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/99ed4902-3e61-41b7-8177-b362e0505505/6e11a8a5-f70d-4d3d-978d-899511aadb28/0680102FotoproduktionA042copy.jpg?width=1200',
  },
  {
    id: 7,
    tag: 'KYOTO',
    title: 'Kyoto Kitchen: Japandi & Nordic Design combined',
    desc: 'Experience the perfect symbiosis of Japandi aesthetic and Nordic design with the Kyoto Kitchen, blending clean timber craftsmanship with simplicity.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/e55fa4d1-4a8b-4ed8-a6e3-c28839a9f659/0da1e8dc-ff21-456e-9ece-e11dc03429d6/0480101Kyoto012nah.jpg?width=1200',
  },
  {
    id: 8,
    tag: 'CONTINO Ξ 12',
    title: 'Matte lacquer combined with elegant aluminum front',
    desc: 'Contino Ξ 12 offers a minimalist handleless design with premium materials, thin profile structures, and elegant simplicity.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/5072bc14-f5b1-41eb-ba37-206bf95cb0b8/10caaa77-74fa-4301-902d-31fe0f369637/684269M01167309J22.jpg?width=1200',
  },
  {
    id: 9,
    tag: 'BOSSA FENIX F45-C',
    title: 'Embossed oak veneer combined with Fenix',
    desc: 'The real wood surface BOSSA in light oak harmoniously connects kitchen and living space, contrasted beautifully with matte Fenix laminate.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/dcf211cf-cf73-44f0-a40e-3f689aaec77b/74a57b81-9538-427c-a520-59e7a61ef70d/244753M01350120j20.jpg?width=1200',
  },
  {
    id: 10,
    tag: 'BOSSA KERA MADERO',
    title: 'Embossed walnut veneer combined with ceramics',
    desc: 'Seamless vertical wood groove cladding of the handleless kitchen with BOSSA walnut wood, paired with robust, elegant ceramic surfaces.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/ece684d6-842d-42b1-ae1d-e74e8661a1bc/d0e25257-8f2c-43ed-9433-42906ed1815e/001Bossa023ohnefuchs3840x2160.jpg?width=1200',
  },
  {
    id: 11,
    tag: 'BAHIA',
    title: 'Real wood front with asymmetric groove structure',
    desc: 'BAHIA combines innovative design and natural materials: vertical groove patterns with varying widths create a lively, structural partition.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/b3e8255a-1826-4b17-a901-2f09698a4c09/4342f9b6-a670-46dc-95ce-dd82d936f12f/0470101BAHIA026.jpg?width=1200',
  },
  {
    id: 12,
    tag: 'BOSSA CONCRETE',
    title: 'Warm wood texture meets cool concrete',
    desc: 'A sophisticated combination of structured linear wood and solid architectural concrete, balancing warmth and cool minimalism.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/68923d49-541a-474e-912a-b3d2945f8e70/8027452c-2935-4d42-82ae-0ae91e8e83a7/744293M01352192j22.jpg?width=1200',
  },
  {
    id: 13,
    tag: 'CLASSIC-FS-C | TOPOS',
    title: 'Matte lacquer combined with veneer surface',
    desc: 'Classic-FS-C & Topos merge open-space planning with premium wood veneers and matte lacquers, integrating the kitchen into the living area.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/77d147d2-6c6a-403d-9978-6d5bbfe8c587/ac6b25b5-a13e-4e92-810a-a4e3c667673f/713269M01103316j19.jpg?width=1200',
  },
  {
    id: 14,
    tag: 'STEEL CLASSIC-FS TOPOS',
    title: 'Dark steel meets dark matte lacquer',
    desc: 'Rough industrial charm meets luxury: real steel fronts treated with a special hand-applied finish, paired with dark matte lacquer and natural wood.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/64aa5c14-7364-49ea-92f2-193cd9996d8c/1789ba52-06f9-47c8-b390-f5853de36dea/219213269M01298025312j18.jpg?width=1200',
  },
  {
    id: 15,
    tag: 'FENIX F45-C',
    title: 'Fenix in harmony with matte lacquer',
    desc: 'Advanced Nanotech surfaces with a super-matte finish, anti-fingerprint properties, and thermal healing capability, paired with lacquer.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/0797a2ec-ddba-43fd-925d-d524003c8000/2297febd-3a9c-4c86-b3d8-d339204370f1/753283213M01120335NCSj22.jpg?width=1200',
  },
  {
    id: 16,
    tag: 'FENIX F54-C',
    title: 'Fenix in contrast to dark wood decor',
    desc: 'High-contrast premium surfaces: the dense, rich dark wood details offset by clean, velvety Fenix surfaces for an ultra-modern aesthetic.',
    img: 'https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/7a15c454-848a-464d-9427-df38e35b7a09/54d8cd1e-4aab-4f0b-b44b-b02cace4cdac/739719M01134345j18.jpg?width=1200',
  }
]

export default function Leicht() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="kitchens-page"
    >
      {/* Hero */}
      <motion.div
        className="kitchen-hero"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <img src="https://assets.caisy.io/assets/551e9be6-4efc-46d0-85a5-cad97ca9e6eb/fc81e4f5-9736-4acc-bdbb-537e63d19c20/bf7d4907-98ef-43b6-90a5-87fb60199018/684269M01167309J22.jpg?width=1920" alt="Leicht German Kitchens" />
      </motion.div>

      {/* Intro Text */}
      <section className="kitchen-intro">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/kitchens">Kitchens</Link>
            <span className="breadcrumbs__separator">/</span>
            <span className="breadcrumbs__current">Leicht</span>
          </nav>

          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GERMAN PRECISION
          </motion.span>

          <div className="kitchen-intro__grid">
            <motion.h1
              className="kitchen-intro__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.75 }}
            >
              Architectural<br />
              <em className="text-gold">kitchen diversity.</em>
            </motion.h1>

            <motion.div
              className="kitchen-intro__right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <p className="kitchen-intro__text">
                LEICHT kitchens represent architectural designs that combine modern aesthetics with high functionality. Every kitchen concept is custom conceived and engineered in Germany to harmonize with your home's unique layout and structure.
              </p>
              <p className="kitchen-intro__text">
                Explore our selection of premium Leicht design collections, and schedule a consultation with our studio designers to begin building your custom kitchen.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                BOOK A DESIGN CONSULTATION →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Collections Grid */}
      <section className="kitchen-brands" style={{ borderTop: 'none', paddingTop: '40px' }}>
        <div className="container">
          <div className="brands-grid">
            {concepts.map((concept, i) => (
              <Link
                key={concept.id}
                to={
                  concept.tag === 'IDEA' ? '/kitchens/leicht/idea'
                  : concept.tag === 'WAKUU' ? '/kitchens/leicht/wakuu'
                  : concept.tag === 'HYGGE' ? '/kitchens/leicht/hygge'
                  : '/contact'
                }
                className="brand-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}
                >
                  <div className="brand-card__img">
                    <img src={concept.img} alt={concept.title} />
                  </div>
                  <div className="brand-card__content">
                    <span className="brand-card__tag">{concept.tag}</span>
                    <h3 className="brand-card__title" style={{ fontSize: '26px' }}>{concept.title}</h3>
                    <p className="brand-card__desc">{concept.desc}</p>
                    <span className="btn btn-ghost">
                      {(concept.tag === 'IDEA' || concept.tag === 'WAKUU' || concept.tag === 'HYGGE') ? 'EXPLORE THIS CONCEPT →' : 'ENQUIRE ABOUT THIS CONCEPT →'}
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
