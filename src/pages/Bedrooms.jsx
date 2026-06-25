import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const bedroomStyles = [
  {
    id: 1,
    style: 'Fitted Wardrobes',
    desc: 'Floor-to-ceiling fitted storage that maximises every inch — designed with precision and elegance.',
    img: '/bedroom-hero.jpg',
    tag: 'STORAGE',
  },
  {
    id: 2,
    style: 'Dressing Rooms',
    desc: 'A dedicated space for your wardrobe, designed around how you live and what you love.',
    img: '/why-uks.jpg',
    tag: 'DRESSING',
  },
]

export default function Bedrooms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <div className="container">
          <span className="section-label">BEDROOMS & DRESSING</span>
          <h1 className="page-header__heading">
            Spaces made for{' '}
            <em className="text-gold">restful living.</em>
          </h1>
          <p className="page-header__sub">
            Bespoke fitted bedroom furniture designed around your space, your wardrobe and your life.
          </p>
        </div>
      </header>

      <section className="bedroom-hero-img">
        <img src="/bedroom-hero.jpg" alt="Luxury bespoke bedroom by UKS Interiors" />
      </section>

      <section className="kitchen-list">
        {bedroomStyles.map((b, i) => (
          <motion.article
            key={b.id}
            className={`kitchen-item ${i % 2 === 1 ? 'kitchen-item--reverse' : ''}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <div className="kitchen-item__img">
              <img src={b.img} alt={b.style} />
            </div>
            <div className="kitchen-item__content">
              <span className="kitchen-item__tag">{b.tag}</span>
              <h2 className="kitchen-item__title">{b.style}</h2>
              <p className="kitchen-item__desc">{b.desc}</p>
              <Link to="/contact" className="btn btn-primary">ENQUIRE NOW →</Link>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="cta-banner" style={{ background: '#ede8e1' }}>
        <div className="cta-banner__inner container">
          <h2 className="cta-banner__heading">
            Begin your bedroom{' '}
            <em className="text-gold">transformation.</em>
          </h2>
          <p className="cta-banner__text">
            Schedule a complimentary consultation with our bedroom design specialists.
          </p>
          <Link to="/contact" className="btn btn-primary">BOOK A CONSULTATION →</Link>
        </div>
      </section>
    </motion.div>
  )
}
