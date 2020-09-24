// https://programmers.co.kr/learn/courses/30/lessons/17676
function solution(lines) {
  const timeTable = lines.map(l => {
    const dt = l.substring(0, 23);
    let endDt = new Date(dt).getTime();
    const elapsedEpoch = l.substring(24, l.length - 1) * 1000;
    let startDt = new Date(dt) - elapsedEpoch + 1;
    return {
      start: startDt,
      end: endDt,
    };
  });
  timeTable.sort((a, b) => {
    return a.start - b.start;
  });

  let cached = new Map();

  for (let i = 0; i < timeTable.length; i++) {
    const intervalStart = timeTable[i].start;

    // start interval 앞뒤로 1000ms 비교
    for (let change = -999; change < 1; change++) {
      let count = 0;
      const newStart = intervalStart + change;
      const newEnd = newStart + 999;
      const key = `${newStart}:${newEnd}`;
      // 이미 비교한 구간
      if (cached.has(key)) { continue; }
      else {
        for (let j = 0; j < timeTable.length; j++) {
          if (timeTable[j].start > newEnd) {
            break;
          }
          if (timeTable[j].end < newStart) {
            continue;
          }
          if (timeTable[j].end - newStart < 1000 && timeTable[j].end - newStart >= 0) {
            count += 1;
          }
          else if (timeTable[j].start - newStart < 1000 && timeTable[j].start - newStart >= 0) {
            count += 1;
          }
          else if (newEnd - timeTable[j].start < 1000 && newEnd - timeTable[j].start >= 0) {
            count += 1;
          }
          else if (newEnd - timeTable[j].end < 1000 && newEnd - timeTable[j].start >= 0) {
            count += 1;
          }
        }
        cached.set(key, count);
      }
    }

    // end interval 앞뒤로 1000ms 비교
    // for (let change = 0; change < 1000; change++) {
    //   let count = 0;
    //   const newStart = intervalEnd + change;
    //   const newEnd = newStart + 999;
    //   const key = `${newStart}:${newEnd}`;
    //   // 이미 비교한 구간
    //   if (cached.has(key)) { continue; }
    //   else {
    //     for (let j = 0; j < timeTable.length; j++) {
    //       if (timeTable[j].start > newEnd) {
    //         break;
    //       }
    //       if (timeTable[j].end < newStart) {
    //         continue;
    //       }
    //       if (timeTable[j].end - newStart < 1000 && timeTable[j].end - newStart >= 0) {
    //         count += 1;
    //       }
    //       else if (timeTable[j].start - newStart < 1000 && timeTable[j].start - newStart >= 0) {
    //         count += 1;
    //       }
    //       else if (newEnd - timeTable[j].start < 1000 && newEnd - timeTable[j].start >= 0) {
    //         count += 1;
    //       }
    //       else if (newEnd - timeTable[j].end < 1000 && newEnd - timeTable[j].start >= 0) {
    //         count += 1;
    //       }
    //     }
    //     cached.set(key, count);
    //   }
    // }
  }

  let max = 0;
  for (let val of cached.values()) {
    max = Math.max(max, val);
  }
  return max;
}

console.assert(solution(["2016-09-15 00:00:00.000 3s"]) === 1);
// console.assert(solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]) === 2);
// console.assert(solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]) === 1);
// console.assert(solution(["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]) === 2);
// console.assert(solution(["2016-09-15 20:59:57.421 0.351s", "2016-09-15 20:59:58.233 1.181s", "2016-09-15 20:59:58.299 0.8s", "2016-09-15 20:59:58.688 1.041s", "2016-09-15 20:59:59.591 1.412s", "2016-09-15 21:00:00.464 1.466s", "2016-09-15 21:00:00.741 1.581s", "2016-09-15 21:00:00.748 2.31s", "2016-09-15 21:00:00.966 0.381s", "2016-09-15 21:00:02.066 2.62s"]) === 7);