 //118 

const obfuscate = function ( email) {
    // const first = email.replaceAll('@','[at]')
    // console.log("first", first)
    // const second = first.replaceAll('.','[dot]')
    // console.log("second", second)

    // return second;
    let result = ''
    for(const val of email) {
        
        if(val !== '.' && val !== "@") {
            result += val
        }
        
        if( val === '@') {
            result += ' [at] ';
        }
        if( val === '.') {
            result += ' [dot] '
        }

        console.log("--", result);
    }
    return result;
}
      console.log(obfuscate('te@12.com')) //'te [at] 12 [dot] com'

    //   obfuscate = function(email) {
    //     const arr = email.split('');
    //     return arr.map(char => char.replaceAll('.', '[dot]') && char.replaceAll('@', '[at]'))
    //   }




//119 

function checkExam(array1, array2) {
    let acc = 0;
    for(let i = 0; i < array1.length; i += 1) {
        console.log(i, {a: array1[i], b: array2[i]});
        if(array1[i] === array2[i]) { //если здесь условие выполняется то else не дает проверять условия ниже и переходит на след итерацию цикла.
            console.log("if", 1)
            acc += 4;
        }
        else {
            if(array2[i] === "") {
                console.log("if", 2)
                acc += 0;
            }
            else {
                if(array1[i] !== array2[i]) {
                    console.log("if", 3)
                    acc -= 1;
                }
            }
        }

    }
    if(acc < 0) {
        return 0
    }
    return acc
}

//    console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6
   console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) //7



    //120 
    function isSmile (str) {
        const hasEyes = str[0] === ':' || str[0] === ';'
        const hasMouth = str.at(-1) === ')' || str.at(-1) === 'D'
        const hasNose = str[1] === '-' || str[1] === '~';

        if(str.length === 2 && hasEyes && hasMouth) {
                    return true;
        }
        if(str.length === 3 && hasEyes && hasNose && hasMouth) {
           return true
        }
        return false;
        
    }

    console.log(isSmile(":)")) // true
    console.log(isSmile(":D")) // true
    console.log(isSmile(":-D")) // true


    console.log(isSmile(":-DD")) // false
    console.log(isSmile(":--)")) // false
    console.log(isSmile(":")) // false
    console.log(isSmile(":))")) // false
    console.log(isSmile(")")) // false
    console.log(isSmile("")) // false


    function countSmileys(arr) {
        let acc = 0;
        for(const val of arr) {
            if(isSmile(val)) {
                acc += 1;
            }
        }
        return acc
//         const smile = [':D', ':~)', ';~D', ':)', ';-D', ':-D' ,";)", ";D" , ":-)", ";~)", ":~D", ";-)"];
//   const numberS = arr.filter(val => smile.includes(val))
//     return numberS.length
      }
    
      console.log(countSmileys([':D',':~)',';~D',':)'])) //4
