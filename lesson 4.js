const arrNum = [1,6,4,6,8,4,7,8];
const name = ['dima','asya','tanya','andrey']
console.log(...arrNum)
let arr = new Array('bunch', 'of', 'poo','today')
console.log(...arr);

  // Leaps Years
  function isLeaps_Year(year) {

    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

    // return (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year % 400 === 0);


    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    // return year % 4 === 0 && year % 100 !== 0 && year % 400 === 0;
}
 console.log(isLeaps_Year('---',2021))



//  function isLeapYear(year) {
//   if (year % 4 === 0 ) {
//    return true
//  } 
// //  ...
// }

 // 300
 function isLeapYear(year) {
   if (year % 400 === 0 ) {
    return true
  } 
    if (year % 100 === 0) {
      return false;
    }
    if(year % 4 === 0) {
      return true;
    } 
    return false;
  }


  // JUST count Sheep;
  var countSheep = function (num){
    let result = '';
    for(let i = 1; i <= num; i += 1) {
      result += i + ' sheep...';
    }
    return result;
  }
  console.log(countSheep(5))

  // GROWTH of a Population;
  function nbYear(p0, percent, aug, p) {
    console.log(p0, percent, aug, p)
    const percents = percent / 100;
    let years = 0;

    while(p0 < p) {
      // 1000 + 1000 × 5% + 100 === 1000 + 150 → 1150
      // 1150 + 1150 × 5% + 100 === 1150 + 157 → 1307

        p0 = Math.floor(p0 + p0 * percents + aug);
        years += 1;
        // p0 += p0 * percents + aug;
        console.log("🗓️", p0);
        
        
    }
    return years;
  };

  // console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 0, 10000, 2000000))
console.log(nbYear(1000, 2, 50, 1214));

// for( let i = 0; i <= num; i += 1) {
//     if (num % i === 0) {
        
//     }
// }
// 