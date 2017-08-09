const request = require('request');
var atob = require('atob');
const getQoute = (cb) => {
  var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  _request(url, (err, res, body) => {
    if (err)
      cb(err)
    else {

      var data = body.substring(2, body.length - 1);
      try {
        var auther = JSON.parse(data).quoteAuthor || 'unknown';
        cb(null, res, data);
      } catch (e) {
        cb(null, res, JSON.stringify({}));
      }


    }
  })
}

const _request = (url, cb) => {
  request(url, (err, res, body) => {
    if (err) {
      cb(err)
    } else {
      cb(null, res, body);
    }
  })
}

const getAudio = (qout, cb) => {
  var reblacedQoute = encodeURIComponent(qout.trim())
  var url = `http://api.voicerss.org/?key=a745846b75b144ef91c60d4de16d0f0d&hl=en-us&src=${reblacedQoute}&c=MP3&b64=true`;
  console.log(url);
  _request(url, (err, res, body) => {
    if (err)
      cb(err)
    else {
      cb(null, res, body);
    }
  })
}

module.exports = {
  getQoute: getQoute,
  getAudio: getAudio
}
