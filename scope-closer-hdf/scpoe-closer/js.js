//scope and closer, HDF

//global scope
let a=10;
let b=20;
if(true){
  let d=34; //block socpe
  console.log(b);
}
function greed(){
  let c=34;//function scope

  console.log(a);
}

greed();