export function calculateScore({ attempts, usedHint }) {
  if (attempts === 1) return 100;
  if (attempts === 2) return 70;
  if (attempts >= 3) return 40;
  return 0;
}

export function reduceBlur(current) {
  return Math.max(current - 4, 0);
}
