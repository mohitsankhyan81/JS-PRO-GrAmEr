const h1=document.createElement('h1');
h1.innerText="Counter"

const button=document.createElement('button');
button.innerText="inc"

const button1=document.createElement('button');
button1.innerText='dec';

const button2=document.createElement('button');
button2.innerText="res";

const pera=document.createElement('h3');
pera.textContent=0;

button.addEventListener('click',()=>{
  pera.textContent++;
})

button1.addEventListener('click',()=>{
  pera.textContent--;
})

button2.addEventListener('click',()=>{
  pera.textContent=0;
})
document.body.appendChild(h1);
document.body.appendChild(pera);
document.body.appendChild(button);
document.body.appendChild(button1);
document.body.appendChild(button2);
