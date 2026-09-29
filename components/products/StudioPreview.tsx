const productions = [
  { title: "Everest Trail Film", format: "Documentary", tone: "bg-chip-mint" },
  { title: "Sasto Bazaar Pack", format: "Product", tone: "bg-chip-gold" },
  { title: "Himalayan Coffee", format: "Social", tone: "bg-chip-lilac" },
  { title: "Kathmandu Streets", format: "Photo", tone: "bg-chip-teal" },
];

export function StudioPreview() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
          Production board
        </span>
        <span className="rounded-pill bg-chip-gold px-3 py-1 text-[11px] font-semibold text-primaryDark">
          6 in edit
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-3">
        {productions.map((production, index) => (
          <li
            key={production.title}
            className="overflow-hidden rounded-chip border border-navyBorder bg-navyCard"
          >
            <span
              className={`grid aspect-[4/3] place-items-center ${production.tone}`}
            >
              <span className="text-2xl">
                {["🎬", "🛍️", "☕", "🏙️"][index]}
              </span>
            </span>
            <span className="block px-3 py-2">
              <span className="block text-xs font-semibold text-white">
                {production.title}
              </span>
              <span className="block text-[11px] text-white/50">
                {production.format}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
