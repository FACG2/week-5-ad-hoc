const request = require('request');
let defultData = {
  quoteText: "Formula for success: under promise and over deliver.",
  quoteAuthor: "Tom Peters",
  senderName: "",
  senderLink: "",
  quoteLink: "http://forismatic.com/en/b472486611/"
};
const getQoute = (cb) => {
  var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  _request(url, (err, res, body) => {
    if (err)
      cb(err)
    else {

      var data = body.substring(2, body.length - 1);
      try {
        //if there is not author name avilable set it's value to unknown
        data = JSON.parse(data) == null ? defultData : JSON.parse(data);
        data.quoteAuthor = data.quoteAuthor == undefined ? 'unknown' : data.quoteAuthor;
        cb(null, res, JSON.stringify(data));
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
  var reblacedQoute = qout.trim();
  var url = `http://api.voicerss.org/?key=a745846b75b144ef91c60d4de16d0f0d&hl=en-us&src=${reblacedQoute}&c=MP3&b64=true`;
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
