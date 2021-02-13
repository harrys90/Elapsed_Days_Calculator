const constants = require('./constants');

const isDateValid = (dateInput) => {
  //const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if(!constants.DATE_REGEX.test(dateInput)) {
    return false;
  }

  const dateParts = dateInput.split('/');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  //VALIDATE DAY, MONTH AND YEAR

  return true;
}

const getDateInMillis = (dateInput) => {
  //POTENTIAL REFACTOR
  const dateParts = dateInput.split('/');
  const day = dateParts[0];
  const month = dateParts[1] - 1;
  const year = dateParts[2];

  return new Date(year, month, day).getTime();
}

const getTimeDiffWithNoPartial = (time1, time2) => {
  const startTime = Math.min(+time1, +time2);
  const endTime = Math.max(+time1, +time2);
  return endTime - startTime - constants.PARTIAL_DAYS_IN_MILLIS;
}

const getDaysFromMilliSecs = (timeInMilliSecs) => {
  return timeInMilliSecs/(1000 * 60 * 60 * 24);
}

const getTimeDifferenceInDays = (startDate, endDate) => {
  if (!isDateValid(startDate) || !isDateValid(endDate)) {
    //console.log("Invalid inputs");
    return;
  }

  const startDateInMillis = getDateInMillis(startDate);
  const endDateInMillis = getDateInMillis(endDate);

  const diffwithoutPatial = getTimeDiffWithNoPartial(
    startDateInMillis,
    endDateInMillis
  );
  const elapsedDays = getDaysFromMilliSecs(diffwithoutPatial);
  console.log(elapsedDays);

  return elapsedDays;
};

exports.getDateInMillis = getDateInMillis;
exports.isDateValid = isDateValid;
exports.getTimeDiffWithNoPartial = getTimeDiffWithNoPartial;
exports.getDaysFromMilliSecs = getDaysFromMilliSecs;
exports.getTimeDifferenceInDays = getTimeDifferenceInDays;