const data=document.createElement("h1");
data.textContent="LocalStorage"

const form=document.createElement("form");
const label=document.createElement("label");
label.textContent="Enter name : ";
const input1=document.createElement("input");
input1.placeholder="Enter name";


const label1=document.createElement("label");
label1.textContent="Enter phone: "
const input2=document.createElement("input");
input2.placeholder="Enter phone"

const button=document.createElement("button");
button.innerText="Submit";
button.type="submit";

const systemdata=JSON.parse(localStorage.getItem("system"))||[];
console.log(systemdata)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user={
        name:input1.value,
        number:input2.value,
    }
    systemdata.push(user)
    console.log(user)
    localStorage.setItem("system",JSON.stringify(systemdata))
    input1.value="";
input2.value="";
})
document.body.appendChild(data);
document.body.appendChild(form)
form.appendChild(label);
form.appendChild(input1)
form.appendChild(label1)
form.appendChild(input2)
form.appendChild(button)