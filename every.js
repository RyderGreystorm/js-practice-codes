const arr = [1, 2, 3, 4, 5, 6];

const isBool = arr.every((value) => {
    return value > 0;
})

console.log(isBool)