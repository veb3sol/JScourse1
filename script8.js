let value;
value = 5
console.log(typeof value)   //number
// typeof value  -- тип переменной
s = String(value)
s2 = value.toString()   //это метод преобразования в строку
s3 = (55).toString()    //если число то в дужках
console.log(s)
console.log(typeof s) //string

// boolean to string
b = String(true)
console.log(b)  //true

// Array to string
a = String([1,2,3])
console.log(a)    //1,2,3

// object to string
o = String({name: 'Denis'})
console.log(o)    //[object Object]

// при конкотенации со строкой получим строку
ss = 30 + ''          // неявное преобразование
console.log(typeof s) //string
console.log(ss) //string
ss1 = 30 + '' + 30
console.log(ss1) //3030   - это строка
ss2 = 30 -''
console.log(ss2) //30  - это число
console.log(typeof ss2) //number
// при + получаем строку, при - получаем число или NaN

vv = 30 + '' + undefined    //30undefined --- получим строку
vv = 30 * '5'       //150 - если это не + то получис число
vv = false + undefined // NaN  -- пытается преобразовать в число

// String to number
vv = Number('23') // 23 - число
vv = Number(false) // 0 - число
vv = Number(null) // 0 - число
vv = Number('privet') // NaN - не может быть преобразовано в число
vv = Number([1,2,3]) // NaN - не может быть преобразовано в число

vv = parseInt('200cdef')    // 200  -- выделит число, если перед числом нету символов
vv = parseFloat(' 21.35bhh')    // 21.35 -- для дробных чисел

// Boolean
vv = Boolean('as')  // true  -- любая непустая строка, или пробел
vv = Boolean('')  // false  -- пустая строка
vv = Boolean(-100)  // true  -- любое число ктоме 0
vv = Boolean(0)  // false  --  0
vv = Boolean(undefined)  // false  --  undefined -- переменная ничему не равна
vv = Boolean(null)  // false  --  null -- значение переменной неизвестно
vv = Boolean({})  // true  --  пустой обьект 
vv = Boolean([])  // true  --  пустой масив 

console.log(vv) 
console.log( typeof vv) 

