const App = () => {

  //any
  // let u=true; Boolean asigned
  // u="string" string type change
  // Math.round(u); argument type is bool

  // let v:any=true;
  // v="string";
  // Math.round(v);
  // console.log(v);

  //unknown type

  // let w:unknown=1;
  // w="string"
  // console.log(w);

  //never type that never return
  // function throwError(message:string):never{
  //   throw new Error(message);
  // }
  // throwError(true);


  //Optional Perameters and Propertie
  //Optional Perameters (implicitly `string | undefined)
  // function greet(name?:string){
  //   return `Hello, ${name || 'stranger'}`;
  // }

  // console.log(greet("Mohit"));
  
  //Optional Property in an interface
  // interface User{
  //   name:string;
  //   age?:number; //same as 'number | undefined
  // }

  // function greet(user:User){
  //   return `Name ${user.name} , Age: ${user.age}`
  // }
  // console.log(greet({name:"mohit",age:34}));

  interface User{
    name:string,
    age:number,
    class:string,
    message:string
  }
  
  function userdata(user:User){
    return `Name ${user.name} || age ${user.age} || class ${user.class} || message: ${user.message}`
  }

  console.log(userdata({name:"mohit",age:34,class:"BCA",message:"Hello students"}));
  return (
    <div>
      Hello
    </div>
  )
}

export default App
