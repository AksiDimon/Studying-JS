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

// console.log(isDigit("2")) // true
// console.log(isDigit("0")) // true

// console.log(isDigit("A")) // false
// console.log(isDigit("#")) // false
// console.log(isDigit("+"))// false
// console.log(isDigit(".")) // false


function isLetter(char) {
    if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        return true 
    }
    return false
    //         97             122
}

console.log(isLetter("A"))
console.log(isLetter("u"))
console.log(isLetter("["))
console.log(isLetter("1"))

function isAllowedChar(char) {
    if(char === ' ' || char === '.' || char === '\n') {
        return true;
    }
    return false;
}

console.log(isAllowedChar(".")) //true
console.log(isAllowedChar(" ")) //true
console.log(isAllowedChar("\n")) //true

function cleanStr (str) {
  const arr = str.split('');
  const filter = arr.filter(val => {
    return isDigit(val) || isLetter(val) || isAllowedChar(val);
  })
  return filter.join('');

}

function balance(book) {
    const clean = cleanStr(book);
  const arr = clean.split('\n');
  const filter = arr.filter(val => val !== '');
  console.log('👄',arr)
  let result = []
  result.push(`Original Balance ${filter[0]}`);
  let sumBilt = []
  let balance = filter[0] // после каждого цикла она меняется, хот вычисление и происходит в нутри цикла. При использовании после цикла она будет не изначального вида, а той с какой опирацией она работала.
  for(let i = 1; i < filter.length; i +=1) {
    // arr[i] === "125 Market 124.45"
    const cost = filter[i].split(' ');
    // result.push(cost.join(' '));
    console.log('dimon',cost)
    sumBilt.push(cost[2])

    const count = Number(balance - cost[2])
    balance -= cost[2];
    const pozition = `${cost.join(' ')} Balance ${count.toFixed(2)}`;
    result.push(pozition);
    
  }

  const arrNums = sumBilt.map(val => Number(val));
  const allSumBilt = arrNums.reduce((acc, val)=>{
    return acc + val;
  },0);
  console.log('👏', allSumBilt)
  const averagePrice = allSumBilt / arrNums.length ;
    console.log('👏',averagePrice)
    const totalExpense = `Total expense  ${allSumBilt.toFixed(2)}`; // toFixed превращает число в строку, и оставляет определенное количество знаков после запятой, указывать в ()
    const averageExpense = `Average expense  ${averagePrice.toFixed(2)}`; 
    result.push(totalExpense);
    result.push(averageExpense);
    console.log(result)
    return result.join('\n')
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
