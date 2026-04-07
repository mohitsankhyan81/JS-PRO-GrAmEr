const App = () => {

  //fucntion accoreatly repersent the return type of the value

  // function hello<T,S>(V1:T,V2:S):[T,S]{
  //   return [V1 ,V2];
  // }
  // console.log(hello<number,string>(44,"mohit"))

  // class data<T>{
  //   public value:T;

  //   public constructor(public name:string){
  //     this.name=name;
  //   }

  //   public getName():number{
  //     return this.name;
  //   }

  //   public setvalue(value:T):number{
  //     this.value=value;
  //   }

  //   public getValue():number{
  //     return this.value;
  //   }
  //   public getdata():void{
  //     console.log("hello ",this.getName()," value ",this.getValue())
  //   }
  // }

  // const value=new data("mohit");
  // value.setvalue<number>(45);
  // value.getdata();

  // value.setvalue<string>("hello sir");
  // value.getdata();

  //type Alises
  //make reuseble

  // type wrapped<T>={value:T};
  // const wrappedvalue:wrapped<number>={value:33};
  // console.log(wrappedvalue)

  // type wrapped<T>={value:T};
  // const wrappedvalue:wrapped<string>={value:"mohit"};
  // console.log(wrappedvalue);

  //extends or limitate the generics
  function data<T extends string|number,S extends string|number>(V1:T,V2:S){
    console.log(`v1:${V1} && v2:${V2}`);
  }

  data<string,number>("Mohit",45);
  return (
    <div>
      Hello
    </div>
  )
}

export default App
