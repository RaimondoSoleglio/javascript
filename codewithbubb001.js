/* ex 01:
---------

Write a program to check two numbers and return true if one of the number
or their sum equals to 100

*/

function checkNumbers(a, b) {
    if (a === 100 || b === 100 || a + b === 100) {
        return true
    } else {
        return false
    }
}

// more compact solution
// const checkNums = (a, b) => a === 100 || b === 100 || (a + b) === 100

checkNumbers(55, 45);
checkNumbers(100, -4);
checkNumbers(0, 100);
checkNumbers(3, 6);


