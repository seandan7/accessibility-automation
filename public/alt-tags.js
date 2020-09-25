// Request to Immage for non-alt tags
// "Sorry, this image has no alt tag. I can saw with XX% Accuracy that it is a ____"

var imageUrl
async function addAltTags() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    if (!images[i].getAttribute("alt")) {
      imageUrl = images[i].getAttribute("src");
      fetch(
        "https://api.imagga.com/v2/tags?image_url=" +
          encodeURIComponent(imageUrl), {
            headers: new Headers({
              'Authorization': config.auth, 
              'Content-Type': 'application/x-www-form-urlencoded'
            }),
          }
      ).then((data) => {
        return data.json()
      }).then((json) => {
        const addedAltTag = `No alt tag found. There is a ${Math.floor(json['result']['tags'][0].confidence)} percent chance image contains ${json['result']['tags'][0].tag.en}`
        images[i].setAttribute('alt', addedAltTag)
      })
    }
  }
}
addAltTags();
