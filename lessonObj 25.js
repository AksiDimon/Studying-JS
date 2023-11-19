const whosOnline = (friends) => {
    const online = [];
    const offline = [];
    const away = [];
    for(const obj of friends) {
        if(obj.status === 'online' && obj.lastActivity <= 10) {
            online.push(obj.username);
        }
        if(obj.status === 'offline') {
            offline.push(obj.username);
        }
        if(obj.status === 'online' && obj.lastActivity > 10) {
            away.push(obj.username);
        }
    }
    let obj = {};
    if(online.length > 0) {
        obj.online = online;
    }
    if(offline.length > 0) {
        obj.offline = offline;
    }
    if(away.length > 0) {
        obj.away = away;
    }
    return obj;
}

console.log(whosOnline([{
username: 'David',
status: 'online',
lastActivity: 10
}, {
username: 'Lucy',
status: 'offline',
lastActivity: 22
}, {
username: 'Bob',
status: 'online',
lastActivity: 104
}]))
//{
//     online: ['David'],
//     offline: ['Lucy'],
//     away: ['Bob']
//   }

function duplicateEncode(word){
    const wordLow = word.toLowerCase();
    const obj = {};
    for(const letter of wordLow) {
        letter in obj ? obj[letter] += 1 : obj[letter] = 1;
    }
    let result = ''
    for(const letter of wordLow) {
        result += obj[letter] > 1 ? ')' : '(';
    }
    return result
}

console.log(duplicateEncode("Success")) //')())())'

// var isAnagram = function(test, original) {

// };

// // isAnagram("qqqqqss", "qqqwwwww")

// console.log(isAnagram("foefet", "toffee")) //true;
// console.log(isAnagram("foefetr", "toffeee")) //false;
// console.log(isAnagram("Buckethead", "DeathCubeK")) //true
// console.log(isAnagram("ound", "round")) //false

// function outed(meet, boss){

// }
// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')) // 'Get Out Now!'

//307
let obj = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

function arithmetic(a, b, operator) {
    if(operator in obj) {
        return obj[operator](a, b)
    }
}

console.log(arithmetic(1, 2, 'add')); //3
console.log(arithmetic(8, 2, 'subtract')); //6
console.log(arithmetic(5, 2, 'multiply')); //10
console.log(arithmetic(8, 2, 'divide')); //4

//308
function pluck(objs, name) {
  return objs.map(obj => obj[name]);
  let result = [];
  for (const obj of objs) {
    // for (const key in obj) {
    //   if (key === name) {
    //     result.push(obj[key]);
    //   }
    // }
    // if (!(name in obj)) {
    //   result.push(undefined);
    // } else {
        result.push(obj[name])
    // }
  }
  return result;
}
console.log(pluck([{ a: 1 }, { a: 2 }], 'a')); //[1, 2]
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b')); // [3, undefined]
console.log(
  pluck(
    [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 },
      { a: 7, b: 8, c: 9 },
      { a: 10, b: 11 },
    ],
    'c'
  )
); //  [ 3, 6, 9, undefined ]

//309

function objConcat(o) {
  let resultObj = {};
  for (const obj of o) {
    // for (const key in obj) {
    //   resultObj[key] = obj[key]; // resultObj[key] это ключ, который берется из переменной key, для resultObj. а значение указывается что оно берется из obj а [key] обозначают  что точно такая же перепенная.
    // }
    Object.assign(resultObj, obj) 
  }
  return resultObj;
  console.log(resultObj);
}
var a = { 1: '1', 2: '2', 3: '3' },
  b = { 3: '4', 5: '6', 6: '7', 7: '8' },
  c = { 5: '9', 8: '9', 6: '12', 23: '35' },
  o = [a, b, c];
console.log(objConcat(o)); //{ '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }

//310
function removeDuplicateWords(s) {
  // let obj = {};
  // const arr = s.split(' ');
  // for (const word of arr) {
  //   if (!(word in obj)) {
  //     obj[word] = word;
  //   }
  // }
  
  const words = s.split(' '); 
  // new Array()
  // []
  const set = new Set();
  for(const val of words) {
    set.add(val);
  }
  return Array.from(set).join(' ');


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
  // Set
  const result = Object.keys(obj).join(' ');
  return result;
}
console.log(
  removeDuplicateWords(
    'alpha beta beta gamma 12 gamma gamma 12 delta alpha 3 beta beta 0 gamma gamma gamma delta'
  )
); //'alpha beta gamma delta'

//311
function findUnique(numbers) {
  let obj = {};
  for (const num of numbers) {
    if (!(num in obj)) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }

  for (const key in obj) {
    if (obj[key] === 1) {
       return Number(key);
    }
    
  }
}
console.log(findUnique([1, 8, 4, 4, 6, 1, 8])); //6
// console.log(findUnique([ 1234567 ])) //1234567
// console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ])) //1
// console.log(findUnique([ 2, 2, 5, 5, 4, 3, 3, 1, 1 ])) //4

//312
function greetDevelopers(list) {
  for (const obj of list) {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
  }
  return list; // ??? можно ли мутировать исходную переменную ? получается что переменная это как let ?
}

console.log(
  greetDevelopers([
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ])
);
//[
// {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     country: 'Argentina',
//     continent: 'Americas',
//     age: 35,
//     language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?',
//   },
//   {
//     firstName: 'Lukas',
//     lastName: 'X.',
//     country: 'Croatia',
//     continent: 'Europe',
//     age: 35,
//     language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?',
//   },
//   {
//     firstName: 'Madison',
//     lastName: 'U.',
//     country: 'United States',
//     continent: 'Americas',
//     age: 32,
//     language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?',
//   },
// ]

// 313 
function myLanguages(results) {
  let arr = [];

  for (const key in results) {
    if (results[key] >= 60) {
      arr.push(results[key]);
    }
  }
  const sort = arr.sort((a, b) => {
    // console.log('a', a, 'b', b)
    return b - a;
  });

  const result = [];
  for(const num of sort) {
    for(const key in results) {
        if(results[key] === num) {
            result.push(key)
        }
    }
  }
  return result
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //["Ruby", "Python"])
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); //["Dutch", "Greek", "Hindi"]
console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 })); //[];
