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

const checkbox = document.querySelectorAll('.checkedoff');

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

function allPokemon() {
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('none');
  }
}
function grassFuncAdd() {
  for (var i = 0; i < grass.length; i++) {
    grass[i].classList.add('none');
  }
}
function fireFuncAdd() {
  for (var i = 0; i < fire.length; i++) {
    fire[i].classList.add('none');
  }
}
function waterFuncAdd() {
  for (var i = 0; i < water.length; i++) {
    water[i].classList.add('none');
  }
}
function bugFuncAdd() {
  for (var i = 0; i < bug.length; i++) {
    bug[i].classList.add('none');
  }
}
function normalFuncAdd() {
  for (var i = 0; i < normal.length; i++) {
    normal[i].classList.add('none');
  }
}
function poisonFuncAdd() {
  for (var i = 0; i < poison.length; i++) {
    poison[i].classList.add('none');
  }
}
function electricFuncAdd() {
  for (var i = 0; i < electric.length; i++) {
    electric[i].classList.add('none');
  }
}
function groundFuncAdd() {
  for (var i = 0; i < ground.length; i++) {
    ground[i].classList.add('none');
  }
}
function fightingFuncAdd() {
  for (var i = 0; i < fighting.length; i++) {
    fighting[i].classList.add('none');
  }
}
function fairyFuncAdd() {
  for (var i = 0; i < fairy.length; i++) {
    fairy[i].classList.add('none');
  }
}
function psychicFuncAdd() {
  for (var i = 0; i < psychic.length; i++) {
    psychic[i].classList.add('none');
  }
}
function rockFuncAdd() {
  for (var i = 0; i < rock.length; i++) {
    rock[i].classList.add('none');
  }
}
function iceFuncAdd() {
  for (var i = 0; i < ice.length; i++) {
    ice[i].classList.add('none');
  }
}
function dragonFuncAdd() {
  for (var i = 0; i < dragon.length; i++) {
    dragon[i].classList.add('none');
  }
}

function grassClick() {
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function fireClick() {
  grassFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function waterClick() {
  grassFuncAdd();
  fireFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function bugClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function normalClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function poisonClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function electricClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function groundClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function fightingClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function fairyClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function psychicClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function rockClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  iceFuncAdd();
  dragonFuncAdd();
}
function iceClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  dragonFuncAdd();
}
function dragonClick() {
  grassFuncAdd();
  fireFuncAdd();
  waterFuncAdd();
  bugFuncAdd();
  normalFuncAdd();
  poisonFuncAdd();
  electricFuncAdd();
  groundFuncAdd();
  fightingFuncAdd();
  fairyFuncAdd();
  psychicFuncAdd();
  rockFuncAdd();
  iceFuncAdd();
}

// SEARCH FUNCTION
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

// FUNCTION TO ENABLE ONLY 1 CHECKBOX AT A TIME
function selectOnlyThis(id) {
  for (var i = 1; i <= 14; i++) {
    if ('e' + i === id && document.getElementById('e' + i).checked === true) {
      if ('e' + i == 'e1') {
        allPokemon();
        grassClick();
      } else if ('e' + i == 'e2') {
        allPokemon();
        fireClick();
      } else if ('e' + i == 'e3') {
        allPokemon();
        waterClick();
      } else if ('e' + i == 'e4') {
        allPokemon();
        bugClick();
      } else if ('e' + i == 'e5') {
        allPokemon();
        normalClick();
      } else if ('e' + i == 'e6') {
        allPokemon();
        poisonClick();
      } else if ('e' + i == 'e7') {
        allPokemon();
        electricClick();
      } else if ('e' + i == 'e8') {
        allPokemon();
        groundClick();
      } else if ('e' + i == 'e9') {
        allPokemon();
        fightingClick();
      } else if ('e' + i == 'e10') {
        allPokemon();
        fairyClick();
      } else if ('e' + i == 'e11') {
        allPokemon();
        psychicClick();
      } else if ('e' + i == 'e12') {
        allPokemon();
        rockClick();
      } else if ('e' + i == 'e13') {
        allPokemon();
        iceClick();
      } else if ('e' + i == 'e14') {
        allPokemon();
        dragonClick();
      }
    } else {
      document.getElementById('e' + i).checked = false;
    }
    if ('e' + i === id && document.getElementById('e' + i).checked === false) {
      allPokemon();
    }
  }
}
