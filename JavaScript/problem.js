const str = "mango";
const getVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let v = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        v += str[i];
      }
    }
  }
  return v.split("");
};
console.log(getVowels(str));
