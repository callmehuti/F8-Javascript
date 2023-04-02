// Viết chương trình giải phương trình bậc 2: ax^2 + bx + c = 0 (xét tất cả các trường hợp, làm tròn kết quả 2 số thập phân).

// Nhap a, b, c
let a = parseFloat(prompt("Nhập giá trị của a: "));
let b = parseFloat(prompt("Nhập giá trị của b: "));
let c = parseFloat(prompt("Nhập giá trị của c: "));

// Tinh delta
let delta = b * b - 4 * a * c;

// Kiem tra truong hop
if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      console.log("Phuong trinh vo so nghiem.");
    } else {
      console.log("Phuong trinh vo nghiem.");
    }
  } else {
    let x = -c / b;
    x = Math.round(x * 100) / 100;
    console.log("Nghiem cua phuong trinh la x = " + x);
  }
} else {
  if (delta < 0) {
    console.log("Phuong trinh vo nghiem.");
  } else if (delta === 0) {
    let x = -b / (2 * a);
    x = Math.round(x * 100) / 100;
    console.log("Phuong trinh co nghiem kep x = " + x);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x1 = Math.round(x1 * 100) / 100;

    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    x2 = Math.round(x2 * 100) / 100;

    console.log("Phuong trinh co hai nghiem kep phan biet: x1 = " + x1 + ", x2 = " + x2);
  }
}
