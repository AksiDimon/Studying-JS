// функция которая высчитывает возростание населения в городе.

function nbYear(p0, percent, aug, p) {
  const percents = percent / 100;
  let year = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * percents + aug);
    console.log(p0);
    year += 1;
  }
  return year;
}
// console.log(nbYear(1500000, 0, 10000, 2000000));

// PERFECT Number Verifier.

function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n / i; i += 1) {
    if (n % i === 0) {
      // console.log(i, n / i)
      sum += i;
      sum += n / i;
    }
  }
  
  // console.log(sum);
  
  return sum - n === n;
  
}


  // return x;
  // return x ** 2;
  // return x + y;
  // return arr;
  // return arr.map(x => x * 3);

  // x === 5
  // x ** 2 === y.length

  // x = 2 + 3
  // y = x === 3
// if (sum - n === n) {
//   return true;
// }
// return false;
//                             i
// 120 →  1   2   3   4   5    6   8   10  |  12   15  20   24   30  40 60 120
//      120  60  40  30  24   20  15   12  |  10    8   6    5    4   3  2   1
//                            n/i
//      ===========
//          226
const N = 120;
// const N = 1_000_000_000;
console.time(N)
console.log('N >>>', isPerfect(N));
console.timeEnd(N)


// SUM of Positive.
// const a = 8;

// a = 8;
// a -= 7;
// a++;


function positiveSum(arr) {
  let result = 0;
  for (const num of arr) {
    if (num > 0) {
      result += num;
    }
  }
  return result;
}
// console.log(positiveSum([2, 6, 9, 8, 6, 0, -5]));

// SHORTEST word.

function findShort(s) {
  const arrWords = s.split(' ');

  console.log(arrWords);
  // const lengths = [];
  // for(const word of arrWords ) {
  //   lengths.push(word.length)
  // }
  const lengths = arrWords.map(word => word.length)
  console.log(lengths);
  return Math.min(...lengths);

  // console.log(arrWords.map(word => word[0].toUpperCase() + word.slice(1)));
  // console.log(arrWords.map((word) => {
  //   return word[0].toUpperCase() + word.slice(1);
  // }));
  
  // console.log(arrWords.map(function (word){
  //   return word[0].toUpperCase() + word.slice(1);
  // }));
  
  // let min = arrWords[0];
  // for (let word of arrWords) {
  //   if (min.length > word.length) {
  //     min = word;
  //   }
  // }
  // return min.length;
}

console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);

//102 List Filterring.

function filter_list(l) {
  let result = [];
  for (let i = 0; i < l.length; i += 1) {
    if (typeof l[i] === 'number') {
      result.push(l[i]);
    }
    continue;
  }
  return result;
}

// console.log(filter_list([1, 'a', 'b', 0, 15]));

// 103 BUILD a square.

function generateShape(integer) {
  const right = '+'.repeat(integer);
  console.log(right);
  let result = [];
  for (let i = 0; i < integer; i += 1) {
    result.push(right);
  }
  const str = result.join('\n');
  console.log(str);
  return str;
}

// console.log(generateShape(8));
