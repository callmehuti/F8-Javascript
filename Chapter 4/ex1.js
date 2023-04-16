// Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).

// function giaiPTB1(number1, number2) {
//   // Kiem tra xem nhap du 2 para khong
// //   console.log(arguments);
// //   console.log(typeof number1); // truyen vao rong () => undefined, length of argu = 0
//   if (arguments.length !== 2) {
//     console.log("Nhap lai 2 so");
//     // Neu du 2 para thi kiem tra xem phai 2 para do la so khong
//     // neu la string, object, array, thi chay lai de nhap (dung for loop, while sau)
//   } else if (typeof number1 !== "number" || typeof number2 !== "number") {
//     console.log("Khong phai so, nhap lai");
//   } else { // lay lai code tu ex8.js chapter 3
//     if (number1 == 0 && number2 == 0) {
//       console.log("Phuong trinh vo so nghiem");
//     } else if (number1 != 0 && number2 == 0) {
//       console.log("Phuong trinh co mot nghiem x = 0");
//     } else if (number1 == 0 && number2 != 0) {
//       console.log("Phuong tirnh vo nghiem");
//     } else {
//       console.log("phuong tirnh co nghiem x la: " + -number2 / number1);
//     }
//   }
// }

// giaiPTB1();
// giaiPTB1("string", 0);
// giaiPTB1("string", "hungtin");
// giaiPTB1(1, "hungtin");
// giaiPTB1("string", []);
// giaiPTB1([], 0);
// giaiPTB1("string", {name: "hungtin", age: 25});
// giaiPTB1(2, {name: "hungtin", age: 25});
// giaiPTB1(0, 0);
// giaiPTB1(2, 0);
// giaiPTB1(0, 3);
// giaiPTB1(3, 3);
// giaiPTB1(6, 3);
// giaiPTB1()

// function giaiPTB1() {
//     // input 2 values and convert the values to number
//   let number1 = Number(prompt("Nhap so 1"));
//   let number2 = Number(prompt("Nhap so 2"));
//     // check condition if the input values are both number, continue to solve the equation
//   if (
//     isNaN(number1) ||
//     isNaN(number2) ||
//     typeof number1 !== "number" ||
//     typeof number2 !== "number"
//   ) {
//     console.log("Khong phai so, nhap lai");
//   } else {
//     // retrieve code from ex8.js chapter 3
//     if (number1 == 0 && number2 == 0) {
//       console.log("Phuong trinh vo so nghiem");
//     } else if (number1 != 0 && number2 == 0) {
//       console.log("Phuong trinh co mot nghiem x = 0");
//     } else if (number1 == 0 && number2 != 0) {
//       console.log("Phuong tirnh vo nghiem");
//     } else {
//       console.log("phuong trinh co nghiem x la: " + -number2 / number1);
//     }
//   }
// }

// Bài làm
// Viết chương trình (có sử dụng hàm) giải phương trình bậc 1: ax + b = 0 (xét tất cả các trường hợp).

// function giaiPTB1() {
//   // input 2 values and convert the values to number
//   let number1 = Number(prompt("Nhap so 1"));
//   let number2 = Number(prompt("Nhap so 2"));
//   // check condition if the input values are both number, continue to solve the equation
//   if (
//     isNaN(number1) ||
//     isNaN(number2) ||
//     typeof number1 !== "number" ||
//     typeof number2 !== "number"
//   ) {
//     return alert("Khong phai so, nhap lai");
//   } else {
//     // retrieve code from ex8.js chapter 3
//     if (number1 == 0 && number2 == 0) {
//       return alert("Phuong trinh vo so nghiem");
//     } else if (number1 != 0 && number2 == 0) {
//       return alert("Phuong trinh co mot nghiem x = 0");
//     } else if (number1 == 0 && number2 != 0) {
//       return alert("Phuong trinh vo nghiem");
//     } else {
//       let result = -number2 / number1;
//       return alert(
//         `Voi num1 = ${number1}, va num2 = ${number2} \n thi ${number1}x + ${number2} = ${result}`
//       );
//     }
//   }
// }

// giaiPTB1();

var check = true;
function inputNumber(msg) {
  var number = prompt(msg);
  if (number === "" || number === null) {
    console.log("Vui lòng nhập!");
    check = false;
  }
  if (isNaN(number)) {
    console.log("Không đúng định dạng!");
    check = false;
  } else {
    return Number(number);
  }
}

function giaiPTB1(a, b) {
  if (!check) {
    alert("Lỗi khi nhập!");
  } else if (a === 0 && b === 0) {
    console.log("Phương trình vô số nghiệm!");
  } else if (a === 0 && b !== 0) {
    console.log("Phương trình vô nghiệm!");
  } else {
    console.log("Phuong trinh co nghiem x = " + -b / a);
  }
}

var a = inputNumber("Nhập hệ số a: ");
var b = inputNumber("Nhập hệ số b: ");

giaiPTB1(a, b);
