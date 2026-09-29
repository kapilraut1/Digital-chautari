const exercises = [
  { name: "Knee mobility", sets: "3 x 12", done: true },
  { name: "Hamstring stretch", sets: "3 x 30s", done: true },
  { name: "Balance work", sets: "2 x 45s", done: false },
];

export function PhysioPreview() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-white/50">
          Today&rsquo;s plan
        </span>
        <span className="rounded-pill bg-chip-mint px-3 py-1 text-[11px] font-semibold text-primaryDark">
          Day 12 of 30
        </span>
      </div>

      <div className="flex items-center gap-4 rounded-chip border border-navyBorder bg-navyCard p-4">
        <svg viewBox="0 0 36 36" className="h-16 w-16 shrink-0 -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            strokeWidth="4"
            className="text-navyBorder"
            stroke="currentColor"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-leaf"
            stroke="currentColor"
            strokeDasharray="94.2"
            strokeDashoffset="28"
          />
        </svg>

        <div>
          <span className="block font-display text-2xl font-extrabold text-white">
            70%
          </span>
          <span className="block text-[11px] uppercase tracking-wider text-white/50">
            Recovery plan complete
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {exercises.map((exercise) => (
          <li
            key={exercise.name}
            className="flex items-center justify-between gap-3 rounded-chip border border-navyBorder bg-navyCard px-4 py-3"
          >
            <span className="flex items-center gap-3">
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                  exercise.done
                    ? "bg-leaf text-navy"
                    : "border border-navyBorder text-white/40"
                }`}
              >
                {exercise.done ? "✓" : ""}
              </span>
              <span className="text-xs font-medium text-white">
                {exercise.name}
              </span>
            </span>
            <span className="text-[11px] text-white/50">{exercise.sets}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
