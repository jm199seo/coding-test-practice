function solution(participant, completion) {
  var answer = '';

  participant = participant.sort();
  completion = completion.sort();

  if (Array.isArray(participant)) {
    // 참여 선수가 1명일 경우
    if (participant.length === 1) {
      answer = participant[0];
      return answer;
    }

    const completionLen = completion.length;
    for (let i = 0; i < completionLen; i++) {
      if (participant[i] !== completion[i]) {
        return participant[i];
      }
    }
    return participant[participant.length - 1];

    // answer = participant.filter((person) => {
    //     return !completion.includes(person);
    // });
    // console.log(answer);
  }

  return answer[0];
}