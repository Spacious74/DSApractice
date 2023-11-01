function maxTripletPower(arr) {
  const n = arr.length;
  let maxPower = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const power = Math.abs(arr[i] - arr[j]) * arr[k];
        maxPower = Math.max(maxPower, power);
      }
    }
  }

  return maxPower;
}

// Example usage
const array = [1, 2, 4, 3];
const maxPower = maxTripletPower(array);
console.log("Maximum power:", maxPower);
