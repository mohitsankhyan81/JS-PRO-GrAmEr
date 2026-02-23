const data=[
    {name:"Mohit",age:17,marks:[1,2,3,4,5],address:{country:"india",city:"Delhi",state:"Delhi",pincode:342334}},
    {name:"Sahil",age:45,marks:[5,4,3,2,1],address:{country:"india",city:"Haryana",state:"Haryana",pincode:174027}},
]

function datais(){
    let totalmarks=0;
    data.forEach((element) => {
        for(let i=0;i<element.marks.length;i++){
            totalmarks+=element.marks[i];
        }
    });
    console.log(totalmarks);
}

datais();

