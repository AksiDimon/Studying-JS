//11
function nbYear(p0, percent, aug, p) {
    console.log(p0, percent, aug, p)
    const percents = percent / 100;
    let year = 0;
    while (p0 < p) {
      p0 = Math.floor(p0 + p0 * percents + aug);
      year += 1;
      console.log(p0)
    }
    return year;
  }

  // console.log(nbYear(1000, 2, 50, 1214))

//110
  // function isGomogen (array) {
  //   return array.every( val => typeof val === typeof array[0]); //чему здесь будет равен val ?
  // }

  // console.log(isGomogen([1, 5, 4]));
  
  // function filterHomogenous(arrays) {
    
  //   return arrays.filter(value => {
  //     console.log("👻", value);
  //     return value.length !== 0 && isGomogen(value)
  //   });
  // }

  // filterHomogenous([['a', 3, 5], ['b', 'rr'], [], ['1', 2, 3]])

//108
// почему если в условии пушить [i] то каждый индекс будет обернут в массивы ? 
// result.push([i]) то будет [ [ 0 ], [ 3 ], [ 4 ], [ 6 ] ] ?
  var capitals = function (word) {
    let result = [];
    for(let i = 0; i < word.length; i += 1) {
      if(word[i] ===  word[i].toUpperCase()) {
        console.log('🤡',i);
        result.push(i)
      }
      console.log(word [i], word[i] ===  word[i].toUpperCase());
    }
    return result;
  };

  // console.log("✅", capitals('CodEWaRs')) //[0,3,4,6];  не решена







  //109
  //вапрос по поводу этой задачи, я пытался проверить что будет если в условии for не будет написано length -1. 
  // и я увидел что в результате  последним эллементом в массиве '-' как это возможно если справа от него нет никакого числа? 
  // и почему он его поставилтогда ? 
  function insertDash(num) {
    const str = num.toString();
    console.log(str);
    const arr = str.split('');
    let result = [];
    for(let i = 0; i < arr.length -1; i += 1) {
      result.push(arr[i])
      console.log(arr[i], arr[i + 1]);
      if(arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
        result.push('-');
      }
      console.log('😼',result)
      
    }
    const lastSimbol = arr.at(-1)
    
    result.push(lastSimbol);
    console.log('☝️',result)
    return result.join('');
  }

  console.log('✌️',insertDash(454793)) //'4547-9-3' not solved


  // ASCII

  // charCodeAt

  // https://cdn.shopify.com/s/files/1/1014/5789/files/Standard-ASCII-Table_large.jpg


  function bingo(ticket, win){
    
  }
  
  // console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))