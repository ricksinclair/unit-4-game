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

var bobafett = new character(
  "Boba Fett",
  45,
  35,
  120,
  true,
  "bobafett",
  "../img/bobafett.jpg"
);

function characterCheck(player) {
  console.log(player instanceof character);
  console.log(player);
}

var charselect = [
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

// console.log(typeof bobafett.isDarkSide == typeof booleanControl);
// for (var i = 0; i < charselect.length; i++) {
//   console.log(typeof charselect[i].isDarkSide);
//   console.log(charselect[i].name);
//   //Typechecking functions
// }

function checkNums(character) {
  if (
    typeof numberControl == typeof character.att &&
    typeof numberControl == typeof character.cnt &&
    typeof numberControl == typeof character.hp
  ) {
    console.log(character.name + " has valid Numbers");
    numsValid = true;
  } else {
    console.log("numeric type check failed.");
  }
}

function checkBools() {
  for (var i = 0; i < charselect.length; i++) {
    //Typechecking functions

    if (typeof booleanControl === typeof character.isDarkside[i]) {
      console.log(
        charselect[i].name + "is a" + typeof charselect[i].isDarkSide
      );

      boolValid = true;
    } else {
      console.log("Boolean type check failed.");
    }
  }
}
function checkStrings(character) {
  if (typeof stringControl == typeof character.name) {
    console.log(character.name + " has valid Strings");
    stringValid = true;
  } else {
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
  characterCheck(charselect[i].shortname);
}

function checkallplayers() {
  for (var i = 0; i < charselect.length; i++) {
    characterCheck(charselect[i]);
    checkNums(charselect[i]);
    checkBools();
  }
}

// checkallplayers();
