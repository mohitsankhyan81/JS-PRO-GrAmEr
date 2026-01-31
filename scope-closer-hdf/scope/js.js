//scope

let global=40;

function greed(){
  let global=10;
  function meet(){
    let global=35;
    console.log(global);
  }
  meet();
}

greed();