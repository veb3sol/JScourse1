// var, let, const
var name = 'Denis';
console.log(name);
name = 'Der';
console.log(name);

var age;
console.log(age) //undefined 

/**
 *  Проблемы с var
 *  - можно обьявить 2 раза одну и ту же переменную
 *  - Всплытие - можно вывести раньше чем обьявить и будет anderfined
 *  - 
 */

// console.clear() -- очистка консоли

// const - должно быть значение, невозможно переопределить
// const в ссылочных типах -- может меняться значение в обьекте

const user = {
    name: "Dark",
    age: 20
}
console.log(user)   //{name: 'Dark', age: 20}
user.age = 25
console.log(user)   //{name: 'Dark', age: 25}