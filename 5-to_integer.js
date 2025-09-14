
}
const myArg = process.argv[2];       // أول argument
const number = parseInt(myArg, 10);  // تحويله لرقم صحيح

if (isNaN(number)) {
    console.log("Not a number");     // لو مش رقم
} else {
    console.log(`My number: ${number}`);  // لو رقم
}
