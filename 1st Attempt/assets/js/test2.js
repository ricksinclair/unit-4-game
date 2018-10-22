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
var player;
var id;

function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}
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

console.log(findObjectByKey(charSelect, shortName));
