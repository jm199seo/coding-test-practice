function solution(progresses, speeds) {
  let answer = [];

  // 배포 시간 알아내기
  const times = progresses.map((p, idx) => {
    const left = 100 - p;
    return Math.ceil(left / speeds[idx]);
  });

  let lastTime = times[0];
  let ansIdx = 0;
  answer[ansIdx] = 1;
  times.splice(1).forEach((t) => {
    if (t <= lastTime) {
      answer[ansIdx] !== undefined ? answer[ansIdx]++ : answer[ansIdx] = 1;
    }
    else {
      ansIdx++;
      answer[ansIdx] !== undefined ? answer[ansIdx] += 1 : answer[ansIdx] = 1;
      lastTime = t;
    }
  });
  return answer;
}

console.assert(solution([93, 30, 55], [1, 30, 5]) === [2, 1]);
console.assert(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]) === [1, 3, 2]);
// console.log(res);
