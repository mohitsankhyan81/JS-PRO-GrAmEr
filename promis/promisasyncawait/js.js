const data=async()=>{
  try{
    let pera=await fetch("https://jsonplaceholder.typicode.com/posts");
    let result=await pera.json();
    console.log(result);
  }
  catch(error){
    console.log(error);
  }
}

data();