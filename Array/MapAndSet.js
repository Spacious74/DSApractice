// Check if two strings are anagram or not

// Map - 
// Map in a data structure which holds elements as (key, value) pairs,
// and the keys in a map are unique.

let m = new Map();
m.set(1, "Vishal");
m.set(2, "Vikram");
m.set(1, "Vikrant");
console.log("Map", m);
console.log(m.get(2));
console.log(m.keys());


// Set -
// Set is a DS that holds unique keys also

let s = new Set();
s.add(1);
s.add(2);
s.add(2);
console.log("Set", s);
console.log(typeof s);
console.log(s.has(3)); // to check key is existing or not