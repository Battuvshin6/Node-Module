const a = 100;

function CtoF() {
  return (a * 9) / 5 + 32;
}

function FtoC() {
  return ((a - 32) * 5) / 9;
}
console.log(CtoF());
console.log(FtoC());
