// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let minNum:number = +prompt("Введите первое число");
let maxNum:number = +prompt("Введите второе число");

let sum:number = 0;

while(minNum <= maxNum){
    sum += minNum;
    minNum++;
}

console.log(sum);

