// https://programmers.co.kr/learn/courses/30/lessons/49993
function solution(skill, skill_trees) {
  var answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const currentSTree = skill_trees[i].split('');
    const skillOrder = skill.slice();
    let skillOrderIndex = 0;
    let flag = true;

    // CB D
    // F
    while (currentSTree.length > 0) {
      const currentChar = currentSTree.shift();
      if (skillOrder[skillOrderIndex] === currentChar) {
        skillOrderIndex++;
      }
      else if (skillOrder.indexOf(currentChar) < 0) {
        continue;
      }
      else {
        flag = false;
        break;
      }
    }
    if (flag === false) {
      continue;
    }
    if (currentSTree.length === 0) {
      answer++;
    }
  }
  return answer;
}

// console.log(solution('CBD', ["CBD"])); // 2
// console.log(solution('CBD', ["CDB"])); // 2
// console.log(solution('CBD', ["AECB"])); // 2
// console.log(solution('CBD', ["CBADF"])); // 2
console.log(solution('CBD', ["BACDE", "CBADF", "AECB", "BDA"])); // 2