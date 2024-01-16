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
// For adding musics to favorite
const fav1 = document.getElementById("heart");
var isFavorite = false;

fav1.addEventListener("click", () => {
  if (!isFavorite) {
    // Add to favorites
    fav1.style.color = "red";
    alert("Faded added to favorites list");
  } else {
    // Remove from favorites
    fav1.style.color = "white";
    alert("Faded removed from favorites list");
  }

  isFavorite = !isFavorite;

  fav1.style.transition = ".7s ease";
  fav1.style.transform = "scale(0.9) rotate(360deg)";
  fav1.style.fontSize = "25px";

  setTimeout(function () {
    fav1.style.transform = "none";
    fav1.style.fontSize = "20px";
  }, 500);
});

// For displaying the music options on click
var faded_Dots = document.getElementById("dots");
var faded_Options = document.querySelector(".more");
faded_Dots.addEventListener("click", ()=>{
  if (faded_Options.style.display = "none") {
    faded_Options.style.display = "block";

  }
 
  // console.log("More is here")
})
var closeOptions = document.getElementById("closeMore");
closeOptions.addEventListener("click", ()=>{
    faded_Options.style.display = "none"
  // console.log("I can remove it")
})
var shareAudio = document.getElementById("Share");
shareAudio.addEventListener("click", () => {
  // check if the Web Share APi file is sharable
  if (navigator.share) {
    const fadedAudioFile = {
      title: "Faded Alan_Walker",
      text: "Listen to this Audio File Faded by Alan_Walker \n https://www.boomplay.com/songs/14795995",
    };

    // Call the share API method
    navigator.share(fadedAudioFile)
    .then( () => console.log("shared successfully"))
    .catch((error) => console.error("Error sharing:", error));
  } else{
    // Fallback for browsers that do not support the Web Share API
    alert("web share API is not supported in this browser")
  }
})


// For playing Music 2

var joha = new Audio("audioSongs/Asake_-_Joha.mp3");
joha.load();
joha.volume = 0.7;
let play_Joha = document.getElementById("playIcon2");
let pause_Joha = document.getElementById("pauseIcon2");
play_Joha.addEventListener("click", ()=>{
  joha.play();
  if (pause_Joha.style.display = "none") {
    pause_Joha.style.display = "block";
    play_Joha.style.display = "none"
  };
  pause_Joha.addEventListener("click", () => {
    joha.pause();
    pause_Joha.style.display = "none";
    play_Joha.style.display = "block"
  })
});
// For adding joha to favs;
var fav2 = document.getElementById("heart2");
var isFavorite = false;

fav2.addEventListener("click", () => {
  if (!isFavorite) {
    // Add to favorites
    fav2.style.color = "red";
    alert("Joha added to favorites list");
  } else {
    // Remove from favorites
    fav2.style.color = "white";
    alert("Joha removed from favorites list");
  }

  isFavorite = !isFavorite;

  fav2.style.transition = ".7s ease";
  fav2.style.transform = "scale(0.9) rotate(360deg)";
  fav2.style.fontSize = "25px";

  setTimeout(function () {
    fav2.style.transform = "none";
    fav2.style.fontSize = "20px";
  }, 500);
});

// Let us display joha music options on dots click
var joha_Dots = document.getElementById("dots2");
var joha_Options = document.querySelector(".more2");
joha_Dots.addEventListener("click", ()=>{
  if (joha_Options.style.display = "none") {
    joha_Options.style.display = "block";
  }
})

var joha_Options_close = document.getElementById("closeMore2");
joha_Options_close.addEventListener("click", () => {
  joha_Options.style.display = "none"
})

// Let us share Joha Music File
var joha_Share = document.getElementById("shareJoha");
joha_Share.addEventListener("click", ()=>{
  if (navigator.share) {
    const JohaAudioFile = {
      title: "Joha by Asake",
      text: "Listen to this awesome music by Asake \n  https://open.spotify.com/track/5UwxpuGHkwiojKDaPC5ZNu?autoplay=true",
    };
    // Callthe API method
    navigator
      .share(JohaAudioFile)
      .then(() => console.log("shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("web share API is not supported in this browser");
  }
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