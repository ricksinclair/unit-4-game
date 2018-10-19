//////////////////////////////////////////////////////////
////Modal Stuff///////////////////////////////////////////
/////////////////////////////////////////////////////////
function welcome() {
  $("#welcome_message").modal("show");
  var starWarsTheme = document.getElementById("welcomeAudio");
  starWarsTheme.play();

  //found the below sound duration timefix on stack overflow.
  setInterval(function() {});

  starWarsTheme.addEventListener("timeupdate", function() {
    var t = starWarsTheme.currentTime;
    //this allows you to set how many seconds short the audio will play vs the real duration.
    if (t > starWarsTheme.duration - 10) {
      starWarsTheme.pause();
      //This alert gives you the time (in seconds) that the audio stopped.
      // alert(t);
    }
  });
}

function modalclosebutton() {
  var modalcloseaudio = document.getElementById("modal_close_audio");

  $(".close").on("click", function() {
    modalcloseaudio.play();
  });
}
/////////////////////////////////////////////////////
///Global Variables, Prototypes, and Constructors////
////////////////////////////////////////////////////

function character(name, att, cnt, hp, isDarkSide, shortname, imgUrl) {
  this.name = name;
  this.att = att;
  this.cnt = cnt;
  this.hp = hp;
  this.isDarkSide = isDarkSide;
  this.shortname = shortname;
  this.imgUrl = imgUrl;
}

var obiwan = new character(
  "Obi-Wan",
  30,
  50,
  120,
  false,
  "obiwan",
  "../img/OBIWANKENOBI.jpg"
);

var leia = new character(
  "Princess Leia",
  27,
  53,
  120,
  false,
  "leia",
  "../img/princessleia.jpg"
);

var chewy = new character(
  "Chewbacca",
  32,
  48,
  120,
  false,
  "chewy",
  "../img/CHEWBACCA.jpg"
);

var hansolo = new character(
  "Han Solo",
  25,
  55,
  120,
  false,
  "hansolo",
  "../img/hansolo.jpg"
);

var luke = new character(
  "Luke Skywalker",
  40,
  40,
  120,
  false,
  "luke",
  "../img/lukeskywalker.jpg"
);

var yoda = new character(
  "Yoda",
  50,
  30,
  120,
  false,
  "yoda",
  "../img/lukeskywalker.jpg"
);

var stormtrooper = new character(
  "Storm Trooper",
  40,
  40,
  120,
  true,
  "stormtrooper",
  "../img/stormtrooper.jpg"
);
var darthmaul = new character(
  "Darth Maul",
  30,
  50,
  120,
  true,
  "darthmaul",
  "../img/darthmaul.jpg"
);

var darthvader = new character(
  "Darth Vader",
  60,
  20,
  120,
  true,
  "darthvader",
  "../img/darthvader.jpg"
);

function characterCheck(player) {
  console.log(player instanceof character);
  console.log(player);
}

/////////////////////////////////////////////////////
/////////Object Properties TypeChecking//////////////
/////////////////////////////////////////////////////

//Typechecking Global Variables

var numberControl = 1;
var booleanControl = false;
var stringControl = "";
var numsValid = false;
var boolValid = false;
var stringValid = false;

//Typechecking functions
function checkNums(character) {
  if (
    typeof numberControl === typeof character.att &&
    typeof number === typeof character.cnt &&
    typeof number === typeof character.hp
  ) {
    numsValid = true;
  } else {
    alert("Error! Numeric type check failed");
    console.log("numeric type check failed.");
  }
}

function checkBools(character) {
  if (typeof booleanControl === character.isDarkside) {
    boolValid = true;
  } else {
    alert("Error! Boolean type check failed.");
    console.log("Boolean type check failed.");
  }
}

function checkBools(character) {
  if (typeof booleanControl === character.name) {
    stringValid = true;
  } else {
    alert("Error! String type check failed.");
    console.log("String type check failed.");
  }
}

function characterCheck(player) {
  console.log(player instanceof character);
  console.log(player);
}

var cCheckLength = charselect.length;
for (var i = 0; i < cCheckLength; i++) {
  console.log(charselect[i]);
  //Do something
  charname = charselect[i].name;

  characterCheck(charname);
}

//////////////////////////////////////////////////////////
///////Array Population / Vacation Functions ////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//Deliberately pushing jedis to lower indexes of array
//Siths to upper indexes so that charselect function logic
///can be based on this initialzed index
///for example Jedis will be on 0-5
///siths will be on
var charselect = [
  obiwan,
  leia,
  chewy,
  hansolo,
  luke,
  yoda,
  stormtrooper,
  darthmaul,
  darthvader
];

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
  array1.splice(i, 1);
  i--; //decrement i IF we remove an item
}

//////////////////////////////////////////////////////
////////Button Magic//////////////////////////////
/////////////////////////////////////////////////////

//needed to create a user interaction to test audio/modal since new chrome policy
//prevents audio autoplay without user interaction
modalclosebutton();

$("#helperBots").on("click", function() {
  welcome();
  characterCheck(obiwan);
});
