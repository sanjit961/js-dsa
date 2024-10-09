// 1. Find the Maximum Product of Two Integers in an Array
// Problem:
// Given an array of integers, find the pair of integers that, when multiplied, return the largest product.

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
    if (num < min2) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2, min1 * min2);
}

let arr = [10, -3, 5, 6, 2];

// console.log(maxProduct(arr));

// 2. Find the Kth Largest Element in an Array
// Problem:
// Given an array and an integer k, find the kth largest element.

function findKthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

let arr1 = [1, 4, 2, 5, 9, -1, 100];
let k = 5;
// console.log(findKthLargest(arr1, k));

// 3. Remove Duplicates from Sorted Array
// Problem:
// Given a sorted array, remove the duplicates in-place and return the new length of the array.

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

let arr2 = [12, 4, 4, 4, 6];

// console.log(removeDuplicates(arr2));

// 4. Rotate an Array by K Steps
// Problem:
// Rotate the array to the right by k steps, where k is non-negative.

function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

// 5. Find the Missing Number
// Problem:
// Given an array of n unique numbers where the numbers range from 1 to n+1, find the missing number.

function findMissingNum(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - actualSum;
}

// console.log(findMissingNum([1, 2, 4, 5, 6]));

// 6. Check if Array Contains Duplicate
// Problem:
// Given an array of integers, find if the array contains any duplicates.

function checkDuplicates(arr) {
  let set = new Set(arr);
  return set.size !== arr.length;
}

// console.log(checkDuplicates([1, 2, 3, 4, 5]));


// 7. Find the Intersection of Two Arrays
// Problem:
// Given two arrays, find their intersection.

function arrayIntersection(arr1, arr2){
    
}
