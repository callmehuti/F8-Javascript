// Viết chương trình nhập 1 số và kiểm tra có phải số nguyên tố không?

// Nhap so can kiem tra
let number = parseInt(prompt("Nhap so can kiem tra: "));

// kiem tra so nguyen to
let isPrime = true;
if (number < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Hien thi ket qua
if (isPrime) {
  console.log(number + " la so nguyen to.");
} else {
  console.log(number + " khong la so nguyen to.");
}
