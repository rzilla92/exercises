/*
Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3]
*/

const arr=[1,2,3]
const a = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];


//2 nested loop method - less space consumed but more processing time
function arraypair(array,sum){
    for (i = 0;i < array.length;i++) {
        let first = array[i];
        for (j = i + 1;j < array.length;j++) {
            let second = array[j];

            if ((first + second) == sum) {
                return [first, second];
            }
        }

    }
}

arraypair(a,7);