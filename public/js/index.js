(() => {
  //when page loads make request for aqoute
  window.addEventListener("load", (event) => {
    //make request for new qoute
    getQoute((err, qouteBody) => {
      if (err) {
        //handle the error - Print it to the user
        alertUser(err, 'load event');
      } else {
        //dom the data
        renderQoute(qouteBody);
      }
    })
  });



  //when button refresh clicked make request for new qoute
  document.getElementById('refresh').addEventListener('click', (event) => {
    //make request for new qoute
    //dom the data
    getQoute((err, qouteBody) => {
      if (err) {
        //handle the error - Print it to the user
        alertUser(err, 'refresh btn');
      } else {
        //dom the data
        renderQoute(qouteBody);
      }
    })
  })

  //when button playAudio if clicked play the audio on the background
  document.getElementById('playAudio').addEventListener('click', (event) => {
    //make request for audio for the text
    //play the sound
    getAudio(text, (err, data) => {
      if (err)
        alertUser(err, 'audio btn')
      else {
        let mp3Link = data.link;
        let audio = new Audio(mp3);
        audio.play();
      }
    })
  })

  //make atweet
  document.getElementById('tweet').addEventListener('click', (event) => {
    //make atweet
    getQoute((err, qouteBody) => {
      if (err) {
        //handle the error - Print it to the user
        alertUser(err, 'tweet btn');
      } else {
        //dom the data
        let tlink = `https://twitter.com/home/?status=${encodeURIComponent(qouteBody.quoteText)}`
        window.open(tlink);
      }
    })
  })


  //handling errors
  function alertUser(err, location) {
    element.textContent(`There was an error in ${location} that says: ${err}`);
  }

  //renderind
  //render the qouts
  function renderQoute(qouteBody) {
    let author = document.getElementById('auth')
    let qoute = document.getElementById('qoute')
    let qoutelink = document.getElementById('qoutelink')
    author.textContent = qouteBody.quoteAuthor;
    qoute.textContent = qouteBody.quoteText;
    qoutelink.href = qouteBody.quoteLink;
    genaratRandomBGColor();
  }

  // function getQoute(pringData) {
  //   //sample
  //   var data = {
  //     quoteText: "Fame usually comes to those who are thinking about something else. ",
  //     quoteAuthor: "Holmes",
  //     senderName: "",
  //     senderLink: "",
  //     quoteLink: "http://forismatic.com/en/ef7413d4dc/"
  //   };
  //   //fetch actual from the requests
  //   //request(url , (err ,data)=> pringData(err ,data))
  //   pringData(null, data);
  // }
  //request function
  //genarat Random Color for body background
  function genaratRandomBGColor() {
    var background = document.body;
    background.style.background = randomColor();

  }
  //pik color randomly from 20 item length array
  function randomColor() {
    var randomNum = Math.floor(Math.random() * 20);
    var colors = {
      0: '#f44336', //red
      1: '#e91e63', //pink
      2: '#9c27b0', //purple
      3: '#d500f9', //purple accent-3
      4: '#3f51b5', // indigo
      5: '#2196f3', // blue
      6: '#00bcd4', // cyan
      7: '#03a9f4', // light-blue
      8: '#eeff41', // lime accent-2
      9: '#b2ff59', // light-green accent-2
      10: '#43a047', // green darken-1
      11: '#8bc34a', // light-green
      12: '#00e676', // green accent-3
      13: '#ffca28', // amber lighten-1
      14: '#90a4ae', // blue-grey lighten-2
      15: '#9e9e9e', // grey
      16: '#ff9100', // orange accent-3
      17: '#e040fb', // purple accent-2
      18: '#ff4081', // pink accent-2
      19: '#e3f2fd', // blue lighten-5
      20: '#e1bee7', // purple lighten-4
    };
    return colors[randomNum];
  }
})()
