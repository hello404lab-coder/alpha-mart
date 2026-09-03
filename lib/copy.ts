export const NAV = [
  { href: "/collection", label: "Catalog" },
  { href: "/#atelier", label: "Individual order" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#visit", label: "Payment&Delivery" },
] as const;

export const HERO_CHAIR = "/stills/cane-lounge.webp";

export const HERO = {
  wordmark: "curated",
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

export const PROCESS = {
  index: "02/ Process",
  kicker: "From first measure",
  title: "to a piece that stays",
  steps: [
    {
      n: "01",
      title: "Visit",
      body: "Come to the showroom in Thrippunithura, or send the length of the wall and the light. We start with the room, not a catalogue spread.",
      src: "/stills/room-box.jpg",
      alt: "An Alpha piece, arriving",
      position: "center",
    },
    {
      n: "02",
      title: "Specify",
      body: "Timber, cane, finish, and the joints you will live with. Nothing is hidden. You see the piece before it is committed.",
      src: "/stills/joinery.jpg",
      alt: "Walnut lounge, taken apart",
      position: "center 45%",
    },
    {
      n: "03",
      title: "Make",
      body: "Built to the wall, oiled, and sent. A date, not a warehouse. The room is finished when you sit down.",
      src: "/stills/room-bed.jpg",
      alt: "The oak bed, made to the room",
      position: "50% 70%",
    },
  ],
} as const;

export const PORTFOLIO = {
  index: "03/ Portfolio",
  kicker: "Selected work",
  title: "in rooms that are lived in",
  cta: { href: "/collection", label: "See the catalog →" },
  items: [
    {
      src: "/stills/room-lounge.jpg",
      alt: "Oak bedroom with linen lounge and Alpha throw",
      position: "50% 78%",
      span: "large",
    },
    {
      src: "/stills/room.jpg",
      alt: "Slatted wall, houndstooth seat, round oak table",
      position: "center 40%",
      span: "tall",
    },
    {
      src: "/stills/weave.jpg",
      alt: "Hand-woven cane, close",
      position: "center",
      span: "wide",
    },
    {
      src: "/stills/room-dresser.jpg",
      alt: "Oak dresser and shelves in the Alpha room",
      position: "18% 58%",
      span: "wide",
    },
    {
      src: "/stills/joinery.jpg",
      alt: "Joinery in the air",
      position: "center 50%",
      span: "square",
      contain: true,
    },
  ],
} as const;

export const MATERIALS = {
  index: "04/ Materials",
  kicker: "Chosen once",
  title: "and meant to last",
  items: [
    {
      name: "Walnut",
      body: "Dark grain, oiled, for frames that take the hand every day.",
      src: HERO_CHAIR,
      alt: "Solid walnut on the cane lounge",
      contain: true,
    },
    {
      name: "Oak",
      body: "Pale, quiet, for beds, dressers, and the long wall.",
      src: "/stills/room-dresser.jpg",
      alt: "Oak dresser in the Alpha room",
      position: "20% 55%",
    },
    {
      name: "Cane",
      body: "Hand-woven, see-through, so the piece stays light in the room.",
      src: "/stills/weave.jpg",
      alt: "Hand-woven cane",
      position: "center",
    },
  ],
  visit:
    "Visit the showroom on SH15, Thrippunithura — or enquire and we will write back.",
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
