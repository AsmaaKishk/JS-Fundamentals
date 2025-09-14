

// const x = "C is fun"
// if(x !== is(NAN)){
//   console.log("Missing number of occurrences")
// }

const arg = process.argv[2];
const x = parseInt(arg, 10);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
