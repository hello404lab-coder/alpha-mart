export const NAV = [
  { href: "/#the-room", label: "The Room" },
  { href: "/#chair", label: "The Chair" },
  { href: "/collection", label: "Catalog" },
  { href: "/#atelier", label: "Atelier" },
] as const;

export type SequenceBeat = {
  start: number;
  end: number;
  align: "left" | "right";
  eyebrow: string;
  title: string;
  body?: string;
  cta?: { href: string; label: string };
  wordmark?: boolean;
};

export const SEQUENCE_BEATS: SequenceBeat[] = [
  {
    start: 0,
    end: 0.12,
    align: "left",
    eyebrow: "The Alpha Room",
    title: "A room, assembled.",
    body: "One box. Oak, linen, and late morning light.",
    wordmark: true,
  },
  {
    start: 0.12,
    end: 0.22,
    align: "left",
    eyebrow: "01 / The box",
    title: "It arrives closed. Then it doesn’t.",
  },
  {
    start: 0.22,
    end: 0.38,
    align: "right",
    eyebrow: "02 / Taken apart",
    title: "Slats. Frame. Wardrobe. Joinery.",
    body: "Nothing is glued in spirit.",
  },
  {
    start: 0.38,
    end: 0.5,
    align: "left",
    eyebrow: "03 / The bed",
    title: "Rest is the first architecture.",
  },
  {
    start: 0.5,
    end: 0.64,
    align: "right",
    eyebrow: "04 / The walls",
    title: "Shelves, oak, a place for the day to land.",
  },
  {
    start: 0.64,
    end: 0.78,
    align: "left",
    eyebrow: "05 / The dress",
    title: "Rug. Curtain. A throw with a name.",
  },
  {
    start: 0.78,
    end: 0.9,
    align: "left",
    eyebrow: "06 / Lived in",
    title: "Plants, a chair, the quiet of being finished.",
  },
  {
    start: 0.9,
    end: 1,
    align: "left",
    eyebrow: "07 / Home",
    title: "Materials chosen. Then committed.",
    cta: { href: "#atelier", label: "Enquire about this room" },
  },
];

export const MANIFESTO = {
  index: "01 / The room",
  kicker: "Solid oak, delivered whole",
  title: "for rooms that are meant to be slept in.",
  body: "It starts as a box with our name on it. Then the bed finds the wall, the shelves find the light, and a yellow throw lands last — as if the room had been waiting. You will not think about the joinery. That is the point.",
};

export const CRAFT = {
  index: "02 / Craft",
  kicker: "The room, taken apart",
  title: "so you can see why it lasts.",
  cards: [
    {
      src: "/sequence/river-table/ezgif-frame-055.jpg",
      position: "center 60%",
      title: "The box",
      body: "One carton. Our name. Everything that becomes the room is already inside.",
    },
    {
      src: "/sequence/river-table/ezgif-frame-100.jpg",
      position: "center 45%",
      title: "The pieces",
      body: "Frame, slats, wardrobe, nightstands — in the air for a moment, then in their places.",
    },
    {
      src: "/sequence/river-table/ezgif-frame-140.jpg",
      position: "center 70%",
      title: "The bed",
      body: "Oak, low, overbuilt. The first piece the room remembers.",
    },
  ],
};

export const SPECS = [
  { label: "Bed", value: "160 × 200 cm" },
  { label: "Timber", value: "Solid oak" },
  { label: "Finish", value: "Natural oil" },
  { label: "Origin", value: "Made to the room" },
] as const;

export const COLLECTION = {
  index: "The room, piece by piece.",
  items: [
    {
      src: "/sequence/chair/ezgif-frame-001.jpg",
      position: "center 55%",
      name: "Lounge Chair",
      spec: "Walnut frame · hand-woven cane",
      chips: ["handcrafted", "walnut"],
    },
    {
      src: "/sequence/river-table/ezgif-frame-300.jpg",
      position: "50% 70%",
      name: "Oak Bed",
      spec: "Low platform · quiet steel feet",
      chips: ["oak", "atelier"],
    },
    {
      src: "/sequence/river-table/ezgif-frame-180.jpg",
      position: "18% 62%",
      name: "Oak Dresser",
      spec: "Four drawers · solid front",
      chips: ["oak", "bespoke"],
    },
  ],
};

export const CHAIR_BEATS: SequenceBeat[] = [
  {
    start: 0,
    end: 0.2,
    align: "left",
    eyebrow: "The Lounge",
    title: "Every joint, visible.",
    body: "Walnut, cane, through-bolts. Nothing is hidden.",
  },
  {
    start: 0.2,
    end: 0.42,
    align: "right",
    eyebrow: "01 / Arms",
    title: "The hold comes last.",
  },
  {
    start: 0.42,
    end: 0.66,
    align: "left",
    eyebrow: "02 / Cane",
    title: "Seat and back, found again.",
  },
  {
    start: 0.66,
    end: 0.86,
    align: "right",
    eyebrow: "03 / Rejoined",
    title: "Hardware disappears into the grain.",
  },
  {
    start: 0.86,
    end: 1,
    align: "left",
    eyebrow: "04 / Seated",
    title: "Built to be sat in, not explained.",
  },
];

export const ATELIER = {
  index: "03 / Atelier",
  kicker: "Made to the room,",
  title: "not the warehouse.",
  body: "Tell us the room. The length of the wall. The light. We will answer with timber, a pour, and a date.",
};
