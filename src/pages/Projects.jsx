import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const projects = [
  {
    id: 1,
    name: 'Kensington Townhouse',
    location: 'London',
    year: '2025',
    style: 'Contemporary',
    img: '/project-1.jpg',
  },
  {
    id: 2,
    name: 'Cotswolds Country Retreat',
    location: 'Gloucestershire',
    year: '2024',
    style: 'Classic',
    img: '/project-2.jpg',
  },
  {
    id: 3,
    name: 'Chelsea Apartment',
    location: 'London',
    year: '2024',
    style: 'Modern',
    img: '/kitchen-modern.jpg',
  },
  {
    id: 4,
    name: 'Surrey Countryside Estate',
    location: 'Surrey',
    year: '2023',
    style: 'Bespoke',
    img: '/kitchen-luxury.jpg',
  },
  {
    id: 5,
    name: 'Notting Hill Residence',
    location: 'London',
    year: '2023',
    style: 'Contemporary',
    img: '/kitchen-contemporary.jpg',
  },
  {
    id: 6,
    name: 'Edinburgh New Town Villa',
    location: 'Edinburgh',
    year: '2023',
    style: 'Classic',
    img: '/kitchen-classic.jpg',
  },
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <div className="container">
          <span className="section-label">SELECTED PROJECTS</span>
          <h1 className="page-header__heading">
            Homes we've had the{' '}
            <em className="text-gold">privilege of designing.</em>
          </h1>
          <p className="page-header__sub">
            A curated selection of completed kitchens and interiors — each a collaboration between our studio and its owner.
          </p>
        </div>
      </header>

      <section className="projects-grid">
        <div className="container">
          <div className="projects-grid__inner">
            {projects.map((proj, i) => (
              <motion.article
                key={proj.id}
                className={`proj-full-card ${i === 0 ? 'proj-full-card--wide' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.8 }}
              >
                <div className="proj-full-card__img">
                  <img src={proj.img} alt={proj.name} />
                  <div className="proj-full-card__overlay">
                    <span className="proj-full-card__style">{proj.style}</span>
                  </div>
                </div>
                <div className="proj-full-card__info">
                  <span className="proj-full-card__meta">{proj.location} · {proj.year}</span>
                  <h2 className="proj-full-card__name">{proj.name}</h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner" style={{ background: '#ede8e1' }}>
        <div className="cta-banner__inner container">
          <h2 className="cta-banner__heading">
            Start your own{' '}
            <em className="text-gold">UKS project.</em>
          </h2>
          <p className="cta-banner__text">
            Every project begins with a conversation. Book a complimentary consultation with our design team.
          </p>
          <Link to="/contact" className="btn btn-primary">BOOK A CONSULTATION →</Link>
        </div>
      </section>
    </motion.div>
  )
}
