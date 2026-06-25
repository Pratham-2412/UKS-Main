import { useState } from 'react'
import { motion } from 'framer-motion'


export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
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
      transition={{ duration: 0.4 }}
    >
      <header className="page-header">
        <div className="container">
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="page-header__heading">
            Book a{' '}
            <em className="text-gold">Consultation.</em>
          </h1>
          <p className="page-header__sub">
            Whether you're at the beginning of your project or ready to get started, we'd love to hear from you.
          </p>
        </div>
      </header>

      <section className="contact-section">
        <div className="contact-section__inner container">
          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="contact-success__heading">Thank you.</h2>
                <p className="contact-success__text">
                  We've received your enquiry and will be in touch within one working day.
                </p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="contact-form__input"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jane"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="contact-form__input"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label className="contact-form__label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-form__input"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="contact-form__input"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 000 0000 0000"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">I'm interested in</label>
                  <select
                    name="interest"
                    className="contact-form__input contact-form__select"
                    value={form.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option…</option>
                    <option value="kitchen">A Kitchen</option>
                    <option value="bedroom">A Bedroom / Dressing Room</option>
                    <option value="both">Kitchen & Bedroom</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="contact-form__group">
                  <label className="contact-form__label">Tell us about your project</label>
                  <textarea
                    name="message"
                    className="contact-form__input contact-form__textarea"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your home, timeline, and what you're looking to achieve…"
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  SEND ENQUIRY →
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__block">
              <h3 className="contact-info__heading">Our Studio</h3>
              <address className="contact-info__address">
                UKS Design Studio<br />
                22 Pavilion Road<br />
                London SW1X 0BP<br />
                United Kingdom
              </address>
            </div>

            <div className="contact-info__block">
              <h3 className="contact-info__heading">Get In Touch</h3>
              <a href="tel:+442070000000" className="contact-info__link">
                +44 (0)20 7000 0000
              </a>
              <a href="mailto:studio@uksinteriors.com" className="contact-info__link">
                studio@uksinteriors.com
              </a>
            </div>

            <div className="contact-info__block">
              <h3 className="contact-info__heading">Studio Hours</h3>
              <p className="contact-info__hours">Monday – Friday: 9:00 – 17:30</p>
              <p className="contact-info__hours">Saturday: By appointment</p>
              <p className="contact-info__hours">Sunday: Closed</p>
            </div>

            <div className="contact-info__img">
              <img src="/why-uks.jpg" alt="UKS Design Studio" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
