// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //유튜브 영상 주소에서 v=이후의 값만 복사해서 videoId에 삽입해주면 됨
    playerVars: {
        autoplay: true, //자동재생여부
        loop: true, //반복재생여부
        playlist: 'An6LvWQuj_8' //반복 재생을 하고 싶은 유튜브영상 ID 삽입
    },
    events: {
        onReady: function (event) {
            event.target.mute() //음소거처리하겠다
           }
         }
     });
}