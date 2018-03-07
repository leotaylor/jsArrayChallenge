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
    challengeOne.innerHTML = "<h2> Challenge 1: " + word2 + "</h2>";
}

//  CHALLENGE 2 --------------------------
var earth = [1,2,3,4,5,6,7,8,9];
var challengeTwo = document.getElementById("challenge-2");
earth.splice(2, 1, 7);
earth.splice(6, 1, 3);
challengeTwo.innerHTML = "<h2> Challenge 2: " +earth+ "</h2>";

//  Challenge 3 ----------------------------

var challengeThreeInputA = [ 1, 1, 7, 1, 1, 1, 1 ]
var unique = function uniq(arr1) {
  return arr1.filter(function(elem, index, self) {
    return self.indexOf(elem)==self.lastIndexOf(elem);
  });
}
var aNotherDivElement = document.getElementById('challenge-3');
aNotherDivElement.innerHTML = "<h2> Challenge 3: " + unique(challengeThreeInputA) + "</h2>";


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

// Challenge 5 -------------------------------

// var array1 = [1,2];
// var array2 = [1];

var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];  
for (var n = 0; n < array1.length; n++) {
  for (var o = 0; o < array2.length; o++) {
    if (array1[n] === array2[o]) {
      array1.splice(n, 1);
    }
  }
}
var printDiv5 = document.getElementById("challenge-5");
printDiv5.innerHTML = "<h3> Challenge 5: " + array1 + "</h3>";

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
    printDiv.innerHTML += "<h3>Challenge 6: The missing number is: " + missingNumber + "</h3>";
}
challenge6(test1);
challenge6(test2);
challenge6(test3);
