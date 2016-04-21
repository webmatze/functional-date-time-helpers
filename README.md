# functional-date-time-helpers

Status:
[![npm version](https://img.shields.io/npm/v/functional-date-time-helpers.svg?style=flat-square)](https://www.npmjs.com/package/functional-date-time-helpers)
[![npm downloads](https://img.shields.io/npm/dm/functional-date-time-helpers.svg?style=flat-square)](http://npm-stat.com/charts.html?package=functional-date-time-helpers&from=2016-04-01)
[![Codeship](https://codeship.com/projects/1bdd1ab0-e969-0133-6d7c-06e5be4c5162/status?branch=master)](https://codeship.com/projects/147603)

functional-date-time-helpers are a few pure functions to manipulate date and time in your JavaScript projects. Think of it as a lightweight alternative to the date manipulation methods of [Moment.js](https://github.com/moment/moment/).

## Usage (node)

Install through npm

````
npm install --save functional-date-time-helpers
````

Require the library and use the provided functions

````javascript
var fdth = require('functional-date-time-helpers')
var threeMinutesInMilliseconds = fdth.minutes(3)
var now = new Date();
var treeMinutesAgo = fdth.subTime(threeMinutesInMilliseconds, now);
````

## Usage (browser)

Install using bower

````
bower install --save functional-date-time-helpers
````

Include it to your html page

````
<script src="/path/to/dist/functional-date-time-helpers.browser.js" type="text/javascript"></script>
````

Use the provided functions

````javascript
var fdth = window.functionalDateTimeHelpers;
var now = new Date();
var inThreeDays = fdth.addTime(fdth.days(3), now);
````

## Performance

One of the goals of this library is to provide fast functions for date and time manipulation.

While the popular [Moment.js](https://github.com/moment/moment/) is a great library with lots of functionality it has also some performance problems when manipulating date and time.

That is why I created functional-date-time-helpers with optimized functions that can give you a significant performance boost compared to the equivalent methods of [Moment.js](https://github.com/moment/moment/).

I also included a benchmark suite that you can run to check the performance of each function.

To run the benchmark simply call this command:

````
npm run perf
````
