import { useState } from 'react'
import { motion } from 'framer-motion'

// SVG Icons
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const IconPinterest = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.168 1.777 2.168 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.69-2.433-2.878-2.433-4.617 0-3.772 2.737-7.237 7.907-7.237 4.154 0 7.382 2.957 7.382 6.917 0 4.13-2.607 7.453-6.227 7.453-1.215 0-2.358-.63-2.75-1.378l-.752 2.853c-.27 1.04-1.022 2.34-1.526 3.167C10.124 23.834 11.047 24 12.017 24c6.62 0 11.986-5.367 11.986-11.987C24.003 5.367 18.638 0 12.017 0z" />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    budgetRange: '',
    contactMethod: 'email',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRadioChange = (value) => {
    setForm({ ...form, contactMethod: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Image Hero Section matching vercel page exactly */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <img src="/why-uks.jpg" alt="Bespoke luxury kitchen showroom by UKS Interiors" />
          <div className="contact-hero__overlay" />
        </div>
        <div className="contact-hero__content">
          <span className="contact-hero__label">GET IN TOUCH</span>
          <h1 className="contact-hero__heading">
            Begin Your <em className="text-gold">Transformation.</em>
          </h1>
          <p className="contact-hero__sub">
            Every exceptional interior begins with a conversation. We're ready to listen and bring your vision to life.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section__inner container">
          
          {/* Left Column (40%): Details and Showrooms */}
          <div className="contact-luxury-details">
            <div className="contact-luxury-details__header">
              <span className="section-label">GET IN TOUCH</span>
              <h2>
                Let's Create Something <em className="text-gold">Extraordinary.</em>
              </h2>
              <p>
                Whether you have a project in mind or simply want to explore our collections, our team is here to guide you every step of the way.
              </p>
            </div>

            {/* Ruislip Headquarters Detail Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__icon-wrap">
                <IconMapPin />
              </div>
              <div className="contact-detail-card__content">
                <span className="contact-detail-card__label">HEADQUARTERS</span>
                <h3 className="contact-detail-card__title">Ruislip Showroom</h3>
                <address className="contact-detail-card__text">
                  32 Victoria Road, Ruislip, HA4 0AB<br />
                  United Kingdom
                </address>
                <a 
                  href="https://maps.google.com/?q=UKS+Interiors+32+Victoria+Road+Ruislip+HA4+0AB" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-detail-card__link"
                  style={{ marginTop: '4px', fontSize: '12px', color: 'var(--gold)', fontWeight: '600' }}
                >
                  View on Google Maps →
                </a>
              </div>
            </div>


            {/* Direct Contact Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__icon-wrap">
                <IconPhone />
              </div>
              <div className="contact-detail-card__content">
                <span className="contact-detail-card__label">DIRECT CONNECT</span>
                <h3 className="contact-detail-card__title">Call & Write</h3>
                <a href="tel:+441895347277" className="contact-detail-card__link">
                  01895 347277
                </a>
                <a href="tel:+447544381311" className="contact-detail-card__link">
                  07544 381311
                </a>
                <a href="mailto:sales@uks-interiors.com" className="contact-detail-card__link" style={{ fontSize: '14px' }}>
                  sales@uks-interiors.com
                </a>
              </div>
            </div>

            {/* Showroom Hours Card */}
            <div className="contact-detail-card">
              <div className="contact-detail-card__icon-wrap">
                <IconClock />
              </div>
              <div className="contact-detail-card__content">
                <span className="contact-detail-card__label">BUSINESS HOURS</span>
                <h3 className="contact-detail-card__title">Showroom Hours</h3>
                <div className="contact-detail-card__text" style={{ fontSize: '13px' }}>
                  <strong>Ruislip Showroom:</strong><br />
                  Mon – Sat: 09:00am – 05:00pm, Sunday: Closed
                </div>
              </div>
            </div>

            {/* Follow Our Work (Social Grid) */}
            <div className="contact-social-wrap">
              <span className="contact-social-label">Follow Our Work</span>
              <div className="contact-social-grid">
                <a href="https://instagram.com/uksinteriors" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Instagram">
                  <IconInstagram />
                </a>
                <a href="https://facebook.com/uksinteriors" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Facebook">
                  <IconFacebook />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Pinterest">
                  <IconPinterest />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (60%): Consultation Form Cloned from Vercel */}
          <div className="contact-form-wrap">
            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="contact-success__heading">Thank you.</h2>
                <p className="contact-success__text">
                  Your project enquiry has been submitted successfully. Our design consultants will review your details and contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-header">
                  <span className="contact-form-header__label">SEND A MESSAGE</span>
                  <h2 className="contact-form-header__title">
                    Start Your <em className="text-gold">Project.</em>
                  </h2>
                  <p className="contact-form-header__desc">
                    Fill in the details below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="contact-form__input"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-form__input"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="contact-form__input"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+44 7700 000000"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="inquiryType">Inquiry Type *</label>
                    <div className="contact-form__select-wrap">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        className="contact-form__input contact-form__select"
                        value={form.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Inquiry Type</option>
                        <option value="Bespoke Kitchen">Bespoke Kitchen Design</option>
                        <option value="Bespoke Bedroom">Bespoke Bedroom / Wardrobe</option>
                        <option value="Both Design">Kitchen & Bedroom Design</option>
                        <option value="Appliances">Premium Kitchen Appliances</option>
                        <option value="General Inquiry">General / Support Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="budgetRange">Budget Range (Optional)</label>
                    <div className="contact-form__select-wrap">
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        className="contact-form__input contact-form__select"
                        value={form.budgetRange}
                        onChange={handleChange}
                      >
                        <option value="">Select Budget Range</option>
                        <option value="Under £15k">Under £15,000</option>
                        <option value="£15k – £30k">£15,000 – £30,000</option>
                        <option value="£30k – £50k">£30,000 – £50,000</option>
                        <option value="£50k+">£50,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Contact Method Cloned Radio Stack */}
                <div className="contact-form__group contact-form__radio-group">
                  <span className="contact-form__label">Preferred Contact Method</span>
                  <div className="contact-form__radio-row">
                    <label className="contact-form__radio-label" onClick={() => handleRadioChange('email')}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        className="contact-form__radio-input"
                        checked={form.contactMethod === 'email'}
                        onChange={() => {}}
                      />
                      <div className="contact-form__radio-custom">
                        <div className="contact-form__radio-inner"></div>
                      </div>
                      <span>Email</span>
                    </label>

                    <label className="contact-form__radio-label" onClick={() => handleRadioChange('phone')}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        className="contact-form__radio-input"
                        checked={form.contactMethod === 'phone'}
                        onChange={() => {}}
                      />
                      <div className="contact-form__radio-custom">
                        <div className="contact-form__radio-inner"></div>
                      </div>
                      <span>Phone</span>
                    </label>

                    <label className="contact-form__radio-label" onClick={() => handleRadioChange('whatsapp')}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        className="contact-form__radio-input"
                        checked={form.contactMethod === 'whatsapp'}
                        onChange={() => {}}
                      />
                      <div className="contact-form__radio-custom">
                        <div className="contact-form__radio-inner"></div>
                      </div>
                      <span>WhatsApp</span>
                    </label>
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label" htmlFor="message">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form__input contact-form__textarea"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Describe your space, vision, timeline, and any specific requirements..."
                  />
                  <span className="contact-form__char-counter">
                    {form.message.length} characters
                  </span>
                </div>

                <button type="submit" className="contact-form__submit-btn">
                  Send Inquiry <span style={{ marginLeft: '4px' }}>→</span>
                </button>
              </form>
            )}
          </div>
        </div>


      </section>
    </motion.div>
  )
}
