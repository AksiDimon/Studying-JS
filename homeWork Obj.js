let userInfo = {
    name: 'Vasya',
    age: 15,
    adress: {
        city: 'Moscow',
        street: 'Lenina',
    },
    brother: 'Kostya',
}

for(let key in userInfo) {
    console.log('key',key)
    console.log('value',userInfo[key])
}

for(let key in userInfo.adress) {

    console.log(userInfo.adress[key])
}

function findLength (arr) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    for(const val of arr) {
        if(val.length > 6) {
            arr1.push(val)
        }
        if(val.length > 7) {
            arr2.push(val)
        }
        if(val.length > 8) {
            arr3.push(val)
        }
    }
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
} 
console.log(findLength(['qwertyuiop','qwertyuio','qwertyui','qwertyu','qwerty','qwert']))