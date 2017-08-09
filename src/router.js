const handlers=require('./handlers')



const router=(req ,res)=>{
  let url= req.url;
  const handle={
    '/':handlers.home,
    '/api/getQoute':handlers.getQoute,
    '/api/getAudio=':handlers.getAudio,
  }[url];
  if(handle)
    handle(req ,res);
  else if(url.startsWith('/public')){
    handlers.Public(req ,res)
  }else if(url.startsWith('/api/getAudio=')){
    handlers.getAudio(req ,res);
  }else{
    handlers.notFound(req ,res);
}
}

module.exports = router;
