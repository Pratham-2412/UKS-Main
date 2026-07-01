import UKS_LEICHT_0890301IDEA003 from '../assets/uks-leicht/uks-leicht-0890301Idea003.jpg';
import UKS_LEICHT_0880301FOTOPRODUKTIONRAHMENFRONT032 from '../assets/uks-leicht/uks-leicht-0880301FotoproduktionRahmenfront032.jpg';
import UKS_LEICHT_0900305HYGGEHELLCYAN002 from '../assets/uks-leicht/uks-leicht-0900305Hyggehellcyan002.jpg';
import UKS_LEICHT_TOPOSCLASSICFS03 from '../assets/uks-leicht/uks-leicht-TOPOSCLASSICFS03.jpg';
import UKS_LEICHT_0690101FOTOPRODUKTIONK7017OBENHELLER from '../assets/uks-leicht/uks-leicht-0690101Fotoproduktionk7017obenheller.jpg';
import UKS_LEICHT_0680102FOTOPRODUKTIONA042COPY from '../assets/uks-leicht/uks-leicht-0680102FotoproduktionA042copy.jpg';
import UKS_LEICHT_0480101KYOTO012NAH from '../assets/uks-leicht/uks-leicht-0480101Kyoto012nah.jpg';
import UKS_LEICHT_684269M01167309J22 from '../assets/uks-leicht/uks-leicht-684269M01167309J22.jpg';
import UKS_LEICHT_244753M01350120J20 from '../assets/uks-leicht/uks-leicht-244753M01350120j20.jpg';
import UKS_LEICHT_001BOSSA023OHNEFUCHS3840X2160 from '../assets/uks-leicht/uks-leicht-001Bossa023ohnefuchs3840x2160.jpg';
import UKS_LEICHT_0470101BAHIA026 from '../assets/uks-leicht/uks-leicht-0470101BAHIA026.jpg';
import UKS_LEICHT_744293M01352192J22 from '../assets/uks-leicht/uks-leicht-744293M01352192j22.jpg';
import UKS_LEICHT_713269M01103316J19 from '../assets/uks-leicht/uks-leicht-713269M01103316j19.jpg';
import UKS_LEICHT_219213269M01298025312J18 from '../assets/uks-leicht/uks-leicht-219213269M01298025312j18.jpg';
import UKS_LEICHT_753283213M01120335NCSJ22 from '../assets/uks-leicht/uks-leicht-753283213M01120335NCSj22.jpg';
import UKS_LEICHT_739719M01134345J18 from '../assets/uks-leicht/uks-leicht-739719M01134345j18.jpg';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import leichtHero from '../assets/leicht.webp'

