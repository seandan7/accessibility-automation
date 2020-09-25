function tagsToSpans(tag, spanStyle) {
  const tagArray = document.getElementsByTagName(tag)
  for (let i = 0; i < tagArray.length; i++) {
    const spanToReplace = document.createElement('span')
    spanToReplace.innerHTML = tagArray[i].textContent;
    spanToReplace.setAttribute('style', spanStyle)
    tagArray[i].parentNode.replaceChild(spanToReplace, tagArray[i])
  }
}
tagsToSpans('u', 'text-decoration: underline;')
tagsToSpans('b', 'font-weight: bold;')
tagsToSpans('strong', 'font-weight: bold;')
tagsToSpans('em', 'font-style: italic;')

