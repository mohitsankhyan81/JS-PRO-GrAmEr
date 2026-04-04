const App = () => {
  //type scipt ke tuples me ham diffrent type ke data dal sakte hai jaise bool,string,number
  //or array me ek hi data type ke element hote hai or size bhi fix hota hai

  // let outertuple:[number,boolean,string];

  // outertuple=[5,true,"My name is mohit sankhyan"];
  // console.log(outertuple);

  //wrong order
  // let outertuple:[number,string,boolean];
  // outertuple=[true,"Mohit",2];//false order gives error
  // console.log(outertuple);

  //readonly touple
  // let orderToupel:[number,string,boolean];
  // orderToupel=[3,"hello",true];
  // orderToupel.push("Hello robin"); addjush ho jata hai kunki koi bhi type fix nahi hai danmicly age ko push ho jaye ga end me
  // console.log(orderToupel);

  //readonly practice
  // let orderToupel:readonly [number,string,boolean]=[5,"Hello sir ji",true];
  // console.log(orderToupel);

  //Named Tuples
  // const graph:[x:number,y:number]=[34.3,45.2];
  // console.log(graph);
  return (
    <div>
      Hello
    </div>
  )
}

export default App
