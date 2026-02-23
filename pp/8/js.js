const hedding=document.createElement("h1");
hedding.textContent="Hello world";

const p=document.createElement("h1");
p.textContent="0";

const button=document.createElement("button");
button.innerText="increment";

button.addEventListener("click",()=>{
    p.innerText++;
})

const button1=document.createElement("button");
button1.innerText="decrement"

button1.addEventListener('click',()=>{
    p.innerText--;
})

const button2=document.createElement("button");
button2.innerText="reset";

button2.addEventListener('click',()=>{
    p.innerText=0;
})
document.body.appendChild(hedding);
document.body.appendChild(p)
document.body.appendChild(button);
document.body.appendChild(button1);
document.body.appendChild(button2);