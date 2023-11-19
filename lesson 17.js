// 205
function formatWords(words){
  if(words === null) {
    return ''
  }
  const cleanArr = words.filter(val => val !== null && val !== '');
  if(cleanArr.length === 0) {
    return '';
  }
  if(cleanArr.length === 1) {
    return cleanArr[0];
  }
  const preLast = cleanArr.at(-2);
  const last = cleanArr.at(-1)
  
  const longArr = cleanArr.slice(0, -2);
  longArr.push(preLast + ' and ' + last);
  return longArr.join(', ')
}


console.log(formatWords(['one', 'two', 'three', 'four', 'five', 'six', 'seven'])) // 'one, two, three and four'
        console.log(formatWords(['one', 'two', ''])) // 'one and two'
        console.log(formatWords(['one', ''])) // 'one'
        console.log(formatWords(null)) // ''
        console.log(formatWords([])) // ''


        //206 
function deleteDigit(n) {
  const arr = n.toString().split('');
  const AllNums = [];
  for(let i = 0; i < arr.length; i += 1) {
    const left = arr.slice(0,i);
    const right = arr.slice(i + 1);
    const newNumber = left.concat(right);
    const strNums = newNumber.join('');
    console.log('🤖', strNums);
    AllNums.push(strNums);
    console.log(AllNums)
  }
  return Math.max(...AllNums);
  // 19352  1932
  //    ↑
}
console.log(deleteDigit(19352))




//  ↓
// 19352
// 1 352  →  1352

// [9352, 1352, 1952, 1932, 1935] 


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

console.log(findEvenIndex([1,2,3,4,3,2,1])) // index 3 
console.log(findEvenIndex([1,100,50,-51,1,1])) // index 1
console.log(findEvenIndex([1,2,3,4,5,6])) //index -1;
console.log(findEvenIndex([20,10,30,10,10,15,35])) // index 3
