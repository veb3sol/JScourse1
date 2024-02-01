// 46. Что такое замыкание

function getFullName(fName, lName){     // функция которая вернет другую функцию
    let a = 100                         // переменная 1 функции
    return function(){  // функция которая вернется, она использует переменные 1 функции и ее аргументы
        console.log(`Привет ${fName}  ${lName}  ${a}`)  //переменные 1 функции и ее аргументы используются с 1 функции
    }
}
const getik = getFullName('Vasya', 'Ivanov')    
//console.log(getik)    // тут будет функция
getik()   // тут то что вернет 2 функция, при этом она использует и аргументы и переменные первой

function updateValue(value = 0){
    let x = value
    return function(num = 0){
        return (x+=num)
    }
}
const upVal = updateValue(2)
const upVal2 = updateValue(4)
// при каждом таком вызове создается новое окружение и новая лексическая модель
// console.log(upVal)  // тут будет функция
// console.log(upVal(1)) //3 -- тут мы вызываем эту функцию, передаем ей параметр, а она помнит все переменные и параметры своего родителя
// console.log(upVal(0)) //3 - осталось 3, потому что x=3 в памяти, ранее функция изменила переменную родителя
// console.log(upVal2(4)) //8 -- 4+4 это новый контекст и вызов предыдущей функции которая якобы поменяла x не влияет
// console.log(upVal2(0)) //8 - осталось 8, потому что x=4 в памяти


// проверка логина и пароля, без доступа к ним на прямую
function checkCred(){
    const login = 'test'
    const password = 'somePass'
    // этипеременные не будут очищатся, потому что ниже есть методы которые их используют
    return {                // возращаем обьект с методами
        checkLog(val1){
            return login === val1
        },
        checkPass(val2){
            return password === val2
        }

    }
}

const check = checkCred()
console.log(check) // обьект с 2 методами
console.log(check.checkLog('asdfg')) // false - лигин не правильный

function closureExemple() {
    const arrOfFunc = []
    let value = ''
    for(let i = 0; i < 10; i++){    // на каждои иттерации будет новое let i. а еще i это внутренняя переменная цикла
        value +=i
        arrOfFunc.push(function(){
            console.log(i, value)   
        })
    }
    return arrOfFunc    // возвращаем когда value = '0123456789' 
}
const res = closureExemple() // массив функций
res[1]() // 1 '0123456789'    если var i вместо let i --- тогда 10 '0123456789'

// undefined -- переменная обьявлена но пока не имеет значения