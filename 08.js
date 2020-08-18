// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
var day = +prompt('Введите день недели');
do {
    switch (day) {
        case 1:
            alert("\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A");
            break;
        case 2:
            alert("\u0412\u0442\u043E\u0440\u043D\u0438\u043A");
            break;
        case 3:
            alert("\u0421\u0440\u0435\u0434\u0430");
            break;
        case 4:
            alert("\u0427\u0435\u0442\u0432\u0435\u0440\u0433");
            break;
        case 5:
            alert("\u041F\u044F\u0442\u043D\u0438\u0446\u0430");
            break;
        case 6:
            alert("\u0421\u0443\u0431\u0431\u043E\u0442\u0430");
            break;
        case 7:
            alert("\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435");
            break;
    }
    if (day == 7) {
        day = 1;
    }
    else {
        day++;
    }
} while (confirm("Хотите узнать след. день?"));
