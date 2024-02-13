// 53. Разбор домашних заданий. Условия, циклы, функции.
// 1
let value = 'hidden'
if(value === 'hidden'){
    value = 'visible'
} else {
    value = 'hidden'
}
// 1.2
value = value === 'hidden' ? 'visible' : 'hidden'
//2
let num = -2
if(num === 0 ){
    num = 1
} else if(num < 0){
    num = 'less'
} else if(num > 0){
    num *=10
}

//3
let cars = {name: 'Lexus', age: 10, create: 2008, needRepaire: false}
if(cars.age > 5){
    console.log('Need Repaire!')
    cars.needRepaire = true
} else {
    cars.needRepaire = false
}

//4
let item = {name: 'Intel', price: '120$', discount: 'hhh15%'}
// если есть поле discount и в нем есть значение то в обьекте создать поле priceWithDiscount
// и записать туда цену с учетом скидки и вывести ее в консоль
// особенность что все поля которые есть -- строки

// if('discount' in item){          -- проверка есть ли такое поле в item 
//     console.log('5555')          -- но если оно faalse - то и вывода не будет
// }

// if(item[discount])  -- true если свойство есть и если оно имеет значение 

let price = parseFloat(item.price)
let discount = parseFloat(item.discount)
// let isVal = typeof price === 'number' && typeof discount === 'number'  -- будет true, потому что NaN - число
let isValid = !isNaN(price) && !isNaN(discount)
if(isValid){
    item.priceWithDiscount = price*(100 - discount)/100
    console.log(item.priceWithDiscount)
} else {
    console.log(price)
}

//5
let product = {name: "Яблоко", price: "15$"}
let min = 10 //минимальная цена
let max = 20 // максимальная цена
// если цена яблока между min max -- вывести назвоние товара, иначе вывести что товаров не найдено

let pr = parseFloat(product.price)
let validCena = !isNaN(pr)
if(validCena){
    if(pr >= min && pr <= max){
        console.log(product.name)
    } else {
        console.log('Товара не найдено!')
    }
}

// Цыклы
// 1
// На основе стоки "i am in the easycode" сделать новую строку 
// первые буквы каждого слова - верх регистр
const str = 'i am in the easycode'
let newStr = ''
for (let i = 0; i < str.length; i++) {
   if(str[i - 1] === ' ' || i === 0){
    newStr += str[i].toUpperCase()
   } else {
    newStr += str[i]
   }  
}
console.log(newStr) //I Am In The Easycode

// 4 на основе строки JavaScript is a pretty good language - новую строку где каждое слово начинается  с большой
// а пробелы удалены
let s1 = "JavaScript is a pretty good language"
let s2 = ''
for(let i = 0; i < s1.length; i++){
    if(s1[i-1] === ' ' && s1[i] !== " " && i === 0 ){
        s2 += s1[i]
    } else if(s1[i] !== " "){
        s2 += s1[i]
    }
}
console.log(s2)

// эксперимент - перебор масива с конца 
const bn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let g = 15
for(; g-- ;){   //for(;  ;g--)  -- бесконечный цикл
    console.log(bn[g])      // вывод от 15 до 1 в обратном порядке
}



//2 (6)
//Перебрать обьект и если значение в свойстве строка - переписать ее в верхнем регистре
// использовать for in (получаем ключи)
let list = {
    name: 'denis',
    work: 'koder',
    age: 26,
}

for(let k in list){
    if(typeof list[k] === 'string'){
        list[k] = list[k].toUpperCase();        //{name: 'DENIS', work: 'KODER', age: 26}
    }
}

// 34min

//3 (2)
// Дана строка "tseb eht ma i". сделать строку - перевертышь
let stroka = "tseb eht ma i"
let newStroka = ''
for(let y = stroka.length - 1; y >=0; y--){
    newStroka += stroka[y]
}
console.log(newStroka)  //i am the best

// 4 (3)
// вычислить факториал числа 10
const aa = 10
let factaa = 0
for(let ii = 1; ii <= aa; ii++){
    if(ii === 1){
        factaa = ii
    } else {
        factaa *= ii
    }
}
console.log(factaa)    //3628800

//5 (4)
// есть строка 'JavaScript is a pretty good language'
// новая строка - каждое слово с большей, пробелов нету

const sv = 'javaScript is a pretty good language'
let rezsv = ''
for(let t = 0; t < sv.length; t++){
    if(t === 0 || sv[t-1] === ' '){
       rezsv += sv[t].toUpperCase()
    } else{
        if(sv[t] !== ' '){
            rezsv += sv[t] 
        }
    }   
}
console.log(rezsv)      //JavaScriptIsAPrettyGoodLanguage

// 6 (5)
// Найти все нечетные числа в масиве от 1 до 15 и вывести
const m15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let m of m15){
    if(m%2){
        console.log(m)
    }
}

