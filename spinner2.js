let startTime = 100;
let spinnerParts = ["\r|   ", "\r/   ", "\r-   ", "\r\\   \n"];
for (let item of spinnerParts) {
  setTimeout(() => {
    process.stdout.write(item);
  }, (startTime += 200));

}
// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   \n");
//   console.log("sina");
// }, 700);

// ... fill in the rest yourself ...