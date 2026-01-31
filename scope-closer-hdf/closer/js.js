
function createcount(){
  function increment(){
    console.log("I am increment function");
    return 20;
  }
  return increment();
}
const count=createcount();
console.log(count);