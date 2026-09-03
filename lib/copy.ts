export const NAV = [
  { href: "/collection", label: "Catalog" },
  { href: "/#atelier", label: "Individual order" },
  { href: "/#about", label: "Portfolio" },
  { href: "/#visit", label: "Payment&Delivery" },
] as const;

export const HERO_CHAIR =
  "/lounge-chair-chair-object-embassy-5747870-Photoroom.png";

export const HERO = {
  wordmark: "alpha",
  tagline: "furniture atelier",
  manifesto:
    "Bespoke furniture made for interiors that value quality, texture, and thoughtful design. From concept to final detail — every piece is built to last and made to be lived with.",
  cta: { href: "/collection", label: "Go to catalog" },
  tiles: [
    {
      href: "/collection",
      label: "Ready to buy →",
      src: "/stills/room-box.jpg",
      alt: "The Alpha room, still in the box",
    },
    {
      href: "/#atelier",
      label: "Custom order →",
      src: "/stills/joinery.jpg",
      alt: "Walnut joinery, taken apart",
    },
  ],
} as const;

export const ABOUT = {
  index: "01/ About us",
  kicker: "Elegant furniture",
  title: "for sophisticated interiors",
  body: [
    "We create furniture with thoughtful architecture, clean lines, and attention to detail — for those who choose not just interior objects, but a quality of life.",
    "We believe all furniture should feel good, look strong, and last beyond trends.",
  ],
  more: { href: "/#atelier", label: "More about Alpha →" },
  left: {
    src: "/stills/room.jpg",
    alt: "A dressed oak bedroom, assembled in the Alpha atelier",
    position: "52% 70%",
  },
  right: {
    src: "/stills/weave.jpg",
    alt: "Hand-woven cane on the Embassy lounge",
    position: "center",
  },
} as const;

export const FRESH = {
  title: "Fresh collection",
  cta: { href: "/collection", label: "Go to full catalog" },
} as const;

export const ATELIER = {
  index: "Individual order",
  kicker: "Made to the room,",
  title: "not the warehouse.",
  body: "Tell us the room. The length of the wall. The light. We will answer with timber and a date.",
} as const;

export const VISIT = {
  title: "Payment & delivery",
  body: "We do not take payment on this site. Enquire, visit the showroom in Thrippunithura, and we will write back with timber, a date, and a price.",
} as const;
