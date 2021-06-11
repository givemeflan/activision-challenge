'use strict';

// Getting ids from HTML DOC 
var modal = document.getElementById('modal-style');

var modalButton = document.getElementById('btn-style');

var closeButton = document.getElementsByClassName('button-close');

// Event Listening
modalButton.addEventListner('click',openModalBox);
closeButton.addEventListener('click',closeModalBox)

// openModalBox Functions 
function openModalBox(){
   modal.style.display= "block";
}

function closeModalBox(){
  modal.style.dispay='none';
}