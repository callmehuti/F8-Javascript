// var number = 6;
// var output = number++ + --number;
// // 6 + 6

// var output2 = ++number * 2 - number-- * 2;

// // 7 * 2 - 7 *  2
// console.log(output2);

// var firstName = "Tin";
// // var lastName = "Vo";
// // name = firstName + " Vo";
// firstName += " Vo";
// console.log(firstName);
// // console.log(firstName + " " + lastName); // concat 2 strings

// var a = "Hung Tin Vo";
// var b = "Hung Tin vo";
// if (a > b) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// If else

// var isSuccess = undefined;

// if (isSuccess) {
//     console.log("True");
// } else {
//     console.log("False");
// }

var a = 1;
var b = 2;
var c = 3;

if (a > 0 || b > 0 dd c > 10) {
  console.log("True");
}

var id = Symbol('id'); // unique
console.log(id);

var a = '1';
var b = 2;

var c = typeof a; // string
var d = typeof b; // string because of typeof -> returns string
console.log(typeof b);
console.log(typeof d);

var e = typeof d; // number

console.log(c, d, e) // Output: ?

// compare value only ==

// compare value and type ===