// تعريف الدالة
function add(a, b) {
  return a + b;
}

// جلب الـ arguments وتحويلهم لرقم صحيح
const arg1 = parseInt(process.argv[2], 10);
const arg2 = parseInt(process.argv[3], 10);

// طباعة نتيجة الجمع
console.log(add(arg1, arg2));
