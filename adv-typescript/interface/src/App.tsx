const App = () => {
  //explicit interface
  // const greeting:string="hello, Typescript"
  // console.log(greeting)

  // const usercount:number=43;
  // console.log(usercount);

  // const isavilable:boolean=true
  // console.log(isavilable);

  // const score:number[]=[43,45,56];
  // score.push(21);
  // console.log(score);

  // emplicit type
  // function greet(name:string):string{
  //   return `Hello ${name}`
  // }

  // console.log(greet("hello"));
  // console.log(greet(34));

  //type interface
  // let username="alice"
  // let socre=100;
  // let flags=[true,false,true];
  // function add(a:number,b:number){
  //   return a+b;
  // }
  // console.log(add(3,4));

  //object litrel interface
  // const user={
  //   name:"Alice",
  //   age:23,
  //   isAdmin:true
  // };

  // console.log(user.name);

  //type safety in action

  //Explicit type Mismatch
  // let username:string='Mohit';
  // username=34;
  // console.log(username)

  //implicit type mismatch
  // let score=100;
  // score="high"//automaticly detact
  // console.log(score);

  

  return (
    <div>
      Hello
    </div>
  )
}

export default App
