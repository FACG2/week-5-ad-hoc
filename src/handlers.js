const fs=require('fs');
const request=require('./request')
const path=require('path')

const home=(req ,res)=>{
  const ext =  req.url.split('.')[1];
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html') , (error, data) => {
    if(error){
      res.writeHead(404, {'content-type' : 'text/html'});
      res.end('Page Not Found')
    }else {
      res.writeHead(200, {'content-type': 'text' + ext});
      res.end(data);
    }
  });
}
const Public=(req ,res)=>{

  let ext =  req.url.split('.')[1];
  // let file= req.url.substring(1,req.url.length);
  fs.readFile(path.join(__dirname, '..', req.url) , (error, data) => {
    if(error){
      res.writeHead(404, {'content-type' : 'text/plain'});
      res.end('Page Not Found')
    }else {
      res.writeHead(200, {'content-type': 'text/' + ext});
      res.end(data);
    }
  });
}
const getQoute=(req ,res)=>{
  request.getQoute((err , response , body )=>{
    if(err){
      res.writeHead(404, {'content-type' : 'text/html'});
      res.end('Page Not Found')
    }else{
      res.writeHead(200, {'content-type': 'application/json'});
      res.end(body);
    }
  })
}
const getAudio=(req ,res)=>{
  let txt=decodeURIComponent(req.url.split('=')[1])
  request.getAudio(txt ,(err , response , body )=>{
    if(err){
      res.writeHead(404, {'content-type' : 'text/html'});
      res.end('Page Not Found')
    }else{
      res.writeHead(200, {'content-type': 'application/json'});
      res.end(body);
    }
  })
}
const notFound=(req ,res)=>{
  res.writeHead(404, {'content-type' : 'text/html'});
  res.end('Page Not Found')
}


module.exports={
  home:home,
  Public:Public,
  getQoute:getQoute,
  getAudio:getAudio,
  notFound:notFound
}
