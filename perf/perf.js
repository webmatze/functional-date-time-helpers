var Benchmark = require('benchmark')

var moment = require('momentjs')
var fdth = require('../src/index')

var suites = []

suites.push(
  new Benchmark.Suite('Compare fdth.startOfDay with moment.startOf("day")').add('fdth.startOfDay', function () {
    var today = new Date()
    fdth.startOfDay(today)
  })
    .add("moment().startOf('day')", function () {
      moment().startOf('day')
    })
)

suites.push(
  new Benchmark.Suite('Compare fdth.addTime with moment.add').add('fdth.addTime', function () {
    var today = new Date()
    fdth.addTime(fdth.days(3), today)
  })
    .add("moment().startOf('day')", function () {
      moment().add(3, 'days')
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
