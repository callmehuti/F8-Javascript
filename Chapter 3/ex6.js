// Viết chương trình nhập 2 số a, b. Tính tích, thương (chia lấy số thập phân, lấy phần dư).

// Nhap a va b
let a = parseFloat(prompt("Nhap a: "));
let b = parseFloat(prompt("Nhap b: "));

// Tinh tich cua a va b
let product = a * b;

// Tinh thuong lay so thap phan cua a va b
let quotientFloat = a / b;

// Tinh thuong lay phan du cua a va b
let quotientRemainder = a % b;

// In ket qua
console.log("Tich cua a va b la: " + product);
console.log("Thuong lay so thap phan cua a va b: " + quotientFloat);
console.log("Thuong lay phan du cua a va b: " + quotientRemainder);
