let user = JSON.parse(localStorage.getItem("user"))||[];

// if(!Array.isArray(user)){
//     user = [];
// }

const data=document.createElement('h1');
data.textContent="App is";

const form=document.createElement('form');

const input=document.createElement('input');
input.type="text";

const input1=document.createElement('input');
input1.type="password";
input1.placeholder="password is";

const button=document.createElement('button');
button.innerText="Click";
button.type="button";

button.addEventListener('click',()=>{
    const obj1={
        name:input.value,
        password:input1.value
    };

    user.push(obj1);
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
});

form.appendChild(input);
form.appendChild(input1);
form.appendChild(button);
document.body.appendChild(form);
document.body.appendChild(data);
