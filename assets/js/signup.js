$(document).ready(function() {
  $('#toStep2').click(function(){
    $('.step1').hide(300);
    $('.step2').fadeIn(2000);
  });
  $('#backStep1').click(function(){
    $('.step2').hide(300);
    $('.step1').fadeIn(2000);
  });
  $('#toStep3').click(function(){
    $('.step2').hide(300);
    $('.step3').fadeIn(2000);
  });
  $('#backStep2').click(function(){
    $('.step3').hide(300);
    $('.step2').fadeIn(2000);
  });
  $('#toStep4').click(function(){
    $('.step3').hide(300);
    $('.step4').fadeIn(2000)
  })
  $('#backStep3').click(function(){
    $('.step4').hide(300);
    $('.step3').fadeIn(2000);
  });
});

const addLan = document.querySelector('#addLan');

// Language List Array
lanList = ['English', 'Russian', 'English', 'Russian', 'English', 'Russian', 'English'];

// Language Profiency Array 
profiencyList = ['basic', 'conversational', 'fluent', 'native'];

// Add Language
const lan = document.querySelector('.languageChoose');
function addLanguage() {
  // Creating HTML elements

  // create form 
  const form = document.createElement('form');
  form.classList.add('row', 'g-3', 'needs-validation');
  const validateAttr = document.createAttribute('validate');
  form.setAttributeNode(validateAttr);
  lan.appendChild(form)

// main Div`s
const chooseLan = document.createElement('div');
const chooseProfiency = document.createElement('div');
const deleteLan = document.createElement('div');

// Add classes to main div`s

chooseLan.classList.add('col-md-6', 'col-12');
chooseProfiency.classList.add('col-md-4', 'col-10');
deleteLan.classList.add('col-sm-2', 'col-12');

// chooseLan elements
const chooselanLabel = document.createElement('label');
const chooseLanSelect = document.createElement('select');
const chooseLanOption = document.createElement('option');

// Add attr to Choose Lan
chooselanLabel.classList.add('form-label');
const chooseLanLabelFor = document.createAttribute('for');
chooseLanLabelFor.value = 'language';
chooselanLabel.setAttributeNode(chooseLanLabelFor);
chooselanLabel.innerHTML = 'Выберите язык';

// chooseLan Select 
chooseLanSelect.classList.add('form-select');
chooseLanSelect.id = 'language';

// ChooseLan Option 
const selectedAttr = document.createAttribute('selected');
const disabledAttr = document.createAttribute('disabled');
chooseLanOption.setAttributeNode(selectedAttr);
chooseLanOption.setAttributeNode(disabledAttr);
chooseLanOption.innerHTML = 'Выберите язык';

chooseLanSelect.appendChild(chooseLanOption);

for (i=0; i<lanList.length; i++) {
  let chooseLanOptions = document.createElement('option');
  chooseLanOptions.innerHTML = lanList[i];
  chooseLanSelect.appendChild(chooseLanOptions);
}

// Finish chooseLan
form.appendChild(chooseLan);
chooseLan.appendChild(chooselanLabel);
chooseLan.appendChild(chooseLanSelect);

// chooseProfiency elements
const chooseProfiencyLabel = document.createElement('label');
const chooseProfiencySelect = document.createElement('select');
const chooseProfiencyOption = document.createElement('option');

// Add attr to Choose Lan
chooseProfiencyLabel.classList.add('form-label');
const chooseProfiencyLabelFor = document.createAttribute('for');
chooseProfiencyLabelFor.value = 'profiency';
chooseProfiencyLabel.setAttributeNode(chooseProfiencyLabelFor);
chooseProfiencyLabel.innerHTML = 'Знание языка';

// chooseLan Select 
chooseProfiencySelect.classList.add('form-select');
chooseProfiencySelect.id = 'profiency';

// ChooseLan Option 
const selectedAttrProfiency = document.createAttribute('selected');
const disabledAttrProfiency = document.createAttribute('disabled');
chooseProfiencyOption.setAttributeNode(selectedAttrProfiency);
chooseProfiencyOption.setAttributeNode(disabledAttrProfiency);
chooseProfiencyOption.innerHTML = 'Выберите язык';

chooseProfiencySelect.appendChild(chooseProfiencyOption);

for (i=0; i<profiencyList.length; i++) {
  let chooseProfiencyOptions = document.createElement('option');
  chooseProfiencyOptions.innerHTML = profiencyList[i];
  chooseProfiencySelect.appendChild(chooseProfiencyOptions);
}

// Finish chooseProfiency
form.appendChild(chooseProfiency);
chooseProfiency.appendChild(chooseProfiencyLabel);
chooseProfiency.appendChild(chooseProfiencySelect);

// deleteLan Elements
const deleteLanLabel = document.createElement('label');
const deleteLanButton = document.createElement('button');
const deleteLanIcon = document.createElement('i');

// Add attr to deleteLan label
deleteLanLabel.classList.add('form-label');
const deleteLanLabelFor = document.createAttribute('for');
deleteLanLabelFor.value = 'delete';
deleteLanLabel.setAttributeNode(deleteLanLabelFor);
deleteLanLabel.innerHTML = 'Удалить';

const deleteLanButtonType = document.createAttribute('type');
deleteLanButtonType.value = 'button';
deleteLanButton.setAttributeNode(deleteLanButtonType);

deleteLanButton.id = 'delete';
deleteLanButton.classList.add('btn', 'btn-circle', 'btn-outline-danger', 'form-control');
deleteLanIcon.classList.add('fas', 'fa-trash');

deleteLanButton.appendChild(deleteLanIcon);

form.appendChild(deleteLan);
deleteLan.appendChild(deleteLanLabel);
deleteLan.appendChild(deleteLanButton);
}

// addLan.addEventListener('click', addLanguage);

const btns = document.querySelectorAll('#delete');
btns.addEventListener('click', function(){
  alert('Btn is clicked');
});
