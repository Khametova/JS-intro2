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

function isDelta(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(isDelta(4, 5, 8));
console.log(isDelta(2, 2, 4));

function isTriangleS(a, b) {
  const s = (1 / 2) * a * b;
  return s;
}
console.log(2, 3);
