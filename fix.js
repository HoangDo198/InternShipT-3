let mapreduce = [];
let mapreduceNumber = 10;
for(let i = 0; i < mapreduceNumber; i++) {
    mapreduce.push(Math.round(Math.random()*9) + 1);
}

console.log(mapreduce)

let result = mapreduce.reduce((accumulator, currentValue, currentIndex) => { return (accumulator > currentIndex)?accumulator:currentIndex })

var m = mapreduce.reduce(function(acc, cur) {
 
  let arrVar = mapreduce;
  
  var getMaxElem = Math.max(...arrVar);
  
  acc.push(getMaxElem);

  arrVar = arrVar.splice(arrVar.indexOf(getMaxElem), 1, '')
  return acc;
}, []);
console.log(m);
console.log(`số lớn nhất: ${m.shift()}\nsố nhỏ nhất: ${m.pop()}`)
