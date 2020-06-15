// Add your doToElementsInArray() function here:
function doToElementsInArray(callback, array) {
  array.forEach(callback)
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = `${array[index]}!!!`
}