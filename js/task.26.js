var first = prompt("Введите слово", "");
var second = first.split("").reverse();

second = second.join("");


if (first == second) {
    console.log(true)
    }else {
    console.log(false)
    }

console.log(first);
console.log(second);



