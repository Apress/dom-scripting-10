(function() {

function createVideoControls() {
  var vids = document.getElementsByTagName('video');
  for (var i = 0 ; i < vids.length ; i++) {
    addControls( vids[i] );
  }
}

function addControls( vid ) {

  vid.removeAttribute('controls');


  vid.height = vid.videoHeight;
  vid.width = vid.videoWidth;
  vid.parentNode.style.height = vid.videoHeight + 'px';
  vid.parentNode.style.width = vid.videoWidth + 'px';

  var controls = document.createElement('div');
  controls.setAttribute('class','controls');
    
  var play = document.createElement('button');
  play.setAttribute('title','Play');
  play.innerHTML = '&#x25BA;';
   
  controls.appendChild(play);
 
  vid.parentNode.insertBefore(controls, vid);
  
  play.onclick = function () {
    if (vid.ended) {
      vid.currentTime = 0;
    }
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };  
  
  vid.addEventListener('play', function () {
    play.innerHTML = '&#x2590;&#x2590;';
    play.setAttribute('paused', true);
  }, false);
  
  vid.addEventListener('pause', function () {
    play.removeAttribute('paused');
    play.innerHTML = '&#x25BA;';
  }, false);
  
  vid.addEventListener('ended', function () {
    vid.pause();
  }, false);
}

window.onload = function() {
  createVideoControls();
}

})()
