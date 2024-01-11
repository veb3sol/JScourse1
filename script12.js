// Шаблонные строки
const fname = 'Den'
const lname = 'Dior'
const age = 25
let str

str = `
    <ul>
        <li>Имя - ${fname}</li>
        <li>Фамилия - ${lname}</li>
        <li>Возраст - ${age}</li>
        <li>Случайное число - ${Math.random()}</li>
    </ul>
`
document.body.innerHTML = str   // вывод на страничке в боди