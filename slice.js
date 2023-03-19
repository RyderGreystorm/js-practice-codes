let arr = ["Mango", "Apple", "Banana", "Orange", "Lemon"];

const newArr = arr.slice(1, 4);
console.log(newArr);

const produts = [
    {
        name: "Product A",
        price: 25
    },
    {
        name: "Product B",
        price: 50
    }
];

const newProduct = produts.slice(0, 1)
newProduct[0].price = 524
console.log(newProduct)
