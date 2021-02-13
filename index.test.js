const { expect } = require('@jest/globals');
const dateUtils = require('./date_utils');

test('difference between 07/11/1972 and 08/11/1972 should be 0', () => {
  expect(dateUtils.getTimeDifferenceInDays('07/11/1972', '08/11/1972')).toBe(0);
});

test('difference between 01/01/2000 and 03/01/2000 should be 1', () => {
  expect(dateUtils.getTimeDifferenceInDays('01/01/2000', '03/01/2000')).toBe(1);
});

test('difference between 02/06/1983 and 22/06/1983 should be 19', () => {
  expect(dateUtils.getTimeDifferenceInDays('02/06/1983', '22/06/1983')).toBe(19);
});

test('difference between 04/07/1984 and 25/12/1984 should be 173', () => {
  expect(dateUtils.getTimeDifferenceInDays('04/07/1984', '25/12/1984')).toBe(173);
});

test('difference between 03/01/1989 and 03/08/1983 should be 1979', () => {
  expect(dateUtils.getTimeDifferenceInDays('03/01/1989', '03/08/1983')).toBe(1979);
});