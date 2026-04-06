const App = () => {
  // type CarYear=number
  // type CarType=string
  // type CarModel=string
  // type Car={
  //   year:CarYear,
  //   type:CarType,
  //   model:CarModel
  // }

  // const carYear:CarYear=2001
  // const carType:CarType="Toyota"
  // const carModel:CarModel="Maruti"
  // const car:Car={
  //   year:carYear,
  //   type:carType,
  //   model:carModel
  // }
  // console.log(car);

  // interface user{
  //   name:string,
  //   age:number
  // }
  // interface hello extends user{
  //   color:string
  // }

  // function data(he:hello){
  //   return `name: ${he.name} || age: ${he.age} || color: ${he.color}`;
  // }

  // console.log(data({name:"mohit",age:34,color:"red"}) )

  interface User{
    name:string,
    age:number,
    role:string,
    id:number,
    email:string
  }

  function UserData(user:User){
    return `username: ${user.name} || age: ${user.age} || role: ${user.role} || userid: ${user.id} || email: ${user.email}`
  }

  console.log(UserData({name:"Mohit",age:34,role:"Admin",id:453,email:"mohit@gamil.com"}))
  return (
    <div>
      Hello
    </div>
  )
}

export default App
