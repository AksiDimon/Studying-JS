//209
//  long time for check the test.
function indexEqualsValue(a) {

for(let i = 0; i < a.length; i += 1) {
    if(a[i] === i) {
    return i
    }
}
return -1;
}
console.log(indexEqualsValue([-8,0,2,5])) //2




//210 
// function validParentheses(parenStr) {
//     if(parenStr.length === 0) {
//         return true
//     }
//     if(parenStr.startsWith(')')) {
//         return false
//     }
//     //   const left = '(';
//     //   const right = ')';
//     let accLeft = 0;
//     let accRight = 0;
//     for(let i = 0; i < parenStr.length; i += 1) { 
//         if(parenStr[i] === '(') {
//         accLeft += 1
//         }
//         if(parenStr[i] === ')') {
//         accRight += 1
//         }
//     }
//     if(accLeft === accRight) {
//         return true;
//     }
//     return false;
//     }


//   console.log(validParentheses("(()())()")) // true 
//   console.log( validParentheses("())(()")) //false


//210
function validParentheses(parenStr) {

    let countBracets = 0;
    for(let i = 0; i < parenStr.length; i += 1) {
        
        if(parenStr[i] === '(') {
            countBracets += 1;
        }
        
        if(parenStr[i] === ')') {
            countBracets -= 1;
        }
        if(countBracets < 0) {
            return false;
        }
    }
    console.log(countBracets)
    
    return countBracets === 0

    // if(countBracets === 0) {  // или вот такая запись; return  countBracets === 0
    //         return true
    //     }
    //     return false;
}

console.log(validParentheses("(()())()")) // true 
  console.log( validParentheses("())(()")) //false


  //212
// not solve this task.
function isDigit (char) {
if( char >= '0' && char <= '9') {
    return true
}
return false
}
//   function isSymbol (char) {
//     if(char === '+' || char === '-' || char === '*' || char === '/') {
//         return true
//     }
//     return false
//   }

function calculate(expression) {
const arr = expression.split(' ').reverse();

let workArr = [];
for(let i = 0; i < arr.length; i += 1) {
    console.log(arr[i])
    if(isDigit(arr[i]) || arr[i].startsWith('-') && arr[i].length > 1) {
        workArr.push(Number(arr[i]))
        console.log('workArr', workArr)
    }
    else {
        let a = workArr.pop();
        let b = workArr.pop();
        if(arr[i] === '+') {
            workArr.push(a + b)
        }
        if(arr[i] === '-') {
            workArr.push(a - b)
        }
        if(arr[i] === '*') {
            workArr.push(a * b)
        }
        if(arr[i] === '/') {
            workArr.push(a / b)
        }
        console.log('🤖', workArr)
    }
}
return workArr[0];
}
console.log(calculate('/ + 3 5 * 2 2')) // 2
// console.log(calculate('* + 2 2 3')) //12      2 + 2 * 3
// console.log(calculate('+ -5 5')) // 0;
  // (3 + 5) / (2 * 2) is / + 3 5 * 2 2.