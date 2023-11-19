function myLanguages(results) {
    const filter = Object.keys(results).filter(name => results[name] > 59);
    return filter.sort((a,b) => {
        if(results[a] > results[b]) {
            return -1
        }
        if(results[a] < results[b]) {
            return 1
        }
        return 0;
    })
}

// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //["Ruby", "Python"])
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); //["Dutch", "Greek", "Hindi"]
// console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })); //[];






// function myLanguages(results) {
//     // let arrNums = [];
//     // for(const key in results) {
//     //     if(results[key] > 59) {
//     //         arrNums.push(results[key])
//     //     }
//     // }
  
//     // const sort  = arrNums.sort((a,b) => b - a);
//     // const arrValues= [];
//     // for(const num of sort) {
//     //     for(const key in results) {
//     //         if(num === results[key]) {
//     //             arrValues.push(key)
//     //         }
//     //     }
//     // }
//     // return arrValues
  
//     const arrKeys = Object.keys(results);
//     const filter = arrKeys.filter( name => {
//         return results[name] > 59;
//     })
//     return filter.sort((a,b) => {
//         if(results[a] > results[b]) {
//             return -1
//         }
//         if(results[a] < results[b]) {
//             return 1
//         }
//         return 0
//     })
//     // return filter.sort((a, b) => {
//     //   console.log({ a, b });
//     //   if (a < b) { // уже идут в правильном порядке: a раньше b
//     //     return -3846547; // ← вернули отрицательное
//     //   }
//     //   if (a > b) { // идут неправильно, надо переставить, чтобы b шел раньше a
//     //     return 8.34535; // ← вернули положительное
//     //   }
//     //   return 0;
//     // })
  
//     // a b
//     // если a идет раньше b, надо вернуть что-то отрицательное
//     // если a идет позже b, надо вернуть что-то положительное
//     // если a такой же, как b, надо вернуть 0
//   }
//   console.log(
//     myLanguages({ Asd: 110, Fju: 180, Aw: 615, Ifeee: 891, Qw: 700, Z: 100 })
//   ); // по знач в порядке возростания - ключи 

//   // по убыванию длинны ключа
//   // по алфавиту  в обратном порядке
//   // увеличению значения 


function findPair(arr1, arr2) {
    let obj = {};
    for(let i = 0; i < arr1.length; i += 1) {
        // console.log('arr1[i]', arr1[i], 'arr2[i]', arr2[i])
        let sumNums = arr1[i] + arr2[i];
        if(!(sumNums in obj)) {
            obj[sumNums] = []
        }
        obj[sumNums].push([arr1[i], arr2[i]])
    }
    console.log(obj)
    // поиск самого длинного значения в объекте
    const lengthsValues = Object.values(obj).map(val => val.length);
    const lungestValues = Math.max(...lengthsValues); // наибольше колличество эллементов в значении
    // поиск ключей с самыми длинными значениями в обж
    const keysWithMaxArrs = Object.keys(obj).filter(val => obj[val].length === lungestValues);
    console.log(keysWithMaxArrs);
    const maxKey = Math.max(...keysWithMaxArrs);
    if(obj[maxKey].length === 1) {
        return [];
    }
    return obj[maxKey]
   
}
    // console.log(findPair([1,2,3,4,5],[9,8,0,0,0]))//[[1,9],[2,8]]
    // console.log(findPair([1,2,3,4,5],[0,0,0,0,0]))//[]
    // console.log(findPair([1,2,3,4,5],[5,4,3,2,1]))//[[1,5],[2,4],[3,3],[4,2],[5,1]]
    // console.log(findPair([0,1,3,4,5],[1,0,3,2,1]))//[[3,3],[4,2],[5,1]]
  console.log(findPair([1,2,3,4,5],[-1,2,-3,4,-5])) // [[1,-1],[3,-3],[5,-5]]
  console.log(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6])) //[[2,2],[0,4],[-2,6]]
  


  //400
  function sortByLength (array) {
    return array.sort((a,b) => {
        if(a.length > b.length) {
            return 1
        }
        if(a.length < b.length) {
            return -1
        }
        return 0
    })
  }
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])) //["", "Pizza", "Brains", "Moderately"]
console.log(sortByLength(["Beg", "Life", "I", "To"])) //["I", "To", "Beg", "Life"]
  console.log(sortByLength(["Longer", "Longest", "Short"])) //["Short", "Longer", "Longest"]




  //401
  function dbSort(a){
      const filterNums =  a.filter(val => typeof val === 'number');
      const filterStr = a.filter(val => typeof val === 'string');
      const sortNums =  filterNums.sort((a,b) => {
            if(a > b) {
                return 1
            }
            if(a < b) {
                return -1
            }
            return 0
        })
        const  sortStr = filterStr.sort((a,b)=> {
            if(a > b) {
                return 1
            }
            if(a < b) {
                return -1
            }
            return 0;
        }) 
        
        const result = [...sortNums,...sortStr];
    // result.push();
    // result.push();
    return result;
    }

// console.log(dbSort([6, 2, 3, 4, 5])) //[2, 3, 4, 5, 6]
// console.log(dbSort([14, 32, 3, 5, 5])) //[3, 5, 5, 14, 32]
// console.log(dbSort([1, 2, 3, 4, 5])) //[1, 2, 3, 4, 5]
// console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])) //[0,2,2,"Apple","Banana","Mango","Orange"]
// console.log(dbSort(["C", "W", "W", "W", 1, 2, 0])) //[0,1,2,"C","W","W","W"]
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"])) // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']

//402

function Student(age, gpa, fullName) {
    return {
        age,
        gpa,
        fullName,
    }
};

var students = [
    // new Student(23, 88, "David Goodman"), 
    // new Student(25, 82, "Mark Rose"), 
    // new Student(22, 90, "Jane Doe"),
    // new Student(25, 90, "Jane Dane"),

    new Student(1, 90, "Jane Ccc"),
    new Student(2, 90, "Jane Aaaa"),
    new Student(3, 90, "Jane Bb"),

];

console.log(students);

function sort(students) {
    return [...students].sort((a,b) => {
        console.log("gpa", a.gpa, b)
        if(a.gpa > b.gpa) {
            return 1;
        }
        if(a.gpa < b.gpa) {
            return -1;
        }
        
        if(a.age > b.age) {
            return 1
        }
        if(a.age < b.age) {
            return -1
        }
        if(a.fullName > b.fullName) {
            return 1
        }
        if(a.fullName < b.fullName) {
            return -1
        }

        
    });
    
};

console.log(sort(students))
// "Jane Doe,Jane Dane,David Goodman,Mark Rose"
