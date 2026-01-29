const click=document.getElementById("click");

let clickdata=(e)=>{
  console.log("Data is added");
  console.log(e);
}

click.addEventListener('click',clickdata);

click.removeEventListener('click',clickdata);