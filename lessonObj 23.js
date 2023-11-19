function hexStringToRGB(hexString) {
    const rHex = hexString.slice(1,3);
    const gHex = hexString.slice(3,5);
    const bHex = hexString.slice(5);

    const r = parseInt(rHex, 16);
    const g = parseInt(gHex, 16);
    const b = parseInt(bHex, 16);
    console.log(r)
    return {
        r,
        g,
        b,
    }
}

console.log(hexStringToRGB("#FF9933")) // {r:255, g:153, b:51}


//303

// function outed(meet, boss){
//     let sum = 0;
//     let count = 0;
//     for(const key in meet) {
//       sum += meet[key];
//       count = count + 1;
//       if(key === boss) {
//         sum += meet[key];
//       }
//     }
//     const result  = sum / count;
//     return result > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
//   }


function outed(meet, boss){
let arrRating = [];
for(const key in meet) {
    arrRating.push(meet[key]);
    if(key === boss) {
        arrRating.push(meet[key])
    }
}
const reduce = arrRating.reduce((acc, val) => val + acc ,0);

const result = reduce / (arrRating.length - 1);
if(result > 5) {
    return 'Nice Work Champ!';
}
return 'Get Out Now!';
}
console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')) // 'Get Out Now!'


//301

function DNAStrand(dna){
    let result = '';
    let obj = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    };

    for(const letter of dna) {
        // console.log('👽',letter);
        // console.log('👾',obj[letter])     //
        result += obj[letter]
     
    }
    return result;
  }

  console.log(DNAStrand("ATTGC")) //"TAACG"



  //304

  const whosOnline = (friends) => {
    const online = [];
    const offline = [];
    const away = [];

    for(const obj of  friends) {
        if(obj.status === 'online' && obj.lastActivity <= 10) {
            online.push(obj.username);
        }
        if(obj.status === 'offline') {
            offline.push(obj.username)
        }
        if(obj.status === 'online' && obj.lastActivity > 10) {
            away.push(obj.username)
        }
    }
    const result = {};
    if(online.length > 0) {
        result.online = online
    }
    if(offline.length > 0) {
        result.offline = offline
    }
    if(away.length > 0) {
        result.away = away
    }
    return result;
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
  }])) //{ online: [ 'David' ], offline: [ 'Lucy' ], away: [ 'Bob' ] }


//305
  function duplicateEncode1(word){

    const wordLow = word.toLowerCase();
    let result = '';
    for(const letter of wordLow) {
        
        let count = 0;
        for(const val of wordLow) {
            if(val === letter) {
                count += 1;
            }
        }
        
        // if(count === 1) {
        //     result += '('
        // }
        // else {
        //     result += ')'
        // }
        //  count === 1 ? result += '(' : result += ')';
         result += count === 1 ? '(' : ')'; //
    }
    return result
  }


console.log(duplicateEncode("recede")) //"()()()"
// console.log(duplicateEncode("Success")) //")())())"

function duplicateEncode(word){
    const wordLow = word.toLowerCase();
    const arr = wordLow.split('');
    let obj = {};
    let result = ''; 
    for(const letter of  arr) {
        if(letter in obj){
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
        

    }
    console.log(obj);
    for(const letter of arr) {
        if(letter in obj && obj[letter] > 1) { // почему если вместо === поставить >  получается не правильный результат ? 
            result += ')';
        } else {
            result += '('
        }
    }
    
    console.log('🤞',result)
    
  }
  console.log(duplicateEncode1("recede"))//"()()()"

 let object = {
    dima: 1,
    max: 2,
}

const dima = 'max';

console.log("🍔", object.dima); // так поисходит обращение ключу  по значению
console.log("🍔", object[dima]); //так происходит обращение к переменным  в данном случаии  к ней const dima = 'max';
console.log("🍔", object['dima']); // так поисходит обращение ключу  по значению
console.log("🍔", object['di' + 'ma']); // так поисходит обращение ключу  по значению
console.log("🍔", object.max); // так поисходит обращение ключу  по значению
// console.log("🍔", object[max]); // здесь будет is not defined 
console.log("🍔", object['max']); // так поисходит обращение ключу  по значению