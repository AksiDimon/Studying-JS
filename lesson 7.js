//108  Find the capitals

var capitals = function (word) {
// let result = [];
const arr = word.split('');
// console.log(arr);
// for(let i = 0; i < arr.length; i += 1) {
//     if(word[i].includes(word[i].toUpperCase())){
//          result.push(word[i]);
//     }
//    return result;
// }

return word.filter(letter => letter.toUpperCase())
};

console.log('👆🏼',capitals('CodEWaRs'));




//109
// если четное пропускаем если не четное то добавляем - перед каждой цифрой.

function insertDash(num) {
   let result = '';
   const str = num.toString();
   const arr = str.split('');
   for(const number of arr) {
    if(number % 2 !== 0) {
        result += '-' + number;
    }
   }
   return result;
}

// console.log(insertDash(454793));




//110
// Гамогенные, полностью одинаковые массивы должен найти, и положить в массив.

  // console.log("🙃", typeof value)
  // console.log("😱", typeof value === "number")
  // console.log("🔥", typeof array[0])

//   function gom (array) {
//     for(const value of array) {
//         console.log("value", value);
//         if( typeof value ===  'number' ) {

//         }else{
//             return false;
//         }
//     }
//     return true
// }


// function allElementsAreNumbers (array) {
//     for(const value of array) {
//         if( typeof value !==  'number' ) {
//             return false;
//         }
//     }

//     return true
// }

// console.log(allElementsAreTheSame([1, 5, 4, 'a', 3, 5])) // false
// console.log(allElementsAreTheSame([1, 5, 4, 3, 5])) // true
// console.log(allElementsAreTheSame(["qw", "t66", "uiii"])) // true

// console.log(allElementsAreTheSame(['b', 5, 4, 'a', 3, 5])) // false
// console.log(allElementsAreTheSame([5, 4, 3, 5,7,8,9,9,'e'])) // false
//  function dima (arr) {
//     let result = '';
//     for(let i = 0; i <= arr.length; i += 1) {
//         if (typeof arr[i] === 'number') {
//             result = true
//         }
//         result = false;
//     }
//     return result;
//  }

//  console.log('AAAAAA',dima([1, 5, 4, 3, 5]))





// const result1 = x === 5;
// if (result1) {
//     // ...
// }


// function foo(x) {
//     return x % 2 === 0;
// }

// const result2 = foo(3);
// if (result2) {
//     // ...
// } else {
    
// }

function allElementsAreTheSame (array) {
    const type = typeof array[0];
    return array.every(value => typeof value === type);
}

function filterHomogenous (array) {
    // const result = []
    
    // for(const value of array) {
    //     if (value.length !== 0 && allElementsAreTheSame(value)) {
    //         result.push(value);
    //     }
    // }
    // return result;

    return array.filter(value => value.length !== 0  && allElementsAreTheSame(value));
}


console.log(
    "🦖", filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])
)
// [[1, 5, 4], ['b']]





//111 


function bingo(ticket, win){

}

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))