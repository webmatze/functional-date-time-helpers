var Benchmark = require('benchmark')

var moment = require('moment')
var fdth = require('../src/index')

var suites = []

suites.push(
  new Benchmark.Suite('Compare fdth.startOfDay with moment#startOf').add('fdth.startOfDay', function () {
    var today = new Date()
    fdth.startOfDay(today)
  })
    .add("moment#startOf", function () {
      moment().startOf('day')
    })
)

suites.push(
  new Benchmark.Suite('Compare fdth.endOfDay with moment#endOf').add('fdth.endOfDay', function () {
    var today = new Date()
    fdth.endOfDay(today)
  })
    .add("moment#endOf", function () {
      moment().endOf('day')
    })
)

suites.push(
  new Benchmark.Suite('Compare fdth.addTime with moment#add').add('fdth.addTime', function () {
    var today = new Date()
    fdth.addTime(fdth.days(3), today)
  })
    .add("moment#add", function () {
      moment().add(3, 'days')
    })
)

suites.push(
  new Benchmark.Suite('Compare fdth.subTime with moment#subtract').add('fdth.subTime', function () {
    var today = new Date()
    fdth.subTime(fdth.days(3), today)
  })
    .add("moment#subtract", function () {
      moment().subtract(3, 'days')
    })
)

suites.forEach(function (suite) {
  suite.on('start', function (event) {
    console.log(event.currentTarget.name)
  })
    .on('cycle', function (event) {
      console.log('  ' + String(event.target))
    })
    .on('complete', function () {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n')
    })
    .run({ 'async': false })
})
