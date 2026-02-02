//setinterval 
// setInterval(() => {
//   console.log("hello world");
// }, 1000);

//count from 1 to infinite
// let count=1;
// const id=setInterval(() => {
//   console.log(count);
//   count++;
// },1000);

// stop setinterval using clearInterval
// let count=1;
// const id=setInterval(() => {
//   console.log(count);
//   count++;
//   if(count===6){
//     clearInterval(id);
//   }
// }, 1000);


//user otp bhejne ke baat turant Resent otp click na kare uske liye 30 second ka timer

// let time=30;
// const id=setInterval(()=>{
//   console.log(`Resend in ${time}s`);
//   time--;
//   if(time<0){
//     clearInterval(id);
//   }
// },1000)

// let arr=[45,67,89,90,55];

// arr.forEach((e,i,arr)=>{
//   e+=5;
//   console.log(e);
// });

// const data=arr.filter((e,i,arr)=>{
//   if(e>60){
//     return e;
//   }
// })

// console.log(data);


let arr=[200,450,120,800];

const data=arr.map((e,i,arr)=>{
  e=e+e*0.18;
  console.log(e);
  return e;
})


let total_bill=0;
data.forEach((e,i,arr)=>{
  total_bill+=e;
})

console.log(total_bill);



// data.forEach((e,i,arr)=>{
//   total_bill+=e;
// });

// console.log(total_bill)


