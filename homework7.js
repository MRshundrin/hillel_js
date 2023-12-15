/*
Вам потрібно створити функцію memoize, яка буде відповідати за мемоїзацію.
Вона повинна повертати 2 значення у форматі масиву: функцію для отримання поточного значення самих мемоїзованих даних
(завжди на першому місці в масиві) та функцію для зміни самих даних.
Також функція memoize може приймати значення defaultValue, яке буде встановлене як початкове значення збережених даних.
 */

const memoize = (defaultValue) => {
    let value = defaultValue;

    const getMemData = () => {
        return value;
    };

    const setMemData = (newValue) => {
        value = newValue;
    };

    return [getMemData, setMemData];
};

const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];

const memData2 = memoize([1, 2, 3, 4]);
const getMemData2 = memData2[0];
const setMemData2 = memData2[1];

console.log(getMemData()); // поверне undefined
console.log(getMemData2()); // поверне [1, 2, 3, 4]

setMemData(3);
console.log(getMemData());  // поверне 3
console.log(getMemData2()); // поверне [1, 2, 3, 4]

setMemData2('some string');
console.log(getMemData()); // поверне 3
console.log(getMemData2()); // поверне 'some string'

setMemData({ a: 'b' });
console.log(getMemData()); // поверне { a: 'b' }
console.log(getMemData2()); // поверне 'some string'
