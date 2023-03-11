// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("removeShuffle", () => {
  it("removes the first item from the array and returns the remaining content shuffled", () => {
      const colors1 = ["purple", "blue", "green", "yellow", "pink"]
      // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    expect(removeShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(removeShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
// ReferenceError: removeShuffle is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called removeShuffle
// Input will be an array
// Remove the first item in the array using .shift()
// Shuffle the array (didn't know how to do this initially, so had to look it up and saw how to use the .sort() and Math.random() method for this problem)
// Return the array
// Output will be an array with the first item removed, and the rest of the content is shuffled

const removeShuffle = (array) => {
  array.shift()
  array.sort(() => Math.random() - 0.5)
  return array
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("tallyBalance", () => {
  it("returns the end tally", () => {
      const votes1 = { upVotes: 13, downVotes: 2 }
      // Expected output: 11
    expect(tallyBalance(votes1)).toEqual(11)
      const votes2 = { upVotes: 2, downVotes: 33 }
      // Expected output: -31
    expect(tallyBalance(votes2)).toEqual(-31)
  })
})
// ReferenceError: tallyBalance is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called tallyBalance
// Input is an object
// Need to access the values in the object
// Combine the upVotes with downVotes (downVotes are considered negative while upVotes are positive) so the equation would be upVotes - downVotes
// Output is a number that contains the end tally balance

const tallyBalance = (object) => {
  return object.upVotes - object.downVotes   // not sure if there is a more dynamic way to do this? will the values always have 'upVotes' and 'downVotes' as the keys? if they will, then this will work. if not, I'm not completely sure how to access an object's values without knowing the name of the key.
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicates", () => {
  it("returns one array with no duplicate values", () => {
      const dataArray1 = ["array", "object", "number", "string", "Boolean"]
      const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
      // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
// pseudocode
// Create a function called noDuplicates
// Input is two arrays (our function will have two parameters)
// Combine the two arrays using .concat(), this will be a new single array
// Iterate over the new array to filter out any duplicate values
// Return a new array without duplicate values
// Output is one array that has no duplicate values

const noDuplicates = (array1, array2) => {
  oneArray = array1.concat(array2)
  return oneArray.filter((value, index) => {
    return oneArray.indexOf(value) === index
  })

}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// Attempting the strech goal
// const noDuplicates = (...arrays) => {
//   let oneArray = [...arrays].concat()
//   return oneArray
// }
// console.log(noDuplicates(dataArray1, dataArray2))
//[
//   [ 'array', 'object', 'number', 'string', 'Boolean' ],
//   [ 'string', 'null', 'Boolean', 'string', 'undefined' ]
// ]
// This returned one array of with 2 arrays inside of it..🫣