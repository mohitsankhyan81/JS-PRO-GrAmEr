const button=document.createElement('button');
button.textContent="click me"

button.setAttribute('class','decode');

let currmode="light";
button.addEventListener('click',()=>{
  if(currmode==="light"){
    currmode="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    currmode="light";
    document.querySelector("body").style.backgroundColor="white";
  }
})
document.body.appendChild(button);