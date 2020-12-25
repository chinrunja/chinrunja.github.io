// change 4x4 square background color
const divs = document.querySelectorAll('div');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(event) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  event.target.style.backgroundColor = rndCol;
}

for (var i = 0; i < 16; i ++) {
  divs[i].onclick = bgChange;
}
