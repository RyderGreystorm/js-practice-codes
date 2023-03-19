const factorial = (n) => {
    let i,   sum = 1;

    for (i = 1; i <= n; i++)
        sum*= i;
    return sum;
}


console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));


