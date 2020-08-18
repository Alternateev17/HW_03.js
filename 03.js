// 3 Запросить у пользователя число и вывести все делители этого числа.
var num = +prompt('Введите число');
var result = 0;
for (var i = 0; i <= num; i++) {
    if (num % i == 0) {
        result = i;
        console.log(result);
    }
}
