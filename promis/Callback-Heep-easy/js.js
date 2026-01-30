

const orderDelail={
  orderId:123123,
  food:["pizza","biryani","coke"],
  cost:345,
  customerName:"Rohit",
  customerLocation:"lahol",
  restorantLocation:"delhi"
}

function placeorder(orderDelail){
  console.log(`${orderDelail.cost} payment is in progress`);
  return new Promise((resolve,rejct)=>{
    setTimeout(() => {
    console.log("Payment is recevied and order get placed")
    orderDelail.status=true;
    resolve(orderDelail);
  }, 3000);
  })
}

function preparingOrder(orderDelail){
  console.log(`food prepration is start of ${orderDelail.food}`);
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("food get ready");
    orderDelail.token=123;
    resolve(orderDelail);
  }, 3000);
  })
}

function picuporder(orderDelail){
  console.log(`on a way to pic up order  ${orderDelail.restorantLocation}`);
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("picked up the order");
    orderDelail.recived=true;
    resolve(orderDelail)
  }, 3000);
  })
}
function delivryorder(orderDelail){
  console.log(`i am on the way to deliver food ${orderDelail.customerLocation}`);
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    orderDelail.delivery=true
    console.log("Order deliver sucessfully");
    resolve(orderDelail)

  }, 3000);
  })

}

placeorder(orderDelail)
.then((orderDelail)=>preparingOrder(orderDelail))
.then((orderDelail)=>picuporder(orderDelail))
.then((orderDelail)=>delivryorder(orderDelail))
.then((order)=>{
  console.log(order)
})
.catch((error)=>{
  console.log(error);
})
