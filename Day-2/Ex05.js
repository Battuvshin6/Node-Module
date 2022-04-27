function ex5(x, y) {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(ex5(5, 10));
console.log(ex5(100, 1000));
