// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const addNum = myNumbers.map((num) => {
//     return num + 10;
// });
// console.log(addNum);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let addNumbers = []; // Create an empty array to store the results

myNumbers.forEach((num) => {
    addNumbers.push(num + 10); // Push each transformed value into the new array
});

console.log(addNumbers); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

