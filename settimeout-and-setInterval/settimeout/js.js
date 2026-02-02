// const time=setTimeout(() => {
//   console.log("Hello my goodness")
// }, 5000);
// console.log(time);
// clearInterval(time);


const time=setTimeout(() => {
  a()
}, 4000);

function a(){
  console.log("Hello world");
}

clearInterval(time);