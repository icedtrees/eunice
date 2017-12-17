window.onload = function () {
  document.getElementById('button').addEventListener('click', click);
};

function click() {
  nextContent();
  newButtonText();
}

function newButtonText() {
  var newTextChoices = ['whos the best? u are', 'eunice is awesome', 'eunice is the best', 'i am great', 'give me my next thing', 'who are you? im fucking eunice', 'hey button whats up my bro?'];
  document.getElementById('button').textContent = randomElement(newTextChoices);
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
