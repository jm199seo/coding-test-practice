// https://programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
  var answer = '';

  const distanceFromPos = (pos, target) => {
    const remainder = Math.abs(pos - target) % 3;
    // vertical movement
    if (remainder === 0) {
      return Math.abs(target - pos) / 3;
    }
    else {
      // calculate vertical distance
      let verticalD = 0;
      while (Math.abs(pos - target) > 3) {
        verticalD += 1;
        if (pos > target) {
          pos -= 3;
        }
        else {
          target -= 3;
        }
      }
      let horizontalD = (pos > target) ? pos - target : target - pos;
      return verticalD + horizontalD;
    }
  }

  numbers = numbers.map(n => n === 0 ? 11 : n);

  let lPos = 10;
  let rPos = 12;
  while (numbers.length > 0) {
    const currentNum = numbers.shift();

    if (currentNum === 1 || currentNum === 4 || currentNum === 7) {
      lPos = currentNum;
      answer += 'L';
    }
    else if (currentNum === 3 || currentNum === 6 || currentNum === 9) {
      rPos = currentNum;
      answer += 'R';
    }
    else {
      const lDistance = distanceFromPos(lPos, currentNum);
      const rDistance = distanceFromPos(rPos, currentNum);
      if (lDistance === rDistance) {
        if (hand === 'right') {
          rPos = currentNum;
          answer += 'R';
        }
        else {
          lPos = currentNum;
          answer += 'L';
        }
      }
      else if (lDistance < rDistance) {
        lPos = currentNum;
        answer += 'L';
      }
      else if (lDistance > rDistance) {
        rPos = currentNum;
        answer += 'R';
      }
    }
  }
  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"