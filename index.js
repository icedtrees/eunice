function click() {
  alert("hello");
  var img = document.createElement('img');
  img.setAttribute('src', 'resources/banner.png');
  document.body.appendChild(img);
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', click);
};


