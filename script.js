// Однострочный коментарий
/*
    Многострочный коментарий
*/

/**
 * JSDoc коментарии
 */

/**
 * 1. Типы данных - примитивные
 *  - Number: 2019, 1.5, NaN, Infinity
 *  - String: 'Hello', "hello", `Hello`
 *  - Boolean: true, false
 *  - Null: null
 *  - Underfined: undtrfined
 *  - Symbol()
 */ 

// NaN -- не число, при ошибках типа число умножили на строку
// Infinity - при делении на 0
// null -- значение переменной неизвестно
// underfined -- переменная НИЧЕМУ не равна

/**
 * 2. Типы данных - обьекты (Reference type) Передаются по ссылке
 *  Object: {name: 'Denis', age: 30}
 *      * Array: [1,2,3]
 *      * Function: function foot() {}
 *      * Date: new Date()
 *  ......
 */

console.log(555)    //вывод в консоль
console.log(5/0)    // Infinity
console.log('hello', "hello", `hello`)    // вывод строк подряд
console.table({name: "Artur", age: 20})
console.log([1,2,3,4])