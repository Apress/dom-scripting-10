function styleHeaderSiblings() {
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName("h1");
  for (var i=0; i<headers.length; i++) {
    var elem = getNextElement(headers[i].nextSibling);
    addClass(elem,"intro");
  }
}
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    element.className+= " ";
    element.className+= value;
  }
}
function getNextElement(node) {
  if(node.nodeType == 1) {
	return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
addLoadEvent(styleHeaderSiblings);