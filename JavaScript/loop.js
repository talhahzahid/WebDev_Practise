let str = "i am eating food";

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log("iterated i", i);
    for (let j = 0; j < vowels.length; j++) {
      //   console.log("iterated j", j);
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

// console.log(countVowels(str));

function reversedString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reversedString("new"));

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word; // replace, not add
    }
  }

  return longestWord;
}

// console.log(findLongestWord("Hello Dear  How Are You"));

function findLargestNumberInArray(num) {
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}
// console.log(findLargestNumberInArray([1, 2, 3, 4, 5, 6]));

function findSmallestNumber(arr) {
  let smallestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
    return smallestNumber;
  }
}
// console.log(findSmallestNumber([20, 2, 3, 4]));

function removeAllWhiteSpace(str) {
  //   let res = str.trim().toLowerCase();
  //   return res;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}
// console.log(removeAllWhiteSpace("Hello World"));

function calculateFactorial(num) {
  let number = 4;
  let factorial = 3;
  while (number > 0) {
    console.log("in");
    factorial = factorial * number;
    number = number - 1;
  }
  console.log(factorial);
  return factorial;
}
// console.log(calculateFactorial(5));

function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
// console.log(factorial(3));

const arr = [1, 2, 3, 43, 4, 4];
const arr2 = [2, 3, 43, 4, 2, 23, 1];

function findCommonElement(arr, arr2) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}
// console.log(findCommonElement(arr, arr2));

function isPalindrome(str) {
  let reversed = "";
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return "is palindrome";
  } else {
    return "is no palindrome";
  }
}
// console.log(isPalindrome("madam"));

function findDuplicateArr() {}
// console.log(findDuplicateArr())

function isPrime(num) {
  if (num < 0) {
    return;
  } else {
    let res = num % 2 === 0;
    return console.log(res);
  }
}
// isPrime(10);

function findDuplicates(arr) {
  let original = [];
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!original.includes(arr[i])) {
      original.push(arr[i]);
    } else {
      duplicate.push(arr[i]);
    }
  }
  console.log(original, "original");
  console.log(duplicate, "duplicate");
}
// findDuplicates([1, 2, 3, 4, 5, 1, 3, 4]);

function duplicateArr(num) {
  let freq = {};
  let duplicate = [];
  for (let i = 0; i < num.length; i++) {
    let res = num[i];
    if (freq[num[i]]) {
      freq[num[i]]++;
    } else {
      freq[num[i]] = 1;
    }
  }
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicate.push(key);
    }
  }
  console.log(freq, "freq");
  console.log(duplicate, "final duplication");

  // let seen = new Set();
  // let duplicate = new Set();
  // for (let i = 0; i < num.length; i++) {
  //   if (seen.has(num[i])) {
  //     duplicate.add(num[i]);
  //   } else {
  //     seen.add(num[i]);
  //   }
  // }
  // console.log(seen, "seen");
  // console.log(duplicate, "duplicate");
}
// duplicateArr([1, 2, 3, 4, 5, 1, 2, 4, 1, 5, 10, 43]);

function removeDuplicate(num) {
  // let seen = new Set();
  // let duplicate = new Set();
  // for (let i = 0; i < num.length; i++) {
  //   if (seen.has(num[i])) {
  //     duplicate.add(num[i]);
  //   } else {
  //     seen.add(num[i]);
  //   }
  // }
  // console.log(seen, "final remove all duplicate value");

  let seen = {};
  let unique = [];
  for (let i = 0; i < num.length; i++) {
    if (!seen[num[i]]) {
      unique.push(num[i]);
      seen[num[i]] = 1;
    }
  }
  console.log(unique);
}
// removeDuplicate([1, 2, 3, 2, 4, 5, 1]);

const num = [3, 4, 6];
target = 10;

function twoSum(num, target) {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    for (let j = 0; j < num.length; j++) {
      console.log(num[j], "iterated j");
      if (num[i] + num[j] === target) {
        console.log(i, j);
        console.log("Match Found:", num[i], "+", num[j]);
        return [i, j];
      }
    }
  }
}
console.log(twoSum(num, target));
