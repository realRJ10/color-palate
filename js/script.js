// --- CSS Color Names List ---
const CSS_COLOR_NAMES = [
  "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"
];
// Helper: Convert color name to hex
const CSS_COLOR_HEX = {
  "AliceBlue": "#f0f8ff", "AntiqueWhite": "#faebd7", "Aqua": "#00ffff", "Aquamarine": "#7fffd4", "Azure": "#f0ffff", "Beige": "#f5f5dc", "Bisque": "#ffe4c4", "Black": "#000000", "BlanchedAlmond": "#ffebcd", "Blue": "#0000ff", "BlueViolet": "#8a2be2", "Brown": "#a52a2a", "BurlyWood": "#deb887", "CadetBlue": "#5f9ea0", "Chartreuse": "#7fff00", "Chocolate": "#d2691e", "Coral": "#ff7f50", "CornflowerBlue": "#6495ed", "Cornsilk": "#fff8dc", "Crimson": "#dc143c", "Cyan": "#00ffff", "DarkBlue": "#00008b", "DarkCyan": "#008b8b", "DarkGoldenRod": "#b8860b", "DarkGray": "#a9a9a9", "DarkGrey": "#a9a9a9", "DarkGreen": "#006400", "DarkKhaki": "#bdb76b", "DarkMagenta": "#8b008b", "DarkOliveGreen": "#556b2f", "DarkOrange": "#ff8c00", "DarkOrchid": "#9932cc", "DarkRed": "#8b0000", "DarkSalmon": "#e9967a", "DarkSeaGreen": "#8fbc8f", "DarkSlateBlue": "#483d8b", "DarkSlateGray": "#2f4f4f", "DarkSlateGrey": "#2f4f4f", "DarkTurquoise": "#00ced1", "DarkViolet": "#9400d3", "DeepPink": "#ff1493", "DeepSkyBlue": "#00bfff", "DimGray": "#696969", "DimGrey": "#696969", "DodgerBlue": "#1e90ff", "FireBrick": "#b22222", "FloralWhite": "#fffaf0", "ForestGreen": "#228b22", "Fuchsia": "#ff00ff", "Gainsboro": "#dcdcdc", "GhostWhite": "#f8f8ff", "Gold": "#ffd700", "GoldenRod": "#daa520", "Gray": "#808080", "Grey": "#808080", "Green": "#008000", "GreenYellow": "#adff2f", "HoneyDew": "#f0fff0", "HotPink": "#ff69b4", "IndianRed": "#cd5c5c", "Indigo": "#4b0082", "Ivory": "#fffff0", "Khaki": "#f0e68c", "Lavender": "#e6e6fa", "LavenderBlush": "#fff0f5", "LawnGreen": "#7cfc00", "LemonChiffon": "#fffacd", "LightBlue": "#add8e6", "LightCoral": "#f08080", "LightCyan": "#e0ffff", "LightGoldenRodYellow": "#fafad2", "LightGray": "#d3d3d3", "LightGrey": "#d3d3d3", "LightGreen": "#90ee90", "LightPink": "#ffb6c1", "LightSalmon": "#ffa07a", "LightSeaGreen": "#20b2aa", "LightSkyBlue": "#87cefa", "LightSlateGray": "#778899", "LightSlateGrey": "#778899", "LightSteelBlue": "#b0c4de", "LightYellow": "#ffffe0", "Lime": "#00ff00", "LimeGreen": "#32cd32", "Linen": "#faf0e6", "Magenta": "#ff00ff", "Maroon": "#800000", "MediumAquaMarine": "#66cdaa", "MediumBlue": "#0000cd", "MediumOrchid": "#ba55d3", "MediumPurple": "#9370db", "MediumSeaGreen": "#3cb371", "MediumSlateBlue": "#7b68ee", "MediumSpringGreen": "#00fa9a", "MediumTurquoise": "#48d1cc", "MediumVioletRed": "#c71585", "MidnightBlue": "#191970", "MintCream": "#f5fffa", "MistyRose": "#ffe4e1", "Moccasin": "#ffe4b5", "NavajoWhite": "#ffdead", "Navy": "#000080", "OldLace": "#fdf5e6", "Olive": "#808000", "OliveDrab": "#6b8e23", "Orange": "#ffa500", "OrangeRed": "#ff4500", "Orchid": "#da70d6", "PaleGoldenRod": "#eee8aa", "PaleGreen": "#98fb98", "PaleTurquoise": "#afeeee", "PaleVioletRed": "#db7093", "PapayaWhip": "#ffefd5", "PeachPuff": "#ffdab9", "Peru": "#cd853f", "Pink": "#ffc0cb", "Plum": "#dda0dd", "PowderBlue": "#b0e0e6", "Purple": "#800080", "RebeccaPurple": "#663399", "Red": "#ff0000", "RosyBrown": "#bc8f8f", "RoyalBlue": "#4169e1", "SaddleBrown": "#8b4513", "Salmon": "#fa8072", "SandyBrown": "#f4a460", "SeaGreen": "#2e8b57", "SeaShell": "#fff5ee", "Sienna": "#a0522d", "Silver": "#c0c0c0", "SkyBlue": "#87ceeb", "SlateBlue": "#6a5acd", "SlateGray": "#708090", "SlateGrey": "#708090", "Snow": "#fffafa", "SpringGreen": "#00ff7f", "SteelBlue": "#4682b4", "Tan": "#d2b48c", "Teal": "#008080", "Thistle": "#d8bfd8", "Tomato": "#ff6347", "Turquoise": "#40e0d0", "Violet": "#ee82ee", "Wheat": "#f5deb3", "White": "#ffffff", "WhiteSmoke": "#f5f5f5", "Yellow": "#ffff00", "YellowGreen": "#9acd32"
};
// Helper: Find closest CSS color name
function getClosestColorName(hex) {
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return [num >> 16, (num >> 8) & 0xff, num & 0xff];
  }
  function colorDistance(a, b) {
    return Math.sqrt(
      Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
    );
  }
  const rgb = hexToRgb(hex);
  let minDist = Infinity;
  let closest = '';
  for (const name of CSS_COLOR_NAMES) {
    const dist = colorDistance(rgb, hexToRgb(CSS_COLOR_HEX[name]));
    if (dist < minDist) {
      minDist = dist;
      closest = name;
    }
  }
  // Threshold for 'no close name'
  if (minDist > 80) return 'No close name';
  return closest;
}
// --- END CSS Color Names ---

