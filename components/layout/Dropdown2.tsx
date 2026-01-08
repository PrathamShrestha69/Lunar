const cards = [
  {
    title: "Gallery",
    description: "Neutral lifestyle, aesthetic design resonates with your personality.",
    image:
      "//twopagescurtains.com/cdn/shop/files/beige-white-7084-4-triple-pleat-350gsm-1.webp?v=1763628652",
  },
  {
    title: "Custom Curtains Ideas",
    description: "Discover custom curtain ideas to elevate your home decor.",
    image:
      "//twopagescurtains.com/cdn/shop/files/B311Zdesignathome_1.webp?v=1699349207",
  },
  {
    title: "Home Decor Showroom",
    description: "Browse our shoppable video gallery to get inspired.",
    image:
      "//twopagescurtains.com/cdn/shop/files/light-brown-d87-4-4f.webp?v=1763536591",
  },
  {
    title: "The Liz Lookbook",
    description: "Fall into a visual journey through the ideas of Liz Collection.",
    image:
      "//twopagescurtains.com/cdn/shop/files/jenevoy_Liz1908-2150gsm-gallery.webp?v=1764150055",
  },
];

const Dropdown2 = () => {
  return (
    <div className="absolute left-0 right-0  top-14 z-50 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="group flex h-full flex-col gap-3 rounded-lg border border-[#e5ddd0] bg-white p-3 transition duration-200 hover:-translate-y-1 hover:border-[#cbb79e] hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-[#573720]">
                <span>{card.title}</span>
                <span className="text-lg transition duration-200 group-hover:translate-x-1">→</span>
              </div>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-[#573720]">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown2;
