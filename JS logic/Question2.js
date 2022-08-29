/*
Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3]
*/

const arr=[1,2,3]
const a = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];


//2 nested loop method - less space consumed but more processing time
// drawback this will only find the closest pair

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

//dynamic programming using HashMap - less processing time but consume more space

// every iteration, program stores computed value at index n until it finds another computed value at index n to form a pair


function twoSum(array, sum) {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return results;
    }

twoSum(a,7)