function generatePalette() {
  const baseColor = document.getElementById("base-color").value;
  document.getElementById("color-value").value = baseColor;

  document.querySelectorAll(".colors-container").forEach((container) => {
    container.innerHTML = "";
  });

  // Use lockable shades
  updateShadesWithLocks();

  const complementary = [getComplementaryColor(baseColor)];
  const analogous = [
    getAnalogousColor(baseColor, 30),
    baseColor,
    getAnalogousColor(baseColor, -30),
  ];
  const triadic = [
    getTriadicColor(baseColor, 120),
    baseColor,
    getTriadicColor(baseColor, -120),
  ];
  const saturation = [
    adjustSaturation(baseColor, -40),
    adjustSaturation(baseColor, -20),
    baseColor,
    adjustSaturation(baseColor, 20),
    adjustSaturation(baseColor, 40),
  ];
  const monochromatic = generateMonochromatic(baseColor);
  const pastels = generatePastels(baseColor);

  populateSection("complementary", complementary);
  populateSection("analogous", analogous);
  populateSection("triadic", triadic);
  populateSection("saturation", saturation);
  populateSection("monochromatic", monochromatic);
  populateSection("pastels", pastels);
}

function populateSection(sectionId, colors) {
  const container = document.getElementById(sectionId);
  colors.forEach((color) => {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;
    // Color value
    const colorValueDiv = document.createElement("div");
    colorValueDiv.className = "color-value";
    colorValueDiv.textContent = color;
    colorBox.appendChild(colorValueDiv);
    // Tooltip on hover (color name)
    const colorName = getClosestColorName(color);
    colorBox.title = colorName;
    // Click to copy
    colorBox.addEventListener("click", (e) => {
      navigator.clipboard.writeText(color).then(() => {
        showCopyNotification(`Copied ${color} to clipboard!`);
      });
    });
    container.appendChild(colorBox);
  });
}

