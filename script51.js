// 51. Object descriptor
const car = {
    brand: 'zaz',
    year: 2020,
    get age1(){
        return `Выпущена в ${this.year} году`
    },
    set age(value){         // так же должен называться как и геттер
        this.year = value       // переопределяем свойство year
    }
}

// можно определять настройки для обьекта и его свойств
Object.defineProperty(car, 'age', {
    // configurable: false,         // нельзя удалить и конфигурировать еще в дэскрипторе
    // enumerable: false,           // свойство станет неитерированым
    // writable: false,
    // get: function(){                // -- вариант обьявления геттера
    //     return `Машина выпущена в ${this.year}`
    // },
})

// Object.keys(car)  -- вернет массив ключей обьекта
// car.propertyIsEnumerable('year') -- проверка перебираемое ли это свойство - его не видно в цикле
// car.hasOwnProperty('year') - имеет ли обьект car такое свойство?

// Object.defineProperty(car, 'year', {
//     enumerable: false,    -- ОШИБКА! при configurable: false,
// })

// car -- обьект
// 'year' -- свойство, можно указывать новое свойство
// 3 параметр - обьект - дэскриптор, который имеет определенные настройки 
// configurable - при false, свойство невозможно удалить (delete car.year - не работает)
// configurable - при false, невозможно конфигурировать, но можно менять

// enumerable: false -- делает свойство неиттерируемым, (Object.keys(car) -- ['brand'])
console.log(car.propertyIsEnumerable('year'))  // false при enumerable: false - свойство не перебераемое
console.log(car.hasOwnProperty('year')) // true - имеет ли car такое свойство

// writable: false -- запрещает перезапись свойства car.year = 2054 - ничего не меняет,но свойство можно удалить

// get: function(){                 -- касается нового свойства age
//     return `Машина выпущена в ${this.year}`
// }
// console.log(car.age)    Машина выпущена в 2020
//console.log(car.age1)    //Выпущена в 2020 году

car.age = 2011      // из за сеттера, мы так переопределяем year!!!!
console.log(car)

// Вопрос на собесе
// Какая то функция изменяет переменную глобальную, как найти эту функцию

Object.defineProperty(window, 'globalVar', {
    set: function(value) {
        console.log(value)
        debugger            // в разделе Call Stack дебагера будет название функции
    }
})

function foo() {
    globalVar = 10
}
foo()