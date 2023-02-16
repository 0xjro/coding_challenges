/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  // we want to swap letters since that should copy the "order"
  // of the strings. the actual letters don't matter but the
  // pattern and order does. this also avoids collisions
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];
    tMap[tLetter] = sLetter;
    sMap[sLetter] = tLetter;
  }
  for (let j = 0; j < t.length; j++) {
    let sLetter = s[j];
    let tLetter = t[j];
    if (sLetter !== tMap[tLetter] || tLetter !== sMap[sLetter]) {
      return false;
    }
  }
  return true;
};