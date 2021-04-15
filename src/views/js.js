/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = [];
  if (s.length % 2 === 1) {
      return false;
  }
  const obj = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  // let bool = true;
  var boolArr = s.split('').map(v => {
      if (obj[v]) {
          if (arr.length === 0) {
              // bool = false;
              return false;
          }
          // console.log('======= v:', arr[arr.length - 1] !== obj[v]);
          if (arr[arr.length - 1] !== obj[v]) {
              // bool = false;
              return false;
          }
          arr.pop();
      } else {
          arr.push(v);
      }
      // console.log('======= arr:', v, arr);
  })
  // console.log('======= arr.length:', arr.length);
  // console.log('======= boolArr:', boolArr);
  return !boolArr.includes(false) && arr.length === 0;
};
console.log(isValid('([}}])'));