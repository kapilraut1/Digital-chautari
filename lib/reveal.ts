export const stagger = (index: number, step = 70, cap = 280) =>
  Math.min(index * step, cap);
