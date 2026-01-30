let obj1=["Mohit","Robin","Ankit"]

localStorage.setItem(("data"),JSON.stringify(obj1));

const datais=JSON.parse(localStorage.getItem("data"));
console.log(datais)