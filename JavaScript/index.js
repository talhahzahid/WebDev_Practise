// // // console.log("hello javascript");

// // // console.log(this.window);

// // // const number = [1, 2, 3, 4];
// // // const newNumber = number.map((item) => {
// // //   return "num-" + item;
// // // });

// // // console.log(newNumber);

// // // const nums = [5, 12, 8, 130, 44];
// // // const newNumber = nums.filter((item) => {
// // //   return item > 10 && item % 2 == 0;
// // // });
// // // console.log(newNumber)

// // // const users = [
// // //   { id: 1, name: "Ali" },
// // //   { id: 2, name: "Sara" },
// // // ];

// // // const newUser = users.find((item) => {
// // //   return item.id === 2;
// // // });
// // // console.log(newUser);

// // // const num = [1, -2, 4, 6, -4, 5, 34];
// // // const newNumber = num.some((item) => {
// // //   return item < 0;
// // // });
// // // console.log(newNumber);

// // // const num = [1, 2, 3, 5, 646, 46747];
// // // const newNumber = num.every((item) => item > 0);
// // // console.log(newNumber);

// // // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // const newNumber = num.includes(2);
// // // console.log(newNumber);

// // // const num = [10, 2, 5, 1];
// // // const newNumber = num.sort((item) => {
// // //   return item;
// // // });
// // // console.log(newNumber);

// // // const num = [1, 2, 2, 3, 4, 4, 5];
// // // const newNumber = [...new Set(num)];
// // // console.log(newNumber);

// // // const num = [1, 2, 2, 3, 4, 4, 5];
// // // const newNumber = num.filter((item, index, arr) => {
// // //   return arr.indexOf(item) === index;
// // // });

// // // console.log(newNumber);

// // // const cart = [
// // //   { price: 100, qty: 2 },
// // //   { price: 50, qty: 3 },
// // // ];

// // // const totalPrice = cart.map((item) => {
// // //   return item.price * item.qty;
// // // });
// // // console.log(totalPrice);

// // // const num = [10, 40, 3, 5, 12, 42];
// // // const res1 = num.sort((a, b) => a - b); // ascending
// // // const res2 = num.sort((a, b) => b - a); // descending
// // // console.log(res1);
// // // console.log(res2);

// // // const arr = [0, "hello", false, 42, "", null, "JS", undefined];

// // // const result = arr.filter(Boolean);

// // // console.log(result);

// // // console.log(undefined === 1);
// // // console.log(undefined === null ? "true" : "false");

// // // const nums = [1, 2, 3, 4];
// // // const totalNumber = nums.reduce((acc, item) => {
// // //   return acc + item;
// // // }, 0);
// // // console.log(totalNumber);

// // // const fruits = ["apple", "banana", "apple"];

// // // const count = fruits.reduce((acc, fruit) => {
// // //   console.log(acc[fruit]);
// // //   acc[fruit] = (acc[fruit] || 0) + 1;
// // //   return acc;
// // // }, {});
// // // console.log(count);

// // console.log(typeof null, "type of null");
// // console.log(typeof Object, "type of object");
// // console.log(typeof Boolean, "type of boolean");
// // console.log(null === null);
// // console.log(null === Object);

// // const obj = {
// //   name: "xyz",
// //   age: 20,
// // };
// // for(let i in obj){
// //     console.log(i)
// // }
// // // array.forEach(element => {
// // //     console.log(element)
// // // });

// // // let arr = [1,2,3,4,5]
// // let obj = {name : 'new',age:12}
// // for(let i in obj){
// //     console.log(i)
// // }
// // for in
// const mobile = {
//   brand: "samsung",
//   model: "s23",
//   price: "100000",
// };
// for (let i in mobile) {
//   //   console.log(mobile[i]);
// }

// // for of
// const colors = ["red", "blue", "yellow"];
// for (let i of colors) {
//   // console.log(i)
// }

// const reverseString = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// };

// console.log(reverseString("new"));

// for(let i = 10 ; i >= 0 ; i--){
//     console.log(i)
// }

// let arr = ["Hop", "Hip"];
// for (let i = 1; i >= 0; i--) {s
//   console.log(arr[i]);
// }

// const firstUnique = (val) => {
//   let count = [];
//   for (let char of val) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of val) {
//     if (count[char] === 1) {
//       return char;
//     }
//   }
//   return "koi unique nahi";
// };

// console.log(firstUnique("ttalha"));

// let str = 'new'
// for(let i = 0 ; i < str.length ; i++){
//     console.log(str[i])
// }

// function compressString(str) {
//   let compressed = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compressed += str[i] + count;
//       count = 1;
//     }
//   }
//   return compressed;
// }

// // Testing
// console.log("Output:", compressString("aaabbccccd"));

// [1,2,3,4,5,6]
// const findLargestNumber = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   //   console.log(max)
//   return max;
// };
// const res = [1, 2, 3, 4, 5];
// console.log("res", findLargestNumber(res));
// // findLargestNumber([1, 2, 3, 4, 5]);

// function fizzBuzz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

function compressedString(str) {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed;
}
console.log(compressedString("helloworld"))
