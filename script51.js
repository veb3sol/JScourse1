// 51. Object descriptor
const car = {
    brand: 'zaz',
    year: 2020,
    get age1(){             // можем обращаться к нему как car.age1
        return `Выпущена в ${this.year} году`
     },
    set age1(value){         // так же должен называться как и геттер
        this.year = value       // переопределяем свойство year.... car.age1 = 2021
    }
}

// можно определять настройки для обьекта и его свойств
Object.defineProperty(car, 'age', {     // по умолчанию все настройки true
    // configurable: false, // нельзя удалить и конфигурировать другими свойствами в дэскрипторе,  delete car.age -- вернет false, можно перезаписывать
    // enumerable: false,   // свойство станет неитерированым, Object.keys(car)-прорустит age. Object.values(car)-тоже пропустит age, и в циклах не видно
    // writable: false,   //запрещает переопределять свойство, delete car.age сработает и вернет true
    get: function(){                // -- вариант обьявления геттера, это функция которую мы используем как car.age
        return `Машина была уже выпущена в ${this.year}`
    },
})

//для обявления get-тера надо обратиттся через новое свойство, например Object.defineProperty(car, 'age'... а не year

// car.age1  -- Выпущена в 2020 году
// car.age  -- Машина была выпущена в 2020 году
//car.age1 = 2525   -- переопределилось свойство car.year

// Object.keys(car)  -- вернет массив ключей обьекта, кроме тех что enumerable: false,
// Object.values(car)  -- вернет массив значений ключей, кроме тех что enumerable: false,
// car.propertyIsEnumerable('year') -- проверка иттерируемое ли это свойство
// car.hasOwnProperty('year') - имеет ли обьект car такое свойство year

// Object.defineProperty(car, 'year', {
//     enumerable: false,    -- ОШИБКА! при configurable: false,
// })

// car -- обьект
// 'year' -- свойство, (надо указывать новое свойство для определения геттера) 
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

// геттеры и сеттеры при копировании обьектов -- не копируются и не попадают в новый обьект!!!

// Вопрос на собесе
// Какая то функция изменяет переменную глобальную, как найти эту функцию

Object.defineProperty(window, 'globalVar', {
    set: function(value) {
        console.log(value)
        debugger            // в разделе Call Stack будут все функции которые переопределяли переменную как свойство обьекта window
    }
})

function foo() {
    globalVar = 10
}
foo()