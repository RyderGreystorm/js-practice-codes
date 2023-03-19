const searchArr = (arr, t) => {

    let i;
    for (i = 0; i < arr.length; i++){
        if (arr[i] === t)
            return i;
    }
    return -1;
   
}


const binarySearch = (arr, t) =>{
    let left = 0;
    let right = arr.length - 1;

    while(left <= right)
    {
        let middle = Math.floor((left + right) / 2);

        if (t === arr[middle])
            return middle;
        if (t < arr[middle])
            right = middle - 1;
        else
            left = middle + 1;
    }
    return (-1);
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
