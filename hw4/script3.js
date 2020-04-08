let a = +prompt("укажите число от 1 до 9", 5);
let str = "";
for (let i = 0; i < a; i++) {
  if (i < a) {
    str += "*";
  }
  console.log(str);
}
