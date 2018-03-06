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
challengeTwo.innerHTML = "<h1>" +earth+ "</h1>";

//  Challenge 3 ----------------------------

// var input = [ 1, 1, 1, 2, 1, 1 ];
// var unique = 0;
// // var input = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];
// // function uniqueFunc(input) {
// for (var k = 0; k < input.length; k++){
//     var test = input.filter
//     unique += test;
// }


// Challenge 4 --------------------------
var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

function challenge4(doubleMint) {
    var doubled = [];
    for (var m = 0; m < doubleMint.length; m++) {
        doubled.push(doubleMint[m] * 2);
    }
    return doubled;
}

var doubledArray = challenge4(challengeFourInputB);
document.getElementById('challenge-4').innerHTML = "<h3> Challenge 4: " + doubledArray + "</h3>";

// Challenge 6-------------------------------

var test1 = [1,3]; 
var test2 = [2,3,4]; 
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; 

function challenge6(testArray){
    var arrayLength = (testArray.length) + 1;
    var correctSum =(arrayLength * (arrayLength + 1)) / 2;
    
    var testArraysum = 0;
    for(var l = 0; l < testArray.length; l++){
        testArraysum += testArray[l];
    }
    var missingNumber = correctSum - testArraysum;

    var printDiv = document.getElementById("challenge-6");
    printDiv.innerHTML += "<h1> The missing number is: " + missingNumber + "</h1>";
}
challenge6(test1);
challenge6(test2);
challenge6(test3);