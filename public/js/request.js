
//getQoute()
//getAudio
//_request(url, pringData)
const getQoute=(func)=>{
  let url='./api/getQoute'
  _request(url ,(err ,data)=>{
    if(false)
      func(err)
    else{
      func(null , JSON.parse(data))}
  })
}
const getAudio=(text ,func)=>{
  let url='./api/getAudio='+encodeURIComponent(text);
  _request(url , (err ,data)=>{
    if(false)
      func(err)
    else
      func(null , data)
  })
}
const _request=(url ,pringData)=>{
  const xhr= new XMLHttpRequest();
  xhr.onreadystatechange =()=>{
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data =xhr.responseText;
        pringData(null ,data);
      }else {
        pringData(xhr.status);
      }
      }
       xhr.open('GET',url,true)
       xhr.send()
     }
