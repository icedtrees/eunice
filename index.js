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

  var getNextContent = [nextChibirdImage, nextText, createMadeDay, nextHistoricalQuote];
  container.appendChild(randomElement(getNextContent)());
}

function nextText() {
  var span = document.createElement('span');
  span.textContent = "eunice is great";
  return span;
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}
