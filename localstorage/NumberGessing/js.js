const h1=document.createElement('h1');
h1.textContent="Number gessing game";

const label=document.createElement('label');
label.textContent="Select a no between 1 to 100  ";

const input=document.createElement('input');
input.type=Number;

const button=document.createElement('button');
button.innerText="click me";

const pr=document.createElement('p');
pr.style.fontWeight="bold"
const pr1=document.createElement('p');

const computer=Math.floor(Math.random()*100)+1;
let count=0;

const data=JSON.parse(localStorage.getItem(count))
button.addEventListener('click',()=>{
  if(computer==input.value){
    pr.textContent="Same";
  }
  else if(input.value<computer){
    pr.textContent="High";
  }
  else{
    pr.textContent="low";
  }
  count++;
  pr1.textContent=count;

  localStorage.setItem("count",JSON.stringify(count));
})

document.body.appendChild(h1);
document.body.appendChild(label);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(pr);
document.body.appendChild(pr1);