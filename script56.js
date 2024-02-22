// 56. Разбор домашних заданий. Замыкание.
// Сделать такую функцию minus(5)(4) => 1

function minus(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
}

// minus(1)(2) - в консоле
console.log(minus(5)(4)); // 1
console.log(minus()()); // 0

// 2
function mult(n1) {
  return function (n2) {
    return (n1 *= n2);
  };
}

const mu = mult(2);
console.log(mu(3)); //6
console.log(mu(5)); //30
console.log(mu(2)); //60

// 3

const module = (function () {
  // самовызывающаяся функция
  let str = "";

  function setString(val = "") {
    //перевести вход парам в строку
    str = String(val);
    return val;
  }

  function getString() {
    // получить строку
    return str;
  }

  function getStrLength() {
    return str.length;
  }

  function reversStr() {
    return str
            .split("")              //вернет масив из строки - разбиты по пустой строке -- буквы в массиве
            .reverse()              // переворачиваем полученный массив
            .join("");              // собираем перевернутый массив в строку
  }

  return {                          // вернем все методы что бы они были доступны через точку
    setString,
    getString,
    getStrLength,
    reversStr,
  };
})();
