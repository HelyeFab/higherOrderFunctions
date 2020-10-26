const numbers = [1, 2, 3, 8, 4]

let sum = 0;
for (let n of numbers)
    sum += n;

console.log(sum);


const str = 'Hello';

for (let letter of str)
    console.log(letter);


for (let i = 0; i < str.length; i++){
    console.log(`TL: ${str[i]}`);
}


const total = numbers.reduce((cur, i) => {
    return i + cur;
},0)

console.log(total);
