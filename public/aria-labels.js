const buttonLinks = Array.prototype.slice.call(
  document.getElementsByTagName("button"),
  0
);
const anchorLinks = Array.prototype.slice.call(
  document.getElementsByTagName("a"),
  0
);
const buttons = buttonLinks.concat(anchorLinks);

function addAriaLabels() {
  for (let i = 0; i < buttons.length; i++) {
    if (
      (!buttons[i].getAttribute("aria-label") &&
        buttons[i].textContent.toLowerCase() === "read more") ||
      buttons[i].textContent.toLowerCase() === "learn more"
    ) {
      if (buttons[i].getAttribute("href")[0] == "#") {
        buttons[i].setAttribute("aria-label", "Anchor link within page, or a link to popup");
      } else {
        const buttonLink = buttons[i].getAttribute("href");
        let buttonAriaLabel;
        fetch(buttonLink)
          .then((response) => response.text())
          .then((text) => {
            var parsedResponse = new window.DOMParser().parseFromString(
              text,
              "text/html"
            );
            buttonAriaLabel = parsedResponse.title;
            buttons[i].setAttribute(
              "aria-label",
              `Link to ${buttonAriaLabel} page`
            );
          });
      }
    }
  }
}

addAriaLabels();
