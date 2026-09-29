const channels = ["Facebook", "Instagram", "TikTok", "Search"];

const metrics = [
  { label: "Impressions", value: "412K", change: "+18%" },
  { label: "Clicks", value: "9,840", change: "+24%" },
  { label: "ROAS", value: "4.6x", change: "+0.9" },
];

const bars = [38, 52, 44, 66, 58, 78, 71, 88, 74, 92, 84, 96];

export function MarketingPreview() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
          Campaign overview
        </span>
        <span className="rounded-pill bg-chip-teal px-3 py-1 text-[11px] font-semibold text-primaryDark">
          Last 30 days
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-chip border border-navyBorder bg-navyCard px-3 py-3"
          >
            <span className="block text-[11px] font-medium uppercase tracking-wider text-white/50">
              {metric.label}
            </span>
            <span className="mt-1 block font-display text-lg font-extrabold text-white">
              {metric.value}
            </span>
            <span className="text-[11px] font-semibold text-leaf">
              {metric.change}
            </span>
          </div>
        ))}
      </div>

      <div className="flex h-32 items-end gap-2 rounded-chip border border-navyBorder bg-navyCard p-4">
        {bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-primaryDark"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <ul className="flex flex-wrap gap-2">
        {channels.map((channel) => (
          <li
            key={channel}
            className="rounded-badge border border-navyBorder px-3 py-1 text-[11px] font-medium text-white/70"
          >
            {channel}
          </li>
        ))}
      </ul>
    </div>
  );
}
