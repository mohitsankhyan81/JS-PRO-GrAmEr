let obj1={
  name:"Mohit Sankhyan",
  age:45,
  education:true
};

localStorage.setItem(("data"),JSON.stringify(obj1));

const datais=JSON.parse(localStorage.getItem("data"));
console.log(datais)