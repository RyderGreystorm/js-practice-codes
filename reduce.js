const arr = [1, 2, 3, 4, 5, 6]

const result = arr.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
}, 0);

// console.log(result)

const products = [
    {
        name: 'Product A',
        price: 100,
    },
    {
        name: 'Product B',
        price: 150,
    },
    {
        name: 'Product C',
        price: 200,
    }
]

const total = products.reduce((totalPrice, product) => {
    return totalPrice + product.price
}, 0)

console.log(total);