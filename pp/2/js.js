const products = [
   { name: 'Pen', categories: ['stationery', 'writing'] },
   { name: 'Laptop', categories: ['electronics', 'computers'] },
   { name: 'Chair', categories: [] },
   { name: 'Water Bottle', categories: ['kitchen', 'storage'] }
];

function productsdata(){
    const newarray= products.map(products=>{
        if(products.categories.length===0){
            return `${products.name}: No Categories`
        }
        else{
            return `${products.name} : ${products.categories[0]} : ${products.categories[1]})`
        }
    })
    return newarray;
}

const result=productsdata();
console.log(result)