// Number
const n1 = 10
const n2 = 20
let value

console.log(typeof value) //undefined - если значение еще не назначено

// +-*/ %
value = n1 + n2
value = value + 100
value +=100
// % -- остаток от деления
value = 4 % 2   //0
value = 5 % 2   //1

// увеличение или уменьшение на 1
value++ // изменения на следующей строке
value--
++value // изменения вступят в силу на этой уже строке
--value

// Неточные вычисления
value = 0.6 + 0.7   //1.2999999999999998
value = value.toFixed(2) // 1.30  -- округление до 2 знаков после запитой, получим строку
value = +value      // способ из строки сделать число
value = parseFloat(value)       // 2 способ из строки сделать число
value = (0.6*10 + 0.7*10)/10    // 1.3

// Math обьект
value = Math        //все методы обьекта Math
value = Math.PI        //3.141592653589793
value = Math.random()        //рандомное число от 0 до 1
value = Math.round(2.4)        //2 - округление как в математике
value = Math.ceil(2.1)        //3 - округление в большую сторону
value = Math.floor(2.9)        //2 - округление в меньшую сторону
value = Math.min(5,9,8,7,1,4)        //1 - минимальное число
value = Math.max(5,9,8,7,1,4)        //9 - максимальное число

value = Math.floor(Math.random()*10 + 1) // рандомное число от 0 до 10 включительно

const ar = ["red", "yellow", "pink", "white", "blue", "green"] 
value = ar[Math.floor(Math.random()*ar.length)] // рандомный цыет с массива

console.log(value)
console.log( typeof value)
