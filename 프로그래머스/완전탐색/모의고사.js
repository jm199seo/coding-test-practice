function solution(answers) {
  var answer = [];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let numCorrect = [0, 0, 0];

  answers.forEach((a, idx) => {
    if (a === p1[idx % 5]) { numCorrect[0]++; }
    if (a === p2[idx % 8]) { numCorrect[1]++; }
    if (a === p3[idx % 10]) { numCorrect[2]++; }
  });

  let maxScore = -1;
  for (let i = 0; i < 3; i++) {
    if (numCorrect[i] > maxScore) {
      answer = [];
      maxScore = numCorrect[i];
      answer.push(i + 1);
    }
    else if (numCorrect[i] === maxScore) {
      answer.push(i + 1);
    }
  }

  answer.sort((a, b) => a - b);
  return answer;
}

// console.assert(solution([1, 2, 3, 4, 5]) === [1]);
console.assert(solution([1, 3, 2, 4, 2]) === [1, 2, 3]);