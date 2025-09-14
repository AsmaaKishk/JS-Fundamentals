const arg = process.argv[2];           // أول argument بعد اسم الملف
const num = parseInt(arg, 10);         // تحويله لرقم صحيح

if (isNaN(num)) {
  console.log("Not a number");         // لو مش رقم
} else {
  console.log(`My number: ${num}`);    // لو رقم
}
