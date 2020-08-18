// 2 Запросить 2 числа и найти только наибольший общий делитель.
let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");

let numMin = firstNum < secondNum ? firstNum : secondNum;
let numMax = firstNum > secondNum ? firstNum : secondNum;

let result = 0;

for (let i = numMax; i >= 1; i--) {
  if (numMin % i == 0 && numMax % i == 0) {
    result = i;
    break;
  }
}
console.log(result);
