let arr=[11,2,3,4,5,6,7,8,9,10];
let sum=0;
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
    sum+=arr[i];
}
console.log(sum);

const oddnumber=arr.filter((e,i,arr)=>{
    if(arr[i]%2!=0){
        return arr[i]
    }
})

console.log(oddnumber);

const evennumber=arr.filter((e,i,arr)=>{
    if(arr[i]%2==0){
        return arr[i];
    }
})

console.log(evennumber);

let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);

let min=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min);

for(let i=arr.length;i>=0;i--){
    console.log(arr[i]);
}