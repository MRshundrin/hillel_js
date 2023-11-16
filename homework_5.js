/*
    Напишіть невеличку гру, яка за допомогою браузерної команди prompt() буде запитувати користувача ввести будь-яке число. Далі потрібно перевірити:

    Якщо число більше або дорівнює 123 - програма зупиняється, виводячи текстове повідомлення Wow, you've ended this endless cycle!;
    Якщо введене число менше від 123 - вивести текстове Should continue та продовжувати запитувати користувача про введення далі;
    Якщо користувач ввів не числове значення - вивести текстове повідомлення Only numbers, please та знову запитувати ввести значення.
*/

{
    let answer = +prompt('Enter some number');

    while(isNaN(answer) || answer < 123) {
        if (!isNaN(answer)) {
            answer = +prompt('Should continue');
        } else {
            answer = +prompt('Only numbers, please');
        }
    }

    alert("Wow, you've ended this endless cycle!");
}

/*
    №2 Сума та добуток діапазону чисел
    За допомогою браузерної команди prompt() почергово запросити у користувача 2 різних числа. В залежності від того, що ввів користувач:

    Якщо будь-яке введене значення не є числом - повторити запит на введення даних з текстом Only numbers, please;
    Якщо обидва значення числові - вивести добуток всіх парних чисел та суму всіх не парних чисел у заданому діапазоні.
    Діапазон - числа між значеннями, що їх ввів користувач, включаючи самі значення.
    Вивід відформатувати з використанням повідомлень Сума = {значення суми} та Добуток = {значення добутку}
    (фігурні дужки самі по собі не потрібні, тут лиш для відображення форматування).
 */

{
    let number1 = +prompt('Enter number 1');
    let number2 = +prompt('Enter number 2');

    while(isNaN(number1) || isNaN(number2)) {
        if (isNaN(number1)) {
            number1 = +prompt('Only numbers, please (number 1)');
        }

        if (isNaN(number2)) {
            number2 = +prompt('Only numbers, please (number 2)');
        }
    }

    let startNumber = number1 < number2 ? number1 : number2;
    let finishNumber = number1 > number2 ? number1 + 1 : number2 + 1;

    let sum = 0;
    let mult = 1;


    for (let x = startNumber; x < finishNumber; x++) {
       if (x % 2 === 0) {
           mult = mult * x;
       } else {
           sum = sum + x;
       }
    }

    console.log(sum);
    console.log(mult);
}