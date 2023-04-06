/* Tạo menu như sau bằng javascript:

== GIẢI PHƯƠNG TRÌNH ==

1.   BẬC 1
2.   BẬC 2
3.   THOÁT

    Khi chọn 1: Gọi hàm giải phương trình bậc 1
    Khi chọn 2: Gọi hàm giải phương trình bậc 2
    Khi chọn 3: Thoát khỏi chương trình và in ra dòng chữ "Good Bye!"
*/

// ------------------------------------------------------------------------

// PTB1 :
function giaiPTB1() {
  // input 2 values and convert the values to number
  let number1 = Number(prompt("Nhap so 1"));
  let number2 = Number(prompt("Nhap so 2"));
  // check condition if the input values are both number, continue to solve the equation
  if (
    isNaN(number1) ||
    isNaN(number2) ||
    typeof number1 !== "number" ||
    typeof number2 !== "number"
  ) {
    return alert("Khong phai so, nhap lai");
  } else {
    // retrieve code from ex8.js chapter 3
    if (number1 == 0 && number2 == 0) {
      return alert("Phuong trinh vo so nghiem");
    } else if (number1 != 0 && number2 == 0) {
      return alert("Phuong trinh co mot nghiem x = 0");
    } else if (number1 == 0 && number2 != 0) {
      return alert("Phuong trinh vo nghiem");
    } else {
      let result = -number2 / number1;
      return alert(
        `Voi num1 = ${number1}, va num2 = ${number2} \n thi ${number1}x + ${number2} = ${result}`
      );
    }
  }
}

// ------------------------------------------------------------------------

// PTB2:
function giaiPTB2() {
  let a = Number(prompt("Nhap so 1"));
  let b = Number(prompt("Nhap so 2"));
  let c = Number(prompt("Nhap so 3"));

  if (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number"
  ) {
    return alert("Khong phai so, nhap lai");
  } else {
    // retrieve code from ex9.js Chapter 3
    // Calculate delta
    let delta = b * b - 4 * a * c;

    // Check all the condition
    if (a === 0) {
      if (b === 0) {
        if (c === 0) {
          return alert("Phuong trinh vo so nghiem.");
        } else {
          return alert("Phuong trinh vo nghiem.");
        }
      } else {
        let x = -c / b;
        x = Math.round(x * 100) / 100;
        return alert("Nghiem cua phuong trinh la x = " + x);
      }
    } else {
      if (delta < 0) {
        return alert("Phuong trinh vo nghiem.");
      } else if (delta === 0) {
        let x = -b / (2 * a);
        x = Math.round(x * 100) / 100;
        return alert("Phuong trinh co nghiem kep x = " + x);
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x1 = Math.round(x1 * 100) / 100;

        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = Math.round(x2 * 100) / 100;

        return alert(
          "Phuong trinh co hai nghiem kep phan biet: x1 = " +
            x1 +
            ", x2 = " +
            x2
        );
      }
    }
  }
}

// ------------------------------------------------------------------------

function menu() {
  let chooseOption;
  do {
    // console.log("== GIẢI PHƯƠNG TRÌNH ==");
    // console.log("1. BẬC 1");
    // console.log("2. BẬC 2");
    // console.log("3. THOÁT");
    // alert(" === GIẢI PHƯƠNG TRÌNH === \n 1. BẬC 1 \n 2. BẬC 2 \n 3. THOÁT");
    chooseOption = Number(
      prompt(
        "Nhập lựa chọn của bạn (1-3) \n === GIẢI PHƯƠNG TRÌNH === \n 1. BẬC 1 \n 2. BẬC 2 \n 3. THOÁT"
      )
    );
    switch (chooseOption) {
      case 1:
        giaiPTB1();
        break;
      case 2:
        giaiPTB2();
        break;
      case 3:
        console.log("Byeeeeeeee!");
        break;
      default:
        console.log("Chọn không đúng, chọn lại!");
    }
  } while (chooseOption !== 3);
}
// if else only if just allowing to choose one time.
menu();
