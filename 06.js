// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
do {
    var num_1 = +prompt("Введите первое число"), num_2 = +prompt("Введите второе число"), sym = prompt("Введите знак ");
    var res = 0;
    switch (sym) {
        case "+":
            res = num_1 + num_2;
            alert(res);
            break;
        case "-":
            res = num_1 - num_2;
            alert(res);
            break;
        case "/":
            res = num_1 / num_2;
            alert(res);
            break;
        case "*":
            res = num_1 * num_2;
            alert(res);
            break;
    }
} while (confirm("Решить еще пример?"));
