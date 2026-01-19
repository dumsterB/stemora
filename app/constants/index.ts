import type { NavLink, SocialLink, Advantage, Review, FaqItem, BeforeAfterImage, WorkStep } from '~/types'

// Navigation
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Process', href: '/process' },
  // { name: 'Contact', href: '/contact' },
  { name: 'Book now', href: '/book-now' }
]

export const FOOTER_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Process', href: '/process' },
  { name: 'Contact', href: '/contact' }
]

// Social Media
import google from '~/assets/icons/google.svg'
import facebook from '~/assets/icons/facebook.svg'
import instagram from '~/assets/icons/instagram.svg'
import pinterest from '~/assets/icons/pinterest.svg'
import tiktok from '~/assets/icons/tiktok.svg'

export const SOCIAL_LINKS: SocialLink[] = [
  // { name: 'Google', href: 'https://www.google.com', img: google },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1QaMST5dCd/?mibextid=wwXIfr', img: facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/stemora.clean', img: instagram }
  // { name: 'Pinterest', href: 'https://www.pinterest.com', img: pinterest },
  // { name: 'TikTok', href: 'https://www.tiktok.com', img: tiktok }
]

// Advantages
import sofa from '~/assets/icons/sofa.png'
import plastic from '~/assets/icons/plastic.png'
import dry from '~/assets/icons/dry.png'
import appointment from '~/assets/icons/appointment.png'

export const ADVANTAGES: Advantage[] = [
  {
    img: sofa,
    title: 'Deep sofa cleaning',
    class: 'bg-[#FAF1F2] hover:ring ring-[#FF4E64]'
  },
  {
    img: plastic,
    title: 'Eco-Friendly Steam',
    class: 'bg-[#FAF4F1] hover:ring ring-[#FF4E64]'
  },
  {
    img: dry,
    title: 'Fast dry Time',
    class: 'bg-[#F8F6FB] hover:ring ring-[#FF4E64]'
  },
  {
    img: appointment,
    title: 'Easy scheduling',
    class: 'bg-[#EDF1F5] hover:ring ring-[#FF4E64]'
  }
]

// Before/After Images
import sofa1before from '~/assets/images/before-after/sofa1-before.png'
import sofa1after from '~/assets/images/before-after/sofa1-after.png'
import sofa2before from '~/assets/images/before-after/sofa2-before.png'
import sofa2after from '~/assets/images/before-after/sofa2-after.png'
import sofa3before from '~/assets/images/before-after/sofa3-before.png'
import sofa3after from '~/assets/images/before-after/sofa3-after.png'
import sofa4before from '~/assets/images/before-after/sofa4-before.png'
import sofa4after from '~/assets/images/before-after/sofa4-after.png'

export const BEFORE_AFTER_IMAGES: BeforeAfterImage[] = [
  { before: sofa1before, after: sofa1after },
  { before: sofa2before, after: sofa2after },
  { before: sofa3before, after: sofa3after },
  { before: sofa4before, after: sofa4after }
]
import faceMale from '~/assets/images/face-m.png'
import faceFemale from '~/assets/images/face-f.png'
import faceFemaleS from '~/assets/images/face-fS.png'
// Reviews
export const REVIEWS: Review[] = [
  {
    avatar: faceFemale,
    name: 'Emily R. – Brooklyn, NY',
    rate: 5,
    text: 'I honestly didn’t realize how dirty my couch was until Stemora finished cleaning it. It looks brand new! The technician was polite, arrived on time, and explained everything clearly. Totally worth it — my living room smells so fresh now!'
  },
  {
    avatar: faceMale,
    name: 'Michael S. – Jersey City, NJ',
    rate: 5,
    text: 'Amazing service! I booked last minute and they still managed to come the same day. They removed stains I thought would never come out. The results were better than I expected — I’ll definitely be calling Stemora again.'
  },
  {
    avatar: faceFemaleS,
    name: 'Sofia D. – Manhattan, NY',
    rate: 5,
    text: 'Professional, fast, and super friendly team. I love that they use steam — no harsh chemicals, just clean and fresh furniture. My velvet sofa looks like new again. Highly recommend Stemora to anyone in NYC or NJ!'
  }
]

// FAQ
export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'How long does the cleaning process take?',
    text: 'Most couch or upholstery cleanings take 1–2 hours, depending on the size of the furniture and how heavily soiled it is. Larger sectionals or multiple items may take longer, but we always work efficiently without compromising quality.'
  },
  {
    q: 'How long does it take for my couch to dry?',
    text: 'Typically, your couch will be dry within 3–6 hours after cleaning. We use professional-grade steam extraction equipment that removes most of the moisture, so drying time is quick and safe for all fabric types.'
  },
  {
    q: 'Do you use chemicals or is it eco-friendly?',
    text: 'Stemora uses eco-friendly, non-toxic steam cleaning methods — safe for kids, pets, and allergy-sensitive homes. No harsh chemicals, just deep steam power and gentle, plant-based cleaning solutions.'
  }
]

// Contact Information
export const CONTACT_INFO = {
  phone: '(929) 538 8456',
  email: 'info@stemora-clean.com',
  address: 'Based in New York City Serving NYC & New Jersey'
} as const

// Work Steps / Process
export const ABOUT_WORKS_LIST: WorkStep[] = [
  {
    labelKey: 'Step 1: Preparation',
    descKey:
      'Clear the area that needs to be cleaned of any clutter, such as toys, clothing, and other objects. Move any furniture that needs to be cleaned underneath to create a clear workspace.'
  },
  {
    labelKey: 'Step 2: Pre-Vacuuming',
    descKey: 'Starting at the top of the couch we use vacuum to remove any loose dirt and debris.'
  },
  {
    labelKey: 'Step 3: Shampooing',
    descKey:
      'The team will then apply an organic shampooing solution to the carpet or upholstery, using a machine to work the shampoo deep into the fibers.'
  },
  {
    labelKey: 'Step 4: Steam Extraction',
    descKey:
      'Next, the team will use a high-powered steam-extraction machine to remove the shampoo and dirt from the carpet or upholstery. This process will remove any excess moisture and dirt from the fibers.'
  },
  {
    labelKey: 'Step 5: Odor Treatment',
    descKey:
      'The team will then apply a professional odor treatment solution to eliminate any unpleasant smells that may be present.'
  },
  {
    labelKey: 'Step 6: Scotch Guard Protection',
    descKey:
      'After the cleaning process is complete, the team will apply a Scotchgard protection service. This will help to block stains and repel liquids from soaking into the fibers, making it easier to clean up any spills that may occur in the future.'
  }
]
