const App = () => {
  //jo kuch number return kare ga
  // function gettime():number{
  //   return new Date().getTime();
  // }
  // console.log(gettime());

  //jo return nahi kare ga functioon ke andar hi console kar dega
  // function print(name:string):void{
  //   console.log(`Hello ${name}`);
  // }
  // print("Mohit");

  //fucntion varialble declaration
  // function mult(a:number,b:number):number{
  //   return a*b;
  // }
  // console.log(mult(2,3));

  //optional perameter
  function data(name:string,age:number,dept?:string){
    return `name: ${name} || age: ${age} || dept: ${dept? dept:""}`
  }
  console.log(data("mohit",34));
  return (
    <div>
      hello
    </div>
  )
}

export default App
