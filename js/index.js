// For Playing Music 1
var Faded = new Audio("audioSongs/Alan_Walker_Faded_(thinkNews.com.ng).mp3");
Faded.load();
Faded.volume = 0.7;
// This above code makes the music to respect the pause function(stopping it and allowing it
// to play just where it stopped when you paused it)
let playFadedMusic = document.getElementById("playIcon");
let pause_fadedMusic = document.getElementById("pauseIcon");
playFadedMusic.addEventListener("click", ()=>{

  Faded.play();
  if (pause_fadedMusic.style.display = "none") {
    pause_fadedMusic.style.display = "block";
    playFadedMusic.style.display = "none"
    console.log(pause_fadedMusic)
  };
  pause_fadedMusic.addEventListener("click",  ()=>{
   Faded.pause();
   pause_fadedMusic.style.display = "none";
   playFadedMusic.style.display = "block"
  })

})








// let testing = document.getElementById("heart");
// testing.addEventListener("click", ()=>{
//   console.log("Heart was clicked")
// })

// let dot = document.getElementById("dots");
// dot.addEventListener("click", ()=>{
//   console.log("dots received it")
// })


// let play = document.getElementById("playIcon");
// play.addEventListener("click", ()=>{
//   console.log("I can play ")
// })

// let pause = document.getElementById("pauseIcon");
// pause.addEventListener("click", ()=>{
//   console.log("I can pause")
// })



































// var playIcon = document.getElementById("playBtn");
// let mimo = document.querySelector(".fa-circle-play");
// let pauseIcon = document.getElementById("pauseBtn");
// var musicOption = document.querySelector(".moreOptions");
// var more_Icon = document.getElementById("moreIcon");
// var music1 = new Audio("audioSongs/Alan_Walker_Faded_(thinkNews.com.ng).mp3");
// music1.load();
// music1.volume = 0.9;

// var bell_Icon = document.getElementById("bellIcon");

// playIcon.addEventListener("click", function(){
//   console.log("Play Icon clicked")
// });

// pauseIcon.addEventListener("click", function(){
//   console.log("Pause icon clicked")
// });


// more_Icon.addEventListener("click", function(){
//   console.log("More icon clicked")
// })

// bell_Icon.addEventListener("click", ()=>{
//   alert("I am working perfect")
// })









// playIcon.addEventListener("click", function () {
//   music1.play();
//   console.log(musicOption);
//   console.log(more_Icon)
//   if (pauseIcon.style.display = "none") {
//     pauseIcon.style.display = "block";
//     playIcon.style.display = 'none'
//   }
//   pauseIcon.addEventListener("click", function(){
//     music1.pause();
//     playIcon.style.display = "block"
//     pauseIcon.style.display = "none"
//   });
  
// });
// more_Icon.addEventListener("click", function () {
//   if ((musicOption.style.display = "none")) {
//     musicOption.style.display = "block";
//   }
// });
// function removeMore() {
//   if ((musicOption.style.display = "block")) {
//     musicOption.style.display = "none";
//   }
// }

// // For Playing Music 2
// var play2Btn = document.getElementById("playBtn2");
// var pause2 = document.getElementById("pauseBtn2");
// var music_option2 = document.querySelector(".moreOptions2");
// var more_icon_2 = document.getElementById("moreIcon2");
// var muscic_2 = new Audio("audioSongs/Asake_-_Joha.mp3");
// muscic_2.load();
// muscic_2.volume = 0.9;

// play2Btn.addEventListener("click", function (){
//   muscic_2.play();
//   if (pause2.style.display = "none") {
//     pause2.style.display = "block";
//     play2Btn.style.display = "none"
//   };
//   pause2.addEventListener("click", function(){
//     muscic_2.pause();
//     play2Btn.style.display = "block";
//     pause2.style.display = 'none'
//   })
// });
// more_icon_2.addEventListener("click", function(){
//   if (music_option2.style.display = "none") {
//     music_option2.style.display = "block"
//   }
// })

// function removeMore2() {
//   if ((music_option2.style.display = "block")) {
//     music_option2.style.display = "none";
//   }
// }

// console.log(playIcon.innerHTML)
// console.log(mimo);