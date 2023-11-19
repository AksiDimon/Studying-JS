  //208 
//   function isDigit (char) {
//     if(char >= '0' && char <= '9') {
//         return true
//     }
//     return false
//   }

//   // https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/2560px-ASCII-Table-wide.svg.png
// // console.log("A" <= "9") // 65  57
// // console.log("A" >= "0") // 65  48

// // console.log(isDigit("2")) // true
// // console.log(isDigit("0")) // true

// // console.log(isDigit("A")) // false
// // console.log(isDigit("#")) // false
// // console.log(isDigit("+"))// false
// // console.log(isDigit(".")) // false


// function isLetter(char) {
//     if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
//         return true 
//     }
//     return false
//     //         97             122
// }

// console.log(isLetter("A"))
// console.log(isLetter("u"))
// console.log(isLetter("["))
// console.log(isLetter("1"))

// function isAllowedChar(char) {
//     if(char === ' ' || char === '.' || char === '\n') {
//         return true;
//     }
//     return false;
// }

// console.log(isAllowedChar(".")) //true
// console.log(isAllowedChar(" ")) //true
// console.log(isAllowedChar("\n")) //true

// function cleanStr (str) {
//   const arr = str.split('');
//   const filter = arr.filter(val => {
//     return isDigit(val) || isLetter(val) || isAllowedChar(val);
//   })
//   return filter.join('');

// }

// function balance(book) {
//     const clean = cleanStr(book);
//   const arr = clean.split('\n');
//   console.log('👄',arr)
//   const balance = `Original_Balance:_${arr[0]}`;
//   let sumBilt = []
//   let result = [];
//   result.push(balance);
//   for(let i = 2; i < arr.length - 1; i +=1) {
//     // arr[i] === "125 Market 124.45"
//     const cost = arr[i].split(' ');
//     console.log('dimon',cost)
//     sumBilt.push(cost[2])
//     result.push(cost);
//     console.log('👾',sumBilt)
//     // const price = cost[2];
//     // sumBilt += price
    
//   }
//   const arrNums = sumBilt.map(val => Number(val));
//   const allSumBilt = arrNums.reduce((acc, val)=>{
//     return acc + val;
//   },0);
//   console.log('👏', allSumBilt)
//   const averagePrice = allSumBilt / arrNums.length ;
//     console.log('👏',averagePrice)
//     const totalExpense = `Total_expense_${allSumBilt}`;
//     const averageExpense = `Average_expense_${averagePrice}`;
//     // console.log(totalExpense);
//     result.push(totalExpense)
//     result.push(averageExpense)
//     console.log('👅',result)
//     const finishedArr = result.join('\n');
//     console.log(finishedArr)
// }
// console.log(balance(`1000.00!=

// 125 Market !=:125.45
// 126 Hardware =34.95
// 127 Video! 7.45
// 128 Book :14.32
// 129 Gasoline ::16.10
// `))


// //  "Original_Balance:_1000.00
// //   125_Market_125.45_Balance_874.55
// //   126_Hardware_34.95_Balance_839.60
// //   127_Video_7.45_Balance_832.15
// //   128_Book_14.32_Balance_817.83
// //   129_Gasoline_16.10_Balance_801.73
// //   Total_expense__198.27
// //   Average_expense__39.65"



function isDigit (char) {
    if(char >= '0' && char <= '9') {
        return true
    }
    return false
  }

function isLetter(char) {
    if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        return true 
    }
    return false
    //         97             122
}



function isAllowedChar(char) {
    if(char === ' ' || char === '.' || char === '\n') {
        return true;
    }
    return false;
}


function cleanStr (str) {
  const arr = str.split('');
  const filter = arr.filter(val => {
    return isDigit(val) || isLetter(val) || isAllowedChar(val);
  })
  return filter.join('');

}

function balance(book) {
  const clean = cleanStr(book);
  const [firstLine, ...lines] = clean // что будет если убрать ... у lines ? 
    .split('\n')
    .filter(val => val !== ''); // к чему здесь применяется сплит ? И ФИЛЬТР ? 
  const originalBalance = Number(firstLine)
  let balance = originalBalance // после каждого цикла она меняется, хот вычисление и происходит в нутри цикла. При использовании после цикла она будет не изначального вида, а той с какой опирацией она работала.

  const result = []
  result.push(`Original Balance: ${originalBalance.toFixed(2)}`);

  for(const line of lines) {
    const [id, nameOfProducts, costProductStr] = line.split(' ');
    const costProduct = Number(costProductStr);
    console.log('nameOfProducts', nameOfProducts)

    balance -= costProduct;
    result.push(`${id} ${nameOfProducts} ${costProduct.toFixed(2)} Balance ${balance.toFixed(2)}`);
  }

  const totalExpense = originalBalance - balance;
  const averagePrice = totalExpense / lines.length;

  result.push(`Total expense  ${totalExpense.toFixed(2)}`); // toFixed превращает число в строку, и оставляет определенное количество знаков после запятой, указывать в ()
  result.push(`Average expense  ${averagePrice.toFixed(2)}`);
  console.log(result)
  return result.join('\r\n')
}
console.log(balance(`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`));




// 'Original Balance: 1233.00\r\n125 Hardware 24.8 Balance 1208.20\r\n123 Flowers 93.5 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.4 Balance 877.40\r\n122 Picture 93.5 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.6 Balance 751.30\r\n129 Fruits 17.6 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.6 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41' 
// 'Original Balance: 1233.00\r\n125 Hardware 24.80 Balance 1208.20\r\n123 Flowers 93.50 Balance 1114.70\r\n127 Meat 120.90 Balance 993.80\r\n120 Picture 34.00 Balance 959.80\r\n124 Gasoline 11.00 Balance 948.80\r\n123 Photos 71.40 Balance 877.40\r\n122 Picture 93.50 Balance 783.90\r\n132 Tyres 19.00 Balance 764.90\r\n129 Stamps 13.60 Balance 751.30\r\n129 Fruits 17.60 Balance 733.70\r\n129 Market 128.00 Balance 605.70\r\n121 Gasoline 13.60 Balance 592.10\r\nTotal expense  640.90\r\nAverage expense  53.41'


// 'Original Balance: 1687.0\r\n160 Perfume 71.40 Balance 1615.60\r\n126 Stamps 13.60 Balance 1602.00\r\n132 Gasoline 54.00 Balance 1548.00\r\n003 Hardware 93.50 Balance 1454.50\r\n130 Gasoline 34.00 Balance 1420.50\r\n123 Hairdresser 12.20 Balance 1408.30\r\nTotal expense  278.70\r\nAverage expense  46.45' to equal 
// 'Original Balance: 1687.00\r\n160 Perfume 71.40 Balance 1615.60\r\n126 Stamps 13.60 Balance 1602.00\r\n132 Gasoline 54.00 Balance 1548.00\r\n003 Hardware 93.50 Balance 1454.50\r\n130 Gasoline 34.00 Balance 1420.50\r\n123 Hairdresser 12.20 Balance 1408.30\r\nTotal expense  278.70\r\nAverage expense  46.45'