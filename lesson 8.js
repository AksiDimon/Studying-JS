function well(x){
    let acc = 0;
    for(const word of x) {
        if (word === 'good') {
            acc += 1;
        }
    }
    if (acc === 0) {
        return 'Fail!';
    }
    if (acc <= 2) {
        return 'Publish!';
    }
    return 'I smell a series!';
}
// 'I smell a series!''Fail!''Publish!'
// console.log(well(['bad', 'bad', 'bad']))
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))



function smallEnough(a, limit){
    // for(const num of a) {
    //     if (num > limit) {
    //         return false;
    //     }
    // }
    // return true;

    return a.every(num => num <= limit);
};
//метод every() работает  так; если  для всех эллементов массива вернулось true  то every( ) сам возвращает true. а если хотябы один вернул фолс то эври возващает фолс.

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) //false;
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)) //true

// 

function whichType (arrays) {
    const type = typeof arrays[0]; // если я хочу вывести в коносль то что у меня должно здесь вывестись потому что array d [[]], не понимаю что будет сравниват.
    return arrays.every( val => typeof val === type);
} // получается что если вызвать эту функцию без 2 функции то она не пройдет по каждому массиву  так как она углубится только в первый массив?
function filterHomogenous (array) {
    let result = [];
    for(const value of array) {
        console.log('' ,value)
        if(whichType(value)) {
            result.push(value);
        }

    }
    return result;
}


console.log(
    "🦖",filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])
)
