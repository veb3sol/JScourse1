// 42. Стрелочные функции
const plus = (x = 0, y = 0) => x+y;     // стрелочная функция (короткая запись). если 1 стока то return не пишем
console.log(plus(2,1))  //3

const withoutArg = () => console.log('hello!!') // обьявление когда нету аргументов
const singleArg = x => x*2;     // обьявление когда 1 аргумент
const singleArg1 = (x = 1) => x*2;     // обьявление когда 1 аргумент необязательный
const moreActions = (a, b) => {
    a *= 2
    b *= 3
    return a+b
}
console.log(moreActions(4,5)) //23

// если при помощи стр функции хотим вернуть обьект
const returnObj = (str = '') => {   // если не писать return - то заворачиваем обьект в круглые скобки
    return {
        obj: str,
        lob: str.length
    }
}
// если не пишем return
const returnObj2 = (str = '') => ({
        obj: str,
        lob: str.length
    })


console.log(returnObj('Vasya')) //{obj: 'Vasya', lob: 5}

function sum(a, b){
    console.log(arguments)  // arguments - хранит все аргументы, даже не обьявленные, но переданые в функцию -- иттерируемый обьект
    return a+b
}
// Различия обычных и стрелочных функций
//arguments - есть в обычных, но нету в стрелочных функциях
//this - не существует в контексте стрелочной функции и берется с уровня выше

const obj = {
    name: 'Den',
    age: 30,
    getName(){
        console.log(this)
    },
    getAge: ()=> console.log(this)
}

obj.getName()   //{name: 'Den', age: 30, getName: ƒ, getAge: ƒ}
obj.getAge()    // window, потому что нету this в стрелочной ф-ции, берется на уровень выше

// Вывод - this не надо использовать в стрелочных функциях

// можно обойти это ограничение так ---
const obj2 = {
    name: 'Denis',
    age: 40,
    getName(){
        console.log(this)
    },
    getAgeArrow: null,  // промежуточное свойство
    getAge(){
        this.getAgeArrow = () => console.log(this)     // this имеет контекст потому что нахрдится в getAge()
        setTimeout(() = console.log(this))          // нету потери контекста
    }
}

obj2.getAge() // происходит переопределение getAgeArrow
obj2.getAgeArrow()  // срабатывает стрелочная функция

