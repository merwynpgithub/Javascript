const myArr = [
    {name : 'Book', price : 25},
    {name : 'Comp', price : 500},
    {name : 'Cyle', price : 150},
    {name : 'Mattress', price : 600}
];

//Filter method: returns an array of items returned true with test condition
// let mySecondArr = myArr.filter(funky);

//some method: returnes true with test condition if some items fulfill it
// let mySecondArr = myArr.some(funky);

//every method: returnes true with test condition if all items fulfill it
// let mySecondArr = myArr.every(funky);

//Map method: Returns an array after performing a function on each item
let mySecondArr = myArr.map(funky);

function funky(element) {
    // return myArr.price > 250;
    return element.price * 5;
}
console.log(mySecondArr);

//forEach method: performs an action on every array
myArr.forEach(funky2);
function funky2(item) {
    console.log(item.price * 2);
    // return item.price * 3;
}

// console.log(myArr[1].price);


