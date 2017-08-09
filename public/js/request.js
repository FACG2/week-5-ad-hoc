
//getQoute()
//getAudio
//_request(url, pringData)
//samples of expected data
let qouteData={
  quoteText: "Fame usually comes to those who are thinking about something else. ",
  quoteAuthor: "Holmes",
  senderName: "",
  senderLink: "",
  quoteLink: "http://forismatic.com/en/ef7413d4dc/"
};
let audioData={
  mp3Url:'http://www.noiseaddicts.com/samples_1w72b820/95.mp3',
};


const getQoute=(func)=>{
  let url='./api/getQoute'
  _request(url ,(err ,data)=>{
    if(false)
      func(err)
    else
      func(null , data || qouteData)
  })
}
const getAudio=(text ,func)=>{
  let url='./api/getAudio='+encodeURIComponent(text);
  _request(url , (err ,data)=>{
    if(false)
      func(err)
    else
      func(null , data  || audioData)
  })
}
const _request=(url ,pringData)=>{
  const xhr= new XMLHttpRequest();
  xhr.onreadystatechange =()=>{
      if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText)
        pringData(null ,data);
      }else {
        pringData(xhr.status);
      }
      }
       xhr.open('GET',url,true)
       xhr.send()
     }
