//EVENT Listeners
document.getElementById("one").addEventListener("click", setGoku);
document.getElementById("two").addEventListener("click", setVegeta);
document.getElementById("three").addEventListener("click", setFrieza);
document.getElementById("four").addEventListener("click", setBroly);
document.getElementById("five").addEventListener("click", setParagus);
document.getElementById("six").addEventListener("click", setGogeta);
document.getElementById("btn").addEventListener("click", displayMessage);
document.getElementById("mainImg").addEventListener("click", getCard);
document.getElementById("plus10").addEventListener("click", add10);
document.getElementById("plus100").addEventListener("click", add100);
document.getElementById("btnatk").addEventListener("click", CALCULATE);

//Global Variables
let numRare = 0;
let numSuper = 0;
let numUltra = 0;
let numSecret = 0;

//Event functions
function setGoku() {
  document.getElementById("img1").src = "images/goku.jpg";
  document.getElementById("name").innerHTML = "Son Goku";
  document.getElementById("description").innerHTML =
    "In the movie goku was trying to help his friend bulma reclaim the dragon balls which had been stolen by his enemy frieza, to make himself taller.But there missin is not as simple as it seems. ";
  document.getElementById("box").style.backgroundColor = "red";
  document.getElementById("h1").style.color = "black";
  document.getElementById("name").style.color = "black";
  document.getElementById("description").style.color = "black";
  document.getElementById("fact").innerHTML =
    "Could easily beat naruto in a fight.";
  document.getElementById("fact").style.color = "black";
  document.getElementById("word").style.color = "black";
  document.getElementById("word2").style.color = "black";
}

function setVegeta() {
  document.getElementById("img1").src = "images/Vegeta SSGSS.png";
  document.getElementById("name").innerHTML = "Prince Vegeta";
  document.getElementById("description").innerHTML =
    "In the movie vegeta has a newborn duagter and when his wife bilma calls him saying that the dragon balls are missing then he has to go help her with goku, not knowing what lies ahead and the plans frieza has laid out for them. ";
  document.getElementById("box").style.backgroundColor = "blue";
  document.getElementById("description").style.color = "white";
  document.getElementById("h1").style.color = "white";
  document.getElementById("name").style.color = "white";
  document.getElementById("fact").innerHTML =
    "Can't catch up to goku in power.";
  document.getElementById("fact").style.color = "white";
  document.getElementById("word").style.color = "white";
  document.getElementById("word2").style.color = "white";
}

function setFrieza() {
  document.getElementById("img1").src = "images/frieza.jpg";
  document.getElementById("name").innerHTML = "Lord frieza";
  document.getElementById("description").innerHTML =
    "In the movie frieza wanted to get the 7 dragon balls to make him self taller, because hes only 5 ft tall but on his journey to get the dragon balls from Goku and friends. Though, his minions find a Sayian named Paragus and his son Broly who have been stuck on a desolte planet named Vampa ever since King Vegeta banished them. Frieza uses their haterd toward the old king to get them to attack Prince Vegeta and Son Goku. ";
  document.getElementById("box").style.backgroundColor = "gold";
  document.getElementById("h1").style.color = "Black";
  document.getElementById("name").style.color = "black";
  document.getElementById("description").style.color = "black";
  document.getElementById("fact").innerHTML =
    "Frieza was the one who started the entire conflict in the movie because he wanted to become taller .";
  document.getElementById("fact").style.color = "black";
  document.getElementById("word").style.color = "black";
  document.getElementById("word2").style.color = "black";
}

function setBroly() {
  document.getElementById("img1").src = "images/Broly.jpg";
  document.getElementById("name").innerHTML = "BROLY";
  document.getElementById("description").innerHTML =
    "In the movie Broly is being controlled by his father Paragus, and he abuses Broly when he acts out.Frieza is using paragus to get broly to fight goku and friends to see how strong he is, and he is stronger than goku and vegeta. So I wonder how they will beat him. ";
  document.getElementById("box").style.backgroundColor = "green";
  document.getElementById("description").style.color = "black";
  document.getElementById("h1").style.color = "black";
  document.getElementById("name").style.color = "black";
  document.getElementById("fact").style.color = "black";
  document.getElementById("fact").innerHTML =
    "In broly's final form he is over 9'10.";
  document.getElementById("word").style.color = "black";
  document.getElementById("word2").style.color = "black";
}

