console.log("Hello world");

//code
const p1=fetch("https://api.github.com/users");
//fullfill , reject
const p2=p1.then((res)=>{
   return res.json();
})

p2.then((res)=>{
  console.log(res);
})

console.log("Hello world end")