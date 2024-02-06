

let accountsIcon = document.getElementById("userDisplayicon");
let accountsContainer = document.querySelector(".accounts");
accountsIcon.addEventListener("click", ()=>{
  if (accountsContainer.style.display = "none") {
    accountsContainer.style.display = "block"
  }
})
var accountContent = document.querySelector(".accounts");
var userNameDisplay = document.querySelector(".userAccounts");
// Getting the values of all our form inputs
var userName = document.getElementById("NameUser");
var userEmail = document.getElementById("EmailUser");
var user_password = document.getElementById("passwordUser");

// Retrieve the stored username value on page load
window.addEventListener("load", function () {
  var storedUserName = localStorage.getItem("username");
  if (storedUserName) {
    userNameDisplay.innerHTML = storedUserName;
    accountContent.style.display = "none";
  }
});

// For button sign up
var signUpBtn = document.getElementById("SignupButton");

signUpBtn.addEventListener("click", (e) => {
  if (userName.value == "") {
    alert("Please enter your name");
    e.preventDefault();
  } else if (userEmail.value == "") {
    alert("Please enter your email");
    e.preventDefault();
  } else if (user_password.value == "") {
    alert("Please create a password");
    e.preventDefault();
  } else {
    alert(`You are now Logged in as ${userName.value}`);
    userNameDisplay.innerHTML = userName.value;
    accountContent.style.display = "none";

    // Store the username value in localStorage
    localStorage.setItem("username", userName.value);
    console.log(storedUserName)
  }
});

var loginBTn = document.getElementById("loginButton");
var OlduserE_Mail = document.getElementById("old-User-Email");
var old_User_Passcode = document.getElementById("old-User-Password");

loginBTn.addEventListener("click", (e) => {
  if (OlduserE_Mail.value == "") {
    alert("Please enter your Email");
    e.preventDefault();
  } else if (old_User_Passcode.value == "") {
    alert("Cannot sign in without a password");
    e.preventDefault();
  } else {
    alert(`Welcome back ${OlduserE_Mail.value}`);
    userNameDisplay.textContent = OlduserE_Mail.value;
    accountContent.style.display = "none";

    // Store the username value in localStorage
    localStorage.setItem("username", OlduserE_Mail.value);
  }
});

// To remove the Form Container
var remove_Form_Icon = document.getElementById("removeForm");
remove_Form_Icon.addEventListener("click", ()=>{
  accountContent.style.display = "none"
})

// To display Login Form on click
var createFormContainer = document.querySelector(".parentFormCreate");
let login_Container = document.querySelector(".parentLoginForm");
var user_Exists = document.querySelector(".AlreadyCreated");
user_Exists.addEventListener("click", ()=>{
  login_Container.style.display = "block";
  createFormContainer.style.display = "none"
});

// To show the Create Account Form
var createuser = document.querySelector(".CreateNewUser");
 createuser.addEventListener("click", ()=>{
   login_Container.style.display = "none";
   createFormContainer.style.display = "block";
 })
// signUpBtn.addEventListener("click", (e)=>{
//    userNameDisplay.innerHTML = userName.value;
//    alert(`Logged in as ${userName.value}`);
//    accountContent.style.display = "none";
// })

