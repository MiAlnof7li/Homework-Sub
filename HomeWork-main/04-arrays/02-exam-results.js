// =============================================
// 4. ARRAYS — Exam results
// =============================================
// 1. Count how many students passed (score 60 or more).
// 2. Find the lowest score WITHOUT Math.min.
//
// Expected output:
//   Passed: 4 of 7
//   Lowest score: 39

const scores = [78, 45, 92, 60, 55, 88, 39];

// your code here
let passwordCount = 0;
let lowestScore = scores[0];
for (let i = 0; i < scores.length; i++) {
    passwordCount++;

}

if (scores[i] >= 60) {
    lowestScore = scores[i];
}
console.log(`Passed: ${passwordCount} of ${scores.length}`);
console.log(`Lowest score: ${lowestScore}`);