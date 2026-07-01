import UKS_NOVACUCINA_2025_NOVACUCINA_COMP01_P1 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp01_p1.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP_02_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp_02_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP06_P1 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp06_p1.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP14_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp14_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINE_C9_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucine_c9_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_C27_P1 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_c27_p1.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP17_P1_CHIUSA from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp17_p1_chiusa.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP05_01 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp05_01.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP21_P1 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp21_p1.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_C18_P1 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_c18_p1.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP7_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp7_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP20_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp20_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP24_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp24_gen.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP26_GEN_01 from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp26_gen_01.jpg';
import UKS_NOVACUCINA_2025_NOVACUCINA_COMP23_GEN from '../assets/uks-novacucina/uks-novacucina-2025_novacucina_comp23_gen.jpg';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const collections = [
  {
    id: 1,
    tag: 'SISTEMA 2.2_1',
    title: 'Sistema 2.2_1',
    desc: 'Sleek modern linear layout utilizing handless matte dark cabinetry combined with matching gray oak textures.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP01_P1,
  },
  {
    id: 2,
    tag: 'SISTEMA 2.2_2',
    title: 'Sistema 2.2_2',
    desc: 'Elegant and airy workspace featuring contrasting pure white worktops and warm light timber detailing.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP_02_GEN,
  },
  {
    id: 3,
    tag: 'SISTEMA 2.2_3',
    title: 'Sistema 2.2_3',
    desc: 'Majestic monolith layout emphasizing seamless continuous worktops and rich vertical wood groove accents.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP06_P1,
  },
  {
    id: 4,
    tag: 'SISTEMA 2.2 FLY_4',
    title: 'Sistema 2:2 Fly_4',
    desc: 'Minimalist architectural composition with suspended components, open shelving, and a metal profile structure.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP14_GEN,
  },
  {
    id: 5,
    tag: 'SISTEMA 2.2_5',
    title: 'Sistema 2.2_5',
    desc: 'Contemporary island hub kitchen displaying soft earth tones, brushed steel details, and integrated LED strip lighting.',
    img: UKS_NOVACUCINA_2025_NOVACUCINE_C9_GEN,
  },
  {
    id: 6,
    tag: 'SISTEMA PLANET_6',
    title: 'Sistema Planet_6',
    desc: 'Premium Italian aesthetic combining deep structured stone finishes with dark wood veneered panels.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_C27_P1,
  },
  {
    id: 7,
    tag: 'SISTEMA 2.2_7',
    title: 'Sistema 2.2_7',
    desc: 'Smart concealed kitchen featuring sliding pivot panels, hidden appliances, and custom interior organizers.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP17_P1_CHIUSA,
  },
  {
    id: 8,
    tag: 'SISTEMA MK1_8',
    title: 'Sistema MK1_8',
    desc: 'Robust, urban design with concrete texture facades, open shelving units, and clean geometric structures.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP05_01,
  },
  {
    id: 9,
    tag: 'SISTEMA 2.2_9',
    title: 'Sistema 2.2_9',
    desc: 'Light-filled space integrating premium glass fronts, warm ambient backlighting, and slim composite stone tops.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP21_P1,
  },
  {
    id: 10,
    tag: 'SISTEMA 2.2_10',
    title: 'Sistema 2.2_10',
    desc: 'Luxurious dark theme kitchen featuring natural black marble panels, dark brushed lacquer, and gold hardware accents.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_C18_P1,
  },
  {
    id: 11,
    tag: 'SISTEMA 2.2 FLY_11',
    title: 'Sistema 2:2 Fly_11',
    desc: 'Modern high-contrast design balancing dark charcoal panels with white marble worktops.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP7_GEN,
  },
  {
    id: 12,
    tag: 'SISTEMA 2.2_16',
    title: 'Sistema 2.2_16',
    desc: 'Industrial-inspired setting with exposed metal frameworks, smoked glass cases, and rustic oak details.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP20_GEN,
  },
  {
    id: 13,
    tag: 'SISTEMA 2.2 PLANET_18',
    title: 'Sistema 2.2 Planet_18',
    desc: 'Elegant L-shape layout incorporating premium white lacquer fronts, wood breakfast bars, and clean lines.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP24_GEN,
  },
  {
    id: 14,
    tag: 'SISTEMA 2.2 LINE_19',
    title: 'Sistema 2.2 Line_19',
    desc: 'Futuristic handles design utilizing grooved line aluminum grip channels and matte satin finishes.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP26_GEN_01,
  },
  {
    id: 15,
    tag: 'SISTEMA 2.2_20',
    title: 'Sistema 2.2_20',
    desc: 'Monochromatic composition featuring matte cement gray surfaces, built-in black profiles, and matching sinks.',
    img: UKS_NOVACUCINA_2025_NOVACUCINA_COMP23_GEN,
  },
]

export default function Novacucina() {
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
        <img src={UKS_NOVACUCINA_2025_NOVACUCINA_COMP01_P1} alt="Novacucina Italian Kitchens" />
      </motion.div>

      {/* Intro Text */}
      <section className="kitchen-intro">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/kitchens">Kitchens</Link>
            <span className="breadcrumbs__separator">/</span>
            <span className="breadcrumbs__current">Novacucina</span>
          </nav>

          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ITALIAN ELEGANCE
          </motion.span>

          <div className="kitchen-intro__grid">
            <motion.h1
              className="kitchen-intro__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.75 }}
            >
              Bespoke Italian<br />
              <em className="text-gold">kitchen structures.</em>
            </motion.h1>

            <motion.div
              className="kitchen-intro__right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <p className="kitchen-intro__text">
                Take a seat. From here you can start getting to know our collections. It is the beginning of the journey we will take together. A journey in which we will show you what we have designed for you. For your home. For your better living spaces.
              </p>
              <p className="kitchen-intro__text">
                Because that is our role: to propose the best solutions to your needs. Explore our selection of premium Novacucina design collections, and schedule a consultation with our studio designers to begin building your custom kitchen.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                BOOK A DESIGN CONSULTATION &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Collections Grid */}
      <section className="kitchen-brands" style={{ borderTop: 'none', paddingTop: '40px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '40px 24px'
            }}
          >
            {collections.map((concept, i) => (
              <Link
                key={concept.id}
                to="/contact"
                className="brand-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}
                >
                  <div className="brand-card__img" style={{ height: '280px' }}>
                    <img src={concept.img} alt={concept.title} loading="lazy" />
                  </div>
                  <div className="brand-card__content" style={{ padding: '16px' }}>
                    <span className="brand-card__tag">{concept.tag}</span>
                    <h3 className="brand-card__title" style={{ fontSize: '24px', margin: '4px 0 8px' }}>{concept.title}</h3>
                    <p className="brand-card__desc">{concept.desc}</p>
                    <span className="btn btn-ghost" style={{ padding: '8px 0', fontSize: '10px' }}>
                      ENQUIRE ABOUT THIS CONCEPT &rarr;
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
