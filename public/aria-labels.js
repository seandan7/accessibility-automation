const buttons = document.getElementsByTagName("a");

function addAriaLabels() {
  for (let i = 0; i < buttons.length; i++) {
    if (
      buttons[i].textContent.toLowerCase() === "read more" ||
      buttons[i].textContent.toLowerCase() === "learn more"
    ) {
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

addAriaLabels()