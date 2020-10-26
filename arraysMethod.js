const items = [{
        name: "Bike",
        price: 100
    },
    {
        name: "TV",
        price: 200
    },
    {
        name: "Album",
        price: 10
    },
    {
        name: "Book",
        price: 5
    },
    {
        name: "Phone",
        price: 500
    },
    {
        name: "Computer",
        price: 1000
    }
]

// ---------FILTER-----------

const filteredItem = items.filter((item) => {
    return item.price >= 100;
});

// console.log(filteredItem);

// ---------MAP-----------
const itemNames = items.map((item) => {
    return item.name;
})

// console.log(itemNames);

// ---------FIND-----------
const itemFind = items.find((item) => {
    return item.price === 1000;
})

// console.log(itemFind);


// ---------FOREACH-----------
items.forEach((item) => {
    // console.log(item.name);
})

// ---------SOME-----------
const hasInexpensiveItem = items.some((item) => {
    return item.price <=100;
})

// console.log(hasInexpensiveItem);

// ---------EVERY-----------
const hasSamePrice = items.every((item) => {
    return item.price >= 5;
})

// console.log(hasSamePrice);

// ---------REDUCE = ForLo0p-----------

let sum = 0;


for (let i = 0; i < items.length; i++){
    sum += items[i].price;
}

console.log(`The total using a forLoop is: ${sum}`);


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(`The total using a reduce method is: ${total}`);

const numbers = [1, 2, 3, 8, 4];

const includesTwo = numbers.includes(5);

console.log(includesTwo);

const str = 'EmmanuelF';

const includesB = str.includes('F');

console.log(includesB);