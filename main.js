// Challenge One
var word1 = "jumbo";
var word2 = "shrimp";
var wordScore2 = 0;
var wordScore1 = 0;
var challengeOne = document.getElementById("challenge-1")

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
}   challengeOne.innerHTML = word2;

