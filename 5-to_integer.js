
}
const myArg = process.argv[2];       // أول argument
const number = parseInt(myArg, 10);  // تحويله لرقم صحيح

if (isNaN(number)) {
    console.log("Not a number");     // لو مش رقم
} else {
    console.log(`My number: ${number}`);  // لو رقم
}

node 5-to_integer.js
# Not a number

node 5-to_integer.js 89
# My number: 89

node 5-to_integer.js "89"
# My number: 89

node 5-to_integer.js 89.89
# My number: 89

node 5-to_integer.js School
# Not a number

