// Viết chương trình nhập bán kính R của hình tròn. Tính chu vi và diện tích của hình tròn đó.

// Nhap ban kinh R cua hinh tron
let R = parseFloat(prompt("Nhap ban kinh R cua hinh tron: "));

// Tinh chu vi va dien tich cua hinh tron
let circumference = 2 * Math.PI * R;
let area = Math.PI * R * R;

// In ket qua
console.log("Chu vi la: " + circumference);
console.log("Dien tich la: " + area);