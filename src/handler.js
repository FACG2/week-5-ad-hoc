const fs = require ('fs')
const path = require('path')

//home
const home=(res, file) => {
  const ext = file.split('.')[1];

  fs.readFile(path.join(__dirname, '..', 'public', file) , (error, data) => {
    if(error){
      res.writeHead(404, {'content-type' : 'text/plain'});
      res.end('Page Not Found')
    }else {
      res.writeHead(200, {'content-type': 'text' + ext});
      res.end(data);
    }
  });
}

//public handel
const allFiles =(res, url) =>{
  const file = url.substring(1, url.length);
  home(res, file);
}

module.exports = {
  home:home,
  allFiles:allFiles
}
