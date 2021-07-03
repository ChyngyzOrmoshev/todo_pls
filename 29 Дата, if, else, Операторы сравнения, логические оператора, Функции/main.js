// Задание №1
let a = prompt("Введите значение для a");
let b = prompt("Введите значение для b");

function min(num1, num2) {
  if (num1 > num2) {
    alert("значение b меньше");
  } else {
    alert("значение a меньше");
  }
}
min(a, b);

// Задание №2

let c = prompt("Введите любое число");

if (c > 0) {
  alert(parseInt(c) + 1);
} else {
  alert(parseInt(c));
}

// Задание №3

let x = prompt("Введите длину периметра");
let y = prompt("Введите ширину периметра");

function perimeter(num3, num4) {
  alert(num3 * 2 + num4 * 2);
}

perimeter(x, y);

//Задание №4

let d = prompt("Введите первое число");
let f = prompt("Введите второе число");

function oper(num5, num6) {
  if (num5 > num6) {
    alert(parseInt(num5) + parseInt(num6));
  } else {
    alert(parseInt(num5) - parseInt(num6));
  }
}

oper(d, f);

console.log("Задача решена");