function generateShades(hex) {
  return [
    lightenDarkenColor(hex, -40),
    lightenDarkenColor(hex, -20),
    hex,
    lightenDarkenColor(hex, 20),
    lightenDarkenColor(hex, 40),
  ];
}

function generateMonochromatic(hex) {
  const [h, s, l] = hexToHSL(hex);
  return [
    HSLToHex(h, s, l),
    HSLToHex(h, s * 0.9, l * 1.15),
    HSLToHex(h, s * 0.75, l * 1.3),
    HSLToHex(h, s * 0.6, l * 1.45),
    HSLToHex(h, s * 0.45, l * 1.6),
    HSLToHex(h, s * 0.3, l * 1.75),
  ].map((color) => fixLightnessOverflow(color));
}

function generatePastels(hex) {
  const [h, s, l] = hexToHSL(hex);
  return [
    HSLToHex((h + 330) % 360, Math.max(s * 0.3, 20), 92),
    HSLToHex((h + 30) % 360, Math.max(s * 0.4, 25), 88),
    HSLToHex(h, Math.max(s * 0.3, 20), 90),
    HSLToHex((h + 150) % 360, Math.max(s * 0.4, 25), 85),
    HSLToHex((h + 210) % 360, Math.max(s * 0.3, 20), 90),
    HSLToHex((h + 60) % 360, Math.max(s * 0.4, 25), 87),
  ].map((color) => adjustPastelContrast(color));
}

function adjustPastelContrast(hex) {
  const [h, s, l] = hexToHSL(hex);
  const adjustedS = s < 15 ? 15 : s;
  const adjustedL = l > 95 ? 95 : l < 80 ? 80 : l;
  return HSLToHex(h, adjustedS, adjustedL);
}

function fixLightnessOverflow(color) {
  const [h, s, l] = hexToHSL(color);
  const safeL = Math.min(100, l);
  return HSLToHex(h, s, safeL);
}

function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }
  return [h, s * 100, l * 100];
}

function HSLToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getComplementaryColor(hex) {
  const [h, s, l] = hexToHSL(hex);
  return HSLToHex((h + 180) % 360, s, l);
}

function getAnalogousColor(hex, offset) {
  const [h, s, l] = hexToHSL(hex);
  return HSLToHex((h + offset + 360) % 360, s, l);
}

function getTriadicColor(hex, offset) {
  const [h, s, l] = hexToHSL(hex);
  return HSLToHex((h + offset + 360) % 360, s, l);
}

function lightenDarkenColor(hex, amount) {
  const [h, s, l] = hexToHSL(hex);
  return HSLToHex(h, s, Math.min(Math.max(l + amount, 0), 100));
}

function adjustSaturation(hex, amount) {
  const [h, s, l] = hexToHSL(hex);
  return HSLToHex(h, Math.min(Math.max(s + amount, 0), 100), l);
}

// --- Copy Notification ---
function showCopyNotification(msg) {
  const notif = document.getElementById("copy-notification");
  notif.textContent = msg;
  notif.classList.add("show");
  setTimeout(() => notif.classList.remove("show"), 1200);
}

