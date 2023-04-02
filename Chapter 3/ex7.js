// Viết chương trình nhập vào 1 số rồi kiểm tra xem đó là số chẵn hay số lẻ.

// Nhap so can kiem tra 
let number = parseInt(prompt("Nhap so can kiem tra chan le: "));

// Kiểm tra số chẵn hay số lẻ
if (number % 2 == 0) {
  console.log(number + " la so chan.");
} else {
  console.log(number + " la so le.");
}
