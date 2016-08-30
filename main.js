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
