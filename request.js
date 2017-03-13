var request = require('request');
var fs = require ('fs')

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    console.log('You Messed up')
  })
  .on('response', function (response) {
    console.log('Status Code: ', response.statusCode, '\nStatus Message: ', response.statusMessage, '\nHeaders: ', response.headers['content-type'])
  })

  .pipe(fs.createWriteStream('./future.jpg'))