// --- Download as PNG ---
document.getElementById("download-png").addEventListener("click", function () {
  const paletteCapture = document.getElementById("palette-capture");
  html2canvas(paletteCapture, {backgroundColor: null}).then((canvas) => {
    const link = document.createElement("a");
    link.download = "palette.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

document
  .getElementById("base-color")
  .addEventListener("input", function (e) {
    document.getElementById("color-value").value = e.target.value;
    generatePalette();
  });

document
  .getElementById("color-value")
  .addEventListener("input", function (e) {
    const color = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      document.getElementById("base-color").value = color;
      generatePalette();
    }
  });

// --- Contrast Checker ---
function luminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function hexToRgbArr(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 0xff, num & 0xff];
}
function contrastRatio(hex1, hex2) {
  const lum1 = luminance(...hexToRgbArr(hex1));
  const lum2 = luminance(...hexToRgbArr(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
function updateContrastChecker() {
  const color1 = document.getElementById('contrast-color-1').value;
  const color2 = document.getElementById('contrast-color-2').value;
  const ratio = contrastRatio(color1, color2);
  const ratioText = ratio.toFixed(2) + ':1';
  // WCAG thresholds
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3.0;
  const aaaNormal = ratio >= 7.0;
  const aaaLarge = ratio >= 4.5;
  let result = `<span style='font-weight:600;'>Contrast:</span> <span style='font-size:1.08em;'>${ratioText}</span><br>`;
  result += `<div style='margin-bottom:8px;'>AA (normal): <span class="contrast-badge ${aaNormal ? 'contrast-pass' : 'contrast-fail'}">${aaNormal ? 'Pass' : 'Fail'}</span> AA (large): <span class="contrast-badge ${aaLarge ? 'contrast-pass' : 'contrast-fail'}">${aaLarge ? 'Pass' : 'Fail'}</span></div>`;
  result += `<div style='margin-bottom:2px;'>AAA (normal): <span class="contrast-badge ${aaaNormal ? 'contrast-pass' : 'contrast-fail'}">${aaaNormal ? 'Pass' : 'Fail'}</span> AAA (large): <span class="contrast-badge ${aaaLarge ? 'contrast-pass' : 'contrast-fail'}">${aaaLarge ? 'Pass' : 'Fail'}</span></div>`;
  document.getElementById('contrast-result').innerHTML = result;
  // Previews
  document.getElementById('contrast-normal-text').style.background = color2;
  document.getElementById('contrast-normal-text').style.color = color1;
  document.getElementById('contrast-large-text').style.background = color2;
  document.getElementById('contrast-large-text').style.color = color1;
}
document.getElementById('contrast-color-1').addEventListener('input', updateContrastChecker);
document.getElementById('contrast-color-2').addEventListener('input', updateContrastChecker);
document.getElementById('swap-contrast-colors').addEventListener('click', function() {
  const c1 = document.getElementById('contrast-color-1');
  const c2 = document.getElementById('contrast-color-2');
  const tmp = c1.value;
  c1.value = c2.value;
  c2.value = tmp;
  updateContrastChecker();
});
updateContrastChecker();

// --- Gradient Generator ---
const gradientColorsDiv = document.getElementById('gradient-colors');
let gradientColors = ['#ff7e5f', '#feb47b'];
function renderGradientColors() {
  gradientColorsDiv.innerHTML = '';
  gradientColors.forEach((color, idx) => {
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = color;
    colorInput.addEventListener('input', (e) => {
      gradientColors[idx] = e.target.value;
      updateGradientPreview();
    });
    gradientColorsDiv.appendChild(colorInput);
  });
}
function updateGradientPreview() {
  const type = document.getElementById('gradient-type').value;
  let direction = '';
  if (type === 'linear') {
    const dirSel = document.getElementById('gradient-direction').value;
    direction = dirSel.match(/deg|to /) ? dirSel : 'to right';
  } else {
    direction = 'ellipse at center';
  }
  let gradientCSS = '';
  if (type === 'linear') {
    if (document.getElementById('gradient-direction').value.match(/deg/)) {
      gradientCSS = `linear-gradient(${document.getElementById('gradient-direction').value}, ${gradientColors.join(', ')})`;
    } else {
      gradientCSS = `linear-gradient(${direction}, ${gradientColors.join(', ')})`;
    }
  } else {
    gradientCSS = `radial-gradient(${direction}, ${gradientColors.join(', ')})`;
  }
  document.getElementById('gradient-preview').style.background = gradientCSS;
  document.getElementById('gradient-css').value = `background: ${gradientCSS};`;
}
document.getElementById('gradient-type').addEventListener('change', function() {
  const type = this.value;
  if (type === 'linear') {
    document.getElementById('gradient-direction-label').style.display = '';
    document.getElementById('gradient-angle-label').style.display = 'none';
  } else {
    document.getElementById('gradient-direction-label').style.display = 'none';
    document.getElementById('gradient-angle-label').style.display = 'none';
  }
  updateGradientPreview();
});
document.getElementById('gradient-direction').addEventListener('change', function() {
  if (this.value.match(/deg/)) {
    document.getElementById('gradient-angle-label').style.display = '';
    document.getElementById('gradient-angle').value = parseInt(this.value);
  } else {
    document.getElementById('gradient-angle-label').style.display = 'none';
  }
  updateGradientPreview();
});
document.getElementById('gradient-angle').addEventListener('input', function() {
  document.getElementById('gradient-direction').value = this.value + 'deg';
  updateGradientPreview();
});
document.getElementById('add-gradient-color').addEventListener('click', function() {
  if (gradientColors.length < 5) {
    gradientColors.push('#ffffff');
    renderGradientColors();
    updateGradientPreview();
  }
});
document.getElementById('remove-gradient-color').addEventListener('click', function() {
  if (gradientColors.length > 2) {
    gradientColors.pop();
    renderGradientColors();
    updateGradientPreview();
  }
});
document.getElementById('copy-gradient-css').addEventListener('click', function() {
  navigator.clipboard.writeText(document.getElementById('gradient-css').value);
  showCopyNotification('Gradient CSS copied!');
});
renderGradientColors();
updateGradientPreview();

// --- Palette Lock/Shuffle ---
let shadesLocks = [false, false, false, false, false];
function randomColor() {
  // Generate a random hex color
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}
document.getElementById('shuffle-shades').addEventListener('click', function() {
  // Only shuffle unlocked shades
  const baseColor = document.getElementById('base-color').value;
  let shades = generateShades(baseColor);
  for (let i = 0; i < shades.length; i++) {
    if (!shadesLocks[i]) {
      // Replace with a random shade (not just random color, but a new shade/tint of base)
      // For variety, randomize the lightness offset
      const offset = [-40, -20, 0, 20, 40][i] + (Math.random() - 0.5) * 10;
      shades[i] = lightenDarkenColor(baseColor, offset);
    }
  }
  // Update the palette with new shades
  populateShadesWithLocks(shades);
});
function populateShadesWithLocks(shades) {
  const container = document.getElementById('shades');
  container.innerHTML = '';
  for (let i = 0; i < shades.length; i++) {
    const color = shades[i];
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    // Lock icon
    const lockIcon = document.createElement('span');
    lockIcon.className = 'lock-icon' + (shadesLocks[i] ? ' locked' : '');
    lockIcon.innerHTML = shadesLocks[i] ? '🔒' : '🔓';
    lockIcon.title = shadesLocks[i] ? 'Unlock' : 'Lock';
    lockIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      shadesLocks[i] = !shadesLocks[i];
      lockIcon.className = 'lock-icon' + (shadesLocks[i] ? ' locked' : '');
      lockIcon.innerHTML = shadesLocks[i] ? '🔒' : '🔓';
      lockIcon.title = shadesLocks[i] ? 'Unlock' : 'Lock';
    });
    colorBox.appendChild(lockIcon);
    // Color value
    const colorValueDiv = document.createElement('div');
    colorValueDiv.className = 'color-value';
    colorValueDiv.textContent = color;
    colorBox.appendChild(colorValueDiv);
    // Tooltip on hover (color name)
    const colorName = getClosestColorName(color);
    colorBox.title = colorName;
    // Click to copy
    colorBox.addEventListener('click', (e) => {
      navigator.clipboard.writeText(color).then(() => {
        showCopyNotification(`Copied ${color} to clipboard!`);
      });
    });
    container.appendChild(colorBox);
  }
}
// Override the default populateSection for shades
function updateShadesWithLocks() {
  const baseColor = document.getElementById('base-color').value;
  let shades = generateShades(baseColor);
  populateShadesWithLocks(shades);
}
// When base color changes, reset locks and update
document.getElementById('base-color').addEventListener('input', function() {
  shadesLocks = [false, false, false, false, false];
  updateShadesWithLocks();
});

// --- Typography Preview ---
function renderTypographyPreview() {
  const shades = document.querySelectorAll('#shades .color-box');
  if (shades.length < 5) return;
  // Get the 5 shades hex values
  const colors = Array.from(shades).map(box => box.querySelector('.color-value').textContent);
  // Assign roles: [darkest, darker, base, lighter, lightest]
  const [darkest, darker, base, lighter, lightest] = colors;
  const preview = document.getElementById('typography-preview-content');
  preview.innerHTML = '';
  // Heading block
  const headingBlock = document.createElement('div');
  headingBlock.className = 'typo-block';
  headingBlock.style.background = lightest;
  headingBlock.style.color = darkest;
  headingBlock.innerHTML = `<h1 style="margin:0;">Heading 1</h1><h2 style="margin:0;">Heading 2</h2><h3 style="margin:0;">Heading 3</h3>`;
  preview.appendChild(headingBlock);
  // Text block
  const textBlock = document.createElement('div');
  textBlock.className = 'typo-block';
  textBlock.style.background = lighter;
  textBlock.style.color = darker;
  textBlock.innerHTML = `<p style="margin:0 0 8px 0;">Sample body text using palette colors. <b>Bold</b> and <i>italic</i> styles included.</p>`;
  preview.appendChild(textBlock);
  // Button block
  const buttonBlock = document.createElement('div');
  buttonBlock.className = 'typo-block';
  buttonBlock.style.background = base;
  buttonBlock.style.color = lightest;
  buttonBlock.innerHTML = `<button class="typo-btn" style="background:${darker};color:${lightest};">Primary Button</button><br><button class="typo-btn" style="background:${lighter};color:${darkest};margin-top:8px;">Secondary Button</button>`;
  preview.appendChild(buttonBlock);
  // Background block
  const bgBlock = document.createElement('div');
  bgBlock.className = 'typo-block';
  bgBlock.style.background = darkest;
  bgBlock.style.color = lightest;
  bgBlock.innerHTML = `<div style="font-size:1.1em;">Dark background with light text</div>`;
  preview.appendChild(bgBlock);
}
// Update preview when palette changes
const observer = new MutationObserver(renderTypographyPreview);
observer.observe(document.getElementById('shades'), {childList: true, subtree: true});
renderTypographyPreview();

// --- Image Color Picker ---
// 1. Button triggers file input
document.getElementById('custom-file-btn').addEventListener('click', function() {
  document.getElementById('image-upload').click();
});
// 2. Load image onto canvas
document.getElementById('image-upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = new window.Image();
    img.onload = function() {
      const canvas = document.getElementById('image-canvas');
      const ctx = canvas.getContext('2d');
      // Resize canvas to fit image (max 180x120)
      let w = img.width, h = img.height;
      const maxW = 180, maxH = 120;
      if (w > maxW || h > maxH) {
        const scale = Math.min(maxW / w, maxH / h);
        w = Math.round(w * scale);
        h = Math.round(h * scale);
      }
      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      canvas.style.display = '';
      document.getElementById('file-name').textContent = file.name;
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});
// 3. Pick color from canvas
document.getElementById('image-canvas').addEventListener('click', function(e) {
  const canvas = e.target;
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) * (canvas.width / rect.width));
  const y = Math.floor((e.clientY - rect.top) * (canvas.height / rect.height));
  const ctx = canvas.getContext('2d');
  const data = ctx.getImageData(x, y, 1, 1).data;
  const hex = '#' + [0,1,2].map(i => data[i].toString(16).padStart(2, '0')).join('');
  // Show picked color info
  const info = document.getElementById('picked-color-info');
  info.style.display = 'flex';
  document.getElementById('picked-color-preview').style.background = hex;
  document.getElementById('picked-color-hex').textContent = hex;
  // Optionally, update base color
  document.getElementById('base-color').value = hex;
  document.getElementById('color-value').value = hex;
  generatePalette();
});
// 4. Copy picked color
document.getElementById('copy-picked-color').addEventListener('click', function() {
  const hex = document.getElementById('picked-color-hex').textContent;
  navigator.clipboard.writeText(hex).then(() => {
    showCopyNotification(`Copied ${hex} to clipboard!`);
  });
});

generatePalette(); 