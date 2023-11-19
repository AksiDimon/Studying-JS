function hexColour(c) {
    if (c < 256) {
      return Math.abs(c).toString(16);
    }
    return 0;
  }
  
  console.log(hexColour(233));
  // Expected output: "e9"
  
  console.log(hexColour('11'));
  // Expected output: "b"
  
//   If you can't sleep, just count sheep!!
//   Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    if(num === 0){
      return '';
    }
    let result = '';
    const word = ' sheep...';
    for( let i = 1; i <= num; i +=1) {
        const fusion = i + word
        result += fusion
    }
    return result;
  }

  console.log(countSheep(3))
  console.log('-------')

  // Reversed Strings
  function solution(str){
    let result = '';
    // for(let i = 0; i < str.length; i += 1) {
    //     result = str[i] + result;
    // }
    for(let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i]
    }
    return result;
  };

  const arr = '0123456789qwertyuiopasdfghjklzxcvbnm';

  for(let i = 1; i < arr.length; i *= 2) {
    console.log(arr[i]);
  }
  // i = 1
  // 1 < 36 → arr[1]
  // i = 2
  // 2 < 36 → arr[2]
  // i = 4
  // 4 < 36 → arr[4]
  // i = 8
  // 8 < 36 → arr[8]
  // i = 16
  // 16 < 36 → arr[16]
  // i = 32
  // 32 < 36 → arr[32]
  // i = 64
  // 63 < 36 → STOP

  // for(let i = 3; i ** 2 < arr.length; i += 1) {
  //   console.log(arr[i]);
  // }
  
  // let i = 3
  // for(; i ** 2 < arr.length;) {
  //   console.log(arr[i]);
  //   i += 1
  // }

  let i = 3
  while(i ** 2 < arr.length) {
    console.log(arr[i]);
    i += 1
  }

  console.log("i =", i); // 6

  // i = 3
  // 9 < 36 → arr[3]

  // i = 4
  // 16 < 36 → arr[4]

  // i = 5
  // 25 < 36 → arr[5]

  // i = 6
  // 36 < 36 → STOP



  //                    01234
  console.log(solution('world'))

  //     _____
  // "0123456789".slice(3, 8) === "34567"

  const removeChare = (str) => {
    // return str.slice(1, str.length - 1)
    return str.slice(1, -1)
  }

  console.log(removeChare('eloquent'));

  function createPhoneNumber(numbers){
    const str = numbers.join(''); //"1234567890"
    const first = str.slice(0, 3);
    const second = str.slice(3, 6);
    const fird = str.slice(6)
    console.log("first", first);
    console.log('second',second);
    console.log('fird', fird);
    return `(${first}) ${second}-${fird}`
  // const secondPart = `${numbers[4]},`

  }

  // firstPart === "123"
  // secondPart === "456"

//   "(123) 456-7890"
//     ↑↑↑  ↑↑↑ ↑↑↑↑
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

  // args_count(1, 2, 3) -> 3
  const args_count = (...args) => {
    console.log("args", ...args);
  }

  args_count(1, 2, 3)

  const args_count1 = (...args) => {
    console.log("args1", args);
  }
  args_count1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "qwe", [1,1,1])
