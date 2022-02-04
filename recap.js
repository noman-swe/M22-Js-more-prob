function largestElement(numbers){
    let max = numbers[i]; //

    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
        return max;
    }
}

const largest = largestElement([1, 42, 45, 12, 54]);
console.log(largest);

//min
function smallestElement(numbers){
    let min = numbers[i]; //

    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min){
            min = element;
        }
        return min;
    }
}

const smallest = smallestElement([45, 54, 652, 51, 10]);
console.log(smallest);