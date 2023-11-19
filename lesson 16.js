//203
function dataReverse(data) {
    let bigArr = [];
    for (let i = data.length - 8; i >= 0; i -= 8) {
        
        console.log('🤙',i);
       const piece = data.slice(i, i + 8);
       console.log("👀",piece)
       bigArr.push(piece);
      // let smallArr = [];
      // for (let j = i; j < i + 8; j++) {
      //   smallArr.push(data[j]);
      // }
      // for (let j = 0; j < 8; j++) {
      //   smallArr.push(data[i + j]);
      // }
      // bigArr.push(smallArr);
    }
    return bigArr.flat();
  }
  
// function dataReverse(data) {
//     // ...
//     //один цикл форимрует маленькие массивчики, а второй в большой запихивает эти маленькие массивчики
//     let bigArr = [];
//     for(let i = data.length - 8; i >= 0; i -= 8 ) {
//         let miniArr = [];
//         for(let j = i; j < i + 8; j += 1) {
//             miniArr.push(data[j])
//         }
//         bigArr.push(miniArr)
//     }
//     return bigArr.flat();
//   } 
  
        // [[1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1],[1,0,1,0,1,0,1,0]]
    // console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
                          // 10101010 00001111 00000000 11111111


    console.log(dataReverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));

    // 9,10,11,12,13,14,15,16 1,2,3,4,5,6,7,8,9,10


    // let miniArr = []
    // let bigArr = []
    // for(let i = 0; i < data.length; i += 8) {
    //   miniArr = []
    //   for(let j = i; j < i + 8; j += 1) { // j=i потому что как цикл ш прошел то j перескакивает на 8 букв вперед.
    //       miniArr.push(data[j])
    //   }
    //   console.log(miniArr)
    // }
    // bigArr.push(miniArr);
    // return bigArr


    //204
    function proofread (str) { 
      //   const sentenceStartBigWord = changeEI[0].toUpperCase() + changeEI.slice(1);
      //  console.log(sentenceStartBigWord);
      //  let result = [];
      //  for(const sent of arr) {
        //   result.push(sent[0].toUpperCase() + sent.slice(1))
        //  }


      // const lowStr = str.toLowerCase()
      return str
        .toLowerCase()
        .replaceAll("ie", "ei")
        .split('. ')
        .map(sent => sent[0].toUpperCase() + sent.slice(1))
        .join('. ') ;
    }

        console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.")) //"Their deceit was inconceivable. She seized the moment."
 
        // const down = str.toLowerCase()
        // const arr = down.split('');
        //   let result = []
        //   console.log(arr)
        // for(let i = 0; i < arr.length; i += 1) {
        //     if(arr[i] !== 'i' && arr[i + 1] !== 'e') {
        //         result.push(arr[i])
        //     }
        //     if(arr[i] === 'i' || arr[i + 1] === 'e') {
        //         result.push('ei');
        //     }
            
        // } 
        // console.log(result)


        // //205 
        function formatWords(words){
            let result = '';
            const filter = words.filter(val => val !== '' && val !== null);
            if(filter.length === 1) {
                return filter.join('');
            }
            console.log('💋',filter)
            const lastWord  = filter.at(-1);
            const preLastWord = filter.at(-2, -1)
            if(filter.length === 2) {
                return preLastWord + ' and ' + lastWord
            }
            if(filter.length > 2) {
            let arr1 = filter.slice(0, -2);
            arr1.push(preLastWord + ' and ' + lastWord);
            console.log('🦷',arr1)
            return arr1.join(', ');
            }
            
            
        }
        console.log(formatWords(['one', 'two', 'three', 'four'])) // 'one, two, three and four'
        console.log(formatWords(['one', 'two', ''])) // 'one and two'
        console.log(formatWords(['one', ''])) // 'one'
        console.log(formatWords(null)) // ''
        console.log(formatWords([])) // ''