// Adding Animations to the image to be rotating when clicked
// For Music 1
var musicImg = document.getElementById("MusicImgID");
document.getElementById("playIcon").addEventListener("click", function(){
  musicImg.classList.add("rotate")
});

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
  joha.pause();
  plenty.pause();
  influenceAudio.pause();
  Malugo.pause();
  musicImg2.classList.remove("rotate");
  musicImg3.classList.remove("rotate");
  musicImg4.classList.remove("rotate");
    musicImg5.classList.remove("rotate");

  if (pause_fadedMusic.style.display = "none") {
    pause_fadedMusic.style.display = "block";
    playFadedMusic.style.display = "none"
    console.log(pause_fadedMusic)
  };
  pause_fadedMusic.addEventListener("click",  ()=>{
   Faded.pause();
   musicImg.classList.remove("rotate")
   pause_fadedMusic.style.display = "none";
   playFadedMusic.style.display = "block"
  })

});
Faded.addEventListener("ended", function(){
  musicImg.classList.remove("rotate");
  playFadedMusic.style.display = "block";
  pause_fadedMusic.style.display = "none"
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
var musicImg2 = document.getElementById("MusicImgID2");
document.getElementById("playIcon2").addEventListener("click", function(){
  musicImg2.classList.add("rotate")
});

var joha = new Audio("audioSongs/Asake_-_Joha.mp3");
joha.load();
joha.volume = 0.7;
let play_Joha = document.getElementById("playIcon2");
let pause_Joha = document.getElementById("pauseIcon2");
play_Joha.addEventListener("click", ()=>{
  joha.play();
  Faded.pause();
  plenty.pause();
  influenceAudio.pause();
  Malugo.pause()
  musicImg.classList.remove("rotate");
  musicImg3.classList.remove("rotate");
  musicImg4.classList.remove("rotate");
    musicImg5.classList.remove("rotate");

  if (pause_Joha.style.display = "none") {
    pause_Joha.style.display = "block";
    play_Joha.style.display = "none"
  };
  pause_Joha.addEventListener("click", () => {
    joha.pause();
    musicImg2.classList.remove("rotate")
    pause_Joha.style.display = "none";
    play_Joha.style.display = "block"
  })
});
joha.addEventListener("ended", function () {
  musicImg2.classList.remove("rotate");
  play_Joha.style.display = "block";
  pause_Joha.style.display = "none"
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
// To close Joha_Options
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

// For Playing Music 3

var musicImg3 = document.getElementById("MusicImgID3");
document.getElementById("playIcon3").addEventListener("click", function(){
  musicImg3.classList.add("rotate")
});
var plenty = new Audio("audioSongs/Burna_Boy_-_It_s_Plenty.mp3");
plenty.load();
plenty.volume = 0.7;
let play_plenty = document.getElementById("playIcon3");
let pause_plenty = document.getElementById("pauseIcon3");
play_plenty.addEventListener("click", () => {
  plenty.play();
  Faded.pause();
  joha.pause();
  influenceAudio.pause();
    Malugo.pause();

  musicImg.classList.remove("rotate");
  musicImg2.classList.remove("rotate");
  musicImg4.classList.remove("rotate");
  musicImg5.classList.remove("rotate")
  if ((pause_plenty.style.display = "none")) {
    pause_plenty.style.display = "block";
    play_plenty.style.display = "none";
  }
  pause_plenty.addEventListener("click", () => {
    plenty.pause();
    musicImg3.classList.remove("rotate")
    pause_plenty.style.display = "none";
    play_plenty.style.display = "block";
  });
});
plenty.addEventListener("ended", function(){
  musicImg3.classList.remove("rotate");
  play_plenty.style.display = "block"
  pause_plenty.style.display = "none"
})

// For adding it's  Plenty to favs;
var fav3 = document.getElementById("heart3");
var isFavorite = false;

fav3.addEventListener("click", () => {
  if (!isFavorite) {
    // Add to favorites
    fav3.style.color = "red";
    alert("It's Plenty added to favorites list");
  } else {
    // Remove from favorites
    fav3.style.color = "white";
    alert("It's Plenty removed from favorites list");
  }

  isFavorite = !isFavorite;

  fav3.style.transition = ".7s ease";
  fav3.style.transform = "scale(0.9) rotate(360deg)";
  fav3.style.fontSize = "25px";

  setTimeout(function () {
    fav3.style.transform = "none";
    fav3.style.fontSize = "20px";
  }, 500);
});

// Let us display It's Plenty music options on dots click
var plenty_Dots = document.getElementById("dots3");
var plenty_Options = document.querySelector(".more3");
plenty_Dots.addEventListener("click", ()=>{
  if (plenty_Options.style.display = "none") {
    plenty_Options.style.display = "block";
  }
})
// To close Joha_Options
var plenty_Options_close = document.getElementById("closeMore3");
plenty_Options_close.addEventListener("click", () => {
  plenty_Options.style.display = "none"
})

// Let us share it's plenty Music File
var plenty_Share = document.getElementById("sharePlenty");
plenty_Share.addEventListener("click", ()=>{
  if (navigator.share) {
    const plentyAudioFile = {
      title: "It's Plenty by Burna_Boy",
      text: "Listen to this awesome music by Asake \n  https://www.boomplay.com/songs/95143380",
    };
    // Callthe API method
    navigator
      .share(plentyAudioFile)
      .then(() => console.log("shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("web share API is not supported in this browser");
  }
});

// For Playing Music 4

var musicImg4 = document.getElementById("MusicImgID4");
document.getElementById("playIcon4").addEventListener("click", function(){
  musicImg4.classList.add("rotate")
});
var influenceAudio = new Audio(
  "audioSongs/Chris_Brown_-_Under_The_Influence-CONNECTLOADED.COM.mp3"
);
influenceAudio.load();
influenceAudio.volume = 0.7;
let play_influenceAudio = document.getElementById("playIcon4");
let pause_InfluenceAudio = document.getElementById("pauseIcon4");
play_influenceAudio.addEventListener("click", () => {
  influenceAudio.play();
  Faded.pause();
  joha.pause();
  plenty.pause();
    Malugo.pause();
  musicImg.classList.remove("rotate");
  musicImg2.classList.remove("rotate");
  musicImg3.classList.remove("rotate");
  musicImg5.classList.remove("rotate")
  if ((pause_InfluenceAudio.style.display = "none")) {
    pause_InfluenceAudio.style.display = "block";
    play_influenceAudio.style.display = "none";
  }
  pause_InfluenceAudio.addEventListener("click", () => {
    influenceAudio.pause();
    musicImg4.classList.remove("rotate")
    pause_InfluenceAudio.style.display = "none";
    play_influenceAudio.style.display = "block";
  });
});
influenceAudio.addEventListener("ended", function(){
  musicImg4.classList.remove("rotate");
  play_influenceAudio.style.display = "block"
  pause_InfluenceAudio.style.display = "none"
});

// For adding Under The Influence to favs;
var fav4 = document.getElementById("heart4");
var isFavorite = false;

fav4.addEventListener("click", () => {
  if (!isFavorite) {
    // Add to favorites
    fav4.style.color = "red";
    alert("Under the influence added to favorites list");
  } else {
    // Remove from favorites
    fav4.style.color = "white";
    alert("Under the influence removed from favorites list");
  }

  isFavorite = !isFavorite;

  fav4.style.transition = ".7s ease";
  fav4.style.transform = "scale(0.9) rotate(360deg)";
  fav4.style.fontSize = "25px";

  setTimeout(function () {
    fav4.style.transform = "none";
    fav4.style.fontSize = "20px";
  }, 500);
});
// Let us display Under the Influence music options on dots click
var influence_Dots = document.getElementById("dots4");
var influence_Options = document.querySelector(".more4");
influence_Dots.addEventListener("click", ()=>{
  if (influence_Options.style.display = "none") {
    influence_Options.style.display = "block";
  }
})
// To close Under the influence_Options
var influence_Options_close = document.getElementById("closeMore4");
influence_Options_close.addEventListener("click", () => {
  influence_Options.style.display = "none"
})

// Let us share Under the Influence Music File
var influence_Share = document.getElementById("shareInfluence");
influence_Share.addEventListener("click", ()=>{
  if (navigator.share) {
    const influenceAudioFile = {
      title: "Under The Influence by Chris_Brown",
      text: "Listen to this awesome music by Chris_Brown \n  https://www.boomplay.com/songs/47225650",
    };
    // Callthe API method
    navigator
      .share(influenceAudioFile)
      .then(() => console.log("shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("web share API is not supported in this browser");
  }
});

// For Playing Music 5

var musicImg5 = document.getElementById("MusicImgID5");
document.getElementById("playIcon5").addEventListener("click", function(){
  musicImg5.classList.add("rotate")
});
var Malugo = new Audio("audioSongs/E_Major_-_Malugo.mp3");
Malugo.load();
Malugo.volume = 0.7;
let play_Malugo = document.getElementById("playIcon5");
let pause_Malugo = document.getElementById("pauseIcon5");
play_Malugo.addEventListener("click", () => {
  Malugo.play();
  Faded.pause();
  joha.pause();
  plenty.pause()
  influenceAudio.pause();
  musicImg.classList.remove("rotate");
  musicImg2.classList.remove("rotate");
  musicImg3.classList.remove("rotate")
  musicImg4.classList.remove("rotate");
  if ((pause_Malugo.style.display = "none")) {
    pause_Malugo.style.display = "block";
    play_Malugo.style.display = "none";
  }
  pause_Malugo.addEventListener("click", () => {
    Malugo.pause();
    musicImg5.classList.remove("rotate")
    pause_Malugo.style.display = "none";
    play_Malugo.style.display = "block";
  });
});
Malugo.addEventListener("ended", function(){
  musicImg5.classList.remove("rotate");
  play_Malugo.style.display = "block"
  pause_Malugo.style.display = "none"
});
// Adding malugo To favorites
var fav5 = document.getElementById("heart5");
var isFavorite = false;

fav5.addEventListener("click", () => {
  if (!isFavorite) {
    // Add to favorites
    fav5.style.color = "red";
    alert("Malugo added to favorites list");
  } else {
    // Remove from favorites
    fav5.style.color = "white";
    alert("Malugo removed from favorites list");
  }

  isFavorite = !isFavorite;

  fav5.style.transition = ".7s ease";
  fav5.style.transform = "scale(0.9) rotate(360deg)";
  fav5.style.fontSize = "25px";

  setTimeout(function () {
    fav5.style.transform = "none";
    fav5.style.fontSize = "20px";
  }, 500);
});

// Let us display Malugo music options on dots click
var Malugo_Dots = document.getElementById("dots5");
var Malugo_Options = document.querySelector(".more5");
Malugo_Dots.addEventListener("click", ()=>{
  if (Malugo_Options.style.display = "none") {
    Malugo_Options.style.display = "block";
  }
})
// To close Malugo_Options
var Malugo_Options_close = document.getElementById("closeMore5");
Malugo_Options_close.addEventListener("click", () => {
  Malugo_Options.style.display = "none"
});

// Let us share Malugo Music File
var influence_Share = document.getElementById("shareMalugo");
influence_Share.addEventListener("click", ()=>{
  if (navigator.share) {
    const MalugoAudioFile = {
      title: "Malugo by E_Major",
      text: "Listen to this awesome music by E_Major \n  https://www.six9ja.com/emajor-malugo/",
    };
    // Callthe API method
    navigator
      .share(MalugoAudioFile)
      .then(() => console.log("shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert("web share API is not supported in this browser");
  }
});

























































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