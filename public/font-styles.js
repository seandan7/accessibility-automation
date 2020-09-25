function tagsToSpans(tag, spanStyle) {
  const tagArray = document.getElementsByTagName(tag)
  for (let i = 0; i < tagArray.length; i++) {
    console.log(tagArray[i])
  }
}
tagsToSpans('u', 'text-decoration: underline;')
tagsToSpans('b', 'font-weight: bold;')
tagsToSpans('strong', 'font-weight: bold;')
tagsToSpans('em', 'font-style: italic;')

