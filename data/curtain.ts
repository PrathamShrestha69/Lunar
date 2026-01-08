export type CurtainType = {
  id: number;
  tag: string;
  image: {
    side: string;
    back: string;
  };
  name: string;
  price: string;
  desc: string;
  discountedPrice?: string;
};

const curtain: CurtainType[] = [
  {
    id: 1,
    tag: "Popular",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/7-Velvet-Curtain-homepage-best.webp?v=1763714313&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/7-Velvet-Curtain-homepage-best.webp?v=1763714313&width=560",
    },
    name: "Velvet Elegance",
    price: "149.99",
    desc: "Luxurious velvet curtains that bring warmth and sophistication to any room. Perfect for bedrooms and living spaces.",
  },
  {
    id: 2,
    tag: "Popular",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/3-Isabella-homepage-best.webp?v=1763714313&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/3-Isabella-homepage-best.webp?v=1763714313&width=560",
    },
    name: "Isabella Classic",
    price: "129.99",
    desc: "Timeless elegance meets modern design. These curtains offer both style and excellent light control.",
  },
  {
    id: 3,
    tag: "New",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/Sara-Le.jpg?v=1762306439&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/Sara-Le.jpg?v=1762306439&width=560",
    },
    name: "Sara Linen",
    price: "119.99",
    desc: "Natural linen fabric provides a breathable, eco-friendly option that adds texture and charm to your windows.",
  },
  {
    id: 4,
    tag: "Popular",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/jawara_9284a634-333b-47b5-98ad-bfad492fddfc.jpg?v=1762306439&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/jawara_9284a634-333b-47b5-98ad-bfad492fddfc.jpg?v=1762306439&width=560",
    },
    name: "Jawara Heritage",
    price: "139.99",
    desc: "Rich patterns and vibrant colors inspired by traditional designs. Makes a bold statement in any room.",
  },
  {
    id: 5,
    tag: "New",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/8-Bamboo-Shade-homepage-best.webp?v=1763714314&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/8-Bamboo-Shade-homepage-best.webp?v=1763714314&width=560",
    },
    name: "Bamboo Natural",
    price: "89.99",
    discountedPrice: "69.99",
    desc: "Sustainable bamboo shades offer natural beauty and excellent privacy while filtering soft, warm light.",
  },
  {
    id: 6,
    tag: "New",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/9-Cafe-homepage-best-2.webp?v=1763714314&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/9-Cafe-homepage-best-2.webp?v=1763714314&width=560",
    },
    name: "Café Charm",
    price: "79.99",
    discountedPrice: "59.99",
    desc: "Perfect for kitchen windows. These café-style curtains provide privacy while letting natural light flow through.",
  },
  {
    id: 7,
    tag: "Popular",
    image: {
      side: "https://twopagescurtains.com/cdn/shop/files/Stefana-Silber-oc.webp?v=1729060286&width=750",
      back: "https://twopagescurtains.com/cdn/shop/files/Britt_Bengoechea_best_seller.webp?v=1763100435&width=750",
    },
    name: "Stefana Silver",
    price: "159.99",
    desc: "Sophisticated metallic finish curtains that add a touch of glamour. Light-blocking and energy-efficient.",
  },
];

export default curtain;
