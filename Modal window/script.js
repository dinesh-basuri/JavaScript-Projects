'use strict';

let openBtn = document.querySelectorAll('.show-btn');
let modal = document.querySelector('.modal-section');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.cls-btn');

let openWindow = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

let closeWindow = function() {
  modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<openBtn.length;i++) {
  openBtn[i].addEventListener('click',function() {
    openWindow();
  })
}

overlay.addEventListener('click',function() {
  closeWindow();
})

close.addEventListener('click',function() {
  closeWindow();
})

document.addEventListener('keydown',function(e){
  if(e.key === 'Escape') {
    closeWindow();
  }
})