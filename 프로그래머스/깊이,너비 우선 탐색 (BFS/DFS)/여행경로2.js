function solution(tickets) {
  var answer = [];

  const ticketObj = tickets.reduce((acc, t) => {
    if (acc.has(t[0])) {
      const orig = acc.get(t[0]);
      const toInsert = orig.concat(t[1]).sort((a, b) => a.localeCompare(b));
      acc.set(t[0], toInsert);
    }
    else {
      acc.set(t[0], [t[1]]);
    }
    return acc;
  }, new Map());
  // console.log(ticketObj);

  let lastDepth = -1;
  let lastCarry = [];

  const getCycle = (depth, root, carry) => {
    lastDepth = depth;
    lastCarry = [...carry];

    const currentCities = ticketObj.get(root);
    if (depth === tickets.length) {
      answer = [...carry];
      return;
    }
    if (currentCities === undefined) {
      console.log(currentCities);
      return;
    }
    else {
      for (let i = 0; i < currentCities.length; i++) {
        const nextRoot = currentCities[i];
        getCycle(depth + 1, nextRoot, carry.concat(nextRoot));
        carry.splice(carry.length - 1, 1);
      }
    }
    // else {
    //   for (let i = 0; i < currentCities.length; i++) {
    //     const nextRoot = currentCities.shift();
    //     getCycle(depth + 1, nextRoot, carry.concat(nextRoot));
    //   }
    // }
  };
  getCycle(0, 'ICN', ['ICN']);


  // Backtracking (가능한 경로가 2개 이상일 경우 알파벳 순서로 return하는데 모든 도시를 방문하지 않은 경우)
  // for (let i = 0; i < 5; i++) {
  //   if (answer.length > 0) {
  //     console.log(i);
  //     break;
  //   }
  //   console.log(lastCarry);
  //   const toInsert = lastCarry.pop();
  //   // console.log(toInsert);
  //   const startFrom = lastCarry[lastCarry.length - 1];
  //   // console.log(startFrom);

  //   // console.log(lastCarry);

  //   // console.log(ticketObj);
  //   // ticketObj.get(startFrom).splice(1, 0, toInsert);
  //   ticketObj.get(startFrom).splice(1, 0, toInsert).sort((a, b) => a.localeCompare(b));
  //   // console.log(ticketObj);

  //   // console.log(lastCarry);

  //   getCycle(lastDepth - 1, startFrom, lastCarry);
  //   // ticketObj.get(startFrom).sort((a, b) => a.localeCompare(b));
  // }

  console.log(answer);
  return answer;
}

// console.assert(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]) === ["ICN", "JFK", "HND", "IAD"]);
// console.assert(solution([["ICN", "SFO"], ["SFO", "ICN"], ["ICN", "SFO"], ["SFO", "QRE"]]) === ["ICN", "SFO", "ICN", "SFO", "QRE"]);
// console.assert(solution([["HND", "IAD"], ["JFK", "HND"], ["ICN", "JFK"]]) === ["ICN", "JFK", "HND", "IAD"]);
// console.assert(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]) === ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
// console.assert(solution([["ICN", "A"], ["A", "B"], ["B", "A"], ["A", "ICN"], ["ICN", "A"]]) === ["ICN", "A", "B", "A", "ICN", "A"]);
// console.assert(solution([["ICN", "A"], ["ICN", "B"], ["B", "ICN"]]) === ["ICN", "A", "B", "A", "ICN", "A"]);
// console.assert(solution([["ICN", "A"], ["ICN", "A"], ["A", "ICN"]]) === ['ICN', 'A', 'ICN', 'A']);
// console.assert(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) === ['ICN', 'BOO', 'DOO', 'BOO', 'ICN', 'COO', 'DOO', 'COO', 'BOO']);
// console.assert(solution([['ICN', 'A'], ['A', 'C'], ['A', 'D'], ['D', 'B'], ['B', 'A']]) === ['ICN', 'A', 'D', 'B', 'A', 'C']);
// console.assert(solution([['ICN', 'COO'], ['COO', 'ICN'], ['COO', 'ICN']]) === ['ICN', 'A', 'D', 'B', 'A', 'C']);
// console.assert(solution([['ICN', 'COO'], ['ICN', 'BOO'], ['COO', 'ICN'], ['BOO', 'DOO']]) === ['ICN', 'COO', 'ICN', 'BOO', 'DOO']);
// console.assert(solution([['ICN', 'AAB'], ['ICN', 'AAB'], ['AAB', 'ICN']]) === ['ICN', 'B', 'ICN', 'A']);

