var themeColors = ["white", "red", "blue", "black", "cyan", "lightgray"];

function changeColorIfNeccessary(elementId) {
  const element = document.getElementById(elementId);
  // read the colors and transform them into rgb format
  const color1 = window.getComputedStyle(element).backgroundColor; // will work
  const color2 = window.getComputedStyle(element).color;
  const color1rgb = color1.replace(/[^\d,]/g, "").split(",");
  const color2rgb = color2.replace(/[^\d,]/g, "").split(",");

  function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  const color1luminance = luminance(color1rgb[0], color1rgb[1], color1rgb[2]);
  const color2luminance = luminance(color2rgb[0], color2rgb[1], color2rgb[2]);
  // calculate the color contrast ratio
  const ratio =
    color1luminance > color2luminance
      ? (color2luminance + 0.05) / (color1luminance + 0.05)
      : (color1luminance + 0.05) / (color2luminance + 0.05);

  if (ratio > 0.222222) {
    fixColor(elementId) 
  }
  
}
changeColorIfNeccessary('example')