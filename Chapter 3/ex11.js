// Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? Đó là tam giác gì?

// Nhap a, b, c
let a = parseFloat(prompt("Nhap a a: "));
let b = parseFloat(prompt("Nhap b: "));
let c = parseFloat(prompt("Nhap c: "));

// Kiem tra dieu kien
if (a + b > c && b + c > a && c + a > b) {
  // xac dinh tam giac gi
  if (a == b && b == c) {
    console.log("Tam giac deu");
  } else if (a == b || b == c || c == a) {
    console.log("Tam giac can");
  } else {
    console.log("Tam giac thuong");
  }
} else {
  console.log("Khong tao thanh duoc tam giac");
}
