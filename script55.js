// 55. Разбор домашних заданий. Перебирающие методы массивов.
// 1
// на основе масива [1,2,3,5,8,9,10] сформировать новый массив
// каждый эл которого будет хранить инфу о числе и его четности
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arr = [1, 2, 3, 5, 8, 9, 10];

const newArr = arr.map((num) => {
  let isOdd = num % 2 ? true : false;

  return {
    digit: num,
    odd: isOdd,
  };
});

// сокращенный код
const newArr1 = arr.map((num) => ({ digit: num, odd : num%2 !== 0 }));
    
console.log(newArr);

// 2,3 - на использование метода врелисан????

// 4
// Дан массив обьектов, где каждый обьект содержит инфу о букве и месте ее положения в строке
// {буква: "a", позиция в предложении: 10}
// нужна функция которая соборет и вернет строку

const strArr = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 },
];

function getStringFromArr(arr){
    const copyArr = arr.slice() //если в slice ничего не передавать - вернет копию массива
    const sortedArr = copyArr.sort((prev, next) => prev.index - next.index)  // sort() - изменяет массив
    // console.log(sortedArr)  -- отсортированый по index массив
    const strFromArr = sortedArr.reduce((acc, current) => {
        return (acc += current.char)
    }, '')
    console.log(strFromArr)     //Happy New Year!
}

// сокращенный вариант
function getStringFromArr1(arr){
  const copyArr = arr
                  .slice()
                  .sort((prev, next) => prev.index - next.index)
                  .reduce((acc, current) => (acc += current.char), '') 
  
  console.log(copyArr)     //Happy New Year!
}

getStringFromArr(strArr)
getStringFromArr1(strArr)



// есть массив обьектов, надо отсортировать по цене и вывести товары, цена которых от мин до макс

const products = [
  {title:'prod1', price: 5.2},
  {title:'prod2', price: 0.18},
  {title:'prod3', price: 15},
  {title:'prod4', price: 25},
  {title:'prod5', price: 18},
  {title:'prod6', price: 10},
  {title:'prod7', price: 19},
  {title:'prod8', price: 63},
]

function filterok(arr, min, max){
  let res = arr.slice().sort((prev, next) => prev.price - next.price)
  // console.log(res)
  return res.filter(produkt => produkt.price >= min && produkt.price <= max)
}

console.log(filterok(products, 17, 20))