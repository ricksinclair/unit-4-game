////////////////////////////////////////////////////
////////GLOBAL VARIABLES////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
var gameOn = false; //controls game state
var randomNums = 0; //the random integer chosen for the round
var crystal1; //crystals 1-4
var crystal2; //crystals 1-4
var crystal3; //crystals 1-4
var crystal4; //crystals 1-4
var cpuBoxScore = 0; // variables to track cpu and user scores on baord.
var userBoxScore = 0; // variables to track cpu and user scores on baord.
var userScore = 0;
/////////////////////////////////////////////////////
////Functions////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

//Got help finding this function on stack overflow.
//https://stackoverflow.com/questions/17891173/how-to-efficiently-randomly-select-array-item-without-repeats
function randomNoRepeats(array) {
  //returns first element in array as a new array object in "copy"
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

//this array holds each of the image clases so that the images are random as well as the values
//the code below sets the random ims when the page loads.
var randomImgs = randomNoRepeats([
  "crystal-1",
  "crystal-2",
  "crystal-3",
  "crystal-4"
]);

/////////////////////////////////////////////////////////
///page rendering///////////////////////////////////////
///////////////////////////////////////////////////////
function renderPage() {
  showCrystals();
  $("#cr1").addClass(randomImgs());
  $("#cr2").addClass(randomImgs());
  $("#cr3").addClass(randomImgs());
  $("#cr4").addClass(randomImgs());
  console.log("random images loaded");
  $("#random-box").text(" press start game  to play");
  $("#losses-count").text("CPU LOSSES: " + cpuBoxScore);
  $("#win-count").text("PLAYER WINS: " + userBoxScore);
  console.log("scoreboard drawn");
}
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//reveals all including crystals
function reveal() {
  $("#losses-count").empty();
  $("#win-count").empty();
  $("#current-score-number").empty();
  $("#random-box").empty();
  $("#current-score-number").html(userScore);
  $("#random-box").html("<h1>" + randomNums + "</h1>");

  $("#losses-count").text("CPU LOSSES: " + cpuBoxScore);
  $("#win-count").text("PLAYER WINS: " + userBoxScore);
  $("#cr1Revealed").html("<h3>Crystal's value was: " + crystal1 + "</h3>");
  $("#cr2Revealed").html("<h3>Crystal's value was: " + crystal2 + "</h3>");
  $("#cr3Revealed").html("<h3>Crystal's value was: " + crystal3 + "</h3>");
  $("#cr4Revealed").html("<h3>Crystal's value was: " + crystal4 + "</h3>");
}

//Helps update scoreboard without revealing crystal values
function revealPartial() {
  $("#losses-count").empty();
  $("#win-count").empty();
  $("#current-score-number").empty();
  $("#random-box").empty();
  $("#losses-count").text("CPU LOSSES: " + cpuBoxScore);
  $("#win-count").text("PLAYER WINS: " + userBoxScore);
  $("#current-score-number").html("<h1>" + userScore + "</h1>");
  $("#random-box").html("<h1>" + randomNums + "</h1>");
}

//Neeeded help getting numbers within range.
//source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

///This function will add the value of the crystal to the user score.
function addScore(crystal) {
  console.log("click!");
  revealPartial();
  userScore += crystal;
  console.log(userScore);
  revealPartial();
  winLogic();
}

//controls all crystal clicking
function crystalClicks() {
  if (gameOn) {
    $("#current-score-number").html(userScore);
    $("#cr1").click(function() {
      addScore(crystal1);
    });
    $("#cr2").click(function() {
      addScore(crystal2);
    });
    $("#cr3").click(function() {
      addScore(crystal3);
    });

    $("#cr4").click(function() {
      addScore(crystal4);
    });
  }
}

///initialize all numbers
function numberInit() {
  $("#random-box").empty();
  console.log("box instructions replaced");
  console.log("game on function active after button press");
  revealPartial();
  gameOn = true;
  userScore = 0;
  console.log("userscore intitialized to " + userScore);
  $("#current-score-number").html(userScore);
  randomNums = getRandomInt(19, 120);
  $("#random-box").html("<h2> random number is: " + randomNums + "</h2>");

  console.log("your random number is " + randomNums);
  //sets random value between 1 and 12 for user.
  crystal1 = Math.ceil(Math.random() * 12);

  console.log("crystal1 is: " + crystal1);
  //set and report crystal value for debug and cheating
  crystal2 = Math.ceil(Math.random() * 12);

  console.log("crystal2 is: " + crystal2);
  //set and report crystal value for debug and cheating
  crystal3 = Math.ceil(Math.random() * 12);

  console.log("crystal3 is: " + crystal3);
  //set and report crystal value for debug and cheating
  crystal4 = Math.ceil(Math.random() * 12);

  console.log("crystal4 is: " + crystal4);
}
function hideCrystals() {
  $("#cr1").toggle(false);
  $("#cr2").toggle(false);
  $("#cr3").toggle(false);
  $("#cr4").toggle(false);
}

function showCrystals() {
  $("#cr1").toggle(true);
  $("#cr2").toggle(true);
  $("#cr3").toggle(true);
  $("#cr4").toggle(true);
}

function hideSolution() {
  $("#cr1Revealed").empty();
  $("#cr2Revealed").empty();
  $("#cr3Revealed").empty();
  $("#cr4Revealed").empty();
}

function winLogic() {
  if (userScore === randomNums) {
    cpuBoxScore++;
    reveal();
    console.log("game conditions met");
    hideCrystals();
    gameOn = false;
    $("#congratulatory_message").modal("show");
    //winAudio();

    console.log("gameOn=false");
  } else if (randomNums < userScore && randomNums !== userScore) {
    userBoxScore++;
    reveal();

    console.log("game conditions met");
    hideCrystals();
    gameOn = false;

    $("#loser_message").modal("show");
    //   lossAudio();

    console.log("gameOn=false");
  }
}

//this will render the score at 0 at the page load.
//sorry if i get annoying with the annotation, but I'm trying to
//make this so its human readable and more understandable to me
// I'd like to rely on external sources more for syntax rather than
//logic in the future.
$("#current-score-number").html("<h1>" + userScore + "</h1>");
//This function starts the game and changes the gameOn boolean once the game is finished.
function gameStart() {
  //initialize all numbers
  //then set and report crystal value for debug and cheating
  hideSolution();
  numberInit();
  showCrystals();
  //Control Crystal Clicks which has a gamelogic function run each time
  crystalClicks();
}

renderPage();
$("#startbutton").click(function() {
  gameStart();
});

////////////////////////misc deletes//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//Originally tried to psuedocode the below and assign classes this way using the some keyword.
//Got a little stuck.
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//pick a random image using array with bracket notation randomImgs[i]

//check if random image has been selected in array imgPicked

//if it was set imgPicked to true

//If imgPicked = true, pick again

//otherwise push string to imgsPicked

// function checkElement(i) {
//   for (x = 0; x <= randomImgs.length; x++)
//var id = imgPicked.length + 1;
//tried to use some function to do the same as above. would like a little help with this one.
//   var found = imgsPicked.some(function(i) {
//     ;
//   });
//   if (!found) {
//     imgsPicked.push();
//   }
// }

// function addElement() {}
// function imgRender() {
//   i = Math.floor(Math.random() * 4);
// }
//

/*
function winAudio() {
  var audioElement = [$("<audio></audio>")];
  audioElement[0].setAttribute("src", "../mp3/winHorn.mp3");
  audioElement[0].setAttribute("id", "audio");
  //found audio fix here https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-i
  audioElement[0].play();

  console.log("audio element loaded");

  cutAudio();
  console.log("audio element destroyed");
}

function lossAudio() {
  var audioElement = [document.createElement("audio")];
  audioElement[0].setAttribute(
    "src",
    "../mp3/The Price is Right Losing Horn - Gaming Sound Effect (HD).mp3"
  );
  audioElement[0].setAttribute("id", "audio");
  console.log("audio element created");
  //audioElement.load()

  audioElement[0].play();

  console.log("audio element loaded");

  cutAudio();
  console.log("audio element destroyed");
}
*/
/*
function cutAudio() {
  setInterval(function() {});

  audioElement.addEventListener("timeupdate", function() {
    var t = audioElement.currentTime;
    //this allows you to set how many seconds short the audio will play vs the real duration.
    if (t == audioElement.duration + 3) {
      audioElement.empty();
    }
  });
}
*/
