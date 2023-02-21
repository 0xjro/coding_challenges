/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/

// You have to iterate through `t` at least one time. From there
//   keeping track of existing characters (+ order) can be done via
//   a counter.

var isSubsequence = function(s, t) {
  let counter = 0;
  sLetter = s[counter];
  for (let i = 0; i < t.length; i++) {
    let currentLetter = t[i];
    if (sLetter === currentLetter) {
      counter++;
      sLetter = s[counter];
    }
  }
  return counter === s.length;
};