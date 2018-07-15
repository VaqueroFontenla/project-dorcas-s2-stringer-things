'use strict';

var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var uploadMiniPhoto = document.querySelector('.square__white');
var fr = new FileReader();

function reWriteData(e) {
  console.log('Olatz');
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
  var itemAttribute = fillInput.getAttribute('type');
  if (itemAttribute === 'number') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'email') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'url') {
    var scriptUrl = fillInput.value + '/';
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
}


for (var i = 0; i < itemsSocialMedia.length; i++) {
  var targetAttribute = itemsSocialMedia[i].getAttribute('type');
  if (targetAttribute === 'url') {
    itemsSocialMedia[i].addEventListener('change', reWriteData);
  } else {
    itemsSocialMedia[i].addEventListener('keyup', reWriteData);
  }
}




//Cargar Imagen

function mostrarImagen(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  var urlPhoto = 'url(' + '"' + fr.result + '"' + ')';
  uploadPhoto.style.backgroundImage = urlPhoto;
  uploadMiniPhoto.style.backgroundImage = urlPhoto;

}

function clickInput() {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);


//Skills
var selectInputSkills = document.querySelector('.js-select-abilities');
var selectInputSkillsContainer = document.querySelector('.js-ability-box');
var skillContainer = document.querySelector('.js-card_skills--list');
var buttonSkills = document.querySelectorAll('.js-button-abilities');

function createOption(text) {
console.log('oli');
  //Crea un option
  var option = document.createElement('option');
  // Crea un nodo de texto
  var optionText = document.createTextNode(text);
  // Añade el nodo de texto al option
  option.appendChild(optionText);

  // Devuelve el option creado con su nodo de texto y atributos
  return option;
}

function searchSkills() {
  var url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var skillsList = json.skills;
    for (var i = 0; i < skillsList.length; i++) {
      var newOption = createOption(skillsList[i]);
      selectInputSkills.appendChild(newOption);
    }
  });
}

searchSkills();

function selectSkills() {
  var x = selectInputSkills.value;
  skillContainer.innerHTML = '<li class="skill">' + x + '</li>';
}

selectInputSkills.addEventListener('click', selectSkills);

function createSelectSkill () {
  var newSelect = document.createElement('select');
  newSelect.classList.add('select-abilities');
  // var newOptionDefault =
}

function addSelectSkill() {
  var newSelectList = createSelectSkill();
  selectInputSkillsContainer.appendChild(newSelectList);

  // create box skills
  var buttonSkills = document.querySelectorAll('.js-button-abilities');
  var boxSkills = document.querySelectorAll('.js-ability-box');
  var dataType;
  var dataIndex = 0;
  var contador = 0;
  var dataIndexPlus = 1;


  function createSkill(event){
    for (var i = 0; i < boxSkills.length; i++){
      dataType = event.currentTarget.getAttribute('data-type');
      dataIndex = event.currentTarget.getAttribute('data-index');
      dataIndex = parseInt(dataIndex);
      // console.log('dataType' ,dataType);
      // console.log('dataIndex' ,dataIndex);
      // console.log('dataIndex type' ,typeof dataIndex);
      if((boxSkills[dataIndex].classList.contains('hidden'))) {
        console.log(boxSkills[dataIndex].classList.contains('hidden'));
        console.log('menos');
        // boxSkills[dataIndex].classList.add('hidden', 'plus');
        boxSkills[dataIndex].classList.add(dataType);
      } else if ((boxSkills[dataIndex].classList.contains('plus'))){

        boxSkills[dataIndexPlus].classList.add(dataType);
      } //else {
      //   }
      // }
      for (var i = 0; i < 2; i++){
        dataIndexPlus = contador + 1;
      }
      console.log('contador', contador);
      contador++;
    }
  }


  for (var i = 0; i < buttonSkills.length; i++) {
    buttonSkills.addEventListener('click',addSelectSkill);
  }
}

  //
  //   for(var i = 0; i < buttonSkills.length; i++){
  //     buttonSkills[i].addEventListener('click', createSkill);
  //     var activableSection = document.querySelectorAll('.js-collapsible-title');
  //     var parent;
  //     var fieldset = document.querySelectorAll('.js-collapsible-visible');
  //
  //     //abre y cierra colapsables
  //     console.log(activableSection);
  //
  //     function collapsibleDesign(event) {
  //       parent = event.currentTarget.parentElement;
  //       console.log(parent);
  //       closeCollapsibles();
  //       // Si contiene la clase hidden la elimina y sino la añade
  //       parent.classList.toggle('js-collapsible-visible');
  //     }
  //
  //     for (var i = 0; i < activableSection.length; i++) {
  //       activableSection[i].addEventListener('click', collapsibleDesign);
  //       console.log(activableSection[i]);
  //     }
  //     // un colapsable abierto cada vez
  //
  //     function closeCollapsibles() {
  //       for (var i = 0; i < fieldset.length; i++) {
  //         console.log(activableSection.length);
  //         fieldset[i].classList.remove('js-collapsible-visible');
  //       }
  //     }
  //
  //     // create box skills
  //     var buttonSkills = document.querySelectorAll('.js-button-abilities');
  //     var boxSkills = document.querySelectorAll('.js-ability-box');
  //     var dataType;
  //     var dataIndex = 0;
  //
  //     function createSkill(event) {
  //       for (var i = 0; i < boxSkills.length; i++) {
  //         dataType = event.currentTarget.getAttribute('data-type');
  //         dataIndex = event.currentTarget.getAttribute('data-index');
  //         dataIndex = parseInt(dataIndex);
  //         console.log('dataType', dataType);
  //         console.log('dataIndex type', typeof dataIndex);
  //         if (dataType === 'hidden') {
  //           boxSkills[dataIndex].classList.add(dataType);
  //         } else if (dataType === 'plus') {
  //           console.log('dataIndex', dataIndex);
  //           dataIndex = dataIndex + 1;
  //           boxSkills[dataIndex].classList.add(dataType);
  //         }
  //       }
  //     }
  //
  //     for (var i = 0; i < buttonSkills.length; i++) {
  //       buttonSkills[i].addEventListener('click', createSkill);
  //     }
  // }

//Boton resetbutton

var resetbtn = document.querySelector('.resetbutton');

function resetInfo() {
  // reseteando formulario
  document.querySelector('.form').reset();

  skillContainer.innerHTML = '';
  // reseteando card
  var nameInCard = document.querySelector('.card__top--name');
  var careerInCard = document.querySelector('.card__top--career');
  nameInCard.innerHTML = 'Nombre Apellido';
  careerInCard.innerHTML = 'Descripcion';
}
resetbtn.addEventListener('click', resetInfo);
