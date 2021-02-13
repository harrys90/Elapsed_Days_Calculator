const constants = require('./constants');

const getDateParts = dateInput => {
  const [day, month, year] = dateInput.split('/');

  return [day, month - 1, year];
}

const isLeapYear = yearInput => {
  return (yearInput % 400 === 0) || (yearInput % 4 === 0 && yearInput % 100 !== 0);
}

const isMonthInvalid = monthInput => {
  return monthInput >= 12;
}

const isMonthFebWithInvalidDay = (month, day) => {
  return (month === 1 && day >= 29);
}

const isDateValid = (dateInput) => {
  if(!constants.DATE_REGEX.test(dateInput)) {
    return false;
  }

  const [day, month, year] = getDateParts(dateInput);

  if(year < 1901 && year > 2999) {
    console.log('Year out of permitted range');
    return false;
  }

  if(isMonthInvalid(month)) {
    console.log('Incorrect month');
    return false;
  }

  if(!isLeapYear(year) && isMonthFebWithInvalidDay(month, day)) {
    return false;
  }

  return true;
}

const getDateInMillis = (dateInput) => {
  // const dateParts = dateInput.split('/');
  // const day = dateParts[0];
  // const month = dateParts[1];
  // const year = dateParts[2];

  const [day, month, year] = getDateParts(dateInput);

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
    console.log("Invalid inputs");

    return null;
  }

  const startDateInMillis = getDateInMillis(startDate);
  const endDateInMillis = getDateInMillis(endDate);

  const diffwithoutPatial = getTimeDiffWithNoPartial(
    startDateInMillis,
    endDateInMillis
  );
  const elapsedDays = Math.trunc(getDaysFromMilliSecs(diffwithoutPatial));
  console.log(elapsedDays);

  return elapsedDays;
};

exports.getDateInMillis = getDateInMillis;
exports.isDateValid = isDateValid;
exports.getTimeDiffWithNoPartial = getTimeDiffWithNoPartial;
exports.getDaysFromMilliSecs = getDaysFromMilliSecs;
exports.getTimeDifferenceInDays = getTimeDifferenceInDays;