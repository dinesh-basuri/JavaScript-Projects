
let body = document.querySelector('body');
let element;

body.addEventListener('click',function(event) {
    element = document.createElement('div');
    element.classList.add('open');
    element.style.left = event.clientX + "px";
    element.style.top = event.clientY + "px";
    body.appendChild(element);
    background();
    clearTimeout();
})


function background() {
  let val = '0123456789ABCDEF';
  let cons = '#';

  for(let i = 0 ; i < 6 ; i++)
  {
    let randomNumber = val[Math.trunc(Math.random()*16)];

    cons = cons + randomNumber;
  }
  console.log(cons);
  element.style.backgroundColor = cons;
}
