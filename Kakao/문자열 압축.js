function solution(s) {
  var answer = 0;
  let potentialAns = [s];

  const splitS = s.split('')

  for (let i = 1, strLen = splitS.length; i <= strLen / 2; i++) {
    potentialAns.push(createStrFromCut(s, i));
  }
  const min = Math.min(...potentialAns.map(({ length }) => length));
  answer = min;
  console.log(answer);
  return answer;
}

function createStrFromCut(str, cut) {
  let res = '';
  let lookAhead = [];
  const left = str.length % cut;

  for (let i = 0; i < str.length - left; i += cut) {
    const curr = str.slice(i, i + cut);
    const next = str.slice(i + cut, i + cut * 2);

    if (next !== '') {
      // 다음 패턴이랑 같을 경우
      if (curr === next) {
        // 중복되는 글자 추가
        lookAhead.push(curr);
      }
      else {
        if (lookAhead.length > 0) {
          res += `${lookAhead.length + 1}${lookAhead.shift()}`;
          lookAhead = [];
        }
        else {
          // 다음 글자랑 같지 않을 경우
          res += curr;
        }
      }
    }
    else {
      if (lookAhead.length > 0) {
        lookAhead.push(curr);
        res += `${lookAhead.length}${lookAhead[0]}`;
      }
      else {
        res += curr;
      }
    }
  }


  if (left > 0) {
    res += str.slice(str.length - left);
  }
  return res;
}

// console.assert(solution("aabbaccc") === 7);
// console.assert(solution("ababcdcdababcdcd") === 9);
// console.assert(solution("abcabcdede") === 8);
// console.assert(solution("abcabcabcabcdededededede") === 14);
// console.assert(solution("xababcdcdababcdcd") === 17);
// console.assert(solution("azazyazazyffddaffddaffddauioui") === 1);