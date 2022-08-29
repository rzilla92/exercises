/*
Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

/*
    my thought process
    to solve the first input.
        1. Needs to be sorted
        2. group same numbers into an array
        3. return in a new array with the sub-arrays in sorted manner

    to solve input 2 and 3.
        1. needs to be sorted
        2. filter number and strings into temp arrays
        3. group same numbers into an array
        4. return in a new array with the temp string array and temp number array (including sub-arrays) in sorted manner
*/

const input1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
//bonus inputs
const input2 = [1, "2", "3", 2]
const input3 = [1, 2, "2", 4, 591, "10", "591", 392, 391, 2, 5, 10, 2, 1, "10",1, 1, "15", 20, 20];

function arraySort(arr) {
    // .sort to sort array into numerical order
    const sortArray= arr.sort((a, b) => {return a - b})

    // .filter to filter out numbers and strings
    const stringArray = arr.filter((value)=> {return typeof value==="string"})
    const numArray = arr.filter((value)=> {return typeof value==="number"})

    // .reduce to combine same number into an array, then merge back into the array
    // r = previousValue; v = currentValue; i = currentIndex ; a = array
    const groupNumArray= numArray.reduce((r, v, i, a) => {
        if (v === a[i - 1]) {
            r[r.length - 1].push(v);
        } else {
            r.push(v === a[i + 1] ? [v] : v);
        }
        return r;
    }, []);
    
    // nest string array and number array into one
    const sortedArray = [groupNumArray,stringArray]
    return sortedArray
}