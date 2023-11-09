// 1. Яким буде результат виконання кожної з наступних строк коду та чому?
// Напишіть відповіді для кожної строки коду та коротке пояснення.

// a буде дорівнювати строці "1234".
// При складанні string та number плюс працює як просто "об'єднувач", а не математичний оператор.
let a = '12' + 34;
console.log(`a = ${a}`);

// b буде дорівнювати числу 46,
// Тут просто складаємо два number, і плюс виконує функцію математичного оператора.
let b = 12 + 34;
console.log(`b = ${b}`);

// с буде дорывнювати 10.
// При діленні з використанням строки, вона буде по можливості конвертована у число
let c = 100 / '10';
console.log(`c = ${c}`);

// d буде дорівнювати NaN.
// При виконанні множення не вийде конвертувати строку "f" до числа, тому множення на не число дасть такий результат.
let d = 100 * 'f' ;
console.log(`d = ${d}`);

// e буде дорівнювати Infinity
// Не зважаючи на те, що typeof null є 'object', при використанні в операціях з числами по факту null є математичним нулем.
// А строка "7" конвертується у число. Таким чином вираз має виглят 7 / 0.
// У JS при діленні на нуль ми отримуємо результат Infinity
let e = '7' / null;
console.log(`e = ${e}`);


//2. Напишіть код для отримання заданого результату (всі відомі вам варіанти):

// '2' + '4' -> 6 (алгебраїчна сума)
let stringToNumber1 = +'2' + +'4';
let stringToNumber2 = Number('2') + Number('4');
let stringToNumber3 = parseInt('2') + parseInt('4');
let stringToNumber4 = parseFloat('2') + parseFloat('4');
let stringToNumber5 = ('2' * 1) + ('4' * 1);
let stringToNumber6 = ('2' / 1) + ('4' / 1);
let stringToNumber7 = ('2' - 0) + ('4' - 0);

console.log(stringToNumber1);
console.log(stringToNumber2);
console.log(stringToNumber3);
console.log(stringToNumber4);
console.log(stringToNumber5);
console.log(stringToNumber6);
console.log(stringToNumber7);

// 7.2 / '1.2' -> 6 (ділення двох чисел)
// Тут не до кінця зрозумів завдання, так як вираз вже працює корекнтно. Тому інщі варіанти не логічні і зайві.
// Але про всяк випадок:
let divisionByString1 = 7.2 / '1.2';
let divisionByString2 = 7.2 / +'1.2';
let divisionByString3 = 7.2 / Number('1.2');
let divisionByString4 = 7.2 / parseFloat('1.2');
let divisionByString5 = 7.2 / ('1.2' * 1);
let divisionByString6 = 7.2 / ('1.2' / 1);
let divisionByString7 = 7.2 / ('1.2' - 0);

console.log(divisionByString1);
console.log(divisionByString2);
console.log(divisionByString3);
console.log(divisionByString4);
console.log(divisionByString5);
console.log(divisionByString6);
console.log(divisionByString7);

// 'this' + ' simple' + ' string' -> 'this simple string' (конкатенація строк)
let string1 = 'this' + ' simple' + ' string';
const Word1 = 'this';
const Word2 = ' simple';
const Word3 = ' string';
let string2 = `${Word1}${Word2}${Word3}`;

console.log(string1);
console.log(string2);


// 'answer' + ' is:' + '30' + 5 -> 'answer is 35' (сума з конкатенацією)
// Скоріш за все тут зайво розписувати стільки майже однакових варіантів, але:
let stringWithNumber1 = 'answer' + ' is: ' + (+'30' + 5);
let stringWithNumber2 = 'answer' + ' is: ' + (Number('30') + 5);
let stringWithNumber3 = 'answer' + ' is: ' + (parseInt('30') + 5);
let stringWithNumber4 = 'answer' + ' is: ' + (parseFloat('30') + 5);
let stringWithNumber5 = 'answer' + ' is: ' + ('30' - 0 + 5);
let stringWithNumber6 = 'answer' + ' is: ' + ('30' / 1 + 5);
let stringWithNumber7 = 'answer' + ' is: ' + ('30' * 1 + 5);
let stringWithNumber8 = `answer is: ${+'30' + 5}`;
let stringWithNumber9 = `answer is: ${Number('30') + 5}`;
let stringWithNumber10 = `answer is: ${parseInt('30') + 5}`;
let stringWithNumber11 = `answer is: ${parseFloat('30') + 5}`;
let stringWithNumber12 = `answer is: ${'30' - 0 + 5}`;
let stringWithNumber13 = `answer is: ${'30' / 1 + 5}`;
let stringWithNumber14 = `answer is: ${'30' * 1 + 5}`;

console.log(stringWithNumber1);
console.log(stringWithNumber2);
console.log(stringWithNumber3);
console.log(stringWithNumber4);
console.log(stringWithNumber5);
console.log(stringWithNumber6);
console.log(stringWithNumber7);
console.log(stringWithNumber8);
console.log(stringWithNumber9);
console.log(stringWithNumber10);
console.log(stringWithNumber11);
console.log(stringWithNumber12);
console.log(stringWithNumber13);
console.log(stringWithNumber14);




