const employees = [
   { name: 'John', salary: { basic: 20000, bonus: 5000 } },
   { name: 'Alice', salary: { basic: 25000 } }, // No bonus field
   { name: 'Bob' }, // No salary field
   { name: 'Carol', salary: { basic: 30000, bonus: 10000 } }
];

function getEmployeeSalary(employeeName){
    const employee=employees.find(emp=>emp.name===employeeName)
    if(!employee.salary){
        console.log(`Salary details not avilable for ${employee}`)
    }

    if(!employee){
        console.log(`employee ${employee} not found`);
    }

    const bonus=employee.salary.bonus || 0;
    const basic=employee.salary.basic || 0;

    console.log(basic+bonus);
}

getEmployeeSalary("Carol")