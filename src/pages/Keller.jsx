import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const stylesData = [
  {
    id: 'modern',
    title: 'Modern kitchens',
    desc: 'The modern interior style incorporates sleek, timeless design palettes. In addition to clean lines or a graphic interplay of lines, we are also seeing more and more round shapes these days. The interior is often minimalistic with lots of natural light.',
    nextTitle: 'Classic kitchens',
    nextId: 'classic',
    models: [
      {
        name: 'Suite Life',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/WmADdD35/uploads/media/68f2391d37f1b/suite-life-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Natural Harmony',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/1HfN8X3c/uploads/media/66e01dd6be2d7/natural-harmony-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Perfect Sense',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/sax3Iuv0/uploads/media/6308be8ced6cc/1920-x-1090-hero-perfectsense.webp?originalExtension=jpg'
      },
      {
        name: 'Black Marble',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/m03J7L3K/uploads/media/6308c7e323e6f/1920-x-1090-hero-blackmarble.webp?originalExtension=jpg'
      },
      {
        name: 'City chic',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/Kc3Tl9w1/uploads/media/67444e89aecc5/1920-x-1090-hero-citychic-walnootkaramel.webp?originalExtension=jpg'
      },
      {
        name: 'Matt Black',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/YgLXYn6e/uploads/media/630c8aade7af0/1920-x-1090-hero-mattblack.webp?originalExtension=jpg'
      },
      {
        name: 'Modern Urban',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/HUPXKnPl/uploads/media/66e14d8593ac7/modern-urban-1326-x-884-afbeelding.webp?originalExtension=png'
      },
      {
        name: 'Nautical Navy',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/v1qjHSrB/uploads/media/630c8fac00834/1920-x-1090-hero-nauticalnavy.webp?originalExtension=jpg'
      },
      {
        name: 'Northern Nature',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/O8o6VGMY/uploads/media/63c905d0d2eb9/1920-x-1090-hero-northernnature.webp?originalExtension=jpg'
      },
      {
        name: 'Pure Basic',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/vfXdKbzj/uploads/media/630c82c26d026/1920-x-1090-hero-purebasic.webp?originalExtension=jpg'
      },
      {
        name: 'Vogue Vibes',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/Pp1uYGRF/uploads/media/655f44e32b79d/1920-x-1090-hero-voguevibes.webp?originalExtension=jpg'
      }
    ]
  },
  {
    id: 'classic',
    title: 'Classic kitchens',
    desc: 'The classic living style is majestic and elegant with rich materials and deep colour palettes. Characteristic are symmetrical lines, ornaments and elements such as columns, panelling, chandeliers, fireplaces and bookcases. The interior evokes a feeling of luxury and wealth.',
    nextTitle: 'Country style kitchens',
    nextId: 'country',
    models: [
      {
        name: 'Retro Vibes',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/D2t8og5h/uploads/media/68f0f29be799f/retro-vibes-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Natural Weave',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/kcN9ZSKg/uploads/media/68f1e8cb5c9b4/natural-weave-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Calm Flow',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/ZkjuSX14/uploads/media/68f5d9b9d834e/calm-flow-hero2.webp?originalExtension=jpg'
      },
      {
        name: 'Timeless Charm',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/WX57s4Yb/uploads/media/66e14ccf72b7e/timeless-charm-1326-x-884-afbeelding.webp?originalExtension=png'
      },
      {
        name: 'Bliss Boutique',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/HC4KAMvx/uploads/media/6322f6c5c2922/1920-x-1090-heroblissboutique.webp?originalExtension=jpg'
      },
      {
        name: 'Glam Chic',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/zV7m5Fxe/uploads/media/6322f118d95df/1920-x-1090-hero-glamchic.webp?originalExtension=jpg'
      },
      {
        name: 'Majestic Mansion',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/w57ebxpK/uploads/media/63218a81bc161/1920-x-1090-hero-majesticmansion.webp?originalExtension=jpg'
      },
      {
        name: 'Marbling Moods',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/DsKqUj3L/uploads/media/6305d6b460601/marbling-moods-1920-x-1090.webp?originalExtension=png'
      },
      {
        name: 'Ocean Breeze',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/mLCGJGp6/uploads/media/64ec5a6663f39/1920-x-1090-hero-ocean-breeze.webp?originalExtension=jpg'
      },
      {
        name: 'Oriëntal Essence',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/llBb6jEE/uploads/media/66e14e4b01341/oriental-essence-1326-x-884-afbeelding.webp?originalExtension=png'
      },
      {
        name: 'Raw Nature',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/Um6IYMOX/uploads/media/637c8b860c62e/1920-x-1090-hero-raw-nature.webp?originalExtension=jpg'
      },
      {
        name: 'Tuscan Villa',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/hcgaym3g/uploads/media/64ec8d9edb3b4/1920-x-1090-hero-tuscan-villa.webp?originalExtension=jpg'
      }
    ]
  },
  {
    id: 'country',
    title: 'Country style kitchens',
    desc: 'A country style interior breaths the atmosphere of the outdoors and incorporates many natural materials and botanicals. Inspired by charming holiday homes and cottages, the country style offers warmth, tranquility and cosiness.',
    nextTitle: 'Industrial kitchens',
    nextId: 'industrial',
    models: [
      {
        name: 'Silent River',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/iDg0Jhh6/uploads/media/68f22c8fee668/silent-river-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Zen Life',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/iphZATfs/uploads/media/674846211a708/keller-keuken-2.webp?originalExtension=jpg'
      },
      {
        name: 'Black Cottage',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/JGah8Gf2/uploads/media/631f1dbb493c3/1920-x-1090-hero-blckcottage.webp?originalExtension=jpg'
      },
      {
        name: 'Cottage Life',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/qKidCM6j/uploads/media/630cc28992239/1920-x-1090-hero-cottagelife.webp?originalExtension=jpg'
      },
      {
        name: 'Misty Grey',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/Pe4HEea7/uploads/media/64ec620dbe613/1920-x-1090-hero-mistygrey.webp?originalExtension=jpg'
      },
      {
        name: 'Modern Farmhouse',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/lPHTlABB/uploads/media/630dce0aad09b/1920-x-1090-hero-modernfarmhouse.webp?originalExtension=jpg'
      },
      {
        name: 'Natural Basic',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/7Lng14Lx/uploads/media/630ddb1545e23/1920-x-1090-hero-natural-basic.webp?originalExtension=jpg'
      },
      {
        name: 'New Country',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/DBprpywA/uploads/media/631f14bb07ec4/1920-x-1090-hero-new-country.webp?originalExtension=jpg'
      },
      {
        name: 'Smokey Wood',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/GTwDx8tV/uploads/media/6566f6542c105/1920-x-1090-hero-smokeywood.webp?originalExtension=jpg'
      }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial kitchens',
    desc: 'The industrial style of living is reminiscent of old (factory) buildings or lofts. Construction details such as steel beams, concrete or brick are characteristic details in these types of design schemes. Robust and aged materials give this interior a sturdy touch.',
    nextTitle: null,
    nextId: null,
    models: [
      {
        name: 'Bold Elegance',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/BJ2OQLpT/uploads/media/66e0836f017d9/bold-elegance-hero.webp?originalExtension=jpg'
      },
      {
        name: 'Urban Nude',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/odc4sSud/uploads/media/630cbb72a2fc9/1920-x-1090-hero-urbannude.webp?originalExtension=jpg'
      },
      {
        name: 'Black Metal',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/0b1TTPSx/uploads/media/630cb1d98f788/1920-x-1090-hero-blckmetal.webp?originalExtension=jpg'
      },
      {
        name: 'Brooklyn Brick',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/g6W7B6x5/uploads/media/631ef3b6b8d84/1920-x-1090-hero-brooklynbrick.webp?originalExtension=jpg'
      },
      {
        name: 'Concrete Jungle',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/YmbOJV0U/uploads/media/630cb785aa135/1920-x-1090-hero-concretejungle.webp?originalExtension=jpg'
      },
      {
        name: 'Dark Rituals',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/EiSGawKS/uploads/media/630c91435d3fc/1920-x-1090-hero-darkrituals.webp?originalExtension=jpg'
      },
      {
        name: "Nature's Choice",
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/tRV66fWT/uploads/media/64ec6cf21563c/1920-x-1090-hero-natureschoice.webp?originalExtension=jpg'
      },
      {
        name: 'Rock Solid',
        image: 'https://www.kellerkitchens.com/media/cache/generic/rc/w9F2wZGx/uploads/media/630cbc8e45e20/1920-x-1090-hero-rocksolid.webp?originalExtension=jpg'
      }
    ]
  }
]

function StyleSection({ id, title, desc, models, nextTitle, nextId, reverse }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [startIdx, setStartIdx] = useState(0)
  const showCount = 3

  const nextSlide = () => {
    setActiveIdx((prev) => {
      const nextIdx = (prev + 1) % models.length
      // adjust starting index if we slide past the current window
      if (nextIdx === 0) {
        setStartIdx(0)
      } else if (nextIdx >= startIdx + showCount) {
        setStartIdx(nextIdx - showCount + 1)
      }
      return nextIdx
    })
  }

  const prevSlide = () => {
    setActiveIdx((prev) => {
      const prevIdx = (prev - 1 + models.length) % models.length
      // adjust starting index if we slide past the current window
      if (prevIdx === models.length - 1) {
        setStartIdx(models.length - showCount)
      } else if (prevIdx < startIdx) {
        setStartIdx(prevIdx)
      }
      return prevIdx
    })
  }

  const selectModel = (globalIndex) => {
    setActiveIdx(globalIndex)
  }

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Get models currently visible in the sliding thumbnail row
  const visibleModels = models.slice(startIdx, startIdx + showCount)

  return (
    <section id={id} className={`keller-split ${reverse ? 'keller-split--reverse' : ''}`}>
      {/* Left Column (Content, Thumbnails, navigation) */}
      <div className="keller-split__left">
        <div className="keller-split__content">
          <h2 className="keller-split__title">{title}</h2>
          <p className="keller-split__desc">{desc}</p>
          <Link to={id === 'modern' ? '/kitchens/keller/modern-kitchens' : '/contact'} className="keller-split__btn-read">
            Read more
          </Link>
        </div>

        <div className="keller-split__carousel">
          <div className="keller-split__thumbs">
            {visibleModels.map((model, i) => {
              const globalIndex = startIdx + i
              const isActive = globalIndex === activeIdx
              return (
                <div
                  key={model.name}
                  onClick={() => selectModel(globalIndex)}
                  className={`keller-split__thumb ${isActive ? 'keller-split__thumb--active' : ''}`}
                >
                  <img src={model.image} alt={model.name} />
                </div>
              )
            })}
          </div>

          <div className="keller-split__controls">
            <div className="keller-split__arrows">
              <button onClick={prevSlide} className="keller-split__arrow-btn" aria-label="Previous image">
                &#8249;
              </button>
              <button onClick={nextSlide} className="keller-split__arrow-btn" aria-label="Next image">
                &#8250;
              </button>
            </div>

            {nextId && (
              <a
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(nextId)
                }}
                href={`#${nextId}`}
                className="keller-split__next-link"
              >
                <span>{nextTitle}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14l-7 7-7-7M12 21V3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Column (Large image, and detail button) */}
      <div className="keller-split__right">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={models[activeIdx].image}
            alt={models[activeIdx].name}
            className="keller-split__image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        <Link to="/contact" className="keller-split__btn-more">
          <span>More about this kitchen &rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default function Keller() {
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
        <img src="https://www.kellerkitchens.com/media/cache/generic/rc/U4CpjXYX/uploads/media/674846241e714/keller-keuken-19.webp?originalExtension=jpg" alt="Keller Dutch Kitchens" />
      </motion.div>

      {/* Intro Text */}
      <section className="kitchen-intro" style={{ borderBottom: 'none' }}>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/kitchens">Kitchens</Link>
            <span className="breadcrumbs__separator">/</span>
            <span className="breadcrumbs__current">Keller</span>
          </nav>

          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            DUTCH PRECISION
          </motion.span>

          <div className="kitchen-intro__grid">
            <motion.h1
              className="kitchen-intro__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.75 }}
            >
              Kitchens in<br />
              <em className="text-gold">4 interior styles.</em>
            </motion.h1>

            <motion.div
              className="kitchen-intro__right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <p className="kitchen-intro__text">
                Keller kitchens are designed and crafted in the Netherlands, combining sleek, minimalist Dutch aesthetics with exceptional sustainability and custom craftsmanship.
              </p>
              <p className="kitchen-intro__text">
                Explore their collections organized into four signature interior styles: Modern, Classic, Country, and Industrial. Click on any model thumbnail to view the details.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style sections list */}
      <div className="keller-sections-list">
        {stylesData.map((style, idx) => (
          <StyleSection
            key={style.id}
            id={style.id}
            title={style.title}
            desc={style.desc}
            models={style.models}
            nextTitle={style.nextTitle}
            nextId={style.nextId}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
    </motion.div>
  )
}
