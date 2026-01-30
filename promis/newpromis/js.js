const p1=new Promise((resolve,reject)=>{
  resolve("Hello");
})

p1.then((res)=>{
  console.log(res);
})
.catch((error)=>{
  console.log(error);
})