function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] == arr[j];
    }
  }
  return i + 1;
}

// console.log(removeDuplicates([1, 2, 3, 4, 4, 1]));

function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

// console.log(findKthLargest([3, 5, 6, 1, 2], 2));

function maxProduct(arr) {
  let max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return Math.max(max1 * max2, min1 * min2);
}

// console.log(maxProduct([1, 2, 3, 4, 5, 6, 7]));

function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
