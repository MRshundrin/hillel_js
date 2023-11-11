// 1. Чому будуть дорівнювати значення змінніх a, b та result після виконання наступних операцій?.
{
    let a = 1 + 3 - 5 * 2;
    let b;
    b = 2 ** 3 / 5;
    const c = 7;
    let result = a + b * c;

    console.log('Task 1:')
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
    console.log(`result = ${result}`)
}


// 2.  Розв"яжіть за допомогою мови програмування JS квадратне рівняння: 4x^2 - 5x + 1 = 0
{
    const a = 4;
    const b = 5;
    const c = 1;

    let d = b**2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (a * 2);
    let x2 = (-b - Math.sqrt(d)) / (a * 2);

    console.log('Task 2:')
    console.log(`d = ${d}`)
    console.log(`x1 = ${x1}`)
    console.log(`x2 = ${x2}`)
}
