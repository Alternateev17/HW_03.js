// 3 Запросить у пользователя число и вывести все делители этого числа.

let num = +prompt('Введите число');

let result = 0;

for (let i = 0; i <= num; i++) {
   if (num % i == 0) {
    result = i;
    console.log(result);
   }
}
