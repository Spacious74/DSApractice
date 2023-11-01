function countNiceSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "1") {
      count += 1;
      let j = i + 1;
      while (j < S.length && S[j] === "1") {
        count += 1;
        j += 1;
      }
    }
  }

  return count;
}

// Example usage
const string_S = "0100";
const niceSubstringsCount = countNiceSubstrings(string_S);
console.log(niceSubstringsCount);
