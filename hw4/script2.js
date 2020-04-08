let a = +prompt("укажите число от 1 до 9");
let str = "";
for (let i = 0; i < a; i++) {
  if (i < a) {
    str += "\n *";
  }
  for (let j = 0; j < i; j++) {
    str += "*";
  }
}
console.log(str);
