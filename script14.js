// Введение в объекты
const user = {
    fname: 'Denis',
    age: 30,
    isAdmin: true,
    'user-adress': {    
        city: 'Kiev',
        ulica: 'Evropian'
    },
    skills: ['html', 'css', 'js']
};
// названия ключей в кавычках - те которые по написанию сложные, не одним словом
let prop = 'skills'

let value = user.fname      //Denis - специфические названия полей нереально получить через точку
value = user['user-adress']     //{city: 'Kiev', ulica: 'Evropian'}
value = user['user-adress'].city     //Kiev
value = user['user-adress']['ulica']     //Evropian
value = user[prop][0]     //html

user.fname = 'Derik'    //перезаписали значение
value = user.fname  //Derik

user.info = "user info" // если такого поля в обьекте нету, то оно создается
user["user-adress"].city = 'Kiev'       //перезаписали вложенный обьект
user["user-adress"].cantry = 'Ukraine'       //создали свойство во вложенный обьект

// user.retro.sop = 'sop' //ошибка - невозможно добавить свойство к несуществующему свойству


console.log(value)
console.log(user)
