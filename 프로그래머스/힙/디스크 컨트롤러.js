function solution(jobs) {
  var answer = 0;
  const jobNum = jobs.length;
  let completeOrder = [];
  let currentTime = 0;
  const jobDetails = jobs.map((j, idx) => {
    return {
      idx,
      reqTime: j[0], // 요청시간
      jobTime: j[1], // 작업 처리 시간
      realTime: 0, // 요청부터 종료까지의 시간
    };
  }).sort((a, b) => a.jobTime - b.jobTime); // 우선 jobTime 정렬
  while (completeOrder.length !== jobNum) {
    let insertArr = [];
    for (let i = 0; i < jobDetails.length; i++) {
      const nextJob = jobDetails.shift();
      if (nextJob.reqTime > currentTime) {
        jobDetails.push(nextJob);
      }
      else {
        insertArr.push(nextJob);
        break;
      }
    }
    // 한바퀴 돌았는데도 현재 실행할수 있는 작업이 없을경우
    if (insertArr.length === 0) {
      const nextJob = jobDetails.sort((a, b) => a.reqTime - b.reqTime).shift();
      currentTime = nextJob.reqTime + nextJob.jobTime;
      nextJob.realTime = nextJob.jobTime;
      completeOrder.push(nextJob);
    }
    else {
      const nextJob = insertArr.shift();
      currentTime += nextJob.jobTime;
      nextJob.realTime = currentTime - nextJob.reqTime;
      completeOrder.push(nextJob);
    }
    jobDetails.sort((a, b) => a.jobTime - b.jobTime);
  }
  const avg = completeOrder.reduce((acc, o) => {
    return acc += o.realTime;
  }, 0) / jobNum;
  answer = parseInt(avg);
  return answer;
}

// console.assert(solution([[0, 3], [1, 9], [2, 6]]) === 9);
// console.assert(solution([[0, 5], [1, 2], [5, 5]]) === 6);
// console.assert(solution([[0, 5], [100, 2]]) === 3);
// console.assert(solution([[0, 7], [3, 2], [5, 3], [12, 7]]) === parseInt(27 / 4));
// console.assert(solution([[0, 2], [1, 4], [2, 1], [4, 2]]) === parseInt(14 / 4));
// console.assert(solution([[0, 8], [2, 4], [7, 1], [3, 7], [5, 4]]) === 10);
// console.assert(solution([[0, 8], [2, 4], [7, 1], [13, 7]]) === 7);
// console.assert(solution([[0, 1], [1, 2], [500, 6]]) === 3);
console.assert(solution([[0, 10], [4, 10], [5, 11], [15, 2]]) === 15);
