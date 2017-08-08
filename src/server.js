const http = require('http')
const router = require('./router.js')
// const handler = require('./handler.js')

var port = process.env.PORT || 4000
var host = process.env.HOST || 'localhost'

var server = http.createServer(router).listen(port)

console.log(`Server running on: http://${host}:${port}`)
