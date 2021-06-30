let array = [-5, -4, -3, -2, 0, 1, 2, 6, 7];
function findPairzero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(findPairzero(array));
