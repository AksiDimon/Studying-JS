// let a = [1, 2, 3, 4, 5];
// let b = [
//     [1,7,9],
//     [3,5,1],
//     [8,3,5],
// ];
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//   console.log(b[i]);
// }

// console.log(b.flat(3));

// //node /Users/dimaaksenov/Desktop/JavaScript/'youtube video'/'coding tests'/__tests__/'array Learn'/array.js

// const getName = function getName() {
//   return this.name;
// };

// const company1 = { name: 'Hexlet',  getName() {
//   return this.name; }};
// // Функция вызывается напрямую, она не является методом
// getName.call(company1); // "Hexlet"

// const company2 = { name: 'Hexlet Plus' };
// getName.call(company2); // "Hexlet Plus"

// class Cart {
//   constructor(name, price) {
//     this.cart = [];
//     this.name = name;
//     this.price = price;
//   }

//   addItem() {
//     return this.name;
//   }
// }

function maskify(cc) {
  // 1. если цифр меньше 4, оставить как есть
  if(cc.length < 4) {
    return cc;
  }
  
  // 2. повторяем # (с помощью repeat)

  const repeat = '#'.repeat(cc.length - 4)
  console.log(repeat);

  // 3. оставить открытыми 4779 → получить последние 4 цифры в виде переменной
  const add = cc.slice(-4)
  console.log(add);

  // 4. соединить
  // return `${repeat}${add}`;
  return repeat + add;
}



const maskedPhone = maskify('89655624779');
console.log("🔥", maskedPhone) // #######4779
console.log("💣", maskedPhone === '#######4779') // true


// function sum(a, b, c) {
//   console.log("a =", a)
//   console.log("b =", b)
//   console.log("c =", c)
// }

// console.log("123", 123);

// sum(1, 2, 3)

// sum(58965, 43, 2768)

function century(year) {
  // const result = Math.ceil(year / 100)
  // return result;
  
  // 1825 18.25 18 19
  return Math.ceil(year / 100);
}


function min(arr, toReturn) {
  const value = Math.min(...arr); // оператор ...rest раскрывет скобки в этой страке, для Math.min(), а дальше возвращает скобки.
  // ЕСЛИ Вызывать так Math.min(arr), то это вызвало бы ошибку, потому что функция Math.min() ожидает передачу отдельных аргументов, а не массива, заменя этому например вызывать по очереди каждый элеммент массива arr[0], arr[1], arr[2] итд.
  if (toReturn === 'value') {
    return value
  }
  return arr.indexOf(value) // idexOf высчитывает в каком месте массива находится минимальное значение.
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // console.log("👻", value)
}

// Write a function that can return the smallest value of an array or the index of that value.
console.log("🐸", min([4,2,3,4,1,6], 'value')) // 1
console.log("🐥", min([6,2,3,0,5,6], 'index')) // 3
console.log("🐥", min([6,2,3,8,5,6], 'index')) // 1


 const x = ["qw", "fr", "ehde", "kooi"];

// function f(a, b, c, d, e) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log("----------------")
// }

// f()
// f(1, 2)
// f(2, 4, 6, 8, 4)
// f(2, 4, 6, 8, 4, 47, 163, 99)
// f(6, 10, x)
// f(6, 10, ...x)
// f(6, 10, "qw", "fr", "ehde", "kooi")


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const aaaa = [7, 3, 9, "dima"];
// console.log("----", Math.min(...aaaa))
// console.log("----", Math.min(7, 3, 9, "dima"))

function abbrevName(name){
  let arr = name.split(' ') // ["asrdt", "uihioij"]
  // let result = []
  // for(let i = 0; i < arr.length; i += 1) {
    //   const run = arr[i].slice(0, 1)
    //   const run = arr[i][0]
    //   console.log("😈", arr[i]) // ???
    //   result.push(run.toUpperCase())
    // }
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    
  // let result = []
  // for(const word of arr) {
  //   // word === arr[i] === "asrdt"
  //   // run === word[0] === "a"
  //   const run = word[0]
  //   console.log("😈", word) // ???
  //   result.push(run.toUpperCase())
  // }
  // return result.join('.')

  const firstName = arr[0]
  const lastName = arr[1]

  console.log("🙄", firstName)
  console.log("🥸", lastName)

  return (firstName[0] + '.' + lastName[0]).toUpperCase()

}
console.log(
  abbrevName("asrdt uihioij")
);