var a = [-1, 150, 190, 170, -1, -1, 160, 180];
var saveindex = [];
console.log(solution(a));
function solution(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] != -1) {
      newArray.push(array[i]);
    } else {
      saveindex.push(i);
    }
  }
  newArray.sort();
  for (let j = 0; j < saveindex.length; j++) {
    newArray.splice(saveindex[j], 0, -1);
  }
  return newArray;
}