const concepts = [
  {
    id: 1,
    tag: 'IDEA',
    title: 'IDEA elegance in transparent matte and glossy finishes',
    desc: 'Acrylic glass combines elegance, durability and suitability for everyday use. Scratch-resistant, shock-proof, and UV-resistant – the perfect surface for timeless kitchens.',
    img: UKS_LEICHT_0890301IDEA003,
  },
  {
    id: 2,
    tag: 'WAKUU',
    title: 'Filigree framed fronts for modern kitchens',
    desc: 'WAKUU combines lightness and elegance: narrow framed fronts, a wide range of premium wood & lacquer finishes, and custom architectural planning.',
    img: UKS_LEICHT_0880301FOTOPRODUKTIONRAHMENFRONT032,
  },
  {
    id: 3,
    tag: 'HYGGE',
    title: 'Hygge: Experience peace, warmth and naturalness',
    desc: 'Soft Scandinavian colors, natural materials, and clear minimalist shapes transform the kitchen space into a place of sanctuary and security.',
    img: UKS_LEICHT_0900305HYGGEHELLCYAN002,
  },
  {
    id: 4,
    tag: 'CURVED',
    title: 'Curved side panels for smooth transitions',
    desc: 'Curved side panels bring smooth, stylish transitions to modern kitchen designs, breaking up sharp corners and creating a fluid architectural flow.',
    img: UKS_LEICHT_TOPOSCLASSICFS03,
  },
  {
    id: 5,
    tag: 'TERMA ROCCA',
    title: 'Chestnut veneer meets natural stone',
    desc: 'The Handle concept Q seamlessly combines design and aesthetics, emphasizing organic forms, premium chestnut wood, and rich textured stone.',
    img: UKS_LEICHT_0690101FOTOPRODUKTIONK7017OBENHELLER,
  },
  {
    id: 6,
    tag: 'TAJ MAHAL',
    title: 'Taj Mahal combined with light wood decor',
    desc: 'Discover stylish, minimalist kitchens that combine warm beige tones, natural Taj Mahal quartzite stone, and light European wood details.',
    img: UKS_LEICHT_0680102FOTOPRODUKTIONA042COPY,
  },
  {
    id: 7,
    tag: 'KYOTO',
    title: 'Kyoto Kitchen: Japandi & Nordic Design combined',
    desc: 'Experience the perfect symbiosis of Japandi aesthetic and Nordic design with the Kyoto Kitchen, blending clean timber craftsmanship with simplicity.',
    img: UKS_LEICHT_0480101KYOTO012NAH,
  },
  {
    id: 8,
    tag: 'CONTINO Ξ 12',
    title: 'Matte lacquer combined with elegant aluminum front',
    desc: 'Contino Ξ 12 offers a minimalist handleless design with premium materials, thin profile structures, and elegant simplicity.',
    img: UKS_LEICHT_684269M01167309J22,
  },
  {
    id: 9,
    tag: 'BOSSA FENIX F45-C',
    title: 'Embossed oak veneer combined with Fenix',
    desc: 'The real wood surface BOSSA in light oak harmoniously connects kitchen and living space, contrasted beautifully with matte Fenix laminate.',
    img: UKS_LEICHT_244753M01350120J20,
  },
  {
    id: 10,
    tag: 'BOSSA KERA MADERO',
    title: 'Embossed walnut veneer combined with ceramics',
    desc: 'Seamless vertical wood groove cladding of the handleless kitchen with BOSSA walnut wood, paired with robust, elegant ceramic surfaces.',
    img: UKS_LEICHT_001BOSSA023OHNEFUCHS3840X2160,
  },
  {
    id: 11,
    tag: 'BAHIA',
    title: 'Real wood front with asymmetric groove structure',
    desc: 'BAHIA combines innovative design and natural materials: vertical groove patterns with varying widths create a lively, structural partition.',
    img: UKS_LEICHT_0470101BAHIA026,
  },
  {
    id: 12,
    tag: 'BOSSA CONCRETE',
    title: 'Warm wood texture meets cool concrete',
    desc: 'A sophisticated combination of structured linear wood and solid architectural concrete, balancing warmth and cool minimalism.',
    img: UKS_LEICHT_744293M01352192J22,
  },
  {
    id: 13,
    tag: 'CLASSIC-FS-C | TOPOS',
    title: 'Matte lacquer combined with veneer surface',
    desc: 'Classic-FS-C & Topos merge open-space planning with premium wood veneers and matte lacquers, integrating the kitchen into the living area.',
    img: UKS_LEICHT_713269M01103316J19,
  },
  {
    id: 14,
    tag: 'STEEL CLASSIC-FS TOPOS',
    title: 'Dark steel meets dark matte lacquer',
    desc: 'Rough industrial charm meets luxury: real steel fronts treated with a special hand-applied finish, paired with dark matte lacquer and natural wood.',
    img: UKS_LEICHT_219213269M01298025312J18,
  },
  {
    id: 15,
    tag: 'FENIX F45-C',
    title: 'Fenix in harmony with matte lacquer',
    desc: 'Advanced Nanotech surfaces with a super-matte finish, anti-fingerprint properties, and thermal healing capability, paired with lacquer.',
    img: UKS_LEICHT_753283213M01120335NCSJ22,
  },
  {
    id: 16,
    tag: 'FENIX F54-C',
    title: 'Fenix in contrast to dark wood decor',
    desc: 'High-contrast premium surfaces: the dense, rich dark wood details offset by clean, velvety Fenix surfaces for an ultra-modern aesthetic.',
    img: UKS_LEICHT_739719M01134345J18,
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
        <img src={UKS_LEICHT_684269M01167309J22} alt="Leicht German Kitchens" />
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
                  : concept.tag === 'CURVED' ? '/kitchens/leicht/curved'
                  : concept.tag === 'TERMA ROCCA' ? '/kitchens/leicht/terma-rocca'
                  : concept.tag === 'TAJ MAHAL' ? '/kitchens/leicht/taj-mahal'
                  : concept.tag === 'KYOTO' ? '/kitchens/leicht/kyoto'
                  : concept.tag === 'CONTINO Ξ 12' ? '/kitchens/leicht/contino-12'
                  : concept.tag === 'BOSSA FENIX F45-C' ? '/kitchens/leicht/bossa-fenix-f45-c'
                  : concept.tag === 'BOSSA KERA MADERO' ? '/kitchens/leicht/bossa-kera-madero'
                  : concept.tag === 'BAHIA' ? '/kitchens/leicht/bahia'
                  : concept.tag === 'BOSSA CONCRETE' ? '/kitchens/leicht/bossa-concrete'
                  : concept.tag === 'CLASSIC-FS-C | TOPOS' ? '/kitchens/leicht/classic-fs-c-topos'
                  : concept.tag === 'STEEL CLASSIC-FS TOPOS' ? '/kitchens/leicht/steel-classic-fs-topos'
                  : concept.tag === 'FENIX F45-C' ? '/kitchens/leicht/fenix-f45-c-valais-classic-fs'
                  : concept.tag === 'FENIX F54-C' ? '/kitchens/leicht/fenix-f54-c-orlando-c'
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
                      {['IDEA', 'WAKUU', 'HYGGE', 'CURVED', 'TERMA ROCCA', 'TAJ MAHAL', 'KYOTO', 'CONTINO Ξ 12', 'BOSSA FENIX F45-C', 'BOSSA KERA MADERO', 'BAHIA', 'BOSSA CONCRETE', 'CLASSIC-FS-C | TOPOS', 'STEEL CLASSIC-FS TOPOS', 'FENIX F45-C', 'FENIX F54-C'].includes(concept.tag) ? 'EXPLORE THIS CONCEPT →' : 'ENQUIRE ABOUT THIS CONCEPT →'}
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