function setParagus() {
  document.getElementById("img1").src = "images/paragus.jpg";
  document.getElementById("name").innerHTML = "Paragus";
  document.getElementById("description").innerHTML =
    "In the movie paragus is Brolys father and both of them where exliled off there planet because broly as a infant was stronger than the kings son, and thats why broly hates vegeta becasue they look alike.";
  document.getElementById("box").style.backgroundColor = "purple";
  document.getElementById("h1").style.color = "white";
  document.getElementById("name").style.color = "white";
  document.getElementById("description").style.color = "white";
  document.getElementById("fact").style.color = "white";
  document.getElementById("fact").innerHTML =
    "In the movie paragus died at the age of 80.";

  document.getElementById("word").style.color = "white";
  document.getElementById("word2").style.color = "white";
}

function setGogeta() {
  document.getElementById("img1").src = "images/gogeta.jpg";
  document.getElementById("name").innerHTML = "Gogeta";
  document.getElementById("description").innerHTML =
    "In the movie goku and vegeta fuse using a special dance and they call themselves gogeta.This is how they defeat Broly.";
  document.getElementById("box").style.backgroundColor = "lightblue";
  document.getElementById("h1").style.color = "white";
  document.getElementById("name").style.color = "white";
  document.getElementById("description").style.color = "white";
  document.getElementById("fact").style.color = "white";
  document.getElementById("fact").innerHTML =
    "Gogeta is one out of two possible ways to fuse, the other way the the potara earings which all you do is put them on then you just merge together .";
  document.getElementById("word").style.color = "white";
  document.getElementById("word2").style.color = "white";
}

//Mad lib
function displayMessage() {
  let goku = document.getElementById("input1").value;
  let vegeta = document.getElementById("input2").value;
  let vilian = document.getElementById("input3").value;
  let main = document.getElementById("input4").value;
  let end = document.getElementById("input5").value;

  let message =
    "Frieza wants to get the" +
    " " +
    goku +
    " " +
    "so that he can finally" +
    " " +
    vegeta +
    " " +
    "and then he can" +
    " " +
    vilian +
    " " +
    "but goku like always" +
    " " +
    main +
    " " +
    "and they have a" +
    " " +
    end +
    " ";

  document.getElementById("output").innerHTML = message;
}

function getCard() {
  let randNum = Math.random();
  //simulate cards
  if (randNum < 1) {
    let randCard = Math.random();

    if (randCard < 0.1) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/yamcha.jpg">';
    } else if (randCard < 0.2) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/krillin.jpg">';
    } else if (randCard < 0.3) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/tien.jpg">';
    } else if (randCard < 0.4) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/piccolo.jpg">';
    } else if (randCard < 0.5) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/goten.png">';
    } else if (randCard < 0.6) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/trunks.jpg">';
    } else if (randCard < 0.7) {
      console.log("Rare");
      numRare++;
      document.getElementById("rare").innerHTML = numRare;
      document.getElementById("results").innerHTML +=
        '<img src="images/chiaotzu.jpg">';
    } else if (randCard < 0.8) {
      console.log(" Super Rare");
      numSuper++;
      document.getElementById("super").innerHTML = numSuper;
      document.getElementById("results").innerHTML +=
        '<img src="images/super saiyan 3.jpg">';
    } else if (randCard < 0.9) {
      console.log(" Super Rare");
      numSuper++;
      document.getElementById("super").innerHTML = numSuper;
      document.getElementById("results").innerHTML +=
        '<img src="images/hit2.jpg">';
    } else if (randCard < 0.99) {
      console.log("Ultra Rare");
      numUltra++;
      document.getElementById("Ultra").innerHTML = numUltra;
      document.getElementById("results").innerHTML +=
        '<img src="images/kaioken.png">';
    } else {
      console.log("legend");
      numSecret++;
      document.getElementById("Secret").innerHTML = numSecret;
      document.getElementById("results").innerHTML +=
        '<img src="images/hercule.jpg">';
    }
  }
}
function add10() {
  for (let n = 0; n < 10; n++) {
    getCard();
  }
}

function add100() {
  for (let n = 0; n < 100; n++) {
    getCard();
  }
}

function CALCULATE() {
  //calculate there attack values
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let num4 = Number(document.getElementById("num4").value);
  //Goku attack stat
  let num5 = num1 * 2;
  let num6 = num5 / num4;
  let num7 = num6 + 5;
  //Vegetas attack stat
  let num8 = num3 + 15;
  let num9 = num8 / num2;

  //display there attack values
  document.getElementById("atk1").innerHTML = Math.floor(num7);
  document.getElementById("atk2").innerHTML = Math.floor(num9);
}
