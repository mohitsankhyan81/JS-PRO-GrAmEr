const students = [
   { name: "Rahul", marks: [80, 70, 90] },
   { name: "Aman", marks: [40, 35, 50] },
   { name: "Sneha", marks: [] },
   { name: "Priya", marks: [100] },
   { name: "Vikas" }
];

function getTopStudents(){
    const stud=students.reduce((total,item)=>{
        const marks=students.marks || 0;
        if(!marks){
            total=0;
        }
        return total>200;
    },0)
    return stud;
}

const data=getTopStudents();
console.log(data);