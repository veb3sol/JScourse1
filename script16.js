// Логические операторы, if statement
let value

value = 2 >= 2  //true
value = 1 == "1"    //true
value = 1 == true    //true
value = 1 === '1'    //false
value = 1 != '1'    //false
value = 1 !== '1'    //true
value = 'a' > 'a'    //false - по юникоду они равны
value = 'a' > 'A'    //true - по юникоду число кода маленькой больше
value = 'as' > 'a'    //true - у первого больше символов
value = "a".charCodeAt()    //97 - код символа

value = 10
if(value !== 10){
    console.log('value: 10')        //value: 10
} else {
    console.log('else')
}

if(value){
    console.log('есть такая переменная и она чему то равна', value)
} else {
    console.log('нету такой переменной или она равна пустой строке или 0')
}

value = null
console.log(!value)     // true
console.log(!!value)     // false

if(!value){
    console.log('нету такой переменной или она null, NaN, false, пустая строка, 0')
}

value = []  // пустой массив
if(value.length){
    console.log('это непустой масив')
} else {
    console.log('это пустой массив')
}

// проверка является ли массивом
if(Array.isArray(value)){
    console.log('is Array!')
}else{
    console.log('is not Array')
}

value = {
    city: 'Kiev'
}
if(value.city){
    console.log('есть такое свойство')
}else {
    console.log('нету такого свойства')
}

if(value.hasOwnProperty('city')){       // если null - сработает
    console.log('есть такое свойство')
}else {
    console.log('нету такого свойства')
}

// ||  &&

value = 1 || 0  //1 - первую попавшуюся правду
value = 0 || 0 || 1  //1 - первую попавшуюся правду
value = 0 || 0 || null  //null - или последнюю неправду



console.log(value)

let age = 25
if(age < 20 || age > 40){
    console.log('возраст не входит в диапазон')
} else {
    console.log('возраст входит в диапазон')
}

let serverNickName = ''
let nickName = serverNickName || 'default nickname'
//если сервер вернул имя, то оно выводится, если нет - то дефолтное имя выводится
console.log(nickName)

let der = 1 && 0 && 3   // 0, если нету фолса - последняя правда

value = 10
if(value < 10){
    console.log('<')
} else if(value>45) {
    console.log('....')
}else{
    console.log('....')
}