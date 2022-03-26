const sectors = document.querySelectorAll(".sector");
const ufo = document.querySelector(".ufo");
const timeLeft = document.querySelector("#time-left");
const scoreBoard = document.querySelector(".score");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSector() {
  sectors.forEach(sector => {
    sector.classList.remove('ufo');
  });
  
  let randomSector = sectors[Math.floor(Math.random() * 9)];
  randomSector.classList.add('ufo');

  hitPosition = randomSector.id;
}



sectors.forEach(sector => {
  sector.addEventListener('mousedown' , () => {
    if (sector.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
      ufo.style.opacity = "0.8";
    }

  })
})

function moveUfo() {
  timerId = setInterval(randomSector, 600);


}


moveUfo();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime ==0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('Játék vége! Az ön pontszáma:'+ result);
  }
}


let countDownTimerId = setInterval(countDown, 1000)