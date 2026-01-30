const title=document.createElement('h1');
title.innerText="Todo-List";

const input=document.createElement('input');
input.type="text";
input.textContent="Enter your task"

const button=document.createElement('button');
button.textContent="Add Task";

let todo=JSON.parse(localStorage.getItem("todo"))||[];
const ullist=document.createElement('ul');
button.addEventListener('click',(e)=>{
  if(input.value===""){
    return;
  }

  const lilist=document.createElement('li');
  const deletedata=document.createElement('button');
  const editbtn=document.createElement('button');
  const span=document.createElement('span');
  editbtn.textContent='Edit';
  span.innerText=input.value;
  todo.push(input.value);
  input.value="";
  deletedata.textContent="delete";
  localStorage.setItem("todo",JSON.stringify(todo));
  deletedata.addEventListener('click',()=>{
    lilist.remove();
  })

  editbtn.addEventListener('click',()=>{
    if(editbtn.textContent==='Edit'){
      const inputlist=document.createElement('input');
      inputlist.value=span.innerText;

      lilist.insertBefore(inputlist,span);
      lilist.removeChild(span);
      editbtn.textContent="save";
    }
    else{
      const inputlist=lilist.querySelector('input');
      span.innerText=inputlist.value;

      lilist.insertBefore(span,inputlist);
      lilist.removeChild(inputlist);

      editbtn.textContent="Edit"
    }
  })

  
  ullist.appendChild(lilist);
  lilist.appendChild(span);
  lilist.appendChild(deletedata);
  lilist.appendChild(editbtn);
  input.value="";
})

console.log(todo)

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ullist);
