export default function lightenIfDark(hexColor) {
  // convert hex to rgb
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5, 7), 16);

  // calculate brightness of the color
  let brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // If dark, lighten the color
  if (brightness < 128) {
    /* adjust the number___ (70) to change the amount of lightening
                          ↓                                       */
    r = Math.min(255, r + 70);
    g = Math.min(255, g + 70);
    b = Math.min(255, b + 70);
  }
  // return the result
  return `rgb(${r}, ${g}, ${b})`;
}