// Problem Statement 1
// Alice and Bob are two friends. Initially, the skill levels of them are zero. They work on alternative days, i.e. one of Alice and Bob works on the odd-numbered days (1,3,5,…) and the other works on the even-numbered days (2,4,6,…). The skill levels of Alice and Bob increase by A, B respectively on the days they work.
 
// Determine if it is possible that the skill levels of Alice and Bob become exactly P, Q respectively on some day.
 
// Input Format
 
// The first line contains an integer T, denoting the number of test cases. The T test cases then follow:
// The first and only line of each test case contains four space-separated integers A, B, P, Q.
 
// Output Format
 
// For each test case, print YES if it is possible that the skill levels of Alice and Bob become exactly P, Q on some day, otherwise print NO.
// You may print each character of the string in uppercase or lowercase (for example, the strings "yEs", "yes", "Yes" and "YES" will all be treated as identical).


// Constraints
// 1 ≤ T ≤ 103
// 1 ≤ A, B, P, Q ≤ 109
 
// Subtasks
 
// Subtask 1 (100 points): Original constraints
 
// Sample Input 1 
// 4
// 1 2 1 2
// 1 2 3 2
// 4 3 4 6
// 3 5 9 25
// Sample Output 1 
// YES
// NO 
// YES
// NO
// Explanation
// Test Case 1: Alice works on the first day and gains skill level 1. Bob works on the second day and gains skill level 2.
// Test Case 2: There is no possible way that the skill levels of Alice and Bob become 3 and 2 respectively.
// Test Case 3: Bob works on the first and third day and Alice works on the second day. Hence after the third day, the skill levels of Alice and Bob become 1⋅4=4 and 2⋅3=6 respectively.

function findEquality(A,B,P,Q){

    if (P % A !== 0 || Q % B !== 0) {
        return "NO";
    }
    
    const numDaysAlice = parseInt(P / A);
    const numDaysBob = parseInt(Q / B);
    
    if (numDaysAlice % 2 === numDaysBob % 2) {
        return "YES";
    } else {
        return "NO";
    }


}

let result = findEquality(4,3,4,6);
console.log(result);



// Problem Statement 2
// Mr. Adam is the manager of the Code cinemas and after a long break, the theatres are now open to the public again. To compensate for the loss in revenue due to Covid-19, Mr. Adam wants to maximize the profits for every show from now on and at the same time follow the guidelines set by the government. The guidelines are:
// If two people are seated in the same row, there must be at least one empty seat between them.
// If two people are seated in different rows, there must be at least one completely empty row between them. That is, if there are people seated in rows i and j where i < j, there must be some row k such that i < k < j and nobody is seated in row k.
 
// Given the information about the number of rows and the number of seats in each row, find the maximum number of tickets Mr. Adam can sell.
// Input Format
// The first line of input will contain a single integer T, denoting the number of test cases. The description of T test cases follows.
// Each test case consists of a single line of input containing two space-separated integers N, M — the number of rows and the number of seats in each row, respectively.
 
// Output Format
 
// For each test case, output a single line containing one integer – the maximum number of tickets Mr. Adam can sell.
// Constraints
// 1 ≤ T ≤ 100
// 1 ≤ N, M ≤ 100 
 
// Sample Input 1 
// 3
// 1 5
// 3 3
// 4 4
// Sample Output 1 
// 3
// 4
// 4
// Explanation
// Test Case 1: There is only one row with five seats. Mr. Adam can sell a maximum of 3 tickets for seat numbers 1, 3 and 5.
// Test Case 2: There are three rows with three seats each. Mr. Adam can sell a maximum of 4 tickets, for seats at the start and end of row numbers 1 and 3.
// Test Case 3: There are four rows with four seats each. Mr. Adam can sell a maximum of 4 tickets, for example by choosing the seats at the start and end of row numbers 1 and 4.



const main = () => {
    const t = parseInt(readline());
    for(let i = 0 ; i < t; i++) {
        const [N,M] = readline().split(' ').map(Number);
        const maxTicketsRows = Math.round(N / 2);
        const maxTicketsCols = Math.round(M / 2);
        console.log(maxTicketsRows * maxTicketsCols)
    }
}
main()