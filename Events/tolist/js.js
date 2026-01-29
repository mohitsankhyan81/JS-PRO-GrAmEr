const title=document.createElement('h1');
title.innerText="Todo-List";

const input=document.createElement('input');
input.type="text";
input.textContent="Enter your task"

const button=document.createElement('button');
button.textContent="Add Task";

const ullist=document.createElement('ul');

button.addEventListener('click',(e)=>{
  if(input.value===""){
    return;
  }

  const lilist=document.createElement('li');
  const deletedata=document.createElement('button');
  lilist.innerText=input.value;
  input.value="";
  deletedata.textContent="delete";
  deletedata.addEventListener('click',()=>{
    lilist.remove();
  })

  ullist.appendChild(lilist);
  lilist.appendChild(deletedata);
  input.value="";
})

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ullist);
