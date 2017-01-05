// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
//ANSWER
function validatePIN (pin) {
    return typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6);
}

///////////////////
//Description:

// Help Suzuki rake his garden!
//
// The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.
//
// You will be given a string representing the garden such as:
//
// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:
//
// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:
//
// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'
function rakeGarden(garden) {
	var garArr = garden.split(" ");
	for(var i = 0; i < garArr.length; i++){
		if(garArr[i] !== "gravel" && garArr[i] !== "rock"){
			garArr[i] = "gravel"
		}
	} return garArr.join(" ")

}

var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
rakeGarden(garden1)
///

//CONVERTS ROMAN NUMERAL

function romanConv(str){
	var strArr = str.split("");

	for(var i =0; i < strArr.length; i++){
		if(strArr[i] === "X"){
			strArr[i] = 10;
		}
		else if(strArr[i] === "I"){
			strArr[i] = 1;
		}
		else if(strArr[i] === "V"){
			strArr[i] = 5;
		}
	}

	return strArr.reduce(function (a, b) {
    return a + b;
});
}

var romanNum = "XXVI";

romanConv(romanNum);
//

//////////////////////////
//A square of squares/////

// You like building blocks.
 // You especially like building blocks that are squares.
 // And what you even like more, is to arrange them into a square of square building blocks!
//
// However, sometimes, you can't arrange them into a square.
// Instead, you end up with an ordinary rectangle! Those blasted things!
// If you just had a way to know, whether you're currently working in vain… Wait! That's it!
// You just have to check if your number of building blocks is a perfect square.
//ANSWER
var isSquare = function(n){
	var square = Math.sqrt(n);
	var rounded = Math.floor(square);
	if((rounded * rounded) === n ){

		return true
	}
  else{
  	return false;
  };
}

isSquare(79);
///////////



function addTwo(a, b){
  return a + b;
}
///
// REMOVES ALL SPACES AND SPECIAL CHARACTERS WITH REGEX//
////////////////////
function borrow(s){
	return s.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "");
}
////////////
//SORT WORDS IN ARRAY SMALLEST TO LARGEST//
function sortByLength (array) {
  return array.sort(function(a, b){
  	var word1 = a.split("").length;
	var word2 = b.split("").length;
  	return word1-word2
  });
}
/////Compare strings, letter can only occure once//
function longest(s1, s2) {
 	var all = (s1 + s2).split("");
 	var newArr =[];
 	var arr = all.sort();
 	for(var i =0; i < arr.length; i++){
 		if(arr[i + 1] === arr[i] || arr[i] == arr[i]){
 			newArr.push(arr[i]);
 		}
 	}
 	var winner = newArr;
 	return winner.filter(function(el, index, self){
 		return index == self.indexOf(el)
 	}).join("");
}
longest("aretheyhere", "yestheyarehere")
//////
//// Mask All but last 4 CHARACTERS of string ///
// return masked string
function maskify(cc) {
var arr = cc.split("");
for(var i = 0; i <= arr.length-5; i++){
	arr[i] = "#";
}
return arr.join("")
}
////////
//Check if string is a Pangram with Regex//
function isPangram(string){
   return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}
///
/////Sum of all the multiples of 3 or 5///
function findSum(n) {
var sum = 0;
for (var i = 0; i <= n; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
  return sum;
}
/////
//Checks if all nums are square
var isSquare = function(arr){
  if(arr.length < 1){
    return undefined
  }
  return arr.every(a => {
    var sq = Math.sqrt(a);
    if(sq % 1 === 0){
      return true
    }
    else{
      return undefined
    }
  })
}
//////
//Calculate total mean
function calculate_total(subtotal, tax, tip) {
 var addMe = (subtotal * (tax/100)) + (subtotal * (tip/100))
 var num = subtotal + addMe
 return Math.round(num * 100) / 100
}
///
