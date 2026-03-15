console.log('hello')
let div=document.querySelector("div")
let h2=document.querySelector("h2")
let count=0;
let button=document.createElement("button")
button.innerText="start"
let button1=document.createElement("button")
button1.innerText="stop"
let timer;
let stopFun=()=>{
    // button.innerText="restart";
    // timer=clearInterval(timer)
    clearInterval(timer)

}
let startFun=()=>{
    
    timer=setInterval(() => {
        count++
        h2.innerText=count;
    }, 1000);

}
button.addEventListener("click", startFun)
button1.addEventListener("click", stopFun)

div.append(button, button1)