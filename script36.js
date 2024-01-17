// 36. Функции высшего порядка. Callback.
function foo(){
    console.log('aaa')
}
foo()
foo.field = 'Den'   // у функции как у обьекта делаем новое поле и присваеваем значение - так нерекомендовано
console.log(foo.field)

// функции высшего порядка:
// принимают как параметр другие функции или возращают функции

// делаем аналог функции map
const maska = ['saran', 'vera', 'kuzmich', 'tom']
// надо получить масив с длинами слов -- [5, 4, 7, 3]

let newArr = []
for(let i = 0; i < maska.length; i++){
    newArr.push(maska[i].length)
}
console.log(newArr) //[5, 4, 7, 3]

let newArr2 = []
for(let i = 0; i < maska.length; i++){
    newArr2.push(maska[i].toUpperCase())
}
console.log(newArr2) //['SARAN', 'VERA', 'KUZMICH', 'TOM']

// callback-функция  -- та которая принята была как аргумент другой функцией и потом там вызвана

//функция высшего порядка, которая обьеденит в себе выполнение этих задач
const names = ['alona', 'sveta', 'vera', 'nastya']
// случай когда функция принимает как аргумент другую функцию
function mapArray(arr, fn){
    const res = []
    for(let i = 0; i < arr.length; i++){
        res.push(fn(arr[i]))
    }
    return res
}

function nameLength(el){
    console.log(el)
    return el   // el.length -  длина слова .. можем возращать что хочешь
}

function nameToUpperCase(el){
    return el.toUpperCase()
}

const resMass = mapArray(names, nameLength) //массив имен
const resMass2 = mapArray(names, nameToUpperCase) //массив имен в верхн рег

console.log(resMass)
console.log(resMass2)

// случай когда функция возращает другую функцию
function greeting(fname){               //функция принимает имя
    return function(lname){ // вернет функцию без названия, которая принимает 1 аргумент
        return `Hello ${fname} ${lname}`    // вернет строку в которой аргументы 1 и 2 функции
    }
}

// 1 вариант вызова такой функции 
const testGreeting = greeting('Roma')   // переменная как 1 функция именно с этим аргументом 
const fullName = testGreeting('Ivanov')  
console.log(fullName)   //Hello Roma Ivanov
// 2 вариант вызова
const testGreeting2 = greeting('Semen')('Petrov')   // вернулась функция и сразу вызвалась и получила свой аргумент
console.log(testGreeting2)  //Hello Semen Petrov

function quest(job){
    if(job === 'developer'){
        return function(name){
            return `${name}, что такое js?`
        }
    } else if(job === 'teacher'){
        return function(name){
            return `${name}, какой предмет вы ведете?`
        }
    } else {
        return function(name){
            return `${name}, кто Вы?`
        }
    }
}

const e1 = quest('teacher') // вернет функцию
const e2 = e1('Petr')
console.log(e2)

// упрощение функции
function quest2(job){
    const jobDictionary = {
        developer: 'что такое js?',
        teacher: 'какой предмет вы ведете?'
    }
    const vvv = jobDictionary[job] ? jobDictionary[job] : "кто Вы?"   
    return function(name){
        return `${name} ${vvv}`
        }
}

const r1 = quest2('teacher')
const r2 = r1('Vera')
console.log(r2)         //Vera какой предмет вы ведете?