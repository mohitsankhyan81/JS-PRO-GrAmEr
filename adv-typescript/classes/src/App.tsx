const App = () => {
  // class PersonData{
  //     name:string;

  //     constructor(name:string){
  //       this.name=name
  //     }
  // }
  // const person=new PersonData("Mohit");
  // console.log(person.name);

  // class person{
  //   private name:string;

  //   public constructor(name:string){
  //     this.name=name;
  //   }

  //   public getName(){
  //     return this.name;
  //   }
  // }

  // const persondata=new person("Mohit");
  // console.log(persondata.getName())

  //perimiter property

  // class data{
  //   public constructor(private name:string){
  //     this.name=name;
  //   }

  //   public getName():string{
  //     return this.name;
  //   }
  // }

  // const userdata=new data("Mohit");
  // console.log(userdata);


  // class person{
  //   private readonly name:string;


  //   public constructor(name:string){
  //     this.name=name;
  //   }

  //   public getName():string{
  //     return this.name;
  //   }
  // }

  // const newdata=new person("Hello");
  // console.log(newdata);


  //inheritence + interface

  // interface Shape{
  //   getUser:()=>number
  // }
  // class user implements Shape{
  //   public constructor(protected readonly width:number,protected readonly height:number){
  //     this.width=width;
  //     this.height=height;
  //   }

  //   public getUser():number{
  //     return this.height*this.width;
  //   }
  // }

  // const userData=new user(3,4);
  // console.log(userData.getUser());
  // console.log(userData);

  //inheritance

  // class data{
  //   public constructor(public name:string){
  //     this.name=name;
  //   }
  // }

  // class person extends data{
  //   public constructor(public name:string,public age:number){
  //     super(name)
  //     this.age=age
  //   }
  //   public getResult():void{
  //     console.log("Name: ",this.name," Age: ",this.age);
  //   }
  // }

  // const persondata=new person("mohit Sankhyan",45);
  // persondata.getResult();
  return (
    <div>
      Hello
    </div>
  )
}

export default App
