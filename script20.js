// Циклы
// while, do while, for, for of, for in

let i = 0
while(i <= 10){     // вывод чисел от 0 до 10
    console.log(i)
    i++
}

let x = 0
while(x++ <= 5){     // увеличение итератора можно указывать в условии
    console.log(x)      // вывело до 6 включительно, но без 0, увеличение на след строке
}

// на уменьшение до 0
let d = 15
while(d--){     // от 14 до 0
    console.log(d)      // когда в условии 1, то выведится 0
}

// do while - выполнение действия, а потом проверка условия
let h = 4
do{
    console.log(h)      // от 4 до 0 включительно
} while(h-- > 0)

// for
for(let t = 0; t <= 10; t++){       // от 0 до 10 включительно
    console.log(t)
}

let str = 'Hello'
let res = ''
for(let e = 0; e < str.length; e++){       // вывод букв по очереди
    console.log(str[e])
    res += str[e] + '!'
}
console.log(res)    //H!e!l!l!o!

let col = ['astra', 'darno', 'davka']
for(let q = 0; q < col.length; q++){
    console.log(col[q])
    console.log(col[q].toUpperCase())
}

// continue -- пропускаем иттерацию
for(let c = 0; c <= 10; c++){
    if(c === 5){        //5 - будет пропущена 
        continue                // break - останавливает цикл       
    }
    console.log(c)
}

// перебор масива обьектов
const users = [
    {
        name: 'Den',
        age: 15
    },
    {
        name: 'Reno',
        age: 30
    },{
        name: 'Gara',
        age: 23
    },
    {
        name: 'Dora',
        age: 56
    },
]

for(let j = 0; j < users.length; j++){
    console.log(users[j].name)      // выввод имени обьекта
    console.log(users[j].age)      // выввод возраста обьекта

}

// for in -- доступ до ключей(полей) обьекта
const user = {
    name : 'Mark',
    age: 20
}
for(let key in user){       // key - поле обьекта
    console.log(key)
    console.log(user[key])
}

// for of -- для получения элементов массива
for(let value of users){        // элемент массива
    console.log(value)
}