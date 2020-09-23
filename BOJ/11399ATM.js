/**
 * https://www.acmicpc.net/problem/11399
 * 
 * */
var fs = require("fs")

// 문자 하나
var input = fs.readFileSync("/dev/stdin").toString()

// 한 칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
// var input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")

// 줄바꿈으로 구분
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")

function solution(time) {
  // let [numP, time] = input.split('\n');
  time = time.split(' ');

  const originalIndex = time.reduce((acc, t, idx) => {
    acc[t] !== undefined ? acc[t].push(idx) : acc[t] = [idx];
    return acc;
  }, []);

  const sortedTime = [...time].sort((a, b) => a - b);

  const sortedIndex = originalIndex.reduce((acc, st) => {
    // console.log(st);
    st.forEach(t => acc.push(t));
    return acc;
  }, []);

  let tempSum = 0;
  const answer = sortedIndex.reduce((acc, current) => {
    tempSum += parseInt(time[current]);
    acc += tempSum;
    return acc;
  }, 0);
  console.log(answer);


  return answer;
}

solution(input[1]);


const input = `5
3 1 4 3 2`;

const ans = solution(input);
console.log(ans);