// 48. Методы объектов про которые часто забывают

// копирование обьекта --- неглубокое (поверхностное) - глубокое
let obj1 = {
    name: 'Den',
    info: {
        skills: ['html', 'css']
    }
}

let newObj = obj1   //конирования не произошло, это ссылание на один обьект
console.log(newObj === obj1) // true - потому что это ссылки на один и тот же обьект

let newObj1 = Object.assign({}, obj1)
// {} - начальный обьект, в который забросится obj1 и это присвоится в newObj1
console.log(newObj1) // получим такой же обьект
console.log(newObj1 === obj1) // false - это два разных обьекта

let obj2 = {
    age: 30
}

let objRes = Object.assign({}, obj1, obj2)
console.log(objRes)     // обьект со свойствами из двух других обьектов

let objRes2 = Object.assign(obj1, obj2)     // таргетом будет например obj1
// в этом случае obj1 тоже получит свойства obj2
console.log(objRes2 == obj1)     // true -ссылка на один обьект потому что obj1 - как таргет
// если есть одинаковые свойства то они пернзапишутся
// Object.assign -- поверхностное копирование производится - вложенные обьекты копируются по ссылке
let objRes3 = Object.assign({}, obj1)
console.log(objRes3.info === obj1.info) // true - вложеные обьекты копируются по ссылке

console.log(JSON.stringify(obj1))   // строка - {"name":"Den","info":{"skills":["html","css"]},"age":30}

// для того что бы сделать глубокое копирование с помощью JSON
// тот обьект который мы хотим копировать надо перегнать в JSON формат
let objJSON = JSON.stringify(obj1)
console.log(objJSON)
newObj2 = JSON.parse(objJSON)
console.log(newObj2.info === obj1.info) //false - это разные обьекты, глуб копир произведено

let keys = Object.keys(obj1)    // вернет массив свойств обьекта
console.log(keys)

let vel = Object.values(obj1)  // массив со занчениями каждого свойства
console.log(vel)

let entries = Object.entries(obj1)  // массив массивов, в каждом 2 элемента (ключ, значение)
console.log(entries)

let fe = Object.fromEntries([['a', 'fara'], ['b', 'papa'], ['c', 'mama']])
console.log(fe)  //{a: 'fara', b: 'papa', c: 'mama'} -- обьект где ключи это первые знвчения в массивах, а значения - вторые значения в массивах


