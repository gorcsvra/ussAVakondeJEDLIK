const sectors = document.querySelectorAll(".sector");
const ufo = document.querySelectorAll(".ufo");
const scoreBoard = document.querySelector(".score");
let lastSector;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomSector(sectors) {
  const index = Math.floor(Math.random() * holes.length);
  const sector = sectors[index];
  if (sector === lastSector) {
    console.log("Itt a vége,előlről kezdődik");
    return randomSector(sectors);
  }
  lastSector = sector;
  return sector;
}

function ufoUp() {
  const time = randomTime(200, 1005);
  const sector = randomSector(sectors);
  sector.classList.add("up");
  setTimeout(() => {
    sector.classList.remove("up");
    if (!timeUp) ufoUp();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  ufoUp();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
  }
  
  ufo.forEach(ufo => ufo.addEventListener('click', bonk));
  
  