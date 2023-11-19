//207 
function findEvenIndex(arr) {

for(let i = 0; i < arr.length; i += 1) {
    // let leftSide = 0; 
    // let rightSide = 0;
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1);
    // console.log(left, '--', right);
    const leftSide = left.reduce((acc, num) => acc + num ,0);
    const rightSide = right.reduce((acc, num) => acc + num ,0);

    console.log(leftSide, '~', rightSide)
    if(leftSide === rightSide) {
    return i
    }
}
    return -1;
}

const strings = ["qwer", "az", "tryytpr", "f"]; // 
console.log(
  strings.reduce((acc, str) => {
    console.log("acc", acc, "str", str);
     return acc + str.length;
     
  },0)
);
  
// console.log(findEvenIndex([1,2,3,4,3,2,1])) // index 3 
// console.log(findEvenIndex([1,100,50,-51,1,1])) // index 1
// console.log(findEvenIndex([1,2,3,4,5,6])) //index -1;
// console.log(findEvenIndex([20,10,30,10,10,15,35])) // index 3

  //208 
  function isDigit (char) {
    if(char >= '0' && char <= '9') {
        return true
    }
    return false
  }

  // https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/2560px-ASCII-Table-wide.svg.png
// console.log("A" <= "9") // 65  57
// console.log("A" >= "0") // 65  48

console.log(isDigit("2")) // true
console.log(isDigit("0")) // true

console.log(isDigit("A")) // false
console.log(isDigit("#")) // false
console.log(isDigit("+"))// false
console.log(isDigit(".")) // false


function isLetter(char) {

}

isLetter("A")
isLetter("u")

function isAllowedChar(char) {

}

isAllowedChar(".")
isAllowedChar(" ")

function cleanStr (str) {
  const arr = str.split('');
  const filter = arr.filter(val => {
  
  })
}

function balance(book) {
  const arr = book.split('\n');
  const balance = `Original_Balance${arr[0]}`;
  for(let i = 1; i < arr.length; i +=1) {
    // arr[i] === "125 Market 124.45"
    
  }
}
console.log(balance(`1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`))


//  "Original_Balance:_1000.00
//   125_Market_125.45_Balance_874.55
//   126_Hardware_34.95_Balance_839.60
//   127_Video_7.45_Balance_832.15
//   128_Book_14.32_Balance_817.83
//   129_Gasoline_16.10_Balance_801.73
//   Total_expense__198.27
//   Average_expense__39.65"


//209
//         // candles, debris
// function cake(x, y){
//     let result = 0;
//     let even = 0;
//     for(let i = 0; i < y.length; i += 1) {
//         console.log(y[i], y[i].charCodeAt(0));
//         even += 1;
//         if(i % 2 === 0) {
//             result += y[i].charCodeAt(0)
//         }
//         if(i % 2 !== 0) {
//             result += even;
//         }
//       console.log(result)
//     }
//     const lineFire = x / 100 * 70;
//   if(result > lineFire) {
//     return 'Fire!'
//   }
//   return 'That was close!'
//   }

//   console.log(cake(900, 'abcdef')) //'That was close!'
//   console.log(cake(927, 'gppifasle')) //'That was close!'
//   console.log(cake(670, 'vvhucykz'))  //'Fire!'
//   console.log(cake(662, 'ygwoodx'))  //'Fire!'



//209  complited task
function cake(x, y){

console.log(x, y)
let result = 0;
let even = 0
for(let i = 0; i < y.length; i += 1 ) {
    console.log(y[i] , y[i].charCodeAt(0))
    even += 1
    if(i % 2 === 0) {
    result += y[i].charCodeAt(0)
    }
    result += even
//     console.log(result)
}
const lineFire = Math.floor(x * 0.7);
if(result > lineFire) {
    return 'Fire!'
}
return 'That was close!'
}


  //210 
// Soo long time for check the test.
  function indexEqualsValue(a) {
    for(let i = 0; i < a.length; i += 1) {
      if(a[i] === i) {
        return i
      }
    }
    return -1;
  }



  //211 
  function validParentheses(parenStr) {
    if(parenStr.length === 0) {
      return true
    }
      const arr = parenStr.split('');;
      let stock = [];
      for(const s of arr) {
        if(s === '(') {
          stock.push(s)
        }
        if(s === ')') {
          stock.pop(s)
        }
      }
  }


//   console.log(validParentheses("(()())()")) // true 
//   console.log( validParentheses("())(()")) //false