// function findShort(s) {
//     const arr = s.split(' ');
//     const upper = arr.map(word => word[0].toUpperCase() + word.slice(1));
//     const result = upper.join(' ');
//     return result;
// }
// console.log(findShort('turns out random test cases are easier than writing out basic ones'));


//102 List Filterring.

function filter_list(l) {
    // const result = [];
    // for(const value of l) {
    //     if(typeof value === 'number') {
    //         result.push(value);
    //     }
    // }
    // return result;
    return l.filter(value => typeof value === 'number')
}
// 
  
  // console.log(filter_list([1, 'a', 'b', 0, 15]));



//103 BUILD a square.

function generateShape(integer) {
    const right = '+'.repeat(integer);
    console.log(right);
    // let result = [];
    // for (let i = 0; i < integer; i += 1) {
    //   result.push(right);
    // }
    const result = Array(integer).fill(right)
    const str = result.join('\n');
    console.log(str);
    return str;
  }
  
  // console.log(generateShape(8));




  //104 Vowel Count

  function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // let sum = 0
    // for(const letter of str) {
    //   if(vowels.includes(letter)) {
    //     sum += 1;
    //   }
    // }
    // return sum;
    const letters = str.split('');
    return letters
        .filter(letter => vowels.includes(letter))
        .length
  }

  console.log('🐥',getCount("abracadabraaaa"));
  


 
//105 PLAYING with digist.
//не смог пока решить, на 3 тесте выдает неправильный ответ.
function digPow(n, p){
    const strN = n.toString();
    const arrN = strN.split('');
     console.log(arrN);
    let result = 0
  for(const num of arrN) {
    result += num ** p;
    p += 1;
    console.log(result)
  }
    if(result % n === 0) {
      return result / n;
    }
    return -1;
  }



  //106 Smallest value of an array.


  function min(arr, toReturn) {
    const value = Math.min(...arr);
    if(toReturn === 'value') {
      return value
    }
    return arr.indexOf(value);
  }


console.log("=================================")
function sum (...rest) {
    console.log("rest", rest);
    console.log(...rest);
}
const numbers = [1,2,4,5,6,6];
console.log(sum(numbers, "abc"))
// /// Rest
// function sum(...rest) {  // rest
//     // rest === [1,2,3,4,5]
//     console.log(...rest)
//     // return a + b
// }

// const numbers = [1, 2, 3, 4, 5]
// console.log(sum(...numbers)) // spread



console.log("=================================")

  //107 ARRAY.diff

  function arrayDiff(a, b) {
    const numbers = a.filter(num => { 
        return !b.includes(num)
    })
    return numbers
  }

console.log(arrayDiff([1,2,3,4,5,6], [2,4,6,8,0])) // result [1,3,5]


//   function arrayDiff(a, b) { 
//     for(const num of a) {
//         if(b.includes(num)){
//         delete 
//         }
//        return a;
//     }
//   }

//   console.log(arrayDiff([1,2,2], [1])) // result [2,2]


// [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]

// [[1, 5, 4], ['b']]


isHomogeneous([1, 5, 4]) // true
isHomogeneous(["qwe", "yy", "y"]) // true
isHomogeneous(["qwe", 1, "y"]) // false
