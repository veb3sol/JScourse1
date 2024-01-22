// 40. Что такое this. Контекст вызова функции.
function getThis(){
    console.log(this)
}
// getThis()   // обьект window
// window.getThis()    //то же самое -- обьект window
// console.log(window.getThis)     // увидим саму функцию

const prod1 = {
    title: "Intel",
    price: 100,
    getPrice: function(){
        //console.log(this)   // получим обьект
        console.log(this.price)   // получим цену
    },
    getTitle,           // равносильно -- getTitle: getTitle,
    info: {
        information: ['2.6'],
        getInfo: function(){
            console.log(this) //this - касается того обьекта в котором обьявлен(Info)
        }
    }
}

function getTitle(){
    console.log(this.title)
}
prod1.getPrice()
prod1.info.getInfo()    // обьект Info, так как там выводится this

function getPrice(){
    console.log(this.price)
}
getPrice() // undefined - потому что this ссылается на window, у которого нету свойсьва price, вызов функции напрямую
prod1.getTitle()  // Intel - потому что функция вызывается через обьект а не на прямую

// this всегда равен обьекту которой перед крайней правой точкой!!!

const prod2 = {
    title: 'AMD',
    price: 60,
    getPrice,
    getName(){                // метод обьекта
        console.log(this.title)
    }
}
prod2.getPrice() // 60 -- внешняя функциия работает на оба обьекта -- она там указана
prod2.getName()   // AMD - результат вызова метода

prod1.getName = prod2.getName   // делаем аналогичный метод для 1 продукта как и во 2
prod1.getName() //Intel - как и во втором обьекте, выводит название

let stroka = 'Data my Data'
const rev = stroka.split('').reverse().join('')     // вызов метода цепочки

// split('')		вернет массив		
// reverse()		перевернет массив		
// join('')		склеит массив в строку с нужным разделителем

//каждая такая функция должна вернуть что то через return, иначе результат ее работы будет undtrfined

console.log(rev)        //ataD ym ataD - перевернутая строка


function getPrice3(){
    console.log(this.price)
}
function getName3(){
    console.log(this.title)
}
const prod3 = {
    title: 'WER',
    price: 999,
    getName3,
    getPrice3
}
//prod3
//.getName3()     //undefined - потому что в функции нету return, если будет return this - то сработает
//.getPrice3()    //  у undefined вызывается getPrice3, которого нету - ошибка!

// что бы не записывать методы в обьект
function getName(){             // отдельный метод
    console.log(this.title)
}
function getMyPrice(curency = '$'){     // отдельная функция которая будет вызвана как метод, и которая принимает один аргумент и у которого есть значение по умолчанию
    console.log(curency + this.price)
}

const prod4 = {            // обьект без нужного метода
    title: 'DAF',
    price: 999,
};
getName.call(prod4);   // вызвать getName в контексте prod4, хотя в этом обьекте нету такого метода
getMyPrice.call(prod4, '*');   // *999
// .call(prod1, arg1, arg2, .....) -  первый аргумент - контекст в котором надо вызвать метод
getMyPrice.apply(prod4, ['#']) // #999
// .apply(prod1, [arg1, arg2....]) -- второй аргумент - массив аргументов для метода который вызывается 

_
const prod5 = {            // обьект без нужного метода
    title: 'DAF',
    price: 999,
    getMyPrice
}
setTimeout(prod5.getMyPrice, 1000)  //$undefined - через секунду   потому что из за setTimeout контекст this === window

const getPriceBind = prod5.getMyPrice.bind(prod5, '**') // prod5 - контекст, ** - аргумент для getMyPrice
//.bind(prod1, arg1, arg2, .....) - не вызывает функцию, а возращает ее с привязаным контекстом (с нужными аргументами и контекстом где вызвать)
console.log(getPriceBind)   //сама функция getMyPrice
setTimeout(getPriceBind, 1000)  //**999 - через секунду

// getPriceBind является с привязаным контекстом и не может быть изменена call или apply
// bind используется редко - чаще стрелочные функции
