# functional-date-time-helpers

Status:
[![npm version](https://img.shields.io/npm/v/functional-date-time-helpers.svg?style=flat-square)](https://www.npmjs.com/package/functional-date-time-helpers)
[![npm downloads](https://img.shields.io/npm/dm/functional-date-time-helpers.svg?style=flat-square)](http://npm-stat.com/charts.html?package=functional-date-time-helpers&from=2016-04-01)
[![Codeship](https://codeship.com/projects/1bdd1ab0-e969-0133-6d7c-06e5be4c5162/status?branch=master)](https://codeship.com/projects/147603)

functional-date-time-helpers are a few pure functions to manipulate date and time in your JavaScript projects. Think of it as a lightweight alternative to moment.js

## Usage (node)

Install through npm

````
npm install --save functional-date-time-helpers
````

Require the library

````javascript
var dth = require('functional-date-time-helpers')
````

Use the provided functions

````javascript
var threeMinutesInMilliseconds = dth.minutes(3)
````

## Usage (browser)

Install using bower

````
bower install --save functional-date-time-helpers
````

include it in your html page

````
<script src="/path/to/dist/functional-date-time-helpers.browser.js" type="text/javascript"></script>
````

Use the provided functions

````javascript
var threeMinutesInMilliseconds = minutes(3)
````
