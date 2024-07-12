const userName = "sainirahul";
let pass = 12345;
var otp = 3344;
platform = "flipkart";

// let pass = 3322; cant redeclare but reassign
// var otp = 3344; redeclare and reassign both
// const userName = "rahulsainik" cant redeclare and reassign both


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([userName, pass, otp, platform]);
