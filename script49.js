// 49. Деструктуризация
const user  = {
    fname: 'Den',
    age: 25,
    lName: 'Shack',
    info: {
        skils: ['html', 'css'],
        work: 'MMM'
    }
}
//что бы добраться до значений
// const name = user.name
// const lname = user.lName

// при использовании деструктизациии
// const {fname, lName, age = 30} = user   // age по умолчанию = 30, мы не знаем или есть такое свойство
// console.log(fname, lName)   //Den Shack
// console.log(age)   //30 - значение по умолчанию

// const {fname: name1, lName: name2, age: years = 30} = user // меняем названия переменных
// console.log(name1, name2)   //Den Shack.    fname, lName, age - теперь нам недоступны под этими именами

//десктруризация вложенных обьектов
const {info:{work}} = user  //work свойство info
console.log(work)   //MMM

//деструкторизация массивов
const colors = ['green', 'red', 'yellow']
const [a1, a2, a3, b1= 'white'] = colors     // имена могут быть разными
console.log(a1, a2) //green red

const names = ['Ivan', 'Den', 'Anna']
const [, n2, n3] = names // первое имя не извлекаем

const der = ['derik', ['ser', 'zaz']]   //деструкторизация вложенных элементов
const [,[,s1]] = der
console.log(s1)     //zaz

const nameOst = ['Ivan', 'Den', 'Anna', 'Lora', 'Sliva']
const [nam1, ...otherNames] = nameOst
console.log(nam1)       //Ivan
console.log(otherNames)     //(4) ['Den', 'Anna', 'Lora', 'Sliva'] - остальная часть массива

// копирование массива
const [...newNames] = nameOst
console.log(newNames)  //(5) ['Ivan', 'Den', 'Anna', 'Lora', 'Sliva'] - копия nameOst - неглубокое
console.log(newNames === nameOst)  //false - это разные массивы
const newNames1 = [...nameOst]
console.log(newNames1)  //(5) ['Ivan', 'Den', 'Anna', 'Lora', 'Sliva'] - копия nameOst - неглубокое

// склейка массивов
const colorNames = [...colors, ...names]
console.log(colorNames) //(6) ['green', 'red', 'yellow', 'Ivan', 'Den', 'Anna']

//копирование обьекта
const newUser = {...user, age: 30}   //поверхностное копирование - вложенные передаются по ссылке
// происходит копирование обьекта, потом свойство age перезаписывается
console.log(newUser)

//смешанная деструкторизация
const {info:{
    skils:[html, css]
}} = user
console.log(html, css)  //html css

// деструктивизация в функциях
function fart({fname = '&', lName = '&', info: {skils: [h, c]} = {}} = {}){ //значение по умолчанию, потому что если не передать арг то ошибка
    console.log(fname, lName, h)           //Den Shack
    const [...arg] = arguments
    console.log(arg)
}
fart(user)

function aza(x,y, ...others){
    const [...arg] = arguments
    console.log(arg)    //(5) [5, 6, 1, 2, 3] - массив переданых аргументов
    console.log(others) //(3) [1, 2, 3] - остальная часть аргументов
}
aza(5,6,1,2,3)

const g = [1,2]
function doo(x,y){
    console.log(x+y) //3
}
doo(...g) //разложит элементы массива 




