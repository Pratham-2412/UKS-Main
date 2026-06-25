import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const kitchenStyles = [
  {
    name: 'The Contemporary',
    desc: 'Clean lines, integrated appliances, handleless forms.',
    img: '/kitchen-contemporary.jpg',
  },
  {
    name: 'The Modern',
    desc: 'Warm woods, stone worktops, curated brasswork.',
    img: '/kitchen-modern.jpg',
  },
  {
    name: 'The Classic',
    desc: 'In-frame craftsmanship, painted finishes, timeless proportions.',
    img: '/kitchen-classic.jpg',
  },
  {
    name: 'The Bespoke',
    desc: 'Entirely your vision — no two are ever alike.',
    img: '/kitchen-luxury.jpg',
  },
]

const whyItems = [
  {
    title: 'Bespoke Design',
    desc: 'Every kitchen begins with your home, your life, and your vision — then we design from there.',
  },
  {
    title: 'Expert Craftsmanship',
    desc: 'Our makers work with heirloom-grade materials, precision-engineered to exact tolerances.',
  },
  {
    title: 'Premium Materials',
    desc: 'Honed marbles, solid timbers and solid brass — sourced and selected with intent.',
  },
  {
    title: 'Attention To Detail',
    desc: 'Hand-finished edges, soft-close mechanics, and proportions resolved to the millimetre.',
  },
]

const selectedProjects = [
  {
    name: 'Kensington Townhouse',
    location: 'London',
    year: '2025',
    img: '/project-1.jpg',
  },
  {
    name: 'Cotswolds Country Retreat',
    location: 'Gloucestershire',
    year: '2024',
    img: '/project-2.jpg',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/hero-kitchen.jpg" alt="Luxury bespoke kitchen by UKS Interiors" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <motion.span
            className="hero__label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            BESPOKE KITCHENS — EST. UKS INTERIORS
          </motion.span>
          <motion.h1
            className="hero__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Crafting Exceptional{' '}
            <em className="hero__heading-gold">Kitchens</em>{' '}
            for Modern Living
          </motion.h1>
          <motion.p
            className="hero__subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            Bespoke kitchen design combining elegance, functionality and
            uncompromising craftsmanship — created in close collaboration
            with discerning homeowners.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/projects" className="btn btn-outline-white">
              VIEW PROJECTS →
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              SCHEDULE CONSULTATION
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <span className="hero__scroll-text">SCROLL</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      <section className="collections">
        <div className="collections__header container">
          <div className="collections__title-wrap">
            <h2 className="collections__heading">
              A kitchen for every{' '}
              <em className="text-gold">sensibility.</em>
            </h2>
          </div>
          <p className="collections__subtext">
            Four signature directions, each meticulously detailed and tailored to the rhythm of your home.
          </p>
        </div>

        <div className="collections__grid container">
          {kitchenStyles.map((style, i) => (
            <motion.div
              key={style.name}
              className="collection-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div className="collection-card__img">
                <img src={style.img} alt={style.name} />
              </div>
              <div className="collection-card__info">
                <h3 className="collection-card__name">{style.name}</h3>
                <p className="collection-card__desc">{style.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="collections__cta container">
          <Link to="/kitchens" className="btn btn-primary">
            EXPLORE ALL KITCHENS →
          </Link>
        </div>
      </section>

      {/* ===== WHY UKS ===== */}
      <section className="why">
        <div className="why__inner container">
          <div className="why__left">
            <span className="section-label">WHY UKS</span>
            <h2 className="why__heading">
              A studio devoted to the{' '}
              <em className="text-gold">art of the kitchen.</em>
            </h2>
            <p className="why__text">
              For over two decades, UKS has designed and installed bespoke kitchens for some of the most discerning homes across Europe. We believe in quietly confident design, exceptional materials, and a process that respects the architecture of your home.
            </p>
            <motion.div
              className="why__features"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {whyItems.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="why__feature">
                  <h3 className="why__feature-title">{item.title}</h3>
                  <p className="why__feature-desc">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="why__right">
            <div className="why__img-wrap">
              <img src="/why-uks.jpg" alt="UKS craftsmanship detail" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELECTED PROJECTS ===== */}
      <section className="projects-preview">
        <div className="projects-preview__header container">
          <span className="section-label">SELECTED PROJECTS</span>
          <h2 className="projects-preview__heading">
            Homes we've had the{' '}
            <em className="text-gold">privilege of designing.</em>
          </h2>
        </div>

        <div className="projects-preview__grid container">
          {selectedProjects.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="proj-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <div className="proj-card__img">
                <img src={proj.img} alt={proj.name} />
                <div className="proj-card__overlay">
                  <Link to="/projects" className="proj-card__view">VIEW PROJECT →</Link>
                </div>
              </div>
              <div className="proj-card__info">
                <span className="proj-card__location">{proj.location} · {proj.year}</span>
                <h3 className="proj-card__name">{proj.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="projects-preview__cta container">
          <Link to="/projects" className="btn btn-primary">
            VIEW ALL PROJECTS →
          </Link>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-banner__inner container">
          <h2 className="cta-banner__heading">
            Ready to begin your{' '}
            <em className="text-gold">kitchen journey?</em>
          </h2>
          <p className="cta-banner__text">
            Schedule a complimentary design consultation at our London studio or at your home.
          </p>
          <Link to="/contact" className="btn btn-primary">
            BOOK A CONSULTATION →
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
