/*
1. Написати функцію, яка на вхід отримує масив чисел довільного порядку (не сортовані) та довільної довжини з N елементів,
та повертає значення найменшого числа в цьому масиві. Для спрощення рішення розуміємо, що на вхід отримуємо масив, що
завжди складається тільки з чисел. Якщо заданий масив пустий (немає жодного елементу) - повернути null.
Додаткове питання: що треба змінити в функції, аби замість мінімального значення вона шукала максимальне?
А якщо одразу шукати і мінімальне, і максимальне значення?
 */

{
    function getMaxAndMin(array) {
        if (array.length === 0) {
            return null;
        }

        let maxNumber = array[0];
        let minNumber = array[0];

        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxNumber) {
                maxNumber = array[i];
            }

            if (array[i] < minNumber) {
                minNumber = array[i];
            }
        }
        return `maxNumber = ${maxNumber}, minNumber = ${minNumber}`;
    }

    console.log(getMaxAndMin([1, 7, 5, 6, 0] )); //maxNumber = 7, minNumber = 0
    console.log(getMaxAndMin([3, 1, -9, -3, 2, 8] )); //maxNumber = 8, minNumber = -9
    console.log(getMaxAndMin([] )); //null
}

/*
2. Написаті функцію, яка на вхід отримує строку довільного розміру та повертає true, якщо задана строка є паліндромом.
Інакше повернути false.
*/

// Якщо використовувати будь-які вбудовані функції заборонено, то маємо на увазі, що всі літери у одному регістрі.
// Якщо можливий різний регістр, то потрібно додати toLowerCase() при порівнянні символів строки.

// Варіант 1: для строк без пробілів (якщо не можна прибрати пробіли через string.split(' ').join('');
{
    function checkIsPalindrome(string) {
        if (string.length === 0) {
            return false;
        }

        let halfLen = string.length / 2;
        for (let i = 0; i < halfLen; i++) {
            if (string[i] !== string[string.length - i - 1]) {
                return false;
            }
        }

        return true;
    }

    console.log(checkIsPalindrome(''));
    console.log(checkIsPalindrome('b'));
    console.log(checkIsPalindrome('mom'));
    console.log(checkIsPalindrome('string'));
    console.log(checkIsPalindrome('aabbcbbaa'));
    console.log(checkIsPalindrome('amanaplanacanalpanama'));
}

// Варіант 2: для строк з пробілами (якщо у першому варіанті можна прибрати пробіли через string.split(' ').join(''),
// то цей варіант вважати не актуальним =) )
{
    function checkIsPalindrome2(string) {
        if (string.length === 0) {
            return false;
        }

        let startIndex = 0;
        let finishIndex = string.length - 1;

        do {
            if (string[startIndex] === string[finishIndex]) {
                startIndex++;
                finishIndex--;
                continue;
            }

            if (string[startIndex] === ' ') {
                startIndex++;
                continue;
            }

            if (string[finishIndex] === ' ') {
                finishIndex--;
                continue;
            }

            return false;

        } while (startIndex < finishIndex);

        return true;
    }
    console.log(checkIsPalindrome2(''));
    console.log(checkIsPalindrome2('b'));
    console.log(checkIsPalindrome2('mom'));
    console.log(checkIsPalindrome2('string'));
    console.log(checkIsPalindrome2('aa bb cbbaa'));
    console.log(checkIsPalindrome2('a man a plan a canal panama'));
}


/*
3. Написати функцію, яка на вхід отримую число у форматі строки та повертає його у форматі числа, аналог методу parseInt().
Додаткове питання: що потрібно змінити, аби можна було задавати строку та довільну систему числення?
 */

// Якщо ігноруємо вірогідність потрапляння символів відмінних від цифр. (12af => NaN)
{
    function customParseInt(string, radix) {
        let negative = false;
        let result = 0;

        if (string[0] === '-') {
            negative = true;
            string = string.slice(1);
        }

        for (let i = 0; i < string.length; i++) {
            if (negative) {
                result -= string[i] * (radix ** (string.length - i - 1));
            } else {
                result += string[i] * (radix ** (string.length - i - 1));
            }
        }

        return result;
    }

    console.log(customParseInt('1', 10));
    console.log(parseInt('1', 10));
    console.log(customParseInt('-567', 10));
    console.log(parseInt('-567', 10));
    console.log(customParseInt('225', 8));
    console.log(parseInt('225', 8));
    console.log(customParseInt('-123', 6));
    console.log(parseInt('-123', 6));
    console.log(customParseInt('441', 5));
    console.log(parseInt('441', 5));
    console.log(customParseInt('-213', 4));
    console.log(parseInt('-213', 4));
    console.log(customParseInt('0101001', 2));
    console.log(parseInt('0101001', 2));
}
