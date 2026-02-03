const orders = [
 {
  orderId: "O1",
  customer: "Amit",
  items: [
   { productName: "Laptop", price: 60000, quantity: 1 },
   { productName: "Mouse", price: 1000, quantity: 2 }
  ]
 },
 {
  orderId: "O2",
  customer: "Priya",
  items: [
   { productName: "Phone", price: 30000, quantity: 1 },
   { productName: "Headphones", price: 2000, quantity: 1 }
  ]
 },
 {
  orderId: "O3",
  customer: "Amit",
  items: [
   { productName: "Keyboard", price: 3000, quantity: 1 }
  ]
 }
];


let totalrevencue=0;
orders.forEach((e,i,arr)=>{
  if(e.orderId==="O2"){
    e.items.forEach((element,index,array)=>{
      totalrevencue+=element.price*element.quantity;
    })
  }
})

console.log(totalrevencue);
let max=0;
orders.forEach((e,i,arr)=>{
  e.items.forEach((element,index,array)=>{
    const total=element.price*element.quantity;
    if(total>max){
      max=total;
    }
  })
})
console.log(max);