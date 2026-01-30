

const orderDelail={
  orderId:123123,
  food:["pizza","biryani","coke"],
  cost:345,
  customerName:"Rohit",
  customerLocation:"lahol",
  restorantLocation:"delhi"
}

function placeorder(orderDelail,callback){
  console.log(`${orderDelail.cost} payment is in progress`);
  setTimeout(() => {
    console.log("Payment is recevied and order get placed")
    orderDelail.status=true;
    callback(orderDelail);
  }, 3000);
}

function preparingOrder(orderDelail,callback){
  console.log(`food prepration is start of ${orderDelail.food}`);
  setTimeout(() => {
    console.log("food get ready");
    orderDelail.token=123;
    callback(orderDelail);
  }, 3000);
}

function picuporder(orderDelail,callback){
  console.log(`on a way to pic up order  ${orderDelail.restorantLocation}`);
  setTimeout(() => {
    console.log("picked up the order");
    orderDelail.recived=true;
    callback(orderDelail);
  }, 3000);
}
function delivryorder(orderDelail){
  console.log(`i am on the way to deliver food ${orderDelail.customerLocation}`);
  setTimeout(() => {
    orderDelail.delivery=true
    console.log("Order deliver sucessfully");
  }, 3000);
}
placeorder(orderDelail,(orderDelail)=>{
  preparingOrder(orderDelail,(orderDelail)=>{
    picuporder(orderDelail,(orderDelail)=>{
      delivryorder(orderDelail);
    });
  })
});