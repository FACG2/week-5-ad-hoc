const request = require('../src/request.js');
const test=require('tape');

test('testing the getQoute Function' , (t)=>{
  request.getQoute((err , res , data)=>{
    var obj = JSON.parse(data);
    var auther=obj.quoteAuthor || 'unknown';
    console.log(auther);
    t.equal(obj.quoteAuthor != null  ,true ,'the getQout func should not return an empty qoute' );
    t.equal(auther, 'unknown' ,'the getQout func should not return an empty autherNAme');
    t.end();

  });

});
