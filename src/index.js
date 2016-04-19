
var startOfDay = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0);
};
var endOfDay = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0, -1);
};
var startOfMonth = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};
var endOfMonth = function (date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, -1);
};
var seconds = function (num) {
    return num * 1000;
};
var minutes = function (num) {
    return seconds(num * 60);
};
var hours = function (num) {
    return minutes(num * 60);
};
var days = function (num) {
    return hours(num * 24);
};
var addTime = function (milliseconds, date) {
    var result = new Date(date);
    result.setTime(result.getTime() + milliseconds);
    return result;
};
var subTime = function (milliseconds, date) {
    return addTime(-milliseconds, date);
};

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
  subTime: subTime
}
