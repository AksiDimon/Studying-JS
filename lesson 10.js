// https://cdn.shopify.com/s/files/1/1014/5789/files/Standard-ASCII-Table_large.jpg
//111

// function isHappy(ticket){
//     const str = ticket[0];
//     const lastNum = ticket[ticket.length - 1]

//     console.log('@',lastNum)

//     for(let i = 0; i < str.length; i += 1) {
//         console.log('!!!',str.charCodeAt(i))
//         if(str.charCodeAt(i) === lastNum) {
//             return true
//         }
//     }
//     return false

// }


// function isHappy(ticket){
//     const str = ticket[0];
//     const lastNum = ticket[ticket.length -1]
//     for(const word of str) {
//         if(word.charCodeAt(0) === lastNum) {
//             return true;
//         }
//     }
//     return false;
// }


function isHappy(ticket){
    
    // const str = ticket[0];
    // const lastNum = ticket[1]
    
    /// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const [str, lastNum] = ticket; // Это Деструктуризация!!!
    const arr = str.split('');

    return arr.some( word => word.charCodeAt(0) === lastNum);
}
// A → 65
// B → 66
// C → 67
// D → 68

console.log(isHappy(['ABC', 65]))  // true
console.log(isHappy(['ABC', 67]))  // true
console.log(isHappy(['ABC', 68]))  // false


function bingo(ticket, win){
    // let acc = 0;
    // for(let i = 0; i < ticket.length; i += 1) {
    //     if(isHappy(ticket[i])){
    //         acc += 1
    //     }
    // }


    // for(const miniTicket of ticket) {
    //     if(isHappy(miniTicket)) {
    //         acc += 1;
    //     }
    // }

    const filter = ticket.filter(miniTicket => isHappy(miniTicket))
    console.log('000',filter)
    // if(filter.length >= win) {
    //     return 'Winner!';
    // }
    // return 'Loser!';
    return filter.length >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))



//112

function rowWeights(array){
    let acc = 0;
    let acc1 = 0;
    for(let i = 0; i < array.length; i += 2) { // если написать i <= array.length то мы по индексам выйдем за приделы массива, и получим undefined
        acc += array[i];
    }
    for(let i = 1; i < array.length; i += 2) {
        acc1 += array[i];
    }
    // let result = [];
    // result.push(acc)
    // result.push(acc1)
    // return result;

    return [acc, acc1];
}

//   console.log(rowWeights([13,27,49])) // [62,27]


//113

// function scrollingText(text){
//     const arr = text.split('');
    
   
//     const find = arr.map(letter => letter.slice(0))
//     console.log(find)
//   }


//   console.log(scrollingText("abc")); //["ABC","BCA","CAB"]




//   function scrollingText(text){
//     const arr = text.split('');
//     const first = arr[0];
//     const last = arr[arr.length - 1];
//     let result = [];
//     console.log(last)
//     for(let i = 0; i < arr.length; i += 1) {
//         result.push(arr[i] + last)
//     }
//     console.log(result)
//   }


//   console.log(scrollingText("abc")); //["ABC","BCA","CAB"]


