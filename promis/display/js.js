fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
  return res.json();
})
.then((res)=>{
  for(let i=0;i<res.length;i++){
  const div=document.createElement('div')
  const div1=document.createElement('div');
  const div2=document.createElement('div');
  const div3=document.createElement('div');
  const div4=document.createElement('div');

  div1.textContent=res[i].title;
  div2.textContent=res[i].id;
  div3.textContent=res[i].userId;
  div4.textContent=res[i].body;

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);

  document.body.appendChild(div)

  }
  console.log(res)
})
.catch((error)=>{
  console.log(error)
})

