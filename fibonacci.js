const fibonacci = (n) => {
    const fibo = [0, 1];
    for (i = 2; i < n; i++)
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    return fibo;
}


console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
