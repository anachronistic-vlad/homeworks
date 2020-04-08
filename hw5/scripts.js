let a = Math.PI;
let b = +prompt("Введите радиус круга");
function sumAround(a, b) {
  return a * (b * b);
}

let c = sumAround(a, b);
console.log("Площадь круга = " + c);