// ФУНКЦИИ
// 1 (1)
// Создать функцию multiply, клтлрая будет принимать любое количество чисел и возращать их произведение
// типа multiply(1,2,3) = 6  (1*2*3)
// если аргументов нету -- вернуть 0

function multiply(){    // так как мы не знаем сколько будет аргументов, то не указываем их
    if(!arguments.length) return 0
    let rezmult = 1     //промеж рез = 1 , что бы множить не на 0
    // находим аргументы в arguments, и перебираем 
    for(let i3 = 0; i3 < arguments.length; i3++){
        if(!isNaN(arguments[i3])){         //если элемент - число, то проводим перемножение
            rezmult *= arguments[i3]
        }
        
    }
    return rezmult
}
console.log(multiply(2, "ssss", 5))

// 2 (4)
// Создать функцию угадай число, она принимает число от 1 до 10(проверка обязательно)
// Генерирует число рандомное от 1 до 10 и сравнивает с переданым
// если числа совпали - Вы выиграли, если нет - Вы не угадали, ваше число 8 а выпало число 5 - например

function checkNumber (num){
    if(num < 1 || num > 10){
        console.log('число должно быть от 1 до 10')
        return
    }
    const rand = Math.ceil(Math.random()*10) // округляем в больше сторону рандомное число
    console.log(rand)

    if(rand === num){
        console.log(`Победа, выпало число ${rand}`)
    } else {
        console.log(`Вы проиграли, выпало ${rand}, а Вы загадали ${num}`)
    }
}

checkNumber(7)

// 3 (7)
// Создать функцию которая принимает произвольное число массивов
// и удаляет первый элемент а возращает массив из оставшихся значений
// CColl([1,2,3], ['a', 'b', 'c'])  => [[2,3], ['b', 'c']]

function CColl(){
    let rez2 = []
    for(let i = 0; i < arguments.length; i++){
        arguments[i].shift()        // из мас удаляет 1 элемент и возращает то что удалил
       // console.log(arguments[i])     -- массив остается без 1 элемента
        rez2.push(arguments[i])     // добавляем массив в массив результата
    }
    return rez2
}

//CColl([2,3,4], [56,44,77], [8,9])
// [[3,4], [44,77], [9]]

console.log(CColl([2,3,4], [56,44,77], [8,9]))

// 4 (8)
//Создать функцию которая принимает массив пользователей, поле на которое хочу проверить
// и значение на которое хочу проверить
// Проверять или все аргументы переданы
// Вернуть новый массив с пользователями которые соответствуют указаным параметрам

// есть массив пользовактелей
const users = [
    {
        name: 'Jon',
        age: 25,
        gender: 'm'
    }, 
    {
        name: 'Poll',
        age: 56,
        gender: 'm'
    }, 
    {
        name: 'Anna',
        age: 45,
        gender: 'w'
    }, 
    {
        name: 'Liza',
        age: 77,
        gender: 'w'
    }
]

function userFilter(arr, key, value){
let rez4 = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i][key] === value){
//         rez4.push(arr[i])
//     }
// }

// или используя for of
for(item of arr){
    if(item[key] === value){
        rez4.push(item)
    }
}

return rez4
}

console.log(userFilter(users, 'gender', 'm')) 



// 5 (5)
// Создать функцию, которая принимает число n 
// возращает масив, заполненный числами от 1 до n
// getArray(10)   => [1,2,3,4,5,6,7,8,9,10]

function getArr(num){
    let rezGetArr = []
    for(let i5 = 1; i5 <= num; i5++ ){
        rezGetArr.push(i5)
    }
    return rezGetArr
}

console.log(getArr(8))

// 6 (6)
// Создать функцию, которая принимает массив, а возращает новый массив
// с дублироваными элементами входного массива
// doubleArray([1,2,3])  => [1,2,3,1,2,3]

function doubleArr(arr){
    const arrl = arr.length
    for(let i6 = 0; i6 < arrl; i6++){
        arr[i6 + arrl] = arr[i6]
    }
    return arr
}

console.log(doubleArr([2,3,4,5]))

// 2 3 - задания, которые остались

// 7 (2)
// сОЗДАТЬ ФУНКЦИЮ, КОТОРАЯ ПРИНИМАЕТ СТРОКУ И ВОЗРАЩАЕТ СТРОКУ-перевертыша

function perevert(str0){
    let str1 = ''
    for(let i7 = str0.length-1; i7 >= 0; i7--){
        str1 += str0[i7]
    }
    
    return str1
}

console.log(perevert('asd'))

// 8 (3)
// Создать функцию , которая принимает строку, 
// вернет строку где элементы разделены пробелами, а буквы в юникод-значении символа

function uniCodik(str){
        let str2 = ''
        for(let i8 = 0; i8 < str.length; i8++){
            str2 += str.charCodeAt(i8)
            str2 += ' '
        }
        return str2
}
console.log(uniCodik('wera'))   //119 101 114 97 
