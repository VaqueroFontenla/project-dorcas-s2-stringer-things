'use strict';

var inputName = document.querySelector('.personal-name');
var cardName = document.querySelector('.card__top--name');
var inputJobTitle = document.querySelector('.job-title');
var cardJobTitle = document.querySelector('.card__top--career');
var inputPhoto = document.querySelector('.fill-input__image');
var cardPhoto = document.querySelector('.card__image');
var activableSectionDesign = document.querySelector('.design__title');
var SectionHiddenDesign = document.querySelector('.design__form');
var valueFillInput;
var valueJobTitle;

function reWriteName() {
  valueFillInput = inputName.value;
  cardName.innerHTML = valueFillInput;
}

inputName.addEventListener('change', reWriteName);

function reWriteJob() {
  valueJobTitle = inputJobTitle.value;
  cardJobTitle.innerHTML = valueJobTitle;
}

inputJobTitle.addEventListener('change', reWriteJob);

function addCardPhoto(){
  addPhoto = inputPhoto.value;
  cardPhoto.innerHTML = addPhoto;
}

inputPhoto.addEventListener()

function collapsibleDesign() {
  // Si contiene la clase hidden la elimina y sino la añade
  SectionHiddenDesign.classList.toggle('hidden');
}

activableSectionDesign.addEventListener('click', collapsibleDesign);
