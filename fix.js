let mapreduce = [];
let mapreduceNumber = 10;
for(let i = 0; i < mapreduceNumber; i++) {
    mapreduce.push(Math.round(Math.random()*9) + 1);
}

console.log(mapreduce)

let result = mapreduce.reduce((accumulator, currentValue, currentIndex) => { return (accumulator > currentIndex)?accumulator:currentIndex })

// const sortingReducer = (accumulator, value) => {
//     const nextIndex = accumulator.findIndex(i => value < i );
//     const index = nextIndex > -1 ? nextIndex : accumulator.length;
//     accumulator.splice(index, 0, value);
//     return accumulator;
// }
// const output = mapreduce.reduce(sortingReducer, []);
// console.log(output)


var m = mapreduce.reduce(function(acc, cur) {
 
  let arrVar = mapreduce;
  
  var getMaxElem = Math.max(...arrVar);
  
  acc.push(getMaxElem);

  arrVar = arrVar.splice(arrVar.indexOf(getMaxElem), 1, '')
  return acc;
}, []);
console.log(m);
console.log(`số lớn nhất: ${m.shift()}\nsố nhỏ nhất: ${m.pop()}`)


// const insertValue = (arr, value) =>
//   [...arr.filter(n => n <= value), value, ...arr.filter(n => n > value)]

// const testArr = [91, 4, 6, 24, 8, 7, 59, 3, 13, 0, 11, 98, 54, 23, 52, 87, 4]

// console.log(testArr.reduce(insertValue, []))