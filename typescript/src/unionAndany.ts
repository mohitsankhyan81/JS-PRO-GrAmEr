let sub:number | string ="1M";
let apiRequest:'pending'|'success'|'error'='pending'

apiRequest="pending"

let airlineseet:'start'|'mid'|'end'='start'

airlineseet="start"

const order=['12','20','28','42']
let currtorder:string|undefined;
for(let o of order){
    if(o==='28'){
        currtorder=o;
        break;
    }
}
console.log(currtorder);