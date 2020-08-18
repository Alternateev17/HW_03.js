// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
var minNum = +prompt("Введите первое число");
var maxNum = +prompt("Введите второе число");
var sum = 0;
while (minNum <= maxNum) {
    sum += minNum;
    minNum++;
}
console.log(sum);
