var s1 = "aabcc";
var s2 = "adcaa";
var result = 0;
var i = 0;
var m = 0;
var array1 = [];
var array2 = [];
function solution(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    array1.push(s1.charCodeAt(i));
  }
  for (let j = 0; j < s2.length; j++) {
    array2.push(s2.charCodeAt(j));
  }

  for (i; i < array1.length; i++) {
    if (array1[i] == array2[m]) {
      result++;
      array1.splice(i, 1);
      array2.splice(m, 1);
      i = -1;
      m = 0;
    } else {
      if (m == array2.length - 1) {
        m = 0;
      } else {
        i--;
        m++;
      }
    }
  }
  return result;
}
console.log(solution(s1, s2));