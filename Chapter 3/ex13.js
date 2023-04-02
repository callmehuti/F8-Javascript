// Viết chương trình nhập 1 số và kiểm tra có phải số hoàn hảo không?

let num = parseInt(prompt("Nhap so can kiem tra: "));
let sum = 0;

// Kiem tra tu 1 -> num/2, neu tong bang thi la so hoan hao
for (let i = 1; i <= num / 2; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num) {
  console.log(num + " la so hoan hao.");
} else {
  console.log(num + " khong phai la so hoan hao.");
}
