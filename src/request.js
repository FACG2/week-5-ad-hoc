const request=require('request');
const getQoute =(cb)=>{
  var url='https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  _request(url , (err ,res ,body)=>{
    if(err)
      cb(err)
    else {

      var data=body.substring(2,body.length-1);
      var auther= JSON.parse(data).quoteAuthor || 'unknown';
       cb(null, res, data);
    }
  })
}

const _request=(url , cb)=>{
request(url,(err , res , body)=>{
      if (err){
        cb(err)
      }
      else
      {
         cb(null, res, body);
      }
})
}

getQoute((err ,res ,data)=>{
    console.log(data);
  // var cdata=data.substring(2,data.length-1);
  // console.log(JSON.parse(cdata));
  // var data2 = JSON.parse(cdata);
  // console.log(data2.quoteText);
});
//  var arr =getQoute(() => {
//    if(null){
//      console.log('error');
//    }
//    else

module.exports ={
   getQoute:getQoute
}
