//200

function help(num) {
    if(num > 255) {
      return 'FF'
    }
    if(num < 0) {
      return '00'
    }
    // const str = num.toString(16).padStart(2, '0'); 
    // return str;
    const str = num.toString(16)
    return str.length === 1 ? '0' + str : str;
    
  }
  function rgb(r, g, b){
    let result = help(r) + help(g) + help(b);
    return result.toUpperCase();
  }

  console.log(rgb(214,8,273)) //D608FF



  //201

  function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i += 1) {
        console.log("i =", i);
        for(let j = i + 1; j < numbers.length; j += 1) {
            
            // if(i === j) {
            //     continue
            // }
          console.log("  j =", j);
            if(numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
  }

  console.log("🤔", twoSum([1, 2, 5, 4, 6], 10)) // [3, 4]
  // console.log("🤔", twoSum([1, 2, 5, 5, 6], 10)) // [2, 3]


// console.log(twoSum([1, 2, 3], 4)) //[0, 2]
// console.log('😼',twoSum([2, 2, 3, 1, 4], 4)) //[2, 3]  or   [0, 1]

//202 

function getLengthOfMissingArray(arrayOfArrays) {
   console.log('😼',arrayOfArrays)
    if(arrayOfArrays === null || arrayOfArrays.length === 0 ) {
      return 0
    }
    if(arrayOfArrays.some(val => val === null || val.length === 0)) {
        return 0
    }
    
      const lengths = arrayOfArrays.map(val => val.length);
      const sort = lengths.sort();
    
      console.log(sort)
      for(let j = 0; j < sort.length; j += 1) {
          if(sort[j] !== sort[j + 1] - 1) {
              return sort[j + 1] - 1
          }
      }
  
  }

  console.log(">>>1", getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]])) //2

  // If the array of arrays is null or empty, the method should return 0.
  console.log(">>>2", getLengthOfMissingArray([]))
  console.log(">>>3", getLengthOfMissingArray(null))


  // When an array in the array is null or empty, the method should return 0 too!
  console.log(">>>4", getLengthOfMissingArray([[1,2,3], null, [1]]))
  console.log(">>>5", getLengthOfMissingArray([[1,2,3], [], [1]]))
  

//   function getLengthOfMissingArray(arrayOfArrays) {
    
//     }
//      let arrLen = []
//     for(let i = 0; i < arrayOfArrays.length; i += 1) {
//         arrLen.push(arrayOfArrays[i].length);
//     }
//     const sort = arrLen.sort();
//     if(sort.length === 0) {
//         return 0
//       }
//     console.log(sort)
//     for(let j = 0; j < sort.length; j += 1) {
//         if(sort[j] !== sort[j + 1] - 1) {
//             return sort[j + 1] - 1
//         }
//     }
    

//203

function dataReverse(data) {
  // ...
  //один цикл форимрует маленькие массивчики, а второй в большой запихивает эти маленькие массивчики
  let miniArr = []
  let bigArr = []
  for(let i = 0; i < data.length; i += 8) {
    miniArr = []
    for(let j = i; j < i + 8; i += 1) { // j=i потому что как цикл ш прошел то j перескакивает на 8 букв вперед.
        miniArr.push(data[j])
    }
    console.log(miniArr)
  }
  bigArr.push(miniArr);
  return bigArr
} 

      // [[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1],[1,0,1,0,1,0,1,0]]
//   console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
                        // 10101010 00001111 00000000 11111111


    // const str = data.join('');
    // let result = '';
    // const cut = str.slice(0,8);
    // console.log(cut)
    // for(let i = 0; i < str.length; i += 1) {
    // if(str.length % 8 === 0) {
    //     return str.length / 8
    // }
    // }





    
//       function dataReverse(data) {
//     const cut = data.slice(-8);
    
//     let result = []
//     for(let i = 0; i < data.length / 8; i += 1) {
//         result.push(cut)

//     }
//     console.log('@',result)
//   }