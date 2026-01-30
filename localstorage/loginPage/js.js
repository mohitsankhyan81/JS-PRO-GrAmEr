const h1=document.createElement('h1');
h1.textContent="Log in page";

const form=document.createElement('form');

const label=document.createElement('label');
label.innerText="Enter your Name";

const input=document.createElement('input');
input.type="text";
input.placeholder="Enter name";

const label2=document.createElement('label');
label2.innerText="\nEnter your Password";

const input1=document.createElement('input');
input1.type="password";
input1.placeholder="Enter a Strong Password";

const span=document.createElement('span');
span.innerText="\n";

const button=document.createElement('button');
button.textContent="submit";
const data=JSON.parse(localStorage.getItem("data"))||{};

console.log(data);
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let map={
    name:input.value,
    password:input1.value
  };
  localStorage.setItem("data",JSON.stringify(map));
  console.log("saved",map);
  input.value="";
  input1.value="";
});
console.log(form)
form.appendChild(label);
form.appendChild(input);
form.appendChild(label2);
form.appendChild(input1);
form.appendChild(span);
form.appendChild(button);
document.body.appendChild(h1);
document.body.appendChild(form);