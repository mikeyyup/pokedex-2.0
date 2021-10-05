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
const e2 = document.getElementById('e2');
const e3 = document.getElementById('e3');
const e4 = document.getElementById('e4');
const e5 = document.getElementById('e5');
const e6 = document.getElementById('e6');
const e7 = document.getElementById('e7');
const e8 = document.getElementById('e8');
const e9 = document.getElementById('e9');
const e10 = document.getElementById('e10');
const e11 = document.getElementById('e11');
const e12 = document.getElementById('e12');
const e13 = document.getElementById('e13');
const e14 = document.getElementById('e14');

let checkedList = [e14, e13];

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

function searchPokemon() {
  const searchBar = document.getElementById('searchbar').value.toUpperCase();
  const cardContainer = document.getElementById('card-container');
  const cards = cardContainer.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    let name = cards[i].querySelector('h3');
    console.log(name);
    if (name.innerText.toUpperCase().indexOf(searchBar) > -1) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

function allPokemon() {
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.add('none');
  }
}

function allPokemon1() {
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.toggle('none');
  }
}

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

// if (grassSwitch.checked) {
//   console.log('hello');
// }

// grassSwitch.addEventListener('click', function () {
//   grassFunc();
// });
// fireSwitch.addEventListener('click', function () {
//   fireFunc();
// });
// waterSwitch.addEventListener('click', function () {
//   waterFunc();
// });
// bugSwitch.addEventListener('click', function () {
//   bugFunc();
// });
// normalSwitch.addEventListener('click', function () {
//   normalFunc();
// });
// poisonSwitch.addEventListener('click', function () {
//   poisonFunc();
// });
// electricSwitch.addEventListener('click', function () {
//   electricFunc();
// });
// groundSwitch.addEventListener('click', function () {
//   groundFunc();
// });
// fightingSwitch.addEventListener('click', function () {
//   fightingFunc();
// });
// fairySwitch.addEventListener('click', function () {
//   fairyFunc();
// });
// psychicSwitch.addEventListener('click', function () {
//   psychicFunc();
// });
// rockSwitch.addEventListener('click', function () {
//   rockFunc();
// });
// iceSwitch.addEventListener('click', function () {
//   iceFunc();
// });
// dragonSwitch.addEventListener('click', function () {
//   dragonFunc();
// });

// grassSwitch.addEventListener('click', function () {
//   if (e1.checked == false) {
//     console.log('grass clicked');
//   }
// });
// grassSwitch.addEventListener('click', function () {
//   if (e1.checked == false) {
//     console.log('grass clicked');
//   }
// });
// grassSwitch.addEventListener('click', function () {
//   if (e1.checked == false) {
//     console.log('grass clicked');
//   }
// });
// grassSwitch.addEventListener('click', function () {
//   if (e1.checked == false) {
//     console.log('grass clicked');
//   }
// });

// checkbox.addEventListener('click', function () {
//   for (var i = 0; i < checkbox.length; i++) {
//     if (checkbox[i].checked) {
//       allPokemon1();
//     } else {
//       allPokemon();
//     }
//   }
// });
// checkbox.addEventListener('click', function () {
//   console.log('hello');
// });

document.querySelectorAll('.checkedoff').forEach(item => {
  item.addEventListener('click', function () {
    //     for (var i = 0; i < checkbox.length; i++) {
    //       console.log(checkbox[0].checked);
    //     }
    //   });
    // });

    for (var i = 0; i < checkbox.length; i++) {
      //   console.log('clciedk');
      // } else {
      if (checkbox[0].checked == true) {
        grassFunc();
      } else {
        grassFunc();
      }

      if (checkbox[1].checked) {
        fireFunc();
      }
    }
  });
});

// // when at least 1 is clicked,
// var checboxes;

// for (var i = 0; i < checkbox.length; i++) {
//   if (checkbox[i].checked) {
//     allPokemon();
//     console.log('lcick');
//   }
// }

for (var i = 0; i < checkbox.length; i++) {
  if (checkbox.checked) {
    console.log('hello');
    grassFunc();
  }
}
