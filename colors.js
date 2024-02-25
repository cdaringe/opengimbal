// stupid little script to shift hex colors
const fs = require("fs");
const Color = require("color");

// Read the CSS file
const css = fs.readFileSync("src/css/custom.css", "utf8");

// Define the target hue for warm colors
const targetHue = 40; // Hue for warm orange

// Regex to match hex colors
const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;

// Function to convert a color to a warm color
function toWarmColor(match) {
  const hsl = Color(match).hsl();
  hsl.color[0] = targetHue;
  return Color.hsl(hsl.color).rgb().hex();
}

// Replace all hex colors with warm colors
const newCss = css.replace(hexColorRegex, toWarmColor);

// Write the new CSS to a file
fs.writeFileSync("styles-warm.css", newCss);
