// pseudocode:

// Function Definition:

    // Define a function averagePoints that takes two parameters: arr and subject.

// Initialize Variables:

    // Initialize a variable totalSum to 0 (to keep track of the cumulative total of all results for the subject).

    // Initialize a variable totalCount to 0 (to keep count of the number of results for the subject).

// Loop Through Array:

    // Loop through each element (student) in the array arr.

// Check If Subject Exists:

    // Within the loop, check if the subject exists in the student's results.

// Update Totals:

    // If the subject exists, add the subject's result to totalSum and increment totalCount by 1.

// Calculate Average:

    // After the loop, calculate the average by dividing totalSum by totalCount.

// Return Average:

    // Return the calculated average.


let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

// const averagePoints = (arr, subject) => {
//     let totalSum = 0;
//     let totalCount = 0;

//     // Loop through each student
//     for (let student of arr) {
//         // Check if the student's results contain the subject
//         if (student.results.hasOwnProperty(subject)) {
//             totalSum += student.results[subject];
//             totalCount++;
//         }
//     }

//     // Calculate and return the average
//     return totalCount > 0 ? totalSum / totalCount : 0;
// };



// // Calculate the average marks for a subject
// let averageMarks = averagePoints(students, 'english');
// console.log(`Average English Marks: ${averageMarks}`); // Outputs the average marks for English


