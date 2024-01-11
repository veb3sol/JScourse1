// Тернарный оператор.
let a = 1
let b = 0
a > 0 ? b = a : b +=2       //b = 1
let c = a > 0 ? b = a : b +=2       //b = 1, c = 1
b = a > 0 ? 2 : b + 10      //b = 2
b = a > 0 ? 2 : a > 5 ? 10 : 11     // сложные выражения могут формироваться до безконечности
console.log(`b = ${b}, c = ${c}`)

// Конструкция switch case
let color = 'yellow2'
switch(color){
    case 'yellow':
        console.log('yel')
        break
    case 'red':
        console.log('red')
        break
    default:
        console.log('def')
}

// на 2 условия одно действие
let color2 = 'yellow'
switch(color2){
    case 'yellow':
    case 'red':
        console.log('yellow or red')
        break
    default:
        console.log('def')
}