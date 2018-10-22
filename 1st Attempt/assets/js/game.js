//////////////////////////////////////////////////////////
////Modal Stuff///////////////////////////////////////////
/////////////////////////////////////////////////////////
function welcome() {
  $("#welcome_message").modal("show");
}

function help() {
  $("#help_modal").modal("show");
  var r2Audio = document.getElementById("r2Audio");
  r2Audio.play();
}

function themeAudio() {
  var starWarsTheme = document.getElementById("welcomeAudio");
  starWarsTheme.play();

  //found the below sound duration timefix on stack overflow.
  setInterval(function() {});

  starWarsTheme.addEventListener("timeupdate", function() {
    var t = starWarsTheme.currentTime;
    //this allows you to set how many seconds short the audio will play vs the real duration.
    if (t > starWarsTheme.duration - 10) {
      starWarsTheme.pause();
      darthMusic();
      //This alert gives you the time (in seconds) that the audio stopped.
      // alert(t);
    }

    function darthMusic() {
      darthVaderTheme = document.getElementById("darth-music");
      darthVaderTheme.play();
    }
  });
}
welcome();

$("#welcome-close").on("click", function() {
  themeAudio();
});

$("#c3p0").on("click", function() {
  help();
});

$("#r2d2").on("click", function() {
  help();
});

/////////////////////////////////////////////////////
///Global Variables, Prototypes, and Constructors////
////////////////////////////////////////////////////

//Initialization Bools
var gameInProgress = false;
var pickYourCharacter = false;
var fightCharacter1 = false;
var fightCharacter2 = false;
var fightCharacter3 = false;

function character(cName, att, cnt, hp, isDarkSide, shortName, imgUrl) {
  this.cName = cName;
  this.att = att;
  this.cnt = cnt;
  this.hp = hp;
  this.isDarkSide = isDarkSide;
  this.shortName = shortName;
  this.imgUrl = imgUrl;
}



var cName = "cName";
var att = "att";
var cnt = "cnt";
var hp = "hp";
var isDarkside = "isDarkside";
var shortName = "shortName";
var imgUrl = "imgUrl";

/*
myObj[someProp]; // "Some Value"
*/

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

var bobafett = new character(
  "Boba Fett",
  45,
  35,
  120,
  true,
  "bobafett",
  "../img/bobafett.jpg"
);

var charSelect = [
  obiwan,
  leia,
  chewy,
  hansolo,
  luke,
  yoda,
  stormtrooper,
  darthmaul,
  darthvader,
  bobafett
];

var enemyInBattle = [];

var enemyField = [];

var playerField = [];

var ID = player;

///////////////////////////////
//function  possibly used as part of restart
function vacate(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
    array1.splice(i, 1);
    i--; //decrement i IF we remove an item
  }
}

/////////////////////////////////////////////////////

function gameStart() {
  gameInProgress = false;
  pickYourCharacter = false;
  fightCharacter1 = false;
  fightCharacter2 = false;
  fightCharacter3 = false;

for (i=0; i < charSelect.length; i++){




}





  if (pickYourCharacter === true) {

    $('#' + ID).on("click", moveChar(ID, playerField ));

    for (i=0; i < charSelect.length; i++){




  $(document.createElement('div')).attr("id", shortName ).attr("src", charSelect[i].imgUrl);

  
  var header1 = $(document.createElement('H1'))
  .attr("id", shortName+"Head" )
  .addClass("h1").text(charSelect[i].cName)
  .appendTo('#'+shortName);



    var img1 = $(document.createElement('img'))
.attr("id", shortName+"Img" )
.attr("src", charSelect[i].imgUrl)
.attr("class", "portrait" )
.appendTo('#'+shortName);





    document.createElement("p");
    $("img1").attr("id", shortName+"" );
    $("img1").attr("src", charSelect[i].imgUrl);
    $("img1").attr("class", "portrait" );
    var img1 = document.createElement("img");
    $("img1").attr("id", shortName );
    $("img1").attr("src", charSelect[i].imgUrl);
    $("img1").attr("class", "portrait" );
    
    var obj = $.grep(objArray, function(obj){return obj.id === 3;})[0];

    img1.src = charSelect[i].imgUrl;
  
  }
}

}



















function moveChar(character, array){


}




$('#' + ID).on("click", moveChar(ID, playerField ));

$("#welcome-close").on("click", function() {
  themeAudio();
});



