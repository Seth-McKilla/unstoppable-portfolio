import type { Diffs, Holding } from "./types";

export function toUSD(x: number) {
  return `$${x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
}

export function calcOverallDiffs(holdings: Holding[]) {
  const diffs: Diffs = {
    diff: 0,
    diff7d: 0,
    diff30d: 0,
  };
  let total = 0;

  holdings.forEach((holding) => {
    diffs.diff += holding.diff * holding.value;
    diffs.diff7d += holding.diff7d * holding.value;
    diffs.diff30d += holding.diff30d * holding.value;
    total += holding.value;
  });

  for (let key in diffs) {
    diffs[key] = diffs[key] / total;
  }

  return diffs;
}
