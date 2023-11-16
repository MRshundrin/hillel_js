/*
    №1. FizzBuzz game
    За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке число.
    Далі, в залежності від того, яке число ввів користувач, вивести відповідне повідомлення:
    Fizz, якщо число ділиться на 3 без залишку;
    Buzz, якщо число ділиться на 5 без залишку;
    FizzBuzz, якщо число одночасно ділиться на 3 та на 5 без залишку;
    Non Divisible, якщо число не ділиться на 3 чи на 5.
*/

// Варіант 1
{
    let answer = prompt('Enter any number').trim();

    switch (0) {
        case answer % 3 + answer % 5:
            console.log('FizzBuzz');
            break;
        case answer % 3:
            console.log('Fizz');
            break;
        case answer % 5:
            console.log('Buzz');
            break;
        default:
            console.log('Non Divisible');
            break;
    }
}

// Варіант 2
{
    let answer = prompt('Enter any number').trim();

    if (answer % 3 === 0 && answer % 5 === 0) {
        console.log('FizzBuzz');
    } else if (answer % 3 === 0) {
        console.log('Fizz');
    } else if (answer % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('Non Divisible');
    }
}

/*
    №2. Що ввів користувач?

    За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке значення.
    Далі, в залежності від того, що ввів користувач, вивести відповідний тип даних за допомогою повідомлення You entered a {type}. Якщо визначити тип даних однозначно не можливо - виводимо повідомлення You entered a complex data.
    Нарпиклад, користувач ввів:
    18 -> You entered a number;
    smth different -> You entered a string;
    False -> You entered a boolean;
    smth 18 very True -> You entered a complex data;
 */

// Варіант 1
{
    let answer = prompt('Enter something').trim();

    if (!isNaN(+answer)) {
        console.log('You entered a number.');
    } else if (answer.toUpperCase() === 'FALSE' || answer.toUpperCase() === 'TRUE') {
        // щоб не пропустити регістр літер, просто робимо все через .toUpperCase()
        console.log('You entered a boolean.');
    } else if ((/(false|true)/i).test(answer) || (/\d+/).test(answer)) {
        // тут або так (але в такому випадку 'stringFalse' або 'false true' буде вважатись змішаним контентом),
        // або взагалі розбивати строку у масив и перевіряти кожне слово.
        console.log('You entered a complex data');
    } else {
        console.log('You entered a string');
    }
}

// Варіант 2
{
    let answer = prompt('Enter something').trim();

    switch (true) {
        case !isNaN(+answer):
            console.log('You entered a number.');
            break;
        case (answer.toUpperCase() === 'FALSE' || answer.toUpperCase() === 'TRUE'):
            console.log('You entered a boolean.');
            break;
        case (/(false|true)/i).test(answer) || (/\d+/).test(answer):
            console.log('You entered a complex data');
            break;
        default:
            console.log('You entered a string');
            break;
    }
}
