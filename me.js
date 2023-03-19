// let a = 10


// const outer = () => {
//     let b = 20;
//     const inner = () => {
//         let c = 30;
//         console.log(a, b, c);
//     }
//     inner();
// }
// outer();



// const outer = () => {
//     let counter = 0;

//     const inner = () => {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }
// let fn = outer()

// fn()
// fn()


const sum = (a, b, c) => {
    return a + b + c;
}

const curry = (fn) => {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

mySum = curry(sum)
//  console.log(mySum(2)(3)(5))

//  const add = mySum(2);
//  const add1 = add(3);
//  const add2 = add1(5);


//  console.log(add2)






