export interface Advantage {
  img: string
  title: string
  class: string
}

export interface BeforeAfterImage {
  before: string
  after: string
}

export interface Review {
  avatar: string
  name: string
  rate: number
  text: string
}

export interface FaqItem {
  q: string
  text: string
}

export interface NavLink {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  img: string
}

export interface WorkStep {
  labelKey: string
  descKey: string
}
