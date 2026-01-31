//function decleraition fully hoisting

// hello();
// function hello(){
//   console.log("Hello Coders");
// }


//function expreesing (not hoisting)
hi(); // ❌ TypeError
var hi = function () {
  console.log("Hi");
};
