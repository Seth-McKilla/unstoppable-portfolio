export function toUSD(x: number) {
  return `$${x
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`;
}
