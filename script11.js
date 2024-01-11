// Строки
const fname = 'Den'
const lname = 'Dior'
const age = 25
const str = 'Привет кардан'
let value
value = fname + lname   // конкотинация строк
value = fname + " " +lname   // конкотинация строк
value += ' Мне лет - ' + age

value = fname.length//3 - длина строки
value = fname[1]    //e - 1 элемент по индексу
value = lname[lname.length - 1]     //r - последний символ строки

// ИСХОДНАЯ СТРОКА НЕ ИЗМЕНЯЕТСЯ

value = lname.toLowerCase()     //dior - все символи в нижний регистр
value = lname.toUpperCase()     //DIOR -- все символы в нижний регистр
value = fname.concat(' ', lname, ' ', "privet")     //Den Dior privet - конкатенация
value = lname.indexOf('n')  // -1  -- нету такого символа в строке
value = lname.indexOf('o')  // 2  -- символ находится под 2 индексом в строке (1 вхождение)
value = lname.indexOf('o', 2)  // искать со второго символа
value = lname.lastIndexOf('r') // начинает искать с конца, индексы сохраняются
value = lname.includes('o')     // true  -- есть такая подстрока в строке, ЧУСТВ К РЕГИСТРУ
value = str.slice(0, 6) // Привет - строка с 0 по 6 символ, конечный индекс не учитывается
value = str.slice(6) // кардан - строка с 6 символа
value = str.slice(0, -3) // Привет кар - строка до 3 сзади символа
value = str.replace('Привет', 'Пока') // Пока кардан - замена что на что

console.log(value) 