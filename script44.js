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
        company: 'Tra'
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
users.forEach((user, i, arr) => {
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

// map - возращает массив из того что веращает колбек переданый в него
// const userName = users.map((user, i, arr) => user.name)
const userName = users.map((user, i, arr) => ({name: user.name, age: user.age})) // массив обьектов с опред полями
console.log(userName)  //(5) ['Luis', 'Ara', 'Fan', 'Trees', 'Ka'] - массив имен юзеров

// reduce - преобразовать массив в что то или посчитать что то
// reduce - 1 арг - колбэк, 2 арг - стартовое значение, если его нету, то это 1 эл массива
const totalBalance = users.reduce((acc, user, i, arr) =>{
    //console.log(acc, user)
    // return acc - тогда на каждой иттерации acc вернет 0
    return (acc += user.balans)     // на каждой итерр сумируется баланс юзеров
}, 0)                  // все арг можно не передавать. 0 - начальное значение acc
// acc - аккумулятор - хранится стартовое значение (0) и результат предыдущей иттерации
// ЕСЛИ ФУНКЦИЯ НИЧЕГО НЕ ВОЗРАЩАЕТ, ТО ОНА ВОЗРАЩАЕТ undefined, поэтому acc = 0 на первой иттерац, а потом на всех undefined (при условии что return нету)

// Создание обекта с массива с помощью reduce
const userObj = users.reduce((acc, user) => {
    acc[user._id] = user
    return acc
}, {}) 
console.log(userObj) // получаем обьект обьектов с ключами _id

// some
const isActiveUser = users.some((user) => user.isActive === true)
console.log(isActiveUser) //true - есть ли хоть один активный пользователь

// every
const everyUsersIsActive = users.every((user) => user.isActive === true )
console.log(everyUsersIsActive) // false - все ли пользователи активны

// find
const user = users.find(user => user.name === 'Ka')
console.log(user) // получим юзера с таким именем

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