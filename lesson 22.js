//212
// function runLengthEncoding( str) {
//     let count = 1;
//     let result = [];
//     for(let i = 0; i < str.length; i += 1) {
//         if(str[i] === str[i + 1]) {
//             count += 1;
//         }
//         else{
//             result.push([count , str[i]])
//             count = 1
//         }
//     }
//     return result;
// }


function runLengthEncoding( str) {
    let count = 0;
    let result = [];
    for(let i = 0; i < str.length; i += 1) {
        count += 1
        if(str[i] !== str[i + 1]) {
            result.push([count, str[i]])
            count = 1
        }
        
    }
    return result;
}


console.log(runLengthEncoding('abc')) //[[1,'a'],[1,'b'],[1,'c']]
console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")) //[[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
// цикл начинается каждый раз заново когда новый елемент
//перед каждой новой буквой пушить в основной массив.
// начать цикл заново



//   let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")


//   let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.key ); // undefined


let userInfo = {
    name: 'Dima',
    age: 26,
}
console.log(userInfo)
let newUser = Object.assign({}, userInfo); //  Object.assign делает абсолютно новый объект а не ссылку на объект, с которого взяли данные.

newUser.age = 20;

Object.assign(newUser, { ['like learn JS'] : true, teacher: 'Maxim'});

// newUser.qwe-rty
newUser['qwe-rty']

console.log(newUser)

if(newUser['like learn JS']) {
    console.log('💄',newUser.age)
}



//так делают проверку свойста в объекте.
if('name' in newUser) {   //здксь войсто должно быть указано в '' независимо одним  столом он назван или несколькими.
    console.log(newUser.name);
}



//300 
function hexStringToRGB(hexString) {
    const rHex = hexString.slice(1, 3);
    const gHex = hexString.slice(3, 5);
    const bHex = hexString.slice(5);

    const r = parseInt(rHex, 16);
    const g = parseInt(gHex, 16)
    const b = parseInt(bHex, 16)
    // return {
    //     r: r,
    //     g: g,
    //     b: b,
    // }

    return {
        r,
        g,
        b,
    }
    
    console.log(num)
    console.log(g)
    console.log(b)
}

console.log(hexStringToRGB("#FF9933")) // {r:255, g:153, b:51}



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
        // if(letter === 'A') {
        //     result += 'T'
        // }
        // if(letter === 'T') {
        //     result += 'A'
        // }
        // if(letter === 'G') {
        //     result += 'C'
        // }
        // if(letter === 'C') {
        //     result += 'G'
        // }
    }
    return result;
  }

  console.log(DNAStrand("ATTGC")) //"TAACG"


const obj = {
    x1: "qwe",
    y2: "asd",
    q: 567,
    "@@@": 123,
    "ppp": 577,
    qqq: 111,
    k: "yuio"
}

// obj["1x"]

obj.q === 567
obj.x1 === "qwe"
obj["x1"] === "qwe"
obj["x" + "1"] === "qwe"

const k = "y2";
obj[k] === "asd" // здесь в качестве ключа  переменная k .
console.log(obj[k] === "asd")
obj.k === "yuio"  //  когда через . ты железно знаешь что это ключ которые есть в объекте. 


//302
function scoreboard(string) {
    const obj = {
        nil: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    const result = [];
    const arrWords = string.split(' ');
    for(const word of arrWords) { //когда объект перебираем то используем for in, когда массив используем for of
        if(word in obj) {
            result.push(obj[word]) // если word  присутствует в obj то мы значение этого obj пушим в result
            console.log('😼',obj[word])
        }
    }
    return result;
  }

  console.log(scoreboard("The score is four nil"))  //"The score is four nil"), [4,0], 

  //303
  function outed(meet, boss){
    let result = [];
    for(const met in meet) {
        result.push(meet[met])
        console.log('👾',met)
    }
    const reduce = result.reduce((acc, num) => (acc + num) / result.length ,0)
    console.log('🎃',reduce)
    if(reduce > 5) {
        return 'Nice Work Champ!';
    }
    return 'Get Out Now!';
    // const moodsMark = 
  }
  console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')) // 'Get Out Now!'

