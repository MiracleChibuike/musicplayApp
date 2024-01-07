// var allplayButtons = document.querySelectorAll(".playButton").length;
// // constructor function

// var obj = {
//     musictitle: "faded"
// }
// let pauseMe = document.getElementById("pauseIcon");
//  function pauseMusic() {
//    music3.pause();
//  }

// const music1 = document.getElementById("playBTN1");
// music1.addEventListener("click", function (Sing) {
//     var music1 = new Audio(
//               "audioSongs/Alan_Walker_Faded_(thinkNews.com.ng).mp3"
//             );
//             music1.load();
//             music1.volume = 0.4;
//             music1.play();
// })

// var allPlay = document.querySelectorAll(".m1").length;
// for (let i = 0; i < allPlay; i++) {
//   document.querySelectorAll(".m1")[i].addEventListener("click", function(){
//     alert("data");
//     var identifier = this.getAttribute('data-index');
//     console.log(identifier);

//     swit
//   });

// }

// function handleIconClick(){
//     const clickIconIndex = parseInt(this.getAttribute('data-index'), 2);
//     playSoundBasedOnIndex(clickIconIndex);
// }

// function playSoundBasedOnIndex(index) {
//     switch (index) {
//         case 0:
//             var music1 = new Audio(
//               "audioSongs/Alan_Walker_Faded_(thinkNews.com.ng).mp3"
//             );
//             music1.load();
//             music1.volume = 0.4;
//             music1.play();

//             break;
//         case 1:
//                 var music3 = new Audio("audioSongs/Asake_-_Joha.mp3");
//                 music3.load();
//                 music3.volume = 0.4;
//                 music3.play();
//                 setTimeout(function nameD(){
//                     music3.pause()
//                 }, 7000)
//                nameD()
//                 // pauseMusic();

//         default:
//             console.log('No sound defined for this icon')
//     }
// }

// const icons = document.querySelectorAll(".m1");
// icons.forEach(icons =>{
//     icons.addEventListener("click", handleIconClick);
//     // icons.style.display = "none"

// });
// setTimeout(function stopAudio() {
// });

// Work tomorrow with icon to pause the music
// var pauseMusic1 = document.querySelector(".pause");
var pauseM = document.getElementById("pauseIcon1");

var music1 = new Audio("audioSongs/Alan_Walker_Faded_(thinkNews.com.ng).mp3");
var musicNo1Play = document.getElementById("playBTN1");
musicNo1Play.addEventListener("click", function () {
  music1.load();
  music1.volume = 0.4;
  music1.play();
  console.log(musicNo1Play);
  if ((pauseM.style.display = "none")) {
    pauseM.style.display = "block";
    musicNo1Play.style.display = "none";
  }
  pauseM.addEventListener("click", () => {
    music1.pause();
    console.log(pauseM);
    musicNo1Play.style.display = "block";
    pauseM.style.display = "none";
  });
  // if (music1.play = true) {
  //     music1.pause()
  // }else{
  //     console.log("Lie")
  // }
});

// var music2 = new Audio("audioSongs/Asake_-_Joha.mp3");
// var music2Pause = document.querySelector(".pauseButton2");
// var muscino2 = document.querySelector(".playButton2");
// muscino2.addEventListener("click", function(){
//   music2.load();
//   music2.volume = 0.4;
//   music2.play();
//   if (music2Pause.style.display = "none") {
//     music2Pause.style.display = "block";
//     muscino2.style.display = "none";
//   }
//   music2Pause.addEventListener("click", ()=>{
//     music2.pause();
//         muscino2.style.display = "block";
//         music2Pause.style.display = "none"
//   })

// })
