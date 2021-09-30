// JS-05 Conditions and Expressions
// https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions
// PLEASE open in Node.js https://replit.com/languages/javascript
// Exercise#3

{
    function numberRange(value) {
        if (0 <= value && value <= 25) {
            console.log(`${value} is between 0 and 25`)
        }
        if (26 <= value && value <= 100) {
            console.log(`${value} is between 26 and 100`)
        }
        if (value > 100) {
            console.log(`${value} is greater than 100`) 
        }
        if (value < 0) {
            console.log(`${value} is is less than 0`)
            }
    }
    numberRange(25);   // '25 is between 0 and 25'
    //numberRange(75);   // '75 is between 26 and 100'
    //numberRange(125);  // '125 is greater than 100'
    //numberRange(-25);  // '-25 is less than 0'
}
