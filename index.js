const readline = require("readline");

const dateUtils = require("./date_utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let startDate;
let endDate;

rl.question("Enter the Start Date: ", (startDateStr) => {
  startDate = startDateStr;
  rl.question("Enter the End Date: ", (endDateStr) => {
    endDate = endDateStr;
    rl.close();
  });
});

rl.on("close", () => {
  dateUtils.getTimeDifferenceInDays(startDate, endDate);
  process.exit(0);
});

