// function getchai(kind:any){
//     if(typeof kind==='string'){
//         return `making ${kind} chai...`;
//     }
//     return `chai order : ${kind}`
// }

// console.log(getchai("mohit"));


// function cheakStringorNOt(msg?:string){
//     if(msg){
//         return `string`;
//     }
//     return `not string at all`;
// }

// console.log(cheakStringorNOt("data"));

// function orderchai(chai:"small"|"medium"|"large"|number){
//     if(chai==="small"){
//         return `small cup of tea`
//     }
//     else if(chai==="medium" ||chai==="large"){
//         return `medium or moderate up of tea`
//     }
//     return `no of tea ${chai}`
// }

// console.log(orderchai(67))

// class kulladChai{
//     serve(){
//         return 'serving kullad Chai'
//     }
// }

// class CuttingChai{
//     serve(){
//         return 'serving cutting chai'
//     }
// }

// function serve(chai:kulladChai | CuttingChai){
//         return chai.serve();
// }
// console.log(serve(new CuttingChai()))

// type chaitype={
//     type:string,
//     sugar:number
// }

// function ischaiorder(obj:any):obj is chaitype{
//     return (
//         typeof obj==='object' &&
//         obj !==null &&
//         typeof obj.type=="string" &&
//         typeof obj.type=="number"
//     )
// }

// function serveOrder(item:chaitype|string){
//     if(ischaiorder(item)){
//         return `serving ${item.type} sugar ${item.sugar}`
//     }
//     return `serving costion chai ${item}`;
// }

// console.log(serveOrder("chatpata"))
// console.log(serveOrder({type:"masala",sugar:35}))

//food deilvry app

class VegFood{
    serve(){
        return "Serving Veg Food";
    }
}

class NonVegFood{
    serve(){
        return "Serving not Veg Food"
    }
}

function serveFood(food:VegFood|NonVegFood){
    return food.serve();
}

console.log(serveFood(new VegFood()));

type Order={
    item:string,
    quantity:number
}

function isOrder(obj:any):obj is Order{
    return (
        typeof obj==='object' &&
        obj!==null &&
        typeof obj.item==="string" &&
        typeof obj.quantity ==="number"
    )
}

function processOrder(order:Order | string){
    if(isOrder(order)){
        return `${order.item}*${order.quantity}`
    }
    return `constom text`
}
console.log(processOrder({item:"Data",quantity:34}));