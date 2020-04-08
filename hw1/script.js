console.log("sfsaf");

console.log("This is the outer level");
console.group(); // тут надо было написать по другому
console.log("Level 2");
console.group();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

console.error("just error");

console.warn("attention!");

console.table(["aaaaa", "sssss", "ddddd"]);

console.time("answer time");
alert("for time");
console.timeEnd("answer time");
