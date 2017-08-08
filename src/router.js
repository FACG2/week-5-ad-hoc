const fs = require('fs')
const home = require('./handler').home
const allFiles = require('./handler').allFiles

var handlers = require('./handler.js')

function router(req, res) {

const url = req.url;

var handle = {
  '/': 'index.html',
  '/public' : 'index.html',
  '/api/getQoute' : 'getQoute',
  '/api/getAudio' : 'getAudio'
}[url];

if (handle){
  home(res, handle);
}else {
  allFiles(res, url);
}

}
module.exports = router
