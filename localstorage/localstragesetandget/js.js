const arr=["Mohit","Ankit","Sahil"];

localStorage.setItem("data",JSON.stringify(arr));

let data=JSON.parse(localStorage.getItem("data"));

console.log(data);