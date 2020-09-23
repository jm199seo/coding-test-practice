function solution(n, lost, reserve) {
  var answer = 0;
  let lostIdx = 0;
  let reserveIdx = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 1; i <= n; i++) {
    // console.log(`\n\nlost[${lostIdx}] - ${lost[lostIdx]}`);
    // console.log(`reserve[${reserveIdx}] - ${reserve[reserveIdx]}`);

    // 도난 X
    if (lost[lostIdx] !== i) {
      answer++;
    }
    // 도난 O 
    else {
      lostIdx++;

      // 도난 당했는데 앞뒤사람이 여벌이 있는경우
      if (reserve[reserveIdx] === i - 1 || reserve[reserveIdx] === i || reserve[reserveIdx] === i + 1) {
        // 다음 잃어버린사람이 여벌체육복을 가져온사람일 경우 (빌려줄수 없음)
        if (lost[lostIdx] === reserve[reserveIdx]) {
          // answer++;
          // reserveIdx++;
          continue;
        }

        reserveIdx++;
        answer++;
      }
      // // 도난 당했는데 여벌이 있는경우
      // else if (reserve[reserveIdx] === i) {
      //     reserveIdx++;
      //     answer++;
      // }
      // // 도난 당했는데 다음사람이 여벌이 있는경우
      // else if (reserve[reserveIdx] === i + 1) {
      //     reserveIdx++;
      //     answer++;
      // }
    }
    // console.log(`current: ${i} -> answer: ${answer}`);
  }

  return answer;
}