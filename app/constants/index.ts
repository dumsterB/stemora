import type { NavLink, SocialLink, Advantage, Review, FaqItem, BeforeAfterImage, WorkStep } from '~/types'

// Navigation
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
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
  { name: 'Google', href: 'https://www.google.com', img: google },
  { name: 'Facebook', href: 'https://www.facebook.com', img: facebook },
  { name: 'Instagram', href: 'https://www.instagram.com', img: instagram },
  { name: 'Pinterest', href: 'https://www.pinterest.com', img: pinterest },
  { name: 'TikTok', href: 'https://www.tiktok.com', img: tiktok }
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

// Reviews
export const REVIEWS: Review[] = [
  {
    name: 'Hanna Bator',
    rate: 4,
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  },
  {
    name: 'Corey Levin',
    rate: 4,
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  },
  {
    name: 'Craig Carder',
    rate: 4,
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  }
]

// FAQ
export const FAQ_ITEMS: FaqItem[] = [
  {
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  },
  {
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  },
  {
    text: 'Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker. Polkadot waves ox kadena tezos bancor kusama livepeer decred. Quant THETA gala helium holo. Telcoin loopring fantom hive.'
  }
]

// Contact Information
export const CONTACT_INFO = {
  phone: '(+99871) 231-79-09',
  email: 'finfo@gmail.com',
  address: '100015, Republic of Uzbekistan, Tashkent, Mirabad district, st. Nukusskaya, 22'
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
