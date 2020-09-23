/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const d = [];
  const dp = (arr, idx) => {
    if (idx === arr.length) {
      return 0;
    }
    if (d[idx] !== undefined) { return d[idx]; }
    return d[idx] = Math.max(arr[idx], arr[idx] + dp(arr, idx + 1));
  };

  dp(nums, 0);
  return d.sort((a, b) => b - a)[0];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, 4, -3, 8])); // 9