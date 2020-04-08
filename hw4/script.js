function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const n = getRandomInt(10);
  // console.log(n);
  while (true) {
    const a = prompt("Угадайте число от 0 до 10");
    const number = Number(a);
    if (a === null) {
      break;
    }
    if (Number.isNaN(number)) {
      break;
    }
    if (+a === n) {
      alert("Все верно!");
      break;
    }
  }
  