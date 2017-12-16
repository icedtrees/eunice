function click() {
  var container = document.getElementById('container');
  if (container.firstChild != null) {
    container.removeChild(container.firstChild);
  }

  setImage('resources/banner.png');
}

function setImage(src) {
  var container = document.getElementById('container');

  var img = document.createElement('img');
  img.setAttribute('src', src);
  img.className = 'image-content';

  container.appendChild(img);
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', click);
};


