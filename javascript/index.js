var imageCounter = [
  [0, 0, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 0, 2]
];

setInterval(function() { shuffler(0); }, 5000);
setInterval(function() { shuffler(1); }, 5000);
setInterval(function() { shuffler(2); }, 5000);
setInterval(function() { shuffler(3); }, 5000);

function backToTop() {
  location.href="#top";
}

function jumpToContents() {
  location.href="#contents";
}

function shuffler(shuffleID) {
  var curImage = imageCounter[shuffleID][1];
  var maxImage = imageCounter[shuffleID][2];
  var top = document.getElementById("shuffle" + shuffleID + curImage);
  hide(top);

  if (curImage === maxImage) {
    curImage = 0;
  } else {
    curImage++;
  }

  var next = document.getElementById("shuffle" + shuffleID + curImage);
  imageCounter[shuffleID][1] = curImage;
  show(next);
}

function show(element) {
  var classes = element.className;
  classes += " visible";
  element.className = classes;
}

function hide(element) {
  var classes = element.className;
  element.className = classes.replace(" visible", "");
}
