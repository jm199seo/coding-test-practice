function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  const truckInfo = truck_weights.map(t => {
    return { weight: t, time: 0 };
  });

  // Current weight on bridge
  let bw = 0;
  // Truck list on bridge
  let tList = [];
  // Completed truck list
  let completedTList = [];

  while (completedTList.length !== truck_weights.length) {
    // increment all times of trucks on bridge
    answer++;

    // 다리에 있는 모든 트럭의 time++
    tList.forEach(t => t.time++);

    // 다리에 트럭이 있고 맨 앞에 있는 트럭의 경과시간이 되었을경우
    if (tList[0] && tList[0].time === bridge_length) {
      const truckToRemove = tList.shift();
      completedTList.push(truckToRemove);
      bw -= truckToRemove.weight;
    }

    if (truckInfo[0] && truckInfo[0].weight + bw <= weight) {
      const truckToAdd = truckInfo.shift();
      bw += truckToAdd && truckToAdd.weight;
      tList.push(truckToAdd);
    }
  }
  return answer;
}

// console.assert(solution?(2, 10, [7, 4, 5, 6]) === 8);
// console.assert(solution(100, 100, [10]) === 101);
console.assert(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) === 110);