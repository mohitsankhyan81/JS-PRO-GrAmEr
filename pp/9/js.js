const heading=document.createElement("h1");
heading.textContent="Stop Watch";

const p=document.createElement("h4");
p.textContent="00:00"

const button=document.createElement("button");
button.innerText="start";

const button1=document.createElement("button");
button1.innerText="stop";

const button2=document.createElement("button");
button2.innerText="pause";

document.body.appendChild(heading);
document.body.appendChild(p);
document.body.appendChild(button);
document.body.appendChild(button1);
document.body.appendChild(button2);

let second =0;
let interval=null;
function updatetime(){
    second++;
    let mins=Math.floor(second/60);
    let secs=second%60;

    if(mins<10) mins="0"+mins
    if(secs<10) secs="0"+secs
    p.textContent=`${mins}:${secs}`
}

button.addEventListener("click",()=>{
    if(interval==null){
        interval=setInterval(updatetime,1000)
    }
})

button2.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
})

button1.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
    second=0;
    p.textContent="00:00";
})