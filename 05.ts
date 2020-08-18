// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function getPositiveNegativeNums() {
  
  let positive = 0,
      negative = 0,
      nullNum = 0,
      even = 0,
      add = 0;

  for (let i = 0; i < arguments.length; i++) {
    arguments[i] == 0 ? nullNum++ : arguments[i] > 0 ? positive++ : negative++;

    if (arguments[i] % 2 == 0) {
      even++;
    } else {
      add++;
    }
    alert(
      `Положительных: ${positive}  \nОтрицательных: ${negative}  \nНулей: ${nullNum}  \nЧетных: ${even} \nНечетных: ${add} `
    );
  }
  return;
}

getPositiveNegativeNums(1, -2, 7, 9, -12, 0, 32, 0, 10, -7);
