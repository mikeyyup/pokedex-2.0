'use strict';

const allCards = document.querySelectorAll('.card');

const grass = document.querySelectorAll('.grasscard');
const fire = document.getElementsByClassName('firecard');
const water = document.getElementsByClassName('watercard');
const bug = document.getElementsByClassName('bugcard');
const normal = document.getElementsByClassName('normalcard');
const poison = document.getElementsByClassName('poisoncard');
const electric = document.getElementsByClassName('electriccard');
const ground = document.getElementsByClassName('groundcard');
const fighting = document.getElementsByClassName('fightingcard');
const fairy = document.getElementsByClassName('fairycard');
const psychic = document.getElementsByClassName('psychiccard');
const rock = document.getElementsByClassName('rockcard');
const ice = document.getElementsByClassName('icecard');
const dragon = document.getElementsByClassName('dragoncard');

const checkbox = document.getElementsByClassName('checkedoff');

const e1 = document.getElementById('e1');

const grassSwitch = document.querySelector('#grass');
const fireSwitch = document.querySelector('#fire');
const waterSwitch = document.querySelector('#water');
const bugSwitch = document.querySelector('#bug');
const normalSwitch = document.querySelector('#normal');
const poisonSwitch = document.querySelector('#poison');
const electricSwitch = document.querySelector('#electric');
const groundSwitch = document.querySelector('#ground');
const fightingSwitch = document.querySelector('#fighting');
const fairySwitch = document.querySelector('#fairy');
const psychicSwitch = document.querySelector('#psychic');
const rockSwitch = document.querySelector('#rock');
const iceSwitch = document.querySelector('#ice');
const dragonSwitch = document.querySelector('#dragon');

function grassFunc() {
  for (var i = 0; i < grass.length; i++) {
    grass[i].classList.toggle('none');
  }
}

function fireFunc() {
  for (var i = 0; i < fire.length; i++) {
    fire[i].classList.toggle('none');
  }
}
function waterFunc() {
  for (var i = 0; i < water.length; i++) {
    water[i].classList.toggle('none');
  }
}
function bugFunc() {
  for (var i = 0; i < bug.length; i++) {
    bug[i].classList.toggle('none');
  }
}
function normalFunc() {
  for (var i = 0; i < normal.length; i++) {
    normal[i].classList.toggle('none');
  }
}
function poisonFunc() {
  for (var i = 0; i < poison.length; i++) {
    poison[i].classList.toggle('none');
  }
}
function electricFunc() {
  for (var i = 0; i < electric.length; i++) {
    electric[i].classList.toggle('none');
  }
}
function groundFunc() {
  for (var i = 0; i < ground.length; i++) {
    ground[i].classList.toggle('none');
  }
}
function fightingFunc() {
  for (var i = 0; i < fighting.length; i++) {
    fighting[i].classList.toggle('none');
  }
}
function fairyFunc() {
  for (var i = 0; i < fairy.length; i++) {
    fairy[i].classList.toggle('none');
  }
}
function psychicFunc() {
  for (var i = 0; i < psychic.length; i++) {
    psychic[i].classList.toggle('none');
  }
}
function rockFunc() {
  for (var i = 0; i < rock.length; i++) {
    rock[i].classList.toggle('none');
  }
}
function iceFunc() {
  for (var i = 0; i < ice.length; i++) {
    ice[i].classList.toggle('none');
  }
}
function dragonFunc() {
  for (var i = 0; i < dragon.length; i++) {
    dragon[i].classList.toggle('none');
  }
}

// function testy() {
//   for (var i = 0; i < allCards.length; i++) {
//     if (allCards[i] != e1.checked) {
//       allCards[i].classList.add('none');
//     } else {
//       console.log('wtf');
//     }

grassSwitch.addEventListener('click', function () {
  fireFunc();
  waterFunc();
  bugFunc();
  normalFunc();
  poisonFunc();
  electricFunc();
  groundFunc();
  fightingFunc();
  fairyFunc();
  psychicFunc();
  rockFunc();
  iceFunc();
  dragonFunc();

  // for (var i = 0; i < checkbox.length; i++) {
  //   if (checkbox[i].checked == true) {
  //     console.log('true'); // add class none to all card except those checked accounts
  //   } else {
  //     console.log('false');
  //   }
  // }
});

fireSwitch.addEventListener('click', function () {
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked == false) {
      console.log('true'); // add class none to all card except those checked accounts
    } else {
      console.log('false');
    }
  }
});
