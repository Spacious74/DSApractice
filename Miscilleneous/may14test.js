// BOOTCAMP

// Problem Statement

// You are given N students and an array of size N. 
// The knowledge of the i-th student is a[i]. You are also given an integer X. 
// You want to create some boot camps to teach them about coding. 
// Since you want to make the maximum profit, 
// you have to create the maximum number of boot camps possible. 
// To create a bootcamp the product of the number of students in the bootcamp 
// and the student with the least knowledge should be greater than twice of X. 
// Also a student can be a member of only one bootcamp and a few students might 
// not be a part of any bootcamp.

// Count the maximum number of boot camps possible.

// Constraints

// All the input values are integers
// 1<=t<=100
// 1<=N<=10^5
// 1<=X<=10^9
// 1<=a[i]<=10^8
// Input :

// The first contains the integer t the number of test cases.

// The first line of each test case contains N and X where N is the number of students and X is an integer

// The second line of each test case contains the N elements of the array

// Output :

// Print the maximum number of boot camps you can make.

// Sample Input :

// 2

// 10 6

// 7 1 8 2 7 6 4 1 9 1

// 4 7

// 9 7 4 7

// Sample Output :

// 2

// 1

// Sample Explanation :

// In the first test case you can make first boot camp with 1st student and 3rd student and the second boot camp with the 5th and 9th student

// In the second test case you can make a bootcamp with all the four students

function countBootCamps(N, X, knowledge) {
    // Sort the knowledge array in ascending order
    knowledge.sort((a, b) => a - b);
  
    let bootCamps = 0;
    let bootCampStudents = 0;
  
    for (let i = 0; i < N; i++) {
      // Check if the current student's knowledge is already part of a boot camp
      if (knowledge[i] === -1) {
        continue;
      }
  
      // Check if the current student's knowledge is greater than or equal to twice of X
      if (knowledge[i] >= 2 * X) {
        bootCamps++;
        continue;
      }
  
      // Find the minimum knowledge greater than or equal to X
      let minKnowledge = knowledge[i];
      let minIndex = i;
      for (let j = i + 1; j < N; j++) {
        if (knowledge[j] >= X) {
          minKnowledge = knowledge[j];
          minIndex = j;
          break;
        }
      }
  
      // Check if a student with knowledge greater than or equal to X is found
      if (minKnowledge >= X) {
        // Mark the current student and the student with minimum knowledge as part of a boot camp
        knowledge[i] = -1;
        knowledge[minIndex] = -1;
        bootCamps++;
        bootCampStudents += 2;
      }
    }
  
    // Check if there are any remaining students who are not part of any boot camp
    const remainingStudents = N - bootCampStudents;
    if (remainingStudents > 0) {
      bootCamps += Math.ceil(remainingStudents / 3);
    }
  
  return bootCamps;
}
console.log(countBootCamps(10, 6, [7, 1, 8, 2, 7, 6, 4, 1, 9, 1]))
