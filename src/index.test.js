var expect = require('chai').expect
var time_helpers = require('./index')

describe('time-helpers', function () {

  it('should be an object', function () {
    expect(time_helpers).to.be.a('object')
  })

  describe('startOfDay', function () {

    var date = new Date()

    it('should be a function', function () {
      expect(time_helpers.startOfDay).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.startOfDay).to.have.length(1)
    })

    it('should return a Date object', function () {
      expect(time_helpers.startOfDay(date)).to.be.an.instanceof(Date)
    })

    it('should return a Date with same day, month, year', function () {
      expect(time_helpers.startOfDay(date).getDate()).to.equal(date.getDate())
      expect(time_helpers.startOfDay(date).getMonth()).to.equal(date.getMonth())
      expect(time_helpers.startOfDay(date).getFullYear()).to.equal(date.getFullYear())
    })

    it('should return a Date with hours, minutes, seconds and milliseconds set to 0', function () {
      expect(time_helpers.startOfDay(date).getHours()).to.equal(0)
      expect(time_helpers.startOfDay(date).getMinutes()).to.equal(0)
      expect(time_helpers.startOfDay(date).getSeconds()).to.equal(0)
      expect(time_helpers.startOfDay(date).getMilliseconds()).to.equal(0)
    })

  })

  describe('endOfDay', function () {

    var date = new Date()

    it('should be a function', function () {
      expect(time_helpers.endOfDay).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.endOfDay).to.have.length(1)
    })

    it('should return a Date object', function () {
      expect(time_helpers.endOfDay(date)).to.be.an.instanceof(Date)
    })

    it('should return a Date with same day, month, year', function () {
      expect(time_helpers.endOfDay(date).getDate()).to.equal(date.getDate())
      expect(time_helpers.endOfDay(date).getMonth()).to.equal(date.getMonth())
      expect(time_helpers.endOfDay(date).getFullYear()).to.equal(date.getFullYear())
    })

    it('should return a Date with hours, minutes, seconds and milliseconds set to 23:59:59:999', function () {
      expect(time_helpers.endOfDay(date).getHours()).to.equal(23)
      expect(time_helpers.endOfDay(date).getMinutes()).to.equal(59)
      expect(time_helpers.endOfDay(date).getSeconds()).to.equal(59)
      expect(time_helpers.endOfDay(date).getMilliseconds()).to.equal(999)
    })

  })

  describe('startOfMonth', function () {

    var date = new Date()

    it('should be a function', function () {
      expect(time_helpers.startOfMonth).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.startOfMonth).to.have.length(1)
    })

    it('should return a Date object', function () {
      expect(time_helpers.startOfMonth(date)).to.be.an.instanceof(Date)
    })

    it('should return a Date with same month and year', function () {
      expect(time_helpers.startOfMonth(date).getMonth()).to.equal(date.getMonth())
      expect(time_helpers.startOfMonth(date).getFullYear()).to.equal(date.getFullYear())
    })

    it('should return a Date with date set to 1 and hours, minutes, seconds and milliseconds set to 0', function () {
      expect(time_helpers.startOfMonth(date).getHours()).to.equal(0)
      expect(time_helpers.startOfMonth(date).getMinutes()).to.equal(0)
      expect(time_helpers.startOfMonth(date).getSeconds()).to.equal(0)
      expect(time_helpers.startOfMonth(date).getMilliseconds()).to.equal(0)
      expect(time_helpers.startOfMonth(date).getDate()).to.equal(1)
    })

  })

  describe('endOfMonth', function () {

    var date = new Date()

    it('should be a function', function () {
      expect(time_helpers.endOfMonth).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.endOfMonth).to.have.length(1)
    })

    it('should return a Date object', function () {
      expect(time_helpers.endOfMonth(date)).to.be.an.instanceof(Date)
    })

    it('should return a Date with same month and year', function () {
      expect(time_helpers.endOfMonth(date).getMonth()).to.equal(date.getMonth())
      expect(time_helpers.endOfMonth(date).getFullYear()).to.equal(date.getFullYear())
    })

    it('should return a Date with date set to end of months date and hours, minutes, seconds and milliseconds set to 23:59:59:999', function () {
      expect(time_helpers.endOfMonth(date).getHours()).to.equal(23)
      expect(time_helpers.endOfMonth(date).getMinutes()).to.equal(59)
      expect(time_helpers.endOfMonth(date).getSeconds()).to.equal(59)
      expect(time_helpers.endOfMonth(date).getMilliseconds()).to.equal(999)
      var endDate = new Date(date)
      endDate.setMonth(date.getMonth() + 1)
      endDate.setDate(1)
      endDate = time_helpers.subTime(time_helpers.days(1), endDate)
      expect(time_helpers.endOfMonth(date).getDate()).to.equal(endDate.getDate())
    })

  })

  describe('seconds', function () {

    it('should be a function', function () {
      expect(time_helpers.seconds).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.seconds).to.have.length(1)
    })

    it('should return a Number', function () {
      expect(time_helpers.seconds(1)).to.be.a('number')
    })

    it('should return seconds as milliseconds', function () {
      expect(time_helpers.seconds(1)).to.equal(1*1000)
      expect(time_helpers.seconds(30)).to.equal(30*1000)
    })

    it('60 seconds should be the same as 1 minute', function () {
      expect(time_helpers.seconds(60)).to.equal(time_helpers.minutes(1))
    })

  })

  describe('minutes', function () {

    it('should be a function', function () {
      expect(time_helpers.minutes).to.be.a('function')
    })

    it('should take one parameter', function () {
      expect(time_helpers.minutes).to.have.length(1)
    })

    it('should return a Number', function () {
      expect(time_helpers.minutes(1)).to.be.a('number')
    })

    it('should return minutes as milliseconds', function () {
      expect(time_helpers.minutes(1)).to.equal(1*60*1000)
      expect(time_helpers.minutes(30)).to.equal(30*60*1000)
    })

    it('60 minutes should be the same as 1 hour', function () {
      expect(time_helpers.minutes(60)).to.equal(time_helpers.hours(1))
    })

  })

})
