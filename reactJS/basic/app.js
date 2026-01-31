//create a h1 element using js


function createdata(tag,attributes,children){
  const element=document.createElement(tag);
  element.textContent=children;
  for(const key in attributes){
    element[key]=attributes[key];
  }
  return element;
  
}
const element=createdata("h1",{className:"element",id:"first"},"Heloo Coder Army");
const element1=createdata("h3",{className:"element",id:"second"},"This is the second element1");
// const element= document.createElement('h1');
// element.textContent="Heloo Coders";
// element.className='element',
// element.id='first'
// element.style.fontSize="100px"
// element.style.color="green";
// element.style.backgroundColor="orange"
// const element1=document.createElement('h3');
// element1.textContent="Study hard to gain sucess";
// element1.id='second'
// element1.style.fontSize="50px"
// element1.style.backgroundColor="pink"
// element1.style.color='red';

const root=document.getElementById('root');
root.append(element);
root.append(element1)

