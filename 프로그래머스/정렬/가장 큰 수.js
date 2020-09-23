function solution(numbers) {
  var answer = '';
  const answerArr = [];
  // 숫자별로 분류
  const numSort = numbers.reduce((acc, n) => {
    const firstIdx = n.toString()[0];
    if (acc[firstIdx] === undefined) {
      acc[firstIdx] = [n];
    }
    else {
      acc[firstIdx].push(n);
    }
    return acc;
  }, {});

  for (let i = 9; i >= 0; i--) {
    const currentDigitArr = numSort[i];
    if (currentDigitArr === undefined) { continue; }
    // // 한자리 수 인 숫자가 있다면
    currentDigitArr.sort((a, b) => {
      a = a.toString();
      b = b.toString();
      const sumA = a + b;
      const sumB = b + a;
      return parseInt(sumB, 10) - parseInt(sumA, 10);
    });
    answerArr.push(currentDigitArr);
  }

  answer = answerArr.reduce((acc, a) => {
    return acc.concat(a.join(''));
  }, []).join('');

  if (answer == 0) { return '0'; }
  return answer;
}

// console.assert(solution([6, 10, 2]) === '6210');
console.assert(solution([471, 47]) === '47471');
// console.assert(solution([3, 30, 34, 5, 9]) === '9534330');
// console.assert(solution([0, 0, 0]) === '0');
// console.assert(solution([0, 0, 1000]) === '100000');
// console.assert(solution([471, 45, 441, 47, 4]) === '47471454441');
// console.assert(solution([41, 412]) === '41412');
console.assert(solution([40, 403]) === '40403');
// console.assert(solution([40, 407]) === '40407');
// console.assert(solution([10, 101]) === '10110');
// console.assert(solution([2, 200, 20]) === '220200');
// console.assert(solution([2, 20, 200]) === '220200');
// console.assert(solution([10, 101]) === '10110');
// console.assert(solution([479, 43, 4]) === '479443');
// console.assert(solution([91, 4, 491]) === '914914');
// console.assert(solution([47, 4, 421]) === '474421');