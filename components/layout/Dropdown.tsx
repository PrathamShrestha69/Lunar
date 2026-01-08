const pillClass =
  "ml-2 rounded-full bg-[#9b8a75] px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide text-white";

const Dropdown = () => {
  const materials = [
    { label: "Linen", badge: "Top Pick" },
    { label: "Cotton" },
    { label: "Sheer" },
    { label: "Velvet" },
    { label: "Silk" },
    { label: "Wool" },
    { label: "Ready-made", badge: "Save" },
  ];

  const trends = [
    { label: "LUNAR X Designers", badge: "New" },
    { label: "Solid" },
    { label: "Floral Print" },
    { label: "Plaid & Striped" },
    { label: "Modern" },
    { label: "Country" },
    { label: "Boho" },
    { label: "Cafe Curtains", badge: "Beloved" },
    { label: "Curtains with Trim Border" },
  ];

  const spaces = [
    "Living Room",
    "Bedroom",
    "Kitchen",
    "Dining Room",
    "Nursery Room",
    "Bathroom",
    "Home Theater",
  ];

  const functions = [
    "Blackout Curtains",
    "Flame Retardant Curtains",
    "Soundproof Curtains",
    "Outdoor Curtains",
    "Room Divider Curtains",
    "Arch Window Solution",
  ];

  const colors = [
    { label: "White", swatch: "#f6f6f2" },
    { label: "Cream", swatch: "#efe5d0" },
    { label: "Beige", swatch: "#d7c5a7" },
    { label: "Khaki", swatch: "#b79b77" },
    { label: "Grey", swatch: "#8c8c8c" },
    { label: "Brown", swatch: "#694f3a" },
    { label: "Blue", swatch: "#3e74b6" },
    { label: "Pink", swatch: "#e796a8" },
    { label: "Green", swatch: "#4e7f3a" },
  ];

  return (
    <div className="absolute left-0 right-0 top-14 z-50 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#573720]">
          <a href="#" className="underline hover:text-[#3d2715]">
            New to TWOPAGES?
          </a>
          <span className="rounded-sm bg-[#573720] px-2 py-[3px] text-[10px] font-semibold uppercase tracking-wide text-white">
            Begin Here
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-5">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#573720]">By Material</h3>
            <ul className="space-y-2 text-sm text-[#573720]">
              {materials.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <a href="#" className="hover:text-[#3d2715]">
                    {item.label}
                  </a>
                  {item.badge && <span className={pillClass}>{item.badge}</span>}
                </li>
              ))}
              <li className="mt-3 flex items-center gap-2 text-[13px] font-medium text-[#573720]">
                <span className="h-[10px] w-[10px] rounded-sm border border-[#573720]" />
                <a href="#" className="hover:text-[#3d2715]">
                  Free Swatches &gt;&gt;
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#573720]">By Trend</h3>
            <ul className="space-y-2 text-sm text-[#573720]">
              {trends.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <a href="#" className="hover:text-[#3d2715]">
                    {item.label}
                  </a>
                  {item.badge && <span className={pillClass}>{item.badge}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#573720]">By Space</h3>
            <ul className="space-y-2 text-sm text-[#573720]">
              {spaces.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#3d2715]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#573720]">By Function</h3>
            <ul className="space-y-2 text-sm text-[#573720]">
              {functions.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#3d2715]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[#573720]">By Color</h3>
            <ul className="space-y-2 text-sm text-[#573720]">
              {colors.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    className="h-3.5 w-3.5 rounded-full border border-[#d3c7b7]"
                    style={{ backgroundColor: item.swatch }}
                  />
                  <a href="#" className="hover:text-[#3d2715]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;