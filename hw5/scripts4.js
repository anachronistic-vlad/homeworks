let x = +prompt("первое число");
let y = +prompt("второе число");
let action = prompt("введите действие + - / * % ^");
function sumAround(x, y, action) {
  switch (action) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    case "^":
      return x ** y;
    default:
      break;
  }
}

let c = sumAround(x, y, action);
console.log("итого = " + c);
