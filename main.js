// Challenge One
var word1 = "jumbo";
var word2 = "shrimp";
var wordScore2 = 0;
var wordScore1 = 0;
var challengeOne = document.getElementById("challenge-1");

for (var i = 0; i < word1.length; i++){
    var numbers = (word1.charCodeAt(i)) - 96;
    wordScore1 += numbers;
};

for (var j = 0; j < word2.length; j++){
    var numbers2 = (word2.charCodeAt(j)) - 96;
    wordScore2 += numbers2;
}
if (wordScore1 > wordScore2){
    challengeOne.innerHTML = word1;
} else {
    challengeOne.innerHTML = word2;
}

//  CHALLENGE 2 --------------------------
var earth = [1,2,3,4,5,6,7,8,9];
var challengeTwo = document.getElementById("challenge-2");
earth.splice(2, 1, 7);
earth.splice(6, 1, 3);

challengeTwo.innerHTML = earth;
