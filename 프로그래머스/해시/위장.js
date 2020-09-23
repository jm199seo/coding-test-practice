function solution(clothes) {
  const mapClothes = clothes.reduce((acc, [name, type]) => {
    if (!acc.has(type)) {
      acc.set(type, [name]);
    }
    else {
      const prevVal = acc.get(type);
      acc.set(type, prevVal.concat(name));
    }
    return acc;
  }, new Map());
  let sumArr = [];
  mapClothes.forEach((nameList, t) => {
    sumArr.push(nameList.length + 1);
  });
  const multiple = sumArr.reduce((acc, v) => acc *= v);
  return multiple - 1;
}

// console.assert(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]) === 5);
// console.assert(solution([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']]) === 3);
console.assert(solution([['crow_mask', 'face'], ['blue_sunglasses', 'eyewear'], ['smoky_makeup', 'face'], ['sneakers', 'foot']]) === 11);