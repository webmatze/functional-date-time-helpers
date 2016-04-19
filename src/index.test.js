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

})
