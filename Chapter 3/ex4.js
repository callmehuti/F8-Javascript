// Viết chương trình nhập đáy trên a, đáy dưới b và chiều cao h của một hình thang. Tính diện tích của hình thang này.

// S = a + b / 2 x h

// Nhap gia tri day tren a va day duoi b cua hinh thang
let a = parseFloat(prompt("Nhap day tren a"));
let b = parseFloat(prompt("Nhap day duoi b "));

// Nhap chieu cao hinh thang h
let h = parseFloat(prompt("Nhap chieu cao hinh thang "));

// Tinh dien tich hinh thang
let area = ((a + b) * h) / 2;

// In ket qua
console.log("Dien tich hinh thang la : " + area);
