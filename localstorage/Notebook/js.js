const h1=document.createElement('h1');
h1.textContent="My NoteBook";

const textarea=document.createElement('textarea');
textarea.innerText="Enter your Content Here";
textarea.style.width='1200px';
textarea.style.height='500px';

const br=document.createElement('br');

const savebtn=document.createElement('button');
savebtn.innerText="Save"
const delbtn=document.createElement('button');
delbtn.innerText="delete"

const saveNote=document.createElement('p');

const note=localStorage.getItem("note")||[];

if(note){
  saveNote.innerText=note;
  textarea.value=note;
}

savebtn.addEventListener('click',()=>{
  localStorage.setItem("note",textarea.value);
  saveNote.innerText=textarea.value;
});

delbtn.addEventListener('click',()=>{
  localStorage.removeItem("note");
  saveNote.innerText="";
  textarea.value="";
})

document.body.appendChild(h1);
document.body.appendChild(textarea);
document.body.appendChild(br);
document.body.appendChild(savebtn);
document.body.appendChild(delbtn);
document.body.appendChild(saveNote);