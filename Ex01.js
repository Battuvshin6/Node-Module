let date = new Date();
date.getDate();
let index = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log("Today is : " + days[index - 2]);
console.log("Current time is : " + hour + " PM :" + minutes + ":" + seconds);
