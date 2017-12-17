window.onload = function () {
  document.getElementById('button').addEventListener('click', click);
};

function click() {
  nextContent();
}

function nextContent() {
  var container = document.getElementById('container');
  if (container.firstChild != null) {
    container.removeChild(container.firstChild);
  }

  var getNextContent = [nextChibirdImage, nextPersonalMessage, createMadeDay, nextHistoricalQuote];
  container.appendChild(randomElement(getNextContent)());
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}
