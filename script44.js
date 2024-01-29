// 44. Перебирающие методы массивов

const users = [
    {
        _id: "456",
        index: 0,
        isActive: false,
        balans: 5600,
        age: 50,
        name: 'Luis',
        company: 'Fora'
    },
    {
        _id: "789",
        index: 1,
        isActive: true,
        balans: 5000,
        age: 56,
        name: 'Ara',
        company: 'Zara'
    },
    {
        _id: "123",
        index: 2,
        isActive: true,
        balans: 1100,
        age: 24,
        name: 'Fan',
        company: 'Sora'
    },
    {
        _id: "147",
        index: 3,
        isActive: false,
        balans: 990,
        age: 88,
        name: 'Trees',
        company: 'Umora'
    },
    {
        _id: "258",
        index: 4,
        isActive: true,
        balans: 2200,
        age: 44,
        name: 'Ka',
        company: 'Zara'
    }
]


// forEach - перебирает массив, ничего не возращает
// filter - фильтрует
// map  - вернет массив, основываясь на результатах работы колбэка
// reduce - разворачивает массив, помогает сделать новые структуры
// some - true - если хоть один элемент массива соответствует условию в колбэке
// every - true - если все элементы массива соответствуют условию в колбэке
// sort  - для вортировке в массиве
// find  - для поиска в массиве

// forEach
users.forEach((user, i, arr) => {       // можно не указывать 3-й параметр если он нам ненужен
    console.log(user, i, arr)
    // user - элемент массива
    // i - индекс
    // arr - весь массив
})

// filter
const userLess30 = users.filter((user, i, arr) => user.age < 30)
// если условие соответствует true, то обьект - елемент массива попадет в новый массив
console.log(userLess30) // новый массив, в котором юзеры с возрастом меньше 30
const activeUser = users.filter(user => user.isActive === true)
// const activeUser = users.filter(user => user.isActive) -- тоже вариант записи
console.log(activeUser) // массив с активными пользователями

// map - возращает массив из того что вернет колбек переданый в него

const userName = users.map((user, i, arr) => user.name) // массив имен пользователей
console.log(userName)  //(5) ['Luis', 'Ara', 'Fan', 'Trees', 'Ka'] - массив имен юзеров

const userName1 = users.map((user, i, arr) => ({name: user.name, age: user.age})) 
console.log(userName1)  //// массив обьектов с опред полями

// reduce - преобразовать массив в что то или посчитать что то
// reduce - 1 арг - колбэк, 2 арг - стартовое значение, если его нету, то это 1 эл массива
const totalBalance = users.reduce((acc, user, i, arr) =>{
    //console.log(acc, user)
    // return acc - тогда на каждой иттерации acc вернет 0
    return (acc += user.balans)     // на каждой итерр сумируется баланс юзеров
}, 0)                  // все арг можно не передавать. 0 - начальное значение acc
// acc - аккумулятор - хранится стартовое значение (0) при первой иттерации и результат предыдущей иттерации
// если не передать стартовое значение -- то на первой иттерации acc будет равен 1 элементу массива
// ЕСЛИ ФУНКЦИЯ НИЧЕГО НЕ ВОЗРАЩАЕТ, ТО ОНА ВОЗРАЩАЕТ undefined, поэтому acc = 0 на первой иттерац, а потом на всех undefined (при условии что return нету)

console.log(totalBalance)   // сумма всех балансов пользователя

// Создание обекта с массива с помощью reduce
const userObj = users.reduce((acc, user) => {
    acc[user._id] = user
    return acc
}, {}) 
console.log(userObj) // получаем обьект обьектов с ключами _id

// some
const isActiveUser = users.some((user, i, arr) => user.company === 'Zara')
console.log(isActiveUser) //true - есть ли хоть один активный пользователь

// every
const everyUsersIsActive = users.every((user) => user.isActive === true )
console.log(everyUsersIsActive) // false - все ли пользователи активны

// find
const user = users.find(user => user.name === 'Ka')
console.log(user) // получим юзера с таким именем

const us = users.find(user => user.age > 10)
console.log(us) // если несколько юзеров подходят, то получаем одного - первоого кто подходит в массиве

// sort - изменяет исходный массив, по умолчанию сортирует как строки, по лексике
const arr = ['Sem', 'Den', 'Car', 'Zina']
arr.sort()          //(4) ['Car', 'Den', 'Sem', 'Zina']
const numArr = [10, 5, 2, 8, 6, 7, 1, 3]
numArr.sort()   //(8) [1, 10, 2, 3, 5, 6, 7, 8]  - сортирует лексически
numArr.sort((prev, next) => {
    //console.log(prev, next) // 10,1 ..2,10...3,2....
    return prev - next  
    // prev - стоит после
    // next - стоит до
    // если результат с '-' то меняются эл местами, если 0 или + то не меняются - это такой процесс сортировки 
})

console.log(numArr)//(8) [1, 2, 3, 5, 6, 7, 8, 10]

// сортировка юзеров по возрасту
const sortUsers = users.sort((prevUser, nextUser) => prevUser.age - nextUser.age)
console.log(sortUsers)


// эксперимент с for in, for of -- практически не используются, вместо них forEach 
const fredy = [
    {
        name: 'dave',
        age: 55
    },
    {
        name: 'Bony',
        age: 14
    },
    {
        name: 'Lada',
        age: 89
    },
]

for(let item in fredy){     // получим ключи или название полей обьекта
    console.log(item)
};

for(let item of fredy){     // получим значение полей
    console.log(item)
};

for(let r in [20,30,40,50,60]){
    console.log(r)              // получаем индексы элементов массива -- 0 1 2 3 4 5 
}
for(let r of [20,30,40,50,60]){
    console.log(r)              // получаем значения элементов массива -- 20, 30, 40, 50, 60 
}

// эксперимент с sort()

const xx = [26, 7, 6, 25, 30, 13]
const xxx = xx.sort((prev, next) =>{
    console.log(`prev - ${prev}. next - ${next}`)
    return prev - next
})

console.log(xxx)

// [10, 7, 6, 25, 16, 13] - получаем:
// prev - 7. next - 10
// prev - 6. next - 7
// prev - 25. next - 6
// prev - 16. next - 25
// prev - 13. next - 16
