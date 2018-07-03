'use strict';

// var inputName = document.querySelector('.js-personal-name');
// var cardName = document.querySelector('.js-card__top--name');
var activableSection = document.querySelectorAll('.js-collapsible-title');
var parent;

console.log(activableSection);

// var valueFillInput;
//
// function reWriteName() {
//   valueFillInput = inputName.value;
//   cardName.innerHTML = valueFillInput;
// }
//
// inputName.addEventListener('change', reWriteName);

function collapsibleDesign(event) {
  parent = event.currentTarget.parentElement;
  console.log(parent);
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('js-collapsible-visible');

}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener('click', collapsibleDesign);
  console.log(activableSection[i]);
}
