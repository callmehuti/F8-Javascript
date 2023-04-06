// Viết chương trình (có sử dụng hàm) giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp)

// a,b,c la gia tri nhap vao
// function giaiPTB2(a, b, c) {
//   if (arguments.length !== 3) {
//     console.log("Nhap lai cho du 3 so");
//   } else if (
//     typeof a !== "number" ||
//     typeof b !== "number" ||
//     typeof c !== "number"
//   ) {
//     console.log("Khong phai so, nhap lai");
//   } else {
//     // lay lai code ex9.js Chapter 3
//     // Tinh delta
//     let delta = b * b - 4 * a * c;

//     // Kiem tra truong hop
//     if (a === 0) {
//       if (b === 0) {
//         if (c === 0) {
//           console.log("Phuong trinh vo so nghiem.");
//         } else {
//           console.log("Phuong trinh vo nghiem.");
//         }
//       } else {
//         let x = -c / b;
//         x = Math.round(x * 100) / 100;
//         console.log("Nghiem cua phuong trinh la x = " + x);
//       }
//     } else {
//       if (delta < 0) {
//         console.log("Phuong trinh vo nghiem.");
//       } else if (delta === 0) {
//         let x = -b / (2 * a);
//         x = Math.round(x * 100) / 100;
//         console.log("Phuong trinh co nghiem kep x = " + x);
//       } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         x1 = Math.round(x1 * 100) / 100;

//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         x2 = Math.round(x2 * 100) / 100;

//         console.log(
//           "Phuong trinh co hai nghiem kep phan biet: x1 = " +
//             x1 +
//             ", x2 = " +
//             x2
//         );
//       }
//     }
//   }
// }

// giaiPTB2("5", 3, "2");
// giaiPTB2(3, [], []);
// giaiPTB2([], 3, "string");
// giaiPTB2(0, 3, "string");
// giaiPTB2(3, "string", 0);
// giaiPTB2("string", "string", 3);
// giaiPTB2(2,4,6);
// giaiPTB2(1, 0, 2);
// giaiPTB2(0, 1, 2);
// giaiPTB2(0, 0, 0);
// giaiPTB2(1, 2, 3);

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

giaiPTB2();
