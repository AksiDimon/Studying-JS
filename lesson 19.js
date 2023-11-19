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





// 'Original Balance 1000.00\n125 Market 125.45 Balance 874.55\n126 Hardware 34.95 Balance 839.60\n127 Video 7.45 Balance 832.15\n128 Book 14.32 Balance 817.83\n129 Gasoline 16.10 Balance 801.73\nTotal expense  198.27\nAverage expense  39.65'
// 'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'



// 'Original Balance 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense 198.27\r\nAverage expense 39.65' to equal 
// 'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'



// 'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense 198.27\r\nAverage expense 39.65' to equal 
// 'Original Balance: 1000.00\r\n125 Market 125.45 Balance 874.55\r\n126 Hardware 34.95 Balance 839.60\r\n127 Video 7.45 Balance 832.15\r\n128 Book 14.32 Balance 817.83\r\n129 Gasoline 16.10 Balance 801.73\r\nTotal expense  198.27\r\nAverage expense  39.65'



// 'Original Balance: 1233.00\r\n123 Flowers 93.5 Balance 1139.50\r\n127 Meat 120.90 Balance 1018.60\r\n120 Picture 34.00 Balance 984.60\r\n124 Gasoline 11.00 Balance 973.60\r\n123 Photos 71.4 Balance 902.20\r\n122 Picture 93.5 Balance 808.70\r\n132 Tyres 19.00 Balance 789.70\r\n129 Stamps 13.6 Balance 776.10\r\n129 Fruits 17.6 Balance 758.50\r\n129 Market 128.00 Balance 630.50\r\nTotal expense  602.50\r\nAverage expense  60.25' to equal 
// 'Original Balance: 1233.00\r\n125 Hardware 24.80 Balance 1208.20\r\n123 Flowers 93.50 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.40 Balance 877.40\r\n122 Picture 93.50 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.60 Balance 751.30\r\n129 Fruits 17.60 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.60 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41'



// 'Original Balance: 1233.00\r\n125 Hardware 24.8 Balance 1208.20\r\n123 Flowers 93.5 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.4 Balance 877.40\r\n122 Picture 93.5 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.6 Balance 751.30\r\n129 Fruits 17.6 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.6 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41' to equal 
// 'Original Balance: 1233.00\r\n125 Hardware 24.80 Balance 1208.20\r\n123 Flowers 93.50 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.40 Balance 877.40\r\n122 Picture 93.50 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.60 Balance 751.30\r\n129 Fruits 17.60 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.60 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41'