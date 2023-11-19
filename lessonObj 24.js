//305 

function duplicateEncode(word){
    let obj = {};
    let result = '';
    const lowWord = word.toLowerCase();
    // for(const letter of lowWord) {
    //   if(letter in obj) {
    //     obj[letter] += 1
    //   } else {
    //     obj[letter] = 1
    //   }
    // }
    for(const letter of lowWord) {
      if(!(letter in obj)) {
        obj[letter] = 0
      }
      obj[letter] += 1
    }
    console.log('@@@',obj)
    for(const letter of word) {
     result += obj[letter] === 1 ? '(' : ')'; // в result плюсанем то что выдаст тернарный оператор, если он выдает true положим '(' и наоборот если false ')'
    }
    return result
  }


//   for(const letter of arr) {
//     if(letter in obj && obj[letter] === 1) {
//         result += '(';
//     } else {
//         result += ')'
//     }
// }
  console.log(duplicateEncode("Success")) //')())())'


// 306 
var isAnagram = function(test, original) {
    if(test.length !== original.length) {
      return false;
    }
    const lowTest = test.toLowerCase();
    const lowOriginal = original.toLowerCase();
    let obj = {};
    for(const letter of lowTest) {
      if(letter in obj) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
    for(const val of lowOriginal) {
      if(val in obj && obj[val] === 1) { 
        delete obj[val];
      } else {
        if(obj[val] > 1) { //почему если я здесь не записал вот эту часть условия if(val in obj && и оно сработало ? 
          obj[val] -= 1;
        }
      }
    }
    return Object.keys(obj).length === 0;
  };


  var isAnagram = function(test, original) {
    // if(test.length !== original.length) {
    //   return false;
    // }
    const lowTest = test.toLowerCase();
    const lowOriginal = original.toLowerCase();
    let obj = {};
    for(const letter of  lowTest) {
        if(!(letter in obj)) {
            obj[letter] = 0;
        }
        obj[letter] += 1;
    }
    for(const letter of lowOriginal) {
        if(!(letter in obj)) {
            obj[letter] = 0
        }
        obj[letter] -= 1;
    }
    // console.log(obj);
    console.log(Object.values(obj) );
    // const every = Object.values(obj).every(val => val === 0);
    // return every
    // return Object.value(obj) === 0;

    // for(const num of Object.values(obj)) {
    //     if(num !== 0) {
    //         return false;
    //     }
    // }
    // return true

    for(const key in obj) {
        if(obj[key] !== 0) {
            return false;
        }
    }
    return true;
  };

  // isAnagram("qqqqqss", "qqqwwwww") 

console.log(isAnagram("foefet", "toffee")) //true;
console.log(isAnagram("foefetr", "toffeee")) //false;
// console.log(isAnagram("Buckethead", "DeathCubeK")) //true
// console.log(isAnagram("ound", "round")) //false




// var isAnagram = function(test, original) {
//     console.log(test, original)
//    let obj = {};
//       let count = original.length;
//     console.log('👏',count)
//       const testLow = test.toLowerCase();
//       for(const letter of testLow) {
//         obj[letter] = letter;
//       }
//       const originalLower = original.toLowerCase()
//       for(const val of originalLower) {
//         count -= 1;
//         if(val in obj) {
//           delete obj[val]
//         }
//         console.log(count)
//       }
//     return count !== 0 && Object.keys(obj).length !== 0;
//   //     return Object.keys(obj).length === 0;







//307 
function arithmetic(a, b, operator){
    // let objOperator = {
    //     add: "+",
    //     subtract: -,
    //     multiply: *,
    //     divaide: /,
    // }
if(operator === "add") {
    return a + b
}
if(operator === "subtract") {
    return a - b;
}
if(operator === "multiply") {
    return a * b;
}
if(operator === 'divide') {
    return a / b;
}
  }

  console.log(arithmetic(1, 2, "add"));
  console.log(arithmetic(8, 2, "subtract"));
  console.log(arithmetic(5, 2, "multiply"));
  console.log(arithmetic(8, 2, "divide"));