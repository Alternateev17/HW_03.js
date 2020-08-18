// 2 Запросить 2 числа и найти только наибольший общий делитель.
var firstNum = +prompt("Введите первое число");
var secondNum = +prompt("Введите второе число");
var numMin = firstNum < secondNum ? firstNum : secondNum;
var numMax = firstNum > secondNum ? firstNum : secondNum;
var result = 0;
for (var i = numMax; i >= 1; i--) {
    if (numMin % i == 0 && numMax % i == 0) {
        result = i;
        break;
    }
}
console.log(result);
