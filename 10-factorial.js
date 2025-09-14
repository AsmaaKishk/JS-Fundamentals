// دالة لحساب الفاكتوريال بشكل recursive
function factorial(n) {
  if (n <= 1) return 1; // قاعدة النهاية
  return n * factorial(n - 1);
}

// جلب الـ argument وتحويله لرقم صحيح
const arg = parseInt(process.argv[2], 10);

// إذا مش رقم، نعتبره 1
const num = isNaN(arg) ? 1 : arg;

// طباعة النتيجة
console.log(factorial(num));
