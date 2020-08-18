// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function getPositiveNegativeNums() {
    var positive = 0;
    var negative = 0;
    var nullNum = 0;
    var even = 0;
    var add = 0;
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] == 0 ? nullNum++ : arguments[i] > 0 ? positive++ : negative++;
        if (arguments[i] % 2 == 0) {
            even++;
        }
        else {
            add++;
        }
        alert("\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445: " + positive + "  \n\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445: " + negative + "  \n\u041D\u0443\u043B\u0435\u0439: " + nullNum + "  \n\u0427\u0435\u0442\u043D\u044B\u0445: " + even + " \n\u041D\u0435\u0447\u0435\u0442\u043D\u044B\u0445: " + add + " ");
    }
}
getPositiveNegativeNums(1, -2, 7, 9, -12, 0, 32, 0, 10, -7);
