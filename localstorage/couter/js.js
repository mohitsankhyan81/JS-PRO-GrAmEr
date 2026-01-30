const h1=document.createElement('h1');
h1.textContent='Counter';

const button1=document.createElement('button');
const button2=document.createElement('button');
const button3=document.createElement('button');
const para=document.createElement('h2');
button1.innerText="inc";
button2.innerText="dec";
button3.innerText="reset";

let count=localStorage.getItem("count")||0;
para.textContent=count;

button1.addEventListener('click',()=>{
  count++;
  para.textContent=count;
  localStorage.setItem("count",count);
})

button2.addEventListener('click',()=>{
  count--;
  para.textContent=count;
  localStorage.setItem("count",count);
})

button3.addEventListener('click',()=>{
  count=0;
  para.textContent=count;
  localStorage.setItem("count",count);
});

console.log(count)
document.body.appendChild(h1);
document.body.appendChild(para);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body .appendChild(button3);