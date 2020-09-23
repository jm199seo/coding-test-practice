function solution(priorities, location) {
  var answer = 0;
  let maxP = -1;
  let indexArr = priorities.map((_, idx) => idx);
  const locIndex = indexArr[location];

  // // 중요도별 길이
  let pLen = new Map();
  priorities.forEach((p) => {
    if (p > maxP) { maxP = p; }
    if (pLen.has(p)) {
      pLen.set(p, pLen.get(p) + 1);
    }
    else {
      pLen.set(p, 1);
    }
  });
  pLen = new Map([...pLen.entries()].sort((a, b) => b[0] - a[0]));

  let solutionArr = [];
  const totalDocCount = priorities.length;

  while (solutionArr.length !== totalDocCount) {
    // 일단 꺼냄
    const ejected = priorities.shift();
    const ejectedIdx = indexArr.shift();

    // 더 중요한 문서가 대기열에 있을경우 대기목록 가장 마지막에 넣기
    if (ejected < maxP) {
      priorities.push(ejected);
      indexArr.push(ejectedIdx);
    }
    // 대기열에서 꺼낸 문서가 가장 중요한 문서일 경우
    else {
      if (ejectedIdx === locIndex) {
        console.log('hi')
        console.log(ejectedIdx);
        console.log(solutionArr[solutionArr.length - 1]);
        return solutionArr[solutionArr.length - 1];
      }

      solutionArr.push(ejectedIdx);
      // 현재 maxP의 갯수
      const cnt = pLen.get(maxP);
      if (cnt === 1) {
        pLen.delete(maxP);
        maxP = pLen.get(maxP - 1);
      }
      else {
        pLen.set(maxP, cnt - 1);
      }
    }
  }
  answer = solutionArr.indexOf(location) + 1;
  return answer;
}

console.assert(solution([2, 1, 3, 2], 2) === 1);
// console.assert(solution([1, 1, 9, 1, 1, 1], 0) === 5);