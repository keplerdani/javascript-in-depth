/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
    HINT2: Use CMD+C or CTRL+C to get out of an infinite loop in node
*/
let loggedIn = false;

let attempts = 0;

while (!loggedIn) {
  console.log("Incorrect login credentials");
  attempts++;
  if (attempts >= 3) {
    loggedIn = true;
  }
}

console.log("Sucessfully logged in!");
