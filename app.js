let todayDate = new Date();
let newDate = new Date("Feb 17,2026");

let diff = newDate.getTime() - todayDate.getTime();

let day = Math.round(diff / (1000 * 60 * 60 * 24));
let week = Math.round(day / 7);
let month = Math.round(day / 30);

console.log(day);
console.log(week);
console.log(month);
