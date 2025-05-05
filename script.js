const userInput = prompt(
  "Welcome to Froyo World online ordering. Please enter what flavors you would like seperated by a comma"
);

// converts the input into an array
let inputArray = userInput.split(",");

//conforms all input to lower case
let inputLower = inputArray.map((x) => {
  return x.toLowerCase();
});

// removes spaces from the edges of each array item
let inputClean = inputLower.map((x) => x.trim());

console.log(inputClean);

//empty object to collect order data
let flavorTracker = {};

//iterates through the array and adds each flavor to the object, if it already exists adds 1 to it
function total(order) {
  for (const i of order) {
    flavorTracker[i] = (flavorTracker[i] || 0) + 1;
  }
  return flavorTracker;
}

total(inputClean);
console.log(flavorTracker);
