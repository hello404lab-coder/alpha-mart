import { HERO_CHAIR } from "./copy";

export type ProductCategory = "seating" | "sleep" | "storage" | "objects";

export type ProductImage = {
  src: string;
  alt: string;
  position?: string;
  contain?: boolean;
  label?: string;
};

export type ProductFinish = {
  id: string;
  label: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  sku: string;
  category: ProductCategory;
  price: number;
  spec: string;
  description: string;
  blurb: string;
  chips: string[];
  badge?: string;
  rating?: number;
  finishes?: ProductFinish[];
  images: ProductImage[];
  dimensions: string;
  timber: string;
  finish: string;
  origin: string;
};

export const CATEGORIES: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "seating", label: "Seating" },
  { id: "sleep", label: "Sleep" },
  { id: "storage", label: "Storage" },
  { id: "objects", label: "Objects" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "cane-lounge",
    name: "Cane Lounge",
    sku: "AL-CL-01",
    category: "seating",
    price: 1480,
    spec: "Walnut frame · hand-woven cane",
    description:
      "A low lounge in solid walnut, with a cane back and seat that you can see through. Through-bolts, not glue, hold the arms. Built to be sat in, not explained.",
    blurb:
      "Low walnut lounge with a cane back and seat. Through-bolts, not glue, hold the arms.",
    chips: ["handcrafted", "walnut"],
    badge: "handcrafted",
    rating: 4.8,
    finishes: [
      { id: "walnut", label: "Walnut", hex: "#6C4830" },
      { id: "oak", label: "Oak", hex: "#C4A574" },
      { id: "blackened", label: "Blackened", hex: "#1B1712" },
    ],
    images: [
      {
        src: HERO_CHAIR,
        alt: "Cane Lounge, three-quarter view, assembled",
        contain: true,
      },
      {
        src: "/stills/joinery.jpg",
        alt: "Cane Lounge, exploded joinery",
        contain: true,
        label: "Anatomy",
      },
    ],
    dimensions: "72 × 78 × 74 cm",
    timber: "Solid walnut",
    finish: "Natural oil",
    origin: "Made to the room",
  },
  {
    slug: "oak-bed",
    name: "Oak Bed",
    sku: "AL-OB-01",
    category: "sleep",
    price: 3200,
    spec: "Low platform · quiet steel feet",
    description:
      "A low oak platform, overbuilt on purpose. The first piece the room remembers. Slats, frame, and a headboard that holds the wall without shouting.",
    blurb:
      "A low oak platform, overbuilt on purpose. The first piece the room remembers.",
    chips: ["oak", "atelier"],
    badge: "popular",
    rating: 5,
    finishes: [
      { id: "oak", label: "Oak", hex: "#C4A574" },
      { id: "walnut", label: "Walnut", hex: "#6C4830" },
      { id: "blackened", label: "Blackened", hex: "#1B1712" },
    ],
    images: [
      {
        src: "/stills/room-dressed.jpg",
        alt: "Oak Bed in the assembled Alpha room",
        position: "52% 80%",
      },
      {
        src: "/stills/room-bed.jpg",
        alt: "Oak Bed, made, before the room is dressed",
        position: "50% 70%",
      },
      {
        src: "/stills/room-dresser.jpg",
        alt: "Oak Bed with dresser and nightstand",
        position: "55% 72%",
      },
    ],
    dimensions: "160 × 200 × 38 cm",
    timber: "Solid oak",
    finish: "Natural oil",
    origin: "Made to the room",
  },
  {
    slug: "linen-lounge",
    name: "Linen Lounge",
    sku: "AL-LL-01",
    category: "seating",
    price: 1120,
    spec: "Oak frame · linen seat",
    description:
      "A quiet armchair for the edge of the bed. Oak arms, a linen hold, a throw if the morning is cold. Companion to the Cane Lounge, not a copy of it.",
    blurb:
      "A quiet armchair for the edge of the bed. Oak arms, a linen hold.",
    chips: ["oak", "linen"],
    badge: "premium",
    rating: 4.9,
    images: [
      {
        src: "/stills/room-lounge.jpg",
        alt: "Linen Lounge beside the oak bed",
        position: "8% 72%",
      },
      {
        src: "/stills/room-lounge-2.jpg",
        alt: "Linen Lounge in the dressed room",
        position: "16% 62%",
      },
      {
        src: "/stills/room-dressed.jpg",
        alt: "Linen Lounge in the finished Alpha room",
        position: "12% 70%",
      },
    ],
    dimensions: "68 × 76 × 78 cm",
    timber: "Solid oak",
    finish: "Natural oil · linen",
    origin: "Made to the room",
  },
  {
    slug: "oak-dresser",
    name: "Oak Dresser",
    sku: "AL-OD-01",
    category: "storage",
    price: 1640,
    spec: "Four drawers · solid front",
    description:
      "Four drawers, solid oak fronts, quiet hardware. It takes the wall beside the bed and does not ask for attention.",
    blurb: "Four drawers, solid oak fronts, quiet hardware.",
    chips: ["oak", "bespoke"],
    images: [
      {
        src: "/stills/room-dresser.jpg",
        alt: "Oak Dresser to the left of the bed",
        position: "18% 58%",
      },
      {
        src: "/stills/room-160.jpg",
        alt: "Oak Dresser arriving in the room",
        position: "16% 52%",
      },
    ],
    dimensions: "90 × 45 × 80 cm",
    timber: "Solid oak",
    finish: "Natural oil",
    origin: "Made to the room",
  },
  {
    slug: "nightstand",
    name: "Nightstand",
    sku: "AL-NS-01",
    category: "storage",
    price: 420,
    spec: "Single drawer · lamp ready",
    description:
      "A small oak cube with one drawer. Made as a pair, sold as one, lived with as two.",
    blurb: "A small oak cube with one drawer. Made as a pair.",
    chips: ["oak"],
    images: [
      {
        src: "/stills/room-bed.jpg",
        alt: "Nightstand and lamp beside the oak bed",
        position: "28% 62%",
      },
      {
        src: "/stills/room-dresser.jpg",
        alt: "Nightstand in the dressed room",
        position: "72% 58%",
      },
    ],
    dimensions: "45 × 40 × 50 cm",
    timber: "Solid oak",
    finish: "Natural oil",
    origin: "Made to the room",
  },
  {
    slug: "oak-shelves",
    name: "Wall Shelves",
    sku: "AL-WS-01",
    category: "storage",
    price: 380,
    spec: "Oak boards · quiet steel",
    description:
      "Two boards, light brackets, a place for books and a plant. Sold as a pair.",
    blurb: "Two boards, light brackets. Sold as a pair.",
    chips: ["oak"],
    images: [
      {
        src: "/stills/room-dresser.jpg",
        alt: "Oak wall shelves above the dresser",
        position: "16% 22%",
      },
      {
        src: "/stills/room-200.jpg",
        alt: "Oak shelves with objects",
        position: "18% 20%",
      },
    ],
    dimensions: "120 × 22 × 4 cm",
    timber: "Solid oak",
    finish: "Natural oil",
    origin: "Made to the room",
  },
  {
    slug: "disc-mirror",
    name: "Disc Mirror",
    sku: "AL-DM-01",
    category: "objects",
    price: 290,
    spec: "Round glass · leather hang",
    description:
      "A round mirror on a leather strap. It hangs on the axis of the bed and does one job.",
    blurb: "A round mirror on a leather strap. One job.",
    chips: ["atelier"],
    images: [
      {
        src: "/stills/room-dressed.jpg",
        alt: "Disc Mirror above the oak bed",
        position: "50% 18%",
      },
      {
        src: "/stills/room-200.jpg",
        alt: "Disc Mirror with prints",
        position: "50% 16%",
      },
    ],
    dimensions: "Ø 60 cm",
    timber: "Leather strap",
    finish: "Clear glass",
    origin: "Made to the room",
  },
];

export const FEATURED_SLUGS = ["cane-lounge", "oak-bed", "linen-lounge"] as const;

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProducts(category?: string) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getSimilar(slug: string, count = 3) {
  const current = getProduct(slug);
  const rest = PRODUCTS.filter((product) => product.slug !== slug);
  if (!current) return rest.slice(0, count);
  const same = rest.filter((product) => product.category === current.category);
  const others = rest.filter((product) => product.category !== current.category);
  return [...same, ...others].slice(0, count);
}

export function getFeatured() {
  return FEATURED_SLUGS.map((slug) => getProduct(slug)).filter(
    (product): product is Product => Boolean(product),
  );
}

export function categoryLabel(category: ProductCategory) {
  return CATEGORIES.find((item) => item.id === category)?.label ?? category;
}
