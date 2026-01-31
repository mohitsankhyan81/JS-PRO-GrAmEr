//learn about this
//this keyword is global spcope : NodeJs( empty obect ) but in the browser this point out the window 

// console.log(this);

const user={
  name:"Rohit",
  age:30,
  greed:function(){
    console.log(this)
    console.log(`h1 ${this.name}`);
  }
}

user.greed();