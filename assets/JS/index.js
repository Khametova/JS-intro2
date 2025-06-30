//alert("hello");
function isWorkingAgePersen(age) {
  if (age >= 16 && age <= 64) {
    return true;
  } else {
    return false;
  }
}
let age = 5;
const result = isWorkingAgePersen(age);
console.log(result);

function checkMultiplicity(a, b) {
  if (b === 0) {
    return false;
  }
  return a % b === 0;
}
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 4));
console.log(checkMultiplicity(15, 5));
