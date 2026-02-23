const orders = [
   { id: 1, items: [{ name: 'Pen', price: 10, quantity: 2 }, { name: 'Notebook', price: 50 }] },
   { id: 2, items: [{ name: 'Bag', price: 700, quantity: 1 }, { name: 'Bottle', price: 300, quantity: 2 }] },
   { id: 3, items: [{ name: 'Chair', price: 1500 }] },
   { id: 4, items: [] },
   { id: 5, items: [{ name: 'Lamp', quantity: 3 }] }
];

function getHighValueOrder(){
    return orders.filter((order)=>{
        const total=order.items.reduce((sum,item)=>{
            const price=item.price ||0;
            const quantity=item.quantity || 1;
            return sum+(price*quantity);
        },0)
            return total>1000;
    })

}


console.log(getHighValueOrder());