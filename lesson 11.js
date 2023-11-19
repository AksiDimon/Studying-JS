// function isHappy (ticket) {
//     const str = ticket[0];
//     const lastNum = ticket[1];
//     const arr = str.slice('');
//     for(const word of str) {
//       if(word.charCodeAt(0) === lastNum) {
//         return true;
//       }
//     }
//     return false
//   }
//   console.log(isHappy(['ABC', 65]))
//   console.log(isHappy(['ABC', 67]))  // true
// console.log(isHappy(['ABC', 68]))  // false
  
//   function bingo(ticket, win){
//     let acc = 0;
//     for(let i = 0; i < ticket.length; i += 1) {
//       if(isHappy(ticket[i])) {
//         acc += 1;
//       }
//     }
//     if(acc >= win) {
//       return 'Winner!';
//     }
//     return 'Loser!';
//   }

//   console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))




  function rowWeights(array){
  }
//   console.log(rowWeights([50,60,70,80])) // [120,140]



  //113

  function scrollingText(text){
    let bigText = text.toUpperCase();

    // bigText === "QWERTY"

    // bigText += bigText[0]
    // bigText = bigText.slice(1);
    
    // // bigText === "WERTYQ"
    // console.log(">>>>", bigText)

    // // "QWERTY" →"WERTYQ"

    let result = []
    for(let i = 0; i < bigText.length; i += 1) {
        result.push(bigText);
        bigText += bigText[0];
        bigText = bigText.slice(1)
        
        // console.log('😿',bigText[i])
    }
    return result
    console.log(result);
}

console.log(scrollingText("qwerty"));
//["ABC","BCA","CAB"]




//114
function expandedForm(num) {
const str = num.toString();
const arr = str.split('');
let countZero = arr.length -1;
let result = [];
console.log(arr)
for(const num of arr) {
    result.push(num + '0'.repeat(countZero))
    countZero -= 1;
}
const filter = result.filter(num => !num.startsWith(0))
console.log('👏',result)
return filter.join(' + ');
}


console.log(expandedForm(7050046))
// 7458246
// 7000000 + 400000 + 50000 + 8000 + 200 + 40 + 6
// console.log(expandedForm(12)) //'10 + 2'