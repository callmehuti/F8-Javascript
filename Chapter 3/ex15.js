// Viết chương trình nhập 1 số và kiểm tra có phải số đối xứng không?

let num = prompt("Nhap so can kiem tra: ");
let isSymmetric = true;

for (let i = 0; i < num.length / 2; i++) {
  if (num[i] !== num[num.length - i - 1]) {
    isSymmetric = false;
    break;
  }
}

if (isSymmetric) {
  console.log(num + " la so doi xung");
} else {
  console.log(num + " khong la so doi xung");
}
