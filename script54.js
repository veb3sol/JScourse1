// 54. Разбор домашних заданий. Функции высшего порядка, ключевое слово this.
// 1
// Создать 2 функции и дать им осмысленное название
// 1 функция принимает массив и колбэк
// 2 функция (колбэк) обрабатывает каждый эл мас(для каждого вызова свой колбэк)
// первая функция возвращает .... "New value: " и результат обработки

function firstFun( arr, handler){
    let rez = "New value: "
    for(let i = 0; i < arr.length; i++){
    //    console.log(handler(arr[i]))
        rez += handler(arr[i])
    }
    return rez
}

const rez1 = firstFun(['I', 'am', 'Tommy'], function(item){
    return item[0].toUpperCase() + item.slice(1)
})

console.log(rez1)       //Mew value: IAmTommy

const rez2 = firstFun([10,20,30], function(item){
    return item*10 + ' '
})

console.log(rez2)       //New value: 100 200 300 

const rez3 = firstFun([{age: 52, name: 'Artur'}, {age: 45, name: 'Vova'}], function(item){
    return `${item.name} is ${item.age},`
})

console.log(rez3)       //New value: Artur is 52,Vova is 45,

//Написать аналог метода every. Функция every должна принимать первым арг масив чисел
// (проверить что массив), второй арг - callback (проверить что функция)
// функция возр true или false в зависимости от результата вызова callback
// (проверить число больше 5)
// Callback принимает 1 эл массива, его индекс в массиве, и весь массив

// Как работает every
// если все элементы - числа то результат true
const isAllNumber = [2,3,4,5].every(function(num){
    return typeof num === 'number'
    // перебор каждого эл мас
    // если у всех true - то вернет true
    // если хоть у одного false - то вернет false
})

console.log(isAllNumber)    // true

function every(arr, handler){
    for (let index = 0; index < arr.length; index++) {
        if(!handler(arr[index])){
            return false
        }
    }
    return true
}

const isNum = every([2,3,4,5], function(num){
    return typeof num === 'number'
})

console.log(isNum)

// This
// 1
// Создать обьект с розн ценой и кольчеством продуктов
// Этот обьект должен сожержать метод для получения общей стоимости всех товаров

let prod1 = {
    price: 100,
    count: 5,
    getTotalPrice(){
        return this.price*this.count
    },
}

// в консоли prod1.getTotalPrice() -- 500

// 2
// такая же задача, но 2 обьекта, у второго нету метода для просчета цены
// надо посчитать общую цену для 2 обьекта используя метод 1 обьекта

let prod2 = {
    price: 100,
    count: 5,
    getTotalPrice(){
        return this.price*this.count
    },
}

let prod3 = {
    price: 20,
    count: 2,
}

// консоль -- prod2.getTotalPrice.call(prod3)   --- 40
// вызов метода prod2 в контексте prod3

// 3
// есть обьект и отдельно функция - надо вызвать функцию как метод обькта

let = sizes = {width: 5, height: 20}
const getSquare = function(){
    return this.width*this.height
}

console.log(getSquare.call(sizes))

// 4
// изменить функцию getElementHeight
// что бы вызвать getElementHeight() и получить 25

let element = {
    height: 25,
    getHeight: function(){return this.height}
}

let getElementHeight = element.getHeight //undefined
console.log(getElementHeight())  //undefined -- проблема - this глобальная и указывает на window

let getElementHeight1 = element.getHeight.bind(element) //bind(element) - привязка к данным с element
console.log(getElementHeight1())  //25 