const request = require('../src/request.js');
const test = require('tape');

test('testing the getQoute Function', (t) => {
  request.getQoute((err, res, data) => {
    var obj = JSON.parse(data);
    var auther = obj.quoteAuthor;
    t.equal(obj.quoteAuthor != null, true, 'the getQout func should not return an empty qoute');
    t.equal(obj != null, true, 'the getQoute function should not return an empty object')
    t.end();

  });

});
