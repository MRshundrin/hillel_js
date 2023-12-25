/*
    Потрібно зробити логуючий декоратор (декоратор логуівння) loggingDecorator,
    який буде логувати назву функцію та всі аргументи, з якими вона викливається,
    у консоль (використовуємо для цього console.log).
 */
const someFn = (param1, param2, ...additional) => {
    if (additional.length > 0) {
        console.log(additional);
    }

    return param2 ? param1 + param2 : param1;
};

const loggingDecorator = (fn) => {
    return (...arguments) => {
        console.log(`functionName: ${fn.name}, args: ${arguments}`);
        return fn(...arguments);
    }
}

const loggedFn = loggingDecorator(someFn);

loggedFn('w', 'q', 'e', 't', 'p');
loggedFn(1, 2, 3);

// перевірка на те, що не загубили результат роботи головної функції
console.log(loggedFn(1, 2, 3));
console.log(loggedFn('test'));