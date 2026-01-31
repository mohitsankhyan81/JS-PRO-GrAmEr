const employeeform=document.createElement('h1');
employeeform.textContent="Employee form";

const form=document.createElement('form');

const label=document.createElement('label');
label.textContent="Enter your name";
const employeeName=document.createElement('input');
employeeName.placeholder="Enter your Name";
employeeName.type="text";
const label2=document.createElement('label');
label2.textContent="Enter your Password  ";
const employeePassword=document.createElement('input');
employeePassword.type="Password"
employeePassword.placeholder="Enter Your Password"

const button=document.createElement('button');
button.innerText="submit";

const div=document.createElement('div');
button.addEventListener('click',(e)=>{
  e.preventDefault();
  const p=document.createElement('p');
  const p1=document.createElement('p');

  p.innerText=employeeName.value;
  p1.innerText=employeePassword.value;

  div.appendChild(p);
  div.appendChild(p1);
});
const br=document.createElement('br');
const br1=document.createElement('br');

form.appendChild(label);
form.appendChild(employeeName);
form.appendChild(br);
form.appendChild(label2);
form.appendChild(employeePassword);
form.appendChild(br1);
form.appendChild(button);
document.body.appendChild(employeeform);
document.body.appendChild(form);
document.body.appendChild(div);


