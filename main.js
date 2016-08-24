// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
//
//ANSWER
function validatePIN (pin) {
    return typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin.length === 4 || pin.length === 6);
}
