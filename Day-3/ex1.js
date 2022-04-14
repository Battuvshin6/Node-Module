function max(a, b, c) {
  a = 5;
  b = 6;
  c = 7;
  if (a && b < c) {
    return c;
  } else {
    if (a < b) {
      return b;
    } else {
      return a;
    }
  }
}
console.log(max());
function max2(a, b, c) {
  a = 30;
  b = 20;
  c = 10;
  if (a && b < c) {
    return c;
  } else {
    if (a < b) {
      return b;
    } else {
      return a;
    }
  }
}
console.log(max2());
function max3(a, b, c) {
  a = -10;
  b = -30;
  c = -1;
  if (a && b < c) {
    return c;
  } else {
    if (a < b) {
      return b;
    } else {
      return a;
    }
  }
}
console.log(max3());
