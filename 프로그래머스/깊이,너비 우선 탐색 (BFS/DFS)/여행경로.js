function solution(tickets) {
  var answer = [];

  const ticketObj = tickets.reduce((acc, t) => {
    if (acc[t[0]] === undefined) {
      acc[t[0]] = [t[1]];
    }
    else {
      acc[t[0]].push(t[1]);
    }
    return acc;
  }, {});

  const getCycle = (graph, root, carry) => {
    const currentCities = graph[root];
    if (graph[root] === undefined || graph[root].length === 0) {
      if (carry.length === tickets.length + 1) {
        answer.push(carry);
      }
      return;
    }
    else {
      for (let i = 0; i < currentCities.length; i++) {
        const currentC = currentCities[i];
        const newGraph = JSON.parse(JSON.stringify(graph));
        newGraph[root].splice(newGraph[root].indexOf(currentC), 1);
        const newCarry = [...carry];
        newCarry.push(currentCities[i]);
        getCycle(newGraph, currentCities[i], newCarry);
      }
    }
  };
  getCycle(ticketObj, 'ICN', ['ICN']);

  answer.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) { return -1; }
      else if (a[i] === b[i]) { continue; }
      else { return 1; }
    }
    return 0;
  });
  return answer[0];
}

// console.assert(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]) === ["ICN", "JFK", "HND", "IAD"]);
console.assert(solution([["ICN", "SFO"], ["SFO", "ICN"], ["ICN", "SFO"], ["SFO", "QRE"]]) === ["ICN", "SFO", "ICN", "SFO", "QRE"]);
// console.assert(solution([["HND", "IAD"], ["JFK", "HND"], ["ICN", "JFK"]]) === ["ICN", "JFK", "HND", "IAD"]);
// console.assert(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]) === ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
// console.assert(solution([["ICN", "A"], ["A", "B"], ["B", "A"], ["A", "ICN"], ["ICN", "A"]]) === ["ICN", "A", "B", "A", "ICN", "A"]);
// console.assert(solution([["ICN", "A"], ["ICN", "B"], ["B", "ICN"]]) === ["ICN", "A", "B", "A", "ICN", "A"]);
// console.assert(solution([["ICN", "A"], ["ICN", "A"], ["A", "ICN"]]) === ['ICN', 'A', 'ICN', 'A']);
// console.assert(solution([["ICN", "BOO"], ["ICN", "COO"], ["COO", "DOO"], ["DOO", "COO"], ["BOO", "DOO"], ["DOO", "BOO"], ["BOO", "ICN"], ["COO", "BOO"]]) === ['ICN', 'BOO', 'DOO', 'BOO', 'ICN', 'COO', 'DOO', 'COO', 'BOO']);
// console.assert(solution([['ICN', 'A'], ['A', 'C'], ['A', 'D'], ['D', 'B'], ['B', 'A']]) === ['ICN', 'A', 'D', 'B', 'A', 'C']);
console.assert(solution([['ICN', 'COO'], ['COO', 'ICN'], ['COO', 'ICN']]) === ['ICN', 'A', 'D', 'B', 'A', 'C']);
// console.assert(solution([['ICN', 'AAB'], ['ICN', 'AAB'], ['AAB', 'ICN']]) === ['ICN', 'B', 'ICN', 'A']);
// console.assert(solution([['ICN', 'COO'], ['ICN', 'BOO'], ['COO', 'ICN'], ['BOO', 'DOO']]) === ['ICN', 'COO', 'ICN', 'BOO', 'DOO']);

