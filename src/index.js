var startOfDay = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0)
}
var endOfDay = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0, -1)
}
var startOfMonth = function (date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}
var endOfMonth = function (date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, -1)
}
var seconds = function (num) {
  return num * 1000
}
var minutes = function (num) {
  return seconds(num * 60)
}
var hours = function (num) {
  return minutes(num * 60)
}
var days = function (num) {
  return hours(num * 24)
}
var addTime = function (milliseconds, date) {
  var result = new Date(date)
  result.setTime(result.getTime() + milliseconds)
  return result
}
var subTime = function (milliseconds, date) {
  return addTime(-milliseconds, date)
}
var isLeapYear = function (year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}
var getDaysInMonth = function (month, year) {
  return month == 1 ? 31 : month == 3 ? 31 : month == 4 ? 30 : month == 5 ? 31 : month == 6 ? 30 : month == 7 ? 31 : month == 8 ? 31 : month == 9 ? 30 : month == 10 ? 31 : month == 11 ? 30 : month == 12 ? 31 : isLeapYear(year) ? 29 : 28
}
module.exports = {
  startOfDay: startOfDay,
  endOfDay: endOfDay,
  startOfMonth: startOfMonth,
  endOfMonth: endOfMonth,
  seconds: seconds,
  minutes: minutes,
  hours: hours,
  days: days,
  addTime: addTime,
  subTime: subTime,
  isLeapYear: isLeapYear,
  getDaysInMonth: getDaysInMonth
}
