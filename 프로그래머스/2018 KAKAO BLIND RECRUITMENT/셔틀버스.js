// https://programmers.co.kr/learn/courses/30/lessons/17678
function solution(n, t, m, timetable) {
  var answer = '';

  timetable = timetable.map(time => {
    return str2Time(time);
  });
  timetable.sort((a, b) => a - b);

  const busTable = {};
  const busTableTimes = [];
  let currentTime = 9 * 60;
  for (let i = 0; i < n; i++) {
    const nextTime = currentTime + (i * t);
    busTableTimes.push(nextTime);
    busTable[nextTime] = [];
  }

  let lastTime = -1;

  for (let i = 0; i < n; i++) {
    currentTime = busTableTimes[i];
    while (timetable.length > 0 && busTable[currentTime].length < m) {
      const currentCrew = timetable.shift();
      if (currentCrew <= currentTime) {
        busTable[currentTime].push(currentCrew);
        lastTime = currentCrew;
      }
      else {
        timetable.unshift(currentCrew);
        break;
      }
    }
  }
  if (busTable[currentTime].length >= m) {
    const cornTime = lastTime - 1;
    return time2Str(cornTime);
  }
  return time2Str(currentTime);
}

function time2Str(time) {
  let h = Math.floor(parseInt(time / 60)) + '';
  let m = (time % 60) + '';
  h = h.padStart(2, 0);
  m = m.padStart(2, 0);
  return h + ':' + m;
}

function str2Time(str) {
  let [h, m] = str.split(':');
  h = parseInt(h);
  m = parseInt(m);
  return h * 60 + m;
}

// n = 1: 09:00
// n = 2: 09:00, 15:00

console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])); // "09:00"
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"])); // "09:09"
// console.log(solution(2, 1, 2, ["08:59", "09:00", "09:00", "09:00"])); // "08:59"
// console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"])); // "08:59"
// console.log(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"])); // "00:00"
// console.log(solution(1, 1, 1, ["23:50", "08:00", "01:00"])); // "00:59"
// console.log(solution(1, 1, 1, ["23:59"])); // "09:00"
// console.log(solution(10, 60, 45, ["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"])); // "18:00"