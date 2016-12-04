'use strict'

var test = require('tape')

var server = require('../../lib/index.js')

test('/ testing the home route', function (t) {
  var options = {
    method: 'GET',
    url: '/'
  }

  server.inject(options, function (response) {
    t.equal(response.statusCode, 200, '✅')
    t.end()
  })
})

test('stop server', function (t) {
  server.stop(t.end)
})
