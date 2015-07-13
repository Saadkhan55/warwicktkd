//***********************************************
// video_play.js this will pause the carousel
// when a youtube is played. 
//**********************************************
var tag = document.createElement('script');

//add script to create iframe
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var src = $(".active #player").attr("name");

//add iframe from src (youtube) create youtube player object
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {         
    videoId: src,
         events: {
           'onStateChange': onPlayerStateChange
         }
  });
}

//on player when is played
function onPlayerStateChange(event) {
  switch(event.data){
    case 1:
      $("#carousel").carousel('pause');
      break;

    default:
      $("#carousel").carousel();
      break;
  }
}
