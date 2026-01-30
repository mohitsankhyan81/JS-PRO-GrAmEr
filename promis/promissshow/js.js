const div=document.createElement('div');
div.setAttribute('class','decode');
document.body.appendChild(div);
const p1=fetch("https://api.github.com/users")
.then((response)=>{
  return response.json();
})
.then((response)=>{
  for(let i=0;i<response.length;i++){
  const image=document.createElement('img');
  image.style.height="120px";
  image.style.width="120px";

  image.src=response[i].avatar_url;
  div.appendChild(image);
  }
})

