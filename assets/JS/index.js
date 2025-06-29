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
