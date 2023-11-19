// 121 

function smallEnough(a, limit){
    for(const num of a) {
      if(num > limit) {
        return false
      }
    }
    return true
  }
  console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) //false
  console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) //true


  //200 
function help(num){
    if(num > 255) {
        return 'FF';
    }
    if(num <= 0) {
        return '00'
    }

    const find16 = num.toString(16);
    return find16;
}


  function rgb(r, g, b){
    
    const result = help(r) + help(g) + help(b);
    return result.toUpperCase();
    // console.log(result)
    // if(r > 255 || g > 255 || b > 255) {
    //     return ;
    //   }
    // if(r <= 0 || g <= 0 || b <= 0) {
    //   return 
    // }
    // const stringR = r.toString(16);
    
    // const stringG = g.toString(16);
    // const stringB = b.toString(16);
    // console.log(stringR, stringB, stringG);
    
    // // let result = '';
    // // result += stringR + stringG + stringB
    // // let result =  stringR + stringG + stringB
    // return result.toUpperCase();
    // console.log(result)
    
  }
  // console.log(rgb(0, 0, 0)) //'000000'
  console.log(rgb(173, 255, 47)) //'ADFF2F'
//                 AD   FF  2F
 console.log(rgb(173, -14, 300)) //''
// toString       AD   00    FF      

  //201

  function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i += 1) {
        for(let j = 1; j < numbers.length; j += 1) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
  }


console.log(twoSum([1, 2, 3], 4)) //[0, 2]
console.log('😼',twoSum([2, 2, 3, 1, 4], 4)) //[2, 3]  or   [0, 1]

