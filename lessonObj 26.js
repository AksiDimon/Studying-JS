function objConcat(o) {
  let resultObj = {};
  for (const obj of o) {
    for (const key in obj) {
      console.log();
      resultObj[key] = obj[key]; // resultObj[key] это ключ, который берется из переменной key, для resultObj. а значение указывается что оно берется из obj а [key] обозначают  что точно такая же перепенная.
    } // c помощью = происходит перепресвоение.
  }
  return resultObj;
  console.log(resultObj);
}
var a = { 1: '1', 2: '2', 3: '3' },
  b = { 3: '4', 5: '6', 6: '7', 7: '8' },
  c = { 5: '9', 8: '9', 6: '12', 23: '35' },
  o = [a, b, c];
console.log(objConcat(o)); //{ '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }

// 313
function myLanguages(results) {
  // let arrNums = [];
  // for(const key in results) {
  //     if(results[key] > 59) {
  //         arrNums.push(results[key])
  //     }
  // }

  // const sort  = arrNums.sort((a,b) => b - a);
  // const arrValues= [];
  // for(const num of sort) {
  //     for(const key in results) {
  //         if(num === results[key]) {
  //             arrValues.push(key)
  //         }
  //     }
  // }
  // return arrValues

  const arrKeys = Object.keys(results);
  const filter = arrKeys.filter((name) => {
    return results[name] > 59;
  });
  const sort = filter.sort((a, b) => {
    //    a        b
    // Asd: 110  Z: 100
    if (results[a] > results[b]) {
      return -1; //отрицательное число если не нужно переставлять  порядок
    }
    // a b
    if (results[b] > results[a]) {
      return 1; // положительное число если нужно переставить порядок
    }
    return 0;
  });
  return sort;
  // return filter.sort((a, b) => {
  //   console.log({ a, b });
  //   if (a.length > b.length) { // уже идут в правильном порядке: a раньше b
  //     return -3846547; // ← вернули отрицательное
  //   }
  //   if (a.length < b.length) { // идут неправильно, надо переставить, чтобы b шел раньше a
  //     return 8.34535; // ← вернули положительное
  //   }
  //   return 0;
  // })
  // return filter.sort((a, b) => {
  //   console.log({ a, b });
  //   if (a < b) { // уже идут в правильном порядке: a раньше b
  //     return -3846547; // ← вернули отрицательное
  //   }
  //   if (a > b) { // идут неправильно, надо переставить, чтобы b шел раньше a
  //     return 8.34535; // ← вернули положительное
  //   }
  //   return 0;
  // })

  // a b
  // если a идет раньше b, надо вернуть что-то отрицательное
  // если a идет позже b, надо вернуть что-то положительное
  // если a такой же, как b, надо вернуть 0
}
console.log(
  myLanguages({ Asd: 110, Fju: 180, Aw: 615, Ifeee: 891, Qw: 700, Z: 100 })
); //["Ruby", "Python"])

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //["Ruby", "Python"])
// console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); //["Dutch", "Greek", "Hindi"]
// console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })); //[];

//314
function groupAnagrams(words) {
  let obj = {};
  for (const word of words) {
    let sortWord = word.toLowerCase().split('').sort().join('');
    if (!(sortWord in obj)) {
      obj[sortWord] = [];
    }
    obj[sortWord].push(word);

    // if(!(sortWord in obj)) {
    //     obj[sortWord] = [word]
    // } else {
    //     obj[sortWord].push(word)
    // }
  }
  console.log(obj);
  return Object.values(obj);
}
// console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
//[
//     ["tsar", "star", "tars"],
//     ["rat", "tar"],
//     ["cheese"]
//   ]

//315
function findPair(arr1, arr2) {
  let arrSum = [];
  let obj = {};
  const arr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    let sumOfNums2Arrs = arr1[i] + arr2[i];
    if (!(sumOfNums2Arrs in obj)) {
      obj[sumOfNums2Arrs] = [];
    }
    obj[sumOfNums2Arrs].push([arr1[i], arr2[i]]);
  }

  // for(let i = 0; i < arr1.length; i += 1) {

  //     for(let j = 0; j < arr2.length; j += 1) {
  //         let sumOfNums2Arrs = arr1[i] + arr2[j];
  //         if(i === j) {
  //           if(!(sumOfNums2Arrs in obj)) {
  //             obj[sumOfNums2Arrs] = [[arr1[i], arr2[j]]]
  //           } else {
  //             obj[sumOfNums2Arrs].push([arr1[i], arr2[j]])
  //           }
  //         }

  //     }
  // }

//   console.log(obj);
  //поиск самого длинного массива в объекте
  const valsObj = Object.values(obj);
  const lengthsVals = valsObj.map((val) => val.length);
  const maxArrinObj = Math.max(...lengthsVals);
  //поиск самого большого ключа в объекте
  const keyObj = Object.keys(obj);
  const filter = keyObj.filter(key => obj[key].length === maxArrinObj);
  const keyMax = Math.max(...filter);

  if(keyMax in obj && obj[keyMax].length > 1) {
    return obj[keyMax]
  }
  return []
}
// for(const key in obj) {
//     if(obj[key].length === maxArrinObj) {

//     }
// }
// const maxKeyInObj = Math.max(...keyObj)
// // console.log(maxKeyInObj)

// for(const key in obj) {
//     if(!(obj[key].length < 2) &&  key === maxKeyInObj.toString()  && obj[key].length === maxArrinObj) {
//         return obj[key]
//     }
// }
  console.log(findPair([1,2,3,4,5],[9,8,0,0,0]))//[[1,9],[2,8]]
  console.log(findPair([1,2,3,4,5],[0,0,0,0,0]))//[]
  console.log(findPair([1,2,3,4,5],[5,4,3,2,1]))//[[1,5],[2,4],[3,3],[4,2],[5,1]]
  console.log(findPair([0,1,3,4,5],[1,0,3,2,1]))//[[3,3],[4,2],[5,1]]
console.log(findPair([1,2,3,4,5],[-1,2,-3,4,-5])) // [[1,-1],[3,-3],[5,-5]]
console.log(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6])) //[[2,2],[0,4],[-2,6]]
