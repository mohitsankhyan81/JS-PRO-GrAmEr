const click=document.getElementById("click")

click.addEventListener('click',(eve)=>{
  console.log("Button one was clicked");
  console.log(eve);
  console.log(eve.target);
  console.log(eve.type);
})