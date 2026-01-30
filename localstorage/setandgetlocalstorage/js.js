
const datas={
  name:"Sahil",
  age:45,
  value:true
};

localStorage.setItem("data",JSON.stringify(datas));

const data=JSON.parse(localStorage.getItem("data"))||[];


console.log(data);