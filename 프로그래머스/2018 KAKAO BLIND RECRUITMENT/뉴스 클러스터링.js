// https://programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  var answer = 0;

  if (str1.length === 0 && str2.length === 0) {
    return 65536;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length - 1; i++) {
    const cut = str1.slice(i, i + 2);
    if (/[a-zA-Z]{2}/.test(cut)) {
      if (map1.has(cut)) { map1.set(cut, map1.get(cut) + 1); }
      else { map1.set(cut, 1); }
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const cut = str2.slice(i, i + 2);
    if (/[a-zA-Z]{2}/.test(cut)) {
      if (map2.has(cut)) { map2.set(cut, map2.get(cut) + 1); }
      else { map2.set(cut, 1); }
    }
  }

  if (map1.size === 0 && map2.size === 0) {
    return 65536;
  }
  const union = [];
  const intersection = [];
  const biggerSize = map1.size > map2.size ? map1.size : map2.size;

  if (map1.size === biggerSize) {
    for (let [key, value] of map1.entries()) {
      if (map2.has(key)) {
        union.push(...Array(Math.max(value, map2.get(key))).fill(key));
        intersection.push(...Array(Math.min(value, map2.get(key))).fill(key));
        map1.delete(key);
        map2.delete(key);
      }
      else {
        union.push(...Array(value).fill(key));
        map1.delete(key);
      }
    }
  }
  else {
    for (let [key, value] of map2.entries()) {
      if (map1.has(key)) {
        union.push(...Array(Math.max(value, map1.get(key))).fill(key));
        intersection.push(...Array(Math.min(value, map1.get(key))).fill(key));
        map1.delete(key);
        map2.delete(key);
      }
      else {
        union.push(...Array(value).fill(key));
        map2.delete(key);
      }
    }
  }
  map1.forEach((v, k) => union.push(...Array(v).fill(k)));
  map2.forEach((v, k) => union.push(...Array(v).fill(k)));
  answer = Math.floor(intersection.length / union.length * 65536);
  return answer;
}

console.assert(solution("FRANCE", "french") === 16384);
// console.assert(solution("ABDDD", "DDEFGHH") === 7281);
// console.assert(solution("CCDEFGHH", "ABCCC") === 6553);
// console.assert(solution("AACCC", "A A A A A C C C C") === 0);
// console.assert(solution("AA_bb_aa_AA", "BBB") === 13107);
// console.assert(solution("handshake", "shake hands") === 65536);
// console.assert(solution("aa1+aa2", "AAAA12") === 43690);
// console.assert(solution("E=M*C^2", "e=m*c^2") === 65536);