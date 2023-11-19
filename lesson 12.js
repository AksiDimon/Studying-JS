function scrollingText(text){
    let bigText = text.toUpperCase(); // почему здесь нужна let ?  потому что bigText изменяется и используется в цикле for ?
    const arr = bigText.split('');
    const result = []
    for(const letter of arr) {
      result.push(bigText);
      bigText += bigText[0]
      bigText = bigText.slice(1)
    }
    return result
  }






  //115 
  const arrCheck = value => value.every(val => Array.isArray(val))

  console.log(arrCheck([[1],[2],[3]])) //true
//   function arrCheck (value) {
//     for(let i = 0; i < value.length; i += 1) {
//         if(Array.isArray(value[i])) {
//             return true
//         }
//     }
//     return false;
//   }





  //116


  function box(n){
    let dash = '-'.repeat(n);
    const empty = ' '.repeat(n - 2)
    const nonempty = `-${empty}-`
    let result = [];
    result.push(dash);
    for(let i = 1; i < n - 1; i += 1) {
      result.push(nonempty);
      
      console.log(">>", result)
    }
    result.push(dash);
    return result
    // result.fill(`-${empty}-`, 1, dash.length - 1)
    //  console.log(result)
  }
  console.log(box(5)) //["-----", "-   -", "-   -", "-   -", "-----"]



  function isHappy(ticket) {

     const [str, lastNum] = ticket;
     const arr = str.split('');
     return arr.some(val => {
      console.log("val", val);
     return val.charCodeAt(0) === lastNum // в charCodeAt(стоит 0) потому что мы проходимся по val, а в вал сейчас лежат буквы, и он выдаед код этой буквы.
     })
   }
   console.log(isHappy(['ABC', 65]))
   
   const qqq = ["qwert", "ffg", "etrx"];

   const fooooo = s => s.length;

   // https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
   // A callback function is a function passed into another function as an argument,
   // which is then invoked inside the outer function to complete some kind of routine or action.



   console.log(qqq.map(s => s.length)); // [5, 3, 4]
   console.log(qqq.map(s => {
     return s.length
   })); // [5, 3, 4]
   
   function bingo(ticket, win){
     const findLuck = ticket.filter(miniTicket => isHappy(miniTicket));
     return findLuck.length >= win ? 'winner!' : 'Loser!'
   }
  //  console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))


   function expandedForm(num) {
    const str = num.toString();
    const arr = str.slice('');
    let countZero = '0'.repeat(arr.length - 1) // почему нельзя так записать ? 
    let result = [];
    for(const number of arr) {
      result.push(number + countZero); // почему я должен написать именно здесь '0'.repeat(countZero) ? 
      countZero -= 1;
    }
    const filter = result.filter( val => !val.startsWith('0'))
    return filter.join(' + ')
  }


  //117 
  //вернуть магическое число по индексу

  function findMagic(arr){
    // for(let i = 0; i < arr.length; i += 1) {
    //     if(arr[i] === i) {
    //         return i
    //     }
    // }
    // return -1
    return arr.findIndex((num, i) => num === i); // это метод в котором нужно условие, колбек функция. а в indexOf()не нужна функция
  }
  // findIndex

  
  console.log(findMagic([-20,-10,2,10,20]));



  //118 

const obfuscate = function(email) {
const at = ' [at] ';
const dot = ' [dot] '; 

// replaceAll

for(let i = 0; i < email.length; i += 1) {
    if(email[i] === '@') {
        email[i].replaceAll(at);
    }
    if(email[i] === '.') {
        email[i].replaceAll(dot)
    }
}
return 
  }
  console.log(obfuscate('test@123.com')) //'test [at] 123 [dot] com'


  //119 

  function checkExam(array1, array2) {
    let acc = 0;
    for(let i = 0; i < array2.length; i += 1) {
      console.log(i, array1[i], array2[i]);
        for(let j = 0; j < array1.length; j += 1){
            if(array2[i] === array1[j]) {
                acc += 4
            }
            if(array2[i] !== array1[j]) {
                acc -= 1;
            }
        }
        if(array2[i] === '') {
            acc += 0;
        }
    }
    if(acc < 0) {
        return 0;
    }
    return acc;
   }

   console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6



   //120
   function countSmileys(arr) {
    if(arr.length === 0) {
      return 0
    }
    const eyse = ';' && ':';
    const nouse = '~';
    const lips = 'D' && ')';
  }

  console.log(countSmileys([':D',':~)',';~D',':)'])) //4