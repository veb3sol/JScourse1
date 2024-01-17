// 23. Введение в функции

//фанкшэн дикларэйшэн
function sayHello(fName, lName = 'Default'){

    if(!fName) return console.error('Ошибка') //ретурнов может быть много через условия

    console.log('Hello!!')
    console.log(fName, lName)   // undefined - если значение арг не передано в функцию
    return `Привет ${fName} ${lName}`
    //после ретурна ничего не выполняется
}

//sayHello("ser", "adr")      //Hello!! - вызывать можно в любом месте
// let res = sayHello("ser", "adr")      //отработает функция, res = undefined -- если нету return
let res2 = sayHello("ser", "adr")+' !'      
//let res3 = sayHello()      
let res4 = sayHello('ffffffff')      //res = undefined -- а в выполении функции подставится аргумент по умолчанию

console.log(res2) // при наличии return - вывод того что в ретурне
//console.log(res3) // при наличии return - вывод того что в ретурне
console.log(res4) // Привет ffffffff Default

// область видимости
let x =10
function foo(){
    // если обратиться в функции к переменной необьявляя ее -- она будет искаться:
    //1 - в функции, 2 - в параметрах ф-ции, 3 - в глобальном пространстве
    x=20            // переменная нашлась в глобальном пространстве -- плохая практика
    console.log(x)  //20
}
foo()
console.log(x)      //20 - изменилось в функции

let y =10
function foo1(){
    let y=20   // если обьявляем в функции - она локальна, то берется значение с функции а не с глобалки
    console.log(y)      //20
    return y
}
let g = foo1()
console.log(y)          //10 - это глобальная переменная и она не изменилась в функции
console.log(g)          //20 - это то что вернула функция

// параметры - они как обявленные переменные в функции - они локальны

const user = {
    name: 'Den',
    age: 30
}

function getUser(u){
    u.name = 'Lora'
    console.log(u)      // изменилось имя
}

getUser(user)
console.log(user)   // изменилось имя

// фанкшэн экспрэшэн - если функция равна переменной то мы не можем ее вызывать раньше
const sqv = function (x){
    return x*x
};

// самовызывающеяся функция - перед ней - ;
(function(msg){         // весь код может в такое заворачиваться, что бы не ббыло конфликтов имен перем
    console.log(msg);       //Privet
})('Privet');  //в конце скобки вызывающие функцию
