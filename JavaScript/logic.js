// reversed string
const reversedString = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
};
// console.log(reversedString("hello"));

// Palindrome string
const palindromeString = (value) => {
  let cleanValue = value.toLowerCase();
  let reverseString = "";
  for (let i = cleanValue.length - 1; i >= 0; i--) {
    reverseString += cleanValue[i];
  }
  console.log(reverseString, "reversed string value");
  if (reverseString === cleanValue) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
};
// palindromeString("Madam");

// duplicate array

const findDuplicateArray = (num) => {
  let seen = {};
  let duplicate = [];

  for (let i of num) {
    if (seen[i]) {
      duplicate.push(i);
    } else {
      seen[i] = true;
    }
  }
  return duplicate;
};
// console.log(findDuplicateArray([1, 2, 3, 4, 4]));

// fizzbuzz
function fizzBuzz() {
  for (let i = 0; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz();

const findEvenNumberAndDouble = (num) => {
  let evens = num.filter((item) => {
    return item % 2 === 0;
  });
  let result = evens.map((item) => {
    return item * item;
  });

  return result;
};

console.log(findEvenNumberAndDouble([1, 2, 3, 4, 5, 6]));
