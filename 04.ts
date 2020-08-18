// 4 Определить количество цифр в введенном числе.

function getNumДength(num) {

    let quantity = 1;
  
    while ((num /= 10) >= 1 ) {
        quantity++;
    }
    console.log(quantity);
    return quantity;

}

getNumДength(12587);
