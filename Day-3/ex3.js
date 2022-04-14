const array = [1, 2, 3, 4, 5];
const newarr = array.map(myFunction);
function myFunction(value) {
  return value + 2;
}
console.log(newarr);
