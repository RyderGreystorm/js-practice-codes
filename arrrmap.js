let arr = [1, 2, 3, 4, 5]
let newArr = arr.map((items)   => items * 2)

// console.log(newArr )


const products = [
    {
        id: 1,
        name: 'Product A',
        price: 785,
        quantity: 4
    },
    {
        id: 2,
        name: 'Product B',
        price:254,
        quantity: 6
    },
    {
        id: 3,
        name: 'Product C',
        price: 987,
        quantity: 8
    }
];

const produtcID = products.map((product) => {
   return {id : product.id,
    name: product.name}
})
// console.log(produtcID)

const str = "Hello World";

const strArr = str.split("");
let sarr = [];

console.log(strArr)

strArr.forEach((word) => {
    if (sarr[word])
        sarr[word]++;
    else
        sarr[word] = 1;
})
// console.log(sarr)

// function solution(inputArray) {
//     let a = [];
//     const x = Math.max(...inputArray.map(value => value.length));
//     const final = inputArray.filter((value) => {
//         return value.length >= x;
//     })

//     return final;
// }
// function solution(inputArray) {
//     'use strict';
//     let maxSize = Math.max(...inputArray.map(x => x.length));
//     return inputArray.filter(x => x.length === maxSize);
// }

// console.log(solution["aba", "aa", "ad", "vcd", "aba"])

function solution(inputArray) {
    let a = [];
    for (let j = 0; j < inputArray.length - 1; j++){
        a[j] = inputArray[j] * inputArray[j + 1];
    }
    
    return Math.max(...a);
}

console.log(solution([3, 6, -2, -5, 7, 3]))