(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["functionalDateTimeHelpers"] = factory();
	else
		root["functionalDateTimeHelpers"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
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
	    return new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, -1);
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


/***/ }
/******/ ])
});
;