import UKS_KITCHENS_684269M01167309J22 from '../assets/uks-kitchens/uks-kitchens-684269M01167309J22.jpg';
import UKS_KITCHENS_KELLER_KEUKEN_19 from '../assets/uks-kitchens/uks-kitchens-keller-keuken-19.webp';
import UKS_KITCHENS_2025_NOVACUCINA_COMP01_P1 from '../assets/uks-kitchens/uks-kitchens-2025_novacucina_comp01_p1.jpg';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import leichtImg from '../assets/leicht.webp'
import kellerImg from '../assets/keller.webp'
import novacucinaImg from '../assets/novacucina.jpg'

const brandPartners = [
  {
    id: 1,
    name: 'German kitchens Leicht',
    tag: 'LEICHT',
    desc: 'Precision-engineered German craftsmanship, combining advanced technology with elegant, functional design.',
    img: UKS_KITCHENS_684269M01167309J22,
    to: '/kitchens/leicht',
  },
  {
    id: 2,
    name: 'Dutch Keller',
    tag: 'KELLER',
    desc: 'Sleek, minimalist Dutch kitchens crafted with sustainable materials and warm, contemporary finishes.',
    img: UKS_KITCHENS_KELLER_KEUKEN_19,
    to: '/kitchens/keller',
  },
  {
    id: 3,
    name: 'Italian Novacucina',
    tag: 'NOVACUCINA',
    desc: 'High-end Italian kitchen design, blending dramatic aesthetics, rich textures, and bespoke details.',
    img: UKS_KITCHENS_2025_NOVACUCINA_COMP01_P1,
    to: '/kitchens/novacucina',
  },
]

export default function Kitchens() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="kitchens-page"
    >

      {/* ── 1. HERO THUMBNAIL ── */}
      <motion.div
        className="kitchen-hero"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <img src={heroImg} alt="UKS Interiors — Bespoke Kitchen" />
      </motion.div>

      {/* ── 2. INTRO TEXT ── */}
      <section className="kitchen-intro">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR KITCHENS
          </motion.span>

          <div className="kitchen-intro__grid">
            <motion.h1
              className="kitchen-intro__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.75 }}
            >
              Kitchens of<br />
              <em className="text-gold">lasting distinction.</em>
            </motion.h1>

            <motion.div
              className="kitchen-intro__right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <p className="kitchen-intro__text">
                Every UKS kitchen begins with a conversation. We take time to understand how you live, how you cook, and what your home means to you — then we design around that.
              </p>
              <p className="kitchen-intro__text">
                From concept through installation, our craftsmen work exclusively with premium European materials, delivering a result that is both beautiful and built to last.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
                BOOK A DESIGN CONSULTATION →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. BRAND PARTNERS ── */}
      <section className="kitchen-brands">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR BRAND COLLECTIONS
          </motion.span>
          <motion.h2
            className="kitchen-brands__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            Curated European <em className="text-gold">excellence.</em>
          </motion.h2>

          <div className="brands-grid">
            {brandPartners.map((brand, i) => (
              <Link
                key={brand.id}
                to={brand.to}
                className={`brand-card ${brand.wide ? 'brand-card--wide' : ''}`}
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
                    <img src={brand.img} alt={brand.name} />
                  </div>
                  <div className="brand-card__content">
                    <span className="brand-card__tag">{brand.tag}</span>
                    <h3 className="brand-card__title">{brand.name}</h3>
                    <p className="brand-card__desc">{brand.desc}</p>
                    <span className="btn btn-ghost">
                      EXPLORE COLLECTION →
